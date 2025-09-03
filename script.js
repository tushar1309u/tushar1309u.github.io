// Data (projects & skills) - pulled from your GitHub repo structure
const projects = [
  {
    title: "Amazon Clone Homepage",
    description: "Responsive homepage replicating Amazon’s layout using HTML and CSS.",
    tags: ["HTML","CSS","Responsive"],
    image: "amazon1.png",
    link: "https://github.com/tushar1309u/Frontend-project/tree/main/amazon%20cloning"
  },
  {
    title: "Tic Tac Toe Game",
    description: "2-player game with automated win/draw detection logic using JavaScript and DOM.",
    tags: ["JavaScript","DOM"],
    image: "tictactoe.png",
    link: "https://github.com/tushar1309u/Frontend-project/tree/main/tic%20tac%20toe"
  },
  {
    title: "E-commerce Forum",
    description: "Product listing and state management with React.js hooks, modern responsive UI.",
    tags: ["React","Hooks"],
    image: "ecomm.png",
    link: "https://github.com/tushar1309u/Frontend-project/tree/main/E%20Commerce%20forum/ecommerce-forum"
  },
  {
    title: "To-Do List App",
    description: "Task manager app with CRUD functionality built in React.js.",
    tags: ["React","CRUD"],
    image: "todolist.png",
    link: "https://github.com/tushar1309u"
  },
  {
    title: "Image Editor",
    description: "Interactive tool for editing images with filters and adjustments.",
    tags: ["React","Image Editing"],
    image: "edit.png",
    link: "https://github.com/tushar1309u/Frontend-project/tree/main/Image%20editor"
  },
  {
    title: "Jarvis: Linux Assistant",
    description: "Voice-controlled personal assistant for task automation on Linux systems.",
    tags: ["Python","Linux","Automation"],
    image: "jarv.png",
    link: "https://github.com/tushar1309u"
  },
  {
    title: "Blood Group Detection (ML)",
    description: "Non-invasive method for blood group detection using fingerprint and ML.",
    tags: ["Machine Learning","Python"],
    image: "bloo.png",
    link: "https://github.com/tushar1309u"
  }
];

const skills = [
  "HTML5","CSS3","JavaScript (ES6+)","React.js","Bootstrap","Tailwind CSS",
  "Java","Python","SQL","C++ (basic)","Git","GitHub","VS Code","Vercel","AWS","Docker","Linux"
];

// Render projects
const projectsGrid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const el = document.createElement('article');
  el.className = 'project';
  el.innerHTML = `
    <img src="${p.image}" alt="${p.title}" />
    <h3>${p.title}</h3>
    <p class="muted">${p.description}</p>
    <div class="chips">${p.tags.map(t=>'<span class="chip">'+t+'</span>').join('')}</div>
    <div style="margin-top:10px">
      <a class="btn" href="${p.link}" target="_blank" rel="noopener">View on GitHub</a>
      <button class="btn primary" onclick="openDemo('${p.title}','${p.link}')">Open</button>
    </div>
  `;
  projectsGrid.appendChild(el);
});

// Render skills
const skillsList = document.getElementById('skillsList');
skills.forEach(s=>{
  const d = document.createElement('div');
  d.className = 'skill';
  d.textContent = s;
  skillsList.appendChild(d);
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
function setTheme(mode){
  document.documentElement.dataset.theme = mode;
  localStorage.setItem('theme', mode);
}
const saved = localStorage.getItem('theme');
setTheme(saved || (prefersDark ? 'dark' : 'light'));
themeToggle.addEventListener('click', ()=>{
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
});

// Demo modal
const demoDialog = document.getElementById('demoDialog');
const demoTitle = document.getElementById('demoTitle');
const demoFrame = document.getElementById('demoFrame');
function openDemo(title, url){
  demoTitle.textContent = title;
  demoFrame.src = url;
  if(demoDialog.showModal) demoDialog.showModal();
}

// Contact form mailto fallback
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = encodeURIComponent('New project inquiry from ' + name);
    const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>');
    window.location.href = `mailto:shettyt37@gmail.com?subject=${subject}&body=${body}`;
    status.textContent = 'Thanks! ';
  });
}

// Year
document.getElementById('year').textContent = new Date().getFullYear();
