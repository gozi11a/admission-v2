import React from "react";
import "./forms.scss";
import { Link } from "react-router-dom";
import bachelor from '../../../assets/img/bachelor2.jpg';
import master from '../../../assets/img/master.jpg';

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
            <img
              className="bachelorImg"
              src={bachelor}
              alt="bakalavr"
            />
          </Link>
          <Link to="/masters" className="bachelorLink">
            <img
              className="bachelorImg"
              src={master}
              alt="Magistr"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Forms;
