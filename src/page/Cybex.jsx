import { useNavigate } from "react-router-dom";
import HackSquat from "../Cybeximg/HackSquat.png"
import LegCurl from "../Cybeximg/LegCurl.png"
import LegExtension from "../Cybeximg/LegExtension.png"
import LegPress from "../Cybeximg/LegPress.png"
import ShoulderPress from "../Cybeximg/ShoulderPress.png"




function Cybex () {

const navigate = useNavigate(); 


const CydexMachine = [
  {
    id: 1,
    name: "핵스쿼트 머신 1대",
    image: HackSquat,
  },
  
  {
    id: 2,
    name: "레그 컬 머신 1대",
    image: LegCurl,
  },

  {
    id: 3,
    name: "레그 익스텐션 머신 1대",
    image: LegExtension
  },

  {
    id: 4,
    name: "레그 프레스 머신 1대",
    image: LegPress
  },

  {
    id: 5,
    name: "숄더 프레스 머신 1대",
    image : ShoulderPress,
  }
]



  return(

    <div  style={{
      backgroundColor: '#1e1e1e'
    }}>
      <div><h1>Cydex머신정보</h1></div>
      <button onClick={() => navigate('/logo')}>돌아가기</button>
      <button onClick={() => navigate('/hammer')}>hammer</button>
      <button onClick={() => navigate('/life')}>LifeFitness</button>
      <button onClick={() => navigate('/panatta')}>panatta</button>

      <div>
        <p>바이오메커닉스(운동역학)에 기반한 설계로 유명</p>
        <p>관절에 무리가 없는 궤적으로 운동에 제일 중요한 부상방지 좋음</p>
        <p>부드러운 저향력으로 편안한 운동감을 제공</p>
      </div>

        <div className="cydex" style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '80px'
      }}>
          {CydexMachine.map((cydexs) => (
            <div key={cydexs.id} style={{
              marginBottom: '10px',
              border: '5px solid white',
              width: '450px',
              marginLeft: '80px',
              marginTop: '50px'
            }}>
              <h2>{cydexs.name}</h2>
              <div className="cybeximg" style={{
                backgroundImage: `url(${cydexs.image})`,
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

export default Cybex;