import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import avatarImage from './assets/avatar.jpg';
import './App.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="left-menu">
          <li><Link to="/">Profile</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className="right-menu">
          <li><a href="https://www.facebook.com/kgilang" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="https://www.instagram.com/_kgilangva" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://www.twitter.com/_kgilangva" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="https://www.linkedin.com/in/kgilang" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
      </nav>
    </header>
  );
};

const Profile = () => {
  return (
    <section id="profile">
      <div className="avatar">
        <img src={avatarImage} alt="Avatar" />
      </div>
      <h1>Kukuh Gumilang</h1>
      <p>Enthusiastic React and JavaScript developer, dedicated to crafting user-friendly web applications.</p>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Ut aliqua aute magna enim</h3>
          <p>Qui dolore ipsum excepteur dolore adipisicing minim consequat irure. Enim aliqua aute ad ea duis esse commodo. Occaecat exercitation irure mollit aliqua do nostrud tempor commodo in proident cupidatat deserunt.</p>
        </div>
        <div className="project-card">
          <h3>Aute ut commodo ullamco consequat sunt sint fugiat nisi</h3>
          <p>Labore nostrud ut dolor do. Cupidatat sunt officia deserunt culpa ullamco id. Eiusmod anim eiusmod do culpa cupidatat sint occaecat ea qui anim. Amet nostrud enim Lorem laboris eiusmod amet magna magna do aliquip excepteur est. Fugiat dolore magna deserunt consequat duis minim est exercitation anim nostrud. Dolor eu eu consectetur fugiat dolore veniam Lorem aliqua reprehenderit et proident exercitation reprehenderit. Et adipisicing reprehenderit ullamco ea laborum nisi consectetur excepteur culpa duis incididunt fugiat.</p>
        </div>
        <div className="project-card">
          <h3>Duis excepteur enim non laborum nisi</h3>
          <p>Dolore irure anim nostrud Lorem non culpa officia id est. Irure fugiat aliqua deserunt esse ipsum ea tempor esse enim sunt anim. Ad amet consequat minim officia magna eu id. Est adipisicing pariatur commodo ut sint labore laboris anim ad nulla cupidatat. Lorem veniam consectetur tempor sint excepteur ipsum sit consectetur aute reprehenderit dolor ad tempor. Cillum Lorem excepteur non incididunt est enim. Lorem consectetur Lorem irure minim ad eiusmod.</p>
        </div>
        <div className="project-card">
          <h3>Nulla sint sit irure aliqua dolor irure enim irure cillum nostrud nisi laboris irure nisi</h3>
          <p>Sunt nostrud minim et excepteur laboris minim voluptate qui nulla duis laborum aliqua. Aliquip laborum ex sit voluptate enim sit. Commodo est exercitation quis do mollit proident aliquip mollit dolor adipisicing. Esse pariatur ex esse sint nulla fugiat dolor magna esse incididunt officia cupidatat nisi. Est occaecat id id pariatur consequat nisi. Consectetur aute nulla proident ut officia velit fugiat proident excepteur aute aliquip dolore.</p>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const messageRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" ref={nameRef} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={emailRef} required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" ref={messageRef} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
