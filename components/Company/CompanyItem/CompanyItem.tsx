import React from 'react';
import Image, { StaticImageData } from 'next/image';
import css from './CompanyItem.module.css';

interface ICompanyItemProps {
  title: string
  text: string
  img_link: string
  photo: StaticImageData
};

export default function CompanyItem({ title, text, img_link, photo }: ICompanyItemProps) {
  return (
    <div className={css.item}>
      <h3>{title}</h3>
      <div className={css.content}>
        <Image
          className={css.image}
          src={photo}
          alt={img_link}
        />
        <div>
          {text}
        </div>
      </div>
    </div>
  )
}
