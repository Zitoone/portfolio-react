import Footer from "../components/footer";
import Header from "../components/header";
import PageNotFound from "../components/pagenotfound";

function Error404(){
   return(
      <>
      <Header position="fixed"/>
      <main id="error">
      <PageNotFound />
      </main>
      <Footer />
      </>
     
   )
}
export default Error404