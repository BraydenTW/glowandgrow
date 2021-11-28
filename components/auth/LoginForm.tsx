import React, { useState } from 'react';

import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/router';

export default function LoginForm() {
  const auth: any = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  if (auth.user) {
    router.push('/dashboard');
  }
  return (
    <>
      {auth && !auth.user && (
        <div className="min-h-screen bg-funBlue flex items-center justify-center">
          <div className="max-w-sm w-full text-center bg-dark-lighter p-8 rounded-xl">
            <h3 className="text-xl text-white font-bold">Get Started</h3>
            <p className="mt-2 text-sm italic text-funGray">
              Currently, we only support user signups using a Google account.
            </p>
            <button
              className="mt-6 bg-red-500 text-white font-bold hover:bg-hover-600 rounded-lg px-5 pt-3 pb-2"
              onClick={() => {
                setLoading(true);
                auth.signinWithGoogle(() => {
                  setLoading(false);
                  router.push('/dashboard');
                });
              }}
            >
              {loading ? (
                <div
                  style={{ margin: '0 44.8px', borderTopColor: 'transparent' }}
                  className="w-5 h-5 border-2 border-white border-solid rounded-full animate-spin"
                ></div>
              ) : (
                'Continue with Google'
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
