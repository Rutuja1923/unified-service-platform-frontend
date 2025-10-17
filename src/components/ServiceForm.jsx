import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ServiceForm({ refreshServices }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [provider, setProvider] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category) {
      alert("Please fill required fields!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/services", {
        name: title,
        category,
        description,
        provider,
        price,
        image,
      });

      if (res.status === 201 || res.status === 200) {
        alert("Service added successfully!");
        // Reset form
        setTitle("");
        setCategory("");
        setDescription("");
        setProvider("");
        setPrice("");
        setImage("");
        // Optional: refresh services list in parent component
        if (refreshServices) refreshServices();
        // Navigate back to services page
        navigate("/services");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Error adding service. Check console.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded shadow"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Add New Service</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Service Name"
          className="w-full p-2 border mb-2 rounded"
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border mb-2 rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="Household">Household</option>
          <option value="Women’s">Women’s</option>
          <option value="Medicine">Medicine</option>
          <option value="Education">Education</option>
          <option value="Tech">Tech</option>
          <option value="Automotive">Automotive</option>
        </select>

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-2 border mb-2 rounded"
        />

        <input
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          placeholder="Provider Name"
          className="w-full p-2 border mb-2 rounded"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full p-2 border mb-2 rounded"
        />

        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="w-full p-2 border mb-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
        >
          Add Service
        </button>
      </form>
    </div>
  );
}
