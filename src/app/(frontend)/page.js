import Link from "next/link";
import MainBaner from "@/component/MainBaner";
import Services from "@/component/Services";
import Partners from "@/component/Partners";


export default function Home() {
  return (


    <div id="content" className="site-content">

<div className="container">
<div className="row">
  <div className="main-banner">
  <h4>Go ahead make your business responsibilities lighter by letting us do your digital marketing for you.</h4>
</div>
</div>
</div>

      <section className="pt-5 pb-100">
        <div className="container">
         
          
          <div className="row">
            <div className="col-md-8 col-sm-8 mb-4 mb-sm-0">
              <div className="ot-heading mb-0">
               
                <h2 className="main-heading">
                 Other Services We Offered
                </h2>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 text-sm-right align-self-end">
              <div className="ot-button">
                <Link href="/services" className="octf-btn octf-btn-primary">
                  all services
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
