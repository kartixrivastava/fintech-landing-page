import { FaArrowRight, FaCreditCard, FaUniversity } from "react-icons/fa";
import { SiKlarna, SiCoinbase, SiInstacart, SiVisa } from "react-icons/si";
import { MdContactless } from "react-icons/md";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-h1">
          Get paid early<br />
          save automatically<br />
          all your pay.
        </h1>

        <p className="hero-subtext">
          Supports small businesses with simple invoicing,
          powerful integrations, and cash flow management tools.
        </p>

        <div className="hero-form">
          <input
            type="email"
            placeholder="Your business email"
            className="email-input"
          />
          <button className="get-started-btn">
            Get Started <FaArrowRight className="btn-icon" />
          </button>
        </div>

        <div className="hero-logos">
          <div className="logo-item"><SiKlarna size={24} /> Klarna.</div>
          <div className="logo-item"><SiCoinbase size={24} /> coinbase</div>
          <div className="logo-item"><SiInstacart size={24} /> instacart</div>
        </div>
      </div>

      <div className="hero-image">
        <div className="payment-ui">
          <div className="invoice-card">
            <div className="user-info">
              <div className="user-avatar">D</div>
              <div className="user-details">
                <span className="user-name">Dipa Inhouse</span>
                <span className="user-email">dipainhouse@gmail.com</span>
              </div>
            </div>
            
            <div className="invoice-details">
              <p className="invoice-label">Invoice</p>
              <h2 className="invoice-amount">$1,876,580</h2>
              <p className="invoice-date">January 14, 2026</p>
            </div>

            <div className="payment-methods">
              <div className="method active">
                <span className="method-label"><FaCreditCard /> Credit Card</span>
                <div className="radio-circle selected"></div>
              </div>
              <div className="method">
                <span className="method-label"><FaUniversity /> Bank Account</span>
                <div className="radio-circle"></div>
              </div>
            </div>
            <button className="pay-btn">Pay</button>
          </div>

          <div className="credit-card-float">
            <div className="card-top">
              <span>Credit Card</span>
              <SiVisa size={40} />
            </div>
            <div className="card-number">
              234 **** ****
            </div>
            <div className="card-bottom">
              <div className="wireless-icon"><MdContactless size={28} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
