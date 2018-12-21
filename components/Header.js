import Link from 'next/link'
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu'

const Header = ({ isLoggedIn, isMobile, width }) => (
    <div className="header-component">
    	<div className="logo">
    		heatseeker
    	</div>
      <div>
        <Menu>
        { isLoggedIn ? 
          ( 
          <div>
            <div>
              <Link href="/dashboard">
                <a className="menu-item">Dashboard</a>
              </Link>
            </div>
            <div>
              <Link href="/account">
                <a className="menu-item">Account</a>
              </Link>
            </div>
            <div>
              <Link href="/logout">
                <a className="menu-item">Logout</a>
              </Link>
            </div>
          </div>
          ) : ( 
          <div>
            <div>
              <Link href="/features">
                <a className="menu-item">Features</a>
              </Link>
            </div>
            <div>
              <Link href="/signup">
                <a className="menu-item">Sign up</a>
              </Link>
            </div>
            <div>
              <Link href="/login">
                <a className="menu-item">Login</a>
              </Link>
            </div>
          </div>
          ) }
        </Menu>

      </div>
  </div>
)
Header.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default Header