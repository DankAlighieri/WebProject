import './Header.css';
import React from 'react';
import Nav from './Nav'
import Contacts from './Contacts'

export default props =>
    <header className='header'>
            <div className="contacts">
                <Contacts />
            </div>
            <div className="headerColumn">
                <div className="headerItem fs-1 fw-bold">
                    Autorregulação da 
                </div>
                <div className="headerItem fs-1 fw-bold">
                    Aprendizagem 
                </div>
                <Nav />
            </div>
    </header>