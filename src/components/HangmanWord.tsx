type HangmanWordProps = {
  isLoser: boolean;
  wordToGuess: string;
  guessedLetters: string[];
};
export default function HangmanWord({
  isLoser,
  wordToGuess,
  guessedLetters,
}: HangmanWordProps) {
  const reveal = isLoser;
  console.log(reveal);
  return (
    <div
      style={{
        display: "flex",
        fontSize: "4rem",
        gap: "0.25em",
        textTransform: "uppercase",
        fontFamily: "monospace",
        alignSelf: "center",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: "6px solid rgb(26, 32, 44)" }}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
