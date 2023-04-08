import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../models/blog.server";
import Post from "../components/Post";
import styles from "~/styles/blog.css";


export function meta(){
  return {
    title:'GuitarLA - Blog',
    description:'Venta guitarras LA - blogs'
  }
}

export function links(){
  return [{
    rel:'stylesheet',
    href: styles
  }]
}
export async function loader(){
    const respuesta = await getPosts();
    return respuesta.data;
}

const Blog = () => {
  const posts = useLoaderData();

  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post=>(<Post key={post.id} post={post.attributes}/>))}
      </div>
    </main>
  );
};

export default Blog;
