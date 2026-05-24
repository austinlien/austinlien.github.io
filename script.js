(function () {
  "use strict";

  /*
    Edit this object to update the portfolio content.
    Replace the placeholder contact links before publishing.
  */
  var portfolioData = {
    profile: {
      name: "austin lien",
      nativeName: "连亨进",
    },
    hero: {
      summary:
        "I build practical software and explore intelligent systems. I am interested in software engineering and AI/ML research opportunities, especially work involving usable products, data workflows, and reliable evaluation.",
      email: "aulien [at] ucsc [dot] edu",
    },
    projects: [
      {
        title: "GrocerView",
        type: "Mobile AI Application",
        status: "Team project",
        description:
          "A mobile app that scans food barcodes and surfaces evidence-based ingredient safety information through a RAG pipeline backed by scientific literature.",
        technologies: ["React Native", "TypeScript", "FastAPI", "Python", "RAG", "PubMed"],
        href: "https://github.com/NguyenEvan/GrocerView",
        demoVideo: "grocerViewDemo.mov",
        demoPoster: "",
        featured: true,
      },
      {
        title: "Slouching Slugs",
        type: "Computer Vision",
        status: "CruzHacks 2025",
        description:
          "An AI-powered posture guard that uses a webcam to detect slouching in real time, notify the user, and provide Gemini-generated posture advice.",
        technologies: ["Python", "MediaPipe", "Gemini", "Computer Vision"],
        href: "https://github.com/NguyenEvan/slouching-slugs",
        image: "slouchingSlugs.png",
        imageAlt: "Slouching Slugs posture detection application interface",
        featured: true,
      },
      {
        title: "NBA Fantasy Waiver Wire Automation",
        type: "Data Automation",
        status: "Work in progress",
        description:
          "Tracks high-interest waiver-wire players, retrieves recent NBA performance data, and updates a Google Sheet to support fantasy roster decisions.",
        technologies: ["Python", "Selenium", "NBA API", "Google Sheets API"],
        href: "https://github.com/austinlien/nba-fantasy-watchlist",
        demoVideo: "",
        demoPoster: "",
      },
    ],
    research: [
      {
        title: "SLOTHLab Research Tooling",
        type: "Data Processing and Reporting Pipelines",
        description:
          "Built Python pipelines that transformed raw TXT/CSV research inputs into structured reports, summaries, and visualizations. Used Pandas for data processing and Matplotlib for analysis graphics, helping automate repetitive research workflows and make results easier to interpret.",
        impact:
          "Turned unstructured research data into organized reports and visualizations that supported clearer, faster analysis.",
        bullets: [
          "Developed Python data pipelines for processing TXT and CSV research inputs.",
          "Automated report generation to convert raw data into structured, readable summaries.",
          "Used Pandas for cleaning, organizing, and analyzing research data.",
          "Created Matplotlib visualizations to highlight patterns and trends.",
          "Reduced manual data formatting and reporting work in research workflows.",
        ],
        technologies: [
          "Python",
          "Pandas",
          "Matplotlib",
          "CSV/TXT Processing",
          "Data Cleaning",
          "Automation",
          "Research Tooling",
          "Data Visualization",
        ],
      },
    ],
    currently: [
      {
        label: "cooking",
        value: "focaccia",
      },
      {
        label: "wearing",
        value: "Armani Prive The Yulong",
      },
      {
        label: "listening",
        value: "ICEMAN - Drake",
      },
    ],
    recipes: [
      {
        title: "halal cart style chicken and rice",
        note: "a favorite plate to make and come back to.",
        tags: ["favorite dish", "rice"],
        image: "photos/chickenRiceNY.webp",
      },
      {
        title: "taiwanesse beef noodle soup",
        note: "a recent experiment in blending spice to build a comforting bowl of noodles.",
        tags: ["recent experiment", "noodles"],
        image: "photos/beefNoodSoup.webp",
      },
      {
        title: "okonomiyaki",
        note: "a great usage of leftover cabbage.",
        tags: ["worth sharing", "savory"],
        image: "photos/okonomiyaki.webp",
      },
    ],
    fragrances: [
      {
        title: "Another 13",
        house: "Le Labo",
        rating: "",
        notes: [],
        occasion: "",
      },
      {
        title: "Orpheon",
        house: "Diptyque",
        rating: "",
        notes: [],
        occasion: "",
      },
      {
        title: "Wood Sage & Sea Salt",
        house: "Jo Malone London",
        rating: "",
        notes: [],
        occasion: "",
      },
    ],
    music: [
      {
        title: "Stay Ready (What A Life)",
        artist: "Jhene Aiko, Kendrick Lamar",
        note: "current rotation",
        href: "https://open.spotify.com/track/5nkUIVKqOqdpB6ApKgEMkv?si=e1a3670dfdb2424f",
      },
      {
        title: "Saturn",
        artist: "RIZ LA VIE",
        note: "a recommendation",
        href: "https://open.spotify.com/track/7lpUYOCEH6EEOSLF6r1f7r?si=fc2e0e6eb31f474e",
      },
      {
        title: "OCTANE",
        artist: "Don Toliver",
        note: "album",
        href: "https://open.spotify.com/album/131x9G87mD0hP0hGZc9qYN?si=Bn7cdHNPSRCzCdY_knnrfQ",
      },
    ],
    contacts: [
      {
        label: "LinkedIn",
        value: "linkedin.com/in/austin-lien-470873388/",
        href: "https://www.linkedin.com/in/austin-lien-470873388/",
      },
      {
        label: "GitHub",
        value: "github.com/austinlien",
        href: "https://github.com/austinlien",
      },
    ],
  };

  var data = portfolioData;

  function getElement(id) {
    return document.getElementById(id);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function safeHref(value) {
    var href = String(value || "");

    if (/^(https?:|mailto:|\/|\.{0,2}\/|[a-zA-Z0-9_-]+\/)/.test(href)) {
      return escapeHtml(href);
    }

    return "#";
  }

  function linkTarget(href) {
    return /^https?:/.test(href) ? ' target="_blank" rel="noreferrer"' : "";
  }

  function renderTags(tags) {
    return (
      '<ul class="tag-list">' +
      tags
        .map(function (tag) {
          return "<li>" + escapeHtml(tag) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }

  function renderDemoVideo(project) {
    if (!project.demoVideo) {
      return "";
    }

    var poster = project.demoPoster
      ? ' poster="' + safeHref(project.demoPoster) + '"'
      : "";
    var extension = project.demoVideo.toLowerCase().split("?")[0];
    var videoType = extension.endsWith(".mov") ? "video/quicktime" : "video/mp4";

    return (
      '<div class="project-demo">' +
      '<video controls preload="metadata"' +
      poster +
      ">" +
      '<source src="' +
      safeHref(project.demoVideo) +
      '" type="' +
      videoType +
      '">' +
      "Your browser does not support HTML video." +
      "</video>" +
      "</div>"
    );
  }

  function renderProjectImage(project) {
    if (!project.image) {
      return "";
    }

    return (
      '<div class="project-demo project-image">' +
      '<img src="' +
      safeHref(project.image) +
      '" alt="' +
      escapeHtml(project.imageAlt || project.title + " project screenshot") +
      '">' +
      "</div>"
    );
  }

  function renderProjectMedia(project) {
    return renderDemoVideo(project) || renderProjectImage(project);
  }

  function renderHome() {
    var profile = data.profile;
    var hero = data.hero;

    if (!getElement("hero-name")) {
      return;
    }

    getElement("hero-name").textContent = profile.name;
    getElement("native-name").textContent = profile.nativeName;
    getElement("hero-summary").textContent = hero.summary;
    getElement("hero-email").textContent = hero.email;
    getElement("home-links").innerHTML = data.contacts
      .filter(function (contact) {
        return contact.label === "LinkedIn" || contact.label === "GitHub";
      })
      .map(function (contact) {
        return (
          '<a class="home-link" href="' +
          safeHref(contact.href) +
          '"' +
          linkTarget(contact.href) +
          ">" +
          escapeHtml(contact.label) +
          '<span aria-hidden="true">&rarr;</span></a>'
        );
      })
      .join("");
  }

  function renderProjects() {
    var grid = getElement("project-grid");

    if (!grid) {
      return;
    }

    grid.innerHTML = data.projects
      .map(function (project) {
        return (
          '<article class="project-card' +
          (project.featured ? " project-card-featured" : "") +
          ' reveal">' +
          '<div class="project-header">' +
          '<p class="project-type">' +
          escapeHtml(project.type) +
          "</p>" +
          '<p class="project-status">' +
          escapeHtml(project.status) +
          "</p>" +
          "</div>" +
          "<h3>" +
          escapeHtml(project.title) +
          "</h3>" +
          '<p class="project-description">' +
          escapeHtml(project.description) +
          "</p>" +
          renderProjectMedia(project) +
          renderTags(project.technologies) +
          '<a class="text-link" href="' +
          safeHref(project.href) +
          '"' +
          linkTarget(project.href) +
          ">View repository <span aria-hidden=\"true\">&rarr;</span></a>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderResearch() {
    var grid = getElement("research-grid");

    if (!grid) {
      return;
    }

    grid.innerHTML = data.research
      .map(function (item) {
        return (
          '<article class="research-card reveal">' +
          '<div class="research-overview">' +
          '<p class="research-type">' +
          escapeHtml(item.type) +
          "</p>" +
          "<h2>" +
          escapeHtml(item.title) +
          "</h2>" +
          '<p class="research-description">' +
          escapeHtml(item.description) +
          "</p>" +
          renderTags(item.technologies) +
          "</div>" +
          '<div class="research-details">' +
          '<p class="impact-label">Impact</p>' +
          '<p class="impact-copy">' +
          escapeHtml(item.impact) +
          "</p>" +
          '<ul class="research-bullets">' +
          item.bullets
            .map(function (bullet) {
              return "<li>" + escapeHtml(bullet) + "</li>";
            })
            .join("") +
          "</ul>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderAbout() {
    var currentlyGrid = getElement("currently-grid");

    if (!currentlyGrid) {
      return;
    }

    currentlyGrid.innerHTML = data.currently
      .map(function (item) {
        return (
          '<article class="currently-card">' +
          "<p>" +
          escapeHtml(item.label) +
          "</p><strong>" +
          escapeHtml(item.value) +
          "</strong>" +
          "</article>"
        );
      })
      .join("");

    getElement("recipe-grid").innerHTML = data.recipes
      .map(function (recipe) {
        var media = recipe.image
          ? '<img src="' + safeHref(recipe.image) + '" alt="' + escapeHtml(recipe.title) + '">'
          : '<div class="recipe-placeholder" aria-hidden="true">photo</div>';
        return (
          '<article class="recipe-card">' +
          media +
          '<div class="recipe-copy"><h3>' +
          escapeHtml(recipe.title) +
          "</h3><p>" +
          escapeHtml(recipe.note) +
          "</p>" +
          renderTags(recipe.tags) +
          "</div></article>"
        );
      })
      .join("");

    getElement("fragrance-grid").innerHTML = data.fragrances
      .map(function (fragrance) {
        var rating = fragrance.rating
          ? '<strong class="rating">' + escapeHtml(fragrance.rating) + "</strong>"
          : "";
        var notes = fragrance.notes.length ? renderTags(fragrance.notes) : "";
        var occasion = fragrance.occasion
          ? '<p class="fragrance-occasion">' + escapeHtml(fragrance.occasion) + "</p>"
          : '<p class="fragrance-occasion fragrance-prompt">rating and notes to come</p>';
        return (
          '<article class="fragrance-card">' +
          '<div class="fragrance-title"><div><h3>' +
          escapeHtml(fragrance.title) +
          "</h3><p>" +
          escapeHtml(fragrance.house) +
          "</p></div>" +
          rating +
          "</div>" +
          notes +
          occasion +
          "</article>"
        );
      })
      .join("");

    getElement("music-grid").innerHTML = data.music
      .map(function (entry) {
        var title = entry.href
          ? '<a href="' + safeHref(entry.href) + '"' + linkTarget(entry.href) + ">" + escapeHtml(entry.title) + "</a>"
          : escapeHtml(entry.title);
        return (
          '<article class="music-card">' +
          '<div class="album-placeholder" aria-hidden="true"></div>' +
          "<div><h3>" +
          title +
          "</h3><p class=\"music-artist\">" +
          escapeHtml(entry.artist) +
          "</p><p>" +
          escapeHtml(entry.note) +
          "</p></div></article>"
        );
      })
      .join("");
  }

  function initializeReveals() {
    var elements = document.querySelectorAll(".reveal");
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!("IntersectionObserver" in window) || reduceMotion) {
      elements.forEach(function (element) {
        element.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach(function (element) {
      observer.observe(element);
    });
  }

  function initializeThemeToggle() {
    var root = document.documentElement;
    var button = getElement("theme-toggle");
    var themeColor = document.querySelector('meta[name="theme-color"]');

    function applyTheme(theme) {
      var darkMode = theme === "dark";
      root.dataset.theme = darkMode ? "dark" : "light";
      button.setAttribute(
        "aria-label",
        darkMode ? "Switch to light mode" : "Switch to dark mode"
      );
      themeColor.setAttribute("content", darkMode ? "#101512" : "#f4f1e8");
    }

    applyTheme(root.dataset.theme === "dark" ? "dark" : "light");

    button.addEventListener("click", function () {
      var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);

      try {
        localStorage.setItem("portfolio-theme", nextTheme);
      } catch (error) {
        // Keep the selected theme for this page view when storage is unavailable.
      }
    });
  }

  initializeThemeToggle();
  renderHome();
  renderProjects();
  renderResearch();
  renderAbout();
  initializeReveals();
})();
