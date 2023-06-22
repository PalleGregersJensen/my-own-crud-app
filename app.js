"use strict";

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
  const upvote = 0;
  const newParticipant = createNewParticipant(name, age, occupation, upvote);
  console.log(newParticipant);
  participants.push(newParticipant);
  console.log(participants);
  form.reset();
  showParticpants(participants);
}

function createNewParticipant(name, age, occupation, upvote) {
  const participant = {
    name: name,
    age: age,
    occupation: occupation,
    upvote: upvote,
  };
  return participant;
}

function showParticpants(participantsList) {
  document.querySelector("#participants-list").innerHTML = "";
  for (const participant of participantsList) {
    const participantHtml = /*html*/ `<li>Name: ${participant.name} - Age: ${participant.age} - Occupation: ${participant.occupation} <button class="update-button">Update</button> <button class="delete-button">Delete</button><button class="upvote-button">Upvote</button></li>`;
    document.querySelector("#participants-list").insertAdjacentHTML("beforeend", participantHtml);

    const participantElement = document.querySelector("#participants-list li:last-child");
    const updateButton = participantElement.querySelector(".update-button");
    const deleteButton = participantElement.querySelector(".delete-button");
    const upvoteButton = participantElement.querySelector(".upvote-button");

    updateButton.addEventListener("click", updateParticipant);
    deleteButton.addEventListener("click", deleteParticipant);
    upvoteButton.addEventListener("click", upvoteParticipant);

  }
}

function updateParticipant() {
  console.log("update participant");
  
}

function deleteParticipant() {
  console.log("delete participant");
  // participants.pop();
  // console.log(participants);
  // showParticpants(participants);
}

function upvoteParticipant() {
  console.log("upvote participant");
  upvote++;
  console.log(participants);
}
