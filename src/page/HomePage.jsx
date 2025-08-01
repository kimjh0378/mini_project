import gym from "../bg.jpg"
import gym2 from "../bg2.jpg"
import bfaf from "../bfaf.jpg"
import bfaf2 from "../bfaf2.png"
import '../page/Homepage.css'
import cydex from "../logoimg/cybex.png"
import hammer from "../logoimg/hammer.png"
import life from "../logoimg/life.png"
import panatta from "../logoimg/panatta.png"
import { useNavigate } from "react-router-dom"
import olympia from "../olympia.svg"
import gold1 from "../gold/gold1.jpg"
import gold2 from "../gold/gold2.jpg"
import gold3 from "../gold/gold3.jpg"




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

 
    <div className="homepagebox"> 
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
            backgroundColor: 'white'
          }}>
          </div>
        </div>
      )) }
      <h3 style={{
        marginTop: '35px',
        color: 'black'
        
      }}>최고급 수입명품 기구 완비 머신 정보가 궁금하시다면?! ▶<button onClick={() => 
            navigate('/logo')
      }>기구 정보보기</button>◀ </h3>
      
       
      </div>

      
       <div style={{
        backgroundImage: 'url(' + olympia + ')',
        height: '800px',
        width: '1200px',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // border : '1px solid red',
        transform: 'translateX(350px) translateY(0px)',
        
       }}>
       </div>

       <div className="gymnum">
         <h1>전국최대 규모 헬스장</h1>
         <h1>오운완짐</h1>
       </div>

       <div className="gymnum2">

        <h3 style={{
          width: '800px',
          height: '400px',
          // border: '1px solid blue',
          position: 'absolute',
          bottom: '-1650px',
          left: '900px',
          fontSize: '55px',
          color: 'white'
        }}>전국 최대 오운완짐은 약 1000평 규모의 헬스장으로 수많은 머신들과 프리웨이트존 이 구비되어있습니다 </h3>


        <h3 style={{
          width: '800px',
          height: '400px',
          // border: '1px solid red',
          position: 'absolute',
          bottom: '-2450px',
          left: '100px',
          fontSize: '60px',
          color: 'white'
        }}>프리웨이트존이 넓어서 초보자 분들도 눈치보지 않고 운동을 할수있고 다양한 덤벨 무게로 많은 운동을 할수있습니다</h3>

        <h3 style={{
          width: '800px',
          height: '400px',
          // border: '1px solid green',
          position: 'absolute',
          bottom: '-3250px',
          left: '900px',
          fontSize: '60px',
          color: 'white'
        }}>최소무게 1kg 부터 최대 80kg덤벨까지 구비하여 초보자부터 상급자 까지 원하는 무게를 사용할수있습니다 </h3>

        <h2 style={{
          width: '1290px',
          height: '400px',
          // border: '1px solid white',
          position: 'absolute',
          bottom: '-4200px',
          left: '300px',
          fontSize: '100px',
          color: 'white',
          
          
        }}>좋은 기구에는 좋은 트레이너</h2>


       </div>


        <div className="money">
          <h1>🔥가격정보🔥</h1>
          <h2>3개월 : 18만원</h2>
          <h2>6개월 : 32만원</h2>
          <h2>12개월 : 50만원</h2>
          <h2>pt 1회당 :12만원</h2>
          <p></p>
        </div>




      
      <div className="main-bg" style={{backgroundImage:'url(' + gym + ')',
        height: '110px',
        width: '110px',
        backgroundSize: '110px',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'right',
        transform: 'translateX(1795px) translateY(-910px) '
        
      }}>

      </div>
      
        <div className="main-bg2" style={{backgroundImage: 'url('+ gym2 + ')',
          height: '110px',
          width: '110px',
        backgroundSize: '110px',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
        transform: 'translateX(1685px) translateY(-1020px)'
        
        
        }}>

        </div>
      <div style={{
        backgroundImage: 'url(' + gold1 + ')',
        height: '500px',
        width: '500px',
        backgroundSize: 'cover',
        transform: 'translateX(100px) translateY(900px)',
        borderRadius: '40%'
        
      }}></div>

      <div style={{
        backgroundImage: 'url(' + gold2 + ')',
        height: '500px',
        width: '500px',
        backgroundSize: 'cover',
        transform: 'translateX(1100px) translateY(1100px)',
        borderRadius: '40%'
      }}>
      </div>

      <div style={{
        backgroundImage: 'url(' + gold3 + ')',
        height: '500px',
        width: '500px',
        backgroundSize: 'cover',
        transform: 'translateX(100px) translateY(1450px)',
        borderRadius: '40%'
      }}>
      </div>


      <h1 style={{
        color: 'white',
        transform: 'translateX(200px) translateY(2500px)',
        width: '500px'
      }}>김로니 관장님 pt 회원</h1>
      <div style={{
        backgroundImage: 'url(' + bfaf + ')',
        height: '500px',
        width: '700px',
        backgroundSize: 'cover',
        transform: 'translateX(170px) translateY(2700px)',
        borderRadius: '20%'
      }}>
      </div>

      <div style={{
        backgroundImage: 'url(' + bfaf2 + ')',
        height: '500px',
        width:'550px',
        backgroundSize: 'cover',
        transform: 'translateX(1100px) translateY(2200px)',
        borderRadius: '20%'
      }}></div>
      
    </div>
  )
}

export default HomePage;