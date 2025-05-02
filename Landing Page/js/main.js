//contacts swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
  


//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});



//Scroll down button above nav bar when closed 
const btn = document.getElementById('btn');
const homeScroll = document.querySelector('.home-scroll');

btn.addEventListener('change', () => {
  homeScroll.classList.toggle('active', btn.checked); 
});



//mailing
(function(){
  emailjs.init("KIsQqSQ-O1qOUttTl");
  })();

function SendMail() {
  var params = {
    from_name : document.getElementById("contactName").value,
    email_id : document.getElementById("contactEmail").value,
    subject : document.getElementById("contactSubject").value,
    message : document.getElementById("contactMessage").value
  }

  emailjs.send('service_8zlye6t', 'template_b91bj6d', params).then(function(response) {
    alert("Email sent successfully!");  
  });
}

function SubscribeMail() {
  var params = {email_id : document.getElementById("mc-email").value}
  emailjs.send('service_8zlye6t', 'template_3z6wrpr', params).then(function(response) {
    alert("Subscribed successfully!");  
  });

  event.preventDefault();

}