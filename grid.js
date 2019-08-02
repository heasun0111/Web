const imgCollection = document.getElementsByClassName("container");
const currentCount = document.getElementById("currentCount");

const imgList = [].slice.call(imgCollection);
let flag = [];

imgList.forEach((element) => {
    element.addEventListener("click", () => {
        if (flag.includes(element)) {

            element.style.border = "";
            flag.splice(flag.indexOf(element), 1);
        } else {
            flag.push(element);
            element.style.border = "4px red solid";
        }

        changeNum();
    });
});

function changeNum() {
    currentCount.innerText = `현재 선택된 사진 수 ${flag.length}개입니다.`;
}
