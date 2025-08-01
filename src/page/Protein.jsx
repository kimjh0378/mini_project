import { useState } from "react";
import chicken from "../img/chicken.jpg"
import beef from "../img/beef.jpg"
import duck from "../img/duck.jpg"
import egg from "../img/egg.jpg"
import pig from "../img/pig.jpg"
import '../page/Homepage.css';


function Protein () {
  const foods = [
    {
      id: 1,
      name: "닭가슴살",
      image: chicken,
      info: "저렴한 가격 + 요즘 나오는 제품들은 휴대하기도 쉽고 낮은 칼로리와 100g당 20g으로 높은 단백질로  운동하는 사람 필수템!",
      protein: 20,
    },

    {
      id: 2,
      name: "우둔살",
      image: beef,
      info: "소고기중 우둔살은 소고기 부위중 저렴해서 부담도 덜하며 붉은 고기류에는 크레아틴도 들어가있어 매일 닭가슴살만 먹기 질렸다면 먹기좋은 우둔살!",
      protein: 24,
    },

    {
      id: 3,
      name: "오리고기",
      image: duck,
      info: "오리고기는 불포화지방산 함량이 다른 고기에 비해 매우 높아 비교적 살도 많이 안찌고 맛도 있어서 부담없이 먹기 좋은 오리고기!",
      protein: 19,
    },

    {
      id: 4,
      name: "계란",
      image: egg,
      info: "계란은 완벽 식품으로도 알려져있고 간식으로 먹어도 좋고 휴대성이 좋고 포만감도 높아 다이어트할때 필수품!",
      protein: 6,
    },

    {
      id: 5,
      name: "돼지고기 앞다리살",
      image: pig,
      info: "돼지고기중 앞다리살은 지방이 적고 가격도 매우 저렴한 편이고 쌈채소와 같이 먹으면 식이섬유도 같이 챙길수있으며 포만감도+ 대중적이게 구워먹기 좋아서 추천! ",
      protein: 21,
    },
    
  ]

  const [counts, setCounts] = useState(Array(foods.length).fill(0));
  // 아래 visibleInfos 는 ture일때만 보여주는 함수임 그래서 일단 기본값을 false로 지정을 해놓음 그리고 버튼을 누르면 ture로 바뀌어서 그 음식의 정보만 보이게 됨
  const [visibleInfos, setVisibleInfos] = useState(Array(foods.length).fill(false))

  const btnCount = (index, change) => {
    const newCounts = [...counts]; // 위에 foods배열에있는걸 counts에 옮기고 그 옮긴걸 배열을 다시 깼다 주소값을 만들어서 새로운 newCount에 넣어줌
    newCounts[index] = newCounts[index] + change;  // 현재 수량에다가 change값을 더함
    if(newCounts[index] < 0) {
      newCounts[index] = 0;
    }// newCounts[index]가 0아래로 떨어지면? newCounts[index]를 0으로 만들어서 -1안되게 설정함
    setCounts(newCounts); // 새로운 배열로 보이게하는거임

  };

  const toggleInfo = (index) => {
    const newVisibleInfos = [...visibleInfos];// 기존상태 배열 복사
    newVisibleInfos[index] = !newVisibleInfos[index];
    setVisibleInfos(newVisibleInfos);

  }

  const totalProtein = counts.reduce((acc, curr, index)=> acc+ curr * foods[index].protein,0);


  return (
    <div className="Container">
      <h1>🍖추천식단정보🍖(계란제외 100g기준)</h1>
      <h2>총 단백질 : {totalProtein}g</h2>
      <button onClick={() => {
        setCounts(Array(foods.length).fill(0)); // 이걸 누르면 값이 모두 0으로 fill때문에 바뀌어서 0으로 초기화됨
        setVisibleInfos(Array(foods.length).fill(false)); // 이걸 누르면 모두 false로 바뀌어서 초기화됨
        
      }}>리셋</button>
      <div className="main-bg">
      {foods.map((food, index) => (
        <div key={food.id} style={{
          marginBottom: "40px",
          border: '2px solid black',
          width: '400px',
          
         
          
          
          }}>
          <h2>{food.name}</h2>
          <div  style={ {
            backgroundImage: `url(${food.image})`,
            height: "300px",
            backgroundSize: "400px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",           
          }}
          ></div>
           <div>
          <button onClick={() => {
            btnCount(index, 1)
          }}>+</button>

          <button onClick={() => {
            btnCount(index, -1)
          }}>-</button>

          <button onClick={() => {
            toggleInfo(index);
          }}>정보</button>
          </div>

          
          <h3>수량: {counts[index]}</h3> 
          <h3>단백질: {counts[index] * food.protein} g</h3>
          
          {/* visibleInfos[index]가 참이면 <p>{food.info}</p> 여기에 보이게 설정이 된거임 */}
          {visibleInfos[index] && <p>{food.info}</p>}
          
        </div>
      ))}
    </div>
      
      <div>
        <h3>단백질 섭취 팁</h3>
        <p>흔히 말하는 벌크업(린매스업)은 본인 몸무게 X 단백질 2g 섭취를 해주는게 좋습니다</p>
        <p>다이어트(컷팅)에 들어가면 본인 몸무게 X 1.5~1.8g 섭취를 해주는게 좋습니다</p>
        <p>나는 그냥 그런거 없고 운동 그냥 하는거다 하시면 본인 몸무게 만큼은 섭취 해 주시면 좋습니다</p>
      </div>
      {/* <div style={{
        backgroundImage: 'url(' + tip + ')',
        height: '280px',
        width: '350px',
        backgroundSize: '350px',
        backgroundRepeat: "no-repeat",
        position: 'absolute',
        right: '800px',
        bottom: '-100px'
        
      }}></div> */}

      
    </div>
  )
}

export default Protein;