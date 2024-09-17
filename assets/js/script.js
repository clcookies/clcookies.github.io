'use strict';

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}

/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});




/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

// const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

// for (let i = 0; i < searchBoxElems.length; i++) {
//   searchBoxElems[i].addEventListener("click", function () {
//     searchContainer.classList.toggle("active");
//     document.body.classList.toggle("active");
//   });
// }



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
        function() {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
        }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});

    // Load navbar.html into the navbar-placeholder div
    document.addEventListener("DOMContentLoaded", function() {
      fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
          document.getElementById("navbar-placeholder").innerHTML = data;
        });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
// Pilih semua elemen kategori
const categoryItems = document.querySelectorAll('.category-item');

// Pilih semua produk
const products = document.querySelectorAll('.product-item');

// Event listener untuk setiap kategori
categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Ambil kategori yang dipilih
        const category = item.getAttribute('data-category');
        
        // Sembunyikan semua produk terlebih dahulu
        products.forEach(product => {
            product.classList.remove('active');
            
            // Tampilkan produk yang sesuai dengan kategori yang dipilih
            if (product.classList.contains(category)) {
                product.classList.add('active');
            }
        });
    });
});

// Event listener untuk tombol "Order Sekarang"
const orderButtons = document.querySelectorAll('.order-now');

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        
        // Sembunyikan semua tautan order lainnya
        const allOrderLinks = document.querySelectorAll('.order-links');
        allOrderLinks.forEach(links => links.style.display = 'none');
        
        // Tampilkan tautan order yang sesuai dengan produk
        const orderLinks = document.querySelector(`.order-links.${product}`);
        
        if (orderLinks) {
            orderLinks.style.display = 'block';
        } else {
            console.error(`Order links for product "${product}" not found.`);
        }
    });
});
function openModal() {
  document.getElementById("orderModal").style.display = "flex"; // Gunakan flex untuk penataan modal
}

function closeModal() {
  document.getElementById("orderModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("orderModal");
  if (event.target === modal) {
      closeModal();
  }
}
document.getElementById('orderBtn').addEventListener('click', function() {
  const orderOptions = document.getElementById('orderOptions');
  if (orderOptions.style.display === 'none' || orderOptions.style.display === '') {
      orderOptions.style.display = 'block';
  } else {
      orderOptions.style.display = 'none';
  }
});
document.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const heroHeight = document.querySelector('.hero').offsetHeight;

  if (window.scrollY > heroHeight) {
    header.classList.add('scrolled');
    header.classList.remove('hero');
  } else {
    header.classList.add('hero');
    header.classList.remove('scrolled');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.about-img, .section-title');

  const animateOnScroll = () => {
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100) { // Adjust the value as needed
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check
});

