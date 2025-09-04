// Projects Data
const projects = [
  {
    title: "Image Editor",
    desc: "A React application to upload, crop, rotate, and filter images using HTML5 Canvas.",
    img: "edit.png",
    tech: "React, JavaScript, HTML5 Canvas, CSS3",
    link: "https://github.com/tushar1309u/image-editor"
  },
  {
    title: "Tic Tac Toe",
    desc: "An interactive two-player game with win detection and dynamic DOM updates.",
    img: "tictactoe.png",
    tech: "JavaScript, HTML5, CSS3",
    link: "https://github.com/tushar1309u/tic-tac-toe"
  },
  {
    title: "Key Press Visualizer",
    desc: "Displays key event properties (key, code, keyCode) in real-time.",
    img: "key.png",
    tech: "JavaScript, HTML5, CSS3",
    link: "https://github.com/tushar1309u/key-code-generator"
  },
  {
    title: "Amazon Clone Homepage",
    desc: "Replica of Amazon's homepage showcasing responsive UI using HTML and CSS.",
    img: "amazon1.png",
    tech: "HTML5, CSS3, Responsive Design",
    link: "https://github.com/tushar1309u/amazon-clone"
  }
];

// Render Projects
const projectGrid = document.getElementById("projectsGrid");
projects.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <p><strong>Tech:</strong> ${p.tech}</p>
    <a href="${p.link}" target="_blank" class="btn">View on GitHub</a>
  `;
  projectGrid.appendChild(card);
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();
