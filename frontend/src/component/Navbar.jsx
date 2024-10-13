import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">

        {/*-----------*/}

    

          <h1>Books store  891</h1>
          
          {/*-----------*/}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {/*-----------*/}

            <li className="nav-item ">
                <Link className="nav-link active " to="/">Login</Link>
              </li>

              {/*-----------*/}

              <li className="nav-item">
                <Link className="nav-link active" to="/home">Home</Link>
              </li>

              {/*-----------*/}

              <li className="nav-item">
                <Link className="nav-link active" to="/mybooks">Books</Link>
              </li>

              {/*-----------*/}

              <li className="nav-item">
                <Link className="nav-link active" to="/addBooks">AddBooks</Link>
              </li>

              {/*-----------*/}
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
