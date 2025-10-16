import React, {useEffect, useState} from 'react'
import API from '../api'

export default function Riders(){
  const [riders, setRiders] = useState([])
  useEffect(()=>{ API.get('/riders').then(r=>setRiders(r.data)) },[])
  return (
    <div>
      <h2>Riders</h2>
      <ul>
        {riders.map(r => (
          <li key={r._id}>{r.name} — {r.email || r.phone}</li>
        ))}
      </ul>
    </div>
  )
}
