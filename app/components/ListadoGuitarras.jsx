import Guitarra from "./Guitarra";

const ListadoGuitarras = ({guitarras}) => {
  return (
    <div>
      <h2 className="heading">Nuestra Colección</h2>
      {guitarras.length && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => (
            <Guitarra guitarra={guitarra.attributes} key={guitarra.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListadoGuitarras;
