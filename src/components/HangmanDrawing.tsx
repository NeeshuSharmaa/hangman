const Head = (
  <div
    style={{
      width: "50px",
      height: "50px",
      border: "10px solid black",
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
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: 0,
    }}
  ></div>
);

const RightArm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const LeftArm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
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
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  ></div>
);

const LeftLeg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  ></div>
);

export default function HangmanDrawing() {
  return (
    <div style={{ position: "relative", width: "max-content" }}>
      {Head}
      {Body}
      {LeftArm}
      {RightArm}
      {LeftLeg}
      {RightLeg}
      <div
        style={{
          width: "10px",
          height: "50px",
          background: "black",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      ></div>
      <div
        style={{
          width: "200px",
          height: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          width: "10px",
          height: "400px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ width: "250px", height: "10px", background: "black" }}
      ></div>
    </div>
  );
}
