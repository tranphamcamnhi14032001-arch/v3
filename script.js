// HIỆU ỨNG SCENE
gsap.from(".scene", {
  opacity: 0,
  y: 50,
  duration: 1.4,
  stagger: 0.4,
  ease: "power2.out"
});

// HOA RƠI
const canvas = document.getElementById("petals");
const ctx = canvas.getContext("2d");
let w, h, petals = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 35; i++) {
  petals.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 6 + 4,
    s: Math.random() * 1 + 0.5
  });
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  petals.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,180,200,0.8)";
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.y += p.s;
    p.x += Math.sin(p.y * 0.01);

    if (p.y > h) {
      p.y = -10;
      p.x = Math.random() * w;
    }
  });
  requestAnimationFrame(draw);
}
draw();
// HIỆU ỨNG ẢNH HIỆN KHI SCROLL
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 200); // 👈 hiện lần lượt
    }
  });
}, {
  threshold: 0.2
});

reveals.forEach(el => observer.observe(el));
// HIỆU ỨNG CHỮ HIỆN KHI SCROLL
const textReveals = document.querySelectorAll('.reveal-text');

const textObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 100); // 👈 chữ hiện chậm & đều
    }
  });
}, {
  threshold: 0.2
});

textReveals.forEach(el => textObserver.observe(el));
