function HelloWorldButton() {
    const [isClick, setIsClick] = React.useState(false);
    const text = isClick ? '클릭이 되었군요!':'hello, react world!';
    //button 
    //button > div> span으로 구조 변경
    return (
        <button onClick={() => setIsClick(!isClick)}>
            <div>
                <span>{text}</span>
            </div>
        </button>
    )

};

// const element = React.createElement;
const DOMContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(DOMContainer);
root.render(<HelloWorldButton/>);
/*최상단에 root를 지정해서 루트에 그리도록 지정함
-pm 2:50
*/