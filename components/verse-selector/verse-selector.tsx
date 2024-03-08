import { Button, Flex, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { BibleBook, VerseSelection, bookInfo } from "../../model";
import {
  ArrowRight,
  Article,
  Book,
  BookOpenText,
  Heart,
  Play,
  ShareFat,
} from "@phosphor-icons/react";

export type VerseSelectorProps = object;

const preSelectedVerse: VerseSelection = {
  book: BibleBook.Psalms,
  chapter: 90,
  from: 0,
  to: 16,
};

export const VerseSelector: React.FC<VerseSelectorProps> = () => {
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
      const newAvailableVerses = currentBookInfo.verses[value as number];
      setAvailableVerses(newAvailableVerses);

      // reset as verses count will be different
      updated["from"] = null;
      updated["to"] = null;
    }
    setSelection(updated);
    console.log(updated);
  };

  return (
    <Flex p='24px' gap='24px' flexDirection='column' minW='33%' maxW='50%'>
      <Select
        icon={<Book />}
        key='book'
        placeholder='Select a book'
        variant='filled'
        value={selected.book}
        onChange={(e) => onInputChange("book", e.target.value as BibleBook)}>
        {bookInfo.map((b) => (
          <option key={b.name} label={b.name} value={b.name} />
        ))}
      </Select>

      <Select
        icon={<BookOpenText />}
        key='chapter'
        placeholder='Select a chapter'
        variant='filled'
        value={selected.chapter || 0}
        onChange={(e) => onInputChange("chapter", Number(e.target.value))}>
        {Array(availableChapters)
          .fill(1)
          .map((_c, idx) => (
            <option key={idx} label={(idx + 1).toString()} value={idx} />
          ))}
      </Select>

      <Flex flexDirection='row' gap='24px' alignItems='center'>
        <Select
          icon={<Article />}
          flex='1 1 50%'
          key='from'
          placeholder='Select a starting verse'
          variant='filled'
          value={selected.from || 0}
          onChange={(e) => onInputChange("from", Number(e.target.value))}>
          {Array(availableVerses)
            .fill(1)
            .map((_sv, idx) => (
              <option key={idx} label={(idx + 1).toString()} value={idx} />
            ))}
        </Select>
        <ArrowRight fontSize={24} />
        <Select
          icon={<Article />}
          flex='1 1 50%'
          key='to'
          placeholder='Select a ending verse'
          variant='filled'
          value={selected.to || 0}
          onChange={(e) => onInputChange("to", Number(e.target.value))}>
          {Array(availableVerses)
            .fill(1)
            .map((_ev, idx) => (
              <option key={idx} label={(idx + 1).toString()} value={idx} />
            ))}
        </Select>
      </Flex>

      <Flex gap='24px' flexBasis='100%'>
        <Button w='100%' colorScheme='green' leftIcon={<Play />}>
          Play
        </Button>
        <Button w='100%' leftIcon={<Heart />}>
          Like
        </Button>
        <Button w='100%' colorScheme='whatsapp' leftIcon={<ShareFat />}>
          Share
        </Button>
      </Flex>
    </Flex>
  );
};
