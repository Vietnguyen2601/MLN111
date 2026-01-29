import Section from "./Section";
import imageTwo from "../pic/hinh2.jpg";

const worldviewPoints = [
  {
    id: "1.1",
    title: "Thế giới quan duy vật",
    body: "Thế giới vật chất tồn tại khách quan, độc lập với ý thức. Nhìn nhận đó giúp xã hội Việt Nam loại bỏ mê tín, duy tâm và thay bằng tư duy thực tế, tỉnh táo trước mọi hiện tượng xã hội.",
  },
  {
    id: "1.2",
    title: "Quan hệ vật chất – ý thức",
    body: "Kinh tế và cơ sở vật chất định hình đời sống tinh thần. Bài học phát triển của Việt Nam cho thấy chỉ khi nền kinh tế vững thì văn hóa, giáo dục, khoa học mới bứt phá tương xứng.",
  },
  {
    id: "1.3",
    title: "Phép biện chứng duy vật",
    body: "Tư duy biện chứng rèn khả năng phân tích mối liên hệ, vận động và mâu thuẫn. Nhờ đó, chúng ta dung hòa hội nhập với bản sắc, tăng trưởng với công bằng hay truyền thống với hiện đại.",
  },
  {
    id: "1.4",
    title: "Thực tiễn – tiêu chuẩn chân lý",
    body: "Mọi lý luận đều phải được thực tiễn kiểm chứng. Tinh thần “dân biết, dân bàn, dân làm, dân giám sát, dân thụ hưởng” bảo đảm chính sách xuất phát từ đời sống và quay trở lại phục vụ nhân dân.",
  },
];

export default function WorldviewSection() {
  return (
    <Section
      title="Phần 1 · Thế giới quan & phương pháp luận"
      summary="Nền tảng tư duy duy vật và phép biện chứng giúp chúng ta suy nghĩ đúng, làm đúng."
      theme="ember"
      className="section--immersive section--worldview"
      backgroundImage={imageTwo}
      backgroundOverlay={false}
      showHeading={false}
    >
      <div className="worldview-atmo">
        <p className="worldview-atmo__label">Phần 1 · Thế giới quan</p>
        <h2 className="worldview-atmo__title">
          Nền tảng tư duy cho nhận thức và hành động
        </h2>
        <p className="worldview-atmo__lede">
          Thế giới quan duy vật và phép biện chứng duy vật cung cấp khung tham
          chiếu để xã hội Việt Nam nhìn thẳng vào hiện thực, tránh nóng vội, tin
          vào quy luật khách quan và năng lực cải biến thế giới của chính mình.
        </p>
        <p className="worldview-atmo__note">
          Từ điểm tựa này, mọi quyết sách đều bắt đầu bằng quan sát thực tiễn.
        </p>
      </div>
      <div className="worldview-grid">
        {worldviewPoints.map((point) => (
          <article key={point.id} className="worldview-card">
            <p className="worldview-card__eyebrow">{point.id}</p>
            <h3>{point.title}</h3>
            <p>{point.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
