"use strict";

const form = document.querySelector("#basic-form");
const startDate = document.getElementById("start-date");
const endDate = document.getElementById("end-date");
const fullName = document.getElementById("name");
const DoB = document.getElementById("date-of-birth");
const button = document.getElementById("#submit-button");
const fileName = document.getElementById("filename");
const store = {};
form.addEventListener("submit", (e) => {
  if (startDate.value > endDate.value) {
    alert("Please enter correct date");
  }
  store.name = `${fullName.value}`;
  store.startdate = `${startDate.value}`;
  store.enddate = `${endDate.value}`;
  store.dob = `${DoB.value}`;
  localStorage.setItem("dataform", JSON.stringify(store));
});

// function myFunc(e) {

//   localStorage.setItem("bName", bName);
// };
