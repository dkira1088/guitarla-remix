import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras, blog de musica",
  };
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image"
    },
  ];
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <div className="heading"></div>
      <div className="contenido">
        <img src={imagen} alt="imagen nosotros" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            convallis ligula. Ut orci elit, mattis et semper non, fermentum
            vitae dui. Praesent mollis at diam sit amet euismod. Suspendisse a
            dui eget ante placerat sodales ut id massa. Suspendisse scelerisque
            lacus sed enim sagittis, ut efficitur sem sollicitudin. Cras vel
            metus sit amet velit lobortis cursus. Nulla lectus tellus, mollis
            quis mattis in, feugiat eget lacus. Etiam non nibh vitae ex
            elementum luctus vel quis turpis. Donec ac tortor luctus, suscipit
            ipsum a, fringilla neque. Sed at molestie ex, a vestibulum lectus.
          </p>
          <p>
            Etiam ultrices sem consectetur lacus gravida volutpat. Etiam
            porttitor turpis eget mauris condimentum maximus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla posuere interdum ipsum. Vivamus in leo condimentum,
            faucibus nisl ac, aliquet nisi. Morbi sodales urna vitae sapien
            convallis congue. Donec eget elit dapibus lorem sagittis viverra.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
