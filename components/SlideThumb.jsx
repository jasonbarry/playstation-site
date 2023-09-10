import Image from "next/image";

export default function SlideThumb({ thumb, selected, onClick }) {
  return (
    <div
      role="button"
      tabIndex="0"
      class={`slider__control carousel-cell ${selected ? "is-selected" : ""}`}
      href="javascript:void(0)"
      data-control-id="1"
      onClick={onClick}
    >
      <div
        class="media-block media-block--image"
        data-component="image-block"
        data-age-gated="false"
        data-lightbox-theme="light"
      >
        <div class="media-block__inner">
          <figure
            itemscope=""
            itemtype="http://schema.org/ImageObject"
            class="media-block__figure"
          >
            <picture
              class="media-block__img lozad lazy-loaded"
              data-loaded="true"
            >
              <Image alt="thumbnail" src={thumb} width={138} height={78} />
            </picture>
          </figure>
        </div>
      </div>
    </div>
  );
}
