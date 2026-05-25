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
        image: "photos/slouching-slugs.png",
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
      {
        title: "Instagram Following Audit",
        type: "Browser Utility",
        status: "Read-only tool",
        description:
          "A local browser utility that audits a user's following list, identifies accounts not following back, and exports results without performing account actions.",
        technologies: ["JavaScript", "Browser APIs", "CSV / JSON", "Privacy-first"],
        href: "instagram-audit.html",
        linkLabel: "Open tool",
        analyticsEvent: "projects-open-instagram-audit",
        demoVideo: "",
        demoPoster: "",
      },
    ],
    research: [
      {
        title: "SLOTHLab Research",
        type: "Natural Language Processing / Responsible AI",
        description:
          "Supported research workflows examining language, sentiment, and potential bias in large language model outputs. Built the processing and reporting tooling needed to turn raw TXT/CSV results into structured evidence for analysis.",
        areas: [
          "Natural Language Processing",
          "Sentiment Analysis",
          "LLM Bias",
          "Responsible AI",
        ],
        impact:
          "Turned unstructured research inputs into reproducible reports and visualizations that made patterns and potential bias signals easier to inspect.",
        bullets: [
          "Developed Python pipelines for processing TXT and CSV outputs from research workflows.",
          "Used Pandas to clean, organize, and aggregate language-related analysis data.",
          "Automated readable reports for comparing sentiment patterns and potential bias signals.",
          "Created Matplotlib visualizations to support interpretation of research results.",
          "Reduced manual processing work and supported reproducible ongoing analysis.",
        ],
        technologies: [
          "Python",
          "Pandas",
          "Matplotlib",
          "CSV/TXT Processing",
          "Automation",
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
    // Newest to oldest based on the capture dates in the local source photos.
    beefGallery: [
      {
        date: "2026-05-13",
        location: "home",
        cut: "dry-aged new york strip",
        notes: [
          "trying dry-aged steak from whole foods",
          "aged long enough to get that slight funk",
          "quality of the beef itself wasn't the best",
        ],
        rating: "7.5/10",
        image: "beefPics/dry-aged-new-york.webp",
      },
      {
        date: "2026-04-26",
        location: "home",
        cut: "ribeye",
        notes: [
          "steak cook was a perfect medium rare",
          "first time making a bordelaise sauce",
          "ratios were slightly off",
          "tallow-roasted potatoes",
        ],
        rating: "8.2/10",
        image: "beefPics/ribeye-bordelaise.webp",
      },
      {
        date: "2025-11-02",
        location: "home",
        cut: "new york strip",
        notes: [
          "big brunch",
          "pretty sure i hit a bench pr after this",
          "my stomach regretted it later though",
        ],
        rating: "6.8/10",
        image: "beefPics/steak-and-eggs.webp",
      },
      {
        date: "2025-10-02",
        location: "home",
        cut: "denver steak",
        notes: [
          "i'm pretty sure the steak had already gone kind of bad",
          "so i got sick after this lol",
        ],
        rating: "3.2/10",
        image: "beefPics/fun-size.webp",
      },
      {
        date: "2025-08-17",
        location: "home",
        cut: "ribeye",
        notes: [
          "stock wasn't reduced enough before finishing the sauce",
          "too much crème fraîche",
        ],
        rating: "8.1/10",
        image: "beefPics/au-poivre.webp",
      },
      {
        date: "2025-07-31",
        location: "Peter Luger, Brooklyn",
        cut: "dry-aged t-bone",
        notes: [
          "slightly more rare in certain areas",
          "gets very heavy and repetitive very quickly",
          "can't really taste the dry age",
        ],
        rating: "7.2/10",
        image: "beefPics/peter-luger.webp",
      },
      {
        date: "2025-07-30",
        location: "Balthazar, New York City",
        cut: "new york strip",
        notes: [
          "perfect cook",
          "au poivre sauce was done very well",
          "heavy, but i was still able to down the whole plate",
        ],
        rating: "8.5/10",
        image: "beefPics/balthazar.webp",
      },
      {
        date: "2025-07-19",
        location: "cabin, Yosemite",
        cut: "new york strip",
        notes: [
          "i did the best i could cooking six steaks in a cabin",
          "after hiking 17 miles and cooking all three meals for everyone",
          "sitting down and eating this made me ascend",
        ],
        rating: "7.2/10",
        image: "beefPics/yosemite.webp",
      },
      {
        date: "2025-05-10",
        location: "home",
        cut: "bone-in ribeye",
        notes: [
          "very good cook on such a thick steak",
          "not to toot my own horn too much, but probably the best steak i've ever made",
        ],
        rating: "9.1/10",
        image: "beefPics/bone-in-ribeye.webp",
      },
      {
        date: "2025-04-24",
        location: "home",
        cut: "new york strip",
        notes: [
          "first time making this sauce",
          "miso butter gnocchi",
          "kind of slaps, but very heavy",
        ],
        rating: "8.4/10",
        image: "beefPics/miso-gnocchi.webp",
      },
      {
        date: "2025-03-18",
        location: "home",
        cut: "filet mignon",
        notes: [
          "quick, casual steak weeknight dinner",
          "nothing to write home about",
          "will make again",
        ],
        rating: "8.1/10",
        image: "beefPics/diane.webp",
      },
      {
        date: "2025-03-15",
        location: "home",
        cut: "filet mignon",
        notes: [
          "surprised i didn't explode after eating this",
          "i trusted my freezer and costco with my life here",
        ],
        rating: "8.4/10",
        image: "beefPics/tartare.webp",
      },
      {
        date: "2025-03-12",
        location: "home",
        cut: "chateaubriand",
        notes: [
          "ignore the undercooking",
          "the ends were perfectly medium rare",
          "had to throw it back in the oven after that",
        ],
        rating: "center cut: 4/10 (it's raw), ends: 8.9/10",
        image: "beefPics/wellington.webp",
      },
      {
        date: "2025-03-11",
        location: "home",
        cut: "filet mignon",
        notes: [
          "so good i had to run it back",
          "homemade gnocchi this time",
          "plating was sloppy, but it tasted so good",
        ],
        rating: "8.8/10",
        image: "beefPics/miso-gnocchi-2.webp",
      },
      {
        date: "2024-08-02",
        location: "Hawksmoor Spitalfields, London",
        cut: "dry-aged t-bone",
        notes: [
          "not dry-aged for too long, so perfect for most",
          "very hard to get a perfect cook throughout, so i can't blame them",
          "wonderful quality though",
        ],
        rating: "8.8/10",
        image: "beefPics/t-bone.webp",
      },
      {
        date: "2024-08-01",
        location: "somewhere in the ocean",
        cut: "still don't know lol",
        notes: [
          "sides were slightly better",
          "still over-marinated",
          "felt like i was eating synthetic beef",
        ],
        rating: "5.7/10",
        image: "beefPics/cruise-2.webp",
      },
      {
        date: "2024-07-31",
        location: "somewhere in the ocean",
        cut: "idek",
        notes: [
          "flavor was okay",
          "they marinated this in, like, cornstarch",
          "didn't feel like i was eating beef",
        ],
        rating: "6.1/10",
        image: "beefPics/cruise-1.webp",
      },
      {
        date: "2024-07-15",
        location: "Le Relais de l'Entrecôte, Paris",
        cut: "sirloin",
        notes: [
          "sauce is the only redeeming factor",
          "steak and fries both lacked salt",
          "not much of a crust at all",
        ],
        rating: "dish: 7.4/10, sauce: 8.6/10",
        image: "beefPics/entrecote.webp",
      },
      {
        date: "2023-11-16",
        location: "University Center Bistro, UCSC",
        cut: "dry-aged top sirloin",
        notes: [
          "incredible for the school",
          "lacking salt and a bit tougher due to the cut",
          "finishing it with olive oil was overkill",
        ],
        rating: "7.2/10",
        image: "beefPics/university-center-bistro.webp",
      },
      {
        date: "2023-07-25",
        location: "Hell's Kitchen, Las Vegas",
        cut: "filet mignon",
        notes: [
          "only rating the wellington",
          "perfect cook and seasoned well",
          "wish the temperature was hotter",
          "needed acid somewhere to balance the richness of the dish",
        ],
        rating: "8.4/10",
        image: "beefPics/hells-kitchen.webp",
      },
      {
        date: "2023-07-24",
        location: "Mon Ami Gabi, Las Vegas",
        cut: "hanger steak",
        notes: [
          "presentation needs some work",
          "wish there were more butter or more salt on the steak",
          "cook was perfect though",
        ],
        rating: "7.4/10",
        image: "beefPics/mon-ami-gabi.webp",
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
        cover:
          "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02a0fa057b8ad3f3c4969f0c97",
      },
      {
        title: "Saturn",
        artist: "RIZ LA VIE",
        note: "a recommendation",
        href: "https://open.spotify.com/track/7lpUYOCEH6EEOSLF6r1f7r?si=fc2e0e6eb31f474e",
        cover:
          "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e021088f4bc2c5191ec9510d2ef",
      },
      {
        title: "OCTANE",
        artist: "Don Toliver",
        note: "album",
        href: "https://open.spotify.com/album/131x9G87mD0hP0hGZc9qYN?si=Bn7cdHNPSRCzCdY_knnrfQ",
        cover:
          "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e0225c28f3c9fbdbab1a88dd619",
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
    var isExternalLink = /^(https?:|mailto:)/.test(href);
    var isSiteFile =
      /^(?:\/|\.\/)?[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_.-]+)*\.[a-zA-Z0-9]+(?:[?#][a-zA-Z0-9_=&%./-]*)?$/.test(
        href
      );

    if (isExternalLink || isSiteFile) {
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
          (project.analyticsEvent
            ? ' data-goatcounter-click="' +
              escapeHtml(project.analyticsEvent) +
              '" data-goatcounter-title="Open Instagram Following Audit"'
            : "") +
          linkTarget(project.href) +
          ">" +
          escapeHtml(project.linkLabel || "View repository") +
          " <span aria-hidden=\"true\">&rarr;</span></a>" +
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
          '<div class="research-focus">' +
          '<p class="research-section-label">Research areas</p>' +
          renderTags(item.areas) +
          "</div>" +
          "</div>" +
          '<div class="research-details">' +
          '<p class="impact-label">Technical contribution</p>' +
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
          '<div class="research-tools">' +
          '<p class="research-section-label">Tools</p>' +
          renderTags(item.technologies) +
          "</div>" +
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
        var cover = entry.cover
          ? '<img class="album-cover" src="' + safeHref(entry.cover) + '" alt="Cover art for ' + escapeHtml(entry.title) + '" loading="lazy">'
          : '<div class="album-placeholder" aria-hidden="true"></div>';
        return (
          '<article class="music-card">' +
          cover +
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

  function renderBeefGallery() {
    var gallery = getElement("beef-gallery");

    if (!gallery) {
      return;
    }

    gallery.innerHTML = data.beefGallery
      .map(function (item) {
        var media = item.image
          ? '<img src="' + safeHref(item.image) + '" alt="' + escapeHtml(item.cut + " at " + item.location) + '" loading="lazy">'
          : '<div class="steak-placeholder" aria-hidden="true"><span>photo pending</span></div>';
        var notes =
          '<ul class="steak-notes">' +
          item.notes
            .map(function (note) {
              return "<li>" + escapeHtml(note) + "</li>";
            })
            .join("") +
          "</ul>";
        var rating = item.rating
          ? '<p class="steak-rating">' + escapeHtml(item.rating) + "</p>"
          : "";
        return (
          '<figure class="steak-card" tabindex="0">' +
          media +
          '<figcaption class="steak-overlay">' +
          '<p class="steak-label">notes</p>' +
          '<p class="steak-location"><span aria-hidden="true">📍</span> ' +
          escapeHtml(item.location) +
          "</p>" +
          '<p class="steak-cut">cut: ' +
          escapeHtml(item.cut) +
          "</p>" +
          notes +
          rating +
          "</figcaption></figure>"
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
  renderBeefGallery();
  initializeReveals();
})();
