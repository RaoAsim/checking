import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../../contexts/app/app.provider";
import theme from "theme";
import Footer from "components/footer/footer";

const contact = () => {
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="form-container">
            <div className="left-container">
              <div className="left-inner-container">
                <h2>Let's Chat</h2>
                <p>
                  Whether you have a question, want to start a project or simply
                  want to connect.
                </p>
                <br />
                <p>Feel free to send me a message in the contact form</p>
              </div>
            </div>
            <div className="right-container">
              <div className="right-inner-container">
                <form action="#">
                  <h2 className="lg-view">Contact</h2>
                  <h2 className="sm-view">Let's Chat</h2>
                  <p>* Required</p>
                  <div className="social-container">
                    <a href="#" className="social">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a href="#" className="social">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                  <input type="text" placeholder="Name *" />
                  <input type="email" placeholder="Email *" />
                  <input type="phone" placeholder="Phone" />
                  <textarea rows="4" placeholder="Message"></textarea>
                  <button>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThemeProvider theme={theme}>
        <StickyProvider>
          <Footer />
        </StickyProvider>
      </ThemeProvider>
    </>
  );
};

export default contact;
