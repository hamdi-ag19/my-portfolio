const langBtn = document.getElementById("lang-toggle");

//==== The translation in English ====
//==== الترجمة إلى الإنجليزية ====

const translations = {
    en: {
        navHome:" Home",
        formTitle: "Contact Me",
        formMsg: "Fill the form below to get in touch.",
        fname: "Firstname",
        lname: "Lastname",
        email: "Email",
        phone: "Phone Number",
        message: "Your Message",
        submit: "Send Message",
        
   
        footerDesc: "Crafting digital experiences with passion.",
        footerCopy: "Hamdi Al-Luqmani. All rights reserved.© 2026",
        footerstatus: "Available for hire",
        footerquicklinks: "Quick Links",
        footerhome: "Home",
        footerConnect: "connect",
        
        // Form validation messages
        requiredField: "This field is required",
        invalidEmail: "Please enter a valid email address",
        invalidPhone: "Phone must be exactly 10 digits (e.g., 05xxxxxxxx)",
        messageTooShort: "Message must be at least 10 characters",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",
    },

//==== The translation In Arabic ====
//==== الترجمة إلى العربي  ====

    ar: {
        navHome:" الصفحة الرئيسية",
        formTitle: "تواصل معي",
        formMsg: "قم بتعبئة النموذج أدناه للتواصل معي مباشرة.",
        fname: "الاسم الأول",
        lname: "اسم العائلة",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        message: "رسالتك",
        submit: "إرسال الرسالة",
       
       
        footerDesc: "صناعة تجارب رقمية بشغف وإتقان.",
        footerCopy: " حمدي اللقماني. جميع الحقوق محفوظة. © 2026 ",
        footerstatus: "متاح للعمل الحر",
        footerquicklinks: "روابط سريعة",
        footerhome: "الصفحة الرئيسية",
         footerConnect: "التواصل",

        // Form validation messages
        requiredField: "هذا الحقل مطلوب",
        invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صحيح",
        invalidPhone: "يجب أن يكون الهاتف 10 أرقام بالضبط (مثال: 05xxxxxxxx)",
        messageTooShort: "يجب أن تكون الرسالة 10 أحرف على الأقل",
        sending: "جاري الإرسال...",
        success: "تم إرسال الرسالة بنجاح!",
        error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    }
};

//==== Definition of all the DIs ====
//==== تعريف جميع الـ DIs ====


function applyLanguage(lang) {
    const t = translations[lang];

   document.getElementById("nav-home").innerHTML = `<i class="fas fa-home"></i> ${t.navHome}`;
    document.getElementById("form-title").textContent = t.formTitle;
    document.getElementById("form-msg").textContent = t.formMsg;
    document.getElementById("label-fname").textContent = t.fname;
    document.getElementById("label-lname").textContent = t.lname;
    document.getElementById("label-email").textContent = t.email;
    document.getElementById("label-phone").textContent = t.phone;
    document.getElementById("label-msg").textContent = t.message;
    document.getElementById("submit-btn").textContent = t.submit;
    

    document.getElementById("footer-desc").textContent = t.footerDesc;
    document.getElementById("footer-copy").textContent = t.footerCopy;
    document.getElementById("footer-status").textContent = t.footerstatus;
    document.getElementById("footer-quicklinks").textContent = t.footerquicklinks;
    document.getElementById("footer-home").textContent = t.footerhome;
    document.getElementById("footer-Connect").textContent = t.footerConnect;


    // Update language button icon/text for accessibility
    if (langBtn) {
        const icon = langBtn.querySelector('.lang-ico');
        const textEl = langBtn.querySelector('.lang-text');
        if (lang === 'ar') {
            if (icon) icon.className = 'fas fa-language lang-ico';
            if (textEl) textEl.textContent = 'EN';
            langBtn.setAttribute('aria-pressed', 'true');
            langBtn.setAttribute('title', 'Switch to English');
            langBtn.setAttribute('aria-label', 'Switch language to English');
        } else {
            if (icon) icon.className = 'fas fa-language lang-ico';
            if (textEl) textEl.textContent = 'AR';
            langBtn.setAttribute('aria-pressed', 'false');
            langBtn.setAttribute('title', 'التبديل إلى العربية');
            langBtn.setAttribute('aria-label', 'التبديل إلى العربية');
        }
    }
    localStorage.setItem("language", lang);

    if (lang === "ar") {
        document.body.classList.add("rtl");
    } else {
        document.body.classList.remove("rtl");
    }
}

//==== Switch the translation button from Arabic to English ====
//==== قم بتغيير زر الترجمة من العربية إلى الإنجليزية ====

langBtn.addEventListener("click", () => {
    const currentLang = localStorage.getItem("language") || "en";
    const newLang = currentLang === "en" ? "ar" : "en";
    applyLanguage(newLang);
});

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "en";
    applyLanguage(savedLang);
});

// ===== Dark Mode =====
    // ===== الوضع الداكن =====

  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
}

// ===== Dynamic Page Title =====
// ===== عنوان الصفحة الديناميكي =====
window.onblur = function () { document.title = "Don't forget me! 💻"; }
window.onfocus = function () { document.title = "Hamdi Al-Luqmani | Portfolio"; }


// ===== Form Validation and Submission =====
// ===== التحقق من صحة النموذج وإرساله =====

const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
//==== Function to get the current language ====
// تحديد اللغة الحالية
function getCurrentLang() {
    return localStorage.getItem("language") || "en";
}
//==== Function to show error (your original code) ====
// دالة إظهار الخطأ (كودك الأصلي)
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    const input = field.previousElementSibling;
    if (input) input.classList.add('invalid');
    
    let errorDiv = field.parentNode.querySelector('.error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        field.parentNode.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
}
//==== Function to clear error (your original code) ====
// دالة مسح الخطأ (كودك الأصلي)
function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    const input = field.previousElementSibling;
    if (input) input.classList.remove('invalid');
    const errorDiv = field.parentNode.querySelector('.error-message');
    if (errorDiv) errorDiv.remove();
}
//==== Function to mark field as valid (your original code) ====
// دالة تمييز الحقل كصحيح
function markFieldValid(fieldId) {
    const field = document.getElementById(fieldId);
    const input = field?.previousElementSibling;
    if (input) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
}
//==== Functions to validate email and phone ====
// فحص صحة البريد والهاتف
function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function isValidPhone(phone) { return /^\d{10}$/.test(phone.replace(/[\s\-\(\)]/g, '')); }
//==== Function to check field validity (new - for real-time validation) ====
// فحص صلاحية الحقل (جديد - للتحقق الفوري)
function isFieldValid(fieldId, value, fieldType) {
    if (!value.trim()) return false;
    if (fieldType === 'email') return isValidEmail(value);
    if (fieldType === 'phone') return isValidPhone(value);
    if (fieldType === 'message') return value.trim().length >= 10;
    return true;
}
//==== Comprehensive validation function on submit ====
// دالة التحقق الشاملة عند الإرسال
function validateForm() {
    const lang = getCurrentLang();
    const t = translations[lang];
    let isValid = true;

    const fields = [
        { id: 'label-fname', type: 'text' },
        { id: 'label-lname', type: 'text' },
        { id: 'label-email', type: 'email' },
        { id: 'label-phone', type: 'phone' },
        { id: 'label-msg', type: 'message' }
    ];

    fields.forEach(f => {
        const input = document.getElementById(f.id)?.previousElementSibling;
        if (!input) return;
        const val = input.value.trim();
        
        if (!val) {
            showError(f.id, t.requiredField);
            isValid = false;
        } else if (f.type === 'email' && !isValidEmail(val)) {
            showError(f.id, t.invalidEmail);
            isValid = false;
        } else if (f.type === 'phone' && !isValidPhone(val)) {
            showError(f.id, t.invalidPhone);
            isValid = false;
        } else if (f.type === 'message' && val.length < 10) {
            showError(f.id, t.messageTooShort);
            isValid = false;
        } else {
            markFieldValid(f.id);
        }
    });
    return isValid;
}
//==== Function to handle form submission with SweetAlert2 and dark mode support ====
// معالجة إرسال النموذج مع SweetAlert2 والدارك مود
async function handleFormSubmission(event) {
    event.preventDefault();
    //==== Bot prevention (honeypot) ====
    // منع البوتات
    if (document.getElementById('honeypot')?.value) return;

    if (!validateForm()) return;
    
    const lang = getCurrentLang();
    const t = translations[lang];
    const isDarkMode = document.body.classList.contains('dark');

    Swal.fire({
        title: lang === 'ar' ? 'جاري الإرسال...' : 'Sending...',
        background: isDarkMode ? '#1e293b' : '#fff',
        color: isDarkMode ? '#f1f5f9' : '#475569',
        allowOutsideClick: false,
        didOpen: () => { Swal.showLoading(); }
    });

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            contactForm.reset();
            document.querySelectorAll('.valid').forEach(el => el.classList.remove('valid'));
if (response.ok) {

    Swal.fire({
        icon: 'success',
        title: lang === 'ar' ? 'تم استلام رسالتك!' : 'Message Received!',
        text: lang === 'ar' ? 'شكراً لتواصلك ، سأرد عليك خلال 24 ساعة.' : 'Thanks for reaching out! I will reply within 24 hours.',
        background: isDarkMode ? '#1e293b' : '#fff',
        color: isDarkMode ? '#f1f5f9' : '#475569',
        confirmButtonColor: '#38bdf8'
    });
    contactForm.reset();
}
        } else { throw new Error(); }
    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: lang === 'ar' ? 'فشل الإرسال' : 'Error',
            text: t.error,
            background: isDarkMode ? '#1e293b' : '#fff',
            color: isDarkMode ? '#f1f5f9' : '#475569',
            confirmButtonColor: '#ef4444'
        });
    }
}
//==== Setting up listeners on load (real-time validation while typing) ====
// إعداد المستمعات عند التحميل (التحقق الفوري أثناء الكتابة)
document.addEventListener("DOMContentLoaded", () => {
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleFormSubmission);

    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        //==== Real-time validation while typing ====
        // التحقق أثناء الكتابة
        input.addEventListener('input', () => {
            const labelId = input.nextElementSibling?.id;
            if (!labelId) return;

            const fieldType = input.type === 'email' ? 'email' : 
                            (input.type === 'tel' || input.id.includes('phone')) ? 'phone' : 
                            input.tagName === 'TEXTAREA' ? 'message' : 'text';

            if (input.classList.contains('invalid')) {
                clearError(labelId);
            }

            if (input.value.trim() && isFieldValid(labelId, input.value, fieldType)) {
                markFieldValid(labelId);
            } else {
                input.classList.remove('valid');
            }
        });
//==== Validation on blur (when leaving the field) ====
        // التحقق عند ترك الحقل (Blur)
        input.addEventListener('blur', () => {
            const labelId = input.nextElementSibling?.id;
            if (!labelId) return;

            const fieldType = input.type === 'email' ? 'email' : 
                            (input.type === 'tel' || input.id.includes('phone')) ? 'phone' : 
                            input.tagName === 'TEXTAREA' ? 'message' : 'text';

            if (!input.value.trim()) {
                input.classList.remove('valid');
                showError(labelId, translations[getCurrentLang()].requiredField);
            } else if (isFieldValid(labelId, input.value, fieldType)) {
                markFieldValid(labelId);
            }
        });
    });
});