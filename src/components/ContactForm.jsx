import { useState, useEffect } from "react";

export default function ContactForm({ initialData, onSubmit }) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 bg-light rounded">
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          name="full_name"
          value={form.full_name}
          onChange={handleChange}
          className="form-control"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="form-control"
          type="email"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="form-control"
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          className="form-control"
          type="text"
        />
      </div>
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
}
