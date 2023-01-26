import React from 'react'
// import { useState } from 'react'
// useLocation & useHistory
const Characters = ({ data }) => {
    console.log(data.results);

    const colorStatus = {'Alive':'text-green', 'Dead':'text-red-500', 'unknown':'text-blue-500'};

  return (
    <div className='flex flex-wrap h-full w-full p-5 gap-x-5'>
        {data.results.map((character, i) => (
            <div key={i} className='relative w-56 h-85 rounded-md border-double border-4 border-green px-1/2 my-4 cursor-pointer'>
                <span className={`absolute p-4 ${colorStatus[character.status]}`}>{character.status}</span>
                <img className='w-56 h-56 border-double border-b-4 border-green' src={character.image} alt={character.name} />
                <ul className='py-10 px-2 space-y-4 text-xs'>
                    <li>{character.name}</li>
                    <li>Species: {character.species}</li>
                    <li>Type: {(character.type) ? character.type : 'No Type'}</li>
                    <li>Gender: {character.gender}</li>
                </ul>
            </div>       

        ))}
    </div>
  )
}

export default Characters