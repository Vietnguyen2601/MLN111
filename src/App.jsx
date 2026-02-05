import { useEffect, useState } from "react";
import IntroSection from "./components/IntroSection";
import TimelineSection from "./components/TimelineSection";
import WorldviewSection from "./components/WorldviewSection";
import MethodologySection from "./components/MethodologySection";
import PoliticalRoleSection from "./components/PoliticalRoleSection";
import ModernEraSection from "./components/ModernEraSection";
import LongTermSection from "./components/LongTermSection";
import ConclusionSection from "./components/ConclusionSection";
import MiniGame from "./components/MiniGame";
import DialecticalChat from "./components/DialecticalChat";
import heroVideo from "./pic/maclenin.mp4";
import studocuLogo from "./pic/studocu.png";
import chatgptLogo from "./pic/chatgpt.png";
import compilotLogo from "./pic/github.png";

const aiToolkit = [
  {
    name: "Studocu",
    description: "Nơi tham khảo nội dung",
    image: studocuLogo,
  },
  {
    name: "ChatGPT",
    description: "Cải thiện nội dung và tổng hợp",
    image: chatgptLogo,
  },
  {
    name: "Compilot (GitHub)",
    description: "Thiết kế giao diện",
    image: compilotLogo,
  },
];

const navLinks = [
  { id: "section-intro", label: "Mở đầu" },
  { id: "section-timeline", label: "Mốc lịch sử" },
  { id: "section-worldview", label: "Thế giới quan" },
  { id: "section-methodology", label: "Chính trị" },
  { id: "section-modern-era", label: "Văn hóa" },
  { id: "section-long-term", label: "Tầm nhìn" },
];

export default function App() {
  const [showMiniGame, setShowMiniGame] = useState(false);
  const [pendingScrollId, setPendingScrollId] = useState(null);

  useEffect(() => {
    if (!showMiniGame && pendingScrollId) {
      const target = document.getElementById(pendingScrollId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setPendingScrollId(null);
    }
  }, [pendingScrollId, showMiniGame]);

  const handleNavigate = (sectionId) => {
    if (showMiniGame) {
      setPendingScrollId(sectionId);
      setShowMiniGame(false);
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app-shell">
      <div className="glow glow--crimson" />
      <div className="glow glow--aurum" />
      <nav className="site-nav" aria-label="Điều hướng chính">
        <div className="site-nav__inner">
          <button
            type="button"
            className="site-nav__logo"
            onClick={() => handleNavigate("hero")}
          >
            MLN-111
          </button>
          <div className="site-nav__links" role="list">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.id}
                className="site-nav__link"
                onClick={() => handleNavigate(link.id)}
                role="listitem"
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="site-nav__cta"
            onClick={() => setShowMiniGame((prev) => !prev)}
          >
            {showMiniGame ? "Quay lại nội dung" : "Mở mini game"}
          </button>
        </div>
      </nav>
      <main className={showMiniGame ? "main--game-mode" : undefined}>
        {showMiniGame ? (
          <MiniGame onBack={() => setShowMiniGame(false)} />
        ) : (
          <>
            <header className="hero" id="hero">
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
                Triết học không nằm trên giá sách mà thấm sâu vào cách chúng ta
                suy nghĩ, hoạch định chính sách và hành động cho tương lai. Bộ
                sưu tập nội dung này tổng hợp những điểm nhấn chính để bạn tiếp
                tục phát triển tư liệu và hình ảnh sau này.
              </p>
              <div className="hero__meta">
                <span>Thế giới quan khoa học</span>
                <span>Phương pháp luận đổi mới</span>
                <span>Định hướng chính trị – xã hội</span>
              </div>
              <button
                type="button"
                className="hero__cta"
                onClick={() => handleNavigate("ai-consultant")}
              >
                <span>★</span> Thử AI Tư Vấn Biện Chứng
              </button>
            </header>

            <IntroSection />
            <TimelineSection />
            <WorldviewSection />
            <MethodologySection />
            <PoliticalRoleSection />
            <ModernEraSection />
            <LongTermSection />
            <ConclusionSection />

            <section id="ai-consultant" className="ai-consultant">
              <p className="ai-consultant__eyebrow">Thử AI hỗ trợ lập luận</p>
              <h2>★ Tư Vấn Biện Chứng</h2>
              <p>
                Khai thác trợ lý hội thoại để luyện tập cách lý giải, đặt câu
                hỏi phản biện và mở rộng dẫn chứng từ nội dung đã trình bày.
              </p>
              <DialecticalChat />
            </section>

            <section className="game-cta" aria-labelledby="mini-game-cta">
              <div>
                <p className="game-cta__eyebrow">
                  Hoạt động tương tác sau trình bày
                </p>
                <h2 id="mini-game-cta">Mini Game: 17 câu hỏi - 7 ô rủi ro</h2>
                <p>
                  Chuyển sang trang mini game để công chúng ôn lại các nguyên lý
                  chính bằng 24 hộp ngẫu nhiên kèm bộ đếm thời gian 25 giây.
                </p>
              </div>
              <button
                type="button"
                className="game-cta__button"
                onClick={() => setShowMiniGame(true)}
              >
                Mở mini game
              </button>
            </section>

            <footer className="site-footer">
              <p>
                Soạn thảo theo tinh thần triết học Mác – Lênin, sẵn sàng mở rộng
                với hình ảnh và tư liệu.
              </p>
              <div className="footer-ai">
                <h3>ÁP DỤNG AI</h3>
                <div className="footer-ai__grid" role="list">
                  {aiToolkit.map((tool) => (
                    <article
                      className="footer-ai__card"
                      key={tool.name}
                      role="listitem"
                    >
                      <img
                        src={tool.image}
                        alt={`Logo ${tool.name}`}
                        loading="lazy"
                      />
                      <div>
                        <p className="footer-ai__name">{tool.name}</p>
                        <p className="footer-ai__description">
                          {tool.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </footer>
          </>
        )}
      </main>
    </div>
  );
}
