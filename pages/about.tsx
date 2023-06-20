import Company from "@/components/Company/Company";
import Layout from "../components/Layout/Layout";

export default function About() {
  return (
    <Layout>
      <h1>О компании</h1>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ducimus aspernatur consequatur nobis odio labore, cupiditate architecto! Vero quisquam consequuntur perspiciatis accusamus. Similique dolores voluptate impedit at deserunt vitae repellat.

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis nisi repellendus, atque corrupti facilis, ipsa adipisci vel fuga nam tempora minima, quaerat assumenda! Nisi, error laudantium esse ducimus quam quis.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat itaque officiis ad. Soluta dolores autem adipisci corporis minima deleniti, voluptas unde dolor excepturi cumque ducimus! Quos inventore esse deserunt.
        </p>
      </div>

      <Company />
    </Layout>
  );
}