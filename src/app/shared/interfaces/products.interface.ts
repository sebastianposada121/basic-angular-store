export interface ProductInterface {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: RatingInterface;
  title: string;
}

interface RatingInterface {
  rate: number;
  count: number;
}
