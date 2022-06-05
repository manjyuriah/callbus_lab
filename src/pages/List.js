import React,{useState} from 'react';
import Card from '../components/Card';
import '../styles/Home.scss';
import '../styles/Header.scss';
import CATEGORIES from '../components/CategoryList';
import {Link} from 'react-router-dom'

function List(){
    //카테고리 선택시 해당 값
    let [cate,setCate]=useState(1);
    //선택 카테고리 active
        const categoryLength=document.querySelectorAll('.category li').length
        const active = document.querySelector('.category li:nth-of-type('+cate+')');
        for(let i=1;i<=categoryLength;i++){
            document.querySelector('.category li:nth-of-type('+i+')').classList.remove('active');
            active.classList.add("active");
        }
    return(
        <div className="inner">
            <div className="title">커뮤니티</div>
                    <div className="slider">
                    <ul className="category">
                        <li onClick={()=>setCate(1)} className="active">전체</li>
                        <li onClick={()=>setCate(2)}>
                            <img className="star" alt="star"src={ require('../imgs/star.png')} />
                             인기글
                        </li>
                        {
                            CATEGORIES.map(function(list, index){
                                return(
                                    <li key={index} onClick={()=>setCate(index+3)}>{list.categoryName}</li>
                                )
                            })
                        }                        
                    </ul>
                    </div>
                    <Link to='/community/post/new'>
                        <div className="write-button">
                            글쓰기
                            <img className="write" alt="write" src={ require('../imgs/write.png')} />
                        </div>
                    </Link>
            <Card category={cate} />
        </div>
    )
}
export default List;