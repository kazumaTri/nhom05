// Tạo nội dung động cho phần Kỹ năng
const skillsSection = document.getElementById("skills");
skillsSection.innerHTML = `
    <div class="row mt-5">
        <div class="col-md-12 text-center">
            <h2>KỸ NĂNG</h2>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">LẬP TRÌNH</h5>
                    <p class="card-text">
                        Thành thạo các ngôn ngữ lập trình Python, Java, C++. Có kinh nghiệm xây dựng và phát triển khai thác ứng dụng web.
                    </p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            80%
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">PHÂN TÍCH DỮ LIỆU</h5>
                    <p class="card-text">
                        Sử dụng các dữ liệu phân tích công cụ thành tích như SQL, Excel, Tableau.
                    </p>
                    <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                            60%
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">LÀM VIỆC NHÓM</h5>
                    <p class="card-text">
                        Có khả năng hoạt động hiệu quả trong môi trường đa dạng của nhóm.
                    </p>
                    <div class="progress">
                        <div class="progress-bar bg-info" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            90%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

// Tạo nội dung động cho phần Sở thích
const interestsSection = document.getElementById("interests");
interestsSection.innerHTML = `
    <div class="row mt-5">
        <div class="col-md-12 text-center">
            <h2>SỞ THÍCH CÁ NHÂN</h2>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-md-12">
            <ul>
                <li>ĐỌC SÁCH</li>
                <li>GAME</li>
                <li>ĐÁ BÓNG</li>
            </ul>
        </div>
    </div>
`;

// Tạo nội dung động cho phần Liên hệ
const contactSection = document.querySelector(".contact-section");
contactSection.innerHTML = `
    <div class="col-md-12 text-center">
        <h2>LIÊN HỆ</h2>
        <p>Email: trieunt@example.com</p>
        <p>Điện thoại: 0123456789</p>
    </div>
`;

// Tạo biểu đồ
const xArray = [
  "Điện toán di động",
  "Internet vạn vật (IoT)",
  "Trí tuệ nhân tạo (AI) và Học máy",
];
const yArray = [55, 49, 44];

const data = [
  {
    labels: xArray,
    values: yArray,
    type: "pie",
    marker: {
      colors: ["#FF5733", "#3498DB", "#2ECC71"],
    },
    textinfo: "label+percent",
    hoverinfo: "label+percent+value",
  },
];

const layout = {
  title: "THÀNH TỰU",
  font: {
    family: "Matemasie, sans-serif",
  },
};

Plotly.newPlot("myPlot", data, layout);
