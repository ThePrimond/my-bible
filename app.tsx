import React from "react";
import { VerseSelector } from "./components";

export type AppProps = object;

export const App: React.FC<AppProps> = () => {
  return <VerseSelector />;
};

export default App;
