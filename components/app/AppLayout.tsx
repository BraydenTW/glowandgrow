import Navbar from './Navbar';
import React from 'react';
import { useAuth } from '@/lib/auth';

const AppLayout: React.FC<{}> = ({ children }) => {
  const auth = useAuth();
  return (
    <div>
      {auth && auth.user && (
        <div className="min-h-screen bg-funBlue">
          <Navbar />
          <div className="bg-funBlue p-5 w-full">{children}</div>
        </div>
      )}
    </div>
  );
};

export default AppLayout;
