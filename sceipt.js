// ฟังก์ชันสลับแท็บ (Tab Switcher)
function switchTab(tabName) {
    // 1. ซ่อนเนื้อหาทั้งหมดก่อน
    document.getElementById('money-section').classList.remove('active');
    document.getElementById('followers-section').classList.remove('active');
    
    // 2. เอาสถานะ active ออกจากปุ่มทั้งหมด
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 3. แสดงเนื้อหาที่เลือก
    if (tabName === 'money') {
        document.getElementById('money-section').classList.add('active');
        buttons[0].classList.add('active');
    } else {
        document.getElementById('followers-section').classList.add('active');
        buttons[1].classList.add('active');
    }
}

// --- โซนรับเงิน ---
function redeemMoney() {
    const input = document.getElementById('moneyInput');
    const result = document.getElementById('resultMoney');
    const code = input.value.trim().toUpperCase();

    result.textContent = "กำลังตรวจสอบ...";
    result.className = "result-msg";

    setTimeout(() => {
        // ใส่โค้ดเงินที่นี่
        if (code === "RICH" || code === "MONEY100") {
            showResult(result, "สำเร็จ! เงิน 100 บาท ถูกโอนเข้าบัญชีแล้ว", "success");
        } else {
            showResult(result, "โค้ดเงินไม่ถูกต้อง", "error");
        }
    }, 500);
}

// --- โซนรับผู้ติดตาม ---
function redeemFollow() {
    const input = document.getElementById('followInput');
    const result = document.getElementById('resultFollow');
    const code = input.value.trim().toUpperCase();

    result.textContent = "กำลังตรวจสอบ...";
    result.className = "result-msg";

    setTimeout(() => {
        // ใส่โค้ดผู้ติดตามที่นี่
        if (code === "FAMOUS" || code === "FOLLOW500") {
            showResult(result, "สำเร็จ! เพิ่มผู้ติดตาม 500 คน เรียบร้อย", "success");
        } else {
            showResult(result, "โค้ดผู้ติดตามไม่ถูกต้อง", "error");
        }
    }, 500);
}

// ฟังก์ชันช่วยแสดงผล
function showResult(element, message, type) {
    element.textContent = message;
    element.className = "result-msg " + type;
}

// กด Enter เพื่อส่งข้อมูลได้ทั้ง 2 ช่อง
document.getElementById('moneyInput').addEventListener('keypress', (e) => {
    if(e.key === 'Enter') redeemMoney();
});

document.getElementById('followInput').addEventListener('keypress', (e) => {
    if(e.key === 'Enter') redeemFollow();
});