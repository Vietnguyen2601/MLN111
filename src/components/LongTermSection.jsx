import Section from "./Section";
import imageOne from "../pic/hinh1.jpg";

export default function LongTermSection() {
  return (
    <Section
      eyebrow="Phần 5"
      title="Tầm nhìn thời đại 4.0"
      summary="Triết học Mác – Lênin giúp Việt Nam nhận diện tư liệu sản xuất mới, giữ quyền làm chủ công nghệ, thúc đẩy phát triển xanh và bảo vệ lợi ích dân tộc giữa toàn cầu hóa."
      theme="aurum"
      mediaHint={false}
      className="section--immersive section--longterm"
      backgroundImage={imageOne}
      backgroundOverlay={false}
    >
      <div className="longterm-grid">
        <div className="longterm-quote">
          <p>
            Công nghệ số và trí tuệ nhân tạo trở thành tư liệu sản xuất mới. Khi
            triết học chỉ ra bản chất đó, chúng ta hiểu vì sao phải tự chủ công
            nghệ để giữ độc lập quốc gia.
          </p>
          <p>
            Đồng thời, tư duy biện chứng yêu cầu phát triển hài hòa với thiên
            nhiên và đặt lợi ích dân tộc lên hàng đầu trong mọi quyết sách hội
            nhập.
          </p>
        </div>
        <div className="longterm-timeline">
          <article>
            <h3>5.1 · Làm chủ công nghệ</h3>
            <p>
              AI và hạ tầng số được nhìn như tư liệu sản xuất cần kiểm soát; tự
              chủ công nghệ là điều kiện bảo đảm độc lập và năng lực cạnh tranh.
            </p>
          </article>
          <article>
            <h3>5.2 · Phát triển xanh</h3>
            <p>
              Quan điểm sinh thái Mác-xít nhấn mạnh mối liên hệ người – tự
              nhiên, thúc đẩy chiến lược tăng trưởng xanh và kinh tế tuần hoàn.
            </p>
          </article>
          <article>
            <h3>5.3 · Toàn cầu hóa vì lợi ích dân tộc</h3>
            <p>
              Triết học giúp phân tích mâu thuẫn toàn cầu, từ đó lựa chọn cách
              hội nhập bảo vệ chủ quyền, lợi ích và tiếng nói của Việt Nam.
            </p>
          </article>
        </div>
      </div>
    </Section>
  );
}
