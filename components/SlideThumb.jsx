const breakpoints = {
  thumb: [
    [1200, 768],
    [800, 320],
  ],
};

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
              data-alt="FC24 keyart"
              data-loaded="true"
            >
              {breakpoints.thumb.map((breakpoint, i) => (
                <source
                  key={`thumb-thumb-breakpoint-${i}`}
                  srcSet={`${thumb}?$${breakpoint[0]}px--t$`}
                  media={`(min-width: ${breakpoint[1]}px)`}
                />
              ))}
              <img alt="FC24 keyart" />
            </picture>
          </figure>
        </div>
      </div>
    </div>
  );
}
