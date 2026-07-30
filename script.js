const navToggle=document.querySelector('.nav-toggle');
const navLinks=document.querySelector('.nav-links');
navToggle?.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link=>{link.addEventListener('click',()=>navLinks.classList.remove('open'))});
const filterButtons=document.querySelectorAll('.filter-btn');
const projectCards=document.querySelectorAll('.project-card');
filterButtons.forEach(button=>{button.addEventListener('click',()=>{filterButtons.forEach(btn=>btn.classList.remove('active'));button.classList.add('active');const selected=button.dataset.filter;projectCards.forEach(card=>{const categories=card.dataset.category||'';card.classList.toggle('hide',!(selected==='all'||categories.includes(selected)))});});});
