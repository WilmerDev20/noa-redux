import React from 'react'
import {NavLink} from 'react-router-dom';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-heading'>
        <div className='flex flex-row w-full h-auto px-6 py-10 md:px-16 xl:px-40 3xl:px-60'>

                <div className='text-orange-200 w-auto flex flex-col justify-center items-center font-semibold'>
                    <div>
                        LOGO Noa
                    </div>
                    
                    <div className='text-gray-300 opacity-40 pt-1 text-sm font-light text-center'>
                        Un cambio más en el futuro
                    </div>

                    <ul className='flex flex-row space-x-3 pt-5'>
                        <li >
                            <NavLink className='border border-white rounded-full flex p-1 opacity-50 hover:opacity-90'>
                                <FaFacebookF className='w-5 h-5 md:w-6 md:h-6 text-white'/>
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink className='border border-white rounded-full flex p-1 opacity-50 hover:opacity-90'>
                             <FaTwitter  className='w-5 h-5 md:w-6 md:h-6 text-white'/> 
                            </NavLink>   
                        </li>
                            
                        <li>
                        <NavLink className='border border-white rounded-full flex p-1 opacity-50 hover:opacity-90'>
                             <FaInstagram  className='w-5 h-5 md:w-6 md:h-6 text-white'/> 
                        </NavLink>    
                        </li>

                    </ul>
                </div>
            
            <ul className='w-full justify-end flex space-x-5 md:space-x-8 items-start'>
                <li>
                    <NavLink className='text-orange-200 uppercase text-sm md:text-base opacity-70 hover:opacity-100'>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink className='text-orange-200 uppercase text-sm md:text-base opacity-70 hover:opacity-100'>
                        Contacto
                    </NavLink>
                </li>

                <li>
                    <NavLink className='text-orange-200 uppercase text-sm md:text-base opacity-70 hover:opacity-100'>
                        Nosotros
                    </NavLink>
                </li>

                </ul>
                
                

        </div>

        <div className='w-full h-auto px-6 md:px-16 xl:px-40 3xl:px-60'>
            <div className='w-full h-0.5 bg-gray-400 opacity-30'></div>
        </div>

        <div className='flex flex-row w-full text-gray-400 justify-center h-10 pt-2 px-6 md:px-16 xl:px-40 3xl:px-60 opacity-50'>
            © 2023 Noa - All Rights Reserved.
        </div>
        
    </footer>
  )
}
export default Footer;