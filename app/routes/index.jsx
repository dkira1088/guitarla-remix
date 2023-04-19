import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../models/blog.server";
import { getCurso } from "../models/cursor.server";
import { getGuitarras } from "../models/guitarras.server";
import ListadoGuitarras from "../components/ListadoGuitarras";
import ListadoPosts from "../components/ListadoPosts";
import Curso from "../components/Curso";
import stylesGuitarras from "../styles/guitarras.css";
import stylePosts from "../styles/blog.css";
import stylesCurso from '../styles/curso.css';

export function meta() {
  return {};
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylePosts,
    },
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  };
}

const Index = () => {
  const { guitarras, posts, curso } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <Curso curso={curso.attributes}/>
      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
};

export default Index;
