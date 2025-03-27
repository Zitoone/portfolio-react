// Code pas terminé!!!! a relier
import { useState } from "react"

function Form(){
   const [errors, setErrors]= useState({})

   const formSubmit= (e)=>{
      e.preventDefault(e)

      const{firstname, lastname, email, message} = e.target.elements

      if (lastname.value.length < 2 || /^[a-zA-Z]+$/ (lastname.value)){
         setErrors({...errors, firstname:{type:'required', message: 'Le prénom et le nom sont requis'}});
         return
      }
      if (firstname.value.length < 2 || /^[a-zA-Z]+$/(firstname.value)){
         setErrors({...errors, firstname:{type:'required', message: 'Le prénom et le nom sont requis'}});
         return
      }
      if (email.value.length < 2 || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/(email.value)){
         setErrors({...errors, email:{type:'required', message: 'Entrez un e mail valide'}});
         return
      }
      if (message.value.length < 10 ){
         setErrors({...errors, message:{type:'required', message: "N'oubliez pas votre message"}})
      }
      
      if(Objects.keys(errors).length > 0){
         return;
      }
      formSubmit()
   }
   return(
      <form>
            <input ref={lastname} type="text" name="lastname" id="lastname" placeholder="Nom"/>
            <input ref={firstname}  type="text" name="firstname" id="firstname" placeholder="Prénom"/>
            <input ref={email} type="email" name="email" id="email" placeholder="Email" />
            <input ref={message} type="text" name="message" id="message" placeholder="Message"/>
            <butto onClick={formSubmit} className="contactButton"  type="submit">Envoyer</butto>
            </form>
   )
}
export default Form