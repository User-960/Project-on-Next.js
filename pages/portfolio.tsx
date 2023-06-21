import Layout from '@/components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import { ItemsByGroup, ItemGroup, PortfolioItem } from '@/models/PortfolioModels';
import axios from 'axios';

const PHOTOS_API_URL: any = 'https://jsonplaceholder.typicode.com/photos';

const prepareData = (array: PortfolioItem[]): ItemsByGroup => {
  let firstGroup: ItemGroup = ['Корпоративные сайты', []];
  let secondGroup: ItemGroup = ['CRM-системы', []];
  let thirdGroup: ItemGroup = ['Прочие проекты', []];

  if (array[0] && array[1]) {
    firstGroup[1].push(array[0], array[1]);
  }

  if (array[2] && array[3]) {
    secondGroup[1].push(array[2], array[3]);
  }

  if (array[4] && array[5]) {
    thirdGroup[1].push(array[4], array[5]);
  }

  return [firstGroup, secondGroup, thirdGroup];
};

export default function Portfolio() {
  const [loading, setLoading] = useState<boolean>(true);
  const [itemsByGroup, setItemsByGroup] = useState<ItemsByGroup | null>(null);

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
    </Layout>
  )
};
