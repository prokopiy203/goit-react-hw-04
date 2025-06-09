import css from "./ImageCard.module.css";

function ImageCard({ openModal, item: { urls, alt_description } }) {
  return (
    <div>
      <img
        className={css.imageStyle}
        src={urls.small}
        alt={alt_description}
        width="300"
        height="200"
        onClick={() => openModal({ src: urls.regular, alt: alt_description })}
      />
    </div>
  );
}

export default ImageCard;
