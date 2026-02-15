<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maroju Karthik - Portfolio</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <style>
    :root {
      --parallax-scale: 0.1;
      --parallax-min-height: 44rem;
      --container-offset-adjustment: 5rem;
    }

    /* disable if requested for accessibility reasons */
    @media (prefers-reduced-motion) {
      :root {
        --parallax-scale: 0;
      }
    }

    /* container around parallax layers */
    .parallax__group {
      position: relative;
      z-index: -1;
      transform-origin: center top;
      transform: scaleY(calc(1 - var(--parallax-scale)));
      margin-top: calc(
        var(--container-offset-adjustment)
        (-1
          max(100vh, var(--parallax-min-height))
        )
      );
      margin-bottom: calc(-1 * var(--container-offset-adjustment));
    }

    .parallax__layer {
      transform-origin: center top;
      transform: scaleY(calc(1 / (1 - var(--parallax-scale))));
    }

    .parallax__layer--foreground {
      position: relative;
      top: 0;
    }

    .parallax__layer--background {
      position: sticky;
      z-index: -2;
      top: 0;
      transform-origin: center top;
      transform: scaleY(calc(1 / (1 - var(--parallax-scale))));
      height: 100%;
      min-height: 100vh;
      min-height: max(100vh, var(--parallax-min-height));
      width: 100vw;
      background-attachment: fixed; /* legacy fallback */
      background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }

    /* recommended other elements' opaque background etc. */
    body {
      margin: 0;
      padding: 0;
    }

    header, footer, section {
      background-color: #fff;
      margin:0;
      padding: 1rem;
    }

    body {font-family: Arial, sans-serif; margin:0; padding:0; line-height:1.6; color:#222; background:#f9f9f9;}
    header {background:#222; color:#fff; padding:40px 20px; text-align:center;}
    header h1 {margin:0; font-size:2rem;}
    header p {margin:8px 0; font-size:1.1rem;}
    nav {margin-top:15px;}
    nav a {color:#fff; margin:0 10px; text-decoration:none; font-weight:bold;}
    section {padding:40px 20px; max-width:900px; margin:auto;}
    h2 {color:#0b7; margin-bottom:15px;}
    .card {
      background:#fff; padding:20px; border-radius:10px; margin-bottom:20px; box-shadow:0 2px 6px rgba(0,0,0,0.1);
      transform: perspective(1500px) rotateY(15deg);
      border-radius: 1rem;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      transition: transform 1s ease 0s;
    }
    .card:hover {
      transform: perspective(3000px) rotateY(5deg);
    }
    ul {list-style:none; padding:0;}
    ul li {margin-bottom:8px;}
    footer {background:#222; color:#ccc; text-align:center; padding:20px; margin-top:40px;}
    footer a {color:#0b7; text-decoration:none;}

    /* Social media icons */
    .social-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .social-ul {
      position: relative;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .social-ul li {
      list-style: none;
      margin: 0 20px 20px;
    }
    .social-ul li a {
      position: relative;
      display: block;
      width: 80px;
      height: 100px;
      text-align: center;
      background-color: #808080;
      transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(0, 0);
      transition: 0.5s;
      box-shadow: -30px 30px 10px rgba(0,0,0,0.5);
      text-decoration: none;
    }
    .social-ul li a .fa-solid, .social-ul li a .fab {
      font-size: 40px;
      color: #fff;
      line-height: 80px;
      transition: 0.5s;
    }
    .social-ul li a span {
      display: block;
      font-size: 14px;
      color: #fff;
      transition: 0.5s;
      line-height: 20px;
    }
    .social-ul li a::before {
      content: "";
      position: absolute;
      top: 10px;
      left: -20px;
      height: 100%;
      width: 20px;
      background-color: #93a092;
      transition: 0.5s;
      transform: rotate(0deg) skewY(-45deg);
    }
    .social-ul li a::after {
      content: "";
      position: absolute;
      bottom: -20px;
      left: -10px;
      height: 20px;
      width: 100%;
      background-color: #b1b1b1;
      transition: 0.5s;
      transform: rotate(0deg) skewX(-45deg);
    }

    .social-ul li a:hover {
      transform: perspective(1000px) rotate(-30deg) skew(25deg)
        translate(20px, -20px);
      box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
    }

    .social-ul li:hover .fa-solid, .social-ul li:hover .fab, .social-ul li:hover span {
      color: #fff;
    }

    /* Email */
    .social-ul li:nth-child(1) a {
      background: #d44638;
    }
    .social-ul li:nth-child(1) a::before {
      background: #b23121;
    }
    .social-ul li:nth-child(1) a::after {
      background: #e44d25;
    }

    /* Phone (using WhatsApp color as placeholder) */
    .social-ul li:nth-child(2) a {
      background: #25d366;
    }
    .social-ul li:nth-child(2) a::before {
      background: #075e54;
    }
    .social-ul li:nth-child(2) a::after {
      background: #128c7e;
    }

    /* LinkedIn */
    .social-ul li:nth-child(3) a {
      background: #0077b5;
    }
    .social-ul li:nth-child(3) a::before {
      background: #004f80;
    }
    .social-ul li:nth-child(3) a::after {
      background: #0099e6;
    }

    /* GitHub */
    .social-ul li:nth-child(4) a {
      background: #181717;
    }
    .social-ul li:nth-child(4) a::before {
      background: #0d0d0d;
    }
    .social-ul li:nth-child(4) a::after {
      background: #242424;
    }
  </style>
</head>
<body>
  <section class="parallax__group">
    <div class="parallax__layer parallax__layer--background">
    </div>
    <div class="parallax__layer parallax__layer--foreground">
      <header>
        <h1>Maroju Karthik</h1>
        <p>Final-Year B.Tech CSE (AI & ML) Student | Python Enthusiast</p>
        <p>Certified in AWS, Python & Infosys Springboard | Passionate About AI & Cybersecurity</p>
        <p>Actively seeking opportunities in MNCs</p>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <div class="card">
          <p>Hello! I'm <strong>Maroju Karthik</strong>, a final-year Computer Science student specializing in Artificial Intelligence & Machine Learning. With certifications in <strong>AWS, Python, and Infosys Springboard</strong>, I am deeply passionate about AI and Cybersecurity. I am eager to contribute my skills and grow my career in top MNCs.</p>
          <p>I am a dedicated and enthusiastic learner with strong problem-solving skills and a proven academic track record. My focus lies in developing scalable software solutions, leveraging AI technologies, and applying innovative approaches to real-world challenges. I believe in continuous learning and strive to bring creativity, efficiency, and professionalism to every project I undertake.</p>
        </div>
      </section>

      <section id="skills">
        <h2>Skills & Certifications</h2>
        <div class="card">
          <ul>
            <li>✔️ Programming: Python</li>
            <li>✔️ AI & Machine Learning Fundamentals</li>
            <li>✔️ Cloud: AWS Certified</li>
            <li>✔️ Certified in Infosys Springboard</li>
            <li>✔️ Cybersecurity Enthusiast</li>
            <li>✔️ Strong Problem-Solving & Analytical Skills</li>
          </ul>
        </div>
      </section>

      <section id="education">
        <h2>Education</h2>
        <div class="card">
          <ul>
            <li><strong>B.Tech (CSE - AI & ML)</strong> - Avanthi Institute of Engineering and Technology (Present CGPA: 8.3)</li>
            <li><strong>Diploma (EEE)</strong> - Polytechnic, Percentage: 68.5%</li>
            <li><strong>SSC (10th)</strong> - Vijnana Bharathi High School, Vizianagaram, Percentage: 9.3</li>
          </ul>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div class="card">
          <ul>
            <li><strong>Content Recommendation System</strong> - A smart content recommendation system built with Python and AI. <a href="https://github.com/KarthikMaroju/CodSoft-by-karthik-task-Recommendation-System-" target="_blank">View on GitHub</a></li>
            <li><strong>Text Summarization Tool</strong> - Python-based tool for summarizing long texts. <a href="https://github.com/KarthikMaroju/TEXT-SUMMARIZATION-TOOL" target="_blank">View on GitHub</a></li>
            <li><strong>Cleantech: Transforming Waste Management with Transfer Learning</strong> - Project using transfer learning for waste management. <a href="https://github.com/KarthikMaroju/Cleantech-Transforming-Waste-Management-With-Transfer-Learning" target="_blank">View on GitHub</a></li>
            <li><strong>Personal Portfolio</strong> - My personal portfolio website. <a href="https://github.com/KarthikMaroju/Karthik-Maroju-Portfolio" target="_blank">View on GitHub</a></li>
          </ul>
        </div>
      </section>

      <section id="resume">
        <h2>Resume</h2>
        <div class="card">
          <p>You can view or download my resume using the links below:</p>
          <p><a href="https://drive.google.com/file/d/10t4uBy4lNcmijcARof2DZ9ESx4ZynN8q/view?usp=drivesdk" target="_blank">📄 View My Resume</a></p>
          <p><a href="https://drive.google.com/uc?export=download&id=10t4uBy4lNcmijcARof2DZ9ESx4ZynN8q" target="_blank">⬇️ Download My Resume</a></p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <div class="card">
          <div class="social-container">
            <ul class="social-ul">
              <li>
                <a href="mailto:karthikmaroju479@gmail.com">
                  <i class="fas fa-envelope"></i>
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href="tel:+919666387322">
                  <i class="fas fa-phone"></i>
                  <span>Phone</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/karthik-maroju" target="_blank">
                  <i class="fab fa-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/KarthikMaroju" target="_blank">
                  <i class="fab fa-github"></i>
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Maroju Karthik | Built with ❤️ | <a href="#resume">Resume</a></p>
      </footer>
    </div>
  </section>
</body>
</html>
