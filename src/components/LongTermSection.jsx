import Section from "./Section";
import imageOne from "../pic/hinh1.jpg";

export default function LongTermSection() {
  return (
    <Section
      eyebrow="Phần 5"
      title="Ý nghĩa lâu dài đối với xã hội Việt Nam"
      summary="Triết học Mác – Lênin luôn tự làm mới trong thực tiễn, giữ vai trò kim chỉ nam cho phát triển bền vững."
      theme="aurum"
      mediaHint={false}
      className="section--immersive section--longterm"
      backgroundImage={imageOne}
      backgroundOverlay={false}
    >
      <div className="longterm-grid">
        <div className="longterm-quote">
          <p>
            Triết học Mác – Lênin không phải hệ thống khép kín mà luôn tự đổi
            mới thông qua thực tiễn và thành tựu khoa học.
          </p>
          <p>
            Giá trị cốt lõi của nó nằm ở khả năng phản hồi trước biến động xã
            hội, giúp Việt Nam giữ vững phương hướng phát triển bền vững.
          </p>
        </div>
        <div className="longterm-timeline">
          <article>
            <h3>Gắn với thực tiễn</h3>
            <p>
              Lý luận luôn được kiểm chứng bằng hoạt động cách mạng và chuyển
              dịch kinh tế – xã hội.
            </p>
          </article>
          <article>
            <h3>Định hướng tư duy</h3>
            <p>
              Trang bị thế giới quan và phương pháp luận để hệ thống chính trị
              ra quyết sách dài hạn.
            </p>
          </article>
          <article>
            <h3>Nâng tầm con người</h3>
            <p>
              Khẳng định vai trò chủ thể của nhân dân trong công cuộc đổi mới và
              hội nhập.
            </p>
          </article>
        </div>
      </div>
    </Section>
  );
}
