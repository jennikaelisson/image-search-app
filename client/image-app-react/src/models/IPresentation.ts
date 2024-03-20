import { IImage } from "./IImage";
import { ISearchTime } from "./ISearchTime";
import { ISpelling } from "./ISpelling";

export interface IPresentation {
  items: IImage[];
  searchInformation: ISearchTime;
  spelling: ISpelling;
}
