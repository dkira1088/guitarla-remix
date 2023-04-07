import { getPosts } from "../models/blog.server";

export async function loader(){
    const respuesta = await getPosts();
    console.log(respuesta);
    return {};
}

const Blog = () => {
  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog"></div>
    </main>
  );
};

export default Blog;
