import React from 'react';
import '../styles/Card.scss';
import PostList from '../components/PostList';

function Card(){
    return(
        <div>
            <div className="card-inner">
            {
                PostList.map(function(list, index){
                    return(
                            <ul className='card' key={index}>
                                <li>
                                    <div className="profile">
                                        <div className="profile-bg">
                                            <img className="smile" alt="smile" src={ require('../imgs/shy-smile.png')} />
                                        </div>
                                    <div className="inform">
                                        <div className="nick-name">{list.writerNickName}</div>
                                        <div className="condition">{list.categoryName} • 1분전</div>
                                    </div>
                                    </div>
                                    <div className="post">
                                        <div className="post-title">{list.title}</div>
                                        <div className="post-content">{list.content}</div>
                                        <img className="post-img" alt="post-img" src={list.imageUrl} />
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