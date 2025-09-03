import React, { useEffect, useRef, useState } from "react";
import "./Steps.css";

export default function Steps() {
  const stepsRef = useRef([]);
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = stepsRef.current.map((step, i) => {
        if (!step) return false;
        const rect = step.getBoundingClientRect();
        return rect.top < window.innerHeight - 100;
      });
      setVisibleSteps(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink =
    "https://wa.me/5511977874213?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20se%20tenho%20direito%20ao%20aux%C3%ADlio%20materno%3F";

  return (
    <section id="steps" className="steps">
      <h2>Como Funciona?</h2>
      <div className="steps-container">
        {[
          "Faça sua análise gratuita respondendo algumas perguntas rápidas.",
          "Nossa equipe cuida de tudo e dá entrada no benefício para você.",
          "Você recebe o valor diretamente, sem burocracia!"
        ].map((text, i) => (
          <div
            key={i}
            ref={el => (stepsRef.current[i] = el)}
            className={`step ${visibleSteps[i] ? "visible" : ""}`}
          >
            <h3>{i + 1}º</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="cta-btn">
        Consulta gratuita agora!
      </a>
    </section>
  );
}
