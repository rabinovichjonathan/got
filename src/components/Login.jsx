import { useState } from "react"
import Swal from "sweetalert2"
import axios from "axios"
import { Link } from "react-router-dom"
import SignUp from "./SignUp"

const Login = () => {
    
    const[usuario, setUsuario] = useState('')
    const[password, setPassword] = useState('')
    


    const handleChangeUsuario = e => {
        e.preventDefault()
        setUsuario(e.target.value)
        

    }
    const handleChangePassword = e => {
        e.preventDefault()
        setPassword(e.target.value)
    }



   const validarLogin = () => {
    const validRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
  
    console.log(validRegex.test(usuario))
        if(usuario ==='' || password ==='') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes ingresar usuario y contraseña obligatoriamente!',
                footer: '<a href="">Prueba nuevamente</a>'
              })
              return
        }

        

        if(!validRegex.test(usuario)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El usuario ingresado no tiene un formato mail válido!',
                footer: '<a href="">Prueba nuevamente</a>'
              })
              return
        }

        if(password !== 'react' || usuario !== 'challenge@alkemy.org'){
        
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña invalido!',
                footer: '<a href="">Prueba nuevamente</a>'
              })
              return
        }else{
           
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Te has logueado correctamente',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    
                    
            
        }
        
            

              
    }
        
    
  
    
   
    
    return(
        <>
            <h1>Desde Login</h1>
            
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-10 col-md-8 col-lg-6">          
                       <form className="form-login"> 
                            <div className="form-outline mb-4 mt-5">
                                <input type="email" id="form2Example1" className="form-control ml-2" onChange={handleChangeUsuario}/>
                                <label className="form-label" for="form2Example1">Email address</label>
                            </div>

                            <div className="form-outline mb-4 mt-5">
                                <input type="password" id="form2Example2" className="form-control ml-2" onChange={handleChangePassword}/>
                                <label className="form-label" for="form2Example2">Password</label>
                            </div>

                            <div className="row mb-4">
                                <div className="col d-flex justify-content-center">
                                
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                        <label className="form-check-label" for="form2Example31"> Remember me </label>
                                    </div>
                                </div>

                                <div className="col">
                                   <Link to="">Forgot password?</Link>
                                </div>
                            </div>

                            
                            <button type="button" className="btn btn-primary btn-block mb-4" onClick={validarLogin}>Sign in</button>

                            
                            <div className="text-center">
                                <p>Not a member?</p><Link to="/signup">Registrate</Link>
                                <p>or sign up with:</p>
                                <button type="button" class="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                <i class="fab fa-google"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                <i class="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>                       
        </>
    )
}

export default Login