import gym from "../bg.jpg"
import gym2 from "../bg2.jpg"

function HomePage () {
  return (
    <div> 
      <div className="main-bg" style={{backgroundImage:'url(' + gym + ')',
        height: '400px',
        backgroundSize: '400px',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'right',
        
      }}>
        <h1>오운완짐 가격안내</h1>
        <h4>3개월 : 15만원</h4>
        <h4>6개월 : 25만원</h4>
        <h4>12개월 : 45만원</h4>
        <p>pt회당 기존가 10만원❌ 할인가 8만원‼</p>

      </div>
      
        <div className="main-bg2" style={{backgroundImage: 'url('+ gym2 + ')',
          height: '400px',
        backgroundSize: '400px',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'right',
        }}></div>
      
      
    </div>
  )
}

export default HomePage;