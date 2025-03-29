/**
 * IPO
 *
 * Input
 * khởi tạo biến và gán giá trị
 *
 *
 *
 * Process
 *
 *
 * Out
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

  if (kwhTieuThu >= 1 && kwhTieuThu <= 50) {
    tienDien = kwhTieuThu * 500;
  } else if (kwhTieuThu >= 51 && kwhTieuThu <= 100) {
    tienDien = (kwhTieuThu - 50) * 650 + 50 * 500;
  } else if (kwhTieuThu >= 101 && kwhTieuThu <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (kwhTieuThu - 100) * 850;
  } else if (kwhTieuThu >= 201 && kwhTieuThu <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (kwhTieuThu - 200) * 1100;
  } else {
    // nếu mà kwTieuThu là 0 break

    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kwhTieuThu - 350) * 1300;
    if (kwhTieuThu === 0) {
      tienDien = 0;
    }
  }

  document.getElementById("electricity-result").style.display = "block";
  document.getElementById(
    "electricity-result"
  ).innerHTML = `Họ tên: ${fullName} là ${tienDien}`;
};
