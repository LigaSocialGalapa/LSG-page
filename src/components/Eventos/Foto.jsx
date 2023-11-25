import './Foto.css';

export function Foto({ imgUrl }) {
  return (
    <img
      className="foto"
      src={imgUrl}
      alt={imgUrl}
    />
  );
}
