import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import ContactCard from "../components/ContactCard";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    fetch("https://playground.4geeks.com/contact/agendas/Nicolas")
      .then(res => res.json())
      .then(data => dispatch({ type: "set_contacts", payload: data.contacts }));
  }, [dispatch]);


  function handleDelete(id) {
    fetch(`https://playground.4geeks.com/contact/${id}`, { method: "DELETE" });
    dispatch({ type: "delete_contact", payload: id });
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4">Contact List</h2>
      {store.contacts.length === 0 ? (
        <p>No hay contactos</p>
      ) : (
        store.contacts.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};
