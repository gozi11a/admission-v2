import React from "react";
import "./forms.scss";
import { Link } from "react-router-dom";
import bachelor from '../../../assets/img/bakalavr.webp';
import master from '../../../assets/img/magister.webp';

function Forms() {
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.dropdown-item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
        const selectedFlagClass = 'flag-icon-' + this.getAttribute('data-lang');
        document.getElementById('selected-flag').className = 'flag-icon ' + selectedFlagClass;
    });
});
  return (
    <section className="forms">
      <div className="container">
        <div className="formsBox">
          <Link to="/bachelors" className="bachelorLink">
           <div className="imgTitle">
           <img
              className="bachelorImg"
              src={bachelor}
              alt="bakalavr"
            />
      <span>Bakalavr</span>
           </div>
          </Link>
          <Link to="/masters" className="bachelorLink">
            <div className="imgTitle">
            <img
              className="bachelorImg"
              src={master}
              alt="Magistr"
            />
      <span>Magister</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Forms;
