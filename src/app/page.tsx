
import React from 'react';
import SignIn from '@/components/sign-in';
import SignUp from '@/components/sign-up';
import {Navbar} from '@/components/navbar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-col md:flex-row gap-4">
          <SignIn />
          <SignUp />
        </div>
      </div>
    </div>
  );
}
