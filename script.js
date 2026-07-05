// --- ข้อมูลสูตรคณิตศาสตร์ทั้งหมด ---
const formulasData = [
  // --- สมการและระบบสมการ ---
  { id: 110, category: 'สมการและระบบสมการ', subCategory: 'สมการและระบบสมการเชิงเส้น', name: 'สมการเชิงเส้นตัวแปรเดียว', formula: 'ax + b = 0  =>  x = -b / a' },
  { id: 111, category: 'สมการและระบบสมการ', subCategory: 'สมการและระบบสมการเชิงเส้น', name: 'ระบบสมการเชิงเส้น 2 ตัวแปร', formula: 'a₁x + b₁y = c₁  และ  a₂x + b₂y = c₂' },
  { id: 112, category: 'สมการและระบบสมการ', subCategory: 'สมการกำลังสอง', name: 'สมการกำลังสองตัวแปรเดียว', formula: 'ax² + bx + c = 0  =>  x = [-b ± √(b² - 4ac)] / 2a' },
  { id: 113, category: 'สมการและระบบสมการ', subCategory: 'สมการพหุนามดีกรีสูง', name: 'ทฤษฎีบทเศษเหลือ (Remainder Theorem)', formula: 'หาร P(x) ด้วย (x - c) จะเหลือเศษ R = P(c)' },
  { id: 114, category: 'สมการและระบบสมการ', subCategory: 'สมการพหุนามดีกรีสูง', name: 'ทฤษฎีบทตัวประกอบ (Factor Theorem)', formula: '(x - c) เป็นตัวประกอบของ P(x) ก็ต่อเมื่อ P(c) = 0' },
  { id: 115, category: 'สมการและระบบสมการ', subCategory: 'สมการเส้นตรง', name: 'สมการเส้นตรง (Slope-Intercept Form)', formula: 'y = mx + c  (m = ความชัน, c = จุดตัดแกน y)' },
  { id: 116, category: 'สมการและระบบสมการ', subCategory: 'สมการเส้นตรง', name: 'สมการเส้นตรง (Standard Form)', formula: 'Ax + By + C = 0  (ความชัน m = -A/B)' },
  { id: 117, category: 'สมการและระบบสมการ', subCategory: 'สมการภาคตัดกรวย', name: 'สมการวงกลม (จุดศูนย์กลางอยู่ที่ h, k)', formula: '(x - h)² + (y - k)² = r²' },
  { id: 118, category: 'สมการและระบบสมการ', subCategory: 'สมการภาคตัดกรวย', name: 'สมการพาราโบลา (หงาย-คว่ำ)', formula: '(x - h)² = 4c(y - k)  (c > 0 หงาย, c < 0 คว่ำ)' },
  { id: 119, category: 'สมการและระบบสมการ', subCategory: 'สมการภาคตัดกรวย', name: 'สมการพาราโบลา (ตะแคงซ้าย-ขวา)', formula: '(y - k)² = 4c(x - h)  (c > 0 ตะแคงขวา, c < 0 ตะแคงซ้าย)' },
  { id: 120, category: 'สมการและระบบสมการ', subCategory: 'สมการภาคตัดกรวย', name: 'สมการวงรี (แกนเอกขนานแกน x)', formula: '[(x - h)² / a²] + [(y - k)² / b²] = 1  (a > b)' },
  { id: 121, category: 'สมการและระบบสมการ', subCategory: 'สมการภาคตัดกรวย', name: 'สมการไฮเพอร์โบลา (เปิดซ้าย-ขวา)', formula: '[(x - h)² / a²] - [(y - k)² / b²] = 1' },
  { id: 122, category: 'สมการและระบบสมการ', subCategory: 'อสมการ', name: 'สมบัติการไม่เท่ากัน (คูณด้วยค่าลบ)', formula: 'ถ้า a < b และ c < 0  =>  ac > bc (เครื่องหมายสลับฝั่ง)' },

  // --- พีชคณิต ---
  { id: 1, category: 'พีชคณิต', subCategory: 'พหุนามและแยกตัวประกอบ', name: 'กำลังสองสมบูรณ์ (บวก)', formula: '(a + b)² = a² + 2ab + b²' },
  { id: 2, category: 'พีชคณิต', subCategory: 'พหุนามและแยกตัวประกอบ', name: 'กำลังสองสมบูรณ์ (ลบ)', formula: '(a - b)² = a² - 2ab + b²' },
  { id: 3, category: 'พีชคณิต', subCategory: 'พหุนามและแยกตัวประกอบ', name: 'ผลต่างกำลังสอง', formula: 'a² - b² = (a - b)(a + b)' },
  { id: 4, category: 'พีชคณิต', subCategory: 'พหุนามและแยกตัวประกอบ', name: 'ผลบวกกำลังสาม', formula: 'a³ + b³ = (a + b)(a² - ab + b²)' },
  { id: 5, category: 'พีชคณิต', subCategory: 'พหุนามและแยกตัวประกอบ', name: 'ผลต่างกำลังสาม', formula: 'a³ - b³ = (a - b)(a² + ab + b²)' },
  { id: 6, category: 'พีชคณิต', subCategory: 'สมการกำลังสอง', name: 'สูตรหาค่าสมการกำลังสอง', formula: 'x = (-b ± √(b² - 4ac)) / 2a' },
  
  // --- เรขาคณิต ---
  { id: 7, category: 'เรขาคณิต', subCategory: 'พื้นที่ (2 มิติ)', name: 'พื้นที่สามเหลี่ยม', formula: '½ × ฐาน × สูง' },
  { id: 8, category: 'เรขาคณิต', subCategory: 'พื้นที่ (2 มิติ)', name: 'พื้นที่สี่เหลี่ยมผืนผ้า', formula: 'กว้าง × ยาว' },
  { id: 9, category: 'เรขาคณิต', subCategory: 'พื้นที่ (2 มิติ)', name: 'พื้นที่วงกลม', formula: 'πr²' },
  { id: 10, category: 'เรขาคณิต', subCategory: 'เส้นรอบรูป (2 มิติ)', name: 'เส้นรอบวงกลม', formula: '2πr' },
  { id: 35, category: 'เรขาคณิต', subCategory: 'พื้นที่ (2 มิติ)', name: 'พื้นที่สี่เหลี่ยมจัตุรัส', formula: 'ด้าน × ด้าน' },
  { id: 36, category: 'เรขาคณิต', subCategory: 'พื้นที่ (2 มิติ)', name: 'พื้นที่สี่เหลี่ยมด้านขนาน', formula: 'ฐาน × สูง' },
  { id: 37, category: 'เรขาคณิต', subCategory: 'พื้นที่ (2 มิติ)', name: 'พื้นที่สี่เหลี่ยมคางหมู', formula: '½ × ผลบวกด้านคู่ขนาน × สูง' },
  { id: 38, category: 'เรขาคณิต', subCategory: 'พื้นที่ (2 มิติ)', name: 'พื้นที่สี่เหลี่ยมขนมเปียกปูน/รูปว่าว', formula: '½ × ผลคูณของเส้นทแยงมุม' },
  { id: 39, category: 'เรขาคณิต', subCategory: 'พื้นที่ (2 มิติ)', name: 'พื้นที่สามเหลี่ยมด้านเท่า', formula: '(√3 / 4) × ด้าน²' },
  { id: 12, category: 'เรขาคณิต', subCategory: 'ทฤษฎีบท', name: 'ทฤษฎีบทพีทาโกรัส', formula: 'a² + b² = c²' },
  { id: 11, category: 'เรขาคณิต', subCategory: 'ปริมาตรและพื้นที่ผิว (3 มิติ)', name: 'ปริมาตรทรงกลม', formula: '(4/3)πr³' },
  { id: 40, category: 'เรขาคณิต', subCategory: 'ปริมาตรและพื้นที่ผิว (3 มิติ)', name: 'ปริมาตรสี่เหลี่ยมมุมฉาก', formula: 'กว้าง × ยาว × สูง' },
  { id: 41, category: 'เรขาคณิต', subCategory: 'ปริมาตรและพื้นที่ผิว (3 มิติ)', name: 'ปริมาตรทรงกระบอก', formula: 'πr²h' },
  { id: 42, category: 'เรขาคณิต', subCategory: 'ปริมาตรและพื้นที่ผิว (3 มิติ)', name: 'ปริมาตรกรวย', formula: '(1/3)πr²h' },
  { id: 43, category: 'เรขาคณิต', subCategory: 'ปริมาตรและพื้นที่ผิว (3 มิติ)', name: 'ปริมาตรพีระมิด', formula: '(1/3) × พื้นที่ฐาน × สูงตรง' },
  { id: 44, category: 'เรขาคณิต', subCategory: 'ปริมาตรและพื้นที่ผิว (3 มิติ)', name: 'พื้นที่ผิวทรงกระบอก', formula: '2πrh + 2πr²' },
  { id: 45, category: 'เรขาคณิต', subCategory: 'ปริมาตรและพื้นที่ผิว (3 มิติ)', name: 'พื้นที่ผิวทรงกลม', formula: '4πr²' },

  // --- ตรีโกณมิติ ---
  { id: 13, category: 'ตรีโกณมิติ', subCategory: 'เอกลักษณ์ตรีโกณมิติ', name: 'เอกลักษณ์พื้นฐาน (sin, cos)', formula: 'sin²(θ) + cos²(θ) = 1' },
  { id: 14, category: 'ตรีโกณมิติ', subCategory: 'เอกลักษณ์ตรีโกณมิติ', name: 'เอกลักษณ์พื้นฐาน (tan, sec)', formula: '1 + tan²(θ) = sec²(θ)' },
  { id: 15, category: 'ตรีโกณมิติ', subCategory: 'กฎของรูปสามเหลี่ยม', name: 'กฎของไซน์ (Law of Sines)', formula: 'a/sin(A) = b/sin(B) = c/sin(C)' },
  { id: 16, category: 'ตรีโกณมิติ', subCategory: 'กฎของรูปสามเหลี่ยม', name: 'กฎของโคไซน์ (Law of Cosines)', formula: 'c² = a² + b² - 2ab·cos(C)' },

  // --- แคลคูลัส ---
  { id: 17, category: 'แคลคูลัส', subCategory: 'อนุพันธ์ (Differentiation)', name: 'อนุพันธ์ของค่าคงที่', formula: 'd/dx [c] = 0' },
  { id: 18, category: 'แคลคูลัส', subCategory: 'อนุพันธ์ (Differentiation)', name: 'กฎเลขชี้กำลัง (Power Rule)', formula: 'd/dx [xⁿ] = n·xⁿ⁻¹' },
  { id: 19, category: 'แคลคูลัส', subCategory: 'อนุพันธ์ (Differentiation)', name: 'กฎผลคูณ (Product Rule)', formula: 'd/dx [u·v] = u·v\' + v·u\'' },
  { id: 20, category: 'แคลคูลัส', subCategory: 'ปริพันธ์ (Integration)', name: 'อินทิเกรตพื้นฐาน', formula: '∫ xⁿ dx = (xⁿ⁺¹)/(n+1) + C' },

  // --- สถิติ ---
  { id: 21, category: 'สถิติ', subCategory: 'ค่ากลางและการกระจายข้อมูล', name: 'ค่าเฉลี่ยเลขคณิต (Mean)', formula: 'x̄ = (Σx) / n' },
  { id: 22, category: 'สถิติ', subCategory: 'ค่ากลางและการกระจายข้อมูล', name: 'ความแปรปรวน (Variance)', formula: 'σ² = Σ(x - μ)² / n' },
  { id: 23, category: 'สถิติ', subCategory: 'ค่ากลางและการกระจายข้อมูล', name: 'ส่วนเบี่ยงเบนมาตรฐาน (SD)', formula: 'σ = √(Σ(x - μ)² / n)' },

  // --- ลำดับและอนุกรม ---
  { id: 24, category: 'ลำดับและอนุกรม', subCategory: 'ลำดับและอนุกรมเลขคณิต', name: 'พจน์ทั่วไปลำดับเลขคณิต', formula: 'aₙ = a₁ + (n - 1)d' },
  { id: 25, category: 'ลำดับและอนุกรม', subCategory: 'ลำดับและอนุกรมเลขคณิต', name: 'ผลบวกอนุกรมเลขคณิต', formula: 'Sₙ = (n/2)(a₁ + aₙ)' },
  { id: 26, category: 'ลำดับและอนุกรม', subCategory: 'ลำดับและอนุกรมเลขคณิต', name: 'ผลบวกอนุกรมเลขคณิต (แบบที่ 2)', formula: 'Sₙ = (n/2)[2a₁ + (n - 1)d]' },
  { id: 27, category: 'ลำดับและอนุกรม', subCategory: 'ลำดับและอนุกรมเรขาคณิต', name: 'พจน์ทั่วไปลำดับเรขาคณิต', formula: 'aₙ = a₁rⁿ⁻¹' },
  { id: 28, category: 'ลำดับและอนุกรม', subCategory: 'ลำดับและอนุกรมเรขาคณิต', name: 'ผลบวกอนุกรมเรขาคณิต', formula: 'Sₙ = a₁(1 - rⁿ) / (1 - r)' },
  { id: 29, category: 'ลำดับและอนุกรม', subCategory: 'ลำดับและอนุกรมเรขาคณิต', name: 'อนุกรมเรขาคณิตอนันต์ (|r| < 1)', formula: 'S∞ = a₁ / (1 - r)' },

  // --- ร้อยละและเปอร์เซ็นต์ ---
  { id: 30, category: 'ร้อยละและเปอร์เซ็นต์', subCategory: 'ร้อยละพื้นฐาน', name: 'หาค่าร้อยละ (%)', formula: '(ส่วน / ทั้งหมด) × 100%' },
  { id: 31, category: 'ร้อยละและเปอร์เซ็นต์', subCategory: 'ร้อยละพื้นฐาน', name: 'หาค่าจากเปอร์เซ็นต์', formula: '(เปอร์เซ็นต์ / 100) × จำนวนทั้งหมด' },
  { id: 32, category: 'ร้อยละและเปอร์เซ็นต์', subCategory: 'ร้อยละพื้นฐาน', name: 'เปอร์เซ็นต์การเปลี่ยนแปลง', formula: '((ค่าใหม่ - ค่าเดิม) / ค่าเดิม) × 100%' },
  { id: 33, category: 'ร้อยละและเปอร์เซ็นต์', subCategory: 'การซื้อขายและภาษี', name: 'ราคาหลังหักส่วนลด', formula: 'ราคาเดิม × (1 - (ส่วนลด% / 100))' },
  { id: 34, category: 'ร้อยละและเปอร์เซ็นต์', subCategory: 'การซื้อขายและภาษี', name: 'ราคารวมภาษี (VAT)', formula: 'ราคาเดิม × (1 + (ภาษี% / 100))' },

  // --- เลขยกกำลังและลอการิทึม ---
  { id: 46, category: 'เลขยกกำลังและลอการิทึม', subCategory: 'สมบัติเลขยกกำลัง', name: 'กฎการคูณเลขยกกำลัง', formula: 'aᵐ × aⁿ = a⁽ᵐ⁺ⁿ⁾' },
  { id: 47, category: 'เลขยกกำลังและลอการิทึม', subCategory: 'สมบัติเลขยกกำลัง', name: 'กฎการหารเลขยกกำลัง', formula: 'aᵐ ÷ aⁿ = a⁽ᵐ⁻ⁿ⁾' },
  { id: 48, category: 'เลขยกกำลังและลอการิทึม', subCategory: 'สมบัติเลขยกกำลัง', name: 'เลขยกกำลังซ้อน', formula: '(aᵐ)ⁿ = aᵐⁿ' },
  { id: 123, category: 'เลขยกกำลังและลอการิทึม', subCategory: 'สมบัติเลขยกกำลัง', name: 'เลขยกกำลังศูนย์', formula: 'a⁰ = 1  (เมื่อ a ≠ 0)' },
  { id: 124, category: 'เลขยกกำลังและลอการิทึม', subCategory: 'สมบัติเลขยกกำลัง', name: 'เลขชี้กำลังติดลบ', formula: 'a⁻ⁿ = 1 / aⁿ' },
  { id: 125, category: 'เลขยกกำลังและลอการิทึม', subCategory: 'สมบัติเลขยกกำลัง', name: 'กำลังของผลคูณ', formula: '(ab)ⁿ = aⁿ · bⁿ' },
  { id: 126, category: 'เลขยกกำลังและลอการิทึม', subCategory: 'สมบัติเลขยกกำลัง', name: 'กำลังของผลหาร', formula: '(a/b)ⁿ = aⁿ / bⁿ' },
  { id: 127, category: 'เลขยกกำลังและลอการิทึม', subCategory: 'สมบัติเลขยกกำลัง', name: 'เลขชี้กำลังเป็นเศษส่วน (กรณฑ์)', formula: 'a^(m/n) = ⁿ√(aᵐ)' },
  { id: 49, category: 'เลขยกกำลังและลอการิทึม', subCategory: 'สมบัติลอการิทึม', name: 'ผลบวกลอการิทึม', formula: 'logₐ(x) + logₐ(y) = logₐ(xy)' },
  { id: 50, category: 'เลขยกกำลังและลอการิทึม', subCategory: 'สมบัติลอการิทึม', name: 'ผลต่างลอการิทึม', formula: 'logₐ(x) - logₐ(y) = logₐ(x/y)' },
  { id: 51, category: 'เลขยกกำลังและลอการิทึม', subCategory: 'สมบัติลอการิทึม', name: 'ตบเลขชี้กำลังลอการิทึม', formula: 'logₐ(xⁿ) = n·logₐ(x)' },

  // --- เซตและความน่าจะเป็น ---
  { id: 52, category: 'เซตและความน่าจะเป็น', subCategory: 'เซต', name: 'จำนวนสมาชิก 2 เซต', formula: 'n(A∪B) = n(A) + n(B) - n(A∩B)' },
  { id: 53, category: 'เซตและความน่าจะเป็น', subCategory: 'ความน่าจะเป็นและการนับ', name: 'ความน่าจะเป็นของเหตุการณ์', formula: 'P(E) = n(E) / n(S)' },
  { id: 210, category: 'เซตและความน่าจะเป็น', subCategory: 'แฟกทอเรียลและการจัดหมู่', name: 'นิยามแฟกทอเรียล (Factorial Definition)', formula: 'n! = n · (n-1) · (n-2) · ... · 3 · 2 · 1' },
  { id: 211, category: 'เซตและความน่าจะเป็น', subCategory: 'แฟกทอเรียลและการจัดหมู่', name: 'ศูนย์แฟกทอเรียล (Zero Factorial)', formula: '0! = 1' },
  { id: 212, category: 'เซตและความน่าจะเป็น', subCategory: 'แฟกทอเรียลและการจัดหมู่', name: 'ความสัมพันธ์เวียนเกิดแฟกทอเรียล', formula: 'n! = n · (n-1)!' },
  { id: 213, category: 'เซตและความน่าจะเป็น', subCategory: 'แฟกทอเรียลและการจัดหมู่', name: 'การเรียงสับเปลี่ยนเชิงเส้นทั้งหมด', formula: 'P(n) = n!' },
  { id: 54, category: 'เซตและความน่าจะเป็น', subCategory: 'แฟกทอเรียลและการจัดหมู่', name: 'การเรียงสับเปลี่ยนเชิงเส้นบางส่วน (Permutation)', formula: 'P(n,r) = n! / (n-r)!' },
  { id: 55, category: 'เซตและความน่าจะเป็น', subCategory: 'แฟกทอเรียลและการจัดหมู่', name: 'การจัดหมู่ (Combination)', formula: 'C(n,r) = n! / ((n-r)! · r!)' },
  { id: 214, category: 'เซตและความน่าจะเป็น', subCategory: 'แฟกทอเรียลและการจัดหมู่', name: 'สมบัติการเลือกแบบสมมาตร', formula: 'C(n,r) = C(n, n-r)' },
  { id: 215, category: 'เซตและความน่าจะเป็น', subCategory: 'แฟกทอเรียลและการจัดหมู่', name: 'การเรียงสับเปลี่ยนของซ้ำกัน', formula: 'n! / (n₁! · n₂! · ... · nₖ!)' },
  { id: 216, category: 'เซตและความน่าจะเป็น', subCategory: 'แฟกทอเรียลและการจัดหมู่', name: 'การเรียงสับเปลี่ยนเชิงวงกลม (2D)', formula: '(n-1)!' },
  { id: 217, category: 'เซตและความน่าจะเป็น', subCategory: 'แฟกทอเรียลและการจัดหมู่', name: 'การเรียงสับเปลี่ยนเชิงวงกลม 3 มิติ (พวงกุญแจ)', formula: '(n-1)! / 2' },
  { id: 218, category: 'เซตและความน่าจะเป็น', subCategory: 'แฟกทอเรียลและการจัดหมู่', name: 'ขอบเขตค่าของการจัดหมู่', formula: 'C(n,0) = C(n,n) = 1' },
  { id: 219, category: 'เซตและความน่าจะเป็น', subCategory: 'แฟกทอเรียลและการจัดหมู่', name: 'ทฤษฎีบททวินาม (Binomial Theorem)', formula: '(x + y)ⁿ = Σ [C(n,r) · x^(n-r) · yʳ]' },
  { id: 220, category: 'เซตและความน่าจะเป็น', subCategory: 'แฟกทอเรียลและการจัดหมู่', name: 'สูตรประมาณค่าสเตอร์ลิง (Stirling\'s)', formula: 'n! ≈ √(2πn) · (n/e)ⁿ' },

  // --- โจทย์ปัญหา (กฟผ. / ก.พ.) ---
  { id: 56, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'การเคลื่อนที่และความเร็ว', name: 'ความเร็ว ระยะทาง เวลา', formula: 'ระยะทาง(S) = ความเร็ว(v) × เวลา(t)' },
  { id: 57, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'การเคลื่อนที่และความเร็ว', name: 'หาเวลา รถวิ่งสวนกัน', formula: 'เวลา = ระยะทางรวม / (v₁ + v₂)' },
  { id: 58, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'การเคลื่อนที่และความเร็ว', name: 'หาเวลา รถวิ่งตามกัน', formula: 'เวลา = ระยะทางรวม / |v₁ - v₂|' },
  { id: 59, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'อัตราการทำงาน (คน-วัน-งาน)', name: 'ทำงานร่วมกัน 2 คน (หาเวลา)', formula: 'เวลาเสร็จ = (t₁ × t₂) / (t₁ + t₂)' },
  { id: 71, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'อัตราการทำงาน (คน-วัน-งาน)', name: 'สมการงานพื้นฐาน', formula: 'ปริมาณงาน = อัตราการทำงาน × เวลา' },
  { id: 72, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'อัตราการทำงาน (คน-วัน-งาน)', name: 'คน-วัน-งาน (เทียบสัดส่วน)', formula: '(คน₁ × วัน₁ × ชม.₁) / งาน₁ = (คน₂ × วัน₂ × ชม.₂) / งาน₂' },
  { id: 73, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'อัตราการทำงาน (คน-วัน-งาน)', name: 'ทำงานร่วมกัน 3 คนขึ้นไป', formula: '1/t(รวม) = 1/t₁ + 1/t₂ + 1/t₃ + ...' },
  { id: 74, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'อัตราการทำงาน (คน-วัน-งาน)', name: 'ทำงานสวนทางกัน (เช่น ท่อน้ำเข้า-ออก)', formula: 'เวลาเสร็จ = (t₁ × t₂) / |t₁ - t₂|' },
  { id: 75, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'อัตราการทำงาน (คน-วัน-งาน)', name: 'ทำงานไม่พร้อมกัน (มีคนออก/เข้ากลางคัน)', formula: 'Σ(เวลาที่ทำจริง / เวลาที่ทำเสร็จคนเดียว) = 1 (งานเสร็จ)' },
  { id: 60, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ดอกเบี้ยและการเงิน', name: 'ดอกเบี้ยคงต้น (Simple Interest)', formula: 'I = P × r × t  (I: ดอกเบี้ย, P: เงินต้น, r: อัตราดอกเบี้ย/ปี, t: เวลา/ปี)' },
  { id: 200, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ดอกเบี้ยและการเงิน', name: 'เงินรวม ดอกเบี้ยคงต้น', formula: 'A = P(1 + rt)  (A: เงินรวม, P: เงินต้น, r: อัตราดอกเบี้ย/ปี, t: เวลา/ปี)' },
  { id: 201, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ดอกเบี้ยและการเงิน', name: 'ดอกเบี้ยทบต้น ปลายงวดรายปี (Compound Interest)', formula: 'A = P(1 + r)ⁿ  (A: เงินรวม, P: เงินต้น, r: อัตราดอกเบี้ย/ปี, n: จำนวนปี)' },
  { id: 202, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ดอกเบี้ยและการเงิน', name: 'ดอกเบี้ยทบต้น k ครั้งต่อปี', formula: 'A = P(1 + r/k)^(k·n)  (k: จำนวนครั้งทบต้น/ปี, n: จำนวนปี)' },
  { id: 203, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ดอกเบี้ยและการเงิน', name: 'ดอกเบี้ยทบต้นต่อเนื่อง (Continuous Compounding)', formula: 'A = P · e^(r·t)  (e ≈ 2.71828, r: อัตราดอกเบี้ย/ปี, t: เวลา/ปี)' },
  { id: 204, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ดอกเบี้ยและการเงิน', name: 'เงินรวมปลายงวดรายปี (FV of Ordinary Annuity)', formula: 'FV = R · [((1 + r)ⁿ - 1) / r]  (FV: เงินรวม, R: เงินงวด, r: ดอกเบี้ย, n: จำนวนงวด)' },
  { id: 205, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ดอกเบี้ยและการเงิน', name: 'มูลค่าปัจจุบันของเงินงวด (PV of Ordinary Annuity)', formula: 'PV = R · [(1 - (1 + r)⁻ⁿ) / r]  (PV: มูลค่าปัจจุบัน, R: เงินงวด, r: ดอกเบี้ย, n: จำนวนงวด)' },
  { id: 206, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ดอกเบี้ยและการเงิน', name: 'อัตราดอกเบี้ยแท้จริงต่อปี (Effective Annual Rate - EAR)', formula: 'EAR = (1 + r/k)ᵏ - 1  (r: อัตราดอกเบี้ยตามปี, k: จำนวนครั้งทบต้น/ปี)' },
  { id: 61, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ของผสม', name: 'ความเข้มข้นของผสม (2 ชนิด)', formula: 'C(รวม) = (C₁V₁ + C₂V₂) / (V₁ + V₂)  (C: ความเข้มข้น %, V: ปริมาตร)' },
  { id: 230, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ของผสม', name: 'ความเข้มข้นของผสม (หลายชนิด)', formula: 'C(รวม) = Σ(CᵢVᵢ) / Σ(Vᵢ)  (C(รวม)·V(รวม) = C₁V₁ + C₂V₂ + ...)' },
  { id: 231, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ของผสม', name: 'ปริมาณเนื้อสารในสารละลาย', formula: 'เนื้อสาร = ปริมาตรรวม(V) × (ความเข้มข้น(C) / 100)' },
  { id: 232, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ของผสม', name: 'การเติมน้ำบริสุทธิ์ (เจือจาง)', formula: 'เนื้อสารเดิม = เนื้อสารใหม่  (C₁V₁ = C₂V₂  โดย C(น้ำ) = 0%)' },
  { id: 233, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ของผสม', name: 'การระเหยน้ำออก', formula: 'C₁V₁ = C₂V₂  (เนื้อสารเท่าเดิม แต่ปริมาตรลดลง: V₂ = V₁ - V(ระเหย))' },
  { id: 234, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ของผสม', name: 'การเติมสารละลายบริสุทธิ์ 100%', formula: 'C₁V₁ + 100·V(เติม) = C₂V₂  (เช่น เติมเกลือหรือน้ำตาลล้วน)' },
  { id: 235, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ของผสม', name: 'กฎสัดส่วนผสม (Alligation Rule)', formula: 'อัตราส่วนผสม V₁/V₂ = |C(รวม) - C₂| / |C₁ - C(รวม)|' },
  { id: 62, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'โจทย์เชาวน์และเบ็ดเตล็ด', name: 'จำนวนเสาไฟ (ทางตรง)', formula: 'จำนวนเสา = (ระยะทาง / ระยะห่าง) + 1' },
  { id: 63, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'โจทย์เชาวน์และเบ็ดเตล็ด', name: 'การจับมือ (ทุกคนจับ 1 ครั้ง)', formula: 'จำนวนครั้ง = n(n-1) / 2' },
  { id: 64, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'โจทย์เชาวน์และเบ็ดเตล็ด', name: 'หัวและขาของสัตว์ (หาสัตว์ 2 ขา)', formula: 'จำนวน = (4×หัว - ขา) / 2' },
  { id: 128, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ล้อรถหมุนและฟันเฟือง', name: 'ระยะทาง 1 รอบ (เส้นรอบวง)', formula: 'ระยะทาง = 2πr  (r = รัศมีล้อ)' },
  { id: 129, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ล้อรถหมุนและฟันเฟือง', name: 'ระยะทางทั้งหมดจากการกลิ้ง', formula: 'ระยะทางรวม = จำนวนรอบ × 2πr' },
  { id: 130, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ล้อรถหมุนและฟันเฟือง', name: 'หาจำนวนรอบที่ล้อหมุน', formula: 'จำนวนรอบ = ระยะทางรวม / 2πr' },
  { id: 131, category: 'โจทย์ปัญหา (กฟผ./ก.พ.)', subCategory: 'ล้อรถหมุนและฟันเฟือง', name: 'ฟันเฟือง/ล้อสายพาน (อัตราทด)', formula: 'R₁ × N₁ = R₂ × N₂  (R=รัศมี/ฟัน, N=รอบ)' },

  // --- ไฟฟ้าพื้นฐาน (กฟผ.) ---
  { id: 65, category: 'ไฟฟ้าพื้นฐาน (กฟผ.)', subCategory: 'กฎของโอห์มและกำลังไฟฟ้า', name: 'กฎของโอห์ม (Ohm\'s Law)', formula: 'V = I × R' },
  { id: 66, category: 'ไฟฟ้าพื้นฐาน (กฟผ.)', subCategory: 'กฎของโอห์มและกำลังไฟฟ้า', name: 'กำลังไฟฟ้า (Power)', formula: 'P = V × I = I²R = V² / R' },
  { id: 67, category: 'ไฟฟ้าพื้นฐาน (กฟผ.)', subCategory: 'กฎของโอห์มและกำลังไฟฟ้า', name: 'พลังงานไฟฟ้า (Joule)', formula: 'W = P × t' },
  { id: 68, category: 'ไฟฟ้าพื้นฐาน (กฟผ.)', subCategory: 'การต่อตัวต้านทาน', name: 'ความต้านทาน (อนุกรม)', formula: 'R(รวม) = R₁ + R₂ + R₃ + ...' },
  { id: 69, category: 'ไฟฟ้าพื้นฐาน (กฟผ.)', subCategory: 'การต่อตัวต้านทาน', name: 'ความต้านทาน (ขนาน 2 ตัว)', formula: 'R(รวม) = (R₁ × R₂) / (R₁ + R₂)' },
  { id: 70, category: 'ไฟฟ้าพื้นฐาน (กฟผ.)', subCategory: 'หม้อแปลงไฟฟ้า', name: 'อัตราส่วนหม้อแปลงไฟฟ้า', formula: 'V₁ / V₂ = N₁ / N₂' },

  // --- การแปลงหน่วย ---
  { id: 76, category: 'การแปลงหน่วย', subCategory: 'ความยาว (เมตริก)', name: 'เซนติเมตร (cm)', formula: '1 cm = 10 mm' },
  { id: 77, category: 'การแปลงหน่วย', subCategory: 'ความยาว (เมตริก)', name: 'เมตร (m)', formula: '1 m = 100 cm' },
  { id: 78, category: 'การแปลงหน่วย', subCategory: 'ความยาว (เมตริก)', name: 'กิโลเมตร (km)', formula: '1 km = 1,000 m' },
  { id: 79, category: 'การแปลงหน่วย', subCategory: 'ความยาว (อังกฤษ)', name: 'ฟุต (foot)', formula: '1 ฟุต = 12 นิ้ว' },
  { id: 80, category: 'การแปลงหน่วย', subCategory: 'ความยาว (อังกฤษ)', name: 'หลา (yard)', formula: '1 หลา = 3 ฟุต' },
  { id: 81, category: 'การแปลงหน่วย', subCategory: 'ความยาว (อังกฤษ)', name: 'ไมล์ (mile)', formula: '1 ไมล์ = 1,760 หลา' },
  { id: 82, category: 'การแปลงหน่วย', subCategory: 'ความยาว (ข้ามระบบ)', name: 'นิ้ว เป็น เซนติเมตร', formula: '1 นิ้ว = 2.54 cm' },
  { id: 83, category: 'การแปลงหน่วย', subCategory: 'ความยาว (ข้ามระบบ)', name: 'ไมล์ เป็น กิโลเมตร', formula: '1 ไมล์ ≈ 1.609 km' },
  { id: 84, category: 'การแปลงหน่วย', subCategory: 'ความยาว (มาตราไทย)', name: 'วา เป็น เมตร', formula: '1 วา = 2 เมตร' },
  { id: 85, category: 'การแปลงหน่วย', subCategory: 'ความยาว (มาตราไทย)', name: 'เส้น เป็น วา', formula: '1 เส้น = 20 วา (40 เมตร)' },
  { id: 86, category: 'การแปลงหน่วย', subCategory: 'ความยาว (มาตราไทย)', name: 'โยชน์ เป็น เส้น', formula: '1 โยชน์ = 400 เส้น (16 km)' },
  { id: 87, category: 'การแปลงหน่วย', subCategory: 'น้ำหนัก (เมตริก/ไทย)', name: 'กิโลกรัม เป็น กรัม', formula: '1 kg = 1,000 g' },
  { id: 88, category: 'การแปลงหน่วย', subCategory: 'น้ำหนัก (เมตริก/ไทย)', name: 'ตัน (Metric Ton)', formula: '1 ตัน = 1,000 kg' },
  { id: 89, category: 'การแปลงหน่วย', subCategory: 'น้ำหนัก (เมตริก/ไทย)', name: 'ขีด เป็น กรัม', formula: '1 ขีด = 100 g' },
  { id: 90, category: 'การแปลงหน่วย', subCategory: 'น้ำหนัก (อังกฤษ)', name: 'ปอนด์ (lb) เป็น ออนซ์ (oz)', formula: '1 lb = 16 oz' },
  { id: 91, category: 'การแปลงหน่วย', subCategory: 'น้ำหนัก (ข้ามระบบ)', name: 'กิโลกรัม เป็น ปอนด์', formula: '1 kg ≈ 2.2046 lb' },
  { id: 92, category: 'การแปลงหน่วย', subCategory: 'น้ำหนัก (ข้ามระบบ)', name: 'ปอนด์ เป็น กิโลกรัม', formula: '1 lb ≈ 0.4536 kg' },
  { id: 93, category: 'การแปลงหน่วย', subCategory: 'น้ำหนัก (ทองคำ)', name: 'ทอง 1 บาท (รูปพรรณ)', formula: '1 บาท ≈ 15.16 กรัม' },
  { id: 94, category: 'การแปลงหน่วย', subCategory: 'น้ำหนัก (ทองคำ)', name: 'ทอง 1 บาท (แท่ง)', formula: '1 บาท = 15.244 กรัม' },
  { id: 95, category: 'การแปลงหน่วย', subCategory: 'น้ำหนัก (ทองคำ)', name: 'ทอง 1 สลึง', formula: '1 สลึง ≈ 3.8 กรัม' },
  { id: 96, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (เมตริก)', name: 'ตารางเมตร เป็น ตารางเซนติเมตร', formula: '1 m² = 10,000 cm²' },
  { id: 97, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (เมตริก)', name: 'เฮกตาร์ เป็น ตารางเมตร', formula: '1 เฮกตาร์ = 10,000 m²' },
  { id: 98, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (เมตริก)', name: 'ตารางกิโลเมตร เป็น ตารางเมตร', formula: '1 km² = 1,000,000 m²' },
  { id: 99, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (อังกฤษ)', name: 'ตารางฟุต เป็น ตารางนิ้ว', formula: '1 sq ft = 144 sq in' },
  { id: 100, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (อังกฤษ)', name: 'ตารางหลา เป็น ตารางฟุต', formula: '1 sq yd = 9 sq ft' },
  { id: 101, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (อังกฤษ)', name: 'เอเคอร์ เป็น ตารางหลา', formula: '1 เอเคอร์ = 4,840 sq yd' },
  { id: 102, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (อังกฤษ)', name: 'ตารางไมล์ เป็น เอเคอร์', formula: '1 sq mi = 640 เอเคอร์' },
  { id: 103, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (มาตราไทย)', name: 'ตารางวา เป็น ตารางเมตร', formula: '1 ตารางวา = 4 m²' },
  { id: 104, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (มาตราไทย)', name: 'งาน เป็น ตารางวา', formula: '1 งาน = 100 ตารางวา' },
  { id: 105, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (มาตราไทย)', name: 'ไร่ เป็น งาน', formula: '1 ไร่ = 4 งาน' },
  { id: 106, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (มาตราไทย)', name: 'ไร่ เป็น ตารางวา', formula: '1 ไร่ = 400 ตารางวา' },
  { id: 107, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (มาตราไทย)', name: 'ไร่ เป็น ตารางเมตร', formula: '1 ไร่ = 1,600 m²' },
  { id: 108, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (ข้ามระบบ)', name: 'เฮกตาร์ เป็น ไร่', formula: '1 เฮกตาร์ = 6.25 ไร่' },
  { id: 109, category: 'การแปลงหน่วย', subCategory: 'พื้นที่ (ข้ามระบบ)', name: 'ตารางไมล์ เป็น ตารางกิโลเมตร', formula: '1 sq mi ≈ 2.589 km²' }
];

// --- ข้อมูลหมวดหมู่และไอคอน ---
const categories = [
  { name: 'ทั้งหมด', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
  { name: 'โจทย์ปัญหา (กฟผ./ก.พ.)', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>' },
  { name: 'ไฟฟ้าพื้นฐาน (กฟผ.)', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-500"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' },
  { name: 'การแปลงหน่วย', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>' },
  { name: 'สมการและระบบสมการ', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>' },
  { name: 'พีชคณิต', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>' },
  { name: 'เรขาคณิต', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>' },
  { name: 'ตรีโกณมิติ', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 0 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/></svg>' },
  { name: 'แคลคูลัส', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3 3-3"/></svg>' },
  { name: 'สถิติ', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>' },
  { name: 'ลำดับและอนุกรม', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>' },
  { name: 'ร้อยละและเปอร์เซ็นต์', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>' },
  { name: 'เลขยกกำลังและลอการิทึม', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>' },
  { name: 'เซตและความน่าจะเป็น', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="12" height="12" x="2" y="10" rx="2" ry="2"/><path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"/><path d="M6 18h.01"/><path d="M10 14h.01"/><path d="M15 6h.01"/><path d="M18 9h.01"/></svg>' }
];

let selectedCategory = 'ทั้งหมด';
let searchTerm = '';
let copiedId = null;
let currentTransitionClass = 'animate-fade-in';

// ฟังก์ชันสร้างปุ่มหมวดหมู่
function renderCategories() {
  const container = document.getElementById('categoryContainer');
  if (!container) return;
  
  container.innerHTML = categories.map(cat => `
    <button
      onclick="selectCategory('${cat.name}')"
      class="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl whitespace-nowrap text-xs sm:text-sm font-medium transition-all shrink-0 ${
        selectedCategory === cat.name
          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
      }"
    >
      ${cat.icon}
      <span>${cat.name}</span>
    </button>
  `).join('');
}

// ฟังก์ชันสร้างการ์ดสูตร
function renderFormulas() {
  const container = document.getElementById('formulasContainer');
  if (!container) return;
  
  const transitionClass = currentTransitionClass;
  currentTransitionClass = 'animate-fade-in';
  
  // กรองข้อมูลตามคำค้นหาและหมวดหมู่
  const filtered = formulasData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.formula.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'ทั้งหมด' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 sm:py-20 bg-white rounded-2xl border border-slate-100 mt-4 sm:mt-6 px-4">
        <div class="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-100 mb-3 sm:mb-4 text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <h3 class="text-base sm:text-lg font-medium text-slate-900 mb-1">ไม่พบสูตรที่ค้นหา</h3>
        <p class="text-sm sm:text-base text-slate-500">ลองค้นหาด้วยคำอื่น หรือเลือกหมวดหมู่ใหม่ดูนะครับ</p>
      </div>
    `;
    return;
  }

  // จัดกลุ่มข้อมูลตาม Category หรือ SubCategory
  const grouped = filtered.reduce((acc, curr) => {
    const groupName = selectedCategory === 'ทั้งหมด' ? curr.category : curr.subCategory;
    if (!acc[groupName]) acc[groupName] = [];
    acc[groupName].push(curr);
    return acc;
  }, {});

  container.innerHTML = Object.entries(grouped).map(([groupName, formulas]) => `
    <div class="${transitionClass}">
      <h2 class="text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 pb-2 border-b-2 border-slate-100 flex items-center gap-2">
        <span class="text-indigo-600 text-base sm:text-lg">■</span> ${groupName}
      </h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        ${formulas.map(item => {
          // เน้นกรอบให้หมวด กฟผ. และ สมการ
          const isHighlighted = item.category.includes('กฟผ.') || item.category.includes('สมการ');
          const isCopied = copiedId === item.id;
          
          return `
            <div class="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border hover:shadow-md transition-all duration-200 group flex flex-col justify-between min-w-0 ${isHighlighted ? 'border-amber-200' : 'border-slate-100'}">
              <div class="w-full overflow-hidden">
                <div class="flex justify-between items-start mb-2 sm:mb-3">
                  <span class="inline-block px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-medium tracking-wide ${isHighlighted ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}">
                    ${selectedCategory === 'ทั้งหมด' ? item.subCategory : item.category}
                  </span>
                </div>
                <h3 class="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 pr-2">${item.name}</h3>
                <div class="bg-slate-50 rounded-xl p-3 sm:p-4 overflow-x-auto touch-pan-x w-full">
                  <code class="text-indigo-700 font-mono text-sm sm:text-lg whitespace-nowrap block">
                    ${item.formula}
                  </code>
                </div>
              </div>
              
              <div class="mt-4 sm:mt-5 flex justify-end shrink-0">
                <button
                  onclick="copyToClipboard('${item.formula.replace(/'/g, "\\'")}', ${item.id})"
                  class="flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-indigo-50 active:bg-indigo-100 ${isCopied ? 'text-emerald-500' : 'text-slate-500 hover:text-indigo-600'}"
                >
                  ${isCopied ? `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>คัดลอกแล้ว</span>
                  ` : `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 sm:w-4 sm:h-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                    <span>คัดลอกสูตร</span>
                  `}
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

// ฟังก์ชันเลือกหมวดหมู่
function selectCategory(categoryName, transitionClass = 'animate-fade-in') {
  selectedCategory = categoryName;
  currentTransitionClass = transitionClass;
  renderCategories();
  renderFormulas();
  
  // เลื่อนปุ่มหมวดหมู่ที่เลือกให้แสดงตรงกลางจอ
  setTimeout(() => {
    const activeBtn = document.querySelector('#categoryContainer button.bg-indigo-600');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, 50);
}

// ฟังก์ชันคัดลอกสูตร
function copyToClipboard(text, id) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    copiedId = id;
    renderFormulas();
    setTimeout(() => {
      copiedId = null;
      renderFormulas();
    }, 2000);
  } catch (err) {
    console.error('ไม่สามารถคัดลอกได้', err);
  }
  document.body.removeChild(textArea);
}

// รอให้โครงสร้างหน้าเว็บโหลดเสร็จก่อนเริ่มทำงาน
document.addEventListener('DOMContentLoaded', () => {
  // ฟังก์ชันค้นหา
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      if (searchTerm.trim() !== '') {
        selectedCategory = 'ทั้งหมด';
        renderCategories();
      }
      renderFormulas();
    });
  }

  // ตรวจสอบการปัดหน้าจอ (Swipe/Drag Gestures) บนเนื้อหาสูตร (ทั้ง Touch และ Mouse)
  const formulasContainer = document.getElementById('formulasContainer');
  if (formulasContainer) {
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    
    // --- Touch สำหรับมือถือ ---
    formulasContainer.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    
    formulasContainer.addEventListener('touchmove', (e) => {
      if (startX === 0) return;
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = currentX - startX;
      const diffY = currentY - startY;
      
      // หากผู้ใช้จงใจปัดซ้าย-ขวา ป้องกันไม่ให้เบราว์เซอร์ทำ overscroll / history-swipe (ไปหน้าก่อนหน้า/ถัดไป)
      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (e.cancelable) e.preventDefault();
      }
    }, { passive: false });
    
    formulasContainer.addEventListener('touchend', (e) => {
      if (e.changedTouches.length === 0) return;
      handleSwipe(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      startX = 0;
      startY = 0;
    }, { passive: true });

    // --- Mouse Drag สำหรับเดสก์ท็อป/เบราว์เซอร์ปกติ ---
    formulasContainer.addEventListener('mousedown', (e) => {
      // ข้ามถ้ากดปุ่ม, โค้ดสูตร หรือ input ต่างๆ เพื่อให้กดคัดลอกและคลุมดำเลือกข้อความได้ปกติ
      if (e.target.closest('button, code, input, select, textarea, a')) return;
      startX = e.clientX;
      startY = e.clientY;
      isDragging = true;
    });

    formulasContainer.addEventListener('mouseup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      handleSwipe(e.clientX, e.clientY);
    });

    formulasContainer.addEventListener('mouseleave', () => {
      isDragging = false;
    });

    // ฟังก์ชันประมวลผลการปัด/ลาก
    function handleSwipe(endX, endY) {
      const diffX = endX - startX;
      const diffY = endY - startY;
      
      // ตรวจสอบว่าเป็นการปัดในแนวนอน และมีระยะปัดอย่างน้อย 60px
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 60) {
        const currentIndex = categories.findIndex(cat => cat.name === selectedCategory);
        if (currentIndex !== -1) {
          if (diffX < 0) {
            // ปัดซ้าย -> ไปหมวดหมู่ถัดไป (Next)
            const nextIndex = (currentIndex + 1) % categories.length;
            selectCategory(categories[nextIndex].name, 'animate-slide-in-right');
          } else {
            // ปัดขวา -> ไปหมวดหมู่ก่อนหน้า (Prev)
            const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
            selectCategory(categories[prevIndex].name, 'animate-slide-in-left');
          }
        }
      }
    }
  }

  // รองรับการกดปุ่มลูกศร ซ้าย-ขวา บนคีย์บอร์ดสำหรับ Desktop
  document.addEventListener('keydown', (e) => {
    // ข้ามการทำงานหากผู้ใช้กำลังพิมพ์อยู่ในช่องค้นหา
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
      return;
    }
    
    if (e.key === 'ArrowLeft') {
      const currentIndex = categories.findIndex(cat => cat.name === selectedCategory);
      if (currentIndex !== -1) {
        const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
        selectCategory(categories[prevIndex].name, 'animate-slide-in-left');
      }
    } else if (e.key === 'ArrowRight') {
      const currentIndex = categories.findIndex(cat => cat.name === selectedCategory);
      if (currentIndex !== -1) {
        const nextIndex = (currentIndex + 1) % categories.length;
        selectCategory(categories[nextIndex].name, 'animate-slide-in-right');
      }
    }
  });

  // เริ่มทำงานครั้งแรก
  renderCategories();
  renderFormulas();
});