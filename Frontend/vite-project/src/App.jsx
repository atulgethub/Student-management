import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddStudent from "./pages/AddStudent";
import ViewStudents from "./pages/ViewStudents";

export default function App() {
  return (
    <div className="h-screen overflow-hidden">

      {/* Navbar (fixed top) */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="flex pt-14 h-full">

        {/* Sidebar (fixed left) */}
        <div className="fixed top-14 left-0 h-[calc(100vh-56px)] w-64">
          <Sidebar />
        </div>

        {/* Main Content (scroll only here) */}
        <div className="ml-64 mt-0 flex-1 h-[calc(100vh-56px)] overflow-y-auto bg-slate-100 p-8">
          <Routes>
            <Route path="/" element={<AddStudent />} />
            <Route path="/view" element={<ViewStudents />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}
