import { BibleBook } from "./books";

export const bookInfo: {
  name: BibleBook;
  chapters: number;
  verses?: number[];
}[] = [
  {
    name: BibleBook.Genesis,
    chapters: 50,
    verses: [
      31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33,
      38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43,
      36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26,
    ],
  },
  {
    name: BibleBook.Exodus,
    chapters: 40,
    verses: [
      22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27,
      25, 26, 37, 30, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38,
      29, 31, 43, 38,
    ],
  },
  {
    name: BibleBook.Leviticus,
    chapters: 27,
    verses: [
      17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37,
      27, 24, 33, 44, 23, 55, 46, 34,
    ],
  },
  {
    name: BibleBook.Numbers,
    chapters: 36,
    verses: [
      54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 15, 34, 45, 41, 50, 13, 32,
      22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 39, 17, 54, 42, 56, 29, 34, 13,
    ],
  },
  {
    name: BibleBook.Deuteronomy,
    chapters: 34,
    verses: [
      46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22,
      21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12,
    ],
  },
  {
    name: BibleBook.Joshua,
    chapters: 24,
    verses: [
      18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28,
      51, 9, 45, 34, 16, 33,
    ],
  },
  {
    name: BibleBook.Judges,
    chapters: 21,
    verses: [
      36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31,
      30, 48, 25,
    ],
  },
  { name: BibleBook.Ruth, chapters: 4, verses: [22, 23, 18, 22] },
  {
    name: BibleBook.First_Samuel,
    chapters: 31,
    verses: [
      28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30,
      24, 43, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13,
    ],
  },
  {
    name: BibleBook.Second_Samuel,
    chapters: 24,
    verses: [
      27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33,
      43, 26, 22, 51, 39, 25,
    ],
  },
  {
    name: BibleBook.First_Kings,
    chapters: 22,
    verses: [
      53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46,
      21, 43, 53, 20, 40, 36, 30, 25, 35, 34, 46, 34, 22, 63, 34,
    ],
  },
  {
    name: BibleBook.Second_Kings,
    chapters: 25,
    verses: [
      18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 20, 22, 25, 29, 38, 20, 41, 37,
      37, 21, 26, 20, 37, 20, 30,
    ],
  },
  {
    name: BibleBook.First_Chronicles,
    chapters: 29,
    verses: [
      54, 55, 24, 43, 41, 66, 40, 40, 44, 14, 47, 41, 14, 17, 29, 43, 27, 17,
      19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30, 17, 19, 11, 20, 32, 32, 23, 23,
      28, 18, 12, 29, 25,
    ],
  },
  {
    name: BibleBook.Second_Chronicles,
    chapters: 36,
    verses: [
      17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 23, 14, 19, 14, 19, 34,
      11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23,
    ],
  },
  {
    name: BibleBook.Ezra,
    chapters: 10,
    verses: [11, 70, 13, 24, 17, 22, 28, 36, 15, 44],
  },
  {
    name: BibleBook.Nehemiah,
    chapters: 13,
    verses: [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31],
  },
  {
    name: BibleBook.Esther,
    chapters: 10,
    verses: [22, 23, 15, 17, 14, 14, 10, 17, 32, 3, 17, 8, 30, 16, 24],
  },
  {
    name: BibleBook.Job,
    chapters: 42,
    verses: [
      22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21,
      29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24,
      41, 30, 32, 26, 17,
    ],
  },
  {
    name: BibleBook.Psalms,
    chapters: 150,
    verses: [
      6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13,
      31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 36, 12, 9, 28, 13,
      25, 11, 22, 23, 28, 13, 40, 23, 14, 18, 14, 12, 5, 27, 18, 12, 10, 15, 21,
      23, 21, 11, 7, 9, 24, 14, 12, 12, 18, 14, 9, 13, 12, 11, 14, 20, 8, 36,
      37, 6, 24, 20, 28, 23, 11, 13, 21, 72, 13, 20, 17, 8, 19, 13, 14, 17, 7,
      19, 53, 17, 16, 16, 5, 23, 11, 13, 12, 9, 9, 5, 8, 29, 22, 35, 45, 48, 43,
      14, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8,
      8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 14, 10, 8, 12, 15, 21, 10, 20, 14, 9, 6,
    ],
  },
  {
    name: BibleBook.Proverbs,
    chapters: 31,
    verses: [
      33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24,
      29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31,
    ],
  },
  {
    name: BibleBook.Ecclesiastes,
    chapters: 12,
    verses: [18, 26, 22, 17, 19, 12, 30, 29, 17, 18, 20, 10, 14],
  },
  {
    name: BibleBook.Song_of_Solomon,
    chapters: 8,
    verses: [17, 17, 11, 16, 16, 13, 13, 14],
  },
  {
    name: BibleBook.Isaiah,
    chapters: 66,
    verses: [
      31, 22, 26, 6, 30, 13, 25, 23, 20, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6,
      17, 25, 18, 23, 12, 21, 13, 15, 16, 20, 21, 22, 11, 12,
    ],
  },
  {
    name: BibleBook.Jeremiah,
    chapters: 52,
    verses: [
      52, 37, 30, 31, 31, 30, 34, 23, 25, 25, 23, 17, 27, 22, 21, 21, 27, 23,
      15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32,
      21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34, 22, 34, 22,
      30, 48, 47, 64, 33, 33, 40, 55, 48, 34, 69, 52, 43, 56, 59, 30, 29, 18,
      65, 25, 24, 32, 44, 23, 19, 24, 23, 33, 34, 10, 17, 66, 20, 25, 20, 29,
      22, 26, 20, 37, 20, 37, 20, 30, 21, 13, 27, 28, 23, 9, 27, 36, 27, 21, 33,
      25, 33, 27, 23, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6,
    ],
  },
  { name: BibleBook.Lamentations, chapters: 5, verses: [22, 22, 66, 22, 22] },
  {
    name: BibleBook.Ezekiel,
    chapters: 48,
    verses: [
      28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14,
      49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28,
      23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35,
    ],
  },
  {
    name: BibleBook.Daniel,
    chapters: 12,
    verses: [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13, 64, 42],
  },
  {
    name: BibleBook.Hosea,
    chapters: 14,
    verses: [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9],
  },
  { name: BibleBook.Joel, chapters: 3, verses: [20, 32, 21] },
  {
    name: BibleBook.Amos,
    chapters: 9,
    verses: [15, 16, 15, 13, 27, 14, 17, 14, 15],
  },
  { name: BibleBook.Obadiah, chapters: 1, verses: [21] },
  { name: BibleBook.Jonah, chapters: 4, verses: [17, 10, 10, 11] },
  { name: BibleBook.Micah, chapters: 7, verses: [16, 13, 12, 13, 15, 16, 20] },
  { name: BibleBook.Nahum, chapters: 3, verses: [15, 13, 19] },
  { name: BibleBook.Habakkuk, chapters: 3, verses: [17, 20, 19] },
  { name: BibleBook.Zephaniah, chapters: 3, verses: [18, 15, 20] },
  { name: BibleBook.Haggai, chapters: 2, verses: [15, 23] },
  {
    name: BibleBook.Zechariah,
    chapters: 14,
    verses: [
      21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 21, 9, 17, 14, 8, 20, 17, 9, 13,
      14,
    ],
  },
  { name: BibleBook.Malachi, chapters: 4, verses: [14, 17, 18, 6] },
  {
    name: BibleBook.Matthew,
    chapters: 28,
    verses: [
      25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35,
      30, 34, 46, 46, 39, 51, 46, 75, 66, 20,
    ],
  },
  {
    name: BibleBook.Mark,
    chapters: 16,
    verses: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20],
  },
  {
    name: BibleBook.Luke,
    chapters: 24,
    verses: [
      80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43,
      48, 47, 38, 71, 56, 53,
    ],
  },
  {
    name: BibleBook.John,
    chapters: 21,
    verses: [
      51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40,
      42, 31, 25,
    ],
  },
  {
    name: BibleBook.Acts,
    chapters: 28,
    verses: [
      26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28,
      40, 38, 40, 30, 35, 27, 27, 32, 44, 31,
    ],
  },
  {
    name: BibleBook.Romans,
    chapters: 16,
    verses: [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27],
  },
  {
    name: BibleBook.First_Corinthians,
    chapters: 16,
    verses: [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24],
  },
  {
    name: BibleBook.Second_Corinthians,
    chapters: 13,
    verses: [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 13],
  },
  { name: BibleBook.Galatians, chapters: 6, verses: [24, 21, 29, 31, 26, 18] },
  { name: BibleBook.Ephesians, chapters: 6, verses: [23, 22, 21, 32, 33, 24] },
  { name: BibleBook.Philippians, chapters: 4, verses: [30, 30, 21, 23] },
  { name: BibleBook.Colossians, chapters: 4, verses: [29, 23, 25, 18] },
  {
    name: BibleBook.First_Thessalonians,
    chapters: 5,
    verses: [10, 20, 13, 18, 28],
  },
  { name: BibleBook.Second_Thessalonians, chapters: 3, verses: [12, 17, 18] },
  {
    name: BibleBook.First_Timothy,
    chapters: 6,
    verses: [20, 15, 16, 16, 25, 21],
  },
  { name: BibleBook.Second_Timothy, chapters: 4, verses: [18, 26, 17, 22] },
  { name: BibleBook.Titus, chapters: 3, verses: [16, 15, 15] },
  { name: BibleBook.Philemon, chapters: 1, verses: [25] },
  {
    name: BibleBook.Hebrews,
    chapters: 13,
    verses: [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25],
  },
  { name: BibleBook.James, chapters: 5, verses: [27, 26, 18, 17, 20] },
  { name: BibleBook.First_Peter, chapters: 5, verses: [25, 25, 22, 19, 14] },
  { name: BibleBook.Second_Peter, chapters: 3, verses: [21, 22, 18] },
  { name: BibleBook.First_John, chapters: 5, verses: [10, 29, 24, 21, 21] },
  { name: BibleBook.Second_John, chapters: 1, verses: [13] },
  { name: BibleBook.Third_John, chapters: 1, verses: [15] },
  { name: BibleBook.Jude, chapters: 1, verses: [25] },
  {
    name: BibleBook.Revelation,
    chapters: 22,
    verses: [
      20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 18, 18, 20, 8, 21, 18, 24, 21,
      15, 27, 21,
    ],
  },
];
