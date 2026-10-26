(function () {
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s) {
      return document.querySelector(s);
    },
    $$ = function (s) {
      return document.querySelectorAll(s);
    };
  var BEH = reduce ? "auto" : "smooth";

  /* ---------- Données (uniquement des informations du CV / du portfolio) ---------- */
  var P = [
    {
      id: "trendora",
      t: "Trendora",
      cat: "Web · DevOps",
      done: true,
      date: "Mars 2026",
      photo:
        "https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/16290e2a-4a06-48f1-9904-469720691e2e.jpg",
      alt: "Écran d’ordinateur affichant du code pendant le développement d’un site",
      d: "Application web full stack de partage de styles et de tenues, réalisée en équipe sous ma direction (cheffe de projet). Docker multi-services, AWS EC2 via Terraform, CI/CD GitHub Actions.",
      feats: [
        "Application web full stack de partage de styles et de tenues",
        "Conteneurisation Docker multi-services (Nginx, MySQL, PHP)",
        "Infrastructure AWS EC2 déployée avec Terraform",
        "Pipeline CI/CD automatisée avec GitHub Actions",
      ],
      stack: [
        ["Laravel", "Framework PHP"],
        ["Angular", "Framework front-end"],
        ["Docker", "Conteneurisation multi-services"],
        ["Nginx / MySQL / PHP", "Services conteneurisés"],
        ["Terraform", "Déploiement de l’infrastructure"],
        ["AWS EC2", "Hébergement cloud"],
        ["GitHub Actions", "Pipeline CI/CD"],
      ],
      method: "Projet d’équipe, dirigé en mode chef de projet.",
      contrib:
        "Cheffe de projet : planification, déblocage des points critiques et respect des délais de livraison.",
    },
    {
      id: "whatsapp",
      t: "WhatsApp Clone",
      cat: "Application",
      done: true,
      date: "Mars 2026",
      photo:
        "https://images.pexels.com/photos/20716657/pexels-photo-20716657/free-photo-of-whatsapp-logo-on-smartphone.jpeg",
      alt: "Logo WhatsApp affiché sur un smartphone",
      d: "Messagerie temps réel en architecture client-serveur multi-clients : TCP/UDP, contacts, appels audio/vidéo, interface JavaFX.",
      feats: [
        "Communication temps réel (TCP/UDP)",
        "Gestion des contacts",
        "Appels audio/vidéo",
        "Interface JavaFX",
      ],
      stack: [
        ["Java", "Langage de l’application"],
        ["JavaFX", "Interface utilisateur"],
        ["TCP/UDP", "Communication client-serveur temps réel"],
      ],
      method: "Architecture client-serveur multi-clients.",
      diff: "Résolution de problèmes de synchronisation réseau.",
    },
    {
      id: "scolarite",
      t: "Digitalisation de la scolarité de notre école",
      cat: "Scolarité · Équipe",
      done: true,
      photo:
        "https://groupe-sunergia.com/wp-content/uploads/2024/09/Digitalisation-des-demarches-administratives-au-Maroc.png",
      alt: "Étudiant travaillant sur un ordinateur portable dans un contexte universitaire",
      d: "Participation, au sein d’une équipe, à la digitalisation des processus de scolarité de l’ENSA Tétouan, avec une organisation agile selon la méthode Scrum.",
      goal: "Simplifier et centraliser les démarches de scolarité.",
      stack: [],
      method: "Méthode agile Scrum, travail en équipe.",
    },
    {
      id: "factures",
      t: "Gestion des factures et de l’électricité",
      cat: "Web · Gestion",
      done: true,
      photo:
        "https://images.pexels.com/photos/5900132/pexels-photo-5900132.jpeg",
      alt: "Ordinateur et calculatrice pour le suivi de factures et de dépenses",
      d: "Développement d’une application permettant de gérer les factures et les informations liées à l’électricité.",
      goal: "Faciliter le suivi et la gestion de ces informations dans une application dédiée.",
      stack: [["PHP", "Langage de l’application"]],
    },
    {
      id: "sigcc",
      t: "SIGCC",
      cat: "Architecture logicielle",
      done: true,
      photo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      alt: "Visualisation de données sur un écran d’analyse",
      d: "Modélisation UML du sous-système de gestion des catastrophes au Maroc, avec les design patterns Singleton, Observer, Strategy et Template Method.",
      feats: [
        "Modélisation UML du sous-système de gestion des catastrophes au Maroc",
        "Design patterns : Singleton, Observer, Strategy, Template Method",
      ],
      stack: [
        ["UML", "Modélisation du sous-système"],
        ["Design patterns", "Architecture robuste et évolutive"],
      ],
    },
    {
      id: "visit",
      t: "Visit Morocco",
      cat: "Web · Tourisme",
      done: true,
      date: "Avril 2026",
      photo:
        "https://www.maroco.co/cdn/shop/articles/Voyage_au_Maroc-_les_incontournables_a_voir_pour_des_vacances_reussies_de0be40a-5856-490a-8885-ad83b6a8c2cd_2000x.png?v=1785006074",
      alt: "Ruelle de Rabat au Maroc, bordée d’architecture traditionnelle",
      d: "Site web de guidage culturel destiné aux visiteurs étrangers, conçu et développé sur tout le cycle, de la conception à la mise en ligne.",
      feats: [
        "Site de guidage culturel pour visiteurs étrangers",
        "Cycle complet : de la conception à la mise en ligne",
      ],
      stack: [
        ["HTML", "Structure des pages"],
        ["CSS", "Mise en forme"],
        ["JavaScript", "Interactions"],
      ],
    },
  ];
  function projectPhoto(project, className, loading) {
    return (
      '<img class="' +
      className +
      '" src="' +
      project.photo +
      '?auto=format&fit=crop&w=1200&h=720&q=85" alt="' +
      project.alt +
      '" width="1200" height="720" loading="' +
      loading +
      '" decoding="async">'
    );
  }
  var TECH_LINE = {
    trendora:
      "Laravel · Angular · Docker · Terraform · AWS EC2 · GitHub Actions",
    whatsapp: "Java · JavaFX · TCP/UDP",
    scolarite: "Scrum · Travail en équipe",
    factures: "PHP",
    sigcc: "UML · Design patterns",
    visit: "HTML · CSS · JavaScript",
  };

  /* Compétence → projets / sections où elle est réellement attestée */
  var CATS = [
    [
      "Langages & développement web",
      ["JavaScript", "PHP", "Java", "Dart", "HTML", "CSS"],
    ],
    ["Frameworks & interfaces", ["Laravel", "Angular", "Flutter", "JavaFX"]],
    [
      "DevOps & Cloud",
      ["Docker", "Terraform", "AWS EC2", "GitHub Actions", "CI/CD"],
    ],
    [
      "Architecture & modélisation",
      ["Client-serveur", "TCP/UDP", "UML", "Design patterns"],
    ],
    [
      "Données & gestion de projet",
      ["MySQL", "Scrum", "Planification", "Travail en équipe", "Leadership"],
    ],
  ];
  var M = {
    Java: ["whatsapp"],
    JavaFX: ["whatsapp"],
    "TCP/UDP": ["whatsapp"],
    "Client-serveur": ["whatsapp"],
    PHP: ["factures", "trendora"],
    JavaScript: ["visit"],
    HTML: ["visit"],
    CSS: ["visit"],
    Dart: ["stage-uxv"],
    Flutter: ["stage-uxv"],
    Laravel: ["trendora"],
    Angular: ["trendora"],
    MySQL: ["trendora"],
    Docker: ["trendora"],
    Terraform: ["trendora"],
    "AWS EC2": ["trendora"],
    "GitHub Actions": ["trendora"],
    "CI/CD": ["trendora"],
    UML: ["sigcc"],
    "Design patterns": ["sigcc"],
    Scrum: ["scolarite"],
    Planification: ["trendora"],
    "Travail en équipe": ["trendora", "scolarite"],
    Leadership: ["trendora"],
  };
  var LBL = {
    "stage-uxv": "Stage UXVCenter",
    "para-club": "Club InfoTech",
    "para-forum": "Forum d’Entreprise",
    "para-design": "Responsable design",
  };
  P.forEach(function (p) {
    LBL[p.id] = p.t;
  });

  /* ---------- Statistiques calculées à partir des données ---------- */
  var techSet = {};
  P.forEach(function (p) {
    (p.stack || []).forEach(function (s) {
      s[0].split(" / ").forEach(function (x) {
        techSet[x] = 1;
      });
    });
  });
  var S = {
    done: P.length,
    tech: Object.keys(techSet).length,
    completion: P.length
      ? Math.round(
          (P.filter(function (p) {
            return p.done;
          }).length /
            P.length) *
            100,
        )
      : 0,
    asso: $$("#exp-para .tl-item").length,
  };
  $$(".stat-num").forEach(function (el) {
    el.dataset.count = S[el.dataset.k];
    el.textContent = S[el.dataset.k] + (el.dataset.suffix || "");
  });

  /* ---------- Cartes de projets ---------- */
  var feed = $("#feed");
  var featuredProjectIds = ["trendora", "visit", "factures", "scolarite"];
  var displayedProjects = P.slice().sort(function (a, b) {
    var aIndex = featuredProjectIds.indexOf(a.id);
    var bIndex = featuredProjectIds.indexOf(b.id);
    return (
      (aIndex === -1 ? featuredProjectIds.length : aIndex) -
      (bIndex === -1 ? featuredProjectIds.length : bIndex)
    );
  });
  var projectsToggle = $("#projectsToggle");
  var projectsExpanded = false;
  function updateProjectsVisibility() {
    displayedProjects.forEach(function (p) {
      var card = document.getElementById(p.id);
      card.hidden =
        !projectsExpanded && featuredProjectIds.indexOf(p.id) === -1;
    });
    projectsToggle.setAttribute("aria-expanded", String(projectsExpanded));
    projectsToggle.innerHTML = projectsExpanded
      ? 'Réduire les projets <span aria-hidden="true">↑</span>'
      : 'Afficher les autres projets <span aria-hidden="true">↓</span>';
    projectsToggle.hidden =
      displayedProjects.length <= featuredProjectIds.length;
  }
  displayedProjects.forEach(function (p) {
    var a = document.createElement("article");
    a.className = "card reveal";
    a.id = p.id;
    a.innerHTML =
      '<div class="card-cover">' +
      projectPhoto(p, "project-photo", "lazy") +
      '<span class="card-tag">' +
      p.cat +
      "</span>" +
      (p.done ? '<span class="badge">Terminé</span>' : "") +
      '<div class="project-hover"><p>' +
      p.d +
      "</p><span>Voir le projet ↗</span></div>" +
      "</div>" +
      '<div class="card-body"><h3 class="card-title"><button class="card-open" type="button" aria-haspopup="dialog" data-open="' +
      p.id +
      '">' +
      p.t +
      "</button></h3>" +
      '<p class="card-desc">' +
      p.d +
      '</p><div class="card-foot">' +
      TECH_LINE[p.id] +
      '<span class="card-more">Voir les détails</span></div></div>';
    a.hidden = featuredProjectIds.indexOf(p.id) === -1;
    feed.appendChild(a);
  });
  updateProjectsVisibility();
  projectsToggle.addEventListener("click", function () {
    projectsExpanded = !projectsExpanded;
    updateProjectsVisibility();
  });

  /* ---------- Fenêtre de détails ---------- */
  var dlg = $("#dlg"),
    dBody = $("#dlgBody");
  function list(a) {
    return (
      "<ul>" +
      a
        .map(function (x) {
          return "<li>" + x + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }
  function openP(id) {
    var p = P.filter(function (x) {
      return x.id === id;
    })[0];
    if (!p) return;
    var h =
      projectPhoto(p, "dl-img", "eager") +
      '<div class="dl-in"><div class="dl-meta">' +
      p.cat +
      (p.date ? " · " + p.date : "") +
      (p.done ? " · Terminé" : "") +
      '</div><h2 id="dlgTitle">' +
      p.t +
      "</h2><p>" +
      p.d +
      "</p>";
    if (p.goal) h += "<h3>Objectif</h3><p>" + p.goal + "</p>";
    if (p.feats) h += "<h3>Réalisations</h3>" + list(p.feats);
    if (p.stack && p.stack.length)
      h +=
        "<h3>Technologies et rôle</h3><dl>" +
        p.stack
          .map(function (s) {
            return "<dt>" + s[0] + "</dt><dd>" + s[1] + "</dd>";
          })
          .join("") +
        "</dl>";
    if (p.method)
      h += "<h3>Architecture / méthodologie</h3><p>" + p.method + "</p>";
    if (p.contrib) h += "<h3>Ma contribution</h3><p>" + p.contrib + "</p>";
    if (p.diff) h += "<h3>Difficulté rencontrée</h3><p>" + p.diff + "</p>";
    h +=
      '<h3>Code source</h3><p>Mon profil : <a href="https://github.com/maryamanahir6" target="_blank" rel="noopener noreferrer">github.com/maryamanahir6</a></p></div>';
    dBody.innerHTML = h;
    document.body.classList.add("lock");
    dlg.showModal();
    dlg.scrollTop = 0;
  }
  dlg.addEventListener("close", function () {
    document.body.classList.remove("lock");
  });
  dlg.addEventListener("click", function (e) {
    if (e.target === dlg) dlg.close();
  });
  $("#dlgX").addEventListener("click", function () {
    dlg.close();
  });
  feed.addEventListener("click", function (e) {
    var c = e.target.closest(".card");
    if (!c) return;
    openP(c.id);
  });

  /* ---------- Compétences interactives ---------- */
  function goTo(id) {
    var el = document.getElementById(id);
    if (!el) return;
    if (el.classList.contains("card") && el.hidden) {
      projectsExpanded = true;
      updateProjectsVisibility();
    }
    el.scrollIntoView({ behavior: BEH, block: "start" });
    el.classList.remove("flash");
    void el.offsetWidth;
    el.classList.add("flash");
    setTimeout(function () {
      el.classList.remove("flash");
    }, 2200);
  }
  function showSkill(skill, button, output) {
    $$(".skill-out").forEach(function (item) {
      item.hidden = true;
    });
    $$(".chip[aria-expanded=true]").forEach(function (item) {
      item.setAttribute("aria-expanded", "false");
    });
    var projects = M[skill];
    if (!projects || !projects.length) {
      output.innerHTML =
        "<p><b>" + skill + "</b> — " + "aucun projet associé précisé." + "</p>";
    } else {
      output.innerHTML =
        "<p><b>" +
        skill +
        "</b> — appris et utilisé dans :</p>" +
        projects
          .map(function (id) {
            return (
              '<button type="button" class="go" data-go="' +
              id +
              '">Voir le projet · ' +
              LBL[id] +
              "</button>"
            );
          })
          .join("");
    }
    output.hidden = false;
    button.setAttribute("aria-expanded", "true");
  }
  var sk = $("#skills");
  CATS.forEach(function (c) {
    var d = document.createElement("div");
    d.className = "skill-card reveal";
    d.innerHTML =
      '<h3 class="skill-cat">' +
      c[0] +
      '</h3><div class="chips"></div><div class="skill-out" role="status" aria-live="polite" hidden></div>';
    var box = d.querySelector(".chips"),
      out = d.querySelector(".skill-out");
    c[1].forEach(function (s) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip" + (M[s] ? " link" : "");
      b.textContent = s;
      b.setAttribute("aria-expanded", "false");
      b.addEventListener("pointerenter", function () {
        showSkill(s, b, out);
      });
      b.addEventListener("focus", function () {
        showSkill(s, b, out);
      });
      b.addEventListener("click", function () {
        showSkill(s, b, out);
      });
      box.appendChild(b);
    });
    d.addEventListener("pointerleave", function () {
      if (d.contains(document.activeElement)) return;
      out.hidden = true;
      d.querySelectorAll('.chip[aria-expanded="true"]').forEach(
        function (button) {
          button.setAttribute("aria-expanded", "false");
        },
      );
    });
    out.addEventListener("click", function (e) {
      var g = e.target.closest("[data-go]");
      if (g) goTo(g.dataset.go);
    });
    sk.appendChild(d);
  });

  /* ---------- Curseur, en-tête, marquee ---------- */
  var cursor = $("#cursor");
  if (cursor && !reduce && matchMedia("(hover:hover)").matches) {
    var cx = innerWidth / 2,
      cy = innerHeight / 2,
      tx = cx,
      ty = cy,
      n1 = $(".n1"),
      n2 = $(".n2");
    addEventListener("mousemove", function (e) {
      tx = e.clientX;
      ty = e.clientY;
      var x = tx / innerWidth - 0.5,
        y = ty / innerHeight - 0.5;
      if (n1)
        n1.style.transform = "translate(" + x * 30 + "px," + y * 30 + "px)";
      if (n2)
        n2.style.transform = "translate(" + x * -40 + "px," + y * -40 + "px)";
    });
    (function loop() {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      cursor.style.left = cx + "px";
      cursor.style.top = cy + "px";
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mouseover", function (e) {
      cursor.classList.toggle(
        "hovering",
        !!e.target.closest("a,button,.chip,.card,.certif-item"),
      );
    });
  }
  var nav = $("#nav");
  var onScroll = function () {
    nav.classList.toggle("shrunk", scrollY > 60);
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  var track = $("#marqueeTrack");
  if (track) track.innerHTML += track.innerHTML;

  /* ---------- Apparition au défilement (repli : tout visible sans IntersectionObserver) ---------- */
  var reveals = $$(".reveal");
  if (!("IntersectionObserver" in window) || reduce) {
    reveals.forEach(function (el) {
      el.classList.add("visible");
    });
  } else {
    var io = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add("visible");
          io.unobserve(e.target);
        });
      },
      { threshold: 0.05 },
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
    setTimeout(function () {
      reveals.forEach(function (el) {
        el.classList.add("visible");
      });
    }, 4000); // garde-fou
  }

  /* ---------- Compteurs ---------- */
  if ("IntersectionObserver" in window && !reduce) {
    var cio = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          var el = e.target,
            target = +el.dataset.count,
            suffix = el.dataset.suffix || "",
            cur = 0,
            step = Math.max(1, Math.ceil(target / 25));
          el.textContent = "0" + suffix;
          var t = setInterval(function () {
            cur = Math.min(target, cur + step);
            el.textContent = cur + suffix;
            if (cur >= target) clearInterval(t);
          }, 60);
        });
      },
      { threshold: 0.5 },
    );
    $$(".stat-num").forEach(function (el) {
      cio.observe(el);
    });
  }

  /* ---------- Section active + barre mobile centrée sur l’icône active ---------- */
  var links = $$(".nav-links a, .bottom-nav a"),
    bar = $("#bottomNav");
  if ("IntersectionObserver" in window) {
    var so = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          var id = "#" + e.target.id;
          links.forEach(function (a) {
            if (a.getAttribute("href") === id) {
              a.setAttribute("aria-current", "true");
              if (bar.scrollWidth > bar.clientWidth && a.parentNode === bar)
                bar.scrollTo({
                  left: a.offsetLeft - (bar.clientWidth - a.offsetWidth) / 2,
                  behavior: BEH,
                });
            } else a.removeAttribute("aria-current");
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    $$("#accueil, section[id]").forEach(function (s) {
      so.observe(s);
    });
  }
})();
