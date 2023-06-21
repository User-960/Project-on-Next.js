import Layout from "@/components/Layout/Layout";
import { PortfolioItem } from "@/models/PortfolioModels";
import Image from 'next/image';
import Link from "next/link";
import css from '@/styles/portfolio.module.css';
import axios from "axios";

const PHOTOS_API_URL: any = 'https://jsonplaceholder.typicode.com/photos/';

interface ItemProps {
  portfolioItem: PortfolioItem;
};

export async function getServerSideProps({ params }: any) {
  const url = `${PHOTOS_API_URL}${params.id}`
  const { data } = await axios.get<PortfolioItem[]>(url);


  return {
    props: { portfolioItem: data }
  }
}

export default function Item({ portfolioItem }: ItemProps) {

  return (
    <Layout>
      <div className={css.portfolioItem}>
        <h1>Проект: {portfolioItem.title}</h1>
        <Image
          src={portfolioItem.url}
          width={400}
          height={400}
          alt={portfolioItem.title} />
        <Link className={css.portfolioLink} href="/portfolio">Назад к списку работ</Link>
      </div>
    </Layout>
  )
}
