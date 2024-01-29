//**js for header**//
var index = 1;
changeImage = function(){
    var imgs = ["https://cafefcdn.com/2019/8/22/edf-tempo-couleur-de-demain-la-edf-tempo-historique-couleur-jour-et-demain-15664469984471689659056.jpg","http://figarigroup.com/wp-content/uploads/2018/04/annie-spratt-604131-unsplash-1024x702.jpg", "https://bigdata-vn.com/wp-content/uploads/2021/10/Hinh-anh-goc-lam-viec-dep-doc-dao-va-day.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index==3){
        index = 0;
    }  
}   
setInterval(changeImage,5000); 
let menu = document.getElementById('menu')
Menu = () =>{
    menu.classList.remove('disappears')
}
Close = () =>{
    menu.classList.add('disappears')
}

//**js for middle**//
//show imgs, hover
let hover=document.querySelectorAll('.hover')
let eye=document.querySelectorAll('.fa-eye')
let overlay=document.querySelectorAll('.overlay')
for(let i=0; i<eye.length;i++){
    eye[i].addEventListener('click', function(){
        overlay[i].style.transform= 'scale(1)'
        hover[i].style.transform='scale(0)'
    })
}


for(let i=0; i<overlay.length;i++){
    overlay[i].addEventListener('click', function(){
        overlay[i].style.transform= 'scale(0)'
        hover[i].style.transform='scale(5)'
    })
}



//phan nay

const filterBtns = document.querySelectorAll(".filter-btn button");
const imgs = document.querySelectorAll(".imgs");
//duyệt qua từng nút
filterBtns.forEach((btn) => {
    
    
    btn.onclick = () => {
        //lấy dữ liệu(điều kiện lọc) trong filter thông qua nút dc nhấn
        const filterCondition = btn.dataset.filter;
        
        //thêm class active cho nút được nhấn

        //dùng vòng for thay cho foreach bên dưới
        // for(var i = 0; i < filterBtns.length; i++) {
        //     filterBtns[i].classList.remove('active-btn');
        // }
        filterBtns.forEach((btn)=> {
            btn.classList.remove('active-btn');
        })
        btn.classList.add('active-btn');

        // duyệt qua các ảnh, ảnh nào có cùng filter cho hiển thị phần tử cha, còn k thì ẩn đi
        //dùng vòng for thay thế foreach bên dưới
        // for(var i = 0; i < imgs.length; i++) {
        //     if (imgs[i].classList.contains(filterCondition)) {
        //         //parentElement là thẻ cha (slideImgs)
        //         imgs[i].parentElement.style.display = "block";
        //     } else {
        //         imgs[i].parentElement.style.display = "none";
        //     }
        // }

        imgs.forEach((img) => {
            
            if (img.classList.contains(filterCondition)) {
                img.parentElement.style.display = "block";
            } else {
                img.parentElement.style.display = "none";
            }
        });
    };
});


//**js for footer **/
//js intro
let number = document.querySelectorAll(".number");
function count(element) {
  let numTarget = element.innerHTML;
  for (let i = 0; i <= numTarget; i++) {
    setTimeout(() => {
      const n = i;
      element.innerHTML = n;
    }, (3000.0 / numTarget) * i);
  }
}

number.forEach((el) => {
  count(el);
});
//js contact
//tạo object Validator
function Validator(options) {
  var formElement = document.querySelector(options.form);
  function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );
    var errorMessage = rule.test(inputElement.value);
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }
  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
          inputElement.oninput = function () {
            var errorElement = inputElement.parentElement.querySelector(
              options.errorSelector
            );
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("invalid");
          };
        };
      }
    });
  }
}
//Định nghĩa rules
Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim()
        ? undefined
        : `Please enter your ${selector.slice(1)}`;
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : "Please enter your email";
    },
  };
};

Validator({
  form: "#contact-form",
  errorSelector: ".form-message",
  rules: [
    Validator.isRequired("#name"),
    Validator.isEmail("#email"),
    Validator.isRequired("#subject"),
  ],
});
