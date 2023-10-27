type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
};
export default function HangmanWord({
  wordToGuess,
  guessedLetters,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        fontSize: "4rem",
        gap: "0.25em",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: "6px solid rgb(26, 32, 44)" }}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
