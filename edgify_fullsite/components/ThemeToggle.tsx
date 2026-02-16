'use client';
import { useState, useEffect } from 'react';

export default function ThemeToggle(){
 const [dark,setDark]=useState(false);

 useEffect(()=>{
  const saved=localStorage.getItem('theme')==='dark';
  setDark(saved);
 },[]);

 function toggle(){
  const newVal=!dark;
  setDark(newVal);
  localStorage.setItem('theme', newVal?'dark':'light');
  document.documentElement.classList.toggle('dark', newVal);
 }

 return (
  <button onClick={toggle} className="px-3 py-1 border rounded">
   {dark?'☀️':'🌙'}
  </button>
 );
}