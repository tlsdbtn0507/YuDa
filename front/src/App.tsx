import { useEffect } from 'react';
import css from '../src/css/App.module.css';

function App() {

  const setScreenSize = ()=> {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className={css.app}>
      <h1 className={css.h1}>YuDaApp!</h1>
      <section className={css.section}>
        <p>주저리 주저리</p>
        <p>주절 주절</p>
        <p>대충 일기 앱이다 이거야~</p>
      </section>
      <button className={css.button}>시작하기</button>
    </div>
  );
}

export default App;
