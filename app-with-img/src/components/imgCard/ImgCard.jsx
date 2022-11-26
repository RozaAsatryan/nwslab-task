import "./ImgCard.css";

const ImgCard = ({ src, alt }) => {
  return <img className="imgCard" src={src} alt={alt} />;
};

export default ImgCard;
