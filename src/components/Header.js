import React from 'react';
import '../styles/Header.scss';

function Header(){
    return(
        <div>
            <div>
                <div className="title">커뮤니티</div>
                <ul className="category">
                    <li>전체</li>
                    <li>
                        <img className="star" alt="star" src="imgs/star.png" />
                         인기글
                    </li>
                    <li>대선청원</li>
                    <li>자유글</li>
                </ul>
                <div className="write-button">
                    글쓰기
                    <img className="write" alt="write" src="imgs/write.png" />
                </div>
            </div>
        </div>
    )
}
export default Header;