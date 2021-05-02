import "./Header.css";
import cars from "../../Images/cars.jpg";

function Header(props) {
    return (
      <>
      <header>
        <h1>JASS SUPERCAR RENTALS</h1>
        <ul>
          <li>
            <a href="http://localhost:3000/faqs">FAQs</a>
            <a href="http://localhost:3000/reviews">Reviews</a>
            <a href="http://localhost:3000/about">About Us</a>
          </li>
        </ul>
      </header>
      <img src={cars} alt="supercars" /> 
      </>
    );
}

export default Header;

