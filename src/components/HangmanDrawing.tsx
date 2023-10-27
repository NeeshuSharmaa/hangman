const Head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      border: "10px solid rgb(26, 32, 44)",
      borderRadius: "100%",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  ></div>
);

const Body = (
  <div
    style={{
      width: "10px",
      height: "80px",
      background: "rgb(26, 32, 44)",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  ></div>
);

const RightArm = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "rgb(26, 32, 44)",
      position: "absolute",
      top: "150px",
      right: "-80px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const LeftArm = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "rgb(26, 32, 44)",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

const RightLeg = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "rgb(26, 32, 44)",
      position: "absolute",
      top: "190px",
      right: "-70px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const LeftLeg = (
  <div
    style={{
      width: "80px",
      height: "10px",
      background: "rgb(26, 32, 44)",
      position: "absolute",
      top: "190px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

type HangmanDrawingProp = {
  numOfGuesses: number;
};

const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];
export default function HangmanDrawing({ numOfGuesses }: HangmanDrawingProp) {
  return (
    <div style={{ position: "relative", width: "max-content" }}>
      {bodyParts.slice(0, numOfGuesses)}

      <div
        style={{
          width: "10px",
          height: "50px",
          background: "rgb(26, 32, 44)",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      ></div>
      <div
        style={{
          width: "200px",
          height: "10px",
          background: "rgb(26, 32, 44)",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          width: "10px",
          height: "300px",
          background: "rgb(26, 32, 44)",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          width: "250px",
          height: "10px",
          background: "rgb(26, 32, 44)",
        }}
      ></div>
    </div>
  );
}
