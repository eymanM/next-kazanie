"use client";
import React, {useEffect, useState} from 'react';

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
    const [content, setContent] = useState<string>('');
    const randomNumber = Math.floor(Math.random() * 100000);
    useEffect(() => {
      fetch(`https://next-kazanie-git-main-eymanms-projects.vercel.app/api/openai`, { cache: 'no-store' })
        .then((res) => res.json())
        .then((data) => {
          setContent(data.message);
        });

      return () => {
        console.log('cleanup');
      }
    }, []);

  return (
      content === '' ? <h1>Wczytywanie</h1> : <h2>{content}</h2>
  );
}
