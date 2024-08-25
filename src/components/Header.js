import { LOGO_URL } from '../utils/constants';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnNameLogin, setBtnNameLogin] = useState('Login');

  useEffect(() => {
    console.log('useEffect called');
  }, [btnNameLogin]);

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameLogin === 'Login'
                ? setBtnNameLogin('Logout')
                : setBtnNameLogin('Login');
            }}
          >
            {btnNameLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
