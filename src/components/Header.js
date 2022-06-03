import React, { useState, useRef } from 'react';
import '../styles/Header.scss';
import CATEGORIES from './CategoryList';
import {Link} from 'react-router-dom'

function Header(){
    const category=(e)=>{
        console.log(e);
        const categoryLength=document.querySelectorAll('.category li').length
        const active = document.querySelector('.category li:nth-of-type('+e+')');
        active.classList.add("active");
        for(let i=1;i<=categoryLength;i++){
            document.querySelector('.category li:nth-of-type('+i+')').classList.remove('active');
            active.classList.add("active");
            if(e===1){//카테고리 전체보기
                active.classList.add("active");
                // this.cfonts=fonts.lists.filter(function(d,n,all){//새로운 배열에 filter걸기
                //   return d;
                // });
                // this.total=this.cfonts.length
            }else if(e===2){//viewCount 100이상
                active.classList.add("active");
            }else{
                active.classList.add("active");
                // this.cfonts=fonts.lists.filter(function(d,n,all){//새로운 배열에 filter걸기
                //     let z=d.lan.indexOf(e);
                //      if(z!=-1){
                //          return d;
                //      }
                //  });
                //  this.total=this.cfonts.length
            }
        }
    }
        return(
            <div>
                <div className='header-inner'>
                    <div className="title">커뮤니티</div>
                    <div className="slider">
                    <ul className="category">
                        <li onClick={()=>category(1)} className="active">전체</li>
                        <li onClick={()=>category(2)}>
                            <img className="star" alt="star"src={ require('../imgs/star.png')} />
                             인기글
                        </li>
                        {
                            CATEGORIES.map(function(list, index){
                                return(
                                    <li key={index} onClick={()=>category(index+3)}>{list.categoryName}</li>
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
                </div>
            </div>
        )
    // })
}
export default Header;