/* PARTICLES */
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 850 }
    },
    color: { value: "#4facfe" },
    shape: { type: "circle" },
    opacity: { value: 0.6, random: true },
    size: { value: 5.5, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#4facfe",
      opacity: 0.15,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.55,
      random: true,
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 120 },
      push: { particles_nb: 2 }
    }
  },
  retina_detect: true
});


const projectData = {

  p1: {
    title: "Cloud Portfolio Website",
    what: `
This project is a personal cloud-focused portfolio website created to professionally showcase my skills, projects, and learning journey.
The main goal of this project is to build a digital identity that can be shared with recruiters and mentors.
The portfolio follows a dark themed, animated UI to give a modern and premium experience.
It acts as an online resume where all information is available in one place.
The website is fully responsive and works on desktop and mobile devices.
`,
    tech: `
HTML was used to structure the content and sections of the portfolio.
CSS was used for styling, dark theme design, animations, and responsive layout.
JavaScript was used to handle interactivity such as navigation scrolling and project popups.
Particles.js was used to create animated background effects.
The design focuses on performance and smooth user experience.
`,
    learn: `
I learned how to design and structure a complete real-world portfolio project.
I improved my skills in UI/UX design and animation handling.
I understood how JavaScript controls interactivity on a single-page website.
I gained confidence in presenting my skills professionally.
This project helped me understand how developers showcase themselves online.
`
  },

  p2: {
    title: "AWS EC2 & S3 Practice",
    what: `
This project focuses on hands-on practice with core AWS cloud services.
The main objective is to understand how compute and storage services work in the cloud.
It involves launching virtual servers and managing cloud storage.
The project helps in understanding real-world cloud infrastructure concepts.
It acts as a foundation project for cloud deployment learning.
`,
    tech: `
AWS EC2 was used to launch and manage virtual machines.
AWS S3 was used to store and manage files securely.
AWS Console was used to configure services.
Basic IAM concepts were used for access control.
`,
    learn: `
I learned how virtual servers are created and managed in AWS.
I understood how cloud storage works using S3 buckets.
I learned about cloud scalability and availability.
This project improved my understanding of real-time cloud usage.
It gave me confidence to work with AWS services.
`
  },

  p3: {
    title: "AWS IAM & Security Basics",
    what: `
This project focuses on understanding cloud security fundamentals.
The goal is to learn how access control works in cloud environments.
It involves managing users, roles, and permissions securely.
The project explains how security is handled in AWS.
It is a beginner-friendly security-focused cloud project.
`,
    tech: `
AWS IAM was used to create users and roles.
Policies were used to define permissions.
AWS Console was used to manage security settings.
Basic cloud security principles were followed.
`,
    learn: `
I learned how identity and access management works.
I understood the importance of cloud security.
I learned how permissions control access to resources.
This project helped me understand security best practices.
It prepared me for secure cloud deployments.
`
  },

  p4: {
    title: "Linux Command Line Lab",
    what: `
This project is a practice-based lab focused on Linux fundamentals.
The goal is to understand how operating systems work internally.
It involves working with terminal commands.
The project builds confidence in handling Linux environments.
It prepares me to work with cloud servers.
`,
    tech: `
Linux operating system was used.
Shell commands were used for file management.
Permissions and processes were practiced.
Terminal-based learning was followed.
`,
    learn: `
I learned how to navigate and manage files in Linux.
I understood permissions and user roles.
I gained confidence using terminal commands.
This project prepared me for cloud server management.
It strengthened my system-level understanding.
`
  },

  p5: {
    title: "Networking Basics Lab",
    what: `
This project explains how computer networks work.
The main objective is to understand data communication.
It covers basic networking protocols and concepts.
The project helps in understanding how the internet functions.
It forms the base for cloud and security learning.
`,
    tech: `
TCP/IP model was studied.
DNS and HTTP concepts were learned.
Basic networking tools were explored.
Theory with practical understanding was applied.
`,
    learn: `
I learned how data travels across networks.
I understood IP addressing and protocols.
I gained clarity on networking fundamentals.
This project supports cloud and security knowledge.
It improved my technical foundation.
`
  },

  p6: {
    title: "Problem Solving Programs",
    what: `
This project focuses on improving logical thinking and coding skills.
It includes simple and beginner-level programming problems.
The goal is to strengthen problem-solving ability.
It helps in understanding how logic converts into code.
The project supports overall software development growth.
`,
    tech: `
C language was used for basic logic building.
Python was used for simple scripting.
Java was used for object-oriented concepts.
Logical thinking techniques were applied.
`,
    learn: `
I improved my logical thinking ability.
I learned how to approach programming problems.
I gained confidence in writing clean code.
This project strengthened my coding foundation.
It prepared me for advanced development learning.
`
  }

};


const cards = document.querySelectorAll(".project-card");
const popup = document.getElementById("project-popup");

const popupTitle = document.getElementById("popup-title");
const popupWhat = document.getElementById("popup-what");
const popupTech = document.getElementById("popup-tech");
const popupLearn = document.getElementById("popup-learn");

const closeBtn = document.getElementById("close-popup");

cards.forEach(card => {
  card.onclick = () => {
    const data = projectData[card.dataset.project];
    popupTitle.innerText = data.title;
    popupWhat.innerText = data.what;
    popupTech.innerText = data.tech;
    popupLearn.innerText = data.learn;
    popup.style.display = "flex";
  };
});

closeBtn.onclick = () => popup.style.display = "none";
/* NAVBAR SCROLL TO SECTION */

const navItems = document.querySelectorAll("nav span");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const targetId = item.dataset.page;
    const section = document.getElementById(targetId);

    section.scrollIntoView({
      behavior: "smooth"
    });
  });
});
/* SKILLS SCROLL ANIMATION – REPEAT */

const skillsSection = document.getElementById("skills");
const skillBars = document.querySelectorAll(".skill-fill");

function animateSkillBars() {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const sectionBottom = skillsSection.getBoundingClientRect().bottom;
  const screenHeight = window.innerHeight;

  /* when skills section is visible */
  if (sectionTop < screenHeight - 100 && sectionBottom > 100) {
    skillBars.forEach(bar => {
      bar.style.width = bar.dataset.level;
    });
  } 
  /* when skills section goes out */
  else {
    skillBars.forEach(bar => {
      bar.style.width = "0%";
    });
  }
}

window.addEventListener("scroll", animateSkillBars);/* CONTACT BUTTON SCROLL FIX */

const contactBtn = document.querySelector(".hero-contact-btn");
const contactSection = document.getElementById("contact");

if (contactBtn && contactSection) {
  contactBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({
      behavior: "smooth"
    });
  });
}
/* SCROLL DOWN ARROW */

document.querySelectorAll(".scroll-down").forEach(arrow => {
  arrow.addEventListener("click", () => {
    const targetId = arrow.dataset.target;
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_5lt5kcj",
    "template_lg78ysa",
    this
  ).then(
    function () {
      alert("Message sent successfully!");
      form.reset();
    },
    function (error) {
      alert("Failed to send message");
      console.error(error);
    }
  );
});



