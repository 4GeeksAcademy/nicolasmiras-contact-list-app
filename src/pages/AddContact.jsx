import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import ContactForm from "../components/ContactForm";

export const AddContact = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { id } = useParams();

  // Busca el contacto para editar (solo si hay id)
  const contactToEdit = store.contacts.find(c => c.id === Number(id));

  async function handleSubmit(form) {
    if (id) {
      // EDITAR contacto (PUT)
      const resp = await fetch(`https://playground.4geeks.com/contact/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          agenda_slug: "Nicolas"
        }),
      });
      const data = await resp.json();
      // Usa el objeto completo de la API por si hay cambios
      dispatch({ type: "edit_contact", payload: data });
    } else {
      // CREAR contacto (POST)
      const resp = await fetch("https://playground.4geeks.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          agenda_slug: "Nicolas"
        }),
      });
      const data = await resp.json();
      // Usa el objeto completo de la API
      dispatch({ type: "add_contact", payload: data });

    }
    navigate("/");
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4">{id ? "Editar" : "Agregar"} Contacto</h2>
      <ContactForm
        initialData={contactToEdit}
        onSubmit={handleSubmit}
      />
    </div>
  );
};


