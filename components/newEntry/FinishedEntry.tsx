import { 
  ArrowRightIcon,
  ClipboardIcon,
  ClockIcon,
  HomeIcon
} from '@heroicons/react/outline';

import AppLayout from '@/components/app/AppLayout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import Facebook from '../../public/images/facebook.png';
import Instagram from '../../public/images/instagram.png';
import Twitter from '../../public/images/twitter.png';
import React from 'react';
import { useAuth } from '@/lib/auth';
import { useState } from 'react';

function FinishedEntry({ grow, glow } : { grow: string, glow: string }) {
  const getFormattedUrl = () => {
    const phrase = 'Hey everyone! Today a grow for me was: ' +
      grow + '\n A glow for me was: ' + glow;
    console.log(encodeURIComponent(phrase));
    return encodeURIComponent(phrase);
  }
  const auth: any = useAuth();
  return (
    <div className="flex justify-center">
      <div className="space-y-12">
        <p className="text-center mt-36 mb-4 text-6xl leading-tight md:leading-none text-indigo-200">
          Great work, {auth.user && auth.user.name.split(' ')[0]}!
        </p>
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="md:max-w-2xl mt-4 text-lg text-indigo-200">
            Now that you are finished for the day, would you like to share your progress with others?
          </p>
          <div className="mx-auto flex justify-center grid-cols-1 gap-8">
            <div className="w-64 italic mt-12 mx-auto items-center cursor-pointer bg-indigo-500 text-xl text-white font-bold hover:bg-hover-700 hover:text-gray-300 rounded-full px-10 pt-4 pb-3">
              <Link href="/home">
                <span className="inline-flex">
                  Return Home <HomeIcon className="h-5 w-5 ml-4 mt-1" />
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
  );
}

export default FinishedEntry;
