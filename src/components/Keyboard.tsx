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

export default function Keyboard() {
  function mouseOver(key: string): void {
    document.getElementById(key).style.backgroundColor = "#efeeee";
  }
  function mouseOut(key: string): void {
    document.getElementById(key).style.backgroundColor = "whitesmoke";
  }
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
          id={key}
          key={key}
          style={{
            backgroundColor: "whitesmoke",
            cursor: "pointer",
            padding: "24px",
            border: "0",
            boxShadow: "0 4px 6px 1px rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            color: "#1A202C",
          }}
          onMouseOver={() => mouseOver(key)}
          onMouseOut={() => mouseOut(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
}
