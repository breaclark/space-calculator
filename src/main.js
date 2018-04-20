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
      $("#result").text(person.mercuryAge());
      circle.clearRect(0, 0, canvas.width, canvas.height);
      circle.beginPath();
      circle.arc(300,300,200,0,1*Math.PI);
      circle.fillStyle="red";
      circle.fill();
    }
  });
  $("#venus-btn").click(function() {
    $("#planet").attr("src","img/venus.png");
    if(person) {
      $("#result").text(person.venusAge());
      circle.clearRect(0, 0, canvas.width, canvas.height);
      circle.beginPath();
      circle.arc(300,300,200,0,2*Math.PI);
      circle.fillStyle="red";
      circle.fill();
    }
  });
  $("#mars-btn").click(function() {
    $("#planet").attr("src","img/mars.png");
    if(person) {
      $("#result").text(person.marsAge());
      circle.clearRect(0, 0, canvas.width, canvas.height);
      circle.beginPath();
      circle.arc(300,300,200,0,2*Math.PI);
      circle.fillStyle="red";
      circle.fill();
    }
  });
  $("#jupiter-btn").click(function() {
    $("#planet").attr("src","img/jupiter.png");
    if(person) {
      $("#result").text(person.jupiterAge());
      circle.clearRect(0, 0, canvas.width, canvas.height);
      circle.beginPath();
      circle.arc(300,300,200,0,2*Math.PI);
      circle.fillStyle="red";
      circle.fill();
    }
  });
  $("#earth-btn").click(function() {
    $("#planet").attr("src","img/earth.png");
    if(person) {
      $("#result").text(person.birthdate);
      circle.clearRect(0, 0, canvas.width, canvas.height);
      circle.beginPath();
      circle.arc(300,300,200,0,2*Math.PI);
      circle.fillStyle="red";
      circle.fill();
    }
  });

  $("#bday-form").submit(function(event){
    person = new Person($("#bday").val());
    $("#result").text(person.birthdate);
    circle.beginPath();
    circle.arc(300,300,200,0,2*Math.PI);
    circle.fillStyle="red";
    circle.fill();
    event.preventDefault();
  });
});

// overlays on the planet your age in a pie chart of expected age
