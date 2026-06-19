const form = document.getElementById("enquiryForm");
const messageBox = document.getElementById("message-box");

//defining the code that will run as soon as the user clicks on submit
form.addEventListener("submit",function(event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(fname ===""){
        messageBox.textContent="Please enter your name.";
        return;
    }

    if(lname===""){
        messageBox.textContent="Please enter your last name.";
        return;
    }

    if(email===""){
        messageBox.textContent="Please enter your email.";
        return;
    }

    if(!email.includes("@")||!email.includes(".")){
        messageBox.textContent="Please eneter a valid email.";
        return;
    }

    if(message ===""){
        messageBox.textContent = "Please state your message.";
        return;
    }

    const myEmail = "ST10541318@rcconnect.edu.za";

    const subject = "New enquiry from" + fname + " " + lname;
    const body = "Name:"+ fname + " " + lname + "\nEmail:" + email + "\n\nMessage:" + message;

    window.location.href=
    "mailto:"+ myEmail + "?subject="+ encodeURIComponent(subject)+ "&body="+ encodeURIComponent(body);

    messageBox.textContent="Thank you" + " " + fname + " " + lname + " " +  "Your message has been sent.";

})

let search = document.querySelector('.search-box');

 document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
     navbar.classList.remove('active');
 }

 let navbar = document.querySelector('.navbar');

 document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
 }

 window.onscroll = () => {
     navbar.classList.remove('active');
    search.classList.remove('active');
 }




 let header = document.querySelector('header');

 window.addEventListener('scroll' ,() => {
    header.classList.toggle('shadow' , window.scrollY > 0);
 })

    var imgs = Array.from(document.querySelectorAll('.product-img'));

     imgs.forEach(function(img, i) {
     img.style.cursor = "pointer";
     img.onclick = function() { openLB(i); };
     });

     document.querySelectorAll(".btn").forEach(function(btn, i) {
     btn.href = "javascript:void(0)";
     btn.onclick = function() { openLB(i); };
});

    var cur = 0;

    function openLB(i) {
     cur = i;
     update();
     document.getElementById("lb").classList.add("open");
  }

    function closeLB() {
     document.getElementById("lb").classList.remove("open");
  }

    function changeImg(d) {
     cur = (cur + d + imgs.length) % imgs.length;
     update();
  }

    function update() {
     document.getElementById("lb-img").src = imgs[cur].src;
     document.getElementById("lb-img").alt = imgs[cur].alt;
     document.getElementById("lb-caption").textContent = imgs[cur].alt;
     document.getElementById("lb-counter").textContent = (cur + 1) + " / " + imgs.length;
  }

    document.getElementById("lb").addEventListener("click", function(e) {
     if (e.target === this) closeLB();
  });

  document.addEventListener("keydown", function(e) {
    if (!document.getElementById("lb").classList.contains("open")) return;
    if (e.key === "ArrowRight") changeImg(1);
    if (e.key === "ArrowLeft") changeImg(-1);
    if (e.key === "Escape") closeLB();
  });

let activeFilter="all";

function setFilter(category, btn) {
    activeFilter = category;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove('active'));
    btn.classList.add("active");
    filterProducts();
}

function filterProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.getElementById(".product-card");
    let visible = 0;

    cards.forEach(card => {
        const name = card.getAttribute("data-name").toLowerCase();
        const cat = card.getAttribute("data-category");
        const matchSearch = name.includes(query);
        const matchFilter = activeFilter === "all" || cat === activeFilter;

        if(matchSearch && matchFilter) {
            card.classList.remove("hidden");
            visible++;
        }else {
            card.classList,add("hidden");
        }
    });

    document.getElementById("countNum").textContent = visible;
    document.getElementById("noResults").classList.toggle("show", visible === 0);
}


