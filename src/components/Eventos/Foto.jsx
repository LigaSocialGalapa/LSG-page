import './Foto.css';

export function Foto({ imgUrl }) {
  const img = `https://drive.google.com/uc?export=download&id=${imgUrl}`;
  return (
    <img
      className="foto"
      src={img}
      alt={imgUrl}
    />
  );
}
