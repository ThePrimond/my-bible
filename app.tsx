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
      <Scroll fromVerseNumber={startingVerseNumber} verses={verses} />
    </Flex>
  );
};

export default App;
