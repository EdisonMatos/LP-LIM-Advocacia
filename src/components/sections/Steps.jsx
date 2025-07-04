import React from "react";
import content from "../../content/content";
import HowItWorksCard from "../cards/HowItWorksCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Paragraphs from "../sectionElements/Paragraphs";

export default function Steps({ colorMode }) {
  // Classes de tema
  const bgClasses = {
    dark: "bg-black",
    light: "bg-white",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;
  return (
    <SectionArea className={`${bgClass}`} paddingtop={true}>
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl shadow-custom-opacity shadow-black/30">
          <img
            src={content.texts.steps.img}
            alt={content.texts.steps.img}
            className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl"
          />
        </MotionDivDownToUp>
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="hidden text-center desktop1:flex"
            miniTitle={content.texts.steps.miniTag}
            sectionHeaderTitle={content.texts.steps.title}
            sectionHeaderSubtitle={content.texts.steps.subtitle}
            type="article"
            titleColorSet={titleColor}
          />
          <SectionHeader
            className="text-center desktop1:hidden"
            miniTitle={content.texts.steps.miniTag}
            sectionHeaderTitle={content.texts.steps.title}
            sectionHeaderSubtitle={content.texts.steps.subtitle}
            color={colorMode ? "light" : ""}
            type={colorMode ? "" : "article"}
            colorMode={colorMode}
          />

          <div className="flex flex-wrap w-full justify-between gap-[32px] mt-[28px] text-white desktop1:mt-0">
            <Paragraphs>
              <p>
                Lílian Oliveira é Advogada-Parecerista do Ministério da Cultura
                desde 2014, iniciou sua atuação na FUNARTE e atualmente atua no
                IBRAM, IPHAN e FBN na análise de projetos de alta complexidade.
              </p>
              <br />
              <p>
                De 2010 a 2018 foi membro-consultora da Comissão de Defesa dos
                Direitos das Pessoas com Deficiência da OAB/MG, na qual teve a
                honra de participar da criação dessa Comissão e coordenar os
                trabalhos para a criação do projeto de lei que regulamenta e
                autoriza o uso medicinal da <i>canabis</i> para o tratamento das
                pessoas com deficiência com epilepsia e paralisia cerebral.
              </p>
              <br />
              <p>
                Advogada Bacharela pela Escola Superior de Direito Dom Hélder
                Câmara, especialista em Planejamento Tributário: Incentivos
                fiscais e Holding pela FGV SP; especialista em Direito Penal
                Econômico - sua primeira atuação como criminalista foi marcada
                pela conquista da Absolvição Sumária de sua cliente em um caso
                sensível e complexo no qual os direitos de uma menor e de uma
                advogada estavam em jogo. É, também, especialista em Direito do
                Entretenimento, Cultural, Direitos Autorais e Propriedade
                Intelectual com atuação há mais de 30 anos na área.
              </p>
              <br />
              <p>
                Trabalhou no Tribunal de Justiça do Estado de Minas Gerais na
                Câmara Civil e Criminal e na Procuradoria da Fazenda Nacional
                com execuções fiscais e prescrição intercorrente de tributos
                federais.
              </p>
              <br />
              <p>
                Atuou como Colunista e Cartunista do blog Núcleo Saravá Cultural
                no qual contribuiu na luta contra o fascismo, no ano de 2022, em
                sua coluna sobre arte-estética-direito e democracia.
              </p>
              <br />
              <p>
                Autora de diversos artigos sobre arte, sistema jurídico e
                democracia.
              </p>
              <br />
              <p>
                Em 2005, fundou a Diálogo - gestão cultural e Responsabilidade
                Socio Ambiental na qual atua, até o presente momento, como
                gestora responsável pela co-realização de projetos de grande
                relevância para as artes e para cultura do país como: Bienal de
                Arte Digital e Festival de Arte Digital, Instituto Pedro
                Moraleida Bernardes, cantora e compositora Julia Mestre, Editora
                e Produtora Audiovisual Comunicação de Fato, FLIARCOS, Coleção
                “Caminhando pela História”, Festival de Cutas Flávio Migliaccio,
                dentre tantos outros de igual relevância.
              </p>
              <br />
              <p>
                <br />
                <br />
                Estudante.
              </p>
            </Paragraphs>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
