import { useEffect } from 'react';
import css from '../css/App.module.css';
import Intro from '../components/intro';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Root = () =>{
  const {pathname} = useLocation();

  const setScreenSize = ()=> {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className={css.app}>
        <Link className={css.h1} to={"/"}><p>YuDa</p></Link>
      <main>
        <Outlet/>
      </main>
      {pathname === '/' && <Intro/>}
    </div>
  );
}

export default Root