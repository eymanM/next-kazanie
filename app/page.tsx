'use client'
import React from 'react';
import Link from 'next/link';
import CheckoutForm from '@/components/CheckoutForm';

export default function IndexPage(): JSX.Element {
  return (
    <div className="page-container">
      <h1>Ofiara za wygenerowanie kazania</h1>
      <CheckoutForm uiMode="hosted" />
    </div>
  );
  // return (
  //   <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
  //     <div className="max-w-md w-full space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
  //       <div className="space-y-2 text-center">
  //         <h1 className="text-2xl font-bold">Wygeneruj Kazanie</h1>
  //         <p className="text-gray-500 dark:text-gray-400">Wpisz swoje dane i temat.</p>
  //       </div>
  //       <form className="space-y-4">
  //         <div>
  //           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
  //             Imię
  //           </label>
  //           <input
  //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:border-primary"
  //             id="name"
  //             placeholder="Wpisz swoje imię"
  //             type="text"
  //           />
  //         </div>
  //         <div>
  //           <div className="block text-sm font-medium text-gray-700 dark:text-gray-300">
  //             Nazwisko
  //           </div>
  //           <input
  //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:border-primary"
  //             id="surname"
  //             placeholder="Wpisz swoje nazwisko"
  //             type="text"
  //           />
  //         </div>
  //         <div>
  //           <div className="block text-sm font-medium text-gray-700 dark:text-gray-300">
  //             Email
  //           </div>
  //           <input
  //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:border-primary"
  //             id="email"
  //             placeholder="Wpisz swój email"
  //             type="text"
  //           />
  //         </div>
  //         <div>
  //           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="topic">
  //             Temat Kazania
  //           </label>
  //           <input
  //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:border-primary"
  //             id="topic"
  //             placeholder="Wpisz temat kazania"
  //             type="text"
  //           />
  //         </div>
  //         <div>
  //           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="card-number">
  //             Numer karty
  //           </label>
  //           <input
  //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:border-primary"
  //             id="card-number"
  //             placeholder="Wpisz numer karty"
  //             type="text"
  //           />
  //         </div>
  //         <div>
  //           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="card-expiry">
  //             Data ważności
  //           </label>
  //           <div className="flex space-x-2">
  //             <input
  //               className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:border-primary"
  //               id="card-expiry-month"
  //               placeholder="MM"
  //               type="text"
  //             />
  //             <input
  //               className="mt-1 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:border-primary"
  //               id="card-expiry-year"
  //               placeholder="YY"
  //               type="text"
  //             />
  //           </div>
  //         </div>
  //         <div>
  //           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="card-cvc">
  //             CVC
  //           </label>
  //           <input
  //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:border-primary"
  //             id="card-cvc"
  //             placeholder="CVC"
  //             type="text"
  //           />
  //         </div>
  //         <Link
  //         href="/donate-with-embedded-checkout"
  //         className="card checkout-style-background"
  //       >
  //         <h2 className="bottom">Donate with embedded Checkout</h2>
  //         <img src="/checkout-one-time-payments.svg" />
  //       </Link>
  //       </form>
  //     </div>
  //   </div>
  // )
}
