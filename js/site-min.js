$((function(){$(".view-library").click((function(){$(".read").addClass("open")})),$(".book-list-close").click((function(){$(this).removeClass("open"),$(".read").removeClass("open")}))})),$(window).load((function(){$("body").addClass("active")})),window.addEventListener("DOMContentLoaded",(()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{const t=e.target.getAttribute("id");e.intersectionRatio>0?document.querySelector(`nav a[href="#${t}"]`).classList.add("active"):document.querySelector(`nav a[href="#${t}"]`).classList.remove("active")}))}));document.querySelectorAll("div[id]").forEach((t=>{e.observe(t)}))}));