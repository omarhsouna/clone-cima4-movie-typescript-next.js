export interface Filter {
  category: number[];
  type: number[];
  releaseYear: number[];
  quality: number[];
}
export type PropertyFilter = "category" | "type" | "releaseYear" | "quality";
