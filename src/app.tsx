import React from "react";
import { Scroll, VerseSelector } from "./components";
import { useBibleVerses } from "./hooks";
import { Flex } from "@chakra-ui/react";

export type AppProps = object;

export const App: React.FC<AppProps> = () => {
  const { startingVerseNumber, verses, onFetchVerses } = useBibleVerses();

  return (
    <Flex gap='8px'>
      <VerseSelector onFetchVerses={onFetchVerses} />
      <Flex p='24px' alignItems='center' justifyContent='center'>
        {verses.length !== 0 && (
          <Scroll fromVerseNumber={startingVerseNumber} verses={verses} />
        )}
      </Flex>
    </Flex>
  );
};

export default App;
