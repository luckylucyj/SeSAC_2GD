import { PropsType1, PropsType2, PropsType3 } from "../components/PropsType";
import Count from "../components/Count";
import SetText from "../components/SetText";
import EventObj from "../components/EventObj";
import HeaderMenu from "../components/HeaderMenu"
export default function Lecture(){
  return(
    <>
    <HeaderMenu/>
    <h1>lecture</h1>
      <PropsType1 name="jiyun" />
      <PropsType2
        width="100px"
        height="100px"
        color="green"
        borderColor="black"
      />
      <PropsType3 width={200} height={200} color="yellowgreen" text="안녕하세요" />
      <Count />
      <SetText />
      <EventObj />
      </>
  )
}