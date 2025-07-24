import gym from "../bg.jpg"
import gym2 from "../bg2.jpg"
import bfaf from "../bfaf.jpg"
import money from "../money.jpg"

function HomePage () {
  return (
    <div> 
      <div className="main-bg" style={{backgroundImage:'url(' + gym + ')',
        height: '400px',
        backgroundSize: '400px',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'right',
       
        
      }}>
        <div className="main-money" style={{backgroundImage:'url(' + money + ')',
        height: '500px',
        backgroundSize: '500px',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'left',

        }}>

        </div>

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