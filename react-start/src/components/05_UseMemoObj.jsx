import { useState, useEffect, useMemo } from "react";

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);
  //is가 붙는 함수명은 참과 거짓을 쓰는 불리언임-pm 4:16
  // const location = {
  //     country:isKorea ? '한국' : '외국',
  // };

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);
  //   isKorea의 값이 바뀌면 다시 랜더링해라, useEffect랑 비슷함-pm 4:23
  // 다시 읽는게 아니고 값을 가져다 쓰는 거-pm 4:25-예시 for문을 1억번 돌리는 경우

  // const loctaion =isKorea ? '한국': '외국';
  //const loctaion의 값을 객체로 안두고 하는 방법도 있음-pm 4:27
  // [location]에 배열이나 객체가 들어가면 useMemo를 써서 값을 가져와야 한다-pm 4:27

  /**
   * const location = isKorea ? '한국' : '외국';
   * 오브젝트나 배열을 useEffect의 의존성 배열에 넣지 않아도 되는 경우라면,
   * useMemo를 사용하지 않는 편이 더 좋습니다. 
   */

  useEffect(() => {
    console.log("location이 변경될때마다 실행됩니다.🎈");
  }, [location]);
  return (
    <>
      <h4>useMemo 써보기</h4>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
      ></input>
      <div>{number}</div>
      <hr />
      <div>{location.country}</div>

      <button
        onClick={() => {
          setIsKorea(!isKorea);
        }}
      >
        나라 바꾸기
      </button>
    </>
  );
}
