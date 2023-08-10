import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet,Link } from "react-router-dom";

const Layout=()=>
{
    return(
        <>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" >Student Information</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link to="/" class="nav-link" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/update" class="nav-link" >Update</Link>
        </li>
        <li class="nav-item">
          <Link to="/display" class="nav-link" >Display</Link>
        </li>
        <li class="nav-item">
          <Link to="/insert" class="nav-link">Insert Data</Link>
        </li>
        <li class="nav-item">
          <Link to="/delete" class="nav-link" >Delete Data</Link>
        </li>
        <li class="nav-item">
          <Link to="/search" class="nav-link" >Search Data</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search" />
        <button class="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
        
<Outlet/>

<footer class="text-center text-lg-start bg-light text-muted">
 
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
    
  </section>
 
  <section class="">
    <div class="container text-center text-md-start mt-5">

      <div class="row mt-3">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Student Inforamtion System
          </h6>
          <p>
            here you can insert your data and store it to json server using react js
          </p>
        </div>
       
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>
  

  
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>
    

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">Contact Us</h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            Harshitsingh13@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> +91 8770996147</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
     
      </div>
      
    </div>
  </section>


  
  <div class="text-center p-4" style={{backgroundColor:" rgba(0, 0, 0, 0.05)"}}>
    © 2021 Zenrick's
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">student system</a>
  </div>
  
</footer>









<div class="mt-4 p-5 bg-dark text-white rounded">
  <h1>Student Inforamtion System</h1>
  <p>Contact US : harshitsingh!12@gmail.com</p>
</div>
        </>


    );
}
export default  Layout;