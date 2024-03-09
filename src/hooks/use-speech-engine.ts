export const useSpeechEngine = (onEnd?: () => void) => {
  const speaker = window.speechSynthesis;
  let verse: SpeechSynthesisUtterance | null = null;

  const onLoad = (text: string) => {
    verse = new SpeechSynthesisUtterance(text);
    speaker.speak(verse);
    verse.onend = () => {
      if (onEnd) onEnd();
    };
  };

  const onPlay = () => {
    if (verse !== null) {
      speaker.speak(verse);
    }
  };

  return { onLoad, onPlay };
};
