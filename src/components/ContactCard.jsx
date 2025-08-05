import { Link } from "react-router-dom";

export default function ContactCard({ contact, onDelete }) {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex align-items-center">
        <img
          src="https://randomuser.me/api/portraits/lego/2.jpg"
          alt="avatar"
          width={60}
          height={60}
          className="rounded-circle me-3"
        />
        <div className="flex-grow-1">
          <h5 className="card-title mb-1">{contact.name}</h5>
          <p className="mb-1">{contact.email}</p>
          <p className="mb-1">{contact.phone}</p>
          <p className="mb-0">{contact.address}</p>
        </div>
        <div>
          <Link to={`/edit/${contact.id}`}>
            <button className="btn btn-outline-primary btn-sm me-2">Editar</button>
          </Link>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDelete(contact.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}