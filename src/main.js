import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Person } from "./space.js";

$(document).ready(function() {
  $("#mercury-btn").click(function() {
    $("#planet").attr("src","img/mercury.png");
  });
  $("#venus-btn").click(function() {
    $("#planet").attr("src","img/venus.png");
  });
  $("#mars-btn").click(function() {
    $("#planet").attr("src","img/mars.png");
  });
  $("#jupiter-btn").click(function() {
    $("#planet").attr("src","img/jupiter.png");
  });
  $("#earth-btn").click(function() {
    $("#planet").attr("src","img/earth.png");
  });

  $("#bday-form").submit(function(event){
    let person = new Person($("#bday").val());
    $("#result").text(person.birthdate);
    event.preventDefault();
  });
});


// at the bottom have a tell me my age button
// overlays on the planet your age in a pie chart of expected age
