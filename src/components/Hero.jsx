import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Logo circular */}
        <div className="hero-logo-container">
          <img src="/logo.png" alt="Logo" className="hero-logo" />
        </div>

        {/* Texto */}
        <div className="hero-text">
          <h1 className="hero-title">Auxílio Maternidade ao Seu Alcance</h1>
          <p className="hero-subtitle">
              Conte com a Serene Auxílio Materno para garantir seus direitos! 
  Podemos ajudá-la a receber de <strong>R$&nbsp;5.612,00</strong> até <strong>R$&nbsp;14.900,00</strong> de Auxílio Maternidade de forma rápida e segura.
</p>
         <a href="https://wa.link/y9jum1" target="_blank" rel="noopener noreferrer">
  <button className="hero-btn">Faça Sua Análise Gratuita</button>
</a>

        </div>
      </div>
    </section>
  );
}
