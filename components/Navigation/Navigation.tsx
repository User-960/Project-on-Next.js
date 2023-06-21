import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import css from './Navigation.module.css';

export default function Navigation() {
  const { pathname } = useRouter();

  return (
    <div className={css.container}>
      <ul className={css.list}>

        <li className={clsx(
          css.item,
          { ['disabled']: pathname === "/" }
        )}>
          <Link href="/">
            Главная
          </Link>
        </li>

        <li className={clsx(
          css.item,
          { ['disabled']: pathname === "/about" }
        )}>
          <Link href="/about">
            О компании
          </Link>
        </li>

        <li className={clsx(
          css.item,
          { ['disabled']: pathname === "/portfolio" }
        )}>
          <Link href="/portfolio">
            Портфолио
          </Link>
        </li>

        <li className={clsx(
          css.item,
          { ['disabled']: pathname === "/contacts" }
        )}>
          <Link href="/contacts">
            Контакты
          </Link>
        </li>

      </ul>
    </div>
  );
}
