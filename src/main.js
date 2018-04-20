import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Person } from "./space.js";


function planetDraw (canvas, circle, planetVal, multiplier) {
  let arcVal = (planetVal/(78.7 * multiplier)) * 2 * Math.PI;
  circle.clearRect(0, 0, canvas.width, canvas.height);
  circle.beginPath();
  circle.moveTo(270,270);
  circle.arc(270,270,220,0,arcVal);
  circle.closePath();
  circle.fillStyle="rgb(40, 40, 40, 0.7)";
  circle.fill();
}

$(document).ready(function() {

  let canvas = document.getElementById("canvas");
  let circle = canvas.getContext("2d");
  let person;
  let planet = "earth";

  $("#mercury-btn").click(function() {
    planet ="mercury";
    $("#planet").attr("src","img/mercury.png");
    if(person) {
      let mercVal = person.mercuryAge();
      planetDraw(canvas, circle, mercVal, 0.24);
      $("#years").text(Math.floor(mercVal) + " years old");
      $("#years-left").text(Math.floor(person.mercuryLifeLeft()) + " years left");
    }
  });
  $("#venus-btn").click(function() {
    planet = "venus";
    $("#planet").attr("src","img/venus.png");
    if(person) {
      let venVal = person.venusAge();
      planetDraw(canvas, circle, venVal, 0.62);
      $("#years").text(Math.floor(venVal) + " years old");
      $("#years-left").text(Math.floor(person.venusLifeLeft()) + " years left");
    }
  });
  $("#mars-btn").click(function() {
    planet = "mars";
    $("#planet").attr("src","img/mars.png");
    if(person) {
      let marsVal = person.marsAge();
      planetDraw(canvas, circle, marsVal, 1.88);
      $("#years").text(Math.floor(marsVal) + " years old");
      $("#years-left").text(Math.floor(person.marsLifeLeft()) + " years left");
    }
  });
  $("#jupiter-btn").click(function() {
    planet = "jupiter";
    $("#planet").attr("src","img/jupiter.png");
    if(person) {
      let jupVal = person.jupiterAge();
      planetDraw(canvas, circle, jupVal, 11.86);
      $("#years").text(Math.floor(jupVal) + " years old");
      $("#years-left").text(Math.floor(person.jupiterLifeLeft()) + " years left");
    }
  });
  $("#earth-btn").click(function() {
    planet = "earth";
    $("#planet").attr("src","img/earth.png");
    if(person) {
      let earthVal = person.birthdateToNowSeconds() / 31556952;
      planetDraw(canvas, circle, earthVal, 1);
      $("#years").text(Math.floor(earthVal) + " years old");
      $("#years-left").text(Math.floor(78.7 - earthVal) + " years left");
    }
  });
  $("#bday-form").submit(function(event){
    person = new Person($("#bday").val());
    $("#" + planet + "-btn").click();
    $("#bday-form")[0].reset();
    event.preventDefault();
  });
});
