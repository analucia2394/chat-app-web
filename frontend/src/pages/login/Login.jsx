import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading, login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
            backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-black'>
                    Login
                    <span className='text-pink-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text  text-black'>Nombre de usuario</span>
                        </label>
                        <input type='text' placeholder='Ingresa el nombre de usuario' className='w-full input input-bordered h-10' 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-black'>Contraseña</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Ingresa la contraseña'
                            className='w-full input input-bordered h-10' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /> 
                    </div>
                    <Link to='/signup' className='text-sm text-pink-800 hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Crear una cuenta
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border-slate-700' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
};

export default Login;


// Started code for this file
//import React from 'react'

//const Login = () => {
//    return (
//        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
//            backdrop-blur-lg bg-opacity-0'>
//                <h1 className='text-3xl font-semibold text-center text-black'>
//                    Login
//                    <span className='text-pink-500'> ChatApp</span>
//                </h1>
//
//                <form>
//                    <div>
//                        <label className='label p-2'>
//                            <span className='text-base label-text  text-black'>Nombre de usuario</span>
//                        </label>
//                        <input type='text' placeholder='Ingresa el nombre de usuario' className='w-full input input-bordered h-10' />
//                    </div>

//                    <div>
//                        <label className='label'>
//                            <span className='text-base label-text text-black'>Contraseña</span>
//                        </label>
//                        <input
//                            type='password'
//                            placeholder='Ingresa la contraseña'
//                            className='w-full input input-bordered h-10' 
//                        /> 
//                    </div>
//                    <a href='#' className='text-sm text-pink-800 hover:underline hover:text-blue-600 mt-2 inline-block'>
//                        Crear una cuenta
//                    </a>

//                    <div>
//                        <button className='btn btn-block btn-sm mt-2'>Login</button>
//                    </div>
//                    
//                </form>
//            </div>
//        </div>
//    )
//};
//
//export default Login;