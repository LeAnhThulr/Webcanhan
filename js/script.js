// =========================
// DARK MODE
// =========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// =========================
// HIỆU ỨNG KHI CUỘN
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);


sections.forEach(function (section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(35px)";
    section.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});


// CSS inline class bổ sung cho animation
const style = document.createElement("style");

style.textContent = `
    .section.show {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);


// =========================
// FORM LIÊN HỆ
// =========================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Kiểm tra dữ liệu

    if (name === "" || email === "" || message === "") {

        alert("Vui lòng điền đầy đủ thông tin nhé! 😊");

        return;
    }


    // Kiểm tra email

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(email)) {

        alert("Email chưa đúng định dạng. Bạn kiểm tra lại nhé!");

        return;
    }


    // Thông báo gửi thành công

    alert(
        "Cảm ơn " +
        name +
        "! 💜\n\n" +
        "Tin nhắn của bạn đã được ghi nhận."
    );


    // Xóa form

    contactForm.reset();

});


// =========================
// ACTIVE NAVIGATION
// =========================

const navLinks =
    document.querySelectorAll(".nav-links a");

const pageSections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", function () {

    let current = "";

    pageSections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.style.color = "#6c63ff";

        }

    });

});


// =========================
// HIỆU ỨNG NÚT GỬI
// =========================

const sendBtn =
    document.querySelector(".send-btn");


sendBtn.addEventListener("mouseenter", function () {

    sendBtn.style.transform =
        "translateY(-3px)";

});


sendBtn.addEventListener("mouseleave", function () {

    sendBtn.style.transform =
        "translateY(0)";

});
