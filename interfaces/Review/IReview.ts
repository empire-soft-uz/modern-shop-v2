import IProductMedia from "../Product/IProducMedia";

export default interface IReview {
  id: string;
  authorId: any["id"];
  createdDate: Date;
  review: string;
  rating: number;
  imgs?: Array<IProductMedia>;
}
