import React, { useState, useRef } from 'react';
import '../styles/Header.scss';
import CATEGORIES from './CategoryList';

function Header(){
        return(
            <div>
                <div className='header-inner'>
                    <div className="title">커뮤니티</div>
                    <ul className="category">
                        <li>전체</li>
                        <li>
                            <img className="star" alt="star"src={ require('../imgs/star.png')} />
                             인기글
                        </li>
                        {
                            CATEGORIES.map(function(list, index){
                                return(
                                    <li key={index}>{list.categoryName}</li>
                                )
                            })
                        }                        
                    </ul>
                    <div className="write-button">
                        글쓰기
                        <img className="write" alt="write" src={ require('../imgs/write.png')} />
                    </div>
                </div>
            </div>
        )
    // })
}
export default Header;