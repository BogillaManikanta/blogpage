import React from 'react'
function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <ul className="list-unstyled text-md-right">
            <li>
                <h5>Company</h5>
              </li>
              <li className="mb-2">
                <a href="https://www.lejhro.com/innovations">Innovations</a>
              </li>
              <li className="mb-2">
                <a href="https://www.lejhro.com/business-services">Business Services</a>
              </li>
              <li>
                <a href="https://www.lejhro.com/financial-services">Financial Services</a>
              </li>
              <li>
                <a href="https://www.recruit.lejhro.com/">Lejhro Recruiter</a>
              </li>
              <li>
                <a href="https://www.lejhro.com/about">About</a>
              </li>
              <li>
                <a href="https://www.lejhro.com/blogs">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled text-md-right">
            <li>
                <h5>Programs</h5>
              </li>
              <li className="mb-2">
                <a href="https://www.bootcamp.lejhro.com/">Lejhro bootcamp</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled text-md-right">
            <li>
                <h5>Support</h5>
              </li>
              <li className="mb-2">
                <a href="https://www.lejhro.com/contact-us">Contact</a>
              </li>
              <li className="mb-2">
                <a href="https://www.lejhro.com/terms-of-use">Terms of Use</a>
              </li>
              <li className="mb-2">
                <a href="https://www.lejhro.com/privacy-statement">Privacy Statement</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled text-md-right">
            <li>
                <h5>Connect With Us</h5>
              </li>
              <li className="mb-2">
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flejhro"><i className='fab fa-x-twitter'></i>Twitter</a>
              </li>
              <li className="mb-2">
                <a href="https://www.facebook.com/lejhro"><i className='fab fa-facebook'></i>Facebook</a>

              </li>
              <li className="mb-2">
                <a href="https://www.linkedin.com/company/lejhro/"><i className='fab fa-linkedin'></i>Linkedin</a>

              </li>
              <li className="mb-2">
                <a href="https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ"><i className='fab fa-youtube'></i>Youtube</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
          <p>&copy;2023 LEJHRO. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer