import logo from "../assets/imgs/logo/logo.webp";
import heroImgPhone from "../assets/imgs/hero/personImg.webp";
import heroImgDesktop from "../assets/imgs/hero/bgHeroInfluencer.webp";
import bgHeroImg from "../assets/imgs/hero/bgHeroInfluencer.webp";
import heroDefaultImg from "../assets/imgs/hero/lawHero.jpg";
import backgroundPersonMobile from "../assets/imgs/hero/bgHeroMobile.webp";
import modelo1 from "../assets/imgs/modelos/modelo1.webp";
import modelo2 from "../assets/imgs/modelos/modelo2.webp";

import imgFeatures from "../assets/imgs/features/imgServices.jpg";
import imgDivisor from "../assets/imgs/features/imgDivisor.jpg";

import imgQuadrada1 from "../assets/imgs/features/featuresQuadrada1.webp";
import imgQuadrada2 from "../assets/imgs/features/featuresQuadrada2.webp";
import imgQuadrada3 from "../assets/imgs/features/featuresQuadrada3.webp";
import imgQuadrada4 from "../assets/imgs/features/featuresQuadrada4.webp";
import imgQuadrada5 from "../assets/imgs/features/featuresQuadrada5.webp";
import imgQuadrada6 from "../assets/imgs/features/featuresQuadrada6.webp";
import imgQuadrada7 from "../assets/imgs/features/featuresQuadrada7.webp";
import imgQuadrada8 from "../assets/imgs/features/featuresQuadrada8.webp";
import imgQuadrada9 from "../assets/imgs/features/featuresQuadrada9.webp";

import aboutImg1 from "../assets/imgs/about/aboutImg.jpg";
import imgAbout1 from "../assets/imgs/about/aboutImg1.jpg";
import imgAbout2 from "../assets/imgs/about/aboutImg2.jpg";
import imgAbout3 from "../assets/imgs/about/aboutImg3.jpg";
import imgAbout4 from "../assets/imgs/about/aboutImg4.jpg";
import imgAbout5 from "../assets/imgs/about/aboutImg5.jpg";
import aboutSocialImg from "../assets/imgs/about/aboutSocial.webp";
import aboutInstagram from "../assets/imgs/about/imgAboutInstagram.jpg";

import imgSteps from "../assets/imgs/steps/imgSteps.webp";

import numbersImgBg from "../assets/imgs/paralaxe/bgParalaxe1.jpg";

import trustedByImg1 from "../assets/imgs/trustedBy/item1.jpg";
import trustedByImg2 from "../assets/imgs/trustedBy/item2.jpg";
import trustedByImg3 from "../assets/imgs/trustedBy/item3.jpg";

import featuresImg1 from "../assets/imgs/features/imgFeatures1.webp";
import featuresImg2 from "../assets/imgs/features/imgFeatures2.webp";
import featuresImg3 from "../assets/imgs/features/imgFeatures3.webp";
import featuresImg4 from "../assets/imgs/features/imgFeatures4.webp";

import imgFeaturesCardModal1 from "../assets/imgs/features/imgFeaturesCardModal1.jpg";
import imgFeaturesCardModal2 from "../assets/imgs/features/imgFeaturesCardModal2.jpg";
import imgFeaturesCardModal3 from "../assets/imgs/features/imgFeaturesCardModal3.jpg";
import imgFeaturesCardModal4 from "../assets/imgs/features/imgFeaturesCardModal4.jpg";

import ctaWhatsappImgBg from "../assets/imgs/paralaxe/bgParalaxe2.jpg";

import teamMemberImg1 from "../assets/imgs/team/team1.webp";
import teamMemberImg2 from "../assets/imgs/team/team2.webp";
import teamMemberImg3 from "../assets/imgs/team/team3.webp";
import teamMemberImg4 from "../assets/imgs/team/team4.webp";

import imgTestimonial1 from "../assets/imgs/testimonials/deposition1.png";
import imgTestimonial2 from "../assets/imgs/testimonials/deposition2.png";
import imgTestimonial3 from "../assets/imgs/testimonials/deposition3.png";
import imgTestimonial4 from "../assets/imgs/testimonials/deposition4.png";
import { Briefcase, Gavel } from "lucide-react";
import { Users } from "lucide-react";
import { FileText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export const infos = {
  name: "LIM Advocacia",
  email: "contato", // Email desejado pelo cliente
  emailSecundario: "dra.lilian.oliveira@limadv.com.br", // Email desejado pelo cliente
  emailTerciario: "financeiro@limadv.com.br", // Email desejado pelo cliente
  emailQuatro: "contratos@limadv.com.br", // Email desejado pelo cliente
  domain: "limadv.com.br", // Sem "www"
  phone: {
    ddd: "11",
    firstPart: "96105", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "7324", // Apenas os 4 últimos números
  },
  phoneSecundario: {
    ddd: "11",
    firstPart: "2110", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "6063", // Apenas os 4 últimos números
  },
  phoneTerciario: {
    ddd: "A_Definir",
    firstPart: "A_Definir", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "A_Definir", // Apenas os 4 últimos números
  },
  endereco: (
    <div>
      <p>Av. Paulista 1636,</p>
      <p>Jardim Paulista São Paulo - SP,</p>
      <p>CEP: 01310-200.</p>
    </div>
  ),
  enderecoSecundario: (
    <div>
      <p>Endereço:</p>
      <p>Rua Bernardo Guimarães,</p>
      <p>nº 245, Bairro Funcionários Belo Horizonte - MG,</p>
      <p>CEP: 30140-080.</p>
    </div>
  ),
  expediente: (
    <div>
      <p>Atendimento 24h</p>
    </div>
  ),
  obs: <span className="italic">A Definir</span>,
  instagramProfile: "lim_advocacia", // Sem o @
  facebookProfile: "A_Definir",
  linkeDinProfile: "lílian-oliveira-advogada/",
  x: "A_Definir",
  whatsappDefaultMessage:
    "Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.",
  whatsChatDefaultMessage:
    "Gostaria de falar conosco agora mesmo? Clque abaixo 👇",
  slogan: "",
};

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      solidLogo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      menuItems: [
        "Home",
        "Plantão 24h",
        "Indústria Criativa",
        "Núcleos de Atuação",
        "Produtos Jurídicos",
        "Sobre nós",
        "Contato",
      ],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      miniTag: "LIM Advocacia | Escritório Full Service em São Paulo",
      title: (
        <h1 className="mb-[16px]">
          <span className="text-primary"> </span>
        </h1>
      ),
      subtitle: "",
      heroImgPhone: heroImgPhone, // img da pessoa mobile
      heroDesktop: heroImgDesktop, //bg com foto da pessoa
      heroImg: bgHeroImg, //fundo da Hero
      heroDefaultImage: heroDefaultImg, //imagem da heroDefault Mobile
      backgroundPerson: backgroundPersonMobile,
      ctaButtonText: "Quero ser ouvido",
      obsHero: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin-check"
          >
            <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" />
            <circle cx="12" cy="10" r="3" />
            <path d="m16 18 2 2 4-4" />
          </svg>
        ),
        text: "",
      },
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
      secondaryCta: "A_Definir",
      images: {
        background: bgHeroImg,
        static: {
          img: {},
          alt: "",
        },
        slide1: {
          img: {},
          alt: "",
        },
        slide2: {
          img: {},
          alt: "",
        },
        slide3: {
          img: {},
          alt: "",
        },
      },
    },
    features: {
      miniTag: "INDÚSTRIA CRIATIVA",
      title: "Especialização jurídica no setor cultural e artístico",
      subtitle:
        "Apoio jurídico para impulsionar projetos culturais com segurança.",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        img: featuresImg1,
        title: "Assessoria jurídica para projetos culturais",
        subtitle:
          "Atuação estratégica na área cultural com foco em segurança jurídica para projetos, instituições e iniciativas criativas.",
        description: (
          <div className="text-black/70">
            ▪ Due <i>Diligence</i> Contratual
            <br />▪ Elaboração de Contratos
            <br />▪ Constituição de empresas, associações, institutos e ONGs{" "}
            <br />▪ Certificações
            <br />▪ Registro e licenciamento de Marcas
            <br />▪ Estruturação de editais
            <br />▪ Parecer jurídico sobre a legislação cultural, Lei de
            direitos autorais e legislação conexa
            <br />▪ Recursos administrativos e judiciais
          </div>
        ),
        imgModal: imgFeaturesCardModal1,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card2: {
        img: featuresImg2,
        title: "Soluções jurídicas para artistas",
        subtitle:
          "Proteção jurídica para artistas, criadores e produtores, com suporte ágil e individualizado.",
        description: (
          <div className="text-black/70">
            ▪ Recursos administrativos;
            <br />▪ Mandado de Segurança;
            <br />▪ Ação Anulatória;
            <br />▪ Tutelas de Urgência;
            <br />▪ <i>Habeas Corpus</i>; dentre outras medidas que serão
            analisadas caso a caso.
            <br />
            <br />
            Elaboração e análise de contratos, <i>Due Diligence</i>,
            certificações, alteração contratual, constituição de empresas,
            associações, dentre outros serviços de natureza jurídica.
          </div>
        ),
        imgModal: imgFeaturesCardModal2,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card3: {
        img: featuresImg3,
        title: "Consultoria Jurídica",
        subtitle:
          "Orientação especializada para pessoas físicas e jurídicas, com foco em segurança, clareza e estratégias personalizadas.",
        description: (
          <div className="text-black/70">
            ▪ Diagnóstico jurídico personalizado
            <br />▪ Consultas jurídicas por demanda ou recorrentes
            <br />▪ Estratégias de prevenção de litígios
            <br />▪ Acompanhamento jurídico contínuo
            <br />▪ Resolução de dúvidas e análise documental
            <br />▪ Planejamento jurídico preventivo
          </div>
        ),
        imgModal: imgFeaturesCardModal3,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card4: {
        img: featuresImg4,
        title: "Núcleos de especialidade",
        subtitle:
          "Além do foco cultural, atuamos de forma ampla e integrada nas seguintes áreas:",
        description: (
          <div className="text-black/70">
            <strong>
              <p className="mb-2 text-black/80">
                Direito Cultural, Autoral, Propriedade Intelectual e da
                Indústria Criativa:
              </p>
            </strong>
            ▪ Leis de Incentivo à Cultura Registro de obras e marcas
            <br />
            ▪ Estruturação de editais e projetos
            <br />
            ▪ Pareceres jurídicos e defesas administrativas
            <br />
            ▪ Elaboração e análise contratual
            <br />
            ▪ Arbitragem
            <br />
            <br />
            <strong>
              <p className="mb-2 text-black/80">
                {" "}
                O Núcleo de Direito Tributário da LIM Advocacia atua com
                execuções fiscais, contencioso administrativo e dívida ativa:
              </p>
            </strong>
            ▪ Emissão de CNDs (certidões negativas de débitos).
            <br />▪ Consultivo tributário, processos administrativos e
            judiciais.
            <br />▪ Transação Tributária;
            <br />▪ Ação Anulatória;
            <br />▪ Prescrição e Decadência;
            <br />▪ Tutelas de Urgência;
            <br />▪ Nulidades;
            <br />▪ Manfado de Segurança;
            <br />
            <br />
            <strong>
              <p className="mb-2 text-black/80">
                Núcleo Criminal e Processo Penal:
              </p>
            </strong>
            ▪ Acompanhamento de inquérito policial
            <br /> ▪ ANPP (acordo de não persecução penal)
            <br />▪ <i>Habeas Corpus</i>
            <br />▪ Audiência de custódia
            <br />▪ Defesa processual
            <br />▪ Medidas protetivas e violência doméstica
            <br />▪ Penal Econômico e “Penal de Família”
            <br />▪ Crimes contra o erário
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card5: {
        img: featuresImg4,
        title: "Recursos administrativos e judiciais",
        subtitle: "Consultar recursos administrativos",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-handshake-icon lucide-handshake"
          >
            <path d="m11 17 2 2a1 1 0 1 0 3-3" />
            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
            <path d="m21 3 1 11h-2" />
            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
            <path d="M3 4h8" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card6: {
        img: featuresImg4,
        title: "Violência doméstica",
        subtitle: "Pedir ajuda agora",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shield-alert-icon lucide-shield-alert"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card7: {
        img: featuresImg4,
        title: "Tutela de urgência",
        subtitle: "Solicitar tutela urgente",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-alarm-clock-icon lucide-alarm-clock"
          >
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2 2" />
            <path d="M5 3 2 6" />
            <path d="m22 6-3-3" />
            <path d="M6.38 18.7 4 21" />
            <path d="M17.64 18.67 20 21" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      moreFeatures: {
        card1: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card2: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card3: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
      },
    },
    featuresQuadrdada: {
      miniTag: "NÚCLEOS DE ATUAÇÃO",
      title: "Atenção e dedicação a cada caso",
      subtitle:
        "Nossa banca atua com atendimento artesanal, ético e personalizado.",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        img: imgQuadrada1,
        title: "Tributário",
        subtitle: "",
        description: (
          <div>
            Assessoria especializada na prevenção e resolução de questões
            fiscais. Atuação em defesas administrativas e judiciais, recuperação
            de créditos tributários e planejamento tributário estratégico para
            empresas e pessoas físicas.
          </div>
        ),
        imgModal: imgQuadrada1,
        icon: <FaWhatsapp size={24} />,
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card2: {
        img: imgQuadrada2,
        title: "Penal Econômico e Processual Penal",
        subtitle: "",
        description: (
          <div>
            O Núcleo de Direito Penal e Processual Penal atua na área criminal
            em geral tanto no contencioso quanto no consultivo, com atuação em
            todas as instâncias judiciais.
            <br />
            Acompanhamos desde o inquérito policial, ações penais originárias
            até a fase recursal.
            <br />
            Áreas específicas: direito penal econômico, penal ambiental, penal
            eleitoral, penal financeiro e tributário, lavagem de capitais, penal
            concorrencial, penal falimentar, crimes contra a honra, crimes
            funcionais, crimes licitatórios, Lei de organizações criminosas,
            crimes de direitos autorais, dentre outros.
          </div>
        ),
        imgModal: imgQuadrada2,
        icon: <FaWhatsapp size={24} />,
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card3: {
        img: imgQuadrada3,
        title: "Crimes Cibernéticos",
        subtitle: "",
        description: (
          <div>
            Aconselhamento jurídico e defesa em casos de invasão de
            dispositivos, fraudes digitais, vazamento de dados e demais crimes
            virtuais. Atuação técnica e atualizada frente à legislação digital.
          </div>
        ),
        imgModal: imgQuadrada3,
        icon: <FaWhatsapp size={24} />,
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card4: {
        img: imgQuadrada4,
        title: "Violência Doméstica",
        subtitle: "",
        description: (
          <div>
            Atendimento humanizado e sigiloso em casos de violência doméstica e
            familiar. Acompanhamento jurídico completo para medidas protetivas,
            representação legal e garantia dos direitos da vítima.
            <br />
            ▪ Pedido de Medida Protetiva;
            <br />
            ▪ Pedido de Revogação de Medida Protetiva;
            <br />
            ▪ Acompanhamento do Inquérito Policial;
            <br />
            <i>▪ Habeas Corpus</i>
          </div>
        ),
        imgModal: imgQuadrada4,
        icon: <FaWhatsapp size={24} />,
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card5: {
        img: imgQuadrada5,
        title: "Imobiliário e Direitos Reais",
        subtitle: "A_Definir",
        description: (
          <div>
            O Núcleo Imobiliário e Direitos Reais da LIM Advocacia assessora em
            todas as questões refrente a aquisição, alienação ou locação de
            propriedade urbana e rural, especialmente no que tange a análise da
            situação do imóvel e a estruturação e negociação de contratos de
            compra e venda, permuta, de incorporação, de locação, de implantação
            de empreendimentos imobiliários, de constituição de garantias, entre
            outros.
            <br />
            <br />
            ▪ Regularização de Imóveis;
            <br />▪ Usucapião Extrajudicial e Judicial;
            <br />▪ DDU - Desdobramento, desdobro e unificação;
            <br />▪ Análise de Certidões Imobiliárias e Matrículas;
            <br />▪ Adjudicação Compulsória.
          </div>
        ),
        imgModal: imgQuadrada5,
        icon: <FaWhatsapp size={24} />,
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card6: {
        img: imgQuadrada6,
        title: "Licitação",
        subtitle: "A_Definir",
        description: (
          <div>
            Apoio jurídico completo para empresas em processos licitatórios,
            desde a análise de editais até a impugnação e recursos. Atuação
            também em defesa administrativa e judicial em contratos públicos.
          </div>
        ),
        imgModal: imgQuadrada6,
        icon: <FaWhatsapp size={24} />,
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card7: {
        img: imgQuadrada7,
        title: "Arbitragem",
        subtitle: "A_Definir",
        description: (
          <div>
            O Núcleo de Arbitragem atua na resolução de conflitos entre
            indivíduos, entre empresas e indivíduos, bem como em conflitos
            empresariais.
            <br />
            ▪ Gestão de conflitos e identificação da melhor solução para cada
            situação específica;
            <br />
            ▪ Realizamos pesquisas e participamos de debates acerca da
            arbitragem;
            <br />▪ Estamos preparados para atuar de forma efetiva em
            procedimentos arbitrais.
          </div>
        ),
        imgModal: imgQuadrada7,
        icon: <FaWhatsapp size={24} />,
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card8: {
        img: imgQuadrada8,
        title: "Planejamento Patrimonial e Holding",
        subtitle: "A_Definir",
        description: (
          <div>
            Estruturação jurídica para proteção de bens, sucessão familiar e
            organização de empresas via holdings. Estratégias legais para evitar
            conflitos, reduzir carga tributária e garantir estabilidade
            patrimonial.
          </div>
        ),
        imgModal: imgQuadrada8,
        icon: <FaWhatsapp size={24} />,
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card9: {
        img: imgQuadrada9,
        title: "Famílias e Sucessão",
        subtitle: "A_Definir",
        description: (
          <div>
            O Núcleo de Direito das Famílias é Sucessão atua nas mais variadas
            questões atinentes ao direito das Famílias e Sucessões, desde os
            direitos do nascituro ao falecimento, confecção de de pacto
            antenupcial, pacto de união estável, modificação do regime de bens,
            discussão envolvendo a guarda de menores, emancipação, casamento,
            união estável, dissolução de sociedades conjugais, regulamentação do
            direito de visita, pensão alimentícia, reconhecimento de
            paternidade, doações, venda de bens à sucessores, testamento,
            inventário judicial e extrajudicial, ações de conhecimento de união
            homoafetiva, entre outros.
            <br />
            <br />▪ Ação de Alimentos;
            <br />▪ Busca e apreensão de menor;
            <br />▪ Ação de exoneração de Alimentos;
            <br />▪ Ação Declaratória de Paternidade;
            <br />▪ Ação de Divórcio Judicial e extrajudicial;
            <br />▪ dentre outras ações.
          </div>
        ),
        imgModal: imgQuadrada9,
        icon: <FaWhatsapp size={24} />,
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      moreFeatures: {
        card1: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card2: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card3: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
      },
    },
    modelosJuridicos: {
      miniTag: "PRODUTOS JURÍDICOS",
      title: "Publicações",
      subtitle:
        "Artigos que conectam o Direito a temas sociais, culturais e ambientais, ampliando a compreensão jurídica contemporânea.",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        img: modelo1,
        title: (
          <p>
            Direito, Linguagem e Poder - entre a liberdade e os discursos de
            dominação 18 de mar de 2019
          </p>
        ),
        subtitle: "",
        description: (
          <div>
            O artigo “O Retrato da Sexualidade Transgênera: de Lili Elbe aos
            dias atuais” aborda o tema trangeneridade e sua interface com o
            direito. Para tanto a pesquisadora aborda a vida das artistas: Lili
            Elbe (Eddie Redmayne) e Laerte Coutinho e como um dos referenciais
            teóricos: Judith Butler. Organizador: Émilien Vilas Boas Reis, Pós
            Doutor em Filosofia pela FLUP-Portugal Apoio: da Escola Superior de
            Direito Dom Helder Câmara.
          </div>
        ),
        imgModal: modelo1,
        icon: <FaWhatsapp size={24} />,
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card2: {
        img: modelo2,
        title: (
          <p>Da Filosofia do Ambiente ao Direito Ambiental 18 de mar de 2019</p>
        ),
        subtitle: "",
        description: (
          <div>
            O artigo "O Espaço Urbano como Ambiente Cultural: as mídias sociais
            como ampliação do conceito de espaço público". Pesquisadoras: Lílian
            Oliveira e Rogéria Maciel (doutora em artes visuais pela UBA).
            Demais artigos de autoria dos coautores. Organizadores: Marcelo
            Antônio Rocha e Émilien Vilas Boas Reis. Apoio: Escola Superior de
            Direito Dom Hélder Câmara e Universidade Federal da Bahia.
          </div>
        ),
        imgModal: modelo2,
        icon: <FaWhatsapp size={24} />,
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
    },
    maps: {
      minitag: "A_Definir",
      title: "A_Definir",
      subtitle: "A_Definir",
      embedsrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5228.594742930791!2d-51.169466!3d-23.321824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb435bf9b37d8f%3A0xfb3125702df9f29d!2sMolina%20%26%20Spigarollo%20%7C%20Advogados%20Associados!5e1!3m2!1spt-BR!2sbr!4v1736876812303!5m2!1spt-BR!2sbr",
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "Imagem profissional de escritório/advogado(a)",
      },
      miniTag: "SOBRE NÓS | LIM ADVOCACIA",
      title: "",
      subtitle:
        "Atuação técnica na busca da satisfação dos seus direitos com acolhimento, transparência e foco na sua necessidade.",
      labelInstagram: "Siga-me no Instagram",
      labelFacebook: "Siga-me no Facebook",
      labelLinkedin: "Siga-me no LinkedIn",
      labelX: "Siga-me no X",
      paragraph: (
        <div>
          A LIM Advocacia nasceu do sonho de oferecer um atendimento jurídico
          verdadeiramente humanizado, em um ecossistema que compreende o Direito
          como um sistema único, integrado e conectado à vida real das pessoas.
        </div>
      ),
      buttonModalLabelAbout: "Continuar lendo",
      modal: (
        <p>
          A LIM Advocacia nasceu do sonho de oferecer um atendimento jurídico
          verdadeiramente humanizado, em um ecossistema que compreende o Direito
          como um sistema único, integrado e conectado à vida real das pessoas.
          <br />
          <br />
          Com uma atuação multidisciplinar e personalizada, contamos com o apoio
          de profissionais autônomos e parceiros – como psicólogos,
          psicanalistas, peritos, contadores, engenheiros, dentre outros
          profissionais – que compartilham dos nossos quatro eixos
          estruturantes: atendimento humanizado, técnica jurídica adequada,
          excelência e transparência em todo o processo.
          <br />
          <br />
          Acreditamos que cada cliente e cada caso são únicos. Por isso,
          adotamos um modelo de trabalho artesanal, que permite uma análise
          aprofundada de cada detalhe do caso, aumentando as chances de êxito e
          satisfação dos direitos pleiteados.
          <br />
          <br />
          Embora sejamos entusiastas da tecnologia e da inovação, optamos por
          não utilizar inteligência artificial ou automações para a elaboração
          de peças processuais. Na LIM Advocacia, cada petição é construída
          manualmente com estratégia e técnica jurídica adequada com atenção aos
          detalhes de cada caso.
          <br />
          <br />
          A tecnologia, portanto, é aplicada apenas na rotina administrativa,
          nunca no que se refere à estruturação e à elaboração de peças
          jurídicas, seja em âmbito administrativo ou contencioso.
          <br />
          <br />
          Nosso propósito - Apresentar soluções jurídicas, tanto no âmbito
          administrativo quanto judicial, por meio da aplicação da técnica
          jurídica adequada a cada caso na busca da satisfação do Direito de
          cada cliente.
          <br />
          <br />
          Nossos valores
          <br />- Acolhimento <br />
          - Atendimento humanizado <br />
          - Técnica jurídica adequada <br />
          - Excelência <br />
          - Transparência <br />
          - Estratégia e Planejamento <br />
          - Resiliência Coragem <br />
        </p>
      ),
      ctaButtonAriaLabel: "Botão para entrar em contato",
      ctaButtonText: "Entre em contato",

      aboutSocial: {
        img: {
          img: aboutSocialImg,
          imgSocial: aboutInstagram,
          alt: `Foto do Instagram do ${infos.name}`,
        },
        miniTag: "REDES SOCIAIS",
        title: "Conecte-se conosco",
        subtitle:
          "Aproveite nossas redes sociais para mantermos contato e ficar por dentro de atualizações importantes no mundo do direito.",
        paragraph: <p></p>,
        labelInstagram: "Siga-me no Instagram",
        labelFacebook: "Siga-me no Facebook",
        labelLinkedin: "Siga-me no LinkedIn",
        labelX: "Siga-me no X",
      },
    },
    cta: {
      backgroundImg: ctaWhatsappImgBg,
      miniTag: "FALE CONOSCO",
      title:
        "LIM Advocacia está sediada em São Paulo com atuação em todos os estados da federação.",
      subtitle:
        "Todavia, a sócia fundadora, associados e correspondentes realizam atendimento presencial e online também em processos com tramitação em outros locais do país.",
      ctaButtonText: "Entre em contato pelo WhatsApp",
    },
    steps: {
      miniTag: "Lílian Oliveira | Sócia Fundadora",
      title: "",
      subtitle: "",
      img: imgSteps,
      alt: "",
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Consulta inicial",
          cardDescription:
            "Realizamos uma reunião para entender seu caso e identificar suas necessidades jurídicas.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Análise detalhada",
          cardDescription:
            "Examinamos todos os aspectos do seu caso, revisando documentos e evidências para obter uma visão completa.",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Elaboração da estratégia",
          cardDescription:
            "Criamos uma estratégia jurídica personalizada para proteger seus interesses de maneira eficaz.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Ação legal",
          cardDescription:
            "Iniciamos e conduzimos as ações judiciais ou o serviço contratado, buscando justiça e soluções personalizadas conforme a necessidade do seu caso.",
        },
      },
    },
    buttonsSection: {
      miniTag: "INDÚSTRIA DAS ARTES",
      title: "LIM Advocacia | Consultoria Jurídica Especializada e Preventiva",
      subtitle: "Atuação Consultiva e Contenciosa",
      labelButton1: (
        <p className="w-full">
          Assessoria Jurídica para <strong>Projetos Culturais</strong> e do
          Audiovisual
        </p>
      ),
      labelButton2: (
        <p>
          Elaboração de contratos, <i>Due Diligence</i> Contratual e{" "}
          <i>Clearance</i>
        </p>
      ),
      labelButton3: "Rede LIM Advocacia | soluções jurídicas para artistas",
      labelButton4:
        "Direitos autorais e conexos, Cultural, da Moda, do Audiovisual e do Entretenimento",
      labelButton5: "Entre em contato",
      labelButton6: "Recursos administrativos e judiciais",
      labelButton7: "Arbitragem",
      labelButton8: "Entre em contato",
      labelButton9: "Direito do Terceiro Setor",
    },
    featuresSectionForm: {
      miniTag: "PLANTÃO 24H",
      title: "",
      subtitle:
        "Precisa de ajuda agora? Nosso plantão 24 horas está disponível para casos urgentes. ",
      imgFeatures: imgFeatures,
      imgDivisor: imgDivisor,
      card1: {
        title: "Formulário de atendimento",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-message-circle-icon lucide-message-circle"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        ),
        buttonLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSdViosvN2fpkEcf07WQeFWGVW8xc_ZYiO6Qd8zNIHMfmNQ1Yw/viewform?usp=sharing&ouid=118181087393543604781",
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Quero solicitar atendimento",
      },
      card2: {
        title: "Mandado de Segurança",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-folder-lock-icon lucide-folder-lock"
          >
            <rect width="8" height="5" x="14" y="17" rx="1" />
            <path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" />
            <path d="M20 17v-2a2 2 0 1 0-4 0v2" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Solicitar análise do caso",
      },
      card3: {
        title: (
          <p>
            <i>Habeas</i> <br /> <i>Corpus</i>
          </p>
        ),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-gavel-icon lucide-gavel"
          >
            <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
            <path d="m16 16 6-6" />
            <path d="m8 8 6-6" />
            <path d="m9 7 8 8" />
            <path d="m21 11-8-8" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Preciso de atendimento urgente",
      },
      card4: {
        title: "Certidões Tributárias",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-scale-icon lucide-scale"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Emissão de CND",
      },
      card5: {
        img: featuresImg4,
        title: "Recursos administrativos e judiciais",
        subtitle: "Consultar recursos administrativos",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 18V6" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Solicitar análise do caso",
      },
      card6: {
        img: featuresImg4,
        title: "Violência doméstica",
        subtitle: "Pedir ajuda agora",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 18V6" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card7: {
        img: featuresImg4,
        title: "Tutela de urgência",
        subtitle: "Solicitar tutela urgente",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
          </div>
        ),
        imgModal: imgFeaturesCardModal4,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-alarm-clock-icon lucide-alarm-clock"
          >
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2 2" />
            <path d="M5 3 2 6" />
            <path d="m22 6-3-3" />
            <path d="M6.38 18.7 4 21" />
            <path d="M17.64 18.67 20 21" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
    },
    blog: {
      miniTag: "BLOG",
      title: "A_Definir",
      subtitle: "",
      img: imgSteps,
      blogApiEndpoint:
        "https://public-api.wordpress.com/rest/v1.1/sites/blogtestepaper.wordpress.com/posts/",
      labelCards: "Ver mais",
      label: "Clique aqui para ver todas as matérias",
      blogLink: "https://blogtestepaper.wordpress.com/",
    },
    faq: {
      miniTag: "TIRE SUAS DÚVIDAS",
      title: "Perguntas Frequentes",
      subtitle: "Confira as perguntas abaixo para esclarecer suas dúvidas. ",
      questions: {
        question1: {
          question: "Como posso contratar seus serviços?",
          answer:
            "Agende sua consulta conosco via WhatsApp e conversaremos sobre suas necessidades e avaliaremos os custos.",
        },
        question2: {
          question: "Qual é o prazo médio para resolução de um caso?",
          answer:
            "O prazo médio varia conforme a complexidade, mas discutiremos uma estimativa durante a consulta inicial.",
        },
        question3: {
          question: "Quais documentos devo levar para a consulta?",
          answer:
            "Traga os documentos relevantes ao seu caso, como contratos, correspondências e registros, além de documentos pessoais e comprovante de residência.",
        },
        question4: {
          question: "Vocês oferecem serviços de consultoria preventiva?",
          answer:
            "Sim, oferecemos consultoria preventiva para evitar problemas futuros e garantir conformidade legal.",
        },
      },
      paragraph: "Clique aqui caso tenha mais dúvidas",
    },
    footer: {
      copyrightLine: ` ${currentYear} - ${infos.name} - Todos os direitos reservados`,
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
      midSectionName: "Bem-vindo!",
      footerText:
        "Agradecemos sua visita! Esperamos que em breve você se torne nosso cliente e desfrute de todos os benefícios que oferecemos.",
      footerSocialText: "Siga a gente nas redes sociais:",
      footerNavegacaoText: "NAVEGAÇÃO",
    },
    testimonials: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: "A_Definir",
      images: {
        img1: {
          img: imgTestimonial1,
          alt: "Imagem de feedback",
        },
        img2: {
          img: imgTestimonial2,
          alt: "Imagem de feedback",
        },
        img3: {
          img: imgTestimonial3,
          alt: "Imagem de feedback",
        },
        img4: {
          img: imgTestimonial4,
          alt: "Imagem de feedback",
        },
      },
    },
    trustedBy: {
      title: "A_Definir",
      subtitle: "A_Definir",
      trustedMore: {
        title: "A_Definir",
        subtitle: "A_Definir",
      },
      images: {
        img1: {
          img: { trustedByImg1 },
          alt: "marca Rennova",
        },
        img2: {
          img: { trustedByImg2 },
          alt: "marca Colgate",
        },
        img3: {
          img: { trustedByImg3 },
          alt: "marca dental Cremer",
        },
      },
    },
    numbers: {
      backgroundImg: numbersImgBg,
      number1: 7,
      number1Description: "A_Definir",
      number2: 500,
      number2Description: "A_Definir",
      number3: 1000,
      number3Description: "A_Definir",
    },
    team: {
      title: "A_Definir",
      subtitle: "A_Definir",
      members: {
        member1: {
          img: {
            img: teamMemberImg1,
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor de Desenvolvimento",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/edison-matoss/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/EdisonMatos",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "https://edisonmatos.github.io/",
          },
        },
        member2: {
          img: {
            img: teamMemberImg2,
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Marketing Outsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/gabriel-adans-2bb029227/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/GabrielAdans",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: "https://www.instagram.com/adansgabriel/",
          },
        },
        member3: {
          img: {
            img: teamMemberImg3,
            alt: "Gabriel Souza",
          },
          name: "Gabriel Souza",
          role: "Desenvolvedor Frontend",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: " https://www.linkedin.com/in/gabriel-souza-b9945929a",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/BiellSouza",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: " https://www.instagram.com/biel.souza.904",
          },
        },
        member4: {
          img: {
            img: teamMemberImg4,
            alt: "Luiz Felipe",
          },
          name: "Luiz Felipe",
          role: "Designer Ourtsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/luiz-felipe-leite-95a246192/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "https://www.instagram.com/luizleitedesigner/",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="black"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link3: "https://wa.me/+556596241854",
          },
        },
      },
    },
    links: {
      instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
      ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
      phoneSecundario: `https://wa.me/+55${infos.phoneSecundario.ddd}${infos.phoneSecundario.firstPart}${infos.phoneSecundario.secondPart}?text=${infos.whatsappDefaultMessage}`,
      phoneTerciario: `https://wa.me/+55${infos.phoneTerciario.ddd}${infos.phoneTerciario.firstPart}${infos.phoneTerciario.secondPart}?text=${infos.whatsappDefaultMessage}`,
      facebook: `https://www.facebook.com/${infos.facebookProfile}`,
      x: `https://x.com/${infos.x}`,
      linkedin: `https://www.linkedin.com/in/${infos.linkeDinProfile}`,
    },
    infos: {
      phone: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
      phoneSecundario: `(${infos.phoneSecundario.ddd}) ${infos.phoneSecundario.firstPart}-${infos.phoneSecundario.secondPart}`,
      phoneTerciario: `(${infos.phoneTerciario.ddd}) ${infos.phoneTerciario.firstPart}-${infos.phoneTerciario.secondPart}`,
      email: `${infos.email}@${infos.domain}`,
      emailSecundario: `${infos.emailSecundario}`,
      emailTerciario: `${infos.emailTerciario}`,
      emailQuatro: `${infos.emailQuatro}`,
      adress: infos.endereco,
      adressSecundario: infos.enderecoSecundario,
      officeHours: infos.expediente,
      year: currentYear,
      footerexpediente: infos.expediente,
      obsFooter: infos.obs,
      footerNavegacaoText: "NAVEGAÇÃO",
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
    },
  },
};

export const abstractions = {
  titleModal: <strong>{content.texts.about.title}</strong>,
  subtitleModal: <strong>{content.texts.about.subtitle}</strong>,
};

export default content;
