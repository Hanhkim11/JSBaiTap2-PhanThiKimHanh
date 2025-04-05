/*
 * IPO
 * Input:  fullName, kwhTieuThu
 *
 * Process:
 * + B1: Khai báo biến và gán lại giá trị
 * + B2: Tính số kwh điện tiêu thụ
 * + B3: sử dụng các hàm điều kiện:
 * _ Nếu kwhTieuThu > 0 && kwhTieuThu <=50 thì tiền điện = kwhTieuThu * 500
 * _ Nếu kwhTieuThu >=51 && kwhTieuThu <=100 thì tiền điện = (kwhTieuThu -50) * 650 + (50 *500)
 * _ Nếu kwhTieuThu kwhTieuThu >= 101 && kwhTieuThu <= 200 thì tiền điện = 50 * 500 + 50 * 650 + (kwhTieuThu - 100) * 850
 *_ Nếu kwhTieuThu >= 201 && kwhTieuThu <= 350 thì tiền điện = 50 * 500 + 50 * 650 + 100 * 850 + (kwhTieuThu - 200) * 1100
 * _ Còn lại tiền điện = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kwhTieuThu - 350) * 1300
 *
 * Out: kết quả số tiền điện phải trả
 *
 *
 */

document.getElementById("electricity-btn").onclick = function () {
  let fullName = "";
  let kwhTieuThu = 0;
  let tienDien = 0;

  fullName = document.getElementById("electricity-name").value;

  kwhTieuThu = document.getElementById("electricity-usage").value;

  kwhTieuThu = Number(kwhTieuThu);

  if (kwhTieuThu > 0 && kwhTieuThu <= 50) {
    tienDien = kwhTieuThu * 500;
  } else if (kwhTieuThu >= 51 && kwhTieuThu <= 100) {
    tienDien = (kwhTieuThu - 50) * 650 + 50 * 500;
  } else if (kwhTieuThu >= 101 && kwhTieuThu <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (kwhTieuThu - 100) * 850;
  } else if (kwhTieuThu >= 201 && kwhTieuThu <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (kwhTieuThu - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kwhTieuThu - 350) * 1300;
    if (kwhTieuThu === 0) {
      tienDien = 0;
    }
  }

  document.getElementById("electricity-result").style.display = "block";
  document.getElementById(
    "electricity-result"
  ).innerHTML = `Họ tên: ${fullName} <br> Số tiền phải đóng là: ${tienDien.toLocaleString()} VND`;
};
