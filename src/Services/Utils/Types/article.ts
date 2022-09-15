import { IReviews } from "./product";

export interface IArticle {
  _id?: string;
  title: string;
  image: string;
  description: string;
  writer: string;
  createdAt?: string;
  category: string;
  reviews?: IReviews[];
}
