/*
 * IPO
 * Input: diemChuan, diemMon1, diemMon2, diemMon3, diemKhuVuc, diemDoiTuong
 *
 * process:
 * Hàm xét tuyển
 *  B1: lấy giá trị từ form
 *  B2: Tính tổng điểm
 *     tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong
 *  B3: xét tuyển:
 *  Nếu tongDiem >= diemChuan và (diem1, diem2, diem3) > 0 thì đậu
 *  Ngược lại: rớt
 *  B4: Hiển thị kết quả
 *
 * Output: đậu hay rớt
 */

const tinhTongDiem = (diem1, diem2, diem3, diemKhuVuc, diemDoiTuong) => {
  tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
  return tongDiem;
};

const xetTuyen = () => {
  let diemChuan = Number(document.getElementById("inputDiemChuan").value);
  let diem1 = Number(document.getElementById("inputDiem1").value);
  let diem2 = Number(document.getElementById("inputDiem2").value);
  let diem3 = Number(document.getElementById("inputDiem3").value);
  let diemKhuVuc = Number(document.getElementById("selectKhuVuc").value);
  let diemDoiTuong = Number(document.getElementById("selectDoiTuong").value);

  let tongDiem = tinhTongDiem(diem1, diem2, diem3, diemKhuVuc, diemDoiTuong);

  let result1 = document.getElementById("result1");

  let ketQua = `
      Điểm môn 1: ${diem1} <br>
      Điểm môn 2: ${diem2} <br>
      Điểm môn 3: ${diem3} <br>
      Điểm khu vực: ${diemKhuVuc} <br>
      Điểm đối tượng: ${diemDoiTuong} <br>
      <br>
  `;

  if (tongDiem >= diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0) {
    ketQua += `Bạn đã đậu! Tổng điểm: ${tongDiem}`;
    result1.innerHTML = ketQua;
    ketQua.style.color = "blue";
  } else {
    ketQua += `Bạn đã rớt. Tổng điểm: ${tongDiem}`;
    result1.innerHTML = ketQua;
    result1.style.color = "red";
  }
};

document.getElementById("btnSubmit1").onclick = xetTuyen;
