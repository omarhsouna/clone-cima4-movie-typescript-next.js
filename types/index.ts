export interface Filter {
  category: number[];
  type: number[];
  releaseYear: number[];
  quality: number[];
  familyStatus: boolean;
  cinemaNews: CinemaNews | undefined;
}
export type PropertyFilter = "category" | "type" | "releaseYear" | "quality";
export type CinemaNews = "newlyAdded" | "mostAdmired" | "mostWatched";
