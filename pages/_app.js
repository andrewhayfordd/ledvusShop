import '@/styles/HeroBanner.css';
import '@/styles/Index.css';
import '@/styles/Product.css';
import '@/styles/Footer.css';
import '@/styles/Navbar.css';
import '@/styles/globals.css';
import '@/styles/Ffooter.css';
import '@/styles/contact.css';
import './fontawesome-free-6.4.0-web/css/all.min.css';

import React from 'react';
import Layout from '@/Components/Layout';
import { StateContext } from '@/Context/StateContext';
import { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  </StateContext>
  )
}

export default MyApp