  
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

  var btn = document.getElementById('copy');
  var btn2 = document.getElementById('copy1');
  var btn3 = document.getElementById('copy_1');
  var btn4 = document.getElementById('copy1_1');
  var btn5 = document.getElementById('copy_2');
  var btn6 = document.getElementById('copy1_2');
  function code1() {
    alert("تم نسخ  النص.");
     btn2.style.display="block"
      btn4.style.display="block"
        btn6.style.display="block"
}

btn.onclick = code1;
btn3.onclick = code1;
btn5.onclick = code1;
  function code() {
      btn2.style.display="none"
          btn4.style.display="none"
            btn6.style.display="none"
  }
  
  btn2.onclick = code;
  btn4.onclick = code;
  btn6.onclick = code;