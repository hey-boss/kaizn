import React, { useEffect } from "react";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { navigate } from 'gatsby';

import { ContactFormTitle } from "@/data";

const ContactForm = () => {
  const { subTitle, title, description } = ContactFormTitle;

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      process.env.GATSBY_SERVICE_ID,
      process.env.GATSBY_TEMPLATE_ID,
      e.target,
      process.env.GATSBY_PUBLIC_KEY
    )
      .then((result) => {
        toast.success('Successfully Emailed',{
          position: "bottom-left",
        });
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        toast.error(' Failed to email');
      });
  }

  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        <ToastContainer />
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <form
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <textarea
                    className="input-form required"
                    name="message"
                    id="message"
                    placeholder="Write Message"
                  ></textarea>
                </div>
              </div>
              <button
                className="common_btn red_bg"
                type="submit"
                id="con_submit"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
