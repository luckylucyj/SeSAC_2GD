import GlobalStyle from "../components/GlobalStyle";
import MatzipHeader from "../components/practice/matzip/MatzipHeader";
import Card from "../components/practice/matzip/Card";
import styled from "styled-components";
import { useState } from "react";

const Inner = styled.div`
  max-width: 1000px;
  background-color: #ddffff;
  margin: 0 auto;
  padding: 0.5rem 1rem;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  //아이템 영역안에서 중앙정렬하려고 썼음-pm 2:52
`;

interface MatzipForm {
  imgSrc: string;
  title: string;
  desc: string;
  idx?: number;
}
export default function Matzip() {
  const mapoArr: MatzipForm[] = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/을밀대.webp`,
      title: "을밀대",
      desc: "~~~~~설명 어쩌구 주절주절 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem optio, omnis natus, fugit deserunt nobis ut reiciendis aliquid, ipsam mollitia perspiciatis! Iusto laborum aperiam hic ullam nulla, nemo dolor consequatur.",
      idx: 1,
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/수퍼.jpg`,
      title: "수퍼",
      desc: "설명어쩌구2",
      idx: 2,
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/옴레스토랑.jpg`,
      title: "옴레스토랑",
      desc: "설명어쩌구3",
      idx: 3,
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/한강껍데기.jpg`,
      title: "한강껍데기",
      desc: "설명어쩌구4",
      idx: 4,
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/마포갈매기.jpg`,
      title: "마포갈매기",
      desc: "설명어쩌구5",
      idx: 5,
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/assets/소점.jpg`,
      title: "소점",
      desc: "설명어쩌구7",
      idx: 6,
    },
  ];

  const gangdongArr: MatzipForm[] = [
    {
      imgSrc: "",
      title: "봉평 메밀촌",
      desc: "~~~~~설명 어쩌구 주절주절",
      idx: 1,
    },
    { imgSrc: "", title: "아바이순대", desc: "설명어쩌구2", idx: 2 },
    { imgSrc: "", title: "서울육개장 짚불고기", desc: "설명어쩌구2", idx: 3 },
    { imgSrc: "", title: "셀프하우스", desc: "설명어쩌구2", idx: 4 },
    { imgSrc: "", title: "호치민", desc: "설명어쩌구2", idx: 5 },
    { imgSrc: "", title: "평양만두집", desc: "설명어쩌구2", idx: 6 },
  ];

  const dobongArr: MatzipForm[] = [
    {
      imgSrc: "",
      title: "마쯔무라 돈까스",
      desc: "~~~~~설명 어쩌구 주절주절",
      idx: 1,
    },
    { imgSrc: "", title: "하누소", desc: "설명어쩌구2", idx: 2 },
    { imgSrc: "", title: "판다쓰", desc: "설명어쩌구2", idx: 3 },
    { imgSrc: "", title: "옹기꽃게장", desc: "설명어쩌구2", idx: 4 },
    { imgSrc: "", title: "호호분식", desc: "설명어쩌구2", idx: 4 },
  ];

  const [mapo, setMapo] = useState<boolean>(false);
  const [dobong, setDobong] = useState<boolean>(false);
  const [gangdong, setGangdong] = useState<boolean>(false);

  return (
    <>
      <GlobalStyle />
      <MatzipHeader
        mapo={mapo}
        dobong={dobong}
        gangdong={gangdong}
        setMapo={setMapo}
        setDobong={setDobong}
        setGangdong={setGangdong}
      />
      <Inner>
        <GridContainer>
          {/* <Card
            imgSrc=""
            title="제목"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis dignissimos quam ducimus necessitatibus dolores commodi non nemo dolorem quasi esse assumenda blanditiis animi repellendus, beatae distinctio suscipit dicta hic alias!"
          /> */}
          {mapo &&
            mapoArr.map((el) => {
              return (
                <Card
                  imgSrc={el.imgSrc}
                  title={el.title}
                  desc={el.desc}
                  key={el.idx}
                />
              );
            })}
          {dobong &&
            dobongArr.map((el) => {
              return (
                <Card
                  imgSrc={el.imgSrc}
                  title={el.title}
                  desc={el.desc}
                  key={el.idx}
                />
              );
            })}
          {gangdong &&
            gangdongArr.map((el) => {
              return (
                <Card
                  imgSrc={el.imgSrc}
                  title={el.title}
                  desc={el.desc}
                  key={el.idx}
                />
              );
            })}
        </GridContainer>
        {!gangdong && !dobong && !mapo && (
          <h1 style={{ textAlign: "center" }}>메인페이지입니당</h1>
        )}
      </Inner>
    </>
  );
}
