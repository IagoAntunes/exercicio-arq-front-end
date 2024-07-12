import React from "react";
import "./blog_section.css";
function BlogSection() {
  const blogItems = [
    {
      title: "5 dicas para sua carreira profissional",
      description:
        "Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end.",
    },
    {
      title: "Como se destacar no mercado de trabalho",
      description:
        "Saiba como se destacar em um mercado competitivo com estas dicas de especialistas.",
    },
    {
      title: "Ferramentas essenciais para desenvolvedores",
      description:
        "Descubra as ferramentas que todo desenvolvedor deve conhecer para ser mais produtivo.",
    },
  ];

  return (
    <div className="blog-section">
      <h2>Ultimas do blog</h2>
      <div className="blog-items">
        {blogItems.map((item, index) => (
          <div key={index} className="blog-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
