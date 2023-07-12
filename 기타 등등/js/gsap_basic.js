gsap.from(".circle", {
  x: -500,
  duration: 3,
  backgroundColor: "green",
  yPercent: 100,
  rotaion: 180,
  scale: 2,
  repeat: 3, // animation을 3회 추가하는 것
  yoyo: true,
  ease: "linear",
  ease: "bounce.inOut",
  ease: "power1.out",
});

const staggerAll = document.querySelectorAll(".stagger");
console.log(staggerAll);
//from, to의 target 으로는 배열 형태가 와도 됨
gsap.from(staggerAll, {
  ease: "elastic",
  duration: 3,
  scale: 0.5,
  stagger: 1.5,
  repeat: -1,
});

staggerAll.forEach((circle) => {
  circle.addEventListener("click", () => {
    gsap.to(".stagger", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
  });
});

// timeline
// 연속적인 애니메이션을 만들기 위해서 사용
let tl = gsap.timeline();
// tl.to('.skyblue',{
//     x: 400,
//     duration:2
// });

// tl.to('.gray',{
//     x: 500,
//     duration:2
// })

// tl.to('.yellow',{
//     x:600,
//     duration:3
// })
tl.to(".skyblue", {
  x: 400,
  duration: 2,
})

  .to(
    ".gray",
    {
      x: 500,
      duration: 2,
    },
    "<" //이전 동작과 동시에 움직이게 하고 싶다는 의미-pm 2:40
  )

  .to(
    ".yellow",
    {
      x: 600,
      duration: 3,
    },
    "+=5" //시작을 하고 나서 9초 이후에 실행되라는 뜻-pm 2:42
  );

/*
  to/from의 세 번째 매개변수
  - 2(숫자) : 전체 타임라인에 대해서 ~초 뒤에 시작한다는 의미
  (absolutely)
  -"<": 이전 움직임과 동시에 시작
  - "+=2" : 마지막에 끝난 움직임보다 ~초 뒤에 시작하겠다! -pm 2:59
*/
