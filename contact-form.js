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
        
        btn: "🌐 AR",
   
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
       
        btn: "🌐 EN",
       
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

    document.getElementById("nav-home").textContent = t.navHome;
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


    langBtn.textContent = t.btn;
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

// Get current language for validation messages
function getCurrentLang() {
    return localStorage.getItem("language") || "en";
}

// Show error message for a field
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const input = field.previousElementSibling || field.querySelector('input, textarea');
    
    // Add invalid class to the input
    if (input) {
        input.classList.add('invalid');
    }
    
    const existingError = field.parentNode.querySelector('.error-message');
    
    if (existingError) {
        existingError.textContent = message;
    } else {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }
}

// Clear error message for a field
function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const input = field.previousElementSibling || field.querySelector('input, textarea');
    
    // Remove invalid class from the input
    if (input) {
        input.classList.remove('invalid');
    }
    
    const errorDiv = field.parentNode.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// Mark field as valid
function markFieldValid(fieldId) {
    const field = document.getElementById(fieldId);
    const input = field.previousElementSibling || field.querySelector('input, textarea');
    
    if (input) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone number (exactly 10 digits)
function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Check if a field is valid
function isFieldValid(fieldId, value, fieldType) {
    if (!value.trim()) return false;
    
    if (fieldType === 'email') {
        return isValidEmail(value);
    } else if (fieldType === 'phone') {
        return isValidPhone(value);
    } else if (fieldType === 'message') {
        return value.trim().length >= 10;
    }
    
    return true;
}

// Form validation
function validateForm() {
    const lang = getCurrentLang();
    const t = translations[lang];
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => error.remove());
    
    // Validate firstname
    const firstname = document.getElementById('label-fname').previousElementSibling;
    if (!firstname.value.trim()) {
        showError('label-fname', t.requiredField);
        isValid = false;
    }
    
    // Validate lastname
    const lastname = document.getElementById('label-lname').previousElementSibling;
    if (!lastname.value.trim()) {
        showError('label-lname', t.requiredField);
        isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('label-email').previousElementSibling;
    if (!email.value.trim()) {
        showError('label-email', t.requiredField);
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError('label-email', t.invalidEmail);
        isValid = false;
    }
    
    // Validate phone
    const phone = document.getElementById('label-phone').previousElementSibling;
    if (!phone.value.trim()) {
        showError('label-phone', t.requiredField);
        isValid = false;
    } else if (!isValidPhone(phone.value)) {
        showError('label-phone', t.invalidPhone);
        isValid = false;
    }
    
    // Validate message
    const message = document.getElementById('label-msg').previousElementSibling;
    if (!message.value.trim()) {
        showError('label-msg', t.requiredField);
        isValid = false;
    } else if (message.value.trim().length < 10) {
        showError('label-msg', t.messageTooShort);
        isValid = false;
    }
    
    return isValid;
}

// Show success message
function showSuccessMessage(message) {
    const feedbackContainer = document.getElementById('form-feedback');
    feedbackContainer.innerHTML = '';
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message success';
    messageDiv.textContent = message;
    
    feedbackContainer.appendChild(messageDiv);
    feedbackContainer.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        feedbackContainer.style.display = 'none';
        feedbackContainer.innerHTML = '';
    }, 5000);
}

// Show error message
function showErrorMessage(message) {
    const feedbackContainer = document.getElementById('form-feedback');
    feedbackContainer.innerHTML = '';
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message error';
    messageDiv.textContent = message;
    
    feedbackContainer.appendChild(messageDiv);
    feedbackContainer.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        feedbackContainer.style.display = 'none';
        feedbackContainer.innerHTML = '';
    }, 5000);
}

// Handle form submission
async function handleFormSubmission(event) {
    event.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const lang = getCurrentLang();
    const t = translations[lang];
    
    // Disable submit button and show loading state
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = t.sending;
    
    try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success
            contactForm.reset();
            showSuccessMessage(t.success);
        } else {
            // Error
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showErrorMessage(t.error);
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

// Add form event listeners
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "en";
    applyLanguage(savedLang);
    
    // Add form submission handler
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Real-time validation on input and blur
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        // Real-time validation as user types
        input.addEventListener('input', () => {
            const labelId = input.nextElementSibling.id;
            const fieldType = input.type === 'email' ? 'email' : input.type === 'tel' ? 'phone' : input.name === 'message' ? 'message' : 'text';
            
            // Remove invalid state when user starts typing
            if (input.classList.contains('invalid')) {
                clearError(labelId);
            }
            
            // Check if field is now valid
            if (input.value.trim() && isFieldValid(labelId, input.value, fieldType)) {
                markFieldValid(labelId);
            } else if (input.classList.contains('valid')) {
                // Remove valid class if it no longer meets criteria
                input.classList.remove('valid');
            }
        });
        
        // Validate on blur
        input.addEventListener('blur', () => {
            const labelId = input.nextElementSibling.id;
            const fieldType = input.type === 'email' ? 'email' : input.type === 'tel' ? 'phone' : input.name === 'message' ? 'message' : 'text';
            
            if (!input.value.trim()) {
                input.classList.remove('valid');
                const lang = getCurrentLang();
                const t = translations[lang];
                showError(labelId, t.requiredField);
            } else if (isFieldValid(labelId, input.value, fieldType)) {
                markFieldValid(labelId);
            }
        });
    });
});