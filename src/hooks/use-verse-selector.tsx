import { useState } from "react";
import { bookInfo, VerseSelection } from "../model";
import { preSelectedVerse } from "../constants";

export const useVerseSelector = () => {
  const [selected, setSelection] = useState(preSelectedVerse);
  const [availableChapters, setAvailableChapters] = useState(
    bookInfo[18].chapters
  );

  const [availableVerses, setAvailableVerses] = useState(
    bookInfo[18].verses[preSelectedVerse.chapter!]
  );

  const onInputChange = <T extends keyof VerseSelection>(
    key: T,
    value: VerseSelection[T]
  ) => {
    const updated = { ...selected };
    updated[key] = value;
    if (key === "book") {
      //  find chapter count based on book
      const newAvailableChapters = bookInfo.find(
        (b) => b.name === value
      )?.chapters;
      setAvailableChapters(newAvailableChapters!);

      // reset as chapter count will be different
      updated["chapter"] = null;
      updated["from"] = null;
      updated["to"] = null;
    } else if (key === "chapter") {
      // find verses count based on chapter
      const currentBookInfo = bookInfo.find((b) => b.name === selected.book)!;
      const newAvailableVerses = currentBookInfo.verses[value as number] - 1;
      setAvailableVerses(newAvailableVerses);

      // reset as verses count will be different
      updated["from"] = null;
      updated["to"] = null;
    }
    setSelection(updated);
  };

  return {
    selected,
    setSelection,
    availableChapters,
    setAvailableChapters,
    availableVerses,
    setAvailableVerses,
    onInputChange,
  };
};
