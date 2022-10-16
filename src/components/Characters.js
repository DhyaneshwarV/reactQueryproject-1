import React,{useState} from 'react'
import Axios from 'axios';
import { useQuery } from 'react-query'; 
import Character from './Character';
function Characters() { 
    const [page, setpage] = useState(1);
    const fetchcharacters=()=>Axios.get(`https://rickandmortyapi.com/api/character?page=${page}`).then(res=>res.data)
    const {data,isLoading,isError}=useQuery(["characters",page],fetchcharacters,
    {
        keepPreviousData:true,
    })
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>Error</h2>
    }
  return (
    <div className=''>
        {data.results.map(character=><div key={character.id}><Character character={character}/></div>)}
        {/* <div key={character.id}>{character.name} */}
        <button disabled={page===1} onClick={()=>setpage(prev=>prev-1)}>Previos</button>
        <button disabled={data.info.next===null} onClick={()=>setpage(prev=>prev+1)}>Next</button>
        
    </div>
    
  )
}

export default Characters
