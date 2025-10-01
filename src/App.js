import React from "react";
import "./App.css";
import avatar from "./avatar.jpg"; // Assume the image is saved locally as avatar.jpg

function App() {
  return (
    <div className="container">
      <header className="header">   
        <img src={avatar} alt="Hồ Văn Xuân Phước" className="avatar" />
        <h1>Hồ Văn Xuân Phước</h1>
        <p className="subtitle">
          Sinh viên năm thứ 5 chuyên ngành Công nghệ phần mềm - Hue University of Sciences - GPA 3.0
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <span role="img" aria-label="email">✉️</span> hovanxuanphuoc@gmail.com
          </div>
          <div className="contact-item">
            <span role="img" aria-label="birthday">ℹ️</span> 12/10/2003
          </div>
          <div className="contact-item">
            <span role="img" aria-label="phone">👤</span> 0818-819-509
          </div>
          <div className="contact-item">
            <span role="img" aria-label="location">📍</span> Thành phố Huế
          </div>
        </div>
      </header>

      <main>
        <section className="education">
          <h2>Học vấn</h2>
          <p>
            <strong>Trường Đại học Khoa học Huế</strong>{" "}
            <span>| Chuyên ngành Công nghệ phần mềm</span>
          </p>
          <p className="date-range">2021 - 2026</p>
          <ul>
            <li>GPA: 3.0/4.0</li>
            <li>Đạt 2 kì sinh viên xuất sắc liên tiếp</li>
            <li>Thành viên câu lạc bộ Lập trình (F-Code)</li>
            <li>Thành viên Đội Công tác xã hội</li>
          </ul>
        </section>

        <section className="work-experience">
          <h2>Kinh nghiệm làm việc</h2>
          <div className="job">
            <p>
              <strong>
                Nhân viên tư vấn part-time &nbsp;•&nbsp; FPT Telecom
              </strong>
            </p>
            <p className="date-range">11/2023 - 06/2024</p>
            <ul>
              <li>Giải thích cho khách hàng về các dịch vụ do FPT Telecom cung cấp</li>
              <li>Tìm kiếm và chăm sóc khách hàng tiềm năng</li>
            </ul>
          </div>

          <div className="job">
            <p>
              <strong>
                Lập trình viên part-time &nbsp;•&nbsp; Công ty TNHH MTV Brycen Việt Nam
              </strong>
            </p>
            <p className="date-range">01/2025 - Hiện tại</p>
            <ul>
              <li>Thiết kế lập trình các sản phẩm, chức năng và website nội bộ của công ty</li>
              <li>Hoàn thành các nhiệm vụ theo yêu cầu</li>
            </ul>
          </div>
        </section>

        <section className="projects-certifications">
          <div className="projects">
            <h2>Dự án</h2>
            <p><strong>In-Project</strong></p>
            <ul>
              <li>Tạo Web-app quản lý dự án</li>
              <li>Shopee Clone + Netflix Clone</li>
              <li>Covid-19 Tracker Website</li>
            </ul>
          </div>

          <div className="certifications">
            <h2>Chứng chỉ</h2>
            <button className="cert-btn">Chứng chỉ B1 VSTEP (07/2024)</button>
            
          </div>  
        </section>
      </main>

      <hr />
    </div>
  );
}

export default App;