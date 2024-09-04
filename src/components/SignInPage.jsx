import React from "react";
import { AiFillEye } from "./AiFillEye";
import { ChevronRight } from "./ChevronRight";
// Removed Insights, Refresh, and TickCircle imports
import "./SignInPage.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="NG-landing-page">
          <div className="overlap">
            <div className="div-overflow-x">
              <div className="overlap-group">
                <img className="rectangle" alt="Rectangle" src="rectangle-3.svg" />
                <div className="main">
                  <div className="div-container" />
                  <div className="div-pt">
                    <div className="overlap-wrapper">
                      <div className="div">
                        <div className="div-row">
                          <div className="div-col-lg">
                            <div className="ls-tight">
                              <img
                                className="marketing-campaigns"
                                alt="Marketing campaigns"
                                src="marketing-campaigns-made-easy.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
