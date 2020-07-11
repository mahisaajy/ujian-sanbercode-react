import React, {useState} from 'react';

export default function Home() {
  const [name, setName] = useState('Mahisa Ajy Kusuma');
  return (
    <div>
      <p>Home</p>
      <p>Ini web milik {name}</p>
    </div>
    
  )
}