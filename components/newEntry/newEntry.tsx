import React, { useEffect, useState } from 'react';

import { createEntry } from '@/lib/db';
import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import FinishedEntry from './FinishedEntry';

function newEntry() {
  const router = useRouter();
  const auth = useAuth();
  const [glow, setGlow] = useState('');
  const [grow, setGrow] = useState('');
  const [glowError, setGlowError] = useState('');
  const [growError, setGrowError] = useState('');
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGlow = (e: any) => {
    setGlow(e.target.value);
  };
  const handleGrow = (e: any) => {
    setGrow(e.target.value);
  };
  const handleSubmit = () => {
    if (glow.replace(/\s+/g, '') === '' || grow.replace(/\s+/g, '') === '') {
      setGlowError(
        glow.replace(/\s+/g, '') === '' ? 'Please fill this out.' : ''
      );
      setGrowError(
        grow.replace(/\s+/g, '') === '' ? 'Please fill this out.' : ''
      );
    } else {
      let newEntry = {
        glow: glow,
        grow: grow,
        userId: auth.user.uid,
        createdAt: new Date().toISOString()
      };
      setLoading(true);
      setFinished(true);
      createEntry(newEntry, () => {
        console.log('Entry submitted!')
      });
    }
  };
  return (
    <>
      {!finished ? 
      <div className="mt-10 max-w-2xl m-auto flex items-start flex-col justify-center text-left">
        <div className="w-full">
          <h2 className="text-3xl flex justify-center">
            What did you accomplish today?
          </h2>
          <textarea
            value={glow}
            className="mt-4 text-gray-100 w-full flex border-2 border-funBlue-light mx-auto justify-center rounded-xl bg-fieldBlue p-4 placeholder-gray-500"
            onChange={handleGlow}
            placeholder="ex: Showing kindness to my family, being a good friend, being honest with myself."
          ></textarea>
          <p className="mt-2 text-sm flex mx-auto justify-center text-red-500 font-bold ">
            {glowError}
          </p>
        </div>
        <div className="w-full mt-8 mb-4">
          <h2 className="text-3xl flex justify-center">
            What could you improve at?
          </h2>
          <textarea
            value={grow}
            className="mt-4 text-gray-100 w-full border-2 border-funBlue-light flex justify-center mx-auto rounded-xl bg-fieldBlue p-4 placeholder-gray-500"
            onChange={handleGrow}
            placeholder="I could have been a better teammate on my soccer team."
          ></textarea>
          <p className="mt-2 flex mx-auto justify-center text-sm text-red-500 font-bold">
            {growError}
          </p>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-6 bg-indigo-500 mx-auto flex justify-center hover:text-gray-300 text-xl text-white font-bold hover:bg-hover-600 rounded-full px-10 pt-4 pb-3"
        >
          {loading ? (
            <div
              style={{
                margin: '0 44.8px',
                borderTopColor: 'transparent'
              }}
              className="w-6 h-6 border-2 border-white border-solid rounded-full animate-spin"
            ></div>
          ) : (
            'Complete Entry!'
          )}
        </button>
      </div> :
      <FinishedEntry grow={grow} glow={glow} />
      }
    </>
  );
}

export default newEntry;
