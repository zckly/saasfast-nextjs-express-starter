import Link from 'next/link'
import PropTypes from 'prop-types';
import { push as Menu } from 'react-burger-menu'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: props.isLoggedIn,
      menuOpen: false
    }
    this.handleMenuClick = this.handleMenuClick.bind(this)
  }
  handleMenuClick(event) {
      event.preventDefault();
      // Using the parent component's state to keep track of the menu
      this.setState({menuOpen: false});
      Router.push(`/checkout?q=${this.state.newQuery}`, `/checkout/${this.state.newQuery}`)
  }
  render() {
    const {menuOpen, isLoggedIn} = this.state
    return (
        <div className="header-component">
          <div className="logo">
            <Link href='/'><a className='logo-link' >saasfast</a></Link>
          </div>
          <div>
            <Menu noOverlay isOpen={ menuOpen } pageWrapId={ "page-wrap" } >
            { isLoggedIn ? 
              ( 
              <div>
                <div>
                  <Link  href="/dashboard">
                    <a className="menu-item">Dashboard</a>
                  </Link>
                </div>
                <br/>
                <div>
                  <Link href="/about">
                    <a  className="menu-item">About</a>
                  </Link>
                </div>
                <br/>
                <div>
                  <Link href="/logout">
                    <a  className="menu-item">Logout</a>
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
                <br/>
                <div>
                  <Link href="/about">
                    <a className="menu-item">About</a>
                  </Link>
                </div>
                <br />
                <div>
                  <Link href="/signup">
                    <a className="menu-item">Sign Up</a>
                  </Link>
                </div>
                <br />
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
    );
  }
}
Header.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default Header