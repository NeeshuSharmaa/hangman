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

  console.log(wordToGuess, guessedLetters, incorrectLetters);

  const isWinner: boolean = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isLoser: boolean = incorrectLetters.length === 6;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px",
        gap: "40px",
        justifyContent: "center",
      }}
    >
      {!isWinner && !isLoser && <h1>HANGMAN GAME</h1>}
      {isWinner && <h1 style={{ color: "#0ea5e9" }}> You won, hurray! </h1>}
      {isLoser && (
        <h1 style={{ color: "red" }}>You lost, Ouch! Refresh & Play again</h1>
      )}
      <div style={{ display: "flex", gap: "100px" }}>
        <HangmanDrawing numOfGuesses={incorrectLetters.length} />
        <HangmanWord
          isLoser={isLoser}
          wordToGuess={wordToGuess}
          guessedLetters={guessedLetters}
        />
      </div>

      <Keyboard
        isWinner={isWinner}
        isLoser={isLoser}
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
      />
    </div>
  );
}

export default App;
