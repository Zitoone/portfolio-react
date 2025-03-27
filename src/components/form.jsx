
import { useState } from "react"

function Form(){
   const [formData, setFormData] = useState({
      lastname:"",
      firstname:"",
      email:"",
      message:"",
   })

   const handleChange = (e) => {
      const {name, value}=e.target
      setFormData((prevState)=>({
         ...prevState, [name]:value,
      }))
   }
   
   const formSubmit = (e)=>{
      e.preventDefault()

      console.log(formData)

      setFormData({
         lastname:"",
         firstname:"",
         email:"",
         message:"",
      })
   }

   return(
      <form onSubmit={formSubmit}>
            <input type="text" name="lastname" id="lastname" placeholder="Nom" value={formData.lastname} onChange={handleChange}required/>
            <input type="text" name="firstname" id="firstname" placeholder="Prénom" value={formData.firstname} onChange={handleChange}required/>
            <input type="email" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange}required />
            <input type="text" name="message" id="message" placeholder="Message" value={formData.message} onChange={handleChange}required/>
            <button className="contactButton"  type="submit">Envoyer
               <div className="iconButton">
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
   )
}

export default Form

// const [errors, setErrors]= useState({})

// const formSubmit= (e)=>{
//    e.preventDefault(e)

//    const{firstname, lastname, email, message} = e.target.elements

//    if (lastname.value.length < 2 || /^[a-zA-Z]+$/ (lastname.value)){
//       setErrors({...errors, firstname:{type:'required', message: 'Le prénom et le nom sont requis'}});
//       return
//    }
//    if (firstname.value.length < 2 || /^[a-zA-Z]+$/(firstname.value)){
//       setErrors({...errors, firstname:{type:'required', message: 'Le prénom et le nom sont requis'}});
//       return
//    }
//    if (email.value.length < 2 || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/(email.value)){
//       setErrors({...errors, email:{type:'required', message: 'Entrez un e mail valide'}});
//       return
//    }
//    if (message.value.length < 10 ){
//       setErrors({...errors, message:{type:'required', message: "N'oubliez pas votre message"}})
//    }
//    if(Objects.keys(errors).length > 0){
//       return;
//    }
//    formSubmit()
// }