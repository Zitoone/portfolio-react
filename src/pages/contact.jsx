import Footer from "../components/footer"
import Header from "../components/header"

function Contact(){
   return(
      <>
      <Header/>
      <main id="contact">

      <h1>Contact</h1>
      <div className="container">
      <div>
         <h3>Vous pouvez me contacter par tous les moyens</h3>

         <p>Olivia Nanquette</p>
         <br />
         <p>Adresse</p>
         <p>31 rue Droite</p>
         <p>83670 Fox Amphoux</p>
         <br />
         <p>Email</p>
         <p>oliviananquette@yahoo.fr</p>
         <br />
         <p>Téléphone</p>
         <p>06 5007 5005</p>

      </div>

      <div>
         <h3>Formulaire de contact</h3>
         <form action="#">
            <input type="text" name="lastname" id="lastname" placeholder="Nom"/>
            <input type="text" name="firstname" id="firstname" placeholder="Prénom"/>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="text" name="message" id="message" placeholder="Message"/>
            <button className="contactButton"  type="submit">Envoyer
               <div class="iconButton">
                  <svg
                     height="24"
                     width="24"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                     <path d="M0 0h24v24H0z" fill="none"></path>
                     <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                     fill="currentColor"></path>
                  </svg>
               </div>
            </button>
         </form>
      </div>
</div>


      </main>
      <Footer />
      </>

   )
}
export default Contact