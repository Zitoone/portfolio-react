import Footer from "../components/footer"
import Header from "../components/header"

function Contact(){
   return(
      <>
      <Header />
      <main id="contact">

      <h1>Contact</h1>
      <div>
         <h3>Vous pouvez me contacter par tous les moyens</h3>
         <p>Olivia Nanquette</p>
         <p>Adresse</p>
         <p>31 rue Droite</p>
         <p>83670 Fox Amphoux</p>
         <p>Email</p>
         <p>oliviananquette@yahoo.fr</p>
         <p>Téléphone</p>
         <p>06 5007 5005</p>
      </div>

      <div>
         <h3>Formulaire de contact</h3>
         <form action="#">
            <input type="text" name="lastname" id="lastname" placeholder="Nom"/>
            <input type="text" name="firstname" id="firstname" placeholder="Prénom"/>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="text" name="message" id="message" placeholder="message" />
            <button type="submit">Envoyer</button>
         </form>
      </div>



      </main>
      <Footer />
      </>

   )
}
export default Contact