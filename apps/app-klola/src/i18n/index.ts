"use server";

import { cookies } from "next/headers";
import { DEFAULT_LOCALE } from "./config";
import { I18N_COOKIE_NAME } from "./config";

export async function getUserLocale() {

  return (await cookies()).get(I18N_COOKIE_NAME)?.value || DEFAULT_LOCALE;
}

export async function setUserLocale(locale: string) {
 (await cookies()).set(I18N_COOKIE_NAME, locale);
}