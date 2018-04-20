import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Person } from "./space.js";

$(document).ready(function() {
  let person;
  $("#mercury-btn").click(function() {
    $("#planet").attr("src","img/mercury.png");
    if(person) {
      $("#result").text(person.mercuryAge());
      let canvas = document.getElementById("canvas");
      let circle = canvas.getContext("2d");
      circle.beginPath();
      circle.arc(100,75,50,0,2*Math.PI);
      circle.fillStyle="red";
      circle.fill();
    }
  });
  $("#venus-btn").click(function() {
    $("#planet").attr("src","img/venus.png");
    if(person) {
      $("#result").text(person.venusAge());
    }
  });
  $("#mars-btn").click(function() {
    $("#planet").attr("src","img/mars.png");
    if(person) {
      $("#result").text(person.marsAge());
    }
  });
  $("#jupiter-btn").click(function() {
    $("#planet").attr("src","img/jupiter.png");
    if(person) {
      $("#result").text(person.jupiterAge());
    }
  });
  $("#earth-btn").click(function() {
    $("#planet").attr("src","img/earth.png");
    if(person) {
      $("#result").text(person.birthdate);
    }
  });

  $("#bday-form").submit(function(event){
    person = new Person($("#bday").val());
    $("#result").text(person.birthdate);
    event.preventDefault();
  });
});

// overlays on the planet your age in a pie chart of expected age
