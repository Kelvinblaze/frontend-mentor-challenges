let projects = [
  {
    id: 1,
    name: "easybanking landing page",
    imageLink: "/easybank-landing-page-master/design/desktop-preview.jpg",
    liveLink: "/easybank-landing-page-master",
    github: "https://github.com/kelvinblaze",
  },
  {
    id: 2,
    name: "clipboard landing page",
    imageLink: "clipboard-landing-page-master/design/desktop-preview.jpg",
    liveLink: "/clipboard-landing-page-master",
    github: "https://github.com/kelvinblaze",
  },
  {
    id: 3,
    name: "project tracking intro component",
    imageLink: "project-tracking-intro-component-master/design/desktop-preview.jpg",
    liveLink: "/project-tracking-intro-component-master",
    github: "https://github.com/kelvinblaze",
  },
  {
    id: 1,
    name: "bookmark-landing-page-master",
    imageLink: "bookmark-landing-page-master/design/desktop-active-states.jpg",
    liveLink: "/bookmark-landing-page-master",
    github: "https://github.com/kelvinblaze",
  },
  {
    id: 1,
    name: "bookmark-landing-page-master",
    imageLink: "bookmark-landing-page-master/design/desktop-active-states.jpg",
    liveLink: "/bookmark-landing-page-master",
    github: "https://github.com/kelvinblaze",
  },
  {
    id: 1,
    name: "bookmark-landing-page-master",
    imageLink: "bookmark-landing-page-master/design/desktop-active-states.jpg",
    liveLink: "/bookmark-landing-page-master",
    github: "https://github.com/kelvinblaze",
  },
  {
    id: 1,
    name: "bookmark-landing-page-master",
    imageLink: "bookmark-landing-page-master/design/desktop-active-states.jpg",
    liveLink: "/bookmark-landing-page-master",
    github: "https://github.com/kelvinblaze",
  },
  {
    id: 1,
    name: "bookmark-landing-page-master",
    imageLink: "bookmark-landing-page-master/design/desktop-active-states.jpg",
    liveLink: "/bookmark-landing-page-master",
    github: "https://github.com/kelvinblaze",
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
