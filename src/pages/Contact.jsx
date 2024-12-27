import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../pages/style.css'
import Products from '../components/Products/Products';
// import { MdOutlinePhone } from 'react-icons/md';
// import { IoTimeOutline } from 'react-icons/io5';
// import { MdOutlineLocationOn } from 'react-icons/md';
// import { MdMailOutline } from 'react-icons/md';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
const Contact = () => {
  return (
    <div>
         <div className='contact-info-photo'>
<p className='contact-p'>Contact</p>
        </div>
   <div className="container my-5">
      <h2 className="text-center mb-4">We’re here to help you!</h2>
      <p className="text-center mb-5">
        Have a question, comment, or brilliant idea you'd like to share? Send us a little note below - we love to hear from you and will always reply!
      </p>

      <div className="row justify-content-center">
        {/* Phone Number Section */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="new-card shadow-sm p-4 rounded-3 bg-light text-dark h-100 contact-card">
            <div className="card-body text-center">
              <FaPhoneAlt size={40} className="text-primary mb-3" />
              <h5 className="card-title">Phone Number</h5>
              <p className="card-text">
                Call Us: <strong>50-788-56-45</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="new-card shadow-sm p-4 rounded-3 bg-light text-dark h-100 contact-card">
            <div className="card-body text-center">
              <FaEnvelope size={40} className="text-success mb-3" />
              <h5 className="card-title">Email</h5>
              <p className="card-text">
                <strong>hasen@hasen.com</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="new-card shadow-sm p-4 rounded-3 bg-light text-dark h-100 contact-card">
            <div className="card-body text-center">
              <FaMapMarkerAlt size={40} className="text-danger mb-3" />
              <h5 className="card-title">Location</h5>
              <p className="card-text">
                Baku city, 28May
              </p>
            </div>
          </div>
        </div>

        {/* Opening Hours Section */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="new-card shadow-sm p-4 rounded-3 bg-light text-dark h-100 contact-card">
            <div className="card-body text-center">
              <FaClock size={40} className="text-warning mb-3" />
              <h5 className="card-title">Opening Hours</h5>
              <p className="card-text">
                Mon-Sat: 9:00 am - 6:00 pm<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="container my-5">
    <h4 className="text-center mb-4">Do you want to get in touch?</h4>
      <p className="text-center mb-5">
      Let us know how we can help you
      </p>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-12">
          <div className="inform shadow-lg p-4">
            <h2 className="text-center text-dark mb-4">Contact Us</h2>
            <form>
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  placeholder="Enter your name" 
                  required 
                />
              </div>

              {/* Email Field */}
              <div className="mb-3 ">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter your email" 
                  required 
                />
              </div>

              {/* Message Field */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  rows="4" 
                  placeholder="Enter your message" 
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-dark w-100">Submit</button>
            </form>
        </div>
      </div>
    </div>
</div>

    <Products/>
    </div>

  )
}

export default Contact