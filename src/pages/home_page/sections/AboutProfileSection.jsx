// ... React modules
import { useContext } from "react";

// ... Context
import { DefaultContext } from "@contexts/DefaultContextProvider.jsx";

// ... Components

// ... Assets
import my_profile from "@data/profile_db";

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const AboutProfileSection = () => {
  const { portrait_img } = useContext(DefaultContext);

  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */

  return (
    <>
      <div className="col-md-5 col-sm-8 col-11">
        <div className="row justify-content-md-start justify-content-center profile">
          <div
            className="col-md-12 mb-5"
            style={{ height: "200px", width: "240px" }}
          >
            <img
              src={portrait_img}
              className="img-fluid rounded"
              alt="Jhayphix Ablordeppey Samuel"
              style={{ borderRadius: "50px", height: "100%", width: "100%" }}
            />
          </div>

          <div className="col-md-12 col-11">
            <div id="profile_info">
              {my_profile.map(({ type, text }, index) => {
                return (
                  <p key={index} className="mb-2">
                    <span className="fw-bold text_secondary_1">{type} : </span>
                    <span className="text_muted_1">{text}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProfileSection;
