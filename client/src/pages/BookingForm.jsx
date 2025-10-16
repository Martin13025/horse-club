import React, {useEffect,useState} from 'react'
import API from '../api'

export default function BookingForm(){
  const [horses, setHorses] = useState([])
  const [riders, setRiders] = useState([])
  const [form, setForm] = useState({ horse:'', rider:'', date:'', durationHours:1, notes:'' })
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    API.get('/horses').then(r=>setHorses(r.data))
    API.get('/riders').then(r=>setRiders(r.data))
  },[])

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    try{
      await API.post('/bookings', { ...form, date: new Date(form.date) })
      alert('Booked!')
      setForm({ horse:'', rider:'', date:'', durationHours:1, notes:'' })
    }catch(err){
      alert(err.response?.data?.message || err.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit}>
      <h2>Booking</h2>
      <label>Rider
        <select value={form.rider} onChange={e=>setForm({...form, rider:e.target.value})}>
          <option value="">—</option>
          {riders.map(r => <option key={r._id} value={r._id}>{r.name}</option>)}
        </select>
      </label>

      <label>Horse
        <select value={form.horse} onChange={e=>setForm({...form, horse:e.target.value})}>
          <option value="">—</option>
          {horses.filter(h=>h.available).map(h => <option key={h._id} value={h._id}>{h.name} ({h.level})</option>)}
        </select>
      </label>

      <label>Date
        <input type="datetime-local" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} />
      </label>
      <label>Hours
        <input type="number" min={1} value={form.durationHours} onChange={e=>setForm({...form, durationHours: +e.target.value})} />
      </label>
      <label>Notes
        <input type="text" value={form.notes} onChange={e=>setForm({...form, notes: e.target.value})} />
      </label>

      <button type="submit" disabled={loading}>{loading ? 'Booking...' : 'Book'}</button>
    </form>
  )
}
