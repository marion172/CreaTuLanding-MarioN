import './Card.css';
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p className="categoria">{item.categoria}</p>
      <p className="precio">Precio: ${item.precio.toLocaleString('es-AR')}</p>
      <Link to={`/item/${item.id}`} className="ver-detalle">
        Ver detalle
      </Link>
    </div>
  );
};

export default Card;
