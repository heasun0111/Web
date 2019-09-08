const homebutton = document.getElementById("homebutton");

var spot1 = document.getElementById("spot1");
var spot2 = document.getElementById("spot2");
var spot3 = document.getElementById("spot3");

var spot1Result = spot1.getAttribute("checked");
var spot2Result = spot2.getAttribute("checked");
var spot3Result = spot3.getAttribute("checked");

if (spot1.getAttribute("checked") == true) {
  printf("안녕하세요.");
}

if (document.getElementById("spot2").checked == true) {
  printf("반갑습니다.");
}

function changeNum() {
  recommendSpot.innerText = `TSR이 추천하는 여행지는 ${ }입니다`;
}


homebutton.addEventListener("click", () => {
  location.href = "./Firstpage.html";
});

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );