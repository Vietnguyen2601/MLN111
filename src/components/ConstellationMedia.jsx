export default function ConstellationMedia({ imageSrc, caption }) {
  return (
    <figure className="constellation-frame">
      <div className="constellation-frame__halo" aria-hidden="true" />
      <img src={imageSrc} alt={caption} loading="lazy" />
      <figcaption>{caption}</figcaption>
      <div className="constellation-frame__stars" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </figure>
  );
}
