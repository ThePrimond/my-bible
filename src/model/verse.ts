export type Verse = {
  reference: string;
  verses: VerseElement[];
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
};

export interface VerseElement {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}
