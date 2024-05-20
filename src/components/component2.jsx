import React from "react";
import image1 from "../assets/Icon1.svg";
import image2 from "../assets/Icon2.svg";
import image3 from "../assets/Icon3.svg";
import image4 from "../assets/Icon4.svg";
import image5 from "../assets/Icon5.svg";
import image6 from "../assets/Icon6.svg";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function component2() {
  return (
    <>
      <div className="container">
        <p className="text-primary-dark font-bold text-2xl text-center p-4">
          Messaging for all
        </p>
        <p className="text-primary-lite hidden lg:flex lg:justify-center">
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>

        <div className="md:grid md:grid-cols-2 md:gap-14 lg:grid-cols-3 ">
          <div>
            <img src={image1} alt="icon" className="pb-3 pt-3" />
            <p className="text-primary-dark font-bold text-xl pb-1">
              Easier Work Organization
            </p>
            <p className="text-primary-lite">
              Efficiently unleash cross-media information without cross-media
              value. Quickly timely deliverables for real-time schemas.
            </p>
          </div>

          <div>
            <img src={image2} alt="icon" className="pb-3 pt-6" />
            <p className="text-primary-dark font-bold text-xl pb-1 ">
              Streamlined Processes
            </p>
            <p className="text-primary-lite">
              Objectively innovate empowered scalable manufactured products
              whereas parallel platforms predominate extensible.
            </p>
          </div>

          <div>
            <img src={image3} alt="icon" className="pb-3 pt-6" />
            <p className="text-primary-dark font-bold text-xl pb-1">
              Marketing Analytics
            </p>
            <p className="text-primary-lite">
              Phosfluorescently engage worldwide methodologies with web-enabled
              Interactively coordinate.
            </p>
          </div>

          <div className="lg:hidden">
            <img src={image4} alt="icon" className="pb-3 pt-6" />
            <p className="text-primary-dark font-bold text-xl pb-1">
              Fast Connection
            </p>
            <p className="text-primary-lite">
              Completely pursue scalable customer cross- media through
              potentialities. Holistically quickly installed portals.
            </p>
            <Link className="text-primary">Learn more </Link>
          </div>

          <div className="lg:hidden">
            <img src={image5} alt="icon" className="pb-3 pt-6" />
            <p className="text-primary-dark font-bold text-xl pb-1">
              Easier Integrations
            </p>
            <p className="text-primary-lite">
              Completely pursue scalable customer try through potentialities.
              Pontificate portals installed. Efficiently unleash information.
            </p>
            <Link className="text-primary">Learn more </Link>
          </div>

          <div className="lg:hidden">
            <img src={image6} alt="icon" className="pb-3 pt-6" />
            <p className="text-primary-dark font-bold text-xl pb-1">
              Workflow Builder
            </p>
            <p className="text-primary-lite">
              Collaboratively administrate turnkey service channels whereas
              virtual e-tailers. This is objectively scalable metrics whereas.
            </p>
            <Link className="text-primary">Learn more </Link>
          </div>
        </div>
      </div>
    </>
  );
}
