import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const ThronesContext = createContext()

const ThronesProvider = ({children}) => {
    
    const[personajes, setPersonajes] = useState([])

   const obtenerPersonajes = async () => {
        try {
            
            const url = 'https://thronesapi.com/api/v2/Characters'
            
                const result = await axios.get(url)
            
            
            setPersonajes(result.data)
            
        } catch (error) {
            console.error(error)
        }
        
    }  
    
    useEffect(() => {
        obtenerPersonajes()
    }, [])
    
    
    
    
    
    const [buscadorId, setBuscadorId] = useState()

    const[resultado, setResultado] = useState()

    const datoBusqueda = (e) => {
        e.preventDefault()
       
        if(e.target.value){
            setBuscadorId(e.target.value)
        }else{
            setResultado('')
        }
        
        
        
    }

    const handleBuscarClick = async () => {
        
            try {
                const urlId = `https://thronesapi.com/api/v2/Characters/${buscadorId}`
                const resultId = await axios(urlId)
                console.log(urlId)
                setResultado(resultId.data)
                setBuscadorId('')
                
                
  
              } catch (error) {
                  console.error(error)
              }
        
    }
    

    

    return(
        <ThronesContext.Provider
            value={{resultado, datoBusqueda, handleBuscarClick, buscadorId, personajes, obtenerPersonajes}}
        >
            {children}
        </ThronesContext.Provider>
    )
}

export {
    ThronesProvider
}
export default ThronesContext