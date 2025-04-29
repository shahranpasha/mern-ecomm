import React, { useEffect } from 'react';

import {Link, useNavigate} from 'react-router-dom';

const Nav=()=>{
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout =()=>{
        localStorage.clear();
        navigate('./signup')
    }
    return(
        <div>
             <img
             alt='logo'
             className='logo'
             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHMxuqqnkGPEc0_-r1VvKQ4wALmZ3x-ueuUA&s' />
             {auth ? <ul className='nav-ul'>
                <li><Link to='/'>Product</Link></li>
                <li><Link to='/add'>Add Product</Link></li>
                <li><Link to='/update'>Update product</Link></li>
                <li><Link to='/proflie'>Profile</Link></li>
                <li><Link onClick={logout} to='/signup'>Logout({JSON.parse(auth).name})</Link></li>
                </ul>
                    :<ul className='nav-ul nav-right '>
                    <li><Link to='/signup'>Signup</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    </ul>
                }
        </div>
    )
}

export default Nav;