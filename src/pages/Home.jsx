import React from 'react';
import style from './Home.module.css';

const Home = () => (
  <div className={style.contentContainer}>
    <h1>Welcome to our page!</h1>
    <div className={style.paragraphs}>
      <p>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.`}
      </p>
      <p>
        {`Dictum non consectetur a erat nam at lectus. 
        In ante metus dictum at tempor commodo. 
        Quisque id diam vel quam elementum pulvinar 
        etiam non. Interdum velit euismod in 
        pellentesque massa placerat duis ultricies. 
        Erat velit scelerisque in dictum non. Tellus rutrum 
        tellus pellentesque eu tincidunt tortor aliquam. 
        Fringilla ut morbi tincidunt augue interdum velit. 
        A condimentum vitae sapien pellentesque 
        habitant morbi tristique senectus et. 
        Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. 
        Lorem ipsum dolor sit amet consectetur. Integer malesuada 
        nunc vel risus commodo viverra maecenas accumsan lacus. 
        Arcu cursus euismod quis viverra nibh cras pulvinar.`}
      </p>
    </div>
  </div>
);

export default Home;
