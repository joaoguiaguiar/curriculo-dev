import './menu.scss';
import logo from '../../assets/logo.png';
import MenuLink from './menuLink';

const Menu = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className='navegacao'>
          <div className='container__logo'>
            <img src={logo} className='logo' alt='Logo icone' />
          </div>
          <div className="menu-links">
            <MenuLink to='/'>
              Start
            </MenuLink>
            <MenuLink to='/about-me'>
              About Me
            </MenuLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Menu;