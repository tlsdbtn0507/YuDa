import { useEffect } from 'react';
import css from '../css/App.module.css';
import Intro from '../components/intro';
import { Outlet, useLocation } from 'react-router';

const Root = () =>{
  const {key} = useLocation();


  const setScreenSize = ()=> {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className={css.app}>
      <h1 className={css.h1}>YuDa</h1>
      <main>
        <Outlet/>
      </main>
      {key === 'default' && <Intro/>}
    </div>
  );
}

export default Root