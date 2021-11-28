import AppLayout from '@/components/app/AppLayout';
import Head from 'next/head';
import NewEntry from '@/components/newEntry/newEntry';
import React from 'react';

function newEntry() {
  return (
    <>
      <Head>
        <title>New Entry | GlowAndGrow</title>
      </Head>
      <AppLayout>
        <NewEntry />
      </AppLayout>
    </>
  );
}

export default newEntry;
