import React, { useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
import profile from './img/profile.svg';
import logout from './img/logout.svg';
import { useHistory } from 'react-router-dom';


export default function Menu ({currentPage}) {
    
    const [searchBar, enableSearchBar] = useState(null);
    const { push } = useHistory();

    useEffect(() => {
		if(currentPage === 'feed') {
            enableSearchBar(<input type="text" placeholder="Rechercher par tags" />);
        } else {
            enableSearchBar(null);
        }
	}, []);


    function onSubmitLogout(event) {
        event.preventDefault();

        localStorage.setItem('username',null);
        localStorage.setItem('password',null);
        localStorage.setItem('token',null);
        localStorage.setItem('loggedIn',false);

        push('/login');
    }

    function onSubmitProfile(event) {
        event.preventDefault();

        push('/profile');
    }

	return (
        <header>
			<nav>
				<h1 className="logo">
					Foto
				</h1>
                {searchBar}
                <Button><Image src={profile} onClick={onSubmitProfile} /></Button>
                <Button><Image src={logout} onClick={onSubmitLogout} /></Button>
             
			</nav>
		</header>
    );
}
