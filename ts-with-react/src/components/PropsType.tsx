interface Props {
  name: string;
}

function PropsType1({ name }: Props) {
  return <h1>hello, {name}</h1>;
}
interface square {
  // width: string;
  // height: string;
  // color: string;
  [key: string]: string;
  //일일이 인터페이스에 요소를 추가하기 귀찮으면 배열로 지정하면 됨-am 10:40
}

function PropsType2(props: square) {
  const divStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
    border: `3px solid ${props.borderColor}`,
  };
  return <div style={divStyle}></div>;

}
interface Square2 {
  width: number;
  height: number;
  text: string;
  color?: string;
}
const PropsType3 = (props: Square2) => {
  const { width, height, color, text } = props;
  const divStyle:object ={
    width: `${width}px`,
    height: `${height}px`,
    /*
    color props는 optional : 데이터가 전달될 수 있고 전달되지 않을
    수도 있음.
    전달되지 않았을 경우를 삼항연산자로 처리할 수 있다!
    */
    backgroundColor:`${color? color: 'pink'}`,
    textAlign: "center",
    lineHeight: `${height}px`
  }
  return <div style={divStyle}>{text}</div>
};
export { PropsType1, PropsType2, PropsType3 };
