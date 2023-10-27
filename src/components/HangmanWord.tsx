export default function HangmanWord() {
  const word = "mark";
  const guessedLetters = ["m", "e", "g"];

  return (
    <div
      style={{
        display: "flex",
        fontSize: "6rem",
        gap: "0.25em",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((letter, index) => (
        <span key={index} style={{ borderBottom: "10px solid black" }}>
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
