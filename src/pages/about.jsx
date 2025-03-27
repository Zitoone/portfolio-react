import { Link } from "react-router-dom"
import Footer from "../components/footer"
import Header from "../components/header"

function About(){
   return(
      <>
      <Header />
       <main id="about">
      <h1>A propos</h1>
         <article id="olivia">
         <div >
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut at aut iste laboriosam quasi, illum nesciunt sequi molestias facere neque similique ipsa labore, voluptates expedita eos ratione sit harum fugiat.</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis, cupiditate ut aliquam commodi illo mollitia soluta aspernatur, blanditiis nihil similique odio quo asperiores consequatur temporibus, harum ipsa voluptates nostrum?</p> 
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor, sequi beatae cum adipisci sapiente praesentium ullam, autem quasi blanditiis, a voluptate. Eligendi tempora facilis laudantium, ipsum architecto natus odio.</p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ipsum pariatur deleniti suscipit dignissimos earum, obcaecati at ipsa eum, fugiat commodi adipisci illo nisi ab numquam qui quod cumque harum!</p>
           </div>
           <img src="/images/01.png" alt="Photo Olivia" />
         </article>
      <hr /> 

         <article id="okami">
            <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut at aut iste laboriosam quasi, illum nesciunt sequi molestias facere neque similique ipsa labore, voluptates expedita eos ratione sit harum fugiat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis, cupiditate ut aliquam commodi illo mollitia soluta aspernatur, blanditiis nihil similique odio quo asperiores consequatur temporibus, harum ipsa voluptates nostrum?</p> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor, sequi beatae cum adipisci sapiente praesentium ullam, autem quasi blanditiis, a voluptate. Eligendi tempora facilis laudantium, ipsum architecto natus odio.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ipsum pariatur deleniti suscipit dignissimos earum, obcaecati at ipsa eum, fugiat commodi adipisci illo nisi ab numquam qui quod cumque harum!</p>
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dKeann_nWIs?si=8EVpjVcHdkWbOn1C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </article>
      <hr />

      <div id="cv">
         <p>Si vous souhaitez en savoir plus sur mes diverses expériences professionelles passées, je vous invite à consulter mon CV :</p>
         <i className="fa-solid fa-hand-point-right" /><Link to="">ICI</Link>
      </div>

      </main>
      <Footer />
      </>
   )
}

export default About