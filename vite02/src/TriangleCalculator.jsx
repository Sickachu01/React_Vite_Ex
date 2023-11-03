import React, { useState } from "react";
import "./TriangleCalculator.css";

function TriangleAreaCalculator() {
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [area, setArea] = useState(0);

  const calculateArea = () => {
    const triangleArea = (base * height) / 2;
    setArea(triangleArea);
  };

  return (
    <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">คำนวณพื้นที่สามเหลี่ยม</div>
      <div className="input-container ic1">
        <input
          id="base"
          class="input"
          type="Number"
          onChange={(e) => setBase(parseFloat(e.target.value))}
          placeholder=" "
        />
        <div className="cut"></div>
        <label className="placeholder">ความยาวฐาน</label>
      </div>
      <div className="input-container ic2">
        <input
          id="high"
          class="input"
          type="Number"
          onChange={(e) => setHeight(parseFloat(e.target.value))}
          placeholder=" "
        />
        <div className="cut"></div>
        <label className="placeholder">ความสูง</label>
      </div>

      <button className="submit" onClick={calculateArea}>คำนวณพื้นที่</button>
      <br />
      <br />

      <p className="output">พื้นที่ของสามเหลี่ยม: {area}</p>
    </div>
  );
}

export default TriangleAreaCalculator;
