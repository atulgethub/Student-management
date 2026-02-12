import { useEffect, useState } from "react";
import { getStudents, deleteStudent, updateStudent } from "../services/api";

export default function ViewStudent() {
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    first: "",
    last: "",
    reg: "",
    section: "",
    roll: ""
  });

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this student?")) {
      await deleteStudent(id);
      loadStudents();
    }
  };

  const handleEdit = (student) => {
    setEditId(student._id);
    setEditData({ ...student });
  };

  const handleUpdate = async () => {
    await updateStudent(editId, editData);
    setEditId(null);
    loadStudents();
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">
        All Students
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-200">
            <tr>
              {["First", "Last", "Reg", "Section", "Roll", "Actions"].map(h => (
                <th key={h} className="p-3 border">{h}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s._id} className="hover:bg-slate-50">

                {editId === s._id ? (
                  <>
                    {["first","last","reg","section","roll"].map((f) => (
                      <td key={f} className="p-2 border">
                        <input
                          className="w-full p-1 border rounded"
                          value={editData[f]}
                          onChange={(e) =>
                            setEditData({ ...editData, [f]: e.target.value })
                          }
                        />
                      </td>
                    ))}
                    <td className="p-2 border">
                      <button
                        onClick={handleUpdate}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 mr-2"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-2 border">{s.first}</td>
                    <td className="p-2 border">{s.last}</td>
                    <td className="p-2 border">{s.reg}</td>
                    <td className="p-2 border">{s.section}</td>
                    <td className="p-2 border">{s.roll}</td>
                    <td className="p-2 border">
                      <button
                        onClick={() => handleEdit(s)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(s._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
