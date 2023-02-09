import "./Footer.css";

export const Footer = () => (
  <div className="container">
    <div className="flex">
      <div className="icons">
        <img src=".\src\assets\logo-fb.png" />
        <img src=".\src\assets\logo-instagram.png" />
        <img src=".\src\assets\logo-twitter.png" />
      </div>
      <div className="links-section bold">
        <p>Info</p>
        <p>Contact us</p>
        <p>Blog</p>
      </div>
      <div className="links-section">
        <p>Terms of use</p>
        <p>Privacy policy</p>
      </div>
      <div className="copyright">
        <p>Copyright @2023 The Codefathers</p>
      </div>
    </div>
  </div>
);
