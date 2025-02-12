import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/Sidebar.css';

export default function Sidebar() {
    const { goBack } = useHistory();

    return (
        <aside className="app-sidebar">                
            <img src={mapMarkerImg} alt="Happy"/>
                
            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowRight size={24} color="#fff" />
                </button>
            </footer>
        </aside>
    );
}