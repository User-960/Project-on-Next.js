import Layout from '@/components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import { ItemsByGroup, ItemGroup, PortfolioItem } from '@/models/PortfolioModels';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from "next/router";
import css from '../styles/portfolio.module.css';

const PHOTOS_API_URL: any = 'https://jsonplaceholder.typicode.com/photos/';

const prepareData = (array: PortfolioItem[]): ItemsByGroup => {
  let firstGroup: ItemGroup = ['Корпоративные сайты', []];
  let secondGroup: ItemGroup = ['CRM-системы', []];
  let thirdGroup: ItemGroup = ['Прочие проекты', []];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element.id === 1 || element.id === 2) {
      firstGroup[1].push(element);
    }

    if (element.id === 3 || element.id === 4) {
      secondGroup[1].push(element);
    }

    if (element.id > 4) {
      thirdGroup[1].push(element);
    }
  }

  return [firstGroup, secondGroup, thirdGroup];
};

export default function Portfolio() {
  const [loading, setLoading] = useState<boolean>(true);
  const [itemsByGroup, setItemsByGroup] = useState<ItemsByGroup | null>(null);

  const { push } = useRouter();

  const load = async () => {
    try {
      const { data } = await axios.get<PortfolioItem[]>(PHOTOS_API_URL);
      const prepared = prepareData(data.slice(0, 6));
      setItemsByGroup(prepared);
    } catch (e: any) {
      console.log('error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Layout>
      <h2>Наши проекты</h2>

      {loading && <p>Loading...</p>}

      {itemsByGroup?.length ? (
        <div>
          {itemsByGroup.map((group, i) => (
            <div key={i} className={css.groupWrapper}>
              <h2>{group[0]}</h2>


              <div className={css.listGroup}>
                {group[1].map(({ id, title, thumbnailUrl }) => (
                  <div
                    key={id}
                    className={css.groupItem}
                    onClick={() => {
                      push(`/portfolio/${id}`)
                    }}
                  >
                    <Image src={thumbnailUrl} width={150} height={150} alt={title} />
                    <h3>{title}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : <div>Ничего не найдено</div>}
    </Layout>
  )
};
