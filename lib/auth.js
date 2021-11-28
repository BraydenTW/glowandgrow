import React, { createContext, useContext, useEffect, useState } from 'react';

import Router from 'next/router';
import cookie from 'js-cookie';
import { createUser } from './db';
import firebase from './firebase';

// @ts-ignore
const authContext = createContext();

// @ts-ignore
export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  // @ts-ignore
  const handleUser = async (rawUser) => {
    if (rawUser) {
      // console.log(rawUser)
      const user = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;
      // @ts-ignore
      createUser(user.uid, JSON.parse(JSON.stringify(userWithoutToken)));
      // @ts-ignore
      setUser(user);

      cookie.set('glowandgrow-auth', 'true', {
        expires: 1
      });

      setLoading(false);
      return user;
    } else {
      // @ts-ignore
      setUser(false);
      cookie.remove('glowandgrow-auth');

      setLoading(false);
      return false;
    }
  };

  // @ts-ignore
  const signinWithGoogle = (redirect) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        setAuthError('');
        handleUser(response.user);
        // @ts-ignore
        redirect();
        // if (redirect) {
        //   Router.push(redirect)
        // }
      })
      .catch((err) => {
        setAuthError(err.message);
      });
  };
  const signout = () => {
    Router.push('/');

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signinWithGoogle,
    signout,
    authError
  };
}

// @ts-ignore
const formatUser = async (user) => {
  // console.log(user)
  const token = await user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token
  };
};
