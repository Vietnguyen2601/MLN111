import Section from "./Section";
import imageTwo from "../pic/hinh2.jpg";

export default function WorldviewSection() {
  return (
    <Section
      title="Triết học Mác – Lênin như nền tảng thế giới quan"
      summary="Thế giới được nhìn như một chỉnh thể vật chất thống nhất, luôn vận động và gắn với bối cảnh lịch sử cụ thể."
      theme="ember"
      className="section--immersive section--worldview"
      backgroundImage={imageTwo}
      backgroundOverlay={false}
      showHeading={false}
      media={
        <div className="worldview-heading">
          <p className="worldview-heading__eyebrow">Phần 1</p>
          <h2>Triết học Mác – Lênin như nền tảng thế giới quan</h2>
          <p>
            Thế giới được nhìn như một chỉnh thể vật chất thống nhất, luôn vận
            động và gắn với bối cảnh lịch sử cụ thể.
          </p>
        </div>
      }
    >
      <p className="worldview-lede">
        Triết học Mác – Lênin giúp xã hội Việt Nam nhìn hiện thực như một chỉnh
        thể thống nhất, nơi mọi chuyển động đều gắn với điều kiện vật chất lẫn
        bối cảnh lịch sử cụ thể.
      </p>
      <div className="worldview-panels">
        <article className="worldview-panel">
          <span className="worldview-panel__badge">1.1</span>
          <h3>Thế giới quan duy vật biện chứng</h3>
          <p>
            Cách tiếp cận duy vật biện chứng giúp tránh hai cực đoan: tuyệt đối
            hóa yếu tố tinh thần dẫn đến duy ý chí hoặc nhìn hiện tượng một cách
            siêu hình, tách rời khỏi mối liên hệ xã hội.
          </p>
          <ul className="worldview-tags">
            <li>Đặt vấn đề vào điều kiện cụ thể</li>
            <li>Giữ vững tính khách quan</li>
            <li>Kết nối các mối quan hệ</li>
          </ul>
        </article>
        <article className="worldview-panel">
          <span className="worldview-panel__badge">1.2</span>
          <h3>Nhân sinh quan tích cực</h3>
          <p>
            Con người vừa là sản phẩm của hoàn cảnh vừa là chủ thể cải biến hoàn
            cảnh thông qua thực tiễn. Từ đó nuôi dưỡng niềm tin rằng sự phát
            triển của đất nước đến từ lao động và sáng tạo của nhân dân.
          </p>
          <div className="worldview-panel__quote">
            <p>“Hiểu đúng để hành động đúng.”</p>
            <span>Định hướng cốt lõi của triết học Mác – Lênin</span>
          </div>
        </article>
      </div>
    </Section>
  );
}
