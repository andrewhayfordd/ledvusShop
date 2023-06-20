import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import Ffooter from '@/pages/Ffooter';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>LEDVUS SHOP</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Ffooter/>
      </footer>
    </div>
  )
}

export default Layout;