import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class navbar extends Component {

  constructor(){
    super();

  const e = document.getElementById("region");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  console.log(text);
  }




  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMonkey
            </a>



            <select className="nav-link dropdown-toggle navbar-text" id="region">
                  <option selected className="dropdown-item text-muted">Select Region</option>
                  <option  className="dropdown-item text-muted" value="1">India-IN</option>
                  <option className="dropdown-item text-muted" value="2">United States-US</option>
                  <option className="dropdown-item text-muted" value="3">United Kingdom-GB</option>
                  <option className="dropdown-item text-muted" value="4">NewZeland-Nz</option>
                  <option className="dropdown-item text-muted" value="5">Argentina-Ar</option>
                  <option className="dropdown-item text-muted" value="6">Canada-Ca</option>
                  <option className="dropdown-item text-muted" value="7">Brazil-Br</option>
                  <option className="dropdown-item text-muted" value="8">Switzerland-Ch</option>
            </select>

            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default navbar;
