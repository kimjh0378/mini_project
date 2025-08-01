import { useNavigate } from "react-router-dom";
import BicepsCurl from "../Panattaimg/BicepsCurl.png"
import cable from "../Panattaimg/cable.png"
import cablemachine from "../Panattaimg/cablemachine.png"
import rack from "../Panattaimg/rack.png"
import rackred from "../Panattaimg/rackred.png" 
import SeatedRow from "../Panattaimg/SeatedRow.png" 
import smith from "../Panattaimg/smith.jpg"
import '../page/homepage.css'




function Panatta () {

  const navigate = useNavigate();


const panattaMachine = [
  {
    id: 1,
    name: "이두 컬 머신 2대",
    image: BicepsCurl
  },

  {
    id: 2,
    name: "케이블 머신 2대",
    image: cable
  },

  {
    id: 3,
    name: "케이블 머신 1대",
    image: cablemachine
  },

  {
    id: 4,
    name: "파워 랙 3대",
    image: rack
  },

  {
    id: 5,
    name: "파워 랙 3대",
    image: rackred
  },

  {
    id: 6,
    name: "시티드 로우 머신 2대",
    image: SeatedRow
  },

  {
    id: 7,
    name: "스미스머신 4대",
    image: smith
  },
  
]








return (
  <div  style={{
      backgroundColor: '#1e1e1e'
    }}>
    <div><h1>panatta 머신정보</h1></div>
      <button onClick={() => navigate('/logo')}>돌아가기</button>
      <button onClick={() => navigate('/cydex')}>Cydex</button>
      <button onClick={() => navigate('/hammer')}>Hammer</button>
      <button onClick={() => navigate('/life')}>life</button>

       <div>
        <p>궤적이 부드럽고 근육을 끝까지 자극하는 구조</p>
        <p>머신에도 다양한 각도를 설정할수 있어서 범용성이 좋음</p>
        <p>각도 조절로 프리웨이트와 비슷하게 운동가능해서 요증 인기가 상승중인 제품</p>
      </div>

      <div className="panatta" style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '50px',
        marginTop: '50px'
      }}>
       {panattaMachine.map((pntta) => (
          <div key={pntta.id} style={{
            marginBottom: '10px',
            border: '5px solid white',
            width: '510px',
            marginLeft: '50px',
            marginTop: '50px'
            }}>
            <h2>{pntta.name}</h2>
            <div className="pntimg" style={{
              backgroundImage: `url(${pntta.image})`,
              height: '499px',
              width: '500px',
              backgroundSize: 'cover',
              marginLeft: '0px'
            }}>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Panatta;