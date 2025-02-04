// /Users/shinji81/Downloads/my-app/src/component/Detail.js
import React from "react"; // , { useEffect, useState }
// import axios from "axios";
import "./Detail.css";

function Detail({ content, closeModal }) {
  // const [contentKeywords, setContentKeywords] = useState([]);
  console.log("Content Data:", content);

  return (
    <div className="container">
      {/* 썸네일 */}
      <div className="content-box">
        <img src="/images/contentthumnail.jpg" alt="Content Thumbnail" className="content-thumbnail" />
      </div>

      {/* 재생 버튼 */}
      <img src="/images/contentPlay.png" alt="Content Play Icon" className="contentPlay-icon" />
      <img src="/images/device.png" alt="Device Icon" className="device-icon" />
      {/* 취소 버튼 */}
      <img 
      src="/images/contentsdetailPrevious.png" 
      alt="Contents Detail Previous Icon" 
      className="contentsdetailPrevious-icon" 
      onClick={() => {
        console.log("취소 버튼 클릭됨");
        closeModal();
      }}
      style={{ cursor: "pointer" }}
      />
      {/* 볼륨 이미지 */}
      <img src="/images/sound.png" alt="Sound Icon" className="sound-icon" />
      
      {/* 제목 */}
      <div className="content-title">
        <b>{content?.contents_name || "제목 없음"}</b>
      </div>
      {/* 기타 정보 */}
      <div className="content-year">2016</div>
      <img src="/images/age.png" alt="Age Icon" className="age-icon" />
      <div className="content-time">1시간 46분</div>
      <img src="/images/hd.png" alt="HD Icon" className="hd-icon" />
      <img src="/images/actor.png" alt="Actor Icon" className="actor-icon" />
      {/* 콘텐츠 키워드 */}
      <div className="choiced-keyword">
        {content?.keywords?.map((keyword, index) => (
          <span key={index} className="keyword-tag">
            {keyword}
          </span>
        ))}
      </div>

      {/* 재생 & 저장 */}
      <div className="play-box">
        <img src="/images/playButton.png" alt="playButton" className="playButton-icon" />
        재생
      </div>
      <img src="/images/save.png" alt="save" className="save-icon" />
      <div className="save-box">
        저장</div>
      <div className="contents-plot">
      새 학교로 전학 온 코너는 모델처럼 멋진 라피나를 보고 첫눈에 반한다. 
      라피나와 가까워지기 위해 밴드를 하고 있다는 거짓말을 한 코너는 친구들과 
      싱 스트리트라는 밴드를 결성하게 되고 집에 있는 음반들을 모아 자신만의 음악을 만들기 시작한다.
      </div>
      <div className="contents-actors">
        출연: 페리다 월시 필로, 루시 보인턴 ... 더 보기 <br />감독: 존 카니
      </div>
      
      {/* 찜+평가+공유 */}
      <img src="/images/listplusButton.png" alt="listplusButton" className="listplusButton-icon" />
      <div className="listplus">내가 찜한 리스트</div>
      <img src="/images/assessment.png" alt="assessment" className="assessment-icon" />
      <div className="assessment">평가</div>
      <img src="/images/share.png" alt="share" className="share-icon" />
      <div className="share">공유</div>
      <img src="/images/line.png" alt="line" className="line-icon" />

      {/* 비슷한 콘텐츠 */}
      <div className="similar-content">비슷한 콘텐츠</div>
      <div className="similar-content-container">
          <img src="/images/little.jpg" alt="Similar Content 1" className="similar-content-image" />
          <img src="/images/little.jpg" alt="Similar Content 2" className="similar-content-image" />
          <img src="/images/little.jpg" alt="Similar Content 3" className="similar-content-image" /> 
      </div>
    </div>
  );
}

export default Detail;
