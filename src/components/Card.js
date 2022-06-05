import React from 'react';
import '../styles/Card.scss';
import PostList from '../components/PostList';
import moment from 'moment';
import 'moment/locale/ko';
import {Link} from 'react-router-dom'

function Card(props){
    let allList;
    let newList;
    let cate = props.category
    if(cate===1){//카테고리 전체보기
         allList=PostList.filter(function(filter,index,all){//새로운 배열에 filter걸기
             return filter;
         });
    }else if(cate===2){//viewCount 100이상
        for(let i=0; i<PostList.length; i++){
            if(PostList[i].viewCount>=100){
                console.log('인기글만 출력');
                let found=PostList.findIndex((cate)=>{return PostList})
            }
        }
        // newList=PostList.filter(function(filter,index,all){//새로운 배열에 filter걸기
            //return filter
            //let z=filter.categoryPk.indexOf(e);
             //console.log(z);
              //if(z!=-1){
              //    return filter;
              //}
        // })
    }else{
        let found=PostList.findIndex((cate)=>{return cate})
        console.log(found);
        //newList=PostList.filter(function(filter,index,all){//새로운 배열에 filter걸기
            //return filter
            // let z=filter.categoryPk.indexOf(props.category);
                  //console.log(z);
                   //if(z!=-1){
                   //    return filter;
                   //}
        //})
    }
    //현재 날짜 및 시간
    function timeToday(value){
        const today = moment();
        // console.log(today.format());
        const standard = moment(value);
        // const standard ="2022-06-03T12:28:10+09:00"
        if(today.diff(standard, "minutes")<1){//방금 전
            return('방금 전')
        }else if(today.diff(standard, "minutes")<=60){//n분 전
            return(today.diff(standard, "minutes")+'분 전');
        }else if(today.diff(standard, "minutes")<=3600){//n시간 전
            return(today.diff(standard, "hours")+'시간 전')
        }else{//하루 이상 지난 경우
            return(value.substr(2,3)+value.substr(5,5));
        }
    }
    const colors = [
        "#FFD784",
        "#FFC7CC",
        "#B2E9E3",
    ];
    function changeBgColor() {
        let colorIndex = Math.floor(Math.random() * colors.length);
        let profileBg=document.querySelectorAll('.profile-bg');
        // profileBg.style.backgroundColor = colors[colorIndex];
        for (let i = 0; i < profileBg.length; i++) {
            profileBg[i].style.backgroundColor =colors[colorIndex];
        }
    }changeBgColor()
    return(
        <div>
            <div className="card-inner">
            {
                PostList.map(function(list, index){
                    // console.log(list);
                    return(
                            <ul className='card' key={index}>
                                <li>
                                    <div className="profile">
                                        <div className="profile-bg">
                                            <img className="profileImg" alt="profileImg" src={list.writerProfileUrl} />
                                        </div>
                                    <div className="inform">
                                        <div className="nick-name">{list.writerNickName}</div>
                                        <div className="condition">{list.categoryName} • {timeToday(list.writtenAt)}</div>                                       
                                    </div>
                                    </div>
                                    <Link to='/community/post'style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                    <div className="post">
                                        <div className="post-title">{list.title}</div>
                                        {
                                            list.content.length<=50? ( //본문내용 생략
                                                <div className="post-content">{list.content}</div>
                                            ) : (
                                                <div className="post-content">{list.content.substr(0,50)+'...'}</div>
                                            )
                                        }
                                        {
                                            list.imageUrl? ( //본문 이미지 출력
                                            <img className="post-img" alt="post-img" src={list.imageUrl} />
                                            ) : (
                                                <div></div>
                                            )
                                        }
                                        <ul className="post-state">
                                            <li>
                                                <img className="eye" alt="eye" src={ require('../imgs/eye.png')} />
                                                {list.viewCount}
                                            </li>
                                            <li>
                                                <img className="thumb" alt="thumb" src={ require('../imgs/thumb.png')} />
                                                {list.likeCount}
                                            </li>
                                            <li>
                                                <img className="talk" alt="talk" src={ require('../imgs/talk.png')} />
                                                {list.commentCount}
                                            </li>
                                        </ul>
                                    </div>
                                    </Link>
                                </li>
                            </ul>
                            )
                        })
                    }  
            </div>
        </div>
    )
}
export default Card;