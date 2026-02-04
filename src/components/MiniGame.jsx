import { useCallback, useEffect, useRef, useState } from "react";
import backgroundTrack from "../pic/Fly Me to the Moon - Osaka Jazz Channel - Osaka Jazz Channel (youtube).mp3";

const QUESTION_TIME = 25;
let audioContext;

const getAudioContext = () => {
  if (typeof window === "undefined") {
    return null;
  }
  if (audioContext) {
    return audioContext;
  }
  const AudioContextConstructor =
    window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) {
    return null;
  }
  audioContext = new AudioContextConstructor();
  return audioContext;
};

const playSound = (type) => {
  const context = getAudioContext();
  if (!context) {
    return;
  }

  if (context.state === "suspended") {
    context.resume().catch(() => {});
  }

  const oscillator = context.createOscillator();
  const gainNode = context.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  const now = context.currentTime;
  let frequency = 520;
  let duration = 0.25;
  let gain = 0.28;

  if (type === "correct") {
    frequency = 780;
    duration = 0.35;
  } else if (type === "wrong") {
    frequency = 320;
    duration = 0.35;
  } else if (type === "bomb") {
    frequency = 200;
    duration = 0.5;
    gain = 0.35;
  }

  oscillator.frequency.setValueAtTime(frequency, now);
  gainNode.gain.setValueAtTime(gain, now);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

  oscillator.start(now);
  oscillator.stop(now + duration);
};

const QUESTIONS = [
  {
    question:
      "Triết học Mác – Lênin cung cấp nền tảng nào cho cách mạng Việt Nam?",
    options: [
      "A. Thế giới quan và phương pháp luận khoa học",
      "B. Kế hoạch tài chính ngắn hạn",
      "C. Công nghệ sản xuất hiện đại",
      "D. Công thức tuyên truyền cố định",
    ],
    answer: "A",
  },
  {
    question:
      "Việc vận dụng triết học Mác – Lênin trong đường lối Đổi mới giúp Việt Nam điều gì?",
    options: [
      "A. Phủ nhận mọi thành tựu trước Đổi mới",
      "B. Chỉ chú trọng tăng trưởng kinh tế",
      "C. Kết hợp phát triển kinh tế với tiến bộ và công bằng xã hội",
      "D. Thay thế toàn bộ hệ thống pháp luật",
    ],
    answer: "C",
  },
  {
    question:
      "Theo triết học Mác – Lênin, thực tiễn giữ vai trò gì trong nhận thức?",
    options: [
      "A. Là yếu tố phụ, có cũng được",
      "B. Chỉ dùng để minh họa lý thuyết",
      "C. Là tiêu chuẩn kiểm nghiệm chân lý",
      "D. Không liên quan đến tư duy",
    ],
    answer: "C",
  },
  {
    question:
      "Thế giới quan duy vật biện chứng giúp cán bộ, đảng viên điều gì?",
    options: [
      "A. Nhìn nhận sự vật một chiều",
      "B. Tách rời lý luận khỏi thực tiễn",
      "C. Phân tích mối liên hệ và vận động của sự vật",
      "D. Phủ nhận vai trò của con người",
    ],
    answer: "C",
  },
  {
    question:
      "Nguyên tắc khách quan trong triết học Mác – Lênin yêu cầu điều gì khi hoạch định chính sách?",
    options: [
      "A. Xuất phát từ điều kiện lịch sử – cụ thể",
      "B. Chỉ dựa trên mong muốn chủ quan",
      "C. Bỏ qua tác động của quần chúng",
      "D. Đặt niềm tin vào may rủi",
    ],
    answer: "A",
  },
  {
    question:
      "Phương pháp luận biện chứng được vận dụng thế nào trong công cuộc công nghiệp hóa?",
    options: [
      "A. Coi tăng trưởng là mục tiêu duy nhất",
      "B. Nhấn mạnh sự phát triển cân đối, bền vững",
      "C. Tách rời kinh tế với văn hóa",
      "D. Loại bỏ yếu tố khoa học công nghệ",
    ],
    answer: "B",
  },
  {
    question: "Giá trị nhân văn của triết học Mác – Lênin thể hiện ở điểm nào?",
    options: [
      "A. Khẳng định vai trò quyết định của quần chúng nhân dân",
      "B. Đề cao lợi ích cá nhân lên trên cộng đồng",
      "C. Phủ nhận mọi truyền thống dân tộc",
      "D. Xem nhẹ mục tiêu giải phóng con người",
    ],
    answer: "A",
  },
  {
    question:
      "Trong giáo dục công dân, triết học Mác – Lênin giúp học sinh điều gì?",
    options: [
      "A. Thụ động tiếp nhận kiến thức",
      "B. Xây dựng lý tưởng sống vì cộng đồng",
      "C. Chỉ quan tâm đến kết quả thi cử",
      "D. Tách rời đạo đức với hành động",
    ],
    answer: "B",
  },
  {
    question:
      "Khái niệm liên hệ phổ biến nhắc nhở chúng ta điều gì khi giải quyết vấn đề xã hội?",
    options: [
      "A. Chỉ nhìn vào một yếu tố đơn lẻ",
      "B. Xem xét mối quan hệ giữa các lĩnh vực",
      "C. Tập trung vào kết quả trước mắt",
      "D. Bỏ qua tác động của môi trường",
    ],
    answer: "B",
  },
  {
    question:
      "Triết học Mác – Lênin định hướng gì cho xây dựng kinh tế thị trường định hướng XHCN?",
    options: [
      "A. Đồng nhất với kinh tế thị trường tự do",
      "B. Loại bỏ vai trò của pháp luật",
      "C. Tách rời kinh tế với mục tiêu xã hội",
      "D. Kết hợp cơ chế thị trường với quản lý vĩ mô của Nhà nước",
    ],
    answer: "D",
  },
  {
    question: "Trong lĩnh vực văn hóa, triết học Mác – Lênin gợi mở điều gì?",
    options: [
      "A. Phủ nhận bản sắc dân tộc",
      "B. Xây dựng nền văn hóa tiên tiến đậm đà bản sắc",
      "C. Chỉ tiếp thu văn hóa ngoại lai",
      "D. Không cần định hướng giá trị",
    ],
    answer: "B",
  },
  {
    question:
      "Nhận định nào phản ánh đúng vai trò của triết học Mác – Lênin trong công tác cán bộ?",
    options: [
      "A. Chỉ giúp hoàn thiện hồ sơ lý lịch",
      "B. Thay thế toàn bộ đào tạo chuyên môn",
      "C. Trang bị năng lực tư duy chiến lược và xử lý mâu thuẫn",
      "D. Không cần thiết ở cấp cơ sở",
    ],
    answer: "C",
  },
  {
    question:
      "Triết học Mác – Lênin góp phần gì cho việc xây dựng Nhà nước pháp quyền xã hội chủ nghĩa?",
    options: [
      "A. Coi nhẹ vai trò của nhân dân",
      "B. Tách luật pháp khỏi đạo đức",
      "C. Một mình Đảng quyết định mọi việc",
      "D. Khẳng định nguyên tắc quyền lực thuộc về nhân dân",
    ],
    answer: "D",
  },
  {
    question:
      "Để ứng phó thách thức toàn cầu, triết học Mác – Lênin gợi ý điều gì?",
    options: [
      "A. Kết hợp nội lực dân tộc với sức mạnh thời đại",
      "B. Khép kín nền kinh tế",
      "C. Phụ thuộc hoàn toàn vào viện trợ",
      "D. Bỏ qua yếu tố môi trường",
    ],
    answer: "A",
  },
  {
    question:
      "Việc học triết học Mác – Lênin đối với sinh viên hiện nay có ý nghĩa gì?",
    options: [
      "A. Chỉ để vượt qua kỳ thi",
      "B. Khiến sinh viên xa rời thực tế",
      "C. Không liên quan đến nghề nghiệp tương lai",
      "D. Định hướng giá trị sống, rèn luyện tư duy phản biện",
    ],
    answer: "D",
  },
];

const pointValues = [
  100, 100, 100, 200, 100, 100, 200, 100, 100, 100, 200, 200, 300, 300, 300,
];

const minusBoxesConfig = [100, 100, 100];
const bombBoxesConfig = [150, 150, 150];

const shuffle = (items) => {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function MiniGame({ onBack }) {
  const [boxes, setBoxes] = useState([]);
  const [selectedBox, setSelectedBox] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [boxResult, setBoxResult] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [timeoutMessage, setTimeoutMessage] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);
  const musicRef = useRef(null);

  const initializeGame = useCallback(() => {
    const pointBoxes = pointValues.map((value, index) => ({
      id: `point-${index}`,
      type: "point",
      value,
      question: QUESTIONS[index % QUESTIONS.length],
      opened: false,
    }));

    const minusBoxes = minusBoxesConfig.map((value, index) => ({
      id: `minus-${index}`,
      type: "minus",
      value,
      opened: false,
    }));

    const bombBoxes = bombBoxesConfig.map((value, index) => ({
      id: `bomb-${index}`,
      type: "bomb",
      value,
      opened: false,
    }));

    const shuffled = shuffle([...pointBoxes, ...minusBoxes, ...bombBoxes]).map(
      (box, order) => ({
        ...box,
        order: order + 1,
      }),
    );

    setBoxes(shuffled);
    setSelectedBox(null);
    setCurrentQuestion(null);
    setShowModal(false);
    setSelectedAnswer(null);
    setHasSubmitted(false);
    setTimeLeft(QUESTION_TIME);
    setBoxResult({});
    setGameOver(false);
    setTimeoutMessage(false);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const audio = new Audio(backgroundTrack);
    audio.loop = true;
    audio.volume = 0.35;
    musicRef.current = audio;

    const startPlayback = () => {
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise
          .then(() => setIsMusicPlaying(true))
          .catch(() => setIsMusicPlaying(false));
      } else {
        setIsMusicPlaying(true);
      }
    };

    startPlayback();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const handleTimeout = useCallback(() => {
    if (!selectedBox || hasSubmitted) {
      return;
    }
    setHasSubmitted(true);
    setTimeoutMessage(true);
    setBoxResult((prev) => ({ ...prev, [selectedBox.id]: "timeout" }));
    playSound("wrong");
  }, [selectedBox, hasSubmitted]);

  useEffect(() => {
    if (!showModal || hasSubmitted) {
      return undefined;
    }

    if (timeLeft === 0) {
      handleTimeout();
      return undefined;
    }

    const timerId = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [showModal, timeLeft, hasSubmitted, handleTimeout]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }
    if (!showModal) {
      document.body.style.removeProperty("overflow");
      return undefined;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showModal]);

  const updateBoxOpenState = useCallback(() => {
    if (!selectedBox) {
      return;
    }
    setBoxes((prev) => {
      const updated = prev.map((box) =>
        box.id === selectedBox.id ? { ...box, opened: true } : box,
      );
      if (updated.every((box) => box.opened)) {
        setGameOver(true);
      }
      return updated;
    });
  }, [selectedBox]);

  const closeModal = useCallback(() => {
    if (!showModal) {
      return;
    }
    if (!hasSubmitted) {
      handleTimeout();
    }
    updateBoxOpenState();
    setShowModal(false);
    setCurrentQuestion(null);
    setSelectedAnswer(null);
    setHasSubmitted(false);
    setTimeLeft(QUESTION_TIME);
    setTimeoutMessage(false);
    setSelectedBox(null);
  }, [showModal, hasSubmitted, handleTimeout, updateBoxOpenState]);

  const applyEffect = useCallback((box) => {
    const effectType = box.type === "bomb" ? "bomb" : "wrong";
    playSound(effectType);
    setBoxResult((prev) => ({ ...prev, [box.id]: box.type }));
    setBoxes((prev) => {
      const updated = prev.map((item) =>
        item.id === box.id ? { ...item, opened: true } : item,
      );
      if (updated.every((item) => item.opened)) {
        setGameOver(true);
      }
      return updated;
    });
    setSelectedBox(null);
    setSelectedAnswer(null);
    setHasSubmitted(false);
    setTimeoutMessage(false);
    setTimeLeft(QUESTION_TIME);
  }, []);

  const selectBox = (box) => {
    if (box.opened || showModal) {
      return;
    }
    playSound("flip");

    if (box.type !== "point") {
      applyEffect(box);
      return;
    }

    setSelectedBox(box);
    setCurrentQuestion(box.question);
    setShowModal(true);
    setSelectedAnswer(null);
    setHasSubmitted(false);
    setTimeoutMessage(false);
    setTimeLeft(QUESTION_TIME);
  };

  const submitAnswer = (optionLetter) => {
    if (!currentQuestion || hasSubmitted || !selectedBox) {
      return;
    }
    const isCorrect = optionLetter === currentQuestion.answer;
    setSelectedAnswer(optionLetter);
    setHasSubmitted(true);

    if (isCorrect) {
      setBoxResult((prev) => ({ ...prev, [selectedBox.id]: "correct" }));
      playSound("correct");
    } else {
      setBoxResult((prev) => ({ ...prev, [selectedBox.id]: "wrong" }));
      playSound("wrong");
    }
  };

  const toggleMusic = useCallback(() => {
    const audio = musicRef.current;
    if (!audio) {
      return;
    }

    if (isMusicPlaying) {
      audio.pause();
      setIsMusicPlaying(false);
      return;
    }

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.then === "function") {
      playPromise
        .then(() => setIsMusicPlaying(true))
        .catch(() => setIsMusicPlaying(false));
    } else {
      setIsMusicPlaying(true);
    }
  }, [isMusicPlaying]);

  const isBoxDisabled = showModal;

  const renderBoxLabel = (box) => {
    if (!box.opened) {
      return "Mở ô";
    }
    if (box.type === "point") {
      const state = boxResult[box.id];
      if (state === "correct") {
        return `+${box.value}`;
      }
      if (state === "wrong" || state === "timeout") {
        return "0 điểm";
      }
      return box.value;
    }
    if (box.type === "minus") {
      return `-${box.value}`;
    }
    return `💣 -${box.value}`;
  };

  const legend = [
    { label: "+100/+200/+300", description: "Ô câu hỏi" },
    { label: "-100/-150/-200", description: "Ô trừ điểm" },
    { label: "💣 -150", description: "Ô bom" },
  ];

  return (
    <section className="mini-game-screen">
      <header className="mini-game-screen__header">
        <button
          type="button"
          className="mini-game-screen__back"
          onClick={onBack}
        >
          ← Quay lại phần thuyết trình
        </button>
        <div>
          <p className="mini-game-screen__eyebrow">
            Hoạt động làm nóng khán phòng
          </p>
          <h2>
            Mini Game Pick-a-Box: Vai trò của triết học trong đời sống xã hội
            Việt Nam
          </h2>
          <p>
            Chọn một ô bất kỳ để nhận câu hỏi, trừ điểm hoặc bom bất ngờ. Trả
            lời đúng trong 25 giây để tích lũy điểm và thảo luận cùng khán giả.
          </p>
        </div>
      </header>

      <div className="mini-game-screen__legend" role="list">
        {legend.map((item) => (
          <div key={item.description} role="listitem">
            <span>{item.label}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mini-game-grid" data-modal-open={isBoxDisabled}>
        {boxes.map((box) => {
          const status = boxResult[box.id];
          return (
            <button
              type="button"
              key={box.id}
              className={[
                "mini-game-box",
                `mini-game-box--${box.type}`,
                status ? `mini-game-box--${status}` : "",
                box.opened ? "mini-game-box--opened" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => selectBox(box)}
              disabled={isBoxDisabled}
            >
              <span className="mini-game-box__index">
                Ô {box.order.toString().padStart(2, "0")}
              </span>
              <span className="mini-game-box__label">
                {renderBoxLabel(box)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mini-game-screen__actions">
        <button type="button" onClick={initializeGame}>
          Chơi lại từ đầu
        </button>
        <button
          type="button"
          className="mini-game-screen__music-toggle"
          onClick={toggleMusic}
          aria-pressed={isMusicPlaying}
        >
          {isMusicPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
        </button>
      </div>

      {gameOver && (
        <div className="mini-game-screen__banner">
          Đã mở hết {boxes.length} ô – quay lại phần thuyết trình hoặc chơi lại
          để đổi vị trí câu hỏi.
        </div>
      )}

      {showModal && currentQuestion && (
        <div className="mini-game-modal" role="dialog" aria-modal="true">
          <div className="mini-game-modal__panel">
            <div className="mini-game-modal__header">
              <p>Ô {selectedBox?.order?.toString().padStart(2, "0")}</p>
              <div className="mini-game-modal__timer">⏱️ {timeLeft}s</div>
            </div>
            <h3>{currentQuestion.question}</h3>
            <div className="mini-game-modal__options">
              {currentQuestion.options.map((option) => {
                const optionLetter = option[0];
                const isCorrect = optionLetter === currentQuestion.answer;
                const isSelected = selectedAnswer === optionLetter;
                const showState = hasSubmitted;

                return (
                  <button
                    type="button"
                    key={option}
                    className={[
                      "mini-game-modal__option",
                      showState && isCorrect
                        ? "mini-game-modal__option--correct"
                        : "",
                      showState && isSelected && !isCorrect
                        ? "mini-game-modal__option--wrong"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => submitAnswer(optionLetter)}
                    disabled={hasSubmitted}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {hasSubmitted && (
              <div className="mini-game-modal__feedback">
                {timeoutMessage ? (
                  <p>⏳ Hết giờ! Ô này nhận 0 điểm.</p>
                ) : selectedAnswer === currentQuestion.answer ? (
                  <p>✅ Chính xác! +{selectedBox?.value ?? 0} điểm.</p>
                ) : (
                  <p>
                    ❌ Chưa chính xác. Đáp án đúng là {currentQuestion.answer}.
                  </p>
                )}
              </div>
            )}
            <div className="mini-game-modal__footer">
              <button type="button" onClick={closeModal}>
                Đóng câu hỏi
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
