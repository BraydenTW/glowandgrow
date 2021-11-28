import Head from 'next/head';
import LoginForm from '@/components/auth/LoginForm';

function getStarted() {
  return (
    <>
      <Head>
        <title>Get Started | GlowAndGrow</title>
      </Head>
      <LoginForm />
    </>
  );
}

export default getStarted;
