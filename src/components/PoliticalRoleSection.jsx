import Section from "./Section";
import imageFive from "../pic/hinh5.jpg";

export default function PoliticalRoleSection() {
  return (
    <Section
      eyebrow="Phần 3"
      title="Triết học trong đời sống chính trị – xã hội"
      summary="Tư tưởng Mác – Lênin định hình mục tiêu phát triển và phương thức xây dựng chính sách ở Việt Nam."
      theme="ember"
      className="section--immersive section--political"
      mediaPosition="left"
      media={
        <div className="policy-board">
          <p className="policy-board__title">Từ tư tưởng đến chính sách</p>
          <ul>
            <li>Độc lập dân tộc</li>
            <li>Dân chủ & công bằng</li>
            <li>Con người là trung tâm</li>
          </ul>
          <p className="policy-board__note">
            Mọi quyết sách cần kiểm chứng bằng thực tiễn và phản hồi của nhân
            dân.
          </p>
        </div>
      }
      backgroundImage={imageFive}
      backgroundOverlay={false}
    >
      <div className="policy-columns">
        <article>
          <p className="policy-columns__eyebrow">3.1</p>
          <h3>Cơ sở tư tưởng cho mục tiêu phát triển</h3>
          <p>
            Triết học Mác – Lênin giúp xác định mục tiêu độc lập dân tộc gắn với
            dân chủ, công bằng và tiến bộ xã hội, phản ánh khát vọng xây dựng
            một xã hội trong đó con người được phát triển toàn diện.
          </p>
        </article>
        <article>
          <p className="policy-columns__eyebrow">3.2</p>
          <h3>Định hướng xây dựng chính sách</h3>
          <p>
            Tư duy biện chứng nhắc rằng mọi quyết định đều tác động đến nhiều
            nhóm xã hội. Chính sách vì thế phải dựa trên phân tích khoa học về
            điều kiện kinh tế – xã hội thay vì áp dụng máy móc mô hình bên
            ngoài.
          </p>
          <div className="policy-matrix">
            <span>Phân tích mâu thuẫn lợi ích</span>
            <span>Tham vấn cộng đồng</span>
            <span>Điều chỉnh linh hoạt</span>
          </div>
        </article>
      </div>
    </Section>
  );
}
