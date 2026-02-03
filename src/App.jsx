import IntroSection from "./components/IntroSection";
import WorldviewSection from "./components/WorldviewSection";
import MethodologySection from "./components/MethodologySection";
import PoliticalRoleSection from "./components/PoliticalRoleSection";
import ModernEraSection from "./components/ModernEraSection";
import LongTermSection from "./components/LongTermSection";
import ConclusionSection from "./components/ConclusionSection";
import DialecticalChat from "./components/DialecticalChat";
import heroVideo from "./pic/maclenin.mp4";

export default function App() {
  return (
    <div className="app-shell">
      <div className="glow glow--crimson" />
      <div className="glow glow--aurum" />
      <main>
        <header className="hero">
          <video
            className="hero__video"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <div className="hero__overlay" aria-hidden="true" />
          <p className="hero__eyebrow">Chuyên đề MLN-111</p>
          <h1>
            Vai Trò Của Triết Học Mác – Lênin Trong Đời Sống Xã Hội Việt Nam
          </h1>
          <p className="hero__lede">
            Triết học không nằm trên giá sách mà thấm sâu vào cách chúng ta suy
            nghĩ, hoạch định chính sách và hành động cho tương lai. Bộ sưu tập
            nội dung này tổng hợp những điểm nhấn chính để bạn tiếp tục phát
            triển tư liệu và hình ảnh sau này.
          </p>
          <div className="hero__meta">
            <span>Thế giới quan khoa học</span>
            <span>Phương pháp luận đổi mới</span>
            <span>Định hướng chính trị – xã hội</span>
          </div>
        </header>

        <IntroSection />
        <WorldviewSection />
        <MethodologySection />
        <PoliticalRoleSection />
        <ModernEraSection />
        <LongTermSection />
        <ConclusionSection />
        
        {/* AI Dialectical Consultant Section */}
        <DialecticalChat />

        <footer>
          Soạn thảo theo tinh thần triết học Mác – Lênin, sẵn sàng mở rộng với
          hình ảnh và tư liệu.
        </footer>
      </main>
    </div>
  );
}
