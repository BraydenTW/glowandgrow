import { ClockIcon, PencilIcon } from '@heroicons/react/outline';

import AppLayout from '@/components/app/AppLayout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import Notebook from '../public/images/notebook.png';
import React from 'react';
import { useAuth } from '@/lib/auth';

function home() {
  const auth: any = useAuth();
  return (
    <>
      <Head>
        <title>Home | GlowAndGrow</title>
      </Head>
      <AppLayout>
        <div className="pb-10 flex justify-center">
          <div className="">
            <div className="max-w-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <div className="z-10">
                <Image src={Notebook} alt="notebook" />
              </div>
            </div>
            <p className="text-center mt-3 mb-12 text-6xl leading-tight md:leading-none text-indigo-200">
              Welcome, {auth.user && auth.user.name}
            </p>
            <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <p className="md:max-w-2xl mt-4 text-lg text-indigo-200">
                The stars are shining bright today. We hope that with this tool
                you will be able to take your journaling to the next level.
              </p>
              <div className="mx-auto flex justify-center grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-64 italic mt-12 mx-auto items-center cursor-pointer bg-indigo-500 text-xl text-white font-bold hover:bg-hover-700 hover:text-gray-300 rounded-full px-10 pt-4 pb-3">
                  <Link href="/new-entry">
                    <span className="inline-flex">
                      Create Entry <PencilIcon className="h-5 w-5 ml-4 mt-1" />
                    </span>
                  </Link>
                </div>
                <div className="w-64 italic md:mt-12 mx-auto items-center cursor-pointer bg-indigo-500 text-xl text-white font-bold hover:bg-hover-700 hover:text-gray-300 rounded-full px-10 pt-4 pb-3">
                  <Link href="/dashboard">
                    <span className="inline-flex">
                      Past Entries <ClockIcon className="h-5 w-5 ml-4 mt-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}

export default home;
