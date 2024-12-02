/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

document.addEventListener("scroll", (e) => {
  makeActive();
});

// Build menu
const buildNav = () => {
  // Iterate over sectionsData
  sections.forEach((section) => {
    const navTitle = section.dataset["nav"];
    console.dir(section);

    // Create list item
    const listItem = document.createElement("li");
    listItem.classList.add("menu__link");

    listItem.textContent = navTitle;

    listItem.addEventListener("click", navigateToSection(section));

    // Append list item to nav list
    navList.appendChild(listItem);
  });
};
buildNav();

// Scroll to section on link click
const navigateToSection = (section) => {
  return (e) => {
    const box = section.getBoundingClientRect();

    scrollTo({
      top: box.top + window.scrollY - 150,
      behavior: "smooth",
    });
  };
};

// Set sections as active
const makeActive = () => {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    // console.log(section.id + ":::: ", box);

    if (box.top <= 200 && box.bottom >= 200) {
      //apply active state on current section and corresponding Nav link
      section.classList.add("active");
    } else {
      //Remove active state from other section and corresponding Nav link
      section.classList.remove("active");
    }
  }
};
