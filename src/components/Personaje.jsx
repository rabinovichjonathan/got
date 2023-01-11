import useThrones from "../hooks/useThrones"
import Modal from "./Modal"


const Personaje = () => {
    const {resultado} = useThrones()

    const { firstName, lastName, imageUrl, family, id } = resultado
    return(
       <>
         <h1>Resultado búsqueda</h1>
         <h2>{firstName} {lastName}</h2>
        <div className="card" Style="width: 18rem;">
            <img className="card-img-top" src={imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{firstName} {lastName}</h5>
                <p className="card-text">{family}</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#${id}`}>Ver modal</button>
                <Modal id ={id} nombre ={firstName} apellido ={lastName} imagen={imageUrl} family={family}/>
                
                
            </div>
        </div>

       </>
       
    )
}

export default Personaje