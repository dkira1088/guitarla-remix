import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/blog.server";
import ListadoPosts from "~/components/ListadoPosts";

export function meta(){
  return {
    title:'GuitarLA - Blog',
    description:'Venta guitarras LA - blogs'
  }
}

export async function loader(){
    const respuesta = await getPosts();
    return respuesta.data;
}

const Blog = () => {
  const posts = useLoaderData();

  return (
    <ListadoPosts posts = {posts}/>
  );
};

export default Blog;
