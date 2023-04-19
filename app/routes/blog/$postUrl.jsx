import { getPost } from "../../models/blog.server";
import { useLoaderData } from "@remix-run/react";
import { formatearFecha } from "../../utils/helpers";
import styles from "~/styles/blog.css";

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);
  if (post.data.length === 0) {
    throw new Response("", { status: 404, statusText: "Blog no encontrado" });
  }

  return post;
}

export function meta({ data }) {
  if (!data) {
    return {
      title: "Blog no encontrado",
      descripcion: "Blog no encontrado",
    };
  }

  const { titulo, contenido } = data.data[0].attributes;

  return {
    title: `GuitarraLA - ${titulo}`,
    description: contenido,
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

const Post = () => {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes;

  return (
    <article className="post mt-3">
      <img className="imagen" src={imagen.data.attributes.url} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
};

export default Post;
