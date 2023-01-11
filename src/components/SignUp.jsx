import { useState } from "react"
import { PrismaClient } from '@prisma/client';

const SignUp = ({usuarios}) => {
    
    console.log(usuarios)
    
    const[mail, setMail] = useState('')
    const[contrasena, setContrasena] = useState('')
    
    const handleChangeMail = e => {
        e.preventDefault()
        setMail(e.target.value)
    }    

    const handleChangeContrasena = e => {
        e.preventDefault()
        setContrasena(e.target.value)
       
    }

    const handleSubmit = () => {
        console.log(mail)
        console.log(contrasena)
    }

    

    
    return(
        <>
            <h1>Desde Sign up</h1>
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-10 col-md-8 col-lg-6">          
                       <form className="form-login"> 
                            <div className="form-outline mb-4 mt-5">
                                <input type="email" id="form2Example1" className="form-control ml-2" onChange={handleChangeMail}/>
                                <label className="form-label" for="form2Example1">Email address</label>
                            </div>

                            <div className="form-outline mb-4 mt-5">
                                <input type="password" id="form2Example2" className="form-control ml-2" onChange={handleChangeContrasena}/>
                                <label className="form-label" for="form2Example2">Password</label>
                            </div>

                           

                            
                            <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Crear usuario</button>

                            
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
        

    )
}

export default SignUp


export const getServerSideProps = async () => {
    const prisma = new PrismaClient()
    const usuarios =  await prisma.usuario.find();

    return{
        props: {
            usuarios,
        }
    }

    
}