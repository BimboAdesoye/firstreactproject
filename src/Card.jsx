import Image from "./assets/illustration-hero.svg";
import Icon from "./assets/icon-music.svg";
import { useState } from "react";

const Card = () => {
  let [plan, setPlan] = useState("Annual Plan");
  let [price, setPrice] = useState("$59.99/year");
  function handleChangePlan() {
    // if (plan === "Annual Plan") {
    //   setPlan("Monthly Plan");
    // } else {
    //   setPlan("Annual Plan");
    // }
    // if (price === "$59.99/year") {
    //   setPrice("$5.99/month");
    // } else {
    //   setPrice("$59.99/year");
    // }
    plan === "Annual Plan" ? setPlan("Monthly Plan") : setPlan("Annual Plan");
    price === "$59.99/year" ? setPrice("$5.99/month") : setPrice("$59.99/year");
  }
  return (
    <main>
      <div className="card">
        <div className="card-image">
          <img src={Image} alt="" />
        </div>
        <div className="card-body">
          <h2 className="card-heading">Order Summary</h2>
          <p className="card-text">
            You can now listen to millions of songs, audiobooks, podcasts on any
            device anywhere you like!
          </p>
          <div className="card-plan">
            <div className="card-plan-price">
              <img src={Icon} alt="" />
              <div>
                <p className="annual">{plan}</p>
                <p className="card-price">{price}</p>
              </div>
            </div>
            <a onClick={handleChangePlan} className="change" href="#">
              Change
            </a>
          </div>
          <a href="#" className="btn">
            Proceed to Payment
          </a>
          <a className="card-order" href="#">
            Cancel Order
          </a>
        </div>
      </div>
    </main>
  );
};

export default Card;
