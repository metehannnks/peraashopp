const cart = [];
const cartList = document.getElementById("cart");
const totalElement = document.getElementById("total");

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ${item.price} TL 
      <button onclick="removeFromCart(${index})">Sil</button>`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalElement.textContent = total;
}

// Carousel mantığı
document.querySelectorAll('.carousel').forEach(carousel => {
  carousel.currentIndex = 0;
});

function moveSlide(button, direction) {
  const carousel = button.closest('.carousel');
  const imagesContainer = carousel.querySelector('.carousel-images');
  const images = imagesContainer.querySelectorAll('img');
  const imageWidth = carousel.offsetWidth;

  carousel.currentIndex += direction;

  if (carousel.currentIndex < 0) {
    carousel.currentIndex = images.length - 1;
  } else if (carousel.currentIndex >= images.length) {
    carousel.currentIndex = 0;
  }

  imagesContainer.style.transform = `translateX(-${carousel.currentIndex * imageWidth}px)`;
}


function openCheckout() {
  document.getElementById("checkoutModal").style.display = "block";
}

function closeCheckout() {
  document.getElementById("checkoutModal").style.display = "none";
  document.querySelectorAll(".checkout-step").forEach((step, i) => {
    step.style.display = i === 0 ? "block" : "none";
  });
}

let currentStep = 1;
function nextStep() {
  if (currentStep === 1) {
    // Basit doğrulama
    if (
      !document.getElementById("firstName").value ||
      !document.getElementById("lastName").value ||
      !document.getElementById("address").value ||
      !document.getElementById("phone").value ||
      !document.getElementById("email").value
    ) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }
  }

  if (currentStep === 2) {
    if (
      !document.getElementById("cardName").value ||
      !document.getElementById("cardNumber").value ||
      !document.getElementById("cvv").value
    ) {
      alert("Lütfen kart bilgilerini eksiksiz giriniz.");
      return;
    }
  }

  document.querySelector(`.step${currentStep}`).style.display = "none";
  currentStep++;
  document.querySelector(`.step${currentStep}`).style.display = "block";
}


