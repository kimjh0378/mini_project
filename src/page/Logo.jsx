import { useNavigate } from "react-router-dom"
import LogoList from "../components/LogoList"
import cydex from "../logoimg/cybex.png"
import hammer from "../logoimg/hammer.png"
import life from "../logoimg/life.png"
import panatta from "../logoimg/panatta.png"
import '../page/Homepage.css'




function Logo () {

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
    
    <div className="logobody">
      <div className="logoContainer">
        <h1>🏋️‍♂️헬스장 머신정보🏋️‍♂️</h1>
        <LogoList logos={logos} />
        <button onClick={() => navigate('/cydex')}>cydex 정보보기</button>

        
        <button onClick={() =>navigate('/hammer')}>hammer 정보보기</button>


        <button onClick={() => navigate('/life')}>life 정보보기</button>


        <button onClick={() => navigate('/panatta')}>PANATTA 정보보기</button>

      </div>


      
      

      

     

      
    </div>

  )
  
  
}


export default Logo;