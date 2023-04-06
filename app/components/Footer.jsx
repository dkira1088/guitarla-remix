import { Link } from "@remix-run/react";
import React from "react";
import Navegacion from "./Navegacion";

const Footer = () => {
  return <footer className="footer">
    <div className="contenedor barra">
        <Navegacion/>
        <p className="copyright">todos los derechos reservados {new Date().getFullYear()}</p>
    </div>
  </footer>;
};

export default Footer;
