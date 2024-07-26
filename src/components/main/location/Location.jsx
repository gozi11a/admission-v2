import React from "react";
import "./location.scss";

function Location() {
  return (
    <section id="locations" className="locations">
      <div className="container">
        <div className="locationBox">
          <div className="location">
            <h4>Sebzor</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2996.3625074506313!2d69.24438!3d41.32273!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba61d1cdb9b%3A0x3da780ce3c5c96af!2sNordic%20International%20University%20Campus%202!5e0!3m2!1sen!2sus!4v1720443790281!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="location">
            <h4>Novza</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23983.939887333512!2d69.218864!3d41.287268!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b359ab47501%3A0x618cedae4747d331!2sNordic%20International%20University!5e0!3m2!1sru!2sus!4v1720443847590!5m2!1sru!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
