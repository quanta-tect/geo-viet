# INTERNAL LINKING AUDIT — GEO Việt Nam

Date: 2026-07-18  
Scope: public HTML pages in `~/Downloads/geo-viet`

## 1. Tổng quan nhanh

- Trang chủ `index.html` đã có 2 section mới (bắt đầu từ đâu / đọc trước).
- 13/13 bài content chính đều có ít nhất 3–5 internal links dạng “Đọc tiếp” / “Bài liên quan”.
- Footer toàn cục đã thống nhất link về `about.html`, `contact.html`, `privacy.html`.
- `sitemap.xml`, `sitemap.txt`, `llms.txt`, `README.md` đã cập nhật song song.

## 2. Bảng kiểm từng page chính

| Page | Internal links hiện có | Trạng thái |
|------|------------------------|-----------|
| geo-la-gi.html | seo-vs-geo, cach-len-chatgpt-search, cach-do-ai-visibility | Đủ |
| oai-searchbot-la-gi.html | gptbot-vs, robots-txt, cach-len-chatgpt-search | Đủ |
| cach-len-chatgpt-search.html | cach-do-ai-visibility, oai-searchbot, robots-txt, questionnaire, tool | Đủ |
| llms-txt-co-can-khong.html | robots-txt, cach-len-chatgpt-search, llms-txt (self), geo-la-gi | Đủ |
| seo-vs-geo-vs-aeo.html | llms-txt, cach-len-chatgpt-search, google-ai-mode, cach-do-ai | Đủ |
| robots-txt-cho-ai-crawler.html | gptbot-vs, llms-txt, cach-len-chatgpt-search | Đủ |
| google-ai-overviews-la-gi.html | google-ai-mode, robots-txt, cach-do-ai | Đủ |
| google-ai-mode-la-gi.html | google-ai-overviews, oai-searchbot, cach-len-chatgpt-search | Đủ |
| perplexity-citation-la-gi.html | seo-vs-geo, llms-txt, robots-txt | Đủ |
| cach-do-ai-visibility.html | checklist, tool, seo-vs-geo | Đủ |
| gptbot-vs-oai-searchbot.html | llms-txt, oai-searchbot, seo-vs-geo | Đủ |
| ga4-cho-site-geo.html | google-ai-overviews, cach-len-chatgpt-search, perplexity-citation | Đủ |

## 3. Cụm chủ đề mạnh

- **ChatGPT Search + OAI-SearchBot**: tập trung đông page liên quan, link chéo dày.
- **robots.txt / crawlability**: robots-txt, oai-searchbot, gptbot-vs liên kết chặt.
- **Google AI Overviews / AI Mode**: google-ai-overviews, google-ai-mode, cach-len-chatgpt-search tạo thành chuỗi.

## 4. Cụm chủ đề còn mỏng

- **Perplexity citations**: hiện có perplexity-citation và robots-txt, cần thêm 1–2 bài long-tail về “cách kiểm tra citation” hoặc “cách tăng cơ hội được Perplexity cite”.
- **GA4 cho GEO**: ga4-cho-site-geo đứng hơi riêng lẻ, nên link mạnh hơn về cach-do-ai-visibility và tool.
- **llms.txt**: cần bài “llms.txt best practice 2026” để nối nhóm crawl + Google AI.

## 5. Đề xuất cải thiện internal links tiếp theo

1. **Tạo cluster Perplexity**: 1 bài “cách kiểm tra Perplexity citation” → link từ perplexity-citation, robots-txt, tool.
2. **Tạo cluster GA4**: ga4-cho-site-geo ↔ cach-do-ai-visibility ↔ tool tạo thành chuỗi đo lường.
3. **Thêm breadcrumb HTML** vào tất cả content page để Google hiểu cấu trúc.
4. **Mỗi bài pillar nên có 1 box “Quick links”** ở đầu nội dung để tăng crawl depth.
5. **Kiểm tra sitemap.xml + llms.txt** sau mỗi lần thêm bài mới.

## 6. Checklist đã xong

- [x] 13/13 bài content có bài đọc tiếp / bài liên quan
- [x] Footer thống nhất about/contact/privacy
- [x] Không còn placeholder sai (trừ comment analytics chuẩn)
- [x] Sitemap + llms + README cập nhật theo audit
- [x] File audit này lưu lại kết quả sau khi push
