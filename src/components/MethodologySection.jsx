import Section from "./Section";
import imageFour from "../pic/hình4.jpg";

export default function MethodologySection() {
  return (
    <Section
      eyebrow="Phần 2"
      title="Phương pháp luận cho nhận thức và hành động"
      summary="Phép biện chứng duy vật định hướng cách chúng ta phân tích, ra quyết định và đổi mới thực tiễn."
      theme="dusk"
      className="section--immersive section--methodology"
      backgroundImage={imageFour}
      backgroundOverlay={false}
    >
      <div className="methodology-intro">
        <p>
          Phép biện chứng duy vật định hướng cách xã hội Việt Nam tiếp cận vấn
          đề phức tạp: quan sát toàn cảnh, phân tích mâu thuẫn và đưa ra quyết
          sách phù hợp thực tiễn.
        </p>
      </div>
      <div className="methodology-grid">
        <article className="methodology-card">
          <header>
            <span>2.1</span>
            <h3>Phương pháp luận biện chứng</h3>
          </header>
          <p>Việc phân tích vấn đề xã hội đòi hỏi phải:</p>
          <ul>
            <li>Xem xét sự vật trong mối liên hệ phổ biến.</li>
            <li>Nhìn nhận quá trình vận động và phát triển của hiện tượng.</li>
            <li>Đặt quyết sách trong bối cảnh lịch sử – cụ thể.</li>
          </ul>
          <p>
            Nhờ vậy, quá trình hoạch định chính sách tránh được sự nóng vội và
            khuyến khích cách tiếp cận toàn diện.
          </p>
        </article>
        <article className="methodology-card methodology-card--accent">
          <header>
            <span>2.2</span>
            <h3>Bài học từ thực tiễn đổi mới</h3>
          </header>
          <p>
            Những va vấp đầu thời kỳ đổi mới cho thấy cần vận dụng linh hoạt các
            nguyên lý triết học, để lý luận gắn với tình hình cụ thể.
          </p>
          <div className="methodology-pillars">
            <p>Nhận thức thống nhất</p>
            <p>Chính sách linh hoạt</p>
            <p>Thực tiễn kiểm nghiệm</p>
          </div>
          <p>
            Khi lý luận và thực tiễn cùng đối thoại, triết học trở thành nền
            tảng định hướng tư duy hành động.
          </p>
        </article>
      </div>
    </Section>
  );
}
