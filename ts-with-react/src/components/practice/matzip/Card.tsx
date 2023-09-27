import { MatzipForm } from "../../../utils/commonInterFace";
import styled from "styled-components";

const CardContainer=styled.div`
  width:240px;
  background-color: whitesmoke;
  height: 300px;
  margin: 1rem;
  box-shadow: 0px 0px 10px rgba(180,180,180,.4);
  text-align: center;
  border-radius: 10px;
`
interface ImgProps{
  src:string;
}

const ImgDiv=styled.div<ImgProps>`
  width:80%;
  height: 150px;
  border: 1px solid #777;
  margin: 1rem auto;
  background-image: url(${(props:ImgProps)=>`${props.src}`});
  background-size:cover;
  background-position: center;
  border-radius:10px;
  @media screen and (max-width: 840px){
    height: 140px;
  }
  @media screen and (max-width: 720px){
    height: 110px;
  }
`
// generic으로 inerface의 타입을 가져오고 싶어서 styled.div옆에다 <ImgProps>적어줌-pm 3:24
//styled 컴포넌트 쓸때는 위에 한번 가져온다는 정의를 쓰고 첨부할 곳에다가 props타입을 한번 더 적어줘야함-pm 3:25

const DescP=styled.p`
  font-size: 14px;
  margin-top: .5rem;
  /* text 자르기 & 말줄임표 처리 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient  : vertical;
  -webkit-line-clamp: 3;
`
//아니면 임포트 아래에 interface 내용 가져와서 쓰면 됨-pm 2:34
export default function Card({imgSrc, title, desc}:MatzipForm)  {
  return (
    <CardContainer>
      <ImgDiv src={imgSrc}></ImgDiv>
      {/* props이름이 src인거임-pm 3:22 */}
      <h3 style={{textAlign:'center', marginTop: '12px'}}>{title}</h3>
      <DescP>{desc}</DescP>
    </CardContainer>
  );
}
