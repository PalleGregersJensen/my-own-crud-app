"use strict"

let participants = [];

window.addEventListener("load", start);

function start() {
    console.log("JS kører");
    console.log(participants);
    document.querySelector("#participants-form").addEventListener("submit", addParticpantsToArray);
}

function addParticpantsToArray(event) {
    event.preventDefault();
    console.log("Add participant to array");
    const form = event.target;
    const name = form.name.value;
    const age = Number(form.age.value);
    const occupation = form.select.value;
    const newParticipant = createNewParticipant(name, age, occupation); 
    console.log(newParticipant);
    participants.push(newParticipant);
    console.log(participants);
    form.reset();
    showParticpants(participants);
}

function createNewParticipant(name, age, occupation) {
  const participant = {
    name: name,
    age: age,
    occupation: occupation,
  };
  return participant;
}

function showParticpants(participantsList) {
    document.querySelector("#participants-list").innerHTML="";
  for (const participant of participantsList) {
    const participantHtml = /*html*/ `<li>Name: ${participant.name} - Age: ${participant.age} - Occupation: ${participant.occupation} <button>Update</button> <button>Delete</button></li>`;
    document.querySelector("#participants-list").insertAdjacentHTML("beforeend", participantHtml);
  }
}
