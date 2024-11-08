import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "@app/_dictionaries/i18n-config";
import logger from "@utils/logger";

function getLocale(request: NextRequest): string {
  // Check for NEXT_LOCALE cookie first
  const nextLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (
    nextLocale &&
    i18n.locales.includes(nextLocale as (typeof i18n.locales)[number])
  ) {
    logger.debug("Using NEXT_LOCALE cookie value", nextLocale);
    return nextLocale as (typeof i18n.locales)[number];
  }

  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Log the Accept-Language header
  logger.debug("Accept-Language header", negotiatorHeaders["accept-language"]);

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  logger.debug("Detected browser languages", languages);

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  logger.debug("Available locales", locales);

  const matchedLocale = match(languages, locales, i18n.defaultLocale);
  logger.debug("Matched locale", matchedLocale);

  return matchedLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  logger.debug("Current pathname", pathname);

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  logger.debug("Pathname is missing locale", pathnameIsMissingLocale);

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    logger.debug("Selected locale for redirect", locale);

    // e.g. incoming request is /products
    // The new URL is now /zh/products
    const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
    logger.debug("Redirecting to", redirectUrl.toString());

    return NextResponse.redirect(redirectUrl);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // Skip all api routes
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|_pagefind|sitemap).*)",
  ],
};
