/*
 * IPO
 * Input: fullName, tongThuNhapNam, soNguoiPhuThuoc, thuNhapChiuThue, tienThueThuNhapCaNhan
 *
 * process: *
 *  B1: Khai báo biến và gán lại giá trị
 *  B2: Tính thu nhập chịu thuế:
 *     thuNhapChiuThue = tongThuNhapNam - 40000000 - soNguoiPhuThuoc * 1600000
 *  B3: Sử dụng hàm điều kiện:
 * _ Nếu thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000 tienThueThuNhapCaNhan = thuNhapChiuThue * 0.05
 * _ Nếu thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000 tienThueThuNhapCaNhan = thuNhapChiuThue * 0.1;
 * _ Nếu thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000 tienThueThuNhapCaNhan = thuNhapChiuThue * 0.15
 * _ Nếu thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000 tienThueThuNhapCaNhan = thuNhapChiuThue * 0.2
 * _ Nếu thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000 tienThueThuNhapCaNhan = thuNhapChiuThue * 0.25
 * _ Nếu thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000 tienThueThuNhapCaNhan = thuNhapChiuThue * 0.3
 * Còn lại tienThueThuNhapCaNhan = thuNhapChiuThue * 0.35
 *
 * Output: Tiền thuế thu nhập cá nhân phải trả
 */

document.getElementById("thueThuNhap-btn").onclick = function () {
  let fullName = "";
  let tongThuNhapNam = 0;
  let soNguoiPhuThuoc = 0;
  let thuNhapChiuThue = 0;
  let tienThueThuNhapCaNhan = 0;

  fullName = document.getElementById("thueName").value;

  tongThuNhapNam = document.getElementById("tongThuNhap").value;

  soNguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value;

  thuNhapChiuThue =
    Number(tongThuNhapNam) - 4000000 - Number(soNguoiPhuThuoc) * 1600000;

  if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000) {
    tienThueThuNhapCaNhan = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    tienThueThuNhapCaNhan = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    tienThueThuNhapCaNhan = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    tienThueThuNhapCaNhan = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    tienThueThuNhapCaNhan = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    tienThueThuNhapCaNhan = thuNhapChiuThue * 0.3;
  } else {
    tienThueThuNhapCaNhan = thuNhapChiuThue * 0.35;
  }

  document.getElementById("thueResult").style.display = "block";
  document.getElementById(
    "thueResult"
  ).innerHTML = `Họ tên: ${fullName} <br> Số người phụ thuộc: ${soNguoiPhuThuoc} <br> Tiền phải đóng thuế là: ${tienThueThuNhapCaNhan.toLocaleString()} VND`;
};
