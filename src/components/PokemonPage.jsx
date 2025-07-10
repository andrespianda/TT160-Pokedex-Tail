import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { getPokemonByName } from '../services/pokeapi';

export default function PokemonPage() {
    const {name} = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState('carga');

    useEffect(() => {
        async function fetchData() {

            const data = await getPokemonByName(name)
            setPokemon(data)
        }
        fetchData()

    }, [name])
    if (!pokemon) {
        return (
            <>
                <div className='text-center'>PokemonPage</div>
                <h3>Pokemon no encontrado</h3>
                <button className='bg-blue-500 text-white px-4 py-2 rounded'
                 onClick={() => navigate(-1)}>Volver al inicio</button>
            </>
        )
        
    }else if (pokemon == 'carga'){
        return ( <div className='text-center'>Cargando ando ....</div>)
    }else{
        return (
            <div className='max-w-md mx-auto p-4 text-center'>
                <h1 className='text-3xl font-bold capitalize mb-4'>{pokemon.name}</h1>
                <button className="mt-6 bg-red-600 hover:bg-red-700" onClick={() => navigate(-1)}></button>
            </div>      
        )
    }

}
