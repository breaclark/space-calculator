import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Person } from "./space.js";

$(document).ready(function() {

  let canvas = document.getElementById("canvas");
  let circle = canvas.getContext("2d");

  let person;
  $("#mercury-btn").click(function() {
    $("#planet").attr("src","img/mercury.png");
    if(person) {
      let mercVal = person.mercuryAge();
      $("#result").text(mercVal);
      let arcVal = (mercVal/(78.7*.24))*2*Math.PI;
      circle.clearRect(0, 0, canvas.width, canvas.height);
      circle.beginPath();
      circle.moveTo(300,300);
      circle.arc(300,300,200,0,arcVal);
      circle.closePath();
      circle.fillStyle="rgb(40, 40, 40, 0.7)";
      circle.fill();
    }
  });
  $("#venus-btn").click(function() {
    $("#planet").attr("src","img/venus.png");
    if(person) {
      let venVal = person.venusAge();
      $("#result").text(venVal);
      let arcVal = (venVal/(78.7*.62))*2*Math.PI;
      circle.clearRect(0, 0, canvas.width, canvas.height);
      circle.beginPath();
      circle.moveTo(300,300);
      circle.arc(300,300,200,0,arcVal);
      circle.closePath();
      circle.fillStyle="rgb(40, 40, 40, 0.7)";
      circle.fill();
    }
  });
  $("#mars-btn").click(function() {
    $("#planet").attr("src","img/mars.png");
    if(person) {
      let marsVal = person.marsAge();
      $("#result").text(marsVal);
      let arcVal = (marsVal/(78.7*1.88))*2*Math.PI;
      circle.clearRect(0, 0, canvas.width, canvas.height);
      circle.beginPath();
      circle.moveTo(300,300);
      circle.arc(300,300,200,0,arcVal);
      circle.closePath();
      circle.fillStyle="rgb(40, 40, 40, 0.7)";
      circle.fill();
    }
  });
  $("#jupiter-btn").click(function() {
    $("#planet").attr("src","img/jupiter.png");
    if(person) {
      let jupVal = person.jupiterAge();
      $("#result").text(jupVal);
      let arcVal = (jupVal/(78.7*11.86))*2*Math.PI;
      circle.clearRect(0, 0, canvas.width, canvas.height);
      circle.beginPath();
      circle.moveTo(300,300);
      circle.arc(300,300,200,0,arcVal);
      circle.closePath();
      circle.fillStyle="rgb(40, 40, 40, 0.7)";
      circle.fill();
    }
  });
  $("#earth-btn").click(function() {
    $("#planet").attr("src","img/earth.png");
    if(person) {
      let earthVal = person.birthdateToNowSeconds() / 31556952;
      $("#result").text(earthVal);
      let arcVal = (earthVal/(78.7))*2*Math.PI;
      circle.clearRect(0, 0, canvas.width, canvas.height);
      circle.beginPath();
      circle.moveTo(300,300);
      circle.arc(300,300,200,0,arcVal);
      circle.closePath();
      circle.fillStyle="rgb(40, 40, 40, 0.7)";
      circle.fill();
    }
  });

  $("#bday-form").submit(function(event){
    person = new Person($("#bday").val());
    $("#result").text(person.birthdate);
    // let earthVal = person.birthdateToNowSeconds() / 31556952;
    // $("#result").text(earthVal);
    // let arcVal = (earthVal/(78.7))*2*Math.PI;
    // circle.clearRect(0, 0, canvas.width, canvas.height);
    // circle.beginPath();
    // circle.moveTo(300,300);
    // circle.arc(300,300,200,0,arcVal);
    // circle.closePath();
    // circle.fillStyle="rgb(40, 40, 40, 0.7)";
    // circle.fill();
  });
});

// overlays on the planet your age in a pie chart of expected age
