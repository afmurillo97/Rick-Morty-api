import React from 'react'
import { useEffect, useState } from 'react'
import Characters from '../components/Characters';

const Home = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/'+ query)
    .then((res) => res.json())
    .then((data) => setData(data));
  }, [query])
  
  if(!data) {
    return (
      <div>
        <span>Cargando Personajes...</span>
      </div>
    )
  } else { 
    return (
      <div className='flex'>
        <div className='w-1/4'>
          <div className='mt-10 ml-4 px-3 p-5 h-96 bg-green'>
              <ul className='space-y-10'>
                  <li>Status</li>
                  <li>Species</li>
                  <li>Type</li>
                  <li>Gender</li>
              </ul>
          </div>
        </div>
        <div className='w-3/4'>
          <Characters data={data}/>
        </div>
      </div>
    )
  }
}

export default Home