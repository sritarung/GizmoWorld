import React, { Children } from 'react';
import Head from 'next/head';
import { Navbar,Footer } from '.';

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Head>
            <title>Gizmo World</title>
        </Head>
        <header>
            <Navbar/>
        </header>
        <main className='main-container'>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default Layout