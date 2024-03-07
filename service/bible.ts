import axios from "axios";
import { BibleBook } from "../model";
import { Verse } from "../model/verse";

export const bibleAPI = axios.create({
  baseURL: "https://bible-api.com/",
  timeout: 2500,
});

export const getVerse = async (
  book: BibleBook,
  chapter: number,
  from: number,
  to?: number
) => {
  const verseRange = to ? `${from}-${to}` : `${from}`;
  const response = await bibleAPI.get<unknown, Verse>(
    `${book} ${chapter}:${verseRange}`
  );
  const verses = response.text;
  return verses;
};
