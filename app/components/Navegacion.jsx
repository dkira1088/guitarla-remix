import React from "react";
import { Link, useLocation } from "@remix-run/react";

const Navegacion = () => {
  const location = useLocation();
  return (
    <div>
      {" "}
      <nav className="navegacion">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Inicio
        </Link>
        <Link
          to="/nosotros"
          className={location.pathname === "/nosotros" ? "active" : ""}
        >
          Nosotros
        </Link>
        <Link
          to="/tienda"
          className={location.pathname === "/tienda" ? "active" : ""}
        >
          Tienda
        </Link>
        <Link
          to="/blog"
          className={location.pathname === "/blog" ? "active" : ""}
        >
          Blog
        </Link>
      </nav>
    </div>
  );
};

export default Navegacion;