import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useState, useEffect, } from 'react';
import Translation from '../pages/Content/Data.json'
function MyApp({ Component, pageProps }) {


  const [langage, setlangage] = useState(true)
  const [content, setContent] = useState({})
  useEffect(() => {
    langage ? setContent(Translation.English) : setContent(Translation.Français)
  })

  return (
    <>
      <Navbar setlangage={setlangage} langage={langage} content={content} />
      <Component content={content} {...pageProps} />
    </>
  );
}

export default MyApp;
