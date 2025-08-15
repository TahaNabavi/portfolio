import TRANSLATION from "@/config/i18n";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookie = await cookies();
  const locale = cookie.get("LOCALE")?.value || TRANSLATION.default;

  return {
    locale,
    messages: {
      ...(await import(`../messages/${locale}/pages.json`)),
      ...(await import(`../messages/${locale}/layouts.json`)),
    },
  };
});
