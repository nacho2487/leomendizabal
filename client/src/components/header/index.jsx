import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import './header.scss';
import Image from '../image';
import Logo from '../logo';
import Search from '../search';
import logo from '../../assets/icons/Logo_ML.png';
import logoHD from '../../assets/icons/Logo_ML@2x.png.png';
import searchIcon from '../../assets/icons/ic_Search.png';
import searchIconHD from '../../assets/icons/ic_Search@2x.png.png';
import { Store } from '../../store/store';
import { getItemsAction } from '../../store/actions';

const Header = () => {
	const [search, setSearch] = useState('');
	const [redirect, setRedirect] = useState(false);
	const { dispatch } = useContext(Store);
	const error = false; // TODO: get error from store

	const renderRedirect = () => {
		return <Redirect to='/items' />
	}
	
	const searchHandler = () => {
		if (search !== '') {
			getItemsAction(search, dispatch);
			setRedirect(true);
		}
	}

    return (
		<React.Fragment>
			{ redirect && renderRedirect() }

			<header className="header">
				<div className="header__content">
					<Logo className="header__content__logo" src={logoHD} fallback={logo} link="/" />
					<Search className="header__content__search" onChange={setSearch} value={search} placeholder="Nunca dejes de buscar" />
					<Image className="header__content__button" src={searchIconHD} fallback={searchIcon} onClick={searchHandler} button />
				</div>
			</header>
			
			{
				error && 
				<div className="header__error">
					<span>Hubo un error en la búsqueda</span>
				</div>
			}
		</React.Fragment>
    );
}

export default Header;