import { Link, useLocation } from 'react-router-dom';
import './menuLink.scss';

const MenuLink = (props) => {
  const localizacao = useLocation();
  const isActive = localizacao.pathname === props.to;
  
  return (
    <Link
      className={`link ${isActive ? 'link-ativo' : ''}`}
      to={props.to}
    >
      <span className="link-text">{props.children}</span>
    </Link>
  );
}

export default MenuLink;