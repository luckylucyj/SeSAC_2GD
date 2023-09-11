import styled from "styled-components";

export default function Sean() {
  const Span = styled.span`
    color: green;
  `;

  return (
    <>
      <h4>
        학생의 이름은 <Span>sean</Span>입니다.
      </h4>
      <button>이전페이지로</button>
    </>
  );
}
