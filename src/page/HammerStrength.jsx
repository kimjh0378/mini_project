import { useNavigate } from "react-router-dom";
import banchpressMachine from "../HammerStrength/benchpressMachine.jpg"
import inclinePress from "../HammerStrength/InclinePress.png"
import LateralRaise from "../HammerStrength/LateralRaise.jpg"
import Latpulldown from "../HammerStrength/LatPulldown.jpg"
import TBarRow from "../HammerStrength/TBarRow.jpg"
import wideChestPress from "../HammerStrength/wideChestPress.png"
import widePulldown from "../HammerStrength/widePulldown.png"







function HammerStrength () {

  const navigate = useNavigate();

const HsMachine = [
  {
    id: 1,
    name: "벤치프레스 머신 2대",
    image: banchpressMachine
  },

  {
    id: 2,
    name: "인클라인 벤치프레스 1대",
    image : inclinePress,
  },

  {
    id: 3,
    name: "레너럴 레이즈 머신 1대",
    image: LateralRaise,
  },

  {
    id: 4,
    name: "렛풀다운 머신 2대",
    image: Latpulldown
  },

  {
    id: 5,
    name: "티바로우 2대",
    image: TBarRow
  },

  {
    id: 6,
    name: "와이드 체스트 프레스 1대",
    image: wideChestPress
  },

  {
    id: 7,
    name: "와이드 풀 다운 1대",
    image: widePulldown
  }
]










  return(
    <div style={{
      backgroundColor: '#1e1e1e'
    }}>
      <div><h1>HammerStrength 머신정보</h1></div>
      <button onClick={() => navigate('/logo')}>돌아가기</button>
      <button onClick={() => navigate('/cydex')}>Cydex</button>
      <button onClick={() => navigate('/life')}>LifeFitness</button>
      <button onClick={() => navigate('/panatta')}>panatta</button>

      <div>
        
        <p>플레이트 로드(Plate Loaded) 머신의 대표 브랜드</p>
        <p>내구성이 매우 높고 프리웨이트에 가까운 운동 동작이 특징</p>
        <p>상체 운동에는 상위권이라 생각함</p>
      </div>

      <div className="hammerimg" style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '80px'
      }}>
        {HsMachine.map((hammer) => (
          <div key={hammer.id} style={{
            marginBottom: '10px',
            border: '3px solid white',
            width: '405px',
            marginLeft: '80px',
            marginTop: '50px'

          }}>
            <h2>{hammer.name}</h2>
            <div className="hammerimg" style={{
              backgroundImage: `url(${hammer.image})`,
              height: '400px',
              width: '400px',
              backgroundSize: 'cover',
            }}>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HammerStrength;