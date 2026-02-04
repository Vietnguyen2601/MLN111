import Section from "./Section";
import imageThree from "../pic/hinh3.jpg";

export default function ModernEraSection() {
  return (
    <Section
      eyebrow="Phần 4"
      title="Văn hóa & con người: Giải phóng con người toàn diện"
      summary="Con người là trung tâm của phát triển; đạo đức xã hội được định hình lại trong kinh tế thị trường; truyền thống và hiện đại được gắn kết bằng tư duy biện chứng."
      theme="dusk"
      className="section--modern section--immersive"
      backgroundImage={imageThree}
      backgroundOverlay={false}
      mediaPosition="left"
      media={
        <div className="modern-dashboard">
          <p className="modern-dashboard__title">Trục văn hóa</p>
          <dl>
            <div>
              <dt>Con người</dt>
              <dd>Mục tiêu tối thượng của mọi chính sách</dd>
            </div>
            <div>
              <dt>Đạo đức</dt>
              <dd>
                Nuôi dưỡng trách nhiệm xã hội, chống chủ nghĩa cá nhân cực đoan
              </dd>
            </div>
            <div>
              <dt>Truyền thống · Hiện đại</dt>
              <dd>Kế thừa giá trị cội nguồn để đổi mới và hội nhập</dd>
            </div>
          </dl>
        </div>
      }
      sectionId="section-modern-era"
    >
      <div className="modern-content">
        <article>
          <p className="modern-content__eyebrow">4.1</p>
          <h3>Con người là trung tâm</h3>
          <p>
            Triết học Mác – Lênin khẳng định phát triển phải hướng đến giải
            phóng con người cả vật chất lẫn tinh thần. Mọi chính sách đều nhằm
            mở rộng năng lực sáng tạo và phẩm giá của mỗi công dân.
          </p>
        </article>
        <article>
          <p className="modern-content__eyebrow">4.2</p>
          <h3>Đạo đức xã hội trong kinh tế thị trường</h3>
          <p>
            Cạnh tranh thị trường đòi hỏi một hệ giá trị mới: đề cao trách nhiệm
            cộng đồng, tinh thần sẻ chia và cảnh giác với chủ nghĩa cá nhân cực
            đoan.
          </p>
          <div className="modern-pillars">
            <span>Trách nhiệm</span>
            <span>Đoàn kết</span>
            <span>Liêm chính</span>
          </div>
        </article>
        <article>
          <p className="modern-content__eyebrow">4.3</p>
          <h3>Biện chứng giữa truyền thống và hiện đại</h3>
          <p>
            Tư duy biện chứng giúp xã hội kế thừa giá trị văn hóa dân tộc, đồng
            thời đổi mới để thích ứng với toàn cầu hóa. Nhờ vậy, bản sắc Việt
            Nam vẫn được gìn giữ trong khi tiếp thu tinh hoa nhân loại.
          </p>
        </article>
      </div>
    </Section>
  );
}
