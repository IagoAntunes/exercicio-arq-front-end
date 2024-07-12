import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import BlogSection from "../../components/blog/blog_section.js";
import AboutSection from "../../components/about/about_section.js";
import DescriptionSection from "../../components/description/description_section.js";

export default function App() {
  const [section, setSection] = useState("Blog");

  const renderContent = () => {
    switch (section) {
      case "Blog":
        return <BlogSection />;
      case "Sobre":
        return <AboutSection />;
      case "Descrição":
        return <DescriptionSection />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="top-section">
        <header className="header">
          <nav>
            <ul>
              <li onClick={() => setSection("Blog")}>Blog</li>
              <li onClick={() => setSection("Sobre")}>Sobre</li>
              <li onClick={() => setSection("Descrição")}>Descrição</li>
            </ul>
          </nav>
        </header>
        <div className="content">
          <img
            src="https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200"
            alt="Placeholder"
            className="profile-pic"
          />
          <div className="text-content">
            <h1>Iago Ferreira</h1>
            <p>
              Como desenvolvedor mobile tenho 3 anos de experiência, tendo
              atuado em projetos desafiadores e variados, utilizando diversas
              tecnologias e metodologias de ponta.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-section">{renderContent()}</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
