import React from 'react';
import '../styling/App.css';


export default class Signup extends React.Component {
     
    render() {
    return (
        <div className="bg form-place">
        <form className="form-signin" method="POST" action="/signup">
  <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
  <h1 className="h3 mb-3 font-weight-normal">Signup</h1>
  <label for="inputName" className="sr-only">Name</label>
  <input name="inputName" type="text" id="inputName" className="form-control" placeholder="Enter Name" required autofocus=""/>
  
  <label for="inputUsername" className="sr-only">Username</label>
  <input name="inputUsername" type="text" id="inputUsername" className="form-control" placeholder="Username" required autofocus=""/>
  <label for="inputPassword" className="sr-only">Password</label>
  <input name="inputPassword" type="password" id="inputPassword" className="form-control" placeholder="Password" required/>

   <label for="confirmPassword" className="sr-only">Confirm Password</label>
  <input name="confirmPassword" type="password" id="inputPassword" className="form-control" placeholder="Confirm Password" required/>

 <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
  {/* <p className="mt-5 mb-3 text-muted">© 2017-2019</p> */}
</form>
</div>
    )  
}
}


