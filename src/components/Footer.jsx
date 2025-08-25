import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        © Serene - Auxílio Materno {new Date().getFullYear()}. Todos os direitos reservados
      </div>
      <div className="footer-right">
        Desenvolvido por{" "}
        <a 
          href="https://portfolioseilanif.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <strong className="developer-name">S. Fontes</strong>
        </a>
      </div>
    </footer>
  );
}
