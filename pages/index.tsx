import Head from 'next/head'
import type { GetStaticProps } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'
import { Skill,Experience,Social,Project,PageInfo } from '../typings'
import { fetchSocial } from "../utils/fetchSocials"
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { urlFor } from '../sanity'



type Props = {
  pageInfo : PageInfo ;
  experiences : Experience[];
  skills: Skill [];
  projects :Project[];
  socials : Social[];
}

const Home = ( { pageInfo,experiences,skills,projects,socials} : Props)=> {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo?.name}-Portfolio</title>
        
      </Head>
   
     {/* Header */}

     <Header socials={socials}/>

     {/* Hero */}

     <section id="hero" className="snap-start">

       <Hero pageInfo={pageInfo} />

     </section>

     {/* About */}
     <section id="about" className="snap-center">
       
       <About pageInfo={pageInfo} />
        </section>

     {/* Experience */}
     <section id="experience" className="snap-center">
       <WorkExperience experiences={experiences}/>
     </section>

     {/* Skills */}
     <section id="skills" className="snap-start"> 
       <Skills skills={skills} />
     </section>

     {/* Projets */}
     <section id="project" className="snap-start">
       <Projects projects={projects}/>
     </section>

     {/* contact Me */}

     <section id="contact" className="snap-start" >
       <Contact />
     </section>
     <Link href="#hero">
     
     <footer className="sticky bottom-5 w-full cursor-pointer">
       <div className="flex items-center justify-center">
         <img className="h-9 w-9 rounded-full filter 
     cursor-pointer"  src={urlFor(pageInfo?.heroImage).url()}/>
       </div>
     </footer>
     
     </Link>
    </div>
  )
}

export default  Home ;

export const getStaticProps: GetStaticProps<Props> = async () => {

 const pageInfo : PageInfo = await fetchPageInfo();
 const experiences : Experience [] = await fetchExperiences();
 const skills: Skill [] = await fetchSkills();
 const projects :Project[] = await fetchProjects();
 const  socials : Social[]  = await fetchSocial();

 return {
  props:{
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
  }  ,

  revalidate : 10,
  
};

}
