import React, {useEffect, useState} from 'react'
import API from '../api'

export default function Horses(){
  const [horses, setHorses] = useState([])
  useEffect(()=>{ API.get('/horses').then(r=>setHorses(r.data)) },[])
  return (
    <div>
      <h2>Horses</h2>
      <ul>
        {horses.map(h => (
          <li key={h._id}>
            <strong>{h.name}</strong> — {h.breed} — {h.level} — {h.available ? 'available' : 'busy'}
          </li>
        ))}
      </ul>
    </div>
  )
}
