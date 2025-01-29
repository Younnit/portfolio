// Element Selectors
const clock = document.getElementsByClassName("clock");

// Clock Timezone Display and Functionality
function dateToText(date) {
  var hours = date.getHours()
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if (minutes < 10) minutes = '0'+minutes;
  if  (seconds < 10) seconds = '0'+seconds;
  if (hours < 10) hours = '0'+hours;
  return hours + ":" + minutes  + ":" + seconds;
}
function updateClocks() {
for (var i = 0; i < window.arrClocks.length; i++) {
  var clock = window.arrClocks[i];
  var offset = window.arrOffsets[i];
  clock.innerHTML = dateToText(new Date(new Date().getTime()+offset));
}
}
function startClocks() {
clockElements = document.getElementsByClassName('clock');
window.arrClocks = []
window.arrOffsets = [];
var j = 0;
for(var i = 0; i < clockElements.length; i++) {
  el = clockElements[i];
  timezone = parseInt(el.getAttribute('timezone'));
  if (!isNaN(timezone)) {
    var tzDifference = timezone * 60 + (new Date()).getTimezoneOffset();
    var offset = tzDifference * 60 * 1000;
    window.arrClocks.push(el);
    window.arrOffsets.push(offset);
  }
}
updateClocks();
clockID = setInterval(updateClocks, 1000);
}
setTimeout(startClocks, 100);


// Modal data for each project
const projectDetails = {
  bon: {
      title: "Balance of Nature",
      description: "Bon is a landing page project showcasing beautiful designs and responsive layouts.",
      link: "https://balanceofnature.com/",
      image: "./assets/images/bon-logo.png",
      hero: "./assets/images/bon-landing.png"
  },
  drp: {
      title: "Dr. Phytos",
      description: "Drp is an application that simplifies task management and productivity.",
      link: "https://drphytos.com/",
      image: "./assets/images/dr_phytos_logo_new.png",
      hero: "./assets/images/drP-product.png"
  }
};

// MODAL FUNCTIONALITY
// Open the modal and populate it with the appropriate data
function openModal(project) {
  const modal = document.getElementById("modal");
  const description = document.getElementById("modal-description");
  const link = document.getElementById("modal-link");
  const image = document.getElementById("modal-image");
  const hero = document.getElementById("modal-hero");

  // Populate modal content

  description.textContent = projectDetails[project]?.description || "Details not available.";
  link.href = projectDetails[project]?.link || "#";
  image.src = projectDetails[project]?.image || "";
  image.alt = projectDetails[project]?.title || "Unknown Project";
  hero.src = projectDetails[project]?.hero || "Unknown Project";

  // Show modal
  modal.style.display = "flex";
}

// Close the modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
      closeModal();
  }
};