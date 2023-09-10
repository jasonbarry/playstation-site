const breakpoints = {
  background: [
    [4000, 3000],
    [3200, 1920],
    [2400, 1367],
    [1600, 1024],
    [1200, 768],
    [800, 320],
  ],
  logo: [
    [1200, 768],
    [800, 320],
  ],
};

export default function Slide(props) {
  const { bannerHeight, href, background, logo, title, description, ctas } =
    props;
  return (
    <div
      data-component="page-banner"
      data-bg-animation="+bg--fade"
      data-content-animation="+content--fadeInUp"
      className="hp-hero__banner page-banner theme--dark +logo-size@mobile--2 +logo-size@desktop--2 +logo-position@mobile--bc +content-position@desktop--cl +content-blend@mobile +content-gradient@desktop--50 +content-align@mobile--center +content-align@desktop--left +bg--fade +content--fadeInUp"
      style={{ "--banner-content-calc-height": bannerHeight }}
    >
      <div className="page-banner__keyart">
        <a
          href={href}
          className="page-banner__keyart-anchor"
          aria-label="PAGE_BANNER_ARIA_LABEL"
        >
          <div>
            <div
              className="media-block media-block--bg gradient--none@tablet object-position@mobile--tc +t-b object-position@tablet--tl object-position@desktop--tl +t-b@tablet +blur-bg--none@tablet +halftone--none@tablet none"
              data-component="bg-image"
              data-auto-pause-play="true"
              data-gradient-theme="#1F1F1F"
              data-gradient-theme-tablet="#1F1F1F"
              data-scroll-effect="none"
              style={{
                "--gradient-start-color": "#1f1f1f",
                "--gradient-end-color": "#1f1f1f00",
                "--gradient-start-color-tablet": "#1f1f1f",
                "--gradient-end-color-tablet": "#1f1f1f00",
                "--gradient-start-color-desktop": "#1f1f1f",
                "--gradient-end-color-desktop": "#1f1f1f00",
              }}
            >
              <div className="media-block__inner">
                <figure
                  itemScope=""
                  itemType="http://schema.org/ImageObject"
                  className="media-block__figure opacity@mobile--100 opacity@tablet--100 opacity@desktop--100"
                >
                  <picture
                    className="media-block__img lozad lazy-loaded"
                    data-loaded="true"
                  >
                    {breakpoints.background.map((breakpoint, i) => (
                      <source
                        key={`background-breakpoint-${i}`}
                        srcSet={`${background}?$${breakpoint[0]}px$`}
                        media={`(min-width: ${breakpoint[1]}px)`}
                      />
                    ))}
                    <img
                      itemProp="contentUrl"
                      src={`${background}?$100px$`}
                      alt={title}
                      style={{ opacity: 1 }}
                    />
                  </picture>
                </figure>
              </div>
              <div className="media-block__overlay"></div>
            </div>
          </div>
        </a>
        {logo && (
          <div className="page-banner__content-wrapper@mobile">
            <div className="page-banner__content">
              <div
                className="media-block media-block--image page-banner__logo"
                data-component="image-block"
                data-age-gated="false"
                data-lightbox-theme="light"
                tabIndex="-1"
              >
                <div className="media-block__inner">
                  <figure
                    itemScope=""
                    itemType="http://schema.org/ImageObject"
                    className="media-block__figure"
                  >
                    <picture className="media-block__img">
                      {breakpoints.logo.map((breakpoint, i) => (
                        <source
                          key={`logo-breakpoint-${i}`}
                          srcSet={`${logo}?$${breakpoint[0]}px--t$`}
                          media={`(min-width: ${breakpoint[1]}px)`}
                        />
                      ))}
                      <img
                        alt=""
                        itemProp="contentUrl"
                        src={`${logo}?$100px--t$`}
                      />
                    </picture>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="page-banner__content-wrapper">
        <div className="page-banner__content">
          {logo && (
            <div
              className="media-block media-block--image page-banner__logo"
              data-component="image-block"
              data-age-gated="false"
              data-lightbox-theme="light"
              tabIndex="-1"
              style={{ opacity: 1 }}
            >
              <div className="media-block__inner">
                <figure
                  itemScope=""
                  itemType="http://schema.org/ImageObject"
                  className="media-block__figure"
                >
                  <picture className="media-block__img">
                    {breakpoints.logo.map((breakpoint, i) => (
                      <source
                        key={`logo-breakpoint-${i}`}
                        srcSet={`${logo}?$${breakpoint[0]}px--t$`}
                        media={`(min-width: ${breakpoint[1]}px)`}
                      />
                    ))}
                    <img
                      alt=""
                      itemProp="contentUrl"
                      src={`${logo}?$100px--t$`}
                    />
                  </picture>
                </figure>
              </div>
            </div>
          )}
          <div className="box page-banner__logo-content" style={{ opacity: 1 }}>
            <div className="title-block">
              <div className="accent"></div>
              <h2>{title}</h2>
              <p style={{ maxWidth: 420 }}>{description}</p>
            </div>
            <div
              className="btn-block"
              data-custom-mobile-width="false"
              data-custom-tablet-width="false"
              data-custom-desktop-width="false"
            >
              <div>
                {ctas.includes("pre-order-now") && (
                  <div class="button">
                    <a
                      data-uuid="3105184c-4cc8-3daf-a355-8c92fc205e44"
                      href={href}
                      class="cta__purchase"
                      role="button"
                      target="_self"
                      data-age-gated="false"
                      data-force-age-gate="false"
                      target-tag="NONE|"
                      data-dtm-label="Pre-order now"
                      data-dtm-label-override="Pre-order now"
                    >
                      <div class="cta__inner">
                        <span>Pre-order now</span>
                      </div>
                    </a>
                  </div>
                )}
                {ctas.includes("buy-now") && (
                  <div class="button">
                    <a
                      data-uuid="14ac9f13-56a5-3361-ab9c-cc7d9e587990"
                      href={href}
                      class="cta__purchase"
                      role="button"
                      target="_self"
                      data-age-gated="false"
                      data-force-age-gate="false"
                      target-tag="NONE|"
                      data-dtm-label="Buy now"
                      data-dtm-label-override="Buy now"
                    >
                      <div class="cta__inner">
                        <span>Buy now</span>
                      </div>
                    </a>
                  </div>
                )}
                {ctas.includes("find-out-more") && (
                  <div className="button">
                    <a
                      data-uuid="9bbaf564-9ca3-3f39-b350-9232667f237e"
                      href={href}
                      className="cta__primary"
                      role="button"
                      target="_self"
                      data-age-gated="false"
                      data-force-age-gate="false"
                      target-tag="NONE|"
                      data-dtm-label="Find out more"
                      data-dtm-label-override="Find out more"
                    >
                      <div className="cta__inner">
                        <span>Find out more </span>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
