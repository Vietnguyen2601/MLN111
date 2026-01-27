import Section from "./Section";
import imageThree from "../pic/hinh3.jpg";

export default function ModernEraSection() {
  return (
    <Section
      eyebrow="Phần 4"
      title="Triết học trước biến đổi thời đại"
      summary="Cách tiếp cận biện chứng giúp Việt Nam chủ động trước toàn cầu hóa và bùng nổ công nghệ."
      theme="dusk"
      className="section--modern section--immersive"
      backgroundImage={imageThree}
      backgroundOverlay={false}
      mediaPosition="left"
      media={
        <div className="modern-dashboard">
          <p className="modern-dashboard__title">Chỉ dấu thời đại</p>
          <dl>
            <div>
              <dt>Toàn cầu hóa</dt>
              <dd>Tác động hai chiều, đòi hỏi chọn lọc</dd>
            </div>
            <div>
              <dt>Công nghệ</dt>
              <dd>Đổi mới nhanh, cần quản trị xã hội</dd>
            </div>
            <div>
              <dt>Nhân lực</dt>
              <dd>Giữ vai trò chủ thể sáng tạo</dd>
            </div>
          </dl>
        </div>
      }
    >
      <div className="modern-content">
        <article>
          <p className="modern-content__eyebrow">4.1</p>
          <h3>Cách tiếp cận toàn cầu hóa</h3>
          <p>
            Toàn cầu hóa được nhìn nhận như một quá trình thống nhất nhưng đầy
            mâu thuẫn, chứa cả mặt tích cực lẫn tiêu cực. Nhờ đó Việt Nam chọn
            chiến lược hội nhập có chọn lọc, phát huy nội lực mà vẫn giữ bản
            sắc.
          </p>
        </article>
        <article>
          <p className="modern-content__eyebrow">4.2</p>
          <h3>Khoa học – công nghệ và vai trò con người</h3>
          <p>
            Dù công nghệ phát triển chóng mặt, triết học Mác – Lênin nhấn mạnh
            rằng con người luôn là trung tâm và chịu trách nhiệm trước hệ quả xã
            hội của tiến bộ kỹ thuật.
          </p>
          <div className="modern-pillars">
            <span>Đổi mới sáng tạo</span>
            <span>Quản trị nhân văn</span>
            <span>Chia sẻ tri thức</span>
          </div>
        </article>
      </div>
    </Section>
  );
}
