var data = JSON.parse(localStorage.getItem("details"));
console.log(data);

document.querySelector("#boxs").innerText = "";
data.map((el) => {
  var tempr = document.createElement("div");
  var tds1 = document.createElement("h3");
  tds1.innerText = `Email:${el.email}`;
  tds1.style.textAlign = "center";
  tds1.setAttribute("class", "mails");
  var tsr1 = document.createElement("div");
  tsr1.setAttribute("class", "codes");
  var tds2 = document.createElement("h3");
  tds2.innerText = `${el.mobiles}`;
  tds2.style.textAlign = "center";
  var tds3 = document.createElement("h3");
  tds3.innerText = `Mobile No:+${el.codes.s.dialCode}-`;
  tds3.style.textAlign = "center";
  tsr1.append(tds3, tds2);
  tempr.append(tds1, tsr1);
  document.querySelector("#boxs").append(tempr);
});
