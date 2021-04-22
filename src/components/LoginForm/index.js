import React from "react";
// import "./LoginForm.css";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

function LoginForm() {
  return (
    // <MDBContainer>
    //   <MDBRow>
    //     <MDBCol md="6">
    //       <form>
    //         <p className="h5 text-center mb-4">Sign in</p>
    //         <div className="grey-text">
    //           <MDBInput
    //             label="Type your email"
    //             icon="envelope"
    //             group
    //             type="email"
    //             validate
    //             error="wrong"
    //             success="right"
    //           />
    //           <MDBInput
    //             label="Type your password"
    //             icon="lock"
    //             group
    //             type="password"
    //             validate
    //           />
    //         </div>
    //         <div className="text-center">
    //           <MDBBtn>Login</MDBBtn>
    //         </div>
    //       </form>
    //     </MDBCol>
    //   </MDBRow>
    // </MDBContainer>

    //===========================
    // Material Design Bootstrap form

    // <div class="login w-50">
    <form>
      <div class="form-outline mb-5">
        <input type="email" id="form2Example1" class="form-control" />
        <label class="form-label" for="form2Example1">
          Email address
          {/* Could switch to User Name? */}
        </label>
      </div>

      <div class="form-outline mb-5">
        <input type="password" id="form2Example2" class="form-control" />
        <label class="form-label" for="form2Example2">
          Password
        </label>
      </div>

      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="form2Example3"
              checked
            />
            <label class="form-check-label" for="form2Example3">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>

        <div class="col">
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-block mb-4">
        Sign in
      </button>
      <div class="text-center">
        <p>
          Not a member? <a href="#!">Sign Up!</a>
        </p>
      </div>
    </form>
    // </div>
  );
}

export default LoginForm;
