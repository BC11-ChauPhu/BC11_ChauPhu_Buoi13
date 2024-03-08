// TÍNH TIỀN LƯƠNG NHÂN VIÊN

// Inputs:
// + Số ngày làm

// Process: 
// + Khai báo giá trị lương 1 ngày, giá trị cố định
// + Lấy giá trị từ form 
// + Tiền lương = Lương 1 ngày * Số ngày 

// Output: 
// + Tiền lương

const luong1Ngay = 100000
let soNgay
let tienLuong = 0

let tinhTienLuong = () => {
    soNgay = document.getElementById('inputNgayLam').value
    tienLuong = (luong1Ngay * soNgay).toLocaleString()
    console.log(tienLuong)
    document.getElementById('resultTienLuong').innerHTML = (`Tiền Lương: ${tienLuong}`)
}

// TÍNH GIÁ TRỊ TRUNG BÌNH CỦA 5 SỐ

// Inputs:
// + 5 Số ngẫu nhiên

// Process:
// + Lấy giá trị từ form
// + Giá Trị Trung bình = (num1 + num2 + num3 + num4 + numb5) / 5

// // Output:
// + Giá Trị Trung bình

let num1 = 0
let num2 = 0
let num3 = 0
let num4 = 0
let num5 = 0
let giatriTrungBinh = 0

let tinhTrungBinh = () => {
    num1 = parseInt(document.getElementById('inputNum1').value)
    num2 = parseInt(document.getElementById('inputNum2').value)
    num3 = parseInt(document.getElementById('inputNum3').value)
    num4 = parseInt(document.getElementById('inputNum4').value)
    num5 = parseInt(document.getElementById('inputNum5').value)
     
    giatriTrungBinh = (num1 + num2 + num3 + num4 + num5) / 5

    document.getElementById('resultAvg').innerHTML = `Giá trị trung bình: ${giatriTrungBinh}`
}

// QUY ĐỔI TIỀN

// Inputs:
// + Số USD cần đổi

// Process:
// + Lấy giá trị từ form
// + VND = USD * 23.500

// Output:  
// + VND đã quy đổi

let USD = 0 
let exchangeRate = 23500

let quyDoiTien = () => {
    USD = parseInt(document.getElementById('inputUSD').value)
    let exchanged = (USD * exchangeRate).toLocaleString()
    document.getElementById('resultExchange').innerHTML = `${exchanged} VND`
}

// TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT

// Inputs:
// + Chiều dài 1, 2
// + Chiều rộng 1, 2

//Process:
// + Lấy giá trị từ form
// + Diện tích = chiều dài * chiều rộng
// + Chu vi = (chiều dài + chiều rộng) * 2

//Output:
// + Diện tích
// + Chu vi

let chieuDai = 0
let chieuRong = 0

let tinhHCN = () => {
    chieuDai = parseInt(document.getElementById('inputChieuDai').value)
    chieuRong = parseInt(document.getElementById('inputChieuRong').value)

    let dienTich = chieuDai * chieuRong
    let chuVi = (chieuDai + chieuRong) * 2

    document.getElementById('calcRectangle').innerHTML = `Diện tích: ${dienTich} <br> Chu vi: ${chuVi}`
}

// TÍNH TỔNG 2 KÝ SỐ

// Inputs: 
// + 1 số có 2 chữ số

// Process:

// + Lấy giá trị từ form
// + Số hàng đơn vị = Số % 10
// + Số hàng chục = Số / 10

// Output:
// + Sô hàng đơn vị + Số hàng chục
let soInput = 0
let hangDonVi = 0
let hangChuc = 0

let tinhKySo = () => {
    soInput = parseInt(document.getElementById('inputNumber').value)
    hangDonVi = soInput % 10
    hangChuc = Math.floor(soInput / 10)
    
    document.getElementById('resultKySo').innerHTML = `Tổng 2 ký số: ${hangDonVi + hangChuc}`
}