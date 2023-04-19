export async function getCurso() {
    const respuesta =  await fetch(`${process.env.URL}/api/curso?populate=imagen`);
    return await respuesta.json()
}