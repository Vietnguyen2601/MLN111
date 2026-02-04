export default function InsightCard({ insight }) {
  if (!insight) return null;

  const { rule, tags, lesson } = insight;

  return (
    <div className="insight-card">
      <div className="insight-card__header">
        <span className="insight-card__icon">💡</span>
        <span className="insight-card__title">BÀI HỌC BIỆN CHỨNG</span>
      </div>
      
      <div className="insight-card__rule">
        <span className="insight-card__rule-label">Quy luật:</span>
        <span className="insight-card__rule-value">{rule}</span>
      </div>

      <p className="insight-card__lesson">{lesson}</p>

      {tags && tags.length > 0 && (
        <div className="insight-card__tags">
          {tags.map((tag, index) => (
            <span key={index} className="insight-card__tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
