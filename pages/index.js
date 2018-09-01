import './style.scss';
import React from 'react';
import { signOut, redirectIfNotAuthenticated } from "../api/auth";

const Home = () => (
  <div>
     <button onClick={signOut}>LogOut</button>
  </div>
);

Home.getInitialProps = (ctx) => {
    if (redirectIfNotAuthenticated(ctx)) {
        return {};
    }
};

export default Home
