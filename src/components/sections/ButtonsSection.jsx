import Button from "../interactives/Button";
import content from "../../content/content";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";

export default function ButtonsSection({ colorMode = "default" }) {
  const navigate = useNavigate();

  // Definir classes de tema
  const bgClasses = {
    dark: "bg-darker",
    light: "bg-lighter",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <>
      <SectionArea className={`${bgClass}`} id="industry" paddingtop={false}>
        <SectionWrapper>
          <SectionHeader
            className={`text-center ${textClass}`}
            miniTitle={content.texts.buttonsSection.miniTag}
            sectionHeaderTitle={content.texts.buttonsSection.title}
            sectionHeaderSubtitle={content.texts.buttonsSection.subtitle}
            titleColorSet={textClass}
            subtitleColorSet={textClass}
          />
          <div className="w-full px-4 py-6">
            <div className="grid grid-cols-1 tablet1:grid-cols-2 desktop1:grid-cols-3 gap-4 justify-items-center">
              <Button
                aria-label={content.texts.buttonsSection.labelButton1}
                label={content.texts.buttonsSection.labelButton1}
                animation
                icon={<FaWhatsapp size={24} />}
                className={`min-w-[250px] max-w-[350px] h-40 flex flex-col items-center justify-center text-center`}
              />
              <Button
                aria-label={content.texts.buttonsSection.labelButton2}
                label={content.texts.buttonsSection.labelButton2}
                animation
                icon={<FaWhatsapp size={24} />}
                className={`min-w-[250px] max-w-[350px] h-40 flex flex-col items-center justify-center text-center`}
              />
              <div className="flex flex-col gap-2">
                <Button
                  aria-label={content.texts.buttonsSection.labelButton3}
                  label={content.texts.buttonsSection.labelButton3}
                  animation
                  icon={<FaWhatsapp size={24} />}
                  className={`min-w-[250px] max-w-[350px] h-40 flex flex-col items-center justify-center text-center`}
                  subtext="Seja membro da nossa REDE aqui"
                  buttonLink="https://chat.whatsapp.com/EQPRZ10i51O3gLHCNBLpZ9"
                />
              </div>
              <Button
                aria-label={content.texts.buttonsSection.labelButton4}
                label={content.texts.buttonsSection.labelButton4}
                animation
                icon={<FaWhatsapp size={24} />}
                className={`min-w-[250px] max-w-[350px] h-40 flex flex-col items-center justify-center text-center`}
              />
              <Button
                aria-label={content.texts.buttonsSection.labelButton5}
                label={content.texts.buttonsSection.labelButton5}
                animation
                icon={<FaWhatsapp size={24} />}
                className={`min-w-[250px] max-w-[350px] h-40 flex flex-col items-center justify-center text-center`}
              />
              <Button
                aria-label={content.texts.buttonsSection.labelButton6}
                label={content.texts.buttonsSection.labelButton6}
                animation
                icon={<FaWhatsapp size={24} />}
                className={`min-w-[250px] max-w-[350px] h-40 flex flex-col items-center justify-center text-center`}
              />
              <Button
                aria-label={content.texts.buttonsSection.labelButton7}
                label={content.texts.buttonsSection.labelButton7}
                animation
                icon={<FaWhatsapp size={24} />}
                className={`min-w-[250px] max-w-[350px] h-40 flex flex-col items-center justify-center text-center`}
              />
              <Button
                aria-label={content.texts.buttonsSection.labelButton8}
                label={content.texts.buttonsSection.labelButton8}
                animation
                icon={<FaWhatsapp size={24} />}
                className={`min-w-[250px] max-w-[350px] h-40 flex flex-col items-center justify-center text-center`}
              />
              <Button
                aria-label={content.texts.buttonsSection.labelButton9}
                label={content.texts.buttonsSection.labelButton9}
                animation
                icon={<FaWhatsapp size={24} />}
                className={`min-w-[250px] max-w-[350px] h-40 flex flex-col items-center justify-center text-center`}
              />
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
