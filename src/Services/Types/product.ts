export interface IReviews {
  _id?: string;
  productId?: any;
  articleId?: any;
  userId?: any;
  rating?: number;
  description: string;
  createdAt?: string;
}
export interface IGallery {
  _id?: string;
  image: string;
}

export interface IProduct {
  _id?: string;
  title: string;
  image: string;
  gallery: IGallery[];
  offPrice: number;
  price: number;
  rating: number;
  brand: string;
  quantity: number;
  sku: string;
  colors: string[];
  category: string;
  tags: string[];
  shortDescription: string;
  fullDescription: string;
  reviews?: IReviews[];
}
