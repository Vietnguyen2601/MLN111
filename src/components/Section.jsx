import { useEffect, useMemo, useRef, useState } from "react";

export default function Section({
  title,
  eyebrow,
  summary,
  children,
  media,
  mediaHint = false,
  theme = "ember",
  mediaPosition = "right",
  backgroundImage,
  backgroundOverlay = true,
  className = "",
  style,
  showHeading = true,
  sectionId,
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const sectionClassName = useMemo(() => {
    const mediaClass = mediaPosition === "left" ? "section--media-left" : "";
    const bgClass = backgroundImage ? "section--with-background" : "";
    const themeClassName = theme ? `section--${theme}` : "";
    return ["section", mediaClass, bgClass, themeClassName, className]
      .filter(Boolean)
      .join(" ");
  }, [mediaPosition, backgroundImage, theme, className]);

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: backgroundOverlay
          ? `linear-gradient(120deg, rgba(7, 3, 2, 0.88), rgba(7, 3, 2, 0.65)), url(${backgroundImage})`
          : `url(${backgroundImage})`,
      }
    : undefined;

  const combinedStyle = {
    ...(backgroundStyle ?? {}),
    ...(style ?? {}),
  };
  const styleProp = Object.keys(combinedStyle).length
    ? combinedStyle
    : undefined;

  return (
    <section
      id={sectionId}
      ref={sectionRef}
      className={sectionClassName}
      data-visible={isVisible}
      style={styleProp}
    >
      {showHeading && (
        <div
          className="section__heading"
          data-heading-position={mediaPosition === "left" ? "left" : "right"}
        >
          <h2 className="section__title">{title}</h2>
          {summary && <p className="section__summary">{summary}</p>}
        </div>
      )}
      <div className="section__grid">
        <div className="section__content">
          {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
          {children}
        </div>
        {(media || mediaHint) && (
          <aside className="section__media" aria-label="Không gian hình ảnh">
            {media || (
              <div className="media-card">
                <p className="media-card__label">Không gian hình ảnh</p>
                <p className="media-card__hint">
                  Bổ sung ảnh tư liệu, trích dẫn hoặc sơ đồ minh họa tại đây khi
                  bạn sẵn sàng.
                </p>
              </div>
            )}
          </aside>
        )}
      </div>
    </section>
  );
}
