import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GlowAndGrow</title>
      </Head>
      <div className="bg-funBlue text-center min-h-screen flex justify-center items-center flex-col">
        <h1 className="text-3xl">Fix the inner self</h1>
        <p className="text-funGray text-lg max-w-2xl w-full mt-4 mb-6">
          Reflecting on your doesn't have to be complicated. Simply record one
          way you "glowed" and one way you can "grow" based off your day.
        </p>
        <Link href="/get-started">
          <span className="cursor-pointer mt-6 bg-indigo-500 text-xl text-white font-bold hover:bg-hover-600 rounded-full px-10 pt-4 pb-3">
            Get Started
          </span>
        </Link>
      </div>
    </>
  );
};

export default Home;
