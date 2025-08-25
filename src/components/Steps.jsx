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

  return (
    <section id="steps" className="steps">
      <h2>Como Funciona?</h2>
      <div className="steps-container">
        {["Faça sua análise gratuita respondendo algumas perguntas rápidas.",
          "Nossa equipe cuida de tudo e dá entrada no benefício para você.",
          "Você recebe o valor diretamente, sem burocracia!"].map((text, i) => (
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
      <a href="https://wa.link/y9jum1" target="_blank" rel="noopener noreferrer" className="cta-btn">
        Consulta gratuita agora!
      </a>
    </section>
  );
}
