import Image from "./assets/illustration-hero.svg";
import Icon from "./assets/icon-music.svg";

const Card = () => {
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
                <p className="annual">Annual Plan</p>
                <p className="card-price">$59.99/year</p>
              </div>
            </div>
            <a className="change" href="#">
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
