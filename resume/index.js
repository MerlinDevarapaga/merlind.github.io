import { experience, edData, workedOnRecently, familiarWith } from "./module/data.js";

const expDiv = document.getElementById("experience");
const edDiv = document.getElementById("education");
const workedRecentlyDiv = document.getElementById("workedOnRecently");
const familiarDiv = document.getElementById("familiarWith");
const printMeDiv = document.getElementById("printMe");

printMeDiv.addEventListener("click", () => {
  printMeDiv.style.display = "none";
  window.print();
  printMeDiv.style.display = "block";
});

function renderExperience() {
  const template = experience.reduce((acc, exp) => {
    acc += `
    <article>
    <h2>
      <span class="org-name">${exp.organization},</span>
      <span class="exp-sub__text"> ${exp.location} — ${exp.designation}</span>
    </h2>
    <p class="from-to">${exp.workedFrom} - ${exp.workedTo}</p>

    <ul> 
      ${exp.didWhat.reduce((liAcc, work) => (liAcc += `<li>${work}</li>`), "")}
    </ul>
  </article>
  `;

    return acc;
  }, "");

  expDiv.innerHTML = template;
}

function renderEducation() {
  const template = edData.reduce((acc, ed) => {
    acc += `
    <article>
    <h2>
      <span class="org-name">${ed.name},</span>
      <span class="exp-sub__text"> ${ed.location} — ${ed.course}</span>
    </h2>
    <p class="from-to">${ed.fromDate} - ${ed.toDate} - <span class="agreegate">${ed.aggregate}</span></p>
    </article>
    `;

    return acc;
  }, "");

  edDiv.innerHTML = template;
}

function renderSkills() {
  const workedRecentlyTemplate = workedOnRecently.reduce(
    (acc, skill) =>
      (acc += `
    <p><span class="skill-title">${skill.category} : </span> ${skill.value}</p>
  `),
    ""
  );

  const familiarWithTemplate = familiarWith.reduce(
    (acc, skill) =>
      (acc += `
    <p><span class="skill-title">${skill.category} : </span> ${skill.value}</p>
  `),
    ""
  );

  workedRecentlyDiv.innerHTML = workedRecentlyTemplate;
  familiarDiv.innerHTML = familiarWithTemplate;
}

(function main() {
  renderExperience();
  renderEducation();
  renderSkills();
})();
