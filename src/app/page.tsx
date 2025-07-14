"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import "./styles/home.css";

function Home() {
  const [isNavOpen, setNavOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setNavOpen(false); // Close nav on large screens
      }
    };
    // console.log(window.innerWidth,"size........")
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load token from localStorage when component mounts
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const value = localStorage.getItem("token");
    if (value) {
      setToken(value);
    }
  }, []);
  //Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); //delete from storage
    setToken(null); //update state
  };

  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="A Code Master Academy - Software Development & Training"
        />
        <meta
          name="keywords"
          content="coding, programming, web development, software, academy"
        />
        <meta name="author" content="Mfuranziza Dusabe Hamza" />
        <title>A Code Master Academy</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    /* Base Styles */\n    :root {\n      --primary: #2563eb;\n      --primary-dark: #1d4ed8;\n      --secondary: #8b5cf6;\n      --dark: #1e293b;\n      --light: #f8fafc;\n      --gray: #94a3b8;\n      --success: #10b981;\n    }\n    \n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n    }\n    \n    body {\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n      background-color: var(--light);\n      color: var(--dark);\n      line-height: 1.6;\n      overflow-x: hidden;\n    }\n    \n    .container {\n      max-width: 1200px;\n      margin: 0 auto;\n      padding: 0 20px;\n    }\n    \n    section {\n      padding: 80px 0;\n    }\n    \n    h1, h2, h3, h4 {\n      font-weight: 700;\n      line-height: 1.2;\n    }\n    \n    h1 {\n      font-size: 3.5rem;\n      margin-bottom: 20px;\n    }\n    \n    h2 {\n      font-size: 2.5rem;\n      margin-bottom: 40px;\n      text-align: center;\n      position: relative;\n    }\n    \n    h2::after {\n      content: '';\n      position: absolute;\n      bottom: -15px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 80px;\n      height: 4px;\n      background: var(--primary);\n      border-radius: 2px;\n    }\n    \n    h3 {\n      font-size: 1.8rem;\n      margin-bottom: 15px;\n    }\n    \n    p {\n      margin-bottom: 20px;\n      font-size: 1.1rem;\n    }\n    \n    a {\n      text-decoration: none;\n      color: var(--primary);\n      transition: all 0.3s ease;\n    }\n    \n    a:hover {\n      color: var(--primary-dark);\n    }\n    \n    .btn {\n    font-size: 18px;\n  display: inline-block;\n      padding: 8px 15px;\n      background: var(--primary);\n      color: white;\n      border-radius: 30px;\n      font-weight: 600;\n           letter-spacing: 1px;\n      transition: all 0.3s ease;\n      border: none;\n      cursor: pointer;\n      position: relative;\n      overflow: hidden;\n    }\n    \n    .btn:hover {\n      background: var(--primary-dark);\n      transform: translateY(-3px);\n      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n    }\n    \n    .btn-outline {\n      background: transparent;\n      border: 2px solid var(--primary);\n      color: var(--primary);\n    }\n    \n    .btn-outline:hover {\n      background: var(--primary);\n      color: white;\n    }\n    \n    /* Header Styles */\n    header {\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      background: rgba(255, 255, 255, 0.95);\n      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n      z-index: 1000;\n      padding: 15px 0;\n      transition: all 0.3s ease;\n    }\n    \n    .header-container {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n    }\n    \n    .logo {\n      display: flex;\n      align-items: center;\n    }\n    \n    .logo img {\n      height: 50px;\n      margin-right: 15px;\n    }\n    \n    .logo-text {\n      font-size: 1.8rem;\n      font-weight: 800;\n      color: var(--primary);\n    }\n    \n    .logo-text span {\n      color: var(--secondary);\n    }\n    \n    nav ul {\n      display: flex;\n      list-style: none;\n    }\n    \n    nav ul li {\n      margin-left: 30px;\n    }\n    \n    nav ul li a {\n      color: var(--dark);\n      font-weight: 600;\n      position: relative;\n    }\n    \n    nav ul li a::after {\n      content: '';\n      position: absolute;\n      bottom: -5px;\n      left: 0;\n      width: 0;\n      height: 2px;\n      background: var(--primary);\n      transition: width 0.3s ease;\n    }\n    \n    nav ul li a:hover::after,\n    nav ul li a.active::after {\n      width: 100%;\n    }\n    \n    .mobile-toggle {\n      display: none;\n      font-size: 1.5rem;\n      cursor: pointer;\n    }\n    \n    /* Hero Section */\n    .hero {\n      height: 100vh;\n      display: flex;\n      align-items: center;\n      background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);\n      position: relative;\n      overflow: hidden;\n    }\n    \n    .hero::before {\n      content: '';\n      position: absolute;\n      top: -50%;\n      right: -30%;\n      width: 800px;\n      height: 800px;\n      border-radius: 50%;\n      background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);\n      z-index: -1;\n    }\n    \n    .hero-content {\n      max-width: 600px;\n    }\n    \n    .hero h1 span {\n      color: var(--secondary);\n    }\n    \n    .hero-btns {\n      margin-top: 30px;\n      display: flex;\n      gap: 15px;\n    }\n    \n    .hero-image {\n      position: absolute;\n      right: 0;\n      top: 50%;\n      transform: translateY(-50%);\n      width: 45%;\n      max-width: 600px;\n      animation: float 5s ease-in-out infinite;\n    }\n    \n    @keyframes float {\n      0% {\n        transform: translateY(-50%);\n      }\n      50% {\n        transform: translateY(-53%);\n      }\n      100% {\n        transform: translateY(-50%);\n      }\n    }\n    \n    /* Services Section */\n    .services-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n      gap: 30px;\n      margin-top: 50px;\n    }\n    \n    .service-card {\n      background: white;\n      border-radius: 10px;\n      overflow: hidden;\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n      transition: all 0.3s ease;\n      text-align: center;\n      padding: 40px 30px;\n    }\n    \n    .service-card:hover {\n      transform: translateY(-10px);\n      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n    }\n    \n    .service-icon {\n      font-size: 3rem;\n      color: var(--primary);\n      margin-bottom: 20px;\n    }\n    \n    /* Portfolio Section */\n    .portfolio {\n      background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);\n    }\n    \n    .portfolio-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n      gap: 30px;\n    }\n    \n    .portfolio-item {\n      background: white;\n      border-radius: 10px;\n      overflow: hidden;\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n      transition: all 0.3s ease;\n    }\n    \n    .portfolio-item:hover {\n      transform: translateY(-10px);\n      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n    }\n    \n    .portfolio-img {\n      height: 250px;\n      background: linear-gradient(135deg, var(--primary), var(--secondary));\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: white;\n      font-size: 3rem;\n    }\n    \n    .portfolio-content {\n      padding: 25px;\n    }\n    \n    /* About Section */\n    .about-content {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 50px;\n      align-items: center;\n    }\n    \n    .about-image {\n      border-radius: 10px;\n      overflow: hidden;\n      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\n    }\n    \n    .about-image img {\n      width: 100%;\n      height: auto;\n      display: block;\n    }\n    \n    .skills {\n      margin-top: 30px;\n    }\n    \n    .skill-bar {\n      margin-bottom: 20px;\n    }\n    \n    .skill-info {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 5px;\n    }\n    \n    .skill-progress {\n      height: 8px;\n      background: #e2e8f0;\n      border-radius: 4px;\n      overflow: hidden;\n    }\n    \n    .skill-progress span {\n      display: block;\n      height: 100%;\n      background: var(--primary);\n      border-radius: 4px;\n    }\n    \n    /* Contact Section */\n    .contact {\n      background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);\n    }\n    \n    .contact-container {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 50px;\n    }\n    \n    .contact-info {\n      display: flex;\n      flex-direction: column;\n      gap: 25px;\n    }\n    \n    .contact-item {\n      display: flex;\n      gap: 15px;\n    }\n    \n    .contact-icon {\n      font-size: 1.5rem;\n      color: var(--primary);\n      min-width: 40px;\n    }\n    \n    .contact-form {\n      background: white;\n      padding: 40px;\n      border-radius: 10px;\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);\n    }\n    \n    .form-group {\n      margin-bottom: 20px;\n    }\n    \n    .form-group label {\n      display: block;\n      margin-bottom: 8px;\n      font-weight: 600;\n    }\n    \n    .form-group input,\n    .form-group textarea,\n    .form-group select {\n      width: 100%;\n      padding: 12px 15px;\n      border: 1px solid #cbd5e1;\n      border-radius: 5px;\n      font-family: inherit;\n      font-size: 1rem;\n      transition: all 0.3s ease;\n    }\n    \n    .form-group input:focus,\n    .form-group textarea:focus,\n    .form-group select:focus {\n      border-color: var(--primary);\n      outline: none;\n      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n    }\n    \n    .form-group textarea {\n      min-height: 150px;\n      resize: vertical;\n    }\n    \n    .services-options {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 15px;\n      margin-bottom: 20px;\n    }\n    \n    .service-option {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n    }\n    \n    /* Footer */\n    footer {\n      background: var(--dark);\n      color: white;\n      padding: 60px 0 30px;\n    }\n    \n    .footer-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n      gap: 40px;\n      margin-bottom: 40px;\n    }\n    \n    .footer-logo {\n      font-size: 1.8rem;\n      font-weight: 800;\n      margin-bottom: 15px;\n      color: white;\n    }\n    \n    .footer-logo span {\n      color: var(--secondary);\n    }\n    \n    .footer-links h3 {\n      color: white;\n      margin-bottom: 20px;\n      font-size: 1.3rem;\n    }\n    \n    .footer-links ul {\n      list-style: none;\n    }\n    \n    .footer-links ul li {\n      margin-bottom: 10px;\n    }\n    \n    .footer-links ul li a {\n      color: var(--gray);\n      transition: all 0.3s ease;\n    }\n    \n    .footer-links ul li a:hover {\n      color: white;\n    }\n    \n    .social-links {\n      display: flex;\n      gap: 15px;\n      margin-top: 20px;\n    }\n    \n    .social-links a {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 40px;\n      height: 40px;\n      background: rgba(255, 255, 255, 0.1);\n      color: white;\n      border-radius: 50%;\n      transition: all 0.3s ease;\n    }\n    \n    .social-links a:hover {\n      background: var(--primary);\n      transform: translateY(-5px);\n    }\n    \n    .copyright {\n      text-align: center;\n      padding-top: 30px;\n      border-top: 1px solid rgba(255, 255, 255, 0.1);\n      color: var(--gray);\n      font-size: 0.9rem;\n    }\n    \n    /* Responsive Styles */\n    @media (max-width: 992px) {\n      h1 {\n        font-size: 2.8rem;\n      }\n      \n      h2 {\n        font-size: 2.2rem;\n      }\n      \n      .about-content,\n      .contact-container {\n        grid-template-columns: 1fr;\n      }\n      \n      .about-image {\n        max-width: 500px;\n        margin: 0 auto;\n      }\n      \n      .hero-image {\n        display: none;\n      }\n      \n      .hero-content {\n        max-width: 100%;\n        text-align: center;\n      }\n      \n      .hero-btns {\n        justify-content: center;\n      }\n    }\n    \n    @media (max-width: 768px) {\n      nav {\n        position: fixed;\n        top: 80px;\n        right: -100%;\n        width: 80%;\n        height: calc(100vh - 80px);\n        background: white;\n        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);\n        transition: all 0.4s ease;\n      }\n      \n      nav.active {\n        right: 0;\n      }\n      \n      nav ul {\n        flex-direction: column;\n        padding: 30px;\n      }\n      \n      nav ul li {\n        margin: 0 0 20px 0;\n      }\n      \n      .mobile-toggle {\n        display: block;\n      }\n      \n      .services-options {\n        grid-template-columns: 1fr;\n      }\n    }\n    \n    @media (max-width: 576px) {\n      section {\n        padding: 60px 0;\n      }\n      \n      h1 {\n        font-size: 2.2rem;\n      }\n      \n      h2 {\n        font-size: 1.8rem;\n      }\n      \n      .btn {\n        padding: 10px 20px;\n        font-size: 0.9rem;\n      }\n      \n      .hero-btns {\n        flex-direction: column;\n        align-items: center;\n      }\n      \n      .contact-form {\n        padding: 25px;\n      }\n    }\n  ",
          }}
        />
        {/* Header */}
        <header>
          <div
            className="container header-container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <a href="#" className="logo">
              <div className="logo-text">
                Digital<span>Pathshala</span>
              </div>
            </a>

            {/* Nav */}
            <nav className={isNavOpen ? "active" : ""}>
              <ul onClick={() => setNavOpen(false)} className="navbar">
                <li>
                  <a href="#home" className="text-[18px]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-[18px]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-[18px]">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-[18px]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[18px]">
                    Contact
                  </a>
                </li>
                {token ? (
                  <li>
                    <a onClick={handleLogout} href="" className="btn">
                      Logout
                    </a>
                  </li>
                ) : (
                  <li>
                    <Link href="/auth/login" className="btn">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
            {/* search bar */}
            <span className="nav-search">
              <input type="text" placeholder="Search..." />
              <button type="button">
                <i className="fas fa-search"></i>
              </button>
            </span>
            {/* Mobile Toggle Button */}
            <div
              className="mobile-toggle"
              onClick={() => setNavOpen(!isNavOpen)}
            >
              <i className="fas fa-bars" />
            </div>
          </div>
        </header>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>
                Welcome to <span>A Code Master</span> Academy
              </h1>
              <p>
                We transform ideas into powerful digital solutions through
                cutting-edge software development and comprehensive training
                programs.
              </p>
              <div className="hero-btns">
                <a href="#services" className="btn">
                  Our Services
                </a>
                <a href="#contact" className="btn btn-outline">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="hero-content" style={{ margin: "15px 0px" }}>
              {token ? (
                <Link href={""}>
                  <div
                    className="btn btn-outline"
                    style={{
                      background: "linear-gradient(135deg, #2563eb, #8b5cf6)",
                      width: "100%",
                      height: "100%",
                      borderRadius: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "1.5rem",
                      padding: 11,
                      textAlign: "center",
                    }}
                  >
                    Click here to Create Institute
                  </div>
                </Link>
              ) : (
                <div
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #8b5cf6)",
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.5rem",
                    padding: 11,
                    textAlign: "center",
                  }}
                >
                  Please! Register a New Account to Create Institute...
                </div>
              )}
            </div>
          </div>
          <div className="hero-image">
            <div
              style={{
                background: "linear-gradient(135deg, #2563eb, #8b5cf6)",
                width: "100%",
                height: "100%",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.5rem",
                padding: 20,
                textAlign: "center",
              }}
            >
              Please! Register a New Account to Create Institute...
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section id="services" className="services">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-laptop-code" />
                </div>
                <h3>Software Development</h3>
                <p>
                  Custom software solutions tailored to your business needs,
                  built with modern technologies and best practices.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-paint-brush" />
                </div>
                <h3>UI/UX Design</h3>
                <p>
                  Creating intuitive, user-friendly interfaces that enhance user
                  experience and drive engagement.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-chart-line" />
                </div>
                <h3>Software Analytics</h3>
                <p>
                  Data-driven insights to optimize your software performance and
                  make informed business decisions.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-mobile-alt" />
                </div>
                <h3>Mobile Development</h3>
                <p>
                  Native and cross-platform mobile applications for iOS and
                  Android that deliver exceptional experiences.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-graduation-cap" />
                </div>
                <h3>Training &amp; Mentorship</h3>
                <p>
                  Comprehensive coding courses and mentorship programs to
                  develop the next generation of developers.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-cloud" />
                </div>
                <h3>Cloud Solutions</h3>
                <p>
                  Scalable cloud infrastructure and services to support your
                  business growth and digital transformation.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <div className="portfolio-img">
                  <i className="fas fa-shopping-cart" />
                </div>
                <div className="portfolio-content">
                  <h3>E-Commerce Platform</h3>
                  <p>
                    A full-featured online shopping solution with payment
                    integration and inventory management.
                  </p>
                  <a href="#" className="btn btn-outline">
                    View Details
                  </a>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio-img">
                  <i className="fas fa-school" />
                </div>
                <div className="portfolio-content">
                  <h3>Learning Management System</h3>
                  <p>
                    A comprehensive platform for online education with course
                    management and student tracking.
                  </p>
                  <a href="#" className="btn btn-outline">
                    View Details
                  </a>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio-img">
                  <i className="fas fa-mobile-alt" />
                </div>
                <div className="portfolio-content">
                  <h3>Fitness Tracking App</h3>
                  <p>
                    Mobile application for tracking workouts, nutrition, and
                    health metrics with personalized plans.
                  </p>
                  <a href="#" className="btn btn-outline">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <h2>About Us</h2>
            <div className="about-content">
              <div className="about-text">
                <h3>We&apos;re Passionate About Technology</h3>
                <p>
                  A Code Master Academy was founded by Mfuranziza Dusabe Hamza
                  with a mission to bridge the gap between technology education
                  and industry needs. We believe in empowering individuals and
                  businesses through innovative software solutions and
                  comprehensive training.
                </p>
                <p>
                  Our team of experienced developers, designers, and educators
                  are dedicated to delivering exceptional results and helping
                  our clients achieve their digital transformation goals.
                </p>
                <div className="skills">
                  <div className="skill-bar">
                    <div className="skill-info">
                      <span>Web Development</span>
                      <span>95%</span>
                    </div>
                    <div className="skill-progress">
                      <span style={{ width: "95%" }} />
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-info">
                      <span>Mobile Development</span>
                      <span>90%</span>
                    </div>
                    <div className="skill-progress">
                      <span style={{ width: "90%" }} />
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-info">
                      <span>UI/UX Design</span>
                      <span>85%</span>
                    </div>
                    <div className="skill-progress">
                      <span style={{ width: "85%" }} />
                    </div>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-info">
                      <span>Cloud Solutions</span>
                      <span>80%</span>
                    </div>
                    <div className="skill-progress">
                      <span style={{ width: "80%" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-image">
                <div
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #2563eb)",
                    width: "100%",
                    height: 400,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "1.5rem",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  Empowering Developers, Transforming Businesses
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <h2>Contact Us</h2>
            <div className="contact-container">
              <div className="contact-info">
                <h3>Get In Touch</h3>
                <p>
                  Have a project in mind or want to learn more about our
                  training programs? Reach out to us!
                </p>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Rubavu, Rwanda</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>mfuranzizahamza@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone" />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+250 796 132 866</p>
                  </div>
                </div>
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>
              <div className="contact-form">
                <h3 id="hire">Hire Us</h3>
                <form className="work-request">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="services">Services Needed</label>
                    <div className="services-options">
                      <div className="service-option">
                        <input type="checkbox" id="service1" />
                        <label htmlFor="service1">Software Development</label>
                      </div>
                      <div className="service-option">
                        <input type="checkbox" id="service2" />
                        <label htmlFor="service2">UI/UX Design</label>
                      </div>
                      <div className="service-option">
                        <input type="checkbox" id="service3" />
                        <label htmlFor="service3">Mobile App</label>
                      </div>
                      <div className="service-option">
                        <input type="checkbox" id="service4" />
                        <label htmlFor="service4">Web Development</label>
                      </div>
                      <div className="service-option">
                        <input type="checkbox" id="service5" />
                        <label htmlFor="service5">Training</label>
                      </div>
                      <div className="service-option">
                        <input type="checkbox" id="service6" />
                        <label htmlFor="service6">Other</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="btn">
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer>
          <div className="container">
            <div className="footer-grid">
              <div className="footer-about">
                <div className="footer-logo">
                  A Code<span>Master</span>
                </div>
                <p>
                  Transforming businesses and empowering developers through
                  innovative software solutions and comprehensive training
                  programs.
                </p>
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>
              <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links">
                <h3>Our Services</h3>
                <ul>
                  <li>
                    <a href="#">Software Development</a>
                  </li>
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">Mobile App Development</a>
                  </li>
                  <li>
                    <a href="#">UI/UX Design</a>
                  </li>
                  <li>
                    <a href="#">Training &amp; Mentorship</a>
                  </li>
                </ul>
              </div>
              <div className="footer-links">
                <h3>Contact Info</h3>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt" /> Rubavu, Rwanda
                  </li>
                  <li>
                    <i className="fas fa-envelope" /> mfuranzizahamza@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-phone" /> +250 796 132 866
                  </li>
                </ul>
              </div>
            </div>
            <div className="copyright">
              <p>
                © 2023 A Code Master Academy. All Rights Reserved. Created by
                Mfuranziza Dusabe Hamza
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
