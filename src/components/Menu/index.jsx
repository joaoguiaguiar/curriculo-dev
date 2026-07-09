import './menu.scss';
import MenuLink from './menuLink';

const Menu = () => {
  const links = [
    { to: '/inicio', label: 'Início' },
    { to: '/sobre', label: 'Sobre mim' },
    { to: '/curriculo', label: 'Currículo' },
    { to: '/tecnologias', label: 'Tecnologias' },
    { to: '/portfolio', label: 'Portfólio' },
    { to: '/contato', label: 'Contato' },
  ];

  return (
    <header className="header">
      <div className="container">
        <nav className='navegacao'>
          <div className="menu-links">
            {links.map((link) => (
              <MenuLink key={`${link.to}-${link.label}`} to={link.to}>
                {link.label}
              </MenuLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
