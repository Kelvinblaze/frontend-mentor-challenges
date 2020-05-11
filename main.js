let projects = [
  {
    id: 1,
    name: "easybanking landing page",
    imageLink: "/easybank-landing-page-master/design/desktop-preview.jpg",
    liveLink: "/easybank-landing-page-master",
    github: "https://github.com/Kelvinblaze/frontend-mentor-challenges//easybank-landing-page-master",
  },
  {
    id: 2,
    name: "clipboard landing page",
    imageLink: "clipboard-landing-page-master/design/desktop-preview.jpg",
    liveLink: "/clipboard-landing-page-master",
    github: "https://github.com/Kelvinblaze/frontend-mentor-challenges//clipboard-landing-page-master",
  },
  {
    id: 3,
    name: "project tracking intro component",
    imageLink: "project-tracking-intro-component-master/design/desktop-preview.jpg",
    liveLink: "/project-tracking-intro-component-master",
    github: "https://github.com/Kelvinblaze/frontend-mentor-challenges/project-tracking-intro-component-master/",
  },
  {
    id: 4,
    name: "single price grid component",
    imageLink: "single-price-grid-component-master/design/desktop-preview.jpg",
    liveLink: "/single-price-grid-component-master",
    github: "https://github.com/Kelvinblaze/frontend-mentor-challenges/single-price-grid-component-master/",
  },
  {
    id: 4,
    name: "bookmark landing page master",
    imageLink: "bookmark-landing-page-master/design/desktop-preview.jpg",
    liveLink: "/bookmark-landing-page-master",
    github: "https://github.com/Kelvinblaze/frontend-mentor-challenges/bookmark-landing-page-master/",
  },
  {
    id: 5,
    name: "Where in the world",
    imageLink: "where-in-the-world/src/design/desktop-preview.jpg",
    liveLink: "https://widw.herokuapp.com",
    github: "https://github.com/Kelvinblaze/where-in-the-world",
  },
  {
    id: 6,
    name: "Fylo Dark Theme Landing Page",
    imageLink: "fylo/design/desktop-preview.jpg",
    liveLink: "/fylo",
    github: "https://github.com/Kelvinblaze/frontend-mentor-challenges/fylo",
  },
  {
    id: 7,
    name: "Huddle landing page with alternating feature blocks",
    imageLink: "huddle/design/desktop-preview.jpg",
    liveLink: "/huddle",
    github: "https://github.com/Kelvinblaze/frontend-mentor-challenges/huddle",
  },
];
let projectContent = document.querySelector(".project-content");
var fragment = document.createDocumentFragment();

projects.forEach((project) => {
  let div = document.createElement("div");
  div.innerHTML = `  <div class="card">
   <div class="card-image">
       <img src="${project.imageLink}" alt="${project.name}">
   </div>
   <div class="card-title">
       ${project.id}. ${project.name}
   </div>
   <div class="card-actions">
       <a href="${project.liveLink}">
           <span class="ti ti-eye"></span>
       </a>
       <a href="${project.github}">
           <span class="ti ti-link"></span>
       </a>
   </div>
</div>`;

  fragment.appendChild(div);
});

projectContent.appendChild(fragment);
