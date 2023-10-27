import { useState, useEffect } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
  const giveWord = words[Math.floor(Math.random() * words.length)];
  const [wordToGuess, setWordToGuess] = useState<string>(
    giveWord.toUpperCase()
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters: string[] = guessedLetters.filter(
    (letter: string) => !wordToGuess.includes(letter)
  );
  const [reveal, setReveal] = useState();
  console.log(wordToGuess, guessedLetters, incorrectLetters);

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
      <HangmanDrawing
        numOfGuesses={incorrectLetters.length}
        setReveal={setReveal}
      />
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <Keyboard
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
      />
    </div>
  );
}

export default App;
