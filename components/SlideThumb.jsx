import Image from "next/image";

export default function SlideThumb({ thumb, selected, onClick }) {
  return (
    <div
      role="button"
      tabIndex="0"
      className={`slider__control carousel-cell ${
        selected ? "is-selected" : ""
      }`}
      data-control-id="1"
      onClick={onClick}
    >
      <div
        className="media-block media-block--image"
        data-component="image-block"
        data-age-gated="false"
        data-lightbox-theme="light"
      >
        <div className="media-block__inner">
          <figure
            itemScope=""
            itemType="http://schema.org/ImageObject"
            className="media-block__figure"
          >
            <picture
              className="media-block__img lozad lazy-loaded"
              data-loaded="true"
            >
              <Image alt="thumbnail" src={thumb} width={250} height={141} />
            </picture>
          </figure>
        </div>
      </div>
    </div>
  );
}
