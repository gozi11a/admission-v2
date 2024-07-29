import React from "react";

import "./bachelors.scss";
import { FaArrowLeft } from "react-icons/fa";


export const Bachelors = () => {
  return (
    <div className="form-wrapper">
      <div className="btn-wrapper">
        <button onClick={() => window.history.back()} className="back-button">
        <FaArrowLeft/>
        </button>
      </div>  
      <script data-b24-form="inline/12/xiawh8" data-skip-moving="true">
        $
        {(function (w, d, u) {
          var s = d.createElement("script");
          s.async = true;
          s.src = u + "?" + ((Date.now() / 180000) | 0);
          var h = d.getElementsByTagName("script")[0];
          h.parentNode.insertBefore(s, h);
        })(
          window,
          document,
          "https://bitrix.nordicun.uz/upload/crm/form/loader_12_xiawh8.js"
        )}
      </script>
    </div>
  );
};
