import requests
from bs4 import BeautifulSoup
from docx import Document

# Thông tin đăng nhập của bạn
username = "trieuduytancbg@gmail.com"
password = "mihoyo2003"

# Tạo một phiên đăng nhập để duy trì trạng thái đăng nhập
# URL của trang đăng nhập
login_url = "https://www.hoyolab.com/account/ajaxGetTempToken?lang=vn"

# Tạo session để duy trì trạng thái đăng nhập
session = requests.Session()

# Tạo dữ liệu đăng nhập
login_data = {
    "account": username,
    "password": password,
    "remLogin": "true",
}

# Thực hiện đăng nhập
login_response = session.post(login_url, data=login_data)

# Kiểm tra xem đăng nhập có thành công hay không
if "success" in login_response.text:
    print("Đăng nhập thành công!")

    # URL của trang web cần truy cập sau khi đăng nhập
    url = "https://www.hoyolab.com/assets/mine"

    # Tải nội dung của trang web
    response = session.get(url)
    html_content = response.text

    # Phân tích HTML bằng BeautifulSoup
    soup = BeautifulSoup(html_content, "html.parser")

    # Tìm tất cả các thẻ <img> trong trang web
    img_tags = soup.find_all("img")

    # Lọc các link ảnh bắt đầu bằng "https://upload-bbs.mihoyo.com/upload/"
    image_links = [img["src"] for img in img_tags if img.has_attr("src") and img["src"].startswith("https://upload-bbs.mihoyo.com/upload/")]

    if not image_links:
        print("Không tìm thấy link hình ảnh thỏa mãn điều kiện.")
    else:
        # Tạo một tài liệu Word
        doc = Document()

        # Thêm các link vào tài liệu Word
        for link in image_links:
            doc.add_paragraph(link)

        # Lưu tài liệu Word vào file
        doc.save("image_links.docx")

        print("Các link đã được lưu vào file image_links.docx")
else:
    print("Đăng nhập không thành công. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.")
