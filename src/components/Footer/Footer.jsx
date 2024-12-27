
import "../Footer/footer.css"
const Footer = () => {
  return (
      <footer className="footer">
          <div className="container">
              <div className="footer-top">
                  <div className="footer-menu">
                      <p className='font-cormor p-footer'>Address :</p>
                      <ul>
                          <li>Address: Qaradagh region</li>
                          <li>City: Baku</li>
                          <li>Country: Azerbaijan</li>
                      </ul>
                  </div>
                  <div className="footer-social">
                      <img 
                          src="https://elementor-kits-02.nicdark.com/perfume-wordpress-elementor-kit/wp-content/uploads/sites/4/2024/01/logo-white.png" 
                          alt="Company Logo" 
                          className="footer-logo"
                      />
                      
                      <p className='company-description'>
                          With a commitment to excellence, we thrive in delivering exceptional solutions and building lasting partnerships. Our journey is defined by a relentless pursuit of growth.
                      </p>
                      <ul className="social-links">
                          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                      </ul>
                  </div>
                  <div className="footer-info">
                      <p className='font-cormor p-footer'>Info :</p>
                      <ul className='flex'>
                          <li>Support: info@support.com</li>
                          <li>Email: info@email.com</li>
                          <li>Phone: +994 50 788 56 45</li>
                      </ul>
                  </div>
              </div>
              <div className="footer-bottom">
                  <p>&copy; 2024 Fragrancerie. All Rights Reserved.</p>

              </div>
          </div>
      </footer>
  );
}
export default Footer;
