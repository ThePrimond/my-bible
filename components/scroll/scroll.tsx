import { Flex } from "@chakra-ui/react";
import { FC } from "react";

export type ScrollProps = {
  fromVerseNumber?: number;
  verses: string[];
};

export const Scroll: FC<ScrollProps> = ({ fromVerseNumber = 0, verses }) => {
  return (
    <Flex p='24px' height='80vh' overflowY='scroll' overflowX='hidden'>
      {verses.map((v, index) => (
        <>
          {fromVerseNumber + index}: {v}
          <br />
        </>
      ))}
    </Flex>
  );
};

export default Scroll;
