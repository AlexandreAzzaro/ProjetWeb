import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import profile from './img/profile.svg';
import logout from './img/logout.svg';
import { NavLink } from 'react-router-dom';
import './css/Menu.css'


export default function Menu ({currentPage}) {
    
    const [searchBar, enableSearchBar] = useState(null);

    useEffect(() => {
		if(currentPage === 'feed') {
            enableSearchBar(<input className="searchBar" type="text" placeholder="Rechercher par tags" />);
        } else {
            enableSearchBar(null);
        }
	}, []);

    
    function onSubmitLogout() {
        localStorage.setItem('id',null);
        localStorage.setItem('username',null);
        localStorage.setItem('password',null);
        localStorage.setItem('token',null);
        localStorage.setItem('loggedIn',false);
    }


	return (
        <header>
			<nav>
                <NavLink 
                    to="/feed" 
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                        marginLeft: '3%'
                    }}>
                    Foto
                </NavLink>
                
                {searchBar}
    
                <NavLink className="toProfile"
                    to="/profile"
                    style={{
                        verticalAlign: 'middle',
                        marginLeft: '50%'
                    }}>
                    <Image  
                        src={profile} 
                        width='35px'
                        height='35px'/>
                </NavLink>

                <NavLink className="toLogin"
                    onClick={onSubmitLogout}
                    to="/login" 
                    style={{
                        verticalAlign: 'middle',
                        marginLeft: '5%'
                    }}>
                    <Image src={logout} 
                        width='35px'
                        height='35px'/>
                </NavLink>     
			</nav>
		</header>
    );
}
