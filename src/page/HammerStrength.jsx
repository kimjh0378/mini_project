import { useNavigate } from "react-router-dom";

function HammerStrength () {

  const navigate = useNavigate();
  return(
    <div>
      <button onClick={()=> navigate(-1)}>뒤로가기</button>
    </div>
  )
}

export default HammerStrength;