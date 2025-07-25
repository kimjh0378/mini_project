import { useNavigate } from "react-router-dom";

function LifeFitness() {

  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=> navigate(-1)}>뒤로가기</button>
    </div>
  )
}

export default LifeFitness;