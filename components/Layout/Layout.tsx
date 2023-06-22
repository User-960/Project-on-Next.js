import { PropsWithChildren } from "react";
import Head from "next/head";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import { FOOTER_EMAIL } from "@/const";

export default function Layout({ children }: PropsWithChildren) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>Web Studio</title>
        <meta name="description" content="SkillFactory Next.js project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={css.container}>
        <header className={css.header}>
          <Link href="/" className={clsx(
            css.logo,
            { ['disabled']: pathname === "/" }
          )}>WEBSTUDIO</Link>
          <Navigation />
        </header>
        <main className={css.main}>{children}</main>
        <footer className={css.footer}>
          <div>&copy; 2023 Web studio</div>
          <a href={`mailto:${FOOTER_EMAIL}`}>{FOOTER_EMAIL}</a>
        </footer>
      </div>
    </>
  );
}
