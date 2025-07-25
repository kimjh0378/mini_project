import gym from "../bg.jpg"
import gym2 from "../bg2.jpg"
import bfaf from "../bfaf.jpg"
import money from "../money.jpg"
import '../page/homepage.css'
import cydex from "../logoimg/cybex.png"
import hammer from "../logoimg/hammer.png"
import life from "../logoimg/life.png"
import panatta from "../logoimg/panatta.png"
import { useNavigate } from "react-router-dom"



function HomePage () {
  const navigate = useNavigate();

    const logos = [
      {
       id: 1,
       image: cydex,
      },

      {
        id: 2,
        image: hammer,
      },

      {
        id: 3,
        image: life,
      },

      {
        id: 4,
        image: panatta
      },
    ]


    



  return (

    
    
    
    
    <div> 
      <div className="logoBox">
        
      {logos.map((logo, index)=> (
        <div key={logo.id} style={{marginBottom: "0px"}}>
          <div className="logoimg" style={ {
            backgroundImage: `url(${logo.image})`,
            width: '110px',
            height: '110px',
            backgroundSize: '110px',
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'left',
            border: '1px solid black'
          }}>
          </div>
        </div>
      )) }
        <div className="logocup">
          <p>asdasd</p>
        </div>
      </div>
      <h3>최고급 수입명품 기구 완비 머신 정보가 궁금하시면?! ▶<button onClick={() => 
            navigate('/logo')
      }>기구 정보보기</button>◀ </h3>

      <div>
        <div className="money">
          <h1>오운완짐 가격정보</h1>
          <h2>3개월 : 18만원</h2>
          <h2>6개월 : 32만원</h2>
          <h2>12개월 : 50만원</h2>
        </div>
      </div>
      <div className="main-bg" style={{backgroundImage:'url(' + gym + ')',
        height: '400px',
        backgroundSize: '400px',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'right',
        marginTop : '-240px'
      }}>

      </div>
      
        <div className="main-bg2" style={{backgroundImage: 'url('+ gym2 + ')',
          height: '400px',
        backgroundSize: '400px',
        backgroundRepeat:'no-repeat',
        backgroundPosition: '1105px center',
        marginTop: '-400px'
        
        
        }}>

        </div>
      
      
    </div>
  )
}

export default HomePage;