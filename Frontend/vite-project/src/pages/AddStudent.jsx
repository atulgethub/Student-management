import { useState } from "react";
import { addStudent } from "../services/api";

export default function AddStudent() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    reg: "",
    section: "",
    roll: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStudent(form);
      alert("Student added successfully!");
      setForm({ first:"", last:"", reg:"", section:"", roll:"" });
    } catch (err) {
      alert("Error adding student");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg max-w-md space-y-4 ">
      <h2 className="text-2xl font-bold text-center">Student Registration</h2>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          placeholder={`Enter ${key}`}
          className="w-full p-2 border rounded"
        />
      ))}

      <button className="w-full bg-sky-500 text-white py-2 rounded">
        Submit
      </button>
    </form>
    </div>
  );
}
