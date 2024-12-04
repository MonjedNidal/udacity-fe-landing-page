// Define Global Variables
const sections = document.querySelectorAll("section");
const navList = document.querySelector("#nav_list");

// Scroll to section on link click
const navigateToSection = (section) => {
  const box = section.getBoundingClientRect();

  scrollTo({
    top: box.top + window.scrollY - 150,
    behavior: "smooth",
  });
};

// Set sections as active
const makeActive = () => {
  for (let i = 0; i < sections.length; i++) {
    const box = sections[i].getBoundingClientRect();
    const navLink = navList.querySelector(`[data-index="${i}"]`);

    if (box.top <= 200 && box.bottom >= 200) {
      //apply active state on current section and corresponding Nav link
      sections[i].classList.add("active");
      navLink.classList.add("active_link");
    } else {
      //Remove active state from other section and corresponding Nav link
      sections[i].classList.remove("active");
      navLink.classList.remove("active_link");
    }
  }
};

// Build menu
const buildNav = () => {
  // Iterate over sectionsData
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const navTitle = section.dataset["nav"];

    // Create list item
    const listItem = document.createElement("li");
    const navLink = document.createElement("a");

    navLink.classList.add("nav_link");
    navLink.dataset["index"] = i;

    navLink.textContent = navTitle;

    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      navigateToSection(section);
    });

    listItem.appendChild(navLink);

    // Append list item to nav list
    navList.appendChild(listItem);
  }
};

document.addEventListener("scroll", (e) => {
  makeActive();
});

buildNav();
