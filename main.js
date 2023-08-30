let curr = document.querySelectorAll(".curr-h span");
let prev = document.querySelectorAll(".prev-h span");
let alldivs = document.querySelectorAll("main > div");
let li = document.querySelectorAll("li");

let show = "";
//console.log(alldivs.length);

document.addEventListener("click", function (e) {
  for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("active");
  }
  for (let i = 0; i < li.length; i++) {
    if (li[i] == e.target) {
      //console.log(e.target);
      li[i].classList.add("active");
      show = li[i].innerHTML.toLowerCase();
      //console.log(show.toLowerCase());
      Func();
    }
  }
});
function Func() {
  fetch("./data.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.length);
      for (let i = 0; i < data.length; i++) {
        if (alldivs[i + 1].className == data[i].title) {
          if (show === "daily") {
            //console.log(data[i].timeframes.daily.current);
            curr[i].innerHTML = data[i].timeframes.daily.current;
            //console.log(data[i].timeframes.daily.previous);
            prev[i].innerHTML = ` day-${data[i].timeframes.daily.previous}`;
          } else if (show == "weekly") {
            curr[i].innerHTML =data[i].timeframes.weekly.current;
            //console.log(data[i].timeframes.weekly.current);
            prev[i].innerHTML =` week-${data[i].timeframes.weekly.previous}`;
          } else if (show == "monthly") {
            curr[i].innerHTML=data[i].timeframes.monthly.current;
            //console.log(data[i].timeframes.monthly.current);
            prev[i].innerHTML=` month-${data[i].timeframes.monthly.previous}`;

          }
        }
      }
    });
}
