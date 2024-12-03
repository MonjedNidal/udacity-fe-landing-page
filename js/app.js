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

// Build menu
const buildNav = () => {
  console.log("buildNav navList", navList);

  // Iterate over sectionsData
  sections.forEach((section) => {
    const navTitle = section.dataset["nav"];
    console.dir(section);

    // Create list item
    const listItem = document.createElement("li");
    const navLink = document.createElement("a");

    navLink.classList.add("menu__link");

    navLink.textContent = navTitle;

    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      navigateToSection(section);
    });

    listItem.appendChild(navLink);

    // Append list item to nav list
    navList.appendChild(listItem);
  });
};

document.addEventListener("scroll", (e) => {
  makeActive();
});

buildNav();
