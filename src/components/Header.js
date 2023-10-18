import React from 'react';

function Header() {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <h1 style={{ fontSize: 'larger' }}>
              <a className="navbar-brand" href="LEJHRO">
                <img
                  src="https://media.licdn.com/dms/image/C4D0BAQEJCBMu5MZekg/company-logo_200_200/0/1671703707994?e=2147483647&v=beta&t=Ylz-KgGHr7nkClrToy7yAwfN7rzJgWDblkIeGb5p_cE"
                  alt="Lejhro"
                  style={{ width: '40px' }}
                />
                LEJHRO
              </a>
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.lejhro.com/innovations">
                    Innovations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.lejhro.com/business-services">
                    Business Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.lejhro.com/financial-services">
                    Financial Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.bootcamp.lejhro.com/">
                    Bootcamp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
