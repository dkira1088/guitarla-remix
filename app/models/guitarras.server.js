export async function getGuitarras() {
    const respuesta = await fetch(`${process.env.URL}/api/guitarras?populate=imagen`);
    const resultado = await respuesta.json();

    return resultado;
}