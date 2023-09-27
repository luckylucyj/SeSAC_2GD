import styled from "styled-components";
import {SetStateAction} from 'react';
const PHeader=styled.header`
  background-color: beige;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
`
interface colorProps{
  isTrue: boolean;
}
const Div=styled.div<colorProps>`
  font-size: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props:colorProps)=>props.isTrue? '#ffbbbb': 'black'};
  &:hover{
    color:hotpink;
  }
`
interface Props{
  setMapo: React.Dispatch<SetStateAction<boolean>>;
  setDobong: React.Dispatch<SetStateAction<boolean>>;
  setGangdong: React.Dispatch<SetStateAction<boolean>>;
  //타입스크립트에서 setState함수를 쓰는 법: <SetStateAction<boolean>>
  //action안에 해당 타입을 적어준다.
mapo: boolean;
dobong: boolean;
gangdong: boolean;
}

export default function MatzipHeader(props:Props) {
  const{mapo, gangdong, dobong, setMapo, setGangdong, setDobong}=props;

  function setState(

    func:React.Dispatch<SetStateAction<boolean>>
    ){
    setGangdong(false);
    setDobong(false);
    setMapo(false);
    func(true);
  };
  return (
  <PHeader>
    <Div onClick={()=>setState(setGangdong)} isTrue={gangdong}>강동구</Div>
    <Div onClick={()=>setState(setDobong)} isTrue={dobong}>도봉구</Div>
    <Div onClick={()=>setState(setMapo)} isTrue={mapo}>마포구</Div>
  </PHeader>)
}
//-pm 3:46 완료