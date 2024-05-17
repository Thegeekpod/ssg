import Link from "next/link";
import MainBaner from "@/component/MainBaner";
import Services from "@/component/Services";
import Partners from "@/component/Partners";


export default function Home() {
  return (


    <div id="content" className="site-content">


      <section className="pt-5 pb-100">
        <div className="container">
         
          
          <div className="row">
            <div className="col-md-8 col-sm-8 mb-4 mb-sm-0">
              <div className="ot-heading mb-0">
                <span>{'//'} our service</span>
                <h2 className="main-heading">
                  We Offer a Wide <br />
                  Variety of IT Services
                </h2>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 text-sm-right align-self-end">
              <div className="ot-button">
                <Link href="/services" className="octf-btn octf-btn-primary">
                  all sevices
                </Link>
              </div>
            
            </div>
          </div>
         
          <hr/>
          
          <div className="space-90" />
          <Services/>
        </div>
      </section>
     
  


    </div>




  );
}
