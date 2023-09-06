import '../styles/style.scss';
import img1 from '../assets/img1.png';
import UseScss01 from './UseScss01';
export default function UseScss(){
    return(
        <>
        <div className="div1">
            <div className="div2">
                <div className="div3"></div>
            </div>
        <button className="btn orangered">button1</button>
        <button className="btn btn--opacity">button2</button>
        <button className="btn btn--blue">button3</button>
        </div>
        <div className="container">
            <div className="box1"></div>
            <div className="box1"></div>
            <div className="box1"></div>
            <p className="circle"></p>
            <p className="circle"></p>
            <p className="circle"></p>
            <div className="box2">HI1</div>
            <div className="box2">HI2</div>
            <div className="box2">HI3</div>
            <div className="box2">HI4</div>
        </div>

        <h2>참고 &gt; 이미지 적용하기</h2>
        <img src="../assets/img1.png" alt="경로명으로 접근" />
        {/* 이미지 첨부할 때 경로명으로 접근하는건 좋지 않다. 왠만하면 import로 접근하셈-pm 2:27 */}
        <img src={img1} alt="import로 접근" width={'100px'} />
        <div className='src-img img-test'></div>

        <h4>2. public 폴더 내부의 이미지 가져오기</h4>
        <img src="/img1.png" alt="public 폴더 사진 접근" width={'100px'} />
        {/* public안에 바로 있으니까 루트로 접근하듯이 하면 위치 지정하면 된다.-pm 2:30 */}
        <img src={process.env.PUBLIC_URL + '/img1.png'} alt="public 폴더 사진 접근" width={'100px'} />

        {/* public에서 가져올 때 PUBLIC_URL로 지정해서 넣는게 좋음 */}
        {/* 파비콘아니면 src안에 넣어서 첨부하고 파비콘은 퍼블릭에 넣는게 좋음-pm 2:33 */}
        <div className='public-img img-test'></div>
            <h1>실습문제</h1>
        <div className="practice">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <UseScss01></UseScss01>
        </>
    )
}