# Tool Đăng Ký Học Phần UIT (Fork)

> **Fork từ:** [tuankietcoderr/tool-dang-ky-hoc-phan-uit-new](https://github.com/tuankietcoderr/tool-dang-ky-hoc-phan-uit-new)
>
> Xin cảm ơn  **[@tuankietcoder](https://github.com/tuankietcoderr)** đã tạo ra công cụ hữu ích này!

Chrome Extension hỗ trợ đăng ký học phần tự động trên trang [dkhp.uit.edu.vn](https://dkhp.uit.edu.vn) của Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM.

---

## Khác biệt so với bản gốc

| Tính năng | Bản gốc | Bản fork này |
|-----------|---------|--------------|
| Lưu danh sách môn học | Không | Có (tự động lưu) |
| Popup xác nhận khi đăng ký | Có | Không |

### Chi tiết thay đổi:


1. **Tự động lưu danh sách môn học**
   - Sử dụng `chrome.storage.local` để lưu danh sách môn
   - Không cần nhập lại mỗi lần mở extension
   - Muốn sửa/xóa thì chỉ cần chỉnh trong textarea

2. **Bỏ popup xác nhận**
   - Click "Đăng ký" là chạy ngay, không hỏi lại

---

## Cài đặt Extension (Local)

### Bước 1: Tải source code

```bash
git clone https://github.com/longle325/tool-dang-ky-hoc-phan-uit-new.git
```

Hoặc tải ZIP từ GitHub và giải nén.

### Bước 2: Mở trang Extensions

- Mở Chrome, nhập vào thanh địa chỉ: `chrome://extensions/`

### Bước 3: Bật Developer mode

- Bật công tắc **"Developer mode"** ở góc trên bên phải

### Bước 4: Load extension

1. Click **"Load unpacked"**
2. Chọn thư mục `tool-dang-ky-hoc-phan-uit-new`
3. Click **"Select"**

### Bước 5: Ghim extension (tùy chọn)

- Click icon puzzle (🧩) → Ghim "Tool Đăng ký học phần UIT"

---

## Cách sử dụng

1. Vào **[dkhp.uit.edu.vn](https://dkhp.uit.edu.vn)** và đăng nhập
2. Click icon extension trên toolbar
3. Nhập mã lớp (mỗi dòng một mã):
   ```
   SE358.O11.PMCL
   SE100.O12.PMCL
   CS114.O11.KHCL
   ```
4. Click **"Đăng ký"**

---

## Credits

- **Tác giả gốc:** [tuankietcoder](https://github.com/tuankietcoderr)
- **Repository gốc:** [tool-dang-ky-hoc-phan-uit-new](https://github.com/tuankietcoderr/tool-dang-ky-hoc-phan-uit-new)
