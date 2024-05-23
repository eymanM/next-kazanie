"use client";
import React, {useEffect, useState} from 'react';

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
    const [content, setContent] = useState<string>('');
    useEffect(() => {
      fetch('http://localhost:3000/api/openai')
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
