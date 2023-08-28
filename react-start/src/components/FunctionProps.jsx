// function FunctionProps(props) {
//   // props={
//   //     name: '',
//   //     krPrice: number,
//   //     number: number
//   // }
//   // return(
//   //     <div>
//   //         <h5>{props.name}</h5>
//   //         <p>{props.number}개의 {props.krPrice}원 (${props.krPrice/1000})</p>
//   //         <hr />
//   //     </div>
//   // )
//   // const {name, krPrice, number}=props;
//   // /**구조분해 할당을 하려면 지정해놓으면 된다-pm 3:19 */
//   //   return (
//   //     <div>
//   //       <h5>{name}</h5>
//   //       <p>
//   //         {number}개의 {krPrice}원 (${krPrice / 1000})
//   //       </p>
//   //       <hr />
//   //     </div>
//   //   );
// }

/*3. props 매개변수로 받는 것이 아닌 바로 받는 방법 */
// function FunctionProps({ name, number, krPrice }) {
//   return (
//     <div>
//       <h5>{name}</h5>
//       <p>
//         {number}개의 {krPrice}원 (${krPrice / 1000})
//       </p>
//       <hr />
//     </div>
//   );
// }

/**4. children과 defaultProps 사용 */
function FunctionProps(props){
  const {name, krPrice, number, children}=props;

  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개의 {krPrice}원 (${krPrice / 1000})
      </p>
      <p>{children}</p>
      <hr />
    </div>
  );
}
FunctionProps.defaultProps={
    name: 'fruit',
    krPrice:10000,
    number:5,
};
export default FunctionProps;
// 위의 방법대로도 할 수 있다-pm 3:22
