import { useState } from "react";
import popupImage from "../pic/hinh2.jpg";

export default function ImagePopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="image-popup" role="dialog" aria-label="Tư liệu mở rộng">
      <button
        type="button"
        className="image-popup__close"
        aria-label="Đóng cửa sổ"
        onClick={() => setIsOpen(false)}
      >
        ×
      </button>
      <img src={popupImage} alt="Tư liệu minh họa" loading="lazy" />
      <p className="image-popup__caption">
        Gợi mở thêm hình ảnh về tinh thần Mác – Lênin.
      </p>
    </div>
  );
}
