import React from 'react';
import Link from 'next/link'
import { Col } from 'react-bootstrap';



const ForgotPassword = () => {
  return (
  <div >
    {/* <!-- CONTAINER OPEN --> */}
    <Col className="col-login mx-auto">
      <div className="text-center">
        <img style={{width:100,height:100}} src={"../../../assets/maillogo.png"} className="header-brand-img m-0" alt="" />
      </div>
    </Col>

    {/* <!-- CONTAINER OPEN --> */}
    <div className="container-login100">
      <div className="wrap-login100 p-6">
        <form className="login100-form validate-form">
          <span className="login100-form-title pb-5">
            Forgot Password
          </span>
          <p className="text-muted">Enter the email address registered on your account</p>
          <div className="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
            <Link href="#" className="input-group-text bg-white text-muted">
              <i className="zmdi zmdi-email" aria-hidden="true"></i>
            </Link>
            <input className="input100 border-start-0 ms-0 form-control" type="email" placeholder="Email" />
          </div>
          <div className="submit">
            <Link className="btn btn-primary d-grid" href={`/components/dashboard/dashboard/`}>Submit</Link>
          </div>
          <div className="text-center mt-4">
            <p className="text-dark mb-0 mx-2">Forgot It?<Link className="text-primary ms-1" href={`/components/dashboard/dashboard`}>Send me Back</Link></p>
          </div>
          <label className="login-social-icon"><span>OR</span></label>
          <div className="d-flex justify-content-center">
            <Link href="#">
              <div className="social-login me-4 text-center">
                <i className="fa fa-google"></i>
              </div>
            </Link>
            <Link href="#">
              <div className="social-login me-4 text-center">
                <i className="fa fa-facebook"></i>
              </div>
            </Link>
            <Link href="#">
              <div className="social-login text-center">
                <i className="fa fa-twitter"></i>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
)
};
ForgotPassword.layout = "Authenticationlayout"
export default ForgotPassword;
