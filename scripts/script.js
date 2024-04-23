const button = document.getElementById("showSummary");
const aside = document.getElementById("summaryCard");

const skillCards = document.querySelectorAll(".skill-card");
const years = document.querySelectorAll(".skill-experience");
const recentlyUsed = document.querySelectorAll(".skill-recently-used");

button.addEventListener("click", () => {
  aside.classList.toggle("showHideAside");
});

function toggleHamburgerMenu() {
  const hamburgerMenu = document.getElementsByClassName("hamburger-menu");

  hamburgerMenu.classList.toggle("");
}

for (let i = 0; i < skillCards.length; i++) {
  const card = skillCards[i];
  card.addEventListener("mouseover", () => {
    years[i].style.display = "block";
    recentlyUsed[i].style.display = "block";
  });

  card.addEventListener("mouseout", () => {
    years[i].style.display = "none";
    recentlyUsed[i].style.display = "none";
  });
}

const navItems = document.querySelectorAll(".domain-item");
const domainTabs = document.querySelectorAll(".domain-item-details");

for (let i = 0; i < navItems.length; i++) {
  const tab = domainTabs[i];
  tab.classList.remove("showDetail");
  navItems[i].addEventListener("mouseover", () => {
    domainTabs.forEach((item) => item.classList.remove("showDetail"));
    tab.classList.add("showDetail");
  });
}
