import { StaticImageData } from "next/image"

export interface CompanyDepartment {
  id: number
  title: string
  text: string
  img_link: string
  photo: StaticImageData
};
