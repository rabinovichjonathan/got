import 'bootstrap'
import Modal from './Modal'
import Personaje from './Personaje'
import useThrones from '../hooks/useThrones'

const Listado = () => {
   
    const { resultado, personajes } = useThrones()

   
    

  /*const[personajes, setPersonajes] = useState([])

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
    */

    
  
    
    
  

    

    return(
       <>
           <h1>
            Desde Listado
           </h1>
           
            {!resultado  ?<div className="row">
                                    {personajes.map( (personaje) => 
                                        <div className="col-sm-3">
                                            <div key={personaje.id} className="card">
                                                <img className="card-img-top" src={personaje.imageUrl} alt={`foto de ${personaje.firstName} ${personaje.lastName}`} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{personaje.firstName}</h5>
                                                    <h6 className="card-title">{personaje.lastName}</h6>
                                                    <h6 className="card-title">{personaje.title}</h6>
                                                    <p className="card-text">{personaje.family}</p>
                                                
                                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#${personaje.id}`}>Ver modal</button>

                                                    <Modal id ={personaje.id} nombre ={personaje.firstName} apellido ={personaje.lastName} imagen={personaje.imageUrl} family={personaje.family}/>
                                                
                                                
                                                </div>
                                            </div>
                                        </div> 
                                    )}
                            </div> : <Personaje/> 
                  
                  
                   
                
                   
                   
            }
       </> 
            
                
                
            
                
            
            
        
    )
}

export default Listado