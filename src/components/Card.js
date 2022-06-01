import React from 'react';
import '../styles/Card.scss';

function Card(){
    return(
        <div>
            <div className="card-inner">
                <div className="profile">
                    <div className="profile-bg">
                        <img className="smile" alt="smile" src="imgs/shy-smile.png" />
                    </div>
                    <div className="inform">
                        <div className="nick-name">호랑이남</div>
                        <div className="condition">자유글 • 1분전</div>
                    </div>
                </div>
                <div className="post">
                    <div className="post-title">안녕하세요!</div>
                    <div className="post-content">asdddddddddddf</div>
                    <img className="post-img" alt="post-img" src="imgs/shy-smile.png" />
                    <ul className="post-state">
                        <li>
                            <img className="eye" alt="eye" src="imgs/eye.png" />
                            309
                        </li>
                        <li>
                            <img className="thumb" alt="thumb" src="imgs/thumb.png" />
                            105
                        </li>
                        <li>
                            <img className="talk" alt="talk" src="imgs/talk.png" />
                            40
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Card;