import axios, { AxiosResponse } from "axios";
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
  to: number | null
) => {
  const verseRange = to ? `${from}-${to}` : `${from}`;
  const response = await bibleAPI.get<unknown, AxiosResponse<Verse>>(
    `${book} ${chapter}:${verseRange}`
  );
  const verses = response.data.verses.map((v) => v.text);
  const fromVerse = response.data.verses[0].verse;
  return { verses, fromVerse };
};
