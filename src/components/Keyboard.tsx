import "./components.css";

const keys = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
type KeyboardProp = {
  wordToGuess: string;
  guessedLetters: string[];
  setGuessedLetters: (prevState: string[]) => void;
};
export default function Keyboard({
  wordToGuess,
  guessedLetters,
  setGuessedLetters,
}: KeyboardProp) {
  function updateGuessedLetters(key: string): void {
    setGuessedLetters([...guessedLetters, key]);
  }
  const keyAdditionalStyle = (key: string): string =>
    wordToGuess.includes(key) && guessedLetters.includes(key) ? "active" : "";
  return (
    <div
      style={{
        display: "grid",
        alignSelf: "stretch",
        gap: "10px",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
      }}
    >
      {keys.map((key) => (
        <button
          className={`key ${keyAdditionalStyle(key)}`}
          id={key}
          key={key}
          disabled={guessedLetters.includes(key)}
          onClick={() => updateGuessedLetters(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
}
