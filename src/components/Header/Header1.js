import "./Header.css";
import cars from "../../images/cars.jpg";
import { login, logout } from "../../services/firebase.js";

function Header1({ user }) {
  return (
    <>
      <header>
        <h1>JASS Supercar Rentals</h1>
        <ul>
          {user ? (
            <>
              <li>Welcome, {user.displayName} </li>
              <li onClick={logout} className="authlink">
                Logout
              </li>
            </>
          ) : (
            <li onClick={login} className="authlink">
              Login
            </li>
          )}
        </ul>
      </header>
      <img src={cars} alt="sports car" />
    </>
  );
}

export default Header1;
