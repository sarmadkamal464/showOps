// src/pages/index.tsx

import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useGlobalState } from '../context/GlobalState';
import Sidebar from '../components/sidebar';
import Navbar from '../components/Navbar/navbar';
import EventForm from '../components/eventform';

const Home: NextPage = () => {
  const [state, dispatch] = useGlobalState();

  return (
    <div className={styles.container}>
      <div className="main-wrapper">
        <Sidebar />
        <div className="content">
          <Navbar />
          <EventForm />
        </div>
      </div>

      <Head>
        <title>Next.js Boilerplate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <button onClick={() => dispatch({ type: 'SET_USER', payload: 'John Doe' })}>
          Set User
        </button>

        <p>{state.user ? `User: ${state.user}` : 'No user set'}</p>
      </main> */}
    </div>
  );
};

export default Home;
