import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ values, openModal }) {
  return (
    <ul className={css.listImage}>
      {values.map((item) => (
        <li className={css.listItem} key={item.id}>
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
