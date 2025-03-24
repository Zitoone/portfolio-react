import SimpleSlider from "../components/carrousel"
import Footer from "../components/footer"
import Header from "../components/header"
import Map from "../components/map"
import SkillsCompo from "../components/skillscompo"



function Home(){
   return(
      <>
      <Header/>
      <main>
         <section id="bienvenue">      
         <h1>Bienvenue <br />
         sur le <br/>portfolio <br />de <br />Olivia N.</h1>
      </section>

      <section >
         <SkillsCompo />
         
      </section>

      <section id="projets">
      <SimpleSlider />
      </section>

      <section>
         <Map />

      </section>

      </main>
      <Footer/>
      </>

   )
}
export default Home