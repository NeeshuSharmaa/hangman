export default function HangmanWord() {
  const word = "mark";
  const guessedLetters = ["m", "e", "g"];

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
      {word.split("").map((letter, index) => (
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
