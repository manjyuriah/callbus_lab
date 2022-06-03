import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import '../styles/Home.scss';


function List(props){
    return(
        <div className="inner">
            <Header />
            <Card />
        </div>
    )
}
export default List;