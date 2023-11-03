import React, { useState } from "react";
import "./Calculator.css";

function CarLoanCalculator() {
  const [carPrice, setCarPrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [loanTerm, setLoanTerm] = useState(1);
  const [interestRate, setInterestRate] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    const principal = carPrice - downPayment;
    const Interest = principal * (interestRate / 100) * loanTerm;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (principal + Interest) / numberOfPayments;
    setMonthlyPayment(monthlyPayment);
  };

  return (
    <div className="container">
      <div className="brand-title">คำนวณค่าผ่อนรถยนต์ต่อเดือน</div>
      <div className="inputs">
        <label>ราคารถ (บาท):</label>
          <input
            type="number"
            value={carPrice}
            onChange={(e) => setCarPrice(parseFloat(e.target.value))}
          />
        <label>เงินดาวน์ (บาท):</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(parseFloat(e.target.value))}
          />
        <label>ระยะเวลาผ่อน (ปี):</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(parseInt(e.target.value))}
          />
        <label>อัตราดอกเบี้ย (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          />
        <button onClick={calculateMonthlyPayment}>คำนวณ</button>
        <div>
          <h2>ค่าผ่อนรถยนต์ต่อเดือน: {monthlyPayment.toFixed(2)} บาท</h2>
        </div>
      </div>
    </div>
  );
}

export default CarLoanCalculator;
