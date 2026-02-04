import Section from "./Section";

const tocItems = [
  {
    number: "00",
    id: "section-timeline",
    label: "Timeline · Mốc lịch sử tương tác",
    summary:
      "6 giai đoạn tiêu biểu kèm UI tương tác để bạn kể lại lịch sử triết học Mác – Lênin.",
  },
  {
    number: "01",
    id: "section-worldview",
    label: "Phần 1 · Thế giới quan & phương pháp luận",
    summary: "Khung tư duy duy vật và phép biện chứng để nhìn nhận hiện thực.",
  },
  {
    number: "02",
    id: "section-methodology",
    label: "Phần 2 · Trụ cột chính trị – hệ tư tưởng",
    summary:
      "Giữ vững quyền lực nhân dân và bản sắc lý luận trong kỷ nguyên số.",
  },
  {
    number: "03",
    id: "section-political-economy",
    label: "Phần 3 · Động lực kinh tế",
    summary:
      "Kết hợp cơ chế thị trường với định hướng xã hội chủ nghĩa để phát triển bền vững.",
  },
  {
    number: "04",
    id: "section-modern-era",
    label: "Phần 4 · Văn hóa & con người",
    summary:
      "Giải phóng con người toàn diện và tái định hình hệ giá trị trong hội nhập.",
  },
  {
    number: "05",
    id: "section-long-term",
    label: "Phần 5 · Tầm nhìn thời đại 4.0",
    summary:
      "Làm chủ công nghệ, phát triển xanh và hội nhập vì lợi ích dân tộc.",
  },
  {
    number: "06",
    id: "section-conclusion",
    label: "Kết luận",
    summary:
      "Triết học Mác – Lênin như la bàn tư duy cho mọi cấp độ phát triển.",
  },
];

export default function IntroSection() {
  return (
    <Section
      eyebrow="Lời mở đầu"
      title="Triết học Mác – Lênin: La bàn phát triển"
      summary="Bố cục mới gói gọn 5 trụ cột: thế giới quan – phương pháp luận, trụ cột chính trị – hệ tư tưởng, động lực kinh tế, văn hóa & con người và tầm nhìn 4.0."
      theme="aurum"
      sectionId="section-intro"
    >
      <p>
        Triết học không nằm yên trên giá sách mà thấm vào tư duy chiến lược của
        xã hội Việt Nam. Bộ nội dung này được tạo mới dựa trên các mảng kiến
        thức bạn cung cấp, giúp việc phát triển tư liệu, hình ảnh và trải nghiệm
        số trở nên liền mạch.
      </p>
      <p>
        Mỗi phần hé mở một lát cắt: từ thế giới quan duy vật, trụ cột chính trị,
        động lực kinh tế đến văn hóa, con người và viễn cảnh công nghệ 4.0. Khi
        kết nối chúng lại, chúng ta có một la bàn tư duy nhất quán cho nhận thức
        và hành động xã hội.
      </p>
      <nav className="intro-toc" aria-label="Mục lục nội dung">
        <p className="intro-toc__label">Mục lục cho toàn bộ nội dung</p>
        <ol className="intro-toc__list">
          {tocItems.map((item) => (
            <li key={item.id}>
              <a className="intro-toc__link" href={`#${item.id}`}>
                <span className="intro-toc__index">{item.number}</span>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.summary}</p>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </Section>
  );
}
