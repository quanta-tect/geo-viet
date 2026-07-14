# GEO Việt Nam — site mẫu cho GitHub Pages

Đây là một micro-site tĩnh tối ưu cho **SEO + GEO** bằng tiếng Việt.

## File có sẵn
- `index.html` — landing page trụ cột
- `checklist.html` — checklist GEO 30 ngày
- `tool.html` — tool tạo prompt audit GEO
- `styles.css` — style chung
- `script.js` — JS cho tool
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `404.html`

## Trạng thái hiện tại
Bản workspace này đã được cập nhật theo GitHub username hiện tại:

```text
quanta-tect
```

URL project page đang dùng là:

```text
https://quanta-tect.github.io/geo-viet/
```

## Cách đẩy lên GitHub Pages

### Cách 1 — đơn giản nhất, dùng repo project page
1. Tạo repo mới trên GitHub, ví dụ: `geo-viet`
2. Upload toàn bộ file trong thư mục này lên repo đó
3. Vào **Settings** → **Pages**
4. Ở **Build and deployment** chọn:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Save
6. Đợi 1–3 phút, site sẽ có ở dạng:
   - `https://quanta-tect.github.io/geo-viet/`

### Cách 2 — dùng Git local
```bash
git init
git add .
git commit -m "Initial GEO site"
git branch -M main
git remote add origin https://github.com/quanta-tect/geo-viet.git
git push -u origin main
```
Sau đó bật Pages như ở Cách 1.

## Sau khi publish nên làm ngay
1. Thêm site vào **Google Search Console**
2. Submit `sitemap.xml`
3. Thêm site vào **Bing Webmaster Tools**
4. Submit `sitemap.xml`
5. Publish tiếp 5–10 bài long-tail đầu tiên
6. Cập nhật ngày sửa đổi mỗi khi refresh nội dung

## Gợi ý 10 bài nên viết tiếp
1. `geo-la-gi`
2. `cach-len-chatgpt-search`
3. `oai-searchbot-la-gi`
4. `llms-txt-co-can-khong`
5. `robots-txt-cho-ai-crawler`
6. `perplexity-citation-la-gi`
7. `seo-vs-geo-vs-aeo`
8. `cach-do-ai-visibility`
9. `google-ai-overviews-la-gi`
10. `schema-faq-cho-geo`

## Khi mua domain riêng
Sau này nếu bạn mua domain:
1. Tạo file `CNAME` chứa đúng domain của bạn, ví dụ:
   ```text
   geoviet.vn
   ```
2. Vào DNS nhà cung cấp domain và trỏ theo hướng dẫn GitHub Pages
3. Đổi lại các URL trong:
   - `index.html`
   - `checklist.html`
   - `tool.html`
   - `robots.txt`
   - `sitemap.xml`
   - `llms.txt`

## Mẹo tăng tốc tăng trưởng
- Viết answer-first, tránh mở bài dài
- Ưu tiên FAQ, checklist, comparison, tool nhỏ
- Dùng internal links dày giữa các trang cùng cụm chủ đề
- Giữ mỗi bài tập trung vào 1 intent chính
- Đừng spam bài AI mỏng
