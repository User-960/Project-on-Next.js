import Link from 'next/link';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <Link href="/">
            Главная
          </Link>
        </li>
        <li className={css.item}>
          <Link href="/about">
            О компании
          </Link>
        </li>
        <li className={css.item}>
          <Link href="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </div>
  );
}
