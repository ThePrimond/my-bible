import { BibleBook } from ".";

export type VerseSelection = {
  book: BibleBook;
  chapter: number | null;
  from: number | null;
  to: number | null;
};
