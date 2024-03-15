import { Size } from "./Size";

export type Product = {
  id: number,
  imageUrl: string,
  name: string,
  count: number,
  size?: Size,
  weight: string,
}
