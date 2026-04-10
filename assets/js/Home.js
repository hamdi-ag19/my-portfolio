
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

      // ===== Reveal Sections On Scroll =====
            // ===== كشف الأقسام عند التمرير=====

  const hiddenSections = document.querySelectorAll(".hidden");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    hiddenSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("show");
      }
    });
  };

  // ===== Close Navbar When Clicking Outside =====
    // ===== إغلاق شريط التنقل عند النقر خارج المنطقة =====



  window.addEventListener("scroll", revealOnScroll);

  revealOnScroll();

  }

 

document.addEventListener("click", function (e) {

  const navLinks = document.querySelector(".nav-links");
  const menuContainer = document.getElementById("menuToggle");
  const checkbox = document.getElementById("checkbox");

  if (!checkbox.checked) return;

  const isClickInsideNav = navLinks.contains(e.target);
  const isClickOnMenu = menuContainer.contains(e.target);

  if (!isClickInsideNav && !isClickOnMenu) {
    navLinks.classList.remove("show");
    checkbox.checked = false;
  }

});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    checkbox.checked = false;
  });
});




// ===== Update Language Automatically =====
// ===== تحديث اللغة تلقائيًا =====

function updateOpenText() {

  const titles = cvLabel.querySelectorAll(".title");
  const currentLang = localStorage.getItem("language") || "en";

  if (currentLang === "ar") {
    titles[1].textContent = "Open";
  } else {
    titles[1].textContent = "Open";
  }
}


// ===== Reset Button =====
// =====  زر إعادة التعيين=====

function resetButton() {

  setTimeout(() => {

    isReady = false;
    cvInput.checked = false;

    const circle = cvLabel.querySelector(".circle");
    circle.style.background = "rgb(91,91,240)";

  }, 1500);
}



// Scroll Progress Bar
// شريط تقدم التمرير

window.addEventListener("scroll", () => {

  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / height) * 100;

  const bar = document.getElementById("progress-bar");

  if (bar) {
    bar.style.width = progress + "%";
  }

});

// ===== Back to top button =====
// ===== زر العودة إلى الأعلى=====

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
});

// =====  Function to animate statistics numbers =====
// =====  دالة لتحريك أرقام الإحصاءات =====


document.addEventListener("DOMContentLoaded", () => {
    
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const speed = 100; 
        const increment = target / speed;

        const updateCount = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    const animateProgressBar = (bar) => {
        const target = +bar.getAttribute('data-progress');
        const span = bar.querySelector('span');
        bar.style.width = target + '%';

        let current = 0;
        const interval = setInterval(() => {
            if (current >= target) {
                clearInterval(interval);
            } else {
                current++;
                span.innerText = current + '%';
            }
        }, 25);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('counter')) {
                    animateCounter(entry.target);
                } 
                else if (entry.target.classList.contains('progress-bar')) {
                    animateProgressBar(entry.target);
                }
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(el => observer.observe(el));
    document.querySelectorAll('.progress-bar').forEach(el => observer.observe(el));
});



document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    const animateProgress = (bar) => {
        const target = +bar.getAttribute('data-progress'); 
        const span = bar.querySelector('span');
        let current = 0;
        
        bar.style.width = target + '%';

        const interval = setInterval(() => {
            if (current >= target) {
                clearInterval(interval);
            } else {
                current++;
                span.innerText = current + '%';
            }
        }, 20); 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgress(entry.target);
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
});


const revealOnScroll = () => {
    const sections = document.querySelectorAll('.container');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('active');
        } else {
           
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    document.querySelectorAll('section').forEach((section, i) => {
        if (section.offsetTop - 100 <= scrollDistance) {
            document.querySelectorAll('.nav-links li a').forEach((a) => {
                a.classList.remove('active');
            });
            
            const id = section.getAttribute('id');
            const activeLink = document.querySelector(`.nav-links li a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});


const counters = document.querySelectorAll('.stat-number');
const speed = 1500; 

const startCount = (counter) => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + Math.max(inc, 0.1));
            setTimeout(updateCount, 150);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
};

const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCount(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

counters.forEach(counter => observer.observe(counter));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {

    const targetId = this.getAttribute('href');

    if (targetId.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }

  });
});


window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.classList.add("hide");
  }, 800); 
});

// ===== Navbar Scroll Effect =====
// ===== تأثير شريط التنقل عند التمرير =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Dynamic Page Title =====
// ===== عنوان الصفحة الديناميكي =====
window.onblur = function () { document.title = "Don't forget me! 💻"; }
window.onfocus = function () { document.title = "Hamdi Al-Luqmani | Portfolio"; }