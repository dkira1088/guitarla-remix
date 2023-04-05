import { Link, useLocation } from "@remix-run/react";
import Logo from "../../public/img/logo.svg";

const Header = () => {
  const localtion = useLocation();

  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/">
          <img className="logo" src={Logo} alt="Imagen Logo" />
        </Link>
        <nav className="navegacion">
          <Link to="/" className={localtion.pathname === '/' ? 'active':''}>Inicio</Link>
          <Link to="/nosotros" className={localtion.pathname === '/nosotros' ? 'active':''}>Nosotros</Link>
          <Link to="/tienda" className={localtion.pathname === '/tienda' ? 'active':''}>Tienda</Link>
          <Link to="/blog"className={localtion.pathname === '/blog' ? 'active':''}>Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
