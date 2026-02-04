import { useMemo, useState } from "react";
import Section from "./Section";

const timelineStages = [
  {
    years: "1920–1945",
    title: "Giai đoạn 1 · Tiếp nhận & khai mở tư tưởng",
    summary:
      "Triết học Mác – Lênin soi đường giải phóng dân tộc và xác định con đường độc lập gắn với chủ nghĩa xã hội.",
    detail:
      "Triết học Mác – Lênin được tiếp nhận như công cụ giải phóng dân tộc, giúp nhận diện bản chất áp bức của thực dân, khẳng định vai trò lịch sử của nhân dân lao động và định hình mục tiêu độc lập gắn với chủ nghĩa xã hội.",
    bullets: [
      "Khẳng định độc lập dân tộc phải gắn với chủ nghĩa xã hội.",
      "Gieo nền tảng thế giới quan khoa học trong phong trào yêu nước.",
    ],
    quote:
      "Triết học trở thành vũ khí tinh thần của những người đi tìm đường cứu nước.",
  },
  {
    years: "1945–1954",
    title: "Giai đoạn 2 · Thể chế hóa trong Nhà nước cách mạng",
    summary:
      "Triết học trở thành nền tảng tư tưởng của Nhà nước mới, dẫn dắt kháng chiến toàn dân.",
    detail:
      "Sau Cách mạng Tháng Tám, triết học Mác – Lênin được thể chế hóa trong Nhà nước dân chủ nhân dân, khẳng định quyền lực thuộc về nhân dân và định hướng chiến lược kháng chiến toàn dân, toàn diện.",
    bullets: [
      "Định vị vai trò lãnh đạo của Đảng và sức mạnh nhân dân.",
      "Tổ chức xã hội, kinh tế, quân sự trên nền tảng duy vật biện chứng.",
    ],
    quote:
      "Mọi đường lối kháng chiến đều xuất phát từ quy luật khách quan của cách mạng.",
  },
  {
    years: "1954–1975",
    title: "Giai đoạn 3 · Xây dựng xã hội mới ở miền Bắc",
    summary:
      "Triết học dẫn dắt cải tạo quan hệ sản xuất, xây dựng con người mới và hậu phương lớn cho thống nhất.",
    detail:
      "Triết học Mác – Lênin được đưa vào quản lý, giáo dục và văn hóa, thiết kế mô hình xã hội xã hội chủ nghĩa ở miền Bắc, cải tạo quan hệ sản xuất và bồi dưỡng con người mới đáp ứng nhiệm vụ thống nhất đất nước.",
    bullets: [
      "Đặt trọng tâm vào công nghiệp hóa xã hội chủ nghĩa và cải tạo nông nghiệp.",
      "Huy động tinh thần tập thể, đề cao chuẩn mực con người mới XHCN.",
    ],
    quote: "Miền Bắc trở thành hậu phương lớn với nền tảng lý luận vững chắc.",
  },
  {
    years: "1975–1986",
    title: "Giai đoạn 4 · Thử thách thực tiễn & phản tỉnh",
    summary:
      "Khủng hoảng sau thống nhất đặt ra yêu cầu tự điều chỉnh, lấy thực tiễn làm tiêu chuẩn chân lý.",
    detail:
      "Khủng hoảng kinh tế – xã hội sau thống nhất cho thấy những giới hạn của mô hình cũ. Tinh thần 'thực tiễn là tiêu chuẩn của chân lý' thúc đẩy phản tỉnh, chuẩn bị cho tư duy đổi mới.",
    bullets: [
      "Tổng kết những hạn chế trong quản lý tập trung quan liêu bao cấp.",
      "Mở đường cho việc nhìn nhận lại quan hệ giữa lực lượng sản xuất và quan hệ sản xuất.",
    ],
    quote: "Đổi mới bắt đầu từ thái độ dám nhìn thẳng vào sự thật.",
  },
  {
    years: "1986–nay",
    title: "Giai đoạn 5 · Đổi mới & vận dụng sáng tạo",
    summary:
      "Triết học giữ vai trò la bàn cho kinh tế thị trường định hướng XHCN, lấy con người làm trung tâm.",
    detail:
      "Triết học tiếp tục làm nền tảng cho công cuộc Đổi mới: kết hợp cơ chế thị trường với quản lý Nhà nước, dung hòa tăng trưởng với công bằng, ổn định và hội nhập quốc tế.",
    bullets: [
      "Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa.",
      "Đặt con người và tiến bộ xã hội làm mục tiêu cao nhất của phát triển.",
    ],
    quote: "Đổi mới nhưng không xa rời mục tiêu xã hội chủ nghĩa.",
  },
  {
    years: "Kỷ nguyên số",
    title: "Giai đoạn 6 · Kỷ nguyên số & toàn cầu hóa",
    summary:
      "Triết học giúp Việt Nam làm chủ công nghệ, phát triển xanh và hội nhập trên cơ sở lợi ích dân tộc.",
    detail:
      "Trong bối cảnh cách mạng số và toàn cầu hóa, triết học Mác – Lênin giúp nhận diện tư liệu sản xuất mới, phát triển kinh tế số, kinh tế xanh và bảo vệ lợi ích dân tộc trong hội nhập sâu rộng.",
    bullets: [
      "Định hướng chiến lược dữ liệu, công nghệ và nguồn nhân lực số.",
      "Kết hợp sức mạnh dân tộc với sức mạnh thời đại trong các chuỗi giá trị toàn cầu.",
    ],
    quote:
      "Làm chủ công nghệ để bảo vệ chủ quyền tư duy và không gian số quốc gia.",
  },
];

const getShortTitle = (title) => title.replace(/Giai đoạn \d+ · /, "");

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = timelineStages[activeIndex];

  const axisProgress = useMemo(
    () => ((activeIndex + 1) / timelineStages.length) * 100,
    [activeIndex],
  );

  return (
    <Section
      eyebrow="Mốc lịch sử"
      title="Timeline triết học Mác – Lênin tại Việt Nam"
      summary="Chọn từng mốc để xem nội dung trọng tâm: từ tiếp nhận tư tưởng đến kỷ nguyên số."
      theme="dusk"
      sectionId="section-timeline"
      className="section--timeline"
    >
      <div className="timeline-experience">
        <div
          className="timeline-axis"
          role="tablist"
          aria-label="Dòng chảy lịch sử"
        >
          <div
            className="timeline-axis__progress"
            style={{ width: `${axisProgress}%` }}
            aria-hidden="true"
          />
          {timelineStages.map((stage, index) => (
            <button
              type="button"
              key={stage.years}
              className="timeline-axis__node"
              role="tab"
              aria-selected={index === activeIndex}
              data-active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <span className="timeline-axis__years">{stage.years}</span>
              <span className="timeline-axis__title">
                {getShortTitle(stage.title)}
              </span>
            </button>
          ))}
        </div>

        <article className="timeline-story" role="tabpanel" aria-live="polite">
          <div key={activeStage.years} className="timeline-story__panel">
            <p className="timeline-story__eyebrow">{activeStage.years}</p>
            <h3>{activeStage.title}</h3>
            <p>{activeStage.detail}</p>
            <ul>
              {activeStage.bullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {activeStage.quote && (
              <blockquote className="timeline-story__quote">
                “{activeStage.quote}”
              </blockquote>
            )}
          </div>
        </article>
      </div>
    </Section>
  );
}
