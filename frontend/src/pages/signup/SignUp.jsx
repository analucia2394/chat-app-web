import React from 'react'
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
            backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-black'>
                    Registro
                    <span className='text-pink-500'> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text  text-black'>Nombre completo</span>
                        </label>
                        <input type='text' placeholder='Ejem: John Doe' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-black'>Nombre de usuario</span>
                        </label>
                        <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-black'>Contraseña</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Ingresa la contraseña'
                            className='w-full input input-bordered h-10'
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-black'>Confirmar</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirma la contraseña'
                            className='w-full input input-bordered h-10'
                        />
                    </div>

                    <GenderCheckbox />


                    <a href='#' className='text-sm text-pink-800 hover:underline hover:text-blue-600 mt-2 inline-block'>
                        ¿Ya tienes una cuenta?
                    </a>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border-slate-700'>Registrarse</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SignUp;

// STARTED CODE
//import React from 'react'
//import GenderCheckbox from './GenderCheckbox';

//const SignUp = () => {
//    return (
//        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
//            backdrop-blur-lg bg-opacity-0'>
//                <h1 className='text-3xl font-semibold text-center text-black'>
//                    Registro
//                    <span className='text-pink-500'> ChatApp</span>
//                </h1>

//                <form>
//                    <div>
//                        <label className='label p-2'>
//                            <span className='text-base label-text  text-black'>Nombre completo</span>
//                        </label>
//                        <input type='text' placeholder='Ejem: John Doe' className='w-full input input-bordered h-10' />
//                    </div>

//                    <div>
//                        <label className='label p-2'>
//                            <span className='text-base label-text text-black'>Nombre de usuario</span>
//                        </label>
//                        <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
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

//                    <div>
//                        <label className='label'>
//                            <span className='text-base label-text text-black'>Confirmar</span>
//                        </label>
//                        <input
//                            type='password'
//                            placeholder='Confirma la contraseña'
//                            className='w-full input input-bordered h-10'
//                        />
//                    </div>

//                    <GenderCheckbox />


//                    <a href='#' className='text-sm text-pink-800 hover:underline hover:text-blue-600 mt-2 inline-block'>
//                        ¿Ya tienes una cuenta?
//                    </a>

//                    <div>
//                        <button className='btn btn-block btn-sm mt-2 border-slate-700'>Registrarse</button>
//                    </div>

//                </form>
//            </div>
//        </div>
//    );
//};

//export default SignUp;