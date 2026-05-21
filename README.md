# QC Interview Study Hub

Web local để ôn kiến thức QA/QC từ Google Doc.

## Chạy local

```bash
python3 -m http.server 5173
```

Mở trình duyệt tại:

```text
http://localhost:5173
```

## Tính năng

- Xem kiến thức theo nhóm: HR, API, Automation, Scrum, SQL, Mobile/App...
- Tìm kiếm không dấu.
- Đánh dấu từng mục là `Cần ôn` hoặc `Đã tự tin`.
- Flashcard để luyện nhớ nhanh.
- Quiz để tự trả lời rồi so sánh với gợi ý.
- Thêm kiến thức mới hoặc dán nhanh ghi chú từ Google Doc.
- Sửa trực tiếp các mục đã có bằng nút `Sửa` trên từng card.
- Nội dung hỗ trợ bullet/list đơn giản: `- ý`, `* ý`, `1. bước`.

## Dữ liệu

- Nội dung gốc được seed trong `data.js`.
- Nội dung bạn thêm, nội dung bạn sửa/xóa trên web, và trạng thái học được lưu trong `localStorage` của trình duyệt.
- Web tĩnh không thể tự ghi ngược vào file `data.js`. Nếu muốn lưu cứng vào source, hãy sửa trực tiếp `data.js` hoặc đưa nội dung cho Codex cập nhật file này.
