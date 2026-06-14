/**
 * 🏢 Tipwong Industrial Co., Ltd. - Core Application Script
 * ฐานข้อมูลสเปกวิศวกรรมของผลิตภัณฑ์ (Products Database) สำหรับดึงแสดงผลบนระบบ Modal ป็อปอัป
 */
const productsDatabase = {
    1: {
        name: "สกรูหัวเหลี่ยมสแตนเลส เกลียวตลอด M6",
        standard: "DIN 933 (ISO 4017)",
        badge: "STAINLESS SUS 304",
        icon: "fa-bolt",
        price: "฿5.00 - ฿25.00 <span class='text-xs text-gray-400 font-normal'>/ ชิ้น</span>",
        desc: "ผลิตจากเหล็กกล้าไร้สนิมเกรด Austenitic (A2-70) มีความต้านทานต่อแรงดึงสูงและป้องกันการเกิดสนิมในสภาพแวดล้อมที่มีความชื้นทั่วไปได้ดีเยี่ยม เหมาะอย่างยิ่งสำหรับงานโครงสร้างภายนอกอาคาร งานประกอบเครื่องจักรกลเบา และงานตู้คอนโทรลไฟฟ้า",
        tech: { mat: "สแตนเลส 304 (A2)", grade: "A2-70 เกรดมาตรฐาน", thread: "เกลียวตลอด (Full Thread)", coat: "Plain (ผิวธรรมชาติปัดเงา)" }
    },
    2: {
        name: "สกรูหัวจมดำ เกลียวครึ่งเกรดสูง M10",
        standard: "DIN 912 (ISO 4762)",
        badge: "เหล็กแข็งพิเศษ เกรด 12.9",
        icon: "fa-screwdriver",
        price: "฿12.00 - ฿60.00 <span class='text-xs text-gray-400 font-normal'>/ ชิ้น</span>",
        desc: "สกรูเหล็กอัลลอยด์ (Alloy Steel) ผ่านกระบวนการชุบแข็งและชุบผิวรมดำ (Black Oxide) เพื่อรับแรงดึง แรงบิด และแรงกระแทกซ้ำๆ จากเครื่องจักรหนักได้สูงสุด ปลอดภัยสูง นิยมใช้ในอุตสาหกรรมแม่พิมพ์ แท่นปั๊มโลหะ และส่วนประกอบยานยนต์หนัก",
        tech: { mat: "Alloy Steel (เหล็กผสมพิเศษ)", grade: "เกรด 12.9 (สูงมาก)", thread: "เกลียวครึ่ง (Half Thread)", coat: "Black Oxide (ชุบผิวรมดำ)" }
    },
    3: {
        name: "หัวน็อตล็อค สแตนเลส (Nyloc Nut) M8",
        standard: "DIN 985 (ISO 10511)",
        badge: "STAINLESS SUS 304",
        icon: "fa-circle-dot",
        price: "฿4.50 <span class='text-xs text-gray-400 font-normal'>/ ชิ้น</span>",
        desc: "หัวน็อตหกเหลี่ยมพร้อมวงแหวนไนลอนล็อคกันคลาย (Nylon Insert) ตัวเรือนทำจากสแตนเลสไม่เป็นสนิม วงแหวนไนลอนด้านในจะช่วยสร้างแรงเสียดทานและซับแรงสั่นสะเทือน ป้องกันหัวน็อตคลายตัวหลุดออกเองจากเพลาหมุนหรือเครื่องจักรที่มีการสั่นสะเทือนตลอดเวลา",
        tech: { mat: "สแตนเลส 304 (A2)", grade: "มาตรฐานสากลอุตสาหกรรม", thread: "เกลียวมิลหยาบ (Coarse)", coat: "Plain (ผิวธรรมชาติ)" }
    },
    4: {
        name: "แหวนอีแปะหนาพิเศษเกรดโรงงาน M12",
        standard: "DIN 125 (ISO 7089)",
        badge: "เหล็กชุบซิงค์ขาว",
        icon: "fa-ring",
        price: "฿150.00 <span class='text-xs text-gray-400 font-normal'>/ กล่อง</span>",
        desc: "แหวนรองรับแรงกดผิวเรียบหน้ากว้าง ผลิตจากคาร์บอนสตีลคุณภาพสูง ผ่านการชุบสังกะสีด้วยระบบไฟฟ้า (Zinc Plated) ป้องกันสนิมขาว ช่วยกระจายแรงบีบเค้นเมื่อขันแน่น ป้องกันผิวชิ้นงานหลักไม่ให้เกิดรอยยุบตัวหรือบดขยี้ เหมาะสำหรับงานยึดโครงสร้างเหล็กทั่วไป",
        tech: { mat: "Carbon Steel (เหล็กกล้า)", grade: "ความแข็ง 140 HV / 200 HV", thread: "ไม่มีเกลียว (แหวนรองแบน)", coat: "Electro-Zinc (ชุบซิงค์ขาว)" }
    },
    5: {
        name: "พุกเหล็กยึดคอนกรีตแรงดึงสูง 3/8 นิ้ว",
        standard: "Heavy Duty Anchor Bolt",
        badge: "เหล็กชุบซิงค์รุ้ง",
        icon: "fa-anchor",
        price: "฿18.00 <span class='text-xs text-gray-400 font-normal'>/ ตัว</span>",
        desc: "พุกเหล็กเบ่งขยายตัวด้วยแรงดึงเกรดอุตสาหกรรมหนัก ชุบผิวซิงค์รุ้ง (Yellow Zinc) หนาพิเศษเพื่อเพิ่มการต้านทานต่อความชื้นและสารเคมีในปูน แกนพุกเหล็กหนารองรับน้ำหนักการติดตั้งโครงสร้างอาคาร เสาเหล็กโรงงาน และการยึดโครงสร้างเหล็กเข้ากับคานคอนกรีตได้อย่างแน่นหนา",
        tech: { mat: "เหล็กกล้าคาร์บอนขึ้นรูปหนัก", grade: "เกรดรับน้ำหนักสูงพิเศษ", thread: "เกลียวขยายในคอนกรีต", coat: "Yellow Zinc (ชุบซิงค์ทอง/รุ้ง)" }
    },
    6: {
        name: "สกรูหัวจมสแตนเลส เกรดทนเคมี M8",
        standard: "DIN 912 (เกรดสูงสุด)",
        badge: "STAINLESS SUS 316",
        icon: "fa-gears",
        price: "฿35.00 <span class='text-xs text-gray-400 font-normal'>/ ตัว</span>",
        desc: "ผลิตจากเหล็กกล้าไร้สนิมพรีเมียมผสมสารโมลิบดีนัม เกรด Marine Grade (A4-80) ออกแบบมาโดยเฉพาะสำหรับใช้ในโรงงานอุตสาหกรรมเคมี โรงงานผลิตและแปรรูปอาหาร อุปกรณ์การเดินเรือ หรือโครงสร้างริมชายฝั่งทะเล สามารถทนทานต่อกรด ด่าง และไอเกลือคลอไรด์เข้มข้นสูงได้อย่างยอดเยี่ยม",
        tech: { mat: "สแตนเลส 316 (เกรดทนกรด)", grade: "A4-80 เกรดความแข็งสูงสุด", thread: "เกลียวมิลมาตรฐาน ISO", coat: "Plain (ผิวเนียนเรียบพิเศษ)" }
    }
};

/**
 * 🔄 ระบบเปลี่ยนหน้าจออัจฉริยะแบบ Single Page (Page Navigation System)
 * ทำงานลื่นไหล รองรับ Responsive ได้นุ่มนวล
 */
function navigateTo(pageId) {
    // 1. ซ่อนหน้าต่างเดิมทั้งหมดออกไปก่อน
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.remove('active'));

    // 2. สั่งแสดงหน้าต่างระบบตัวที่ผู้ใช้คลิกเลือก
    const targetSection = document.getElementById('page-' + pageId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 3. ปรับเปลี่ยนไฮไลต์ปุ่มเมนู (Active Menu Highlight)
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('text-brand-red', 'bg-brand-red/5', 'border-b-2', 'border-brand-red');
        btn.classList.add('text-brand-gray', 'bg-transparent');
    });

    const activeBtn = document.getElementById('btn-' + pageId);
    if (activeBtn) {
        activeBtn.classList.remove('text-brand-gray', 'bg-transparent');
        activeBtn.classList.add('text-brand-red', 'bg-brand-red/5', 'border-b-2', 'border-brand-red');
    }

    // สั่งให้เลื่อนจอกลับไปด้านบนสุดแบบ Smooth สบายตาผู้ใช้งาน
    window.scrollTo({top: 0, behavior: 'smooth'});
}

/**
 * 🔎 ฟังก์ชันเปิดกล่องป็อปอัปแสดงรายละเอียดสเปกสินค้าเชิงลึก (Open Product Specification Modal)
 */
function openProductModal(productId) {
    const product = productsDatabase[productId];
    if (!product) return;

    // ทำการฟีดข้อมูลจำลองจากฐานข้อมูลเข้าสู่แผงหน้าจอ UI ป็อปอัป
    document.getElementById('modalProductName').innerText = product.name;
    document.getElementById('modalProductStd').innerText = "STANDARD: " + product.standard;
    document.getElementById('modalProductBadge').innerText = product.badge;
    document.getElementById('modalProductDesc').innerText = product.desc;
    document.getElementById('modalProductPrice').innerHTML = product.price;

    // อัปเดตข้อมูลตาราง Spec เทคนิคด้านขวา
    document.getElementById('specMaterial').innerText = product.tech.mat;
    document.getElementById('specGrade').innerText = product.tech.grade;
    document.getElementById('specThread').innerText = product.tech.thread;
    document.getElementById('specCoat').innerText = product.tech.coat;

    // สลับไอคอนฝั่งซ้ายตามสเปกสินค้าแต่ละตัว
    const iconElement = document.getElementById('modalProductIcon');
    iconElement.className = `fa-solid ${product.icon} text-7xl text-brand-red/80`;

    // สั่งปลดล็อกเอฟเฟกต์แสดงผลให้เด้งขึ้นหน้าจอ
    const modal = document.getElementById('productModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // ล็อคหน้าจอไม่ให้เลื่อนเบื้องหลังเบลอๆ
}

/**
 * ❌ ฟังก์ชันปิดหน้าต่างป็อปอัปแสดงรายละเอียดสินค้า
 */
function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // คืนค่าหน้าจอให้เลื่อนขึ้นลงได้ตามเดิม
}

// 🎯 เสริมความง่าย: เมื่อผู้ใช้เผลอกดคลิกโดนพื้นที่สีเทาภายนอกกล่อง ให้ปิดป็อปอัปตัวนี้ให้ทันที
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeProductModal();
    }
}
// ฟังก์ชันระบบค้นหาตัวจริง (ดึงจากโครงสร้างการ์ดเดิมของพี่)
function startProductSearch() {
    // 1. ดึงคำที่พิมพ์ในช่องค้นหา
    const searchInput = document.querySelector('nav input[type="text"]');
    if (!searchInput) return;
    const keyword = searchInput.value.toLowerCase().trim();

    // 2. ดึงการ์ดสินค้าทั้งหมด (จับจากโครงสร้างกล่องสีขาวที่มีปุ่มเลือกขนาดของพี่)
    const allCards = document.querySelectorAll('main .grid > div');

    allCards.forEach(card => {
        // เจาะหาหัวข้อชื่อสินค้า (แท็ก h3) ข้างในการ์ด
        const titleText = card.querySelector('h3')?.textContent.toLowerCase() || '';

        // ถ้าคำค้นหาตรงกับชื่อสินค้า ให้แสดงผล ถ้าไม่ตรงให้ซ่อน
        if (titleText.includes(keyword)) {
            // ใช้ flex เพราะการ์ดเดิมของพี่ใช้ flex จัดทรงปุ่มด้านล่าง
            card.style.display = 'flex'; 
        } else {
            card.style.display = 'none';
        }
    });
}

// 🎯 รันระบบทันทีที่โหลดหน้าเว็บเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    // จับปุ่มค้นหา "สีแดง" ในแถบเมนูบนของพี่
    const redSearchBtn = document.querySelector('nav button.bg-red-600, nav button.bg-rod-600');
    
    if (redSearchBtn) {
        // ดักจับเวลาพี่เอาเมาส์ไปคลิกปุ่มสีแดง
        redSearchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            startProductSearch(); // สั่งค้นหาทันที!
        });
    }

    // ดักจับเวลาพี่พิมพ์ในช่องแล้วกด Enter บนคีย์บอร์ด
    const mainInputField = document.querySelector('nav input[type="text"]');
    if (mainInputField) {
        mainInputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                startProductSearch(); // สั่งค้นหาทันที!
            }
        });
    }
});