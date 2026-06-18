# Bynnom

Web local cho QA workspace, gồm trang home, QA Templates và Study Hub để ôn kiến thức QA/QC.

## Cấu trúc source

```text
.
├── index.html
├── qa-templates
│   └── index.html
├── it-tools
│   └── index.html
├── study-hub
│   └── index.html
├── assets
│   ├── data
│   │   └── knowledge.js
│   ├── images
│   │   └── logo.png
│   ├── scripts
│   │   ├── app.js
│   │   ├── auth.js
│   │   ├── back-to-top.js
│   │   ├── templates.js
│   │   ├── text-generator.js
│   │   └── theme.js
│   ├── styles
│   │   └── main.css
│   └── videos
│       └── homepage.mp4
└── README.md
```

## Chạy local

```bash
python3 -m http.server 5173
```

Mở trình duyệt tại:

```text
http://localhost:5173
```

Các trang chính:

- Home: `http://localhost:5173/`
- QA Templates: `http://localhost:5173/qa-templates/`
- IT Tools: `http://localhost:5173/it-tools/`
- Study Hub: `http://localhost:5173/study-hub/`

Study Hub yêu cầu đăng nhập từ home trước khi truy cập.

## Tính năng

- Xem kiến thức theo nhóm: HR, API, Automation, Scrum, SQL, Mobile/App...
- QA Templates có mẫu Release Confirmation để copy nhanh.
- IT Tools có Text Generator và Text Diff.
- Tìm kiếm không dấu.
- Đánh dấu từng mục là `Cần ôn` hoặc `Đã tự tin`.
- Flashcard để luyện nhớ nhanh.
- Quiz để tự trả lời rồi so sánh với gợi ý.
- Thêm kiến thức mới hoặc dán nhanh ghi chú từ Google Doc.
- Sửa trực tiếp các mục đã có bằng nút `Sửa` trên từng card.
- Nội dung hỗ trợ bullet/list đơn giản: `- ý`, `* ý`, `1. bước`.

## Dữ liệu

- Nội dung gốc được seed trong `assets/data/knowledge.js`.
- Nội dung bạn thêm, nội dung bạn sửa/xóa trên web, và trạng thái học được lưu trong `localStorage` của trình duyệt.
- Web tĩnh không thể tự ghi ngược vào file `assets/data/knowledge.js`. Nếu muốn lưu cứng vào source, hãy sửa trực tiếp file này hoặc đưa nội dung cho Codex cập nhật.
