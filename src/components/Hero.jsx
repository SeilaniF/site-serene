import "./Hero.css";

export default function Hero() {
  const whatsappLink =
    "https://wa.me/5511977874213?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20se%20tenho%20direito%20ao%20aux%C3%ADlio%20materno%3F";

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
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button className="hero-btn">Faça Sua Análise Gratuita</button>
          </a>
        </div>
      </div>
    </section>
  );
}
