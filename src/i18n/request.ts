import TRANSLATION from "@/config/i18n";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookie = await cookies();
  const locale = TRANSLATION.resolveLocale(cookie.get("LOCALE")?.value);

  return {
    locale,
    messages: {
      ...(await import(`../messages/${locale}/pages.json`)),
      ...(await import(`../messages/${locale}/layouts.json`)),
    },
  };
});
