export async function getPosts() {
    const respuesta = await fetch(`${process.env.URL}/api/posts?populate=imagen`);
    const resultado = await respuesta.json();

    return resultado;
}