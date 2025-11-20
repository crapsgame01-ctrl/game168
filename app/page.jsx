<!DOCTYPE html><html lang="th">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GAME168 - หน้าแรก</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
      background: #03050a;
      color: white;
      text-align: center;
    }header {
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

h1 {
  color: #4fd4ff;
  font-size: 40px;
  text-shadow: 0 0 10px #4fd4ff;
}

.btn {
  display: inline-block;
  margin: 10px;
  padding: 14px 28px;
  border: 2px solid white;
  border-radius: 10px;
  background: transparent;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}
.btn:hover {
  background: white;
  color: black;
}

.container {
  margin-top: 40px;
}

.section-box {
  width: 80%;
  margin: 20px auto;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 15px;
}

  </style>
</head>
<body><header>
  <h1>GAME168</h1>
  <p>ระบบกิจกรรม & สุ่มรางวัล</p>  <div>
    <button class="btn" id="loginBtn">เข้าสู่ระบบ</button>
    <button class="btn" id="signupBtn">สมัครสมาชิก</button>
    <button class="btn" id="logoutBtn">ออกจากระบบ</button>
  </div>
</header><div class="container">  <div class="section-box">
    <h2>🎯 แคมเปญและกิจกรรม</h2>
    <button class="btn">เข้าร่วมกิจกรรม</button>
    <button class="btn">ดูทั้งหมด</button>
  </div>  <div class="section-box">
    <h2>🎁 ระบบสุ่มรางวัล</h2>
    <button class="btn">สุ่มรางวัล</button>
  </div>  <div class="section-box">
    <h2>📊 อันดับผู้เล่น</h2>
    <button class="btn">ดูอันดับ</button>
  </div>  <div class="section-box">
    <h2>📚 ประวัติการใช้งาน</h2>
    <button class="btn">ดูประวัติ</button>
  </div></div><script>
// ปุ่มตัวอย่าง (คุณสามารถผูก Supabase ได้ทีหลัง)
document.getElementById('loginBtn').onclick = () => alert('เข้าสู่ระบบ');
document.getElementById('signupBtn').onclick = () => alert('สมัครสมาชิก');
document.getElementById('logoutBtn').onclick = () => alert('ออกจากระบบ');
</script></body>
</html>

</body>
</html>
