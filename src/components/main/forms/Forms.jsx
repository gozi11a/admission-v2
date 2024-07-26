// import React from "react";
// import "./forms.scss";

// function Forms() {
//   return (
//     <section className="forms">
//       <div className="container">
//         <div className="formsBox">
//           <a href="/bachelors" className="bachelorLink">
//             <img
//               className="bachelorImg"
//               src="https://www.degreequery.com/wp-content/uploads/2019/02/BachelorsIcon-1024x1024.png"
//               alt="bakalavr"
//             />
//           </a>
//           <a href="/masters" className="bachelorLink">
//             <img className="bachelorImg" src="https://accounting.utdallas.edu/files/2021/02/masters-degree-icon.png" alt="Magistr" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Forms;

import React from "react";
import "./forms.scss";
import { Link } from "react-router-dom";

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
              src="https://www.degreequery.com/wp-content/uploads/2019/02/BachelorsIcon-1024x1024.png"
              alt="bakalavr"
            />
          </Link>
          <Link to="/masters" className="bachelorLink">
            <img
              className="bachelorImg"
              src="https://accounting.utdallas.edu/files/2021/02/masters-degree-icon.png"
              alt="Magistr"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Forms;
