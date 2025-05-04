"use client";


import { GitHubBanner, type I18nProvider, Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import React, { Suspense, type PropsWithChildren } from "react";
import { useLocale, useTranslations } from "next-intl";
import { setUserLocale } from "@/shared/i18n";

type Props = {
  themeMode?: string;
};

export const RefineContext = ({
  themeMode,
  children,
}: PropsWithChildren<Props>) => {
  const t = useTranslations();

  const i18nProvider: I18nProvider = {
    translate: (key: string, options: any) => t(key, options),
    getLocale: useLocale,
    changeLocale: setUserLocale,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
            <Refine
              i18nProvider={i18nProvider}
              resources={[
                {
                  name: "blog_posts",
                  list: "/blog-posts",
                  create: "/blog-posts/create",
                  edit: "/blog-posts/edit/:id",
                  show: "/blog-posts/show/:id",
                  meta: {
                    canDelete: true,
                  },
                },
                {
                  name: "categories",
                  list: "/categories",
                  create: "/categories/create",
                  edit: "/categories/edit/:id",
                  show: "/categories/show/:id",
                  meta: {
                    canDelete: true,
                  },
                },
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
              }}
            >
              {children}
            </Refine>
    </Suspense>
  );
};