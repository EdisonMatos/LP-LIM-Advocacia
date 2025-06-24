import PropTypes from "prop-types";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";

export default function FeaturesModalCards(props) {
  const {
    bgImg,
    title,
    description,
    buttonLabel,
    buttonLink,
    onClick,
    buttonColor,
    bgPosition,
  } = props;

  FeaturesModalCards.propTypes = {
    bgImg: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonColor: PropTypes.any,
    onClick: PropTypes.func,
    bgPosition: PropTypes.any,
  };

  return (
    <MotionDivDownToUp className="flex flex-wrap justify-between w-full max-w-[430px] gap-[36px] tablet1:gap-[24px] tablet1:w-[47%] desktop1:w-[325px]">
      <div
        className={`${bgPosition} w-full h-[300px] rounded-2xl flex flex-col justify-end bg-bottom bg-no-repeat bg-cover`}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex items-end w-full h-full bg-colorBlack bg-opacity-10 rounded-2xl">
          <MotionDivDownToUp className="w-full h-auto bg-bgSectionLight rounded-2xl p-[20px] mx-[10px] mb-[10px] flex flex-col">
            <h1 className="font-mainFont font-medium text-[18px] desktop1:text-paragraph5 desktop2:text-[20px] mb-[10px]">
              {title}
            </h1>
            {/* <p className="font-secondFont text-paragraph3 desktop1:text-paragraph4 text-quaternary mb-[28px]">
              {description}
            </p> */}
            <div>
              <Button
                removeAnchor={true}
                label={buttonLabel}
                buttonLink={buttonLink}
                color={buttonColor}
                className=""
                size="small"
                onClick={onClick}
                icon={<FaWhatsapp size={20} />}
              />
            </div>
          </MotionDivDownToUp>
        </div>
      </div>
    </MotionDivDownToUp>
  );
}
