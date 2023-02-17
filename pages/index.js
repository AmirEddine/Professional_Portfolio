import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home({content}) {
  return (
    <div>
      <Head content ={content}>
        <title>Amir | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main content ={content}/>
    <About content ={content}/>
    <Skills content ={content}/>
    <Projects content ={content}/>
    <Contact content ={content}/>
    </div>
  )
}
