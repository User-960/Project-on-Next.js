import React from 'react';
import Image from 'next/image';
import css from "./Company.module.css";

import _Kz8nHVg_tGI from "../../public/team/arlington-research-Kz8nHVg_tGI-unsplash.jpg";
import _g1Kr4Ozfoac from "../../public/team/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import _5fNmWej4tAA from "../../public/team/scott-graham-5fNmWej4tAA-unsplash.jpg";

export default function Company() {
  return (
    <div className={css.container}>
      <h2>Наш коллектив</h2>
      <div className={css.list}>

        <div className={css.item}>
          <h3>Отдел маркетинга</h3>
          <div className={css.content}>
            <Image
              className={css.image}
              src={_Kz8nHVg_tGI}
              alt="https://unsplash.com/photos/Kz8nHVg_tGI"
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum ullam ab. Mollitia sapiente consequuntur rerum laboriosam, odio ipsam doloremque vitae sit reiciendis libero eveniet recusandae et. Tempora, aliquam iure!
            </div>
          </div>
        </div>


        <div className={css.item}>
          <h3>Инженеры-разработчики</h3>
          <div className={css.content}>
            <Image
              className={css.image}
              src={_g1Kr4Ozfoac}
              alt="https://unsplash.com/photos/g1Kr4Ozfoac"
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum ullam ab. Mollitia sapiente consequuntur rerum laboriosam, odio ipsam doloremque vitae sit reiciendis libero eveniet recusandae et. Tempora, aliquam iure!
            </div>
          </div>
        </div>


        <div className={css.item}>
          <h3>Отдел продаж</h3>
          <div className={css.content}>
            <Image
              className={css.image}
              src={_5fNmWej4tAA}
              alt="https://unsplash.com/photos/5fNmWej4tAA"
            />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum ullam ab. Mollitia sapiente consequuntur rerum laboriosam, odio ipsam doloremque vitae sit reiciendis libero eveniet recusandae et. Tempora, aliquam iure!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
