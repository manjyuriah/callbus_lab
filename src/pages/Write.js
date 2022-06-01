import React from 'react';
import '../styles/Write.scss';

function Write(){
    return(
        <div>
            <div className="write-inner">
                <div className="write-top">
                    <img className="back" alt="back" src="imgs/back.png" />
                    <div class="title">글쓰기</div>
                    <div className="submit">완료</div>
                </div>
                <div className="category">
                    <ul>
                        <li>질문 / 답변 ▼</li>
                    </ul>
                </div>
                <div className="write-title">
                    <input type="text" placeholder="제목을 작성해 주세요" />
                </div>
                <div className="write-body">
                    <textarea rows="35" cols="50" placeholder="내용을 작성해 주세요&#13;&#10;◎ 사진 및 외부 콘텐츠 첨부시 영향력 상승!&#13;&#10;◎ 뉴스, 블로그 등 외부 콘텐츠는 https://링크를 붙여&#13;&#10;넣으세요. 본문에 썸네일로 표시됩니다.&#13;&#10;◎ 광고글 금지. 서비스 이용이 제한됩니다."></textarea>
                </div>
            </div>
        </div>
    )
}
export default Write;