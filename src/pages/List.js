import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import '../styles/Home.scss';
import {Link} from 'react-router-dom'

function List(props){
    return(
        <div className="inner">
            <Header />
            <Link to='/community/post'>
                <Card />
            </Link>
                <div className="write-button" onClick={() => {props.history.push('/community/post/new');}} >
                    글쓰기
                    <img className="write" alt="write"src={ require('../imgs/write.png')} />
                </div>
            </div>
    )
}
export default List;