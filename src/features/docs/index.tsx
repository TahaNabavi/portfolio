"use client";

import { LinkIcon } from "@/components/shared/icons";
import { useExpand } from "@/hooks/use-expand";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import {
  DocBlock,
  DocSection,
  PackageDoc,
  VersionDoc,
  getPackageDoc,
  getPackageDocs,
} from "./constants";

type TourPage = {
  id: string;
  group: "latest" | "version";
  groupLabel: string;
  section: DocSection;
  version?: string;
};

const codeTokenPattern =
  /(\/\/.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:import|from|const|let|var|async|await|return|export|type|interface|if|else|try|catch|new|true|false|undefined|null|as|extends|class)\b|\b[A-Z][A-Za-z0-9_]*\b|\b\d+(?:\.\d+)?\b|[{}()[\],.;:])/g;

function highlightToken(token: string) {
  if (token.startsWith("//")) return "text-[#6a9955]";
  if (/^["'`]/.test(token)) return "text-[#ce9178]";
  if (/^\d/.test(token)) return "text-[#b5cea8]";
  if (/^[{}()[\],.;:]$/.test(token)) return "text-white/45";
  if (/^[A-Z]/.test(token)) return "text-[#4ec9b0]";
  return "text-[#c586c0]";
}

function HighlightedCode({ code }: { code: string }) {
  return (
    <>
      {code.split("\n").map((line, lineIndex) => {
        const pieces = line.split(codeTokenPattern).filter(Boolean);

        return (
          <span key={`${line}-${lineIndex}`} className="block min-h-6">
            <span className="select-none pe-4 text-white/20">
              {String(lineIndex + 1).padStart(2, "0")}
            </span>
            {pieces.map((piece, pieceIndex) => {
              if (!codeTokenPattern.test(piece)) {
                codeTokenPattern.lastIndex = 0;
                return <span key={`${piece}-${pieceIndex}`}>{piece}</span>;
              }

              codeTokenPattern.lastIndex = 0;
              return (
                <span key={`${piece}-${pieceIndex}`} className={highlightToken(piece)}>
                  {piece}
                </span>
              );
            })}
          </span>
        );
      })}
    </>
  );
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const copyHandler = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-[#101314] shadow-2xl shadow-black/20">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs text-white/50">
        <span>{language}</span>
        <button
          onClick={copyHandler}
          className="pointer shrink-0 rounded-md border border-white/10 px-2 py-1 text-white/70 transition hover:border-primary-1 hover:text-primary-1"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-[#d4d4d4]">
        <code>
          <HighlightedCode code={code} />
        </code>
      </pre>
    </div>
  );
}

function BlockRenderer({ block }: { block: DocBlock }) {
  if (block.type === "p") {
    return <p className="text-sm leading-7 text-white/72 md:text-base">{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul className="grid gap-2 text-sm leading-7 text-white/72 md:text-base">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "code") {
    return <CodeBlock language={block.language} code={block.code} />;
  }

  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="min-w-[620px] w-full border-collapse text-left text-sm rtl:text-right">
          <thead className="bg-white/[0.04] text-white">
            <tr>
              {block.headers.map((header) => (
                <th key={header} className="border-b border-white/10 px-4 py-3 font-mono">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white/68">
            {block.rows.map((row) => (
              <tr key={row.join("-")} className="border-b border-white/5 last:border-b-0">
                {row.map((cell) => (
                  <td key={cell} className="px-4 py-3 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-primary-1/20 bg-primary-1/10 p-4">
      <div className="font-mono text-sm text-primary-1">{block.title}</div>
      <p className="mt-2 text-sm leading-6 text-white/75">{block.text}</p>
    </div>
  );
}

function createTourPages(doc: PackageDoc): TourPage[] {
  const latestPages = doc.sections.map((section) => ({
    id: `latest:${section.slug}`,
    group: "latest" as const,
    groupLabel: `Latest v${doc.latestVersion}`,
    section,
  }));

  const versionPages = doc.versions.flatMap((version) =>
    version.sections.map((section) => ({
      id: `version:${version.version}:${section.slug}`,
      group: "version" as const,
      groupLabel: `v${version.version}: ${version.title}`,
      section,
      version: version.version,
    })),
  );

  return [...latestPages, ...versionPages];
}

function PackageSelector({
  docs,
  open,
  onClose,
}: {
  docs: PackageDoc[];
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return docs;

    return docs.filter((item) => {
      return (
        item.name.toLowerCase().includes(normalized) ||
        item.summary.toLowerCase().includes(normalized)
      );
    });
  }, [docs, query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-start justify-center bg-black/70 px-4 pt-20 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 20 }}
            className="max-h-[calc(100dvh-6rem)] w-full max-w-2xl overflow-y-auto rounded-xl border border-white/10 bg-[#141616] p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary-1">
                  Select package
                </div>
                <h2 className="mt-1 text-2xl">Documentation</h2>
              </div>
              <button
                onClick={onClose}
                className="pointer size-10 rounded-md border border-white/10 text-white/70 transition hover:border-primary-1 hover:text-primary-1"
              >
                X
              </button>
            </div>

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoFocus
              placeholder="Search packages..."
              className="mt-4 h-12 w-full rounded-lg border border-white/10 bg-black/30 px-4 font-mono text-sm text-white outline-none transition placeholder:text-white/30 focus:border-primary-1"
            />

            <div className="mt-4 grid gap-2">
              {filtered.map((item) => (
                <button
                  key={item.slug}
                  onClick={() => {
                    router.push(`/docs/${item.slug}`);
                    onClose();
                  }}
                  className="pointer rounded-lg border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-primary-1 hover:bg-primary-1/10 rtl:text-right"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-white">{item.name}</span>
                    <span className="rounded-full border border-primary-1/20 px-3 py-1 text-xs text-primary-1">
                      v{item.latestVersion}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/60">{item.summary}</p>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PageButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? "pointer w-full rounded-md border border-primary-1/30 bg-primary-1/10 px-3 py-2 text-left text-primary-1 rtl:text-right"
          : "pointer w-full rounded-md px-3 py-2 text-left text-white/60 transition hover:bg-white/[0.04] hover:text-primary-1 rtl:text-right"
      }
    >
      {children}
    </button>
  );
}

function Sidebar({
  activeId,
  doc,
  onOpenSelector,
  onSelect,
  pages,
}: {
  activeId: string;
  doc: PackageDoc;
  onOpenSelector: () => void;
  onSelect: (id: string) => void;
  pages: TourPage[];
}) {
  const latestPages = pages.filter((page) => page.group === "latest");
  const versionGroups = doc.versions.map((version: VersionDoc) => ({
    version,
    pages: pages.filter((page) => page.version === version.version),
  }));

  return (
    <aside className="min-h-0 w-full lg:h-full lg:w-[300px]">
      <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/25 p-3 backdrop-blur">
        <button
          onClick={onOpenSelector}
          className="pointer w-full rounded-lg border border-primary-1/20 bg-primary-1/10 p-3 text-left transition hover:bg-primary-1/15 rtl:text-right"
        >
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary-1">
            Package
          </div>
          <div className="mt-1 truncate text-lg">{doc.name}</div>
          <div className="mt-1 text-xs text-white/45">Click to search and switch</div>
        </button>

        <nav className="mt-5 grid max-h-[42dvh] min-h-0 flex-1 gap-5 overflow-y-auto pe-1 font-mono text-sm lg:max-h-none">
          <div>
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/35">
              Latest v{doc.latestVersion}
            </div>
            <div className="grid gap-1">
              {latestPages.map((page, index) => (
                <PageButton
                  key={page.id}
                  active={page.id === activeId}
                  onClick={() => onSelect(page.id)}
                >
                  <span className="me-2 text-xs text-white/30">{index + 1}</span>
                  {page.section.title}
                </PageButton>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/35">
              Versioned Docs
            </div>
            <div className="grid gap-3">
              {versionGroups.map(({ version, pages: groupPages }) => (
                <div key={version.version}>
                  <div className="px-3 text-xs text-primary-1">v{version.version}</div>
                  <div className="mt-1 grid gap-1">
                    {groupPages.map((page) => (
                      <PageButton
                        key={page.id}
                        active={page.id === activeId}
                        onClick={() => onSelect(page.id)}
                      >
                        {page.section.title}
                      </PageButton>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}

function TourContent({
  currentIndex,
  onSelectIndex,
  page,
  pages,
}: {
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  page: TourPage;
  pages: TourPage[];
}) {
  const previous = pages[currentIndex - 1];
  const next = pages[currentIndex + 1];

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={page.id}
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -28 }}
        transition={{ duration: 0.28 }}
        className="min-h-[420px] rounded-xl border border-white/10 bg-black/15 p-4 sm:p-5 md:min-h-[520px] md:p-7"
      >
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
          {page.groupLabel}
        </div>
        <h2 className="mt-3 break-words text-3xl md:text-5xl">{page.section.title}</h2>
        <p className="mt-3 max-w-3xl font-mono text-sm leading-7 text-primary-1">
          {page.section.description}
        </p>

        <div className="mt-7 grid gap-5">
          {page.section.blocks.map((block, index) => (
            <BlockRenderer key={`${page.id}-${index}`} block={block} />
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <button
            disabled={!previous}
            onClick={() => onSelectIndex(currentIndex - 1)}
            className="pointer min-w-0 rounded-lg border border-white/10 px-4 py-3 text-left text-sm text-white/70 transition hover:border-primary-1 hover:text-primary-1 disabled:pointer-events-none disabled:opacity-30 rtl:text-right sm:max-w-[45%]"
          >
            <span className="block font-mono text-xs text-white/35">Previous</span>
            <span className="block truncate">{previous?.section.title ?? "Start"}</span>
          </button>
          <div className="font-mono text-xs text-white/35">
            {currentIndex + 1} / {pages.length}
          </div>
          <button
            disabled={!next}
            onClick={() => onSelectIndex(currentIndex + 1)}
            className="pointer min-w-0 rounded-lg border border-white/10 px-4 py-3 text-right text-sm text-white/70 transition hover:border-primary-1 hover:text-primary-1 disabled:pointer-events-none disabled:opacity-30 rtl:text-left sm:max-w-[45%]"
          >
            <span className="block font-mono text-xs text-white/35">Next</span>
            <span className="block truncate">{next?.section.title ?? "End"}</span>
          </button>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export function DocsPage({ packageSlug = "typefetch" }: { packageSlug?: string }) {
  useExpand(true);
  const locale = useLocale();
  const docs = getPackageDocs(locale);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const doc = getPackageDoc(locale, packageSlug) ?? docs[0];
  const pages = useMemo(() => createTourPages(doc), [doc]);
  const [activeId, setActiveId] = useState(pages[0]?.id ?? "");

  useEffect(() => {
    setActiveId(pages[0]?.id ?? "");
  }, [packageSlug, pages]);

  const currentIndex = Math.max(
    0,
    pages.findIndex((page) => page.id === activeId),
  );
  const activePage = pages[currentIndex] ?? pages[0];

  return (
    <main className="min-h-full w-full self-stretch overflow-y-auto lg:h-full lg:min-h-0 lg:overflow-hidden">
      <PackageSelector
        docs={docs}
        open={selectorOpen}
        onClose={() => setSelectorOpen(false)}
      />

      <div className="mx-auto grid min-h-full w-full max-w-7xl items-start gap-6 px-4 py-6 pb-24 sm:gap-8 sm:py-8 lg:h-full lg:min-h-0 lg:grid-cols-[300px_minmax(0,1fr)]">
        <Sidebar
          activeId={activePage.id}
          doc={doc}
          pages={pages}
          onOpenSelector={() => setSelectorOpen(true)}
          onSelect={setActiveId}
        />

        <article className="min-h-0 min-w-0 lg:h-full lg:overflow-y-auto lg:pe-1">
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b border-white/10 pb-8"
          >
            <div className="font-mono text-xs uppercase tracking-[0.22em] text-primary-1">
              Documentation
            </div>
            <h1 className="mt-3 break-words text-3xl sm:text-4xl md:text-6xl">{doc.name}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/68">{doc.summary}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <code className="max-w-full overflow-x-auto rounded-md border border-primary-1/20 bg-primary-1/10 px-3 py-2 font-mono text-sm text-primary-1">
                {doc.install}
              </code>
              <Link
                href={doc.github}
                target="_blank"
                className="pointer inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-white/75 transition hover:border-primary-1 hover:text-primary-1"
              >
                <LinkIcon className="size-4 shrink-0" />
                GitHub
              </Link>
              <Link
                href={doc.npm}
                target="_blank"
                className="pointer inline-flex min-h-10 items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-bold text-black transition hover:bg-primary-1"
              >
                <LinkIcon className="size-4 shrink-0" />
                npm
              </Link>
            </div>
          </motion.header>

          {activePage && (
            <div className="pt-8">
              <TourContent
                currentIndex={currentIndex}
                page={activePage}
                pages={pages}
                onSelectIndex={(index) => setActiveId(pages[index].id)}
              />
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
