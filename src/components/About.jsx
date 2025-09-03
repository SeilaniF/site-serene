import React from "react";
import {
  FaCheck,
  FaHandHoldingHeart,
  FaBalanceScale,
  FaBaby,
} from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Header da Seção */}
        <div className="about-header">
          <h2>Conheça seu Direito ao Salário Maternidade</h2>
          <p className="subtitle">
            Especialistas em auxiliar mães e gestantes a receberem o benefício
            que merecem!
          </p>
        </div>

        {/* Bloco 1 - Nossa Especialidade */}
        <div className="about-block">
          <div className="about-image">
            <div className="image-frame">
              <img src="/about1.jpg" alt="Equipe de especialistas" />
            </div>
          </div>

          <div className="about-content">
            <div className="content-header">
              <FaHandHoldingHeart className="icon" />
              <h3>Especialistas no seu Direito</h3>
            </div>

            <p>
              A <span className="highlight">Serene</span> é uma empresa
              especializada em auxiliar mães e gestantes na solicitação do
              salário-maternidade. Contamos com toda a estrutura necessária para
              proporcionar um atendimento ético e humanizado.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                <FaCheck className="feature-icon" />
                <span>Atendimento personalizado e acolhedor</span>
              </div>
              <div className="feature-item">
                <FaCheck className="feature-icon" />
                <span>Processo ágil e transparente</span>
              </div>
              <div className="feature-item">
                <FaCheck className="feature-icon" />
                <span>Concessão do benefício em tempo recorde</span>
              </div>
              <div className="feature-item">
                <FaCheck className="feature-icon" />
                <span>Atendimento 100% online em todo Brasil</span>
              </div>
            </div>

            <a
              href="https://wa.link/y9jum1"
              target="_blank"
              className="cta-btn"
            >
              FAZER AVALIAÇÃO GRATUITA!
            </a>
          </div>
        </div>

        {/* Bloco 2 - O que é Salário Maternidade? */}
        <div className="about-block reverse">
          <div className="about-image">
            <div className="image-frame">
              <img src="/about2.jpg" alt="Documentos e processo" />
            </div>
          </div>

          <div className="about-content">
            <div className="content-header">
              <FaBalanceScale className="icon" />
              <h3>Entenda seu Direito</h3>
            </div>

            <p>
              O Salário Maternidade é um benefício concedido para mães
              desempregadas que já trabalharam pelo menos{" "}
              <strong>1 dia com carteira assinada</strong> antes do nascimento
              do filho.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <div className="card-value">R$ 5.612,00</div>
                <div className="card-label">Valor Mínimo</div>
              </div>
              <div className="info-card">
                <div className="card-value">R$ 14.900,00</div>
                <div className="card-label">Valor Máximo</div>
              </div>
              <div className="info-card">
                <div className="card-value">120 dias</div>
                <div className="card-label">Duração</div>
              </div>
            </div>

            <div className="benefit-details">
              <div className="detail-item">
                <div className="detail-icon">✓</div>
                <div className="detail-text">
                  Receba todo o valor em uma única parcela se a criança tiver
                  mais de 4 meses de nascida
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">✓</div>
                <div className="detail-text">
                  Renda durante os primeiros 4 meses após o nascimento
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 3 - Quem tem Direito? */}
        <div className="about-block">
          <div className="about-image about-image-large">
            <div className="image-frame">
              <img src="/about3.jpg" alt="Mãe e bebê felizes" />
            </div>
          </div>

          <div className="about-content">
            <div className="content-header">
              <FaBaby className="icon" />
              <h3>Verifique seu Direito</h3>
            </div>

            <p>
              <strong>Gestantes ou mães com filhos menores de 5 anos</strong>{" "}
              que já tiveram vínculo empregatício formal podem ter direito ao
              benefício.
            </p>

            <h4>Você se encaixa em algum desses casos?</h4>
            <div className="benefit-details">
              <div className="detail-item">
                <div className="detail-icon">✓</div>
                <div className="detail-text">
                  Trabalhou com carteira assinada (CLT)
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">✓</div>
                <div className="detail-text">
                  Foi autônoma com contribuição ao INSS
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">✓</div>
                <div className="detail-text">
                  Foi Microempreendedora Individual (MEI)
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">✓</div>
                <div className="detail-text">
                  Trabalhou como empregada doméstica
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">✓</div>
                <div className="detail-text">
                  Natimorto{" "}
                  <small>(óbito do bebê durante a gestação ou parto)</small>
                </div>
              </div>
            </div>

            <div className="checker-result">
              <p>Você pode ter direito ao Salário Maternidade!</p>
              <a
                href="https://wa.me/5511977874213?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20se%20tenho%20direito"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                FAZER AVALIAÇÃO GRATUITA
              </a>
            </div>

            <div className="legal-note">
              <FaBalanceScale className="icon" />
              <span>
                Direito concedido pelo art. 201, II da CF/88. Amparado pelo art.
                71-A da Lei n. 8.213 (Planos de Previdência Social)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
