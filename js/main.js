//last is to check local of submit has value then go to box finish
let submited = localStorage.getItem("submited");

if (submited !== null) {
  document.querySelector(
    ".Box-Finish .rate"
  ).innerHTML = `You selected ${submited} out of 5`;
  document.querySelector(".Box-Rating").style.display = "none";
  document.querySelector(".Box-Finish").style.display = " block";
}
// first the click in number of rate
let rateChoosen = document.querySelectorAll(".Box-Rating span");

//second add active class for span
rateChoosen.forEach((span) =>
  span.addEventListener("click", (even) => {
    even.target.parentElement.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    even.target.classList.add("active");
  })
);

//third click to submit to go to another

let submit = document.querySelector("input");
//append the span "the selected rate in box finish"
submit.onclick = () => {
  let spanActive = document.querySelector(".Box-Rating span.active");
  if (spanActive !== null) {
    let value = spanActive.textContent;
    document.querySelector(
      ".Box-Finish .rate"
    ).innerHTML = `You selected ${value} out of 5`;
    //add value to local storage
    localStorage.setItem("submited", value);
    //change from box one to box two
    document.querySelector(".Box-Rating").style.display = "none";
    document.querySelector(".Box-Finish").style.display = " block";
  } else {
    submit.preventEvent;
  }
};
