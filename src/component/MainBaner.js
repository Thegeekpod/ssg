"use client"
import React, { useEffect } from 'react'

const MainBaner = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/js/rev-Script-2.js';   //(This is external js url)
        script.async = true;
        document.body.appendChild(script);
      }, [])
  return (
    <div
        id="rev_slider_one_wrapper"
        className="rev_slider_wrapper fullscreen-container"
        data-alias="mask-showcase"
        data-source="gallery"
        style={{ background: "#ffffff", padding: 0 }}
      >
        {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
        <div
          id="rev_slider_one"
          className="rev_slider fullscreenbanner"
          style={{ display: "none" }}
          data-version="5.4.1"
        >
          <ul>
            {/* SLIDE 1 */}
            <li
              data-index="rs-70"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed={300}
              data-thumb="images/slider/slide1-home1.jpg"
              data-rotate={0}
              data-saveperformance="off"
              data-title=""
              data-param1={1}
              data-param2=""
              data-param3=""
              data-param4=""
              data-param5=""
              data-param6=""
              data-param7=""
              data-param8=""
              data-param9=""
              data-param10=""
              data-description=""
            >
              {/* MAIN IMAGE */}
              <img
                src="images/slider/slide1-home1.jpg"
                data-bgcolor="rgba(255,255,255,0)"
                style={{}}
                alt=""
                data-bgposition="50% 50%"
                data-bgfit="auto"
                data-bgrepeat="no-repeat"
                data-bgparallax="off"
                className="rev-slidebg"
                data-no-retina=""
              />
              {/* LAYER 1  right image overlay dark*/}
              {/* LAYER 3  Thin text title*/}
              <div
                className="tp-caption tp-resizeme slider-tag-line"
                id="slide-70-layer-1"
                data-x="['left','left','left','left']"
                data-hoffset="['15','15','15','15']"
                data-y="['top','top','top','top']"
                data-voffset="['195','105','127','133']"
                data-fontsize="['24',20','0','0']"
                data-lineheight="['36','30','22','15']"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":0,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"power3.inOut"},{"delay":"wait","speed":1000,"frame":"999","to":"x:50px;opacity:0;","ease":"power3.inOut"}]'
                data-textalign="['left','left','left','left']"
                style={{
                  zIndex: 8,
                  fontWeight: 400,
                  color: "#fff",
                  fontFamily: '"Nunito Sans"'
                }}
              >
                {'//'} Full Cycle Software Development
              </div>
              {/* LAYER 4  Bold Title*/}
              <div
                className="tp-caption tp-resizeme"
                id="slide-70-layer-2"
                data-x="['left','left','left','left']"
                data-hoffset="['15','15','15','15']"
                data-y="['top','top','top','top']"
                data-voffset="['240','140','155','145']"
                data-fontsize="['72','60','48','30']"
                data-lineheight="['80','62','52','42']"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":500,"split":"chars","splitdelay":0.1,"speed":500,"frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"power4.inOut"},{"delay":"wait","speed":1000,"frame":"999","to":"x:50px;z:0;rX:0deg;rY:0deg;rZ:0deg;sX:1;sY:1;skX:0;skY:0;","ease":"power3.inOut"}]'
                data-textalign="['left','left','left','left']"
                style={{
                  zIndex: 10,
                  textTransform: "uppercase",
                  fontWeight: 900,
                  color: "#fff",
                  fontFamily: "Montserrat"
                }}
              >
                From idea <br /> to product
              </div>
              {/* LAYER 5  Paragraph*/}
              <div
                className="tp-caption tp-resizeme"
                id="slide-70-layer-3"
                data-x="['left','left','left','left']"
                data-hoffset="['15','15','15','15']"
                data-y="['top','top','top','top']"
                data-voffset="['420','279','271','235']"
                data-fontsize="['18','18','22','16']"
                data-lineheight="['30','34','32','28']"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":2900,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"power3.inOut"},{"delay":"wait","speed":1000,"frame":"999","to":"x:50px;opacity:0;","ease":"power3.inOut"}]'
                data-textalign="['left','left','left','left']"
                style={{
                  zIndex: 10,
                  whiteSpace: "normal",
                  color: "#fff",
                  fontFamily: '"Nunito Sans", sans-serif'
                }}
              >
                We are 100+ professional software engineers with more than <br />{" "}
                10 years of experience in delivering superior products.
              </div>
              {/* LAYER 6  Read More*/}
              <div
                className="tp-caption rev-btn"
                id="slide-70-layer-4"
                data-x="['left','left','left','left']"
                data-hoffset="['15','15','15','15']"
                data-y="['top','top','top','top']"
                data-voffset="['525','385','370','320']"
                data-lineheight="['18','18','16','16']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-responsive_offset="on"
                data-frames='[{"delay":3400,"speed":1000,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"power3.inOut"},{"delay":"wait","speed":1000,"frame":"999","to":"x:50px;opacity:0;","ease":"power3.inOut"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 8 }}
              >
                <a
                  href="it-services.html"
                  className="octf-btn octf-btn-primary btn-slider btn-large"
                >
                  Learn More
                </a>
              </div>
            </li>
            {/* SLIDE 1 */}
            <li
              data-index="rs-71"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed={300}
              data-thumb="images/slider/slide2-home1.jpg"
              data-rotate={0}
              data-saveperformance="off"
              data-title=""
              data-param1={1}
              data-param2=""
              data-param3=""
              data-param4=""
              data-param5=""
              data-param6=""
              data-param7=""
              data-param8=""
              data-param9=""
              data-param10=""
              data-description=""
            >
              {/* MAIN IMAGE */}
              <img
                src="images/slider/slide2-home1.jpg"
                data-bgcolor="#ffffff"
                style={{}}
                alt=""
                data-bgposition="50% 50%"
                data-bgfit="auto"
                data-bgrepeat="no-repeat"
                data-bgparallax="off"
                className="rev-slidebg"
                data-no-retina=""
              />
              {/* LAYER 3  Thin text title*/}
              <div
                className="tp-caption   tp-resizeme slider-tag-line"
                id="slide-71-layer-3"
                data-x="['left','left','left','left']"
                data-hoffset="['15','15','15','15']"
                data-y="['top','top','top','top']"
                data-voffset="['195','105','127','133']"
                data-fontsize="['24',20','0','0']"
                data-lineheight="['36','30','22','15']"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":0,"speed":1000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"power3.inOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"power3.inOut"}]'
                data-textalign="['left','left','left','left']"
                style={{
                  zIndex: 8,
                  fontWeight: 400,
                  color: "#fff",
                  fontFamily: '"Nunito Sans"'
                }}
              >
                {'//'} We Create Leading Digital Products
              </div>
              {/* LAYER 4  Bold Title*/}
              <div
                className="tp-caption   tp-resizeme"
                id="slide-70-layer-6"
                data-x="['left','left','left','left']"
                data-hoffset="['15','15','15','15']"
                data-y="['top','top','top','top']"
                data-voffset="['240','140','155','145']"
                data-fontsize="['72','60','48','30']"
                data-lineheight="['80','62','52','42']"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":500,"split":"chars","splitdelay":0.1,"speed":300,"frame":"0","from":"y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"power4.inOut"},{"delay":"wait","speed":1200,"frame":"999","to":"y:50px;z:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","ease":"power3.inOut"}]'
                data-textalign="['left','left','left','left']"
                style={{
                  zIndex: 10,
                  textTransform: "uppercase",
                  fontWeight: 900,
                  color: "#fff",
                  fontFamily: "Montserrat"
                }}
              >
                END-TO-END <br /> development{" "}
              </div>
              {/* LAYER 5  Paragraph*/}
              <div
                className="tp-caption   tp-resizeme"
                id="slide-71-layer-7"
                data-x="['left','left','left','left']"
                data-hoffset="['15','15','15','15']"
                data-y="['top','top','top','top']"
                data-voffset="['420','279','271','235']"
                data-fontsize="['18','18','22','16']"
                data-lineheight="['30','34','32','28']"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":2900,"speed":1000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"power3.inOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"power3.inOut"}]'
                data-textalign="['left','left','left','left']"
                style={{
                  zIndex: 10,
                  whiteSpace: "normal",
                  color: "#fff",
                  fontFamily: '"Nunito Sans", sans-serif'
                }}
              >
                We are 100+ professional software engineers with more than <br />
                10 years of experience in delivering superior products.
              </div>
              {/* LAYER 6  Read More*/}
              <div
                className="tp-caption rev-btn"
                id="slide-71-layer-8"
                data-x="['left','left','left','left']"
                data-hoffset="['15','15','15','15']"
                data-y="['top','top','top','top']"
                data-voffset="['525','385','370','320']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="button"
                data-responsive_offset="on"
                data-frames='[{"delay":3400,"speed":500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"power3.inOut"},{"delay":"wait","speed":500,"frame":"999","to":"opacity:0;","ease":"power3.inOut"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 10 }}
              >
                <a
                  href="web-development.html"
                  className="octf-btn octf-btn-primary btn-slider btn-large"
                >
                  Learn More
                </a>
              </div>
            </li>
            {/* SLIDE 1 */}
            <li
              data-index="rs-72"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed={300}
              data-thumb="images/slider/slide3-home1.jpg"
              data-rotate={0}
              data-saveperformance="off"
              data-title=""
              data-param1={1}
              data-param2=""
              data-param3=""
              data-param4=""
              data-param5=""
              data-param6=""
              data-param7=""
              data-param8=""
              data-param9=""
              data-param10=""
              data-description=""
            >
              {/* MAIN IMAGE */}
              <img
                src="images/slider/slide3-home1.jpg"
                data-bgcolor="#ffffff"
                style={{}}
                alt=""
                data-bgposition="50% 50%"
                data-bgfit="auto"
                data-bgrepeat="no-repeat"
                data-bgparallax="off"
                className="rev-slidebg"
                data-no-retina=""
              />
              {/* LAYER 3  Thin text title*/}
              <div
                className="tp-caption   tp-resizeme slider-tag-line"
                id="slide-72-layer-3"
                data-x="['left','left','left','left']"
                data-hoffset="['15','15','15','15']"
                data-y="['top','top','top','top']"
                data-voffset="['195','105','127','133']"
                data-fontsize="['24',20','0','0']"
                data-lineheight="['36','30','22','15']"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"power3.inOut"},{"delay":"wait","speed":1000,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'
                data-textalign="['left','left','left','left']"
                style={{
                  zIndex: 8,
                  fontWeight: 400,
                  color: "#fff",
                  fontFamily: '"Nunito Sans"'
                }}
              >
                {'//'} Only High-Quality Services
              </div>
              {/* LAYER 4  Bold Title*/}
              <div
                className="tp-caption   tp-resizeme"
                id="slide-72-layer-6"
                data-x="['left','left','left','left']"
                data-hoffset="['15','15','15','15']"
                data-y="['top','top','top','top']"
                data-voffset="['240','140','155','145']"
                data-fontsize="['72','60','48','30']"
                data-lineheight="['80','62','52','42']"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":500,"split":"chars","splitdelay":0.1,"speed":300,"frame":"0","from":"y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"power4.inOut"},{"delay":"wait","speed":1200,"frame":"999","to":"y:-50px;z:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","ease":"power3.inOut"}]'
                data-textalign="['left','left','left','left']"
                style={{
                  zIndex: 10,
                  textTransform: "uppercase",
                  fontWeight: 900,
                  color: "#fff",
                  fontFamily: "Montserrat"
                }}
              >
                SOFTWARE IT <br /> OUTSOURCING{" "}
              </div>
              {/* LAYER 5  Paragraph*/}
              <div
                className="tp-caption   tp-resizeme"
                id="slide-72-layer-7"
                data-x="['left','left','left','left']"
                data-hoffset="['15','15','15','15']"
                data-y="['top','top','top','top']"
                data-voffset="['420','279','271','235']"
                data-fontsize="['18','18','22','16']"
                data-lineheight="['30','34','32','28']"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"delay":2900,"speed":1000,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"power3.inOut"},{"delay":"wait","speed":1000,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'
                data-textalign="['left','left','left','left']"
                style={{
                  zIndex: 10,
                  whiteSpace: "normal",
                  color: "#fff",
                  fontFamily: '"Nunito Sans", sans-serif'
                }}
              >
                We are 100+ professional software engineers with more than <br />
                10 years of experience in delivering superior products.
              </div>
              {/* LAYER 6  Read More*/}
              <div
                className="tp-caption rev-btn"
                id="slide-72-layer-8"
                data-x="['left','left','left','left']"
                data-hoffset="['15','15','15','15']"
                data-y="['top','top','top','top']"
                data-voffset="['525','385','370','320']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-type="button"
                data-responsive_offset="on"
                data-frames='[{"delay":3400,"speed":700,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"power3.inOut"},{"delay":"wait","speed":700,"frame":"999","to":"auto:auto;","ease":"power3.inOut"}]'
                data-textalign="['center','center','center','center']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 10 }}
              >
                <a
                  href="mobile-development.html"
                  className="octf-btn octf-btn-primary btn-slider btn-large"
                >
                  Learn More
                </a>
              </div>
            </li>
          </ul>
          <div
            className="tp-bannertimer"
            style={{ height: 10, background: "rgba(0, 0, 0, 0)" }}
          />
        </div>
      </div>
  )
}

export default MainBaner