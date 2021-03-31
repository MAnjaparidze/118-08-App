import React, { Component } from 'react';
import '../../css/currencyPage/CurrencyPage.css'
import Header from '../globalParts/Header';
import Footer from '../globalParts/Footer';

import CurrencyMidSection from './parts/CurrencyMidSection';
import CurrencyItemRender from './parts/CurrencyItemRender';

export default class CurrencyPage extends Component {
    render() {
        return (
            <div className='currency-page_container'>
                <Header />
                <CurrencyMidSection />
                <CurrencyItemRender />
                <Footer />                
            </div>
        )
    }
}
