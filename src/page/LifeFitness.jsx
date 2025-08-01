import { useNavigate } from "react-router-dom";
import Fly from "../LifeFitnessimg/Fly.jpg"
import LatPulldown from "../LifeFitnessimg/LatPulldown.jpg"
import LegCurl from "../LifeFitnessimg/LegCurl.jpg"
import LegExtension from "../LifeFitnessimg/LegExtension.jpg"
import ShoulderPress from "../LifeFitnessimg/ShoulderPress.jpg"
import squatrack from "../LifeFitnessimg/squatrack.jpg"




function LifeFitness() {

  const navigate = useNavigate();

  const lifeMachine = [
    {
      id: 1,
      name: "펙덱 플라이 머신 2대",
      image: Fly
    },

    {
      id: 2,
      name: "렛풀다운 머신 1대",
      image: LatPulldown
    },

    {
      id: 3,
      name: "레그 컬 머신 1대",
      image: LegCurl
    },

    {
      id: 4,
      name: "레그 익스텐션 머신 1대",
      image: LegExtension
    },

    {
      id: 5,
      name: "숄더프레스 머신 1대",
      image: ShoulderPress
    },

    {
      id: 6,
      name: "스쿼트 랙 2대",
      image: squatrack
    }
  ]











  return (
    <div  style={{
      backgroundColor: '#1e1e1e'
    }}>
      <div><h1>LifeFitness 머신정보</h1></div>
      <button onClick={() => navigate('/logo')}>돌아가기</button>
      <button onClick={() => navigate('/cydex')}>Cydex</button>
      <button onClick={() => navigate('/hammer')}>hammer</button>
      <button onClick={() => navigate('/panatta')}>panatta</button>

      <div>
        <p>초보자,일반인도 하기 편안하게 만든 제품</p>
        <p>세계최고 피트니스 장비 제조사</p>
        <p>머신들의 내구성이 좋고 안정감이 있음</p>
      </div>

      <div className="life" style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '80px',
        marginTop: '50px'
      }}>
        {lifeMachine.map((life)=> (
          <div key={life.id} style={{
            marginBottom: '10px',
            border: '5px solid white',
            width: '410px',
            marginLeft: '80px',
            marginTop: '50px'
            }}>
            <h2>{life.name}</h2>
            <div className="lifeimg" style={{
              backgroundImage: `url(${life.image})`,
              height: '400px',
              width: '400px',
              backgroundSize: 'cover'
            }}>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LifeFitness;