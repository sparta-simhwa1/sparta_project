//div
const inputSearch = document.querySelector(".input-search");
const searchButton = document.querySelector(".search-button");
//menu button
const menu1 = document.querySelector(".menu-1");
const menu2 = document.querySelector(".menu-2");
const menu3 = document.querySelector(".menu-3");
//menu-map button 
const dosim = document.querySelector(".dosim");
const dongnam = document.querySelector(".dongnam")
const seonam = document.querySelector(".seonam")
const seobook = document.querySelector(".seobook")
const dongbook = document.querySelector(".dongbook")
//(menu-map button) detail
const detaildosim = document.querySelector(".detail-dosim");
const detaildongnam = document.querySelector(".detail-dongnam");
const detailseonam = document.querySelector(".detail-seonam");
const detailseobook = document.querySelector(".detail-seobook");
const detaildongbook = document.querySelector(".detail-dongbook");



//menumap - detail 토글
function toggledosim(){
    detaildosim.style.display = (detaildosim.style.display != 'none') ? "none" : "block";}
function toggledongnam() {
    detaildongnam.style.display = (detaildongnam.style.display != 'none') ? "none" : "block";} 
function toggleseonam() {
  detailseonam.style.display = (detailseonam.style.display != 'none') ? "none" : "block";} 
function toggleseobook() {
  detailseobook.style.display = (detailseobook.style.display != 'none') ? "none" : "block";} 
function toggledongbook() {
  detaildongbook.style.display = (detaildongbook.style.display != 'none') ? "none" : "block";} 
//클릭함수
function menu1click() {
    console.log("hungry")
}
 //이벤트추가  
dosim.addEventListener("click", toggledosim)
dongnam.addEventListener("click", toggledongnam)
seonam.addEventListener("click", toggleseonam)
seobook.addEventListener("click", toggleseobook)
dongbook.addEventListener("click", toggledongbook)
//클릭이벤트
menu1.addEventListener("click", menu1click)

//menumap - detail 토글