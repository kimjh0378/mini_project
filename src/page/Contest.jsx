import ronnie from "../trainer/ronnie.jpg"
import chris from "../trainer/chris.jpg"
import jaehoon from "../trainer/jaehoon.jpg"
import jay from "../trainer/jay.jpg"
import tom from "../trainer/tom.jpg"
import '../page/Homepage.css'





function Contest () {
  return (
    <div>
      

      <div className="trainerimg">
      <h1 className="trainer">관장 트레이너 소개 및 🥇수상경력🥇</h1>
      <h3 className="trainer">✅ 대회 티어 알아보기 (전 세계 기준)</h3>
      <h4 className="trainer">✅1. Mr. Olympia : 세계 최고 권위. IFBB Pro 중 최정상급만 출전. 우승자는 레전드 선수로 등극 </h4>
      <h4 className="trainer">✅2. Arnold Classic : 전 보디빌더인	아놀드 슈워제네거가 만든 대회. 상금·인지도 모두 최상위</h4>
      <h4 className="trainer">✅3. IFBB Pro Shows  (NY Pro, Tampa Pro 등) :	IFBB 프로들이 Mr.Olympia 출전을 위해 참가</h4>
        
        <img src={ronnie} style={{
          height: '200px',
          width: '200px'
          
        }} />
        
        

        
        <img src={tom}  style={{
          height: '200px',
          width: '200px'
        }}/>
        
        
        

        
        <img src={chris} style={{
          height: '200px',
          width: '200px',
        
        }} />
      

        
        <img src={jaehoon}  style={{
          height: '200px',
          width: '200px'
        }}/>
        

        
        <img src={jay} style={{
          height: '200px',
          width: '200px'
        }} />



        <div className="trainertextbox">
          <div className="ronnie" >
            <h3 >관장 김로니</h3>
            <p >Mr. Olympia 8회 연속 우승(1998‑2005)</p>
            <p>IFBB 프로 26회 우승</p>
            <a href="https://www.youtube.com/watch?v=cfHQ8a2-kBE"><button className="btnroutine">🔥김로니 등 운동🔥</button></a>
          </div>
          <div className="tom">
            <h3 >트레이너 김톰플</h3>
            <p>Mr. Olympia 최고 성적 3위 (1981)</p>
            <p>지속적 상위권</p>
             <a href="https://www.youtube.com/watch?v=_3sf3hgXxGI"><button className="btnroutine">🔥김톰플 스쿼트팁🔥</button></a>
          </div>
          <div className="chris">
            <h3 >트레이너 김씨범</h3>
            <p>	Classic Physique Olympia </p>
            <p>6회 연속 우승 (2019‑2024)</p>
            <p>2017‑18년 2위</p>
            <a href="https://www.youtube.com/watch?v=6c1lsxflj1U"><button className="btnroutine">🔥김씨범 어깨 루틴🔥 </button></a>
          </div>
          <div className="jaehoon">
            <h3 >트레이너 박재훈</h3>
            <p>Taiwan Pro, Texas Pro 우승</p>
            <p>Olympia Classic Physique Top 10 </p>
            <p>한국인 최초 달성</p>
            <a href="https://www.youtube.com/watch?v=t6DzxVLQUPw"><button className="btnroutine">🔥박재훈 팔 루틴🔥 </button></a>
          </div>
          <div className="jay">
            <h3 >트레이너 김제이</h3>
            <p>Mr. Olympia 4회 우승(2006,07,09,10)</p>
            <p>Arnold Classic 3회 연속 우승</p>
            <a href="https://www.youtube.com/watch?v=hexa7v06wPQ"><button className="btnroutine">🔥김제이 가슴 루틴🔥 </button></a>
          </div>
        </div>
      </div>
        
      
     </div>
    
  )
} 

export default Contest;