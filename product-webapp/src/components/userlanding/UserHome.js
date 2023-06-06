import React from 'react';
import './UserHome.css';
import Cards from './cards/Cards';
import NewsCard from './healthcard/NewsCard';
import Testimonals from './feedback/Testimonals';
import FooterCard from './footer/FooterCard';
import applogo from '../common/logo.jpg'
import { Link } from 'react-router-dom';


function UserHome(props) {
    return (
        <>
        <header>
        <nav className="navbar navbar-expand-lg shadow-lg" style={{background: "#0A1CCC"}}>
  <div className="container-fluid">
  <img src={applogo} alt="" />
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active fs-5 mx-2 text-light" aria-current="page" href=" ">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 mx-2 text-light" to="/patient">Find doctors</Link>
        </li>
        <li className="nav-item">
		<Link className="nav-link fs-5 mx-2 text-light" to="/doctor/profile"> Doctor Page</Link>
        </li>
        <li className="nav-item mx-2">
		{/* <Link to="/">Login here</Link> */}
        <Link to='/register' style={{textDecoration:'none'}}><button className="button-83 text-dark" >Login/Register</button></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>



<section className="banner">
	<div className="container">
		<div className="row">
			<div className="col-lg-6 col-md-12 col-xl-7">
				<div className="block">
					<div className="divider mb-3"></div>
					
					<h1 className="mb-3 mt-3 m">Your most trusted health partner</h1>
					
					<p className="mb-4 pr-5">A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
					
				</div>
			</div>
		</div>
	</div>
</section>

<section className="features">
	<div className="container">
		<div className="row">
			<div className="col-lg-12">
				<div className="feature-block d-lg-flex">
					<div className="feature-item mb-5 mb-lg-0">
						<div className="feature-icon mb-4">
							<i className="icofont-surgeon-alt"></i>
						</div>
						<span>24 Hours Service</span>
						<h4 className="mb-3">Online Appoinment</h4>
						<p className="mb-4">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
						<Link to="/patientpro/availabledoctors"><span className="btns btns-mains btns-round-full">Make a appoinment</span></Link>
					</div>
				
					<div className="feature-item mb-5 mb-lg-0">
						<div className="feature-icon mb-4">
							<i className="icofont-surgeon-alt"></i>
						</div>
						<span>Free Consulation</span>
						<h4 className="mb-3">Video Consulting </h4>
						<p className="mb-4">We are providing free consultation with Top doctor Specialist</p>
						<a href="appoinment.html" className="btns btns-mains btns-round-full">Know more</a>
					</div>
				
					<div className="feature-item mb-5 mb-lg-0">
						<div className="feature-icon mb-4">
							<i className="icofont-support"></i>
						</div>
						<span>Emegency Cases</span>
						<h4 className="mb-3">1-800-700-6200</h4>
						<p>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<section className="section about">
	<div className="container">
	<div className="row justify-content-center">
			<div className="col-lg-7 text-center">
				<div className="section-title">
					<h2>Our Specialist Doctors</h2>
					<div className="divider mx-auto my-4"></div>
					<p>Consult Top Specialist Doctor Through Online Video Consulting for any health issue</p>
				</div>
			</div>
			<Cards></Cards>
		</div>
	</div>
</section>

<section className="section service gray-bg">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-7 text-center">
				<div className="section-title">
					<h2>Your Health Feeds</h2>
					<div className="divider mx-auto my-4"></div>
					<p>Health articles that keep you informed about good health practices and achieve your goals.</p>
				</div>
			</div>
		</div>

		<NewsCard/>
	</div>
</section>
<section className="section testimonial-2 gray-bg">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-lg-7">
				<div className="section-title text-center">
					<h2>TESTIMONALS</h2>
					<div className="divider mx-auto my-4"></div>
					<p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
				</div>
			</div>
		</div>
	</div>

	<div className="container">
		<Testimonals/>
	</div>
</section>
       <FooterCard/>
            
        </>
    );
}

export default UserHome;