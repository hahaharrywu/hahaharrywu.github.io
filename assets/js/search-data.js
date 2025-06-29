// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/longPostSample.html";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-the-bandei-paper-has-been-accepted-to-uist-2025",
          title: 'The BandEI paper has been accepted to UIST 2025!',
          description: "",
          section: "News",},{id: "news-the-bandei-paper-has-been-accepted-to-uist-2025",
          title: 'The BandEI paper has been accepted to UIST 2025!',
          description: "",
          section: "News",},{id: "news-the-karp-paper-has-been-accepted-to-dis-2025",
          title: 'The karP paper has been accepted to DIS 2025!',
          description: "",
          section: "News",},{id: "news-going-to-madeira-for-dis-2025-see-you-in-portugal",
          title: 'Going to Madeira for DIS 2025, see you in Portugal!',
          description: "",
          section: "News",},{id: "news-the-bandei-paper-has-been-accepted-to-uist-2025",
          title: 'The BandEI paper has been accepted to UIST 2025!',
          description: "",
          section: "News",},{id: "projects-boubou",
          title: 'BouBou',
          description: "A bouldering tracking app designed to help climbers log problems, monitor progress, and reflect on their climbing journey.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/BouBou.html";
            },},{id: "projects-haptidrum",
          title: 'HaptiDrum',
          description: "A wearable air-drumming system that brings realistic haptic feedback and motion tracking to virtual drumming.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HaptiDrum.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
