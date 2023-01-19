import { leftIcons, rightIcons, addressData, aboutMeText } from './home-page-data.js';
import { environment } from './environment.js';

const headerLeftElm = document.getElementById('header-left');
const headerRightElm = document.getElementById('header-right');
const addressElm = document.getElementById('address');
const aboutMeElm = document.getElementById('about-me');
const edLinksElm = document.getElementById('ed-links');
const subscriptionFormElm = document.getElementById('subscription-form');

function addIconsToHeader(element, header) {
  element.innerHTML = header;
}

function addAddress() {
  addressElm.innerHTML = `
    <a class="address__line email-text" href="mailto:${addressData.email}" rel="noopener noreferrer">
      <i class="fas fa-envelope"></i>
      ${addressData.email}
    </a>
    <a
      class="address__line bg-linkedin"
      href="https://linkedin.com/in/${addressData.linkedin}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab fa-linkedin"></i> Linkedin
    </a>
    <a
      class="address__line bg-github"
      href="https://github.com/${addressData.github}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab fa-github-square"></i> Github
    </a>
    <a
      class="address__line bg-resume"
      href="${addressData.resume}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fas fa-file"></i> Resume
    </a>
  `;
}

function addAboutMe() {
  aboutMeElm.innerHTML = aboutMeText;
}

async function fetchEdLinks() {
//  try {
//    const edUrl = environment.edLinkUrl;
//    const response = await fetch(edUrl);
//
//    return response.json();
//  } catch (error) {
//    console.error(error);
//    // Fail silently
//  }
return [{link:'https://github.com/MerlinDevarapaga/Automotive/tree/main/ADAS',
text:'ADAS'},
{link:'https://github.com/MerlinDevarapaga/Automotive/tree/main/Basic car knowledge',text:'Basic car knowledge'},

{link:'https://github.com/MerlinDevarapaga/Automotive/tree/main/CAN',text:'CAN'},

{link:'https://github.com/MerlinDevarapaga/Automotive/tree/main/CANOE',text:'CANOE'},

{link:'https://github.com/MerlinDevarapaga/Automotive/tree/main/ECU',text:'ECU'},

{link:'https://github.com/MerlinDevarapaga/Automotive/tree/main/Ethernet',text:'Ethernet'},

{link:'https://github.com/MerlinDevarapaga/Automotive/tree/main/FUSA',text:'Introduction to Automotive Engineering'},

{link:'https://github.com/MerlinDevarapaga/Automotive/tree/main/ADAS',text:'ISO 26262'},

{link:'https://github.com/MerlinDevarapaga/Automotive/tree/main/ADAS',text:'LIN'},

{link:'https://github.com/MerlinDevarapaga/Automotive/tree/main/ADAS',text:'UDS'},


]

}

async function addEdLinks() {
  const edLinks = await fetchEdLinks();

  edLinksElm.innerHTML = `
    ${edLinks.reduce((acc, item) => {
      acc += `
        <li>
          <a href="${item.link}" target="_blank" style="color: #0969da">${item.text}</a>
        </li>
      `;

      return acc;
    }, '')}      
  `;
}

async function main() {
  addAddress();
  addAboutMe();
  await addEdLinks();
}

(async () => {
  await main();
})();
