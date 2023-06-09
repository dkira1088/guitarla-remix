import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
} from "@remix-run/react";
import Header from "~/components/Header";
import styles from "~/styles/index.css";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export function meta() {
  return {
    charset: "utf-8",
    title: "GuitarLA - Remix",
    viewport: "width=device-width,initial-scale=1",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap",
    },
  ];
}

export default function App() {
  const carritoLS = typeof window !== 'undefined'? JSON.parse(localStorage.getItem('carrito')) ?? [] : null;
  const [carrito, setCarrito] = useState(carritoLS);
  
  useEffect(()=>{
    localStorage.setItem('carrito', JSON.stringify(carrito));
  },[carrito]);

  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }

        return guitarraState;
      });

      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, guitarra]);
    }
  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad;
      }
      return guitarraState;
    });

    setCarrito(carritoActualizado);
  };

  const eliminarGuitarra = id =>{
    const carritoActualizado =  carrito.filter(producto => producto.id!== id);
    setCarrito(carritoActualizado);
  }

  return (
    <Layout>
      <Outlet
        context={{
          agregarCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra
        }}
      />
    </Layout>
  );
}

function Layout({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

/**manejo de errores */

export function CatchBoundary() {
  const error = useCatch();
  return (
    <Layout>
      <p className="error">
        {error.status} {error.statusText}
      </p>
      <Link className="error-enlace" to="/">
        Retornar a la pagina principal
      </Link>
    </Layout>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Layout>
      <p className="error">
        {error.status} {error.statusText}
      </p>
      <Link className="error-enlace" to="/">
        Retornar a la pagina principal
      </Link>
    </Layout>
  );
}
