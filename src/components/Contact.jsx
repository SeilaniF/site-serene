import React, { useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    const cards = document.querySelectorAll(".contact-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  const whatsappLink =
    "https://wa.me/5511977874213?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20se%20tenho%20direito%20ao%20aux%C3%ADlio%20materno%3F";

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Entre em Contato</h2>
          <p>Fale com nossa equipe de forma rápida e fácil:</p>
        </div>

        <div className="contact-cards">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card whatsapp"
          >
            <FaWhatsapp size={36} />
            <span>WhatsApp</span>
            <p>Envie sua mensagem agora!</p>
          </a>

          <a
            href="mailto:sereneauxiliomaterno@gmail.com?subject=Atendimento%20Serene&body=Olá,%20gostaria%20de%20mais%20informações."
            className="contact-card email"
          >
            <FaEnvelope size={36} />
            <span>Email</span>
            <p>Receba resposta rápida!</p>
          </a>

          <a
            href="https://www.instagram.com/serenematernidade/?utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="contact-card instagram"
          >
            <FaInstagram size={36} />
            <span>Instagram</span>
            <p>Veja nossas novidades!</p>
          </a>
        </div>
      </div>
    </section>
  );
}
