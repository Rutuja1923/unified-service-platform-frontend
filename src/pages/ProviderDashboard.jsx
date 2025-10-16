import React, { useEffect, useState, useContext } from 'react';
import api from '../api/api';
import { AuthContext } from '../contexts/AuthContext';

export default function ProviderDashboard(){
  const { user } = useContext(AuthContext);
  const [myServices, setMyServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({ title:'', category:'', description:'', price:0, location:'', tags:'' });

  useEffect(()=>{ fetch(); fetchBookings(); }, []);

  const fetch = async () => {
    try {
      const res = await api.get('/services?mine=true'); // we'll handle server side if query provided
      setMyServices(res.data);
    } catch (e) { console.error(e); }
  };

  const fetchBookings = async () => {
    try {
      const res = await api.get('/bookings/provider');
      setBookings(res.data);
    } catch (e) { console.error(e); }
  };

  const createService = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...form, tags: form.tags.split(',').map(t=>t.trim()).filter(Boolean) };
      await api.post('/services', payload);
      alert('Service created — awaiting admin approval');
      setForm({ title:'', category:'', description:'', price:0, location:'', tags:''});
      fetch();
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Provider Dashboard</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Create Service</h3>
          <form onSubmit={createService} className="space-y-2">
            <input required placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} className="w-full p-2 border" />
            <input required placeholder="Category" value={form.category} onChange={e=>setForm({...form, category:e.target.value})} className="w-full p-2 border" />
            <input placeholder="Location" value={form.location} onChange={e=>setForm({...form, location:e.target.value})} className="w-full p-2 border" />
            <input type="number" placeholder="Price" value={form.price} onChange={e=>setForm({...form, price:e.target.value})} className="w-full p-2 border" />
            <textarea placeholder="Description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} className="w-full p-2 border" />
            <input placeholder="Tags comma separated" value={form.tags} onChange={e=>setForm({...form, tags:e.target.value})} className="w-full p-2 border" />
            <button className="px-4 py-2 bg-green-600 text-white rounded">Create</button>
          </form>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-3">Bookings</h3>
          <div className="space-y-2">
            {bookings.length === 0 && <div>No bookings</div>}
            {bookings.map(b => (
              <div key={b._id} className="p-2 border rounded">
                <div className="font-semibold">{b.service?.title}</div>
                <div className="text-sm">Customer: {b.seeker?.name} • {new Date(b.scheduledAt).toLocaleString()}</div>
                <div className="text-sm">Status: {b.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl mb-3">My Services</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {myServices.map(s => (
            <div key={s._id} className="bg-white p-3 rounded shadow">
              <div className="font-semibold">{s.title}</div>
              <div className="text-sm">{s.category} • {s.isApproved ? 'Approved' : 'Pending'}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
