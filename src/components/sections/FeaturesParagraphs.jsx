import "primeicons/primeicons.css";
import content from "../../content/content";
import Button from "../interactives/Button";
import "primereact/resources/primereact.min.css";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import IconButtonFeatureCard from "../cards/IconButtonFeatureCard";

export default function FeaturesParagraphs({ modal, colorMode }) {
  // Classes de tema
  const bgClasses = {
    dark: "bg-darker",
    light: "bg-lighter",
    default: "bg-transparent",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-lighter",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;
  return (
    <>
      <SectionArea id="service" className={`${bgClass} `}>
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.featuresSectionForm.miniTag}
          sectionHeaderTitle={content.texts.featuresSectionForm.title}
          sectionHeaderSubtitle={content.texts.featuresSectionForm.subtitle}
          titleColorSet={textClass}
          subtitleColorSet={textClass}
        />

        <SectionWrapper>
          <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
            <div className="flex flex-wrap items-start justify-center w-full gap-[40px]">
              <MotionDivDownToUp className="flex flex-col items-center justify-around border-[2px] border-solid px-[10px] py-[20px] rounded-md bg-bgSectionLight tablet1:w-[46.5%] tablet1:h-[285px] desktop1:w-[40%] desktop1:h-[270px]">
                <IconButtonFeatureCard
                  icon={content.texts.featuresSectionForm.card1.icon}
                  title={content.texts.featuresSectionForm.card1.title}
                  paragraph={
                    content.texts.featuresSectionForm.card1.description
                  }
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                  colorMode={colorMode}
                />
                <Button
                  size="small"
                  label={content.texts.featuresSectionForm.card1.buttonLabel}
                  buttonLink={
                    content.texts.featuresSectionForm.card1.buttonLink
                  }
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-corner-down-right"
                    >
                      <polyline points="15 10 20 15 15 20" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                  }
                />
              </MotionDivDownToUp>
              <MotionDivDownToUp className="flex flex-col items-center justify-between border-[2px] border-solid px-[10px] py-[20px] rounded-md bg-bgSectionLight tablet1:w-[46.5%] tablet1:h-[285px] desktop1:w-[40%]  desktop1:h-[270px]">
                <IconButtonFeatureCard
                  icon={content.texts.featuresSectionForm.card2.icon}
                  title={content.texts.featuresSectionForm.card2.title}
                  paragraph={content.texts.featuresSectionForm.card2.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                  colorMode={colorMode}
                />
                <Button
                  size="small"
                  label={content.texts.featuresSectionForm.card2.buttonLabel}
                  buttonLink={content.texts.links.ctaWhatsapp}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-corner-down-right"
                    >
                      <polyline points="15 10 20 15 15 20" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                  }
                />
              </MotionDivDownToUp>{" "}
              <MotionDivDownToUp className="flex flex-col items-center justify-between border-[2px] border-solid px-[10px] py-[20px] rounded-md bg-bgSectionLight tablet1:w-[46.5%] tablet1:h-[285px] desktop1:w-[40%]  desktop1:h-[270px]">
                <IconButtonFeatureCard
                  icon={content.texts.featuresSectionForm.card3.icon}
                  title={content.texts.featuresSectionForm.card3.title}
                  paragraph={content.texts.featuresSectionForm.card3.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                  colorMode={colorMode}
                />
                <Button
                  size="small"
                  label={content.texts.featuresSectionForm.card3.buttonLabel}
                  buttonLink={content.texts.links.ctaWhatsapp}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-corner-down-right"
                    >
                      <polyline points="15 10 20 15 15 20" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                  }
                />
              </MotionDivDownToUp>{" "}
              <MotionDivDownToUp className="flex flex-col items-center justify-between border-[2px] border-solid px-[10px] py-[20px] rounded-md bg-bgSectionLight tablet1:w-[46.5%] tablet1:h-[285px] desktop1:w-[40%]  desktop1:h-[270px]">
                <IconButtonFeatureCard
                  icon={content.texts.featuresSectionForm.card4.icon}
                  title={content.texts.featuresSectionForm.card4.title}
                  paragraph={content.texts.featuresSectionForm.card4.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                  colorMode={colorMode}
                />
                <Button
                  size="small"
                  label={content.texts.featuresSectionForm.card4.buttonLabel}
                  buttonLink={content.texts.links.ctaWhatsapp}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-corner-down-right"
                    >
                      <polyline points="15 10 20 15 15 20" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                  }
                />
              </MotionDivDownToUp>{" "}
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] rounded-md bg-bgSectionLight tablet1:w-[46.5%] desktop1:w-[40%]">
                <IconButtonFeatureCard
                  icon={content.texts.features.card5.icon}
                  title={content.texts.features.card5.title}
                  paragraph={content.texts.features.card5.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
                <Button
                  size="small"
                  label={content.texts.featuresSectionForm.card5.buttonLabel}
                  buttonLink={content.texts.links.ctaWhatsapp}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-corner-down-right"
                    >
                      <polyline points="15 10 20 15 15 20" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                  }
                />
              </MotionDivDownToUp>{" "}
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] rounded-md bg-bgSectionLight tablet1:w-[46.5%] desktop1:w-[40%]">
                <IconButtonFeatureCard
                  icon={content.texts.features.card6.icon}
                  title={content.texts.features.card6.title}
                  paragraph={content.texts.features.card6.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
                <Button
                  size="small"
                  label={content.texts.featuresSectionForm.card6.subtitle}
                  buttonLink={content.texts.links.ctaWhatsapp}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-corner-down-right"
                    >
                      <polyline points="15 10 20 15 15 20" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                  }
                />
              </MotionDivDownToUp>{" "}
              <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] rounded-md bg-bgSectionLight tablet1:w-[46.5%] desktop1:w-[40%]">
                <IconButtonFeatureCard
                  icon={content.texts.featuresSectionForm.card7.icon}
                  title={content.texts.featuresSectionForm.card7.title}
                  paragraph={content.texts.featuresSectionForm.card7.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
                <Button
                  size="small"
                  label={content.texts.featuresSectionForm.card7.subtitle}
                  buttonLink={content.texts.links.ctaWhatsapp}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-corner-down-right"
                    >
                      <polyline points="15 10 20 15 15 20" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                  }
                />
              </MotionDivDownToUp>{" "}
              {/* <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] rounded-md bg-bgSectionLight tablet1:w-[46.5%] desktop1:w-[40%]">
                <IconButtonFeatureCard
                  icon={content.texts.featuresSectionForm.card8.icon}
                  title={content.texts.featuresSectionForm.card8.title}
                  paragraph={content.texts.featuresSectionForm.card8.subtitle}
                  className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                />
                <Button
                  size="small"
                  label="Saber Mais"
                  buttonLink={content.texts.links.ctaWhatsapp}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-corner-down-right"
                    >
                      <polyline points="15 10 20 15 15 20" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                  }
                />
              </MotionDivDownToUp> */}
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
