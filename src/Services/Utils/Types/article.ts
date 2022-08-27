import { IReviews } from "./product";

export interface IArticle {
  title: string;
  image: string;
  description: string;
  writer: string;
  reviews: IReviews[];
}
