import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head >
        <title>Amir | Software Developer</title>
        <meta name="description" content="I’m a Software Developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main/>
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
