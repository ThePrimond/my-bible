import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";

export type ScrollProps = {
  fromVerseNumber?: number;
  verses: string[];
};

export const Scroll: FC<ScrollProps> = ({ fromVerseNumber = 0, verses }) => {
  return (
    <Box
      p='24px'
      maxHeight='65vh'
      overflowY='auto'
      overflowX='hidden'
      background='linear-gradient(135deg, #f8f4e5, #ded5b8)'
      border='1px solid #9c824a'
      borderRadius='5px'
      boxShadow='0 0 10px rgba(0, 0, 0, 0.2)'
      textAlign='justify'>
      {verses.map((v, index) => (
        <span key={index}>
          <sup>
            <b>[{fromVerseNumber + index}]</b>
          </sup>
          &nbsp;
          {v}
        </span>
      ))}
    </Box>
  );
};

export default Scroll;
