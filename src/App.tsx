import { useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string>([]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        gap: "40px",
        justifyContent: "center",
      }}
    >
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}

export default App;
