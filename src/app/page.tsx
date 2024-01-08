"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { stringify } from 'querystring';
import { NavBar } from '@/shadcn-ui/navbar';

let isLoggedIn = true;

function showPostLogin() {
  
}

export default function Home() {
  const route = useRouter();
  const data = isLoggedIn;
  if (!isLoggedIn) {
    route.push('/login');
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar/>
    </main>
  );
}