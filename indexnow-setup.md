# IndexNow Setup cho Bing

File này giải thích cách dùng IndexNow để ping Bing khi có URL mới.

## Key đang dùng
- **IndexNow key:** `1fafe5e3047fae5502b4a3d3709aa581`
- **Key file tại:** https://quanta-tect.github.io/geo-viet/1fafe5e3047fae5502b4a3d3709aa581.txt
- Nội dung key file chỉ là chính key đó, không có ký tự thừa.

## Ping Bing thủ công khi có URL mới
```text
https://www.bing.com/indexnow?url=https%3A%2F%2Fquanta-tect.github.io%2Fgeo-viet%2Fcach-len-chatgpt-search.html&key=1fafe5e3047fae5502b4a3d3709aa581
```

Thay thế `<FULL_URL>` bằng URL bài đầy đủ đã encode.

## Submit nhiều URL (JSON)
Nếu sau này muốn gửi hàng loạt:

```text
POST https://www.bing.com/indexnow
Content-Type: application/json

{
  "host": "quanta-tect.github.io",
  "key": "1fafe5e3047fae5502b4a3d3709aa581",
  "keyLocation": "https://quanta-tect.github.io/geo-viet/1fafe5e3047fae5502b4a3d3709aa581.txt",
  "urlList": [
    "https://quanta-tect.github.io/geo-viet/cach-len-chatgpt-search.html"
  ]
}
```

## Lưu ý
- File key phải nằm ở `https://<domain>/<key>.txt`.
- Sử dụng HTTPS cho cả key file và endpoint.
- IndexNow chỉ hỗ trợ Bing, không ảnh hưởng Google Search.
