import React from 'react';
import '../styles/Detail.scss';
import { useNavigate } from 'react-router-dom';

function Post(){
    const navigate = useNavigate();
    return(
        <div>
            <div className="detail-inner">
                <div className="go-back" onClick={() => navigate(-1)} >
                    <img className="back" alt="back" src={ require('../imgs/back.png') } />
                    글 목록으로
                </div>
                <div className="profile">
                    <div className="profile-bg">
                        <img className="smile" alt="smile" src={ require('../imgs/shy-smile.png')} />
                    </div>
                    <div className="inform">
                        <div className="nick-name">경기도덕양만세</div>
                        <div className="condition">정부에바란다 • 21-12-31</div>
                    </div>
                </div>
                <div className="post">
                    <div className="post-title">안녕하세요!</div>
                    <div className="post-content">asdddddddddddf</div>
                    <img className="post-img" alt="post-img" src={ require('../imgs/shy-smile.png')} />
                    <div className="post-state">
                        <div className="thumb-box">
                            <img className="thumb" alt="thumb" src={ require('../imgs/thumb-line.png')} />
                            36
                        </div>
                        <div className="talk-box">
                            <img className="talk" alt="talk" src={ require('../imgs/talk-line.png')} />
                            7
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;