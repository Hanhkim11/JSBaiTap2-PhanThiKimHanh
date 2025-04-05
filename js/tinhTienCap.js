/*
 * IPO
 *
 * Input: loaiKhachHang, maKhachHang, kenhCaoCap, soKetNoi, tienCap
 *
 * Process:
 * _ B1: Khai báo biến và gán lại giá trị
 * _ B2: Xét điều kiện:
 * Nếu khách hàng === doanh nghiệp:
 *  + soKetNoi >= 1 && soKetNoi <= 10 thì tiền kết nối = 75 * soKetNoi
 *  + soKetNoi > 10 thì tiền kết nối = (soKetNoi - 10) * 5 + (10 * 75)
 *  + tiền kênh cao cấp = 50
 * _ B3: Tính tiền cáp:
 * Nếu khách hàng === doanh nghiệp:
 * tienCap = (soKetNoi - 10) * 5 + (10 * 75) + (kenhCaoCap * 50)
 * Nếu khách hàng === cá nhân:
 * tienCap = 4.5 + 20.5 + 7.5 * kenhCaoCap
 *
 * Output: Tiền cáp phải trả
 */

document.getElementById("cable-btn").onclick = function () {
  let loaiKhachHang = "";
  let maKhachHang = "";
  let kenhCaoCap = 0;
  let soKetNoi = 0;
  let tienCap = 0;

  loaiKhachHang = document.getElementById("cableCustomerType").value;
  maKhachHang = document.getElementById("cableCustomer").value;
  kenhCaoCap = document.getElementById("cablePremiumChannels").value;
  kenhCaoCap = Number(kenhCaoCap);
  soKetNoi = document.getElementById("cablePremiumChannels").value;
  soKetNoi = Number(soKetNoi);

  if (loaiKhachHang === "business") {
    if (soKetNoi >= 1 && soKetNoi <= 10) {
      soKetNoi = 75;
    } else if (soKetNoi > 10) {
      soKetNoi = soKetNoi - 10 * 5 + 10 * 75;
    }
    kenhCaoCap = 50 * kenhCaoCap;
    tienCap = 15 + soKetNoi + kenhCaoCap;
  } else {
    if (kenhCaoCap < 0) {
      alert("Số kênh phải lớn hơn 0");
      return;
    }
    tienCap = 4.5 + 20.5 + 7.5 * kenhCaoCap;
  }

  document.getElementById("cable-result").style.display = "block";

  document.getElementById(
    "cable-result"
  ).innerHTML = `Mã khách hàng: ${maKhachHang} <br> Tiền phải trả là: ${tienCap.toLocaleString()} $;`;
};

document.getElementById("cableCustomerType").onchange = function () {
  let loaiKhachHang = "";

  loaiKhachHang = document.getElementById("cableCustomerType").value;
  console.log(loaiKhachHang);
  if (loaiKhachHang === "residential") {
    document.getElementById("cable-business-connection-group").style.display =
      "none";
  } else {
    document.getElementById("cable-business-connection-group").style.display =
      "block";
  }
};
