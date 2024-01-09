import requests
from bs4 import BeautifulSoup
from docx import Document

# Đường dẫn đến file HTML
html_file_path = "min.html"

# Tạo một đối tượng Document của thư viện python-docx
doc = Document()

# Đọc nội dung của file HTML
with open(html_file_path, "r", encoding="utf-8") as html_file:
    html_content = html_file.read()

# Sử dụng BeautifulSoup để phân tích HTML
soup = BeautifulSoup(html_content, "html.parser")

# Lấy tất cả các thẻ hình (img) có thuộc tính src
image_links = [img["src"] for img in soup.find_all("img", src=True)]

# Lọc các liên kết ảnh bắt đầu bằng "https://upload-bbs.mihoyo.com/upload/"
filtered_links = [link for link in image_links if link.startswith("https://upload-bbs.mihoyo.com/upload/")]

# Thêm các liên kết ảnh vào tài liệu Word
for link in filtered_links:
    doc.add_paragraph(link)
    print(link)

# Lưu tài liệu Word
doc.save("image_links.docx")

print("Các liên kết ảnh đã được lưu vào file image_links.docx")
