import MapChild from "./MapChild";
export default function PracticeMap({}) {
  const items = [
    {
      item: "PS5",
      price: "685,000",
    },
    {
      item: "에어 프라이어",
      price: "50,000",
    },
    {
      item: "사세 치킨윙",
      price: "11,500",
    },
  ];

  return(
    <>
    {items.map((data, i)=>{
        return <MapChild key={i} item={data.item} price={data.price}/>
    })}
    </>
  );
}
