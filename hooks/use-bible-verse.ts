import { useState } from "react";
import { getVerse } from "../service";
import { VerseSelection } from "../model";

export const useBibleVerses = () => {
  const [verses, setVerses] = useState<string[]>([]);
  const [startingVerseNumber, setStartingVerseNumber] = useState<number>(0);
  const onFetchVerses = async (selected: VerseSelection) => {
    const { book, chapter, from, to } = selected;
    if (book && chapter) {
      const formattedFrom = from! + 1;
      const formattedTo = to ? to + 1 : null;
      const { verses, fromVerse } = await getVerse(
        book,
        chapter + 1,
        formattedFrom,
        formattedTo
      );
      setVerses(verses);
      setStartingVerseNumber(fromVerse);
    }
  };

  return { startingVerseNumber, verses, onFetchVerses };
};
