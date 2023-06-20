import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <h2>К сожалению, такой страницы не существует.</h2>
      <p>Вы можете перейти на <Link href="/">главную страницу</Link>, или оставить свой комментарий на <Link href="/contacts">странице контактов</Link>.</p>
    </>
  );
}
