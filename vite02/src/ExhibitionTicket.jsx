import React, { useState } from "react";

function ExcibitionTicketCalculator() {
    const [boy, setBoy] = useState(0);
    const [girl, setGirl] = useState(0);
    const [BoyTicketPayment, setBoyTicketPayment] = useState(0);
    const [GirlTicketPayment, setGirlTicketPayment] = useState(0);
    const [count, setCount] = useState(0);
    const [percent, setpercent] = useState(0);
    const [discount, setdiscount] = useState(0);
    const [allPrice, setallprice] = useState(0);

    const calculateTickett = () => {
        const p_boy = boy * 200;
        const p_girl = girl * 100;
        const count = boy+girl;
        const allPrice = p_boy+p_girl

        if(count > 10){
            var discount = allPrice * 0.1;
            var allPrice2 = allPrice - discount;
            var per = "10%";
            setpercent(per);
            setdiscount(discount);
            setallprice(allPrice2);

        }else{
            discount = 0;
            allPrice2 = allPrice;
            var per = "0%";
            setpercent(per);
            setdiscount(discount);
            setallprice(allPrice2);

        }

        setBoyTicketPayment(p_boy);
        setGirlTicketPayment(p_girl);
        setCount(count);      };

      return (
        <div>
          <h1>โปรแกรมค่าเข้าชมนิทรรศการ</h1>
          <div>
            <label>จำนวนเพศชาย: </label>
            <input
              type="number"
              value={boy}
              onChange={(e) => setBoy(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>จำนวนเพศหญิง: </label>
    
            <input
              type="number"
              value={girl}
              onChange={(e) => setGirl(parseFloat(e.target.value))}
            />
          </div>
          <button onClick={calculateTickett}>คำนวณ</button>
          <div>
            <h2>ค่าเข้าชมเพศชาย {boy} คน คนละ 200 บาท = {BoyTicketPayment.toFixed(2)} บาท</h2>
            <h2>ค่าเข้าชมเพศหญิง {girl} คน คนละ 200 บาท = {GirlTicketPayment.toFixed(2)} บาท</h2>
            <h2>จำนวนคนเข้าชมนิทรรศการ {count} คน ได้รับส่วนลด {percent} = {discount.toFixed(2)} บาท</h2>
            <h2>คงเหลือ {allPrice.toFixed(2)} บาท</h2>
          </div>
        </div>
      );
}

export default ExcibitionTicketCalculator;
