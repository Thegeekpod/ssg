import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import Header from "@/component/Header";
import Footer from "@/component/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Betheretech LLC ",
  deScription: "Go ahead make your business responsibilities lighter by letting us do your digital marketing for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <meta charSet="utf-16" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />


      <body className={`${inter.className} `} suppressHydrationWarning={true}>

        <div id="page" className="site">
          <Header />
          {children}


          <Footer />
          <a id="back-to-top" href="#" className="show"><i className="flaticon-up-arrow"></i></a>
        </div>

        <Script src="/js/jquery.min.js"></Script>
        <Script src="/js/jquery.magnific-popup.min.js"></Script>
        <Script src="/js/jquery.isotope.min.js"></Script>
        <Script src="/js/owl.carousel.min.js"></Script>
        <Script src="/js/easypiechart.min.js"></Script>
        <Script src="/js/jquery.countdown.min.js"></Script>
        <Script src="/js/scripts.js"></Script>
        <Script src="/js/header-mobile.js"></Script>

        <Script src="/plugins/revolution/revolution/js/jquery.themepunch.tools.min.js"></Script>
        <Script src="/plugins/revolution/revolution/js/jquery.themepunch.revolution.min.js"></Script>

        <Script src="/plugins/revolution/revolution/js/extensions/revolution-plugin.js"></Script>

        {/* <Script  src="/js/rev-Script-2.js"></Script> */}
        {/* <Script src="/js/royal_preloader.min.js"></Script> */}

      </body>

    </html>
  );
}
