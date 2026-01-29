import Section from "./Section";
import imageFive from "../pic/hinh5.jpg";

export default function PoliticalRoleSection() {
  return (
    <Section
      eyebrow="Phần 3"
      title="Động lực kinh tế: Kinh tế thị trường định hướng xã hội chủ nghĩa"
      summary="Triết học Mác – Lênin cung cấp nền tảng lý luận cho việc kết hợp cơ chế thị trường với định hướng xã hội chủ nghĩa, bảo đảm tăng trưởng đi đôi với công bằng."
      theme="ember"
      className="section--immersive section--political"
      mediaPosition="left"
      media={
        <div className="policy-board">
          <p className="policy-board__title">Nguyên tắc vận hành</p>
          <ul>
            <li>Nhà nước định hướng, thị trường vận hành</li>
            <li>Đa dạng sở hữu, ưu tiên hiệu quả xã hội</li>
            <li>Phân phối gắn phúc lợi và công bằng</li>
          </ul>
          <p className="policy-board__note">
            Cơ chế thị trường tự do thuần túy dễ tạo phân hóa, vì vậy phải có sự
            điều tiết nhằm giữ ổn định xã hội và mục tiêu phát triển con người.
          </p>
        </div>
      }
      backgroundImage={imageFive}
      backgroundOverlay={false}
    >
      <div className="policy-columns">
        <article>
          <p className="policy-columns__eyebrow">3.1</p>
          <h3>Cơ sở triết học của mô hình</h3>
          <p>
            Việc lựa chọn kinh tế thị trường định hướng xã hội chủ nghĩa xuất
            phát từ nhận thức rằng thị trường là công cụ hữu hiệu nhưng cần đặt
            dưới mục tiêu vì con người, vì sự ổn định và phát triển bền vững.
          </p>
        </article>
        <article>
          <p className="policy-columns__eyebrow">3.2</p>
          <h3>Sở hữu, phân phối và công bằng</h3>
          <p>
            Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là động lực
            quan trọng. Phân phối theo lao động kết hợp chính sách phúc lợi giúp
            hạn chế bất bình đẳng và mở rộng an sinh.
          </p>
          <div className="policy-matrix">
            <span>Đa dạng hóa sở hữu</span>
            <span>Phân phối công bằng</span>
            <span>An sinh bao trùm</span>
          </div>
        </article>
        <article>
          <p className="policy-columns__eyebrow">3.3</p>
          <h3>Vì sao không chọn thị trường tự do thuần túy</h3>
          <p>
            Triết học Mác – Lênin cảnh báo nguy cơ phân hóa giàu nghèo và mâu
            thuẫn xã hội nếu buông lỏng điều tiết. Định hướng xã hội chủ nghĩa
            chính là lớp bảo vệ để tăng trưởng gắn với tiến bộ và công bằng.
          </p>
        </article>
      </div>
    </Section>
  );
}
