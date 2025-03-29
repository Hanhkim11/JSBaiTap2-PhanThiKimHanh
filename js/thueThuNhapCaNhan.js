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
  ).innerHTML = `Họ tên: ${fullName} là ${tienThueThuNhapCaNhan}`;
};
