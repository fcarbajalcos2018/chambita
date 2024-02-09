"use client"

import { useRouter } from 'next/navigation';
import { NavBar } from '@/shadcn-ui/navbar';
import { useEffect } from 'react';
import { ListaDeResultados } from '@/shadcn-ui/resultados';
import * as zod from 'zod';

let isLoggedIn = true;

function showPostLogin() {
  
}

export default function Home() {
  const route = useRouter();
  const data = isLoggedIn;
  if (!isLoggedIn) {
    route.push('/login');
  }
  console.log('d');
  useEffect(()=>{
    console.log('Use');
  }, []);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar/>
      <ListaDeResultados/>
    </main>
  );
}