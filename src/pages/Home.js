import React from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import '../styles/Home.scss';
import {Link} from 'react-router-dom'

function Home(props){
    return(
        <div className="inner">
            <Header />
            <Link to='/detail'>
                <Card />
            </Link>
                <div className="write-button" onClick={() => {props.history.push('/write');}} >
                    글쓰기
                    <img className="write" alt="write" src="imgs/write.png" />
                </div>
            </div>
    )
}
export default Home;