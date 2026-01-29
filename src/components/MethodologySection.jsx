import Section from "./Section";
import imageFour from "../pic/hình4.jpg";

const quickHighlights = [
  {
    label: "Nền tảng",
    value: "Mác – Lênin",
    detail: "Định hình chuẩn mực quyền lực nhân dân",
  },
  {
    label: "Phương pháp",
    value: "Biện chứng số",
    detail: "Lọc ồn thông tin, giữ trục giá trị trung tâm",
  },
  {
    label: "Ứng dụng",
    value: "Bản sắc Việt",
    detail: "Gắn triết học với thực tiễn đổi mới",
  },
];

const pillars = [
  {
    id: "2.1",
    title: "Quyền lực thuộc về nhân dân",
    summary:
      "Thiết kế thể chế phải soi vào lợi ích của đa số lao động và bảo đảm tiếng nói phản biện được lắng nghe.",
    bullets: [
      "Giám sát xã hội chủ động, đa tầng",
      "Chính sách đặt con người làm trung tâm",
      "Tư duy giai cấp đi cùng nhân văn và công bằng",
    ],
  },
  {
    id: "2.2",
    title: "Công cụ phê phán trong kỷ nguyên số",
    summary:
      "Năng lực phân tích luận điệu sai lệch phải dựa trên tư duy biện chứng, dữ liệu và đạo đức nghề truyền thông.",
    bullets: ["Đối chiếu nguồn và bối cảnh", "Giải cấu trúc mâu thuẫn lợi ích"],
    extras: ["Đối chiếu nguồn", "Phân tích mâu thuẫn", "Giữ nền tảng tư tưởng"],
    accent: true,
  },
  {
    id: "2.3",
    title: "Vận dụng sáng tạo bản địa",
    summary:
      "Triết học Mác – Lênin kết hợp tư tưởng Hồ Chí Minh giúp chính sách vừa hiện đại vừa gần gũi đời sống.",
    bullets: [
      "Liên tục cập nhật thực tiễn phát triển",
      "Tăng cường đối thoại với thế hệ trẻ",
    ],
  },
];

export default function MethodologySection() {
  return (
    <Section
      eyebrow="Phần 2"
      title="Trụ cột chính trị – hệ tư tưởng"
      summary="Nền tảng tư tưởng Mác – Lênin bảo đảm quyền lực thuộc về nhân dân, giữ vững ổn định trên không gian truyền thông số và được vận dụng sáng tạo với bản sắc Việt Nam."
      theme="dusk"
      className="section--immersive section--methodology"
      backgroundImage={imageFour}
      backgroundOverlay={true}
    >
      <div className="methodology-intro">
        <p>
          Tư tưởng lý luận không chỉ là khẩu hiệu mà là khung hành động giúp
          nhận diện nhu cầu xã hội, bóc tách thông tin sai lệch và chuyển hóa
          thành chính sách đậm đặc bản sắc Việt.
        </p>
        <div className="methodology-highlights">
          {quickHighlights.map((item) => (
            <article className="methodology-highlights__item" key={item.label}>
              <small>{item.label}</small>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="methodology-grid">
        {pillars.map((pillar) => (
          <article
            key={pillar.id}
            className={`methodology-card ${pillar.accent ? "methodology-card--accent" : ""}`.trim()}
          >
            <header>
              <span>{pillar.id}</span>
              <h3>{pillar.title}</h3>
            </header>
            <p>{pillar.summary}</p>
            {pillar.bullets && (
              <ul>
                {pillar.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {pillar.extras && (
              <div className="methodology-pillars">
                {pillar.extras.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
