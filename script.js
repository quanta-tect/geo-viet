(function () {
  const form = document.getElementById('promptForm');
  const output = document.getElementById('promptOutput');
  const copyBtn = document.getElementById('copyBtn');

  if (!form || !output || !copyBtn) return;

  function buildPrompt() {
    const siteUrl = document.getElementById('siteUrl').value.trim() || '[URL site]';
    const niche = document.getElementById('niche').value.trim() || '[niche]';
    const audience = document.getElementById('audience').value.trim() || '[khách hàng mục tiêu]';
    const competitors = document.getElementById('competitors').value.trim() || '[đối thủ]';
    const language = document.getElementById('language').value.trim() || 'Tiếng Việt';
    const goal = document.getElementById('goal').value;

    return `Hãy đóng vai một chuyên gia GEO / AEO / AI Search.

Tôi muốn bạn audit website này: ${siteUrl}
Niche chính: ${niche}
Khách hàng mục tiêu: ${audience}
Đối thủ muốn so sánh: ${competitors}
Ngôn ngữ nội dung: ${language}
Mục tiêu chính: ${goal}

Yêu cầu audit:
1. Tóm tắt thật ngắn site này đang mạnh và yếu ở đâu.
2. Chấm điểm 0-10 cho các hạng mục: crawlability, answer-first structure, technical SEO, schema, freshness, topical authority, internal links, tool/value-add.
3. Chỉ ra 10 cơ hội long-tail dễ lên nhanh nhất cho niche này.
4. Gợi ý 3 trang pillar phải có và 10 bài hỗ trợ nên viết đầu tiên.
5. Viết mẫu robots.txt phù hợp để tối ưu cho Googlebot, Bingbot, OAI-SearchBot, GPTBot và PerplexityBot.
6. Đề xuất 1 tool nhỏ bằng JS có thể thêm vào site tĩnh để tăng utility và khả năng quay lại.
7. Đưa ra kế hoạch 30 ngày theo format: việc cần làm / impact / effort / ưu tiên.
8. Nếu site hiện chưa đủ mạnh, hãy viết lại cho tôi cấu trúc landing page tốt hơn theo hướng dễ được AI cite.
9. Nếu cần, hãy đề xuất title tag, H1, meta description và FAQ schema cho 3 trang quan trọng nhất.
10. Cuối cùng, hãy sắp xếp tất cả đề xuất theo thứ tự làm trước để có kết quả nhanh nhất.

Hãy trả lời thật cụ thể, không nói chung chung.`;
  }

  output.value = buildPrompt();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    output.value = buildPrompt();
    output.focus();
    output.select();
  });

  copyBtn.addEventListener('click', async function () {
    try {
      await navigator.clipboard.writeText(output.value);
      copyBtn.textContent = 'Đã copy';
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1200);
    } catch (err) {
      output.focus();
      output.select();
      copyBtn.textContent = 'Bôi đen để copy';
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1400);
    }
  });
})();
