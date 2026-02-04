const API_URL = "/api/chat";

/**
 * Send message to the dialectical AI
 * @param {string} message - User's message
 * @param {Array} history - Chat history for context
 */
export async function sendMessage(message, history = []) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, history }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Không thể kết nối với AI");
  }

  return response.json();
}

/**
 * Sample problems for quick actions
 */
export const SAMPLE_PROBLEMS = [
  {
    id: 1,
    label: "Áp lực công việc",
    problem: "Tôi đang chịu áp lực rất lớn từ công việc, làm việc 12 tiếng mỗi ngày nhưng vẫn không đủ deadline. Cảm thấy kiệt sức và muốn bỏ cuộc.",
  },
  {
    id: 2,
    label: "Mâu thuẫn gia đình",
    problem: "Bố mẹ tôi muốn tôi theo ngành y như truyền thống gia đình, nhưng tôi đam mê nghệ thuật. Không biết nên theo đuổi ước mơ hay nghe lời gia đình.",
  },
  {
    id: 3,
    label: "Chia tay người yêu",
    problem: "Sau 3 năm yêu nhau, chúng tôi chia tay vì không còn hợp nhau. Tôi cảm thấy mất phương hướng và không biết bắt đầu lại như thế nào.",
  },
  {
    id: 4,
    label: "Áp lực đồng trang lứa",
    problem: "Bạn bè cùng tuổi đã mua nhà, mua xe, thăng tiến trong công việc. Còn tôi vẫn đang loay hoay chưa biết mình muốn gì. Cảm thấy thua kém.",
  },
];
