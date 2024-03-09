import { Button, Flex, Select } from "@chakra-ui/react";
import React from "react";
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
import { useVerseSelector } from "../../hooks";

export type VerseSelectorProps = {
  onFetchVerses: (selected: VerseSelection) => Promise<void>;
};

export const VerseSelector: React.FC<VerseSelectorProps> = ({
  onFetchVerses,
}) => {
  const { selected, onInputChange, availableChapters, availableVerses } =
    useVerseSelector();

  const onPlay = () => {
    onFetchVerses(selected);
  };

  return (
    <Flex p='24px' gap='24px' flexDirection='column' minW='33%' maxW='50%'>
      <Select
        icon={<Book />}
        key='book'
        placeholder='Book'
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
        placeholder='Chapter'
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
          placeholder='Starting verse'
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
          placeholder='Ending verse'
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
        <Button
          w='100%'
          onClick={onPlay}
          colorScheme='green'
          leftIcon={<Play />}>
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
