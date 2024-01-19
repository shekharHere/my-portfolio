import { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import LogoS from "../../../assets/images/logo-h.png";
import "./index.scss";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 1,
        duration: 12,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 0.7,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg width="1344.000000pt" height="1341.000000pt" viewBox="0 0 1344.000000 1341.000000" xmlns="http://www.w3.org/2000/svg">
  <g className="svg-container" transform="translate(0.000000,1341.000000) scale(0.100000,-0.100000)" fill="none">
    <path stroke="#fff" strokeWidth="50" ref={outlineLogoRef} d="M5150 9003 l0 -1433 203 0 203 0 875 -870 874 -869 -1077 -1 -1078 0 0
-1432 0 -1433 -457 -457 -458 -458 -6 0 -7 0 -456 453 -456 452 0 3745 0 3745
457 457 458 458 462 -462 463 -463 0 -1432z m4534 1895 l456 -453 0 -3740 0
-3740 -460 -460 -460 -460 -455 455 -455 455 0 1437 0 1438 -208 0 -208 0
-875 870 -874 869 1083 1 1082 0 0 1439 0 1440 453 450 452 451 6 0 7 0 456
-452z" />
  </g>

</svg>

    </div>
  );
};

export default Logo;
