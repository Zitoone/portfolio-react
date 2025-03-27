import SimpleSlider from "../components/carrousel"
import Footer from "../components/footer"
import Header from "../components/header"
import SkillsCompo from "../components/skillscompo"



function Home(){
   return(
      <div id="home">
      <Header/>
      <main>
         <section id="bienvenue">      
         <h1>Bienvenue <br /> <span>sur le</span>
          <br/>portfolio <br /> <span>de</span> <br />Olivia N.</h1>
      </section>

      <section id="skills">
         <SkillsCompo />
         
      </section>

      <section id="projets">
      <SimpleSlider />
      </section>

      <section id="map">

            <h1>Mise en place de solutions informatiques dans le Var</h1>

            <img src="./images/carte.png" alt="Carte placé sur Cotignac" />

            <img src="./images/responsive.jpg" alt="" />
  
      </section>

      </main>
      <Footer/>
      </div>

   )
}
export default Home