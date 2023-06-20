import React from 'react';
import css from "./Company.module.css";

import _Kz8nHVg_tGI from "../../public/team/arlington-research-Kz8nHVg_tGI-unsplash.jpg";
import _g1Kr4Ozfoac from "../../public/team/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import _5fNmWej4tAA from "../../public/team/scott-graham-5fNmWej4tAA-unsplash.jpg";
import CompanyItem from './CompanyItem/CompanyItem';
import { CompanyDepartment } from '@/models/CompanyModels';

export default function Company() {
  const CompanyItemArray: CompanyDepartment[] = [
    {
      id: 1,
      title: "Отдел маркетинга",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum ullam ab. Mollitia sapiente consequuntur rerum laboriosam, odio ipsam doloremque vitae sit reiciendis libero eveniet recusandae et. Tempora, aliquam iure!",
      img_link: 'https://unsplash.com/photos/Kz8nHVg_tGI',
      photo: _Kz8nHVg_tGI
    },
    {
      id: 2,
      title: "Инженеры-разработчики",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum ullam ab. Mollitia sapiente consequuntur rerum laboriosam, odio ipsam doloremque vitae sit reiciendis libero eveniet recusandae et. Tempora, aliquam iure!",
      img_link: 'https://unsplash.com/photos/g1Kr4Ozfoac',
      photo: _g1Kr4Ozfoac
    },
    {
      id: 3,
      title: "Отдел продаж",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum ullam ab. Mollitia sapiente consequuntur rerum laboriosam, odio ipsam doloremque vitae sit reiciendis libero eveniet recusandae et. Tempora, aliquam iure!",
      img_link: 'https://unsplash.com/photos/5fNmWej4tAA',
      photo: _5fNmWej4tAA
    }
  ];

  return (
    <div className={css.container}>
      <h2>Наш коллектив</h2>
      <div className={css.list}>

        {
          CompanyItemArray.map((item: CompanyDepartment) => <CompanyItem
            key={item.id}
            title={item.title}
            text={item.text}
            img_link={item.img_link}
            photo={item.photo} />)
        }

      </div>
    </div>
  )
}
