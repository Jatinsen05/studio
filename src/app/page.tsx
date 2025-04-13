
'use client';

import React, {useState} from 'react';
import SignIn from '@/components/sign-in';
import SignUp from '@/components/sign-up';
import {Navbar} from '@/components/navbar';

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        {showSignIn ? (
          <SignIn setShowSignIn={setShowSignIn} />
        ) : (
          <SignUp setShowSignIn={setShowSignIn} />
        )}
        <p className="mt-4 text-sm text-muted-foreground">
          {showSignIn ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setShowSignIn(false)}
                className="text-primary hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setShowSignIn(true)}
                className="text-primary hover:underline"
              >
                Sign In
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
