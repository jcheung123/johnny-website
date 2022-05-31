const header = {
  homepage: 'https://johnnycheung.me',
  title: 'logo.png',
  linkAbout: 'About',
  linkProjects: 'Projects',
  linkSkills: 'Skills',
  linkContact: 'Contact',
}

const about = {
  name: 'Johnny Cheung',
  role: ['Full Stack Developer', 'Software Engineer', 'Part-Time Food Blogger', 'Travel Geek' ],
  description:
    "Full stack developer with a background in healthcare sciences, where I recently found my interest in programming. I am very passionate when it comes to working with other people and learning new technologies; and strive to provide solutions to complex problems through creative and solution-oriented approaches. Ultimately, my goal is to create applications that will optimize both the client and user experience. In other words, something that people love to use!",
  description2: "In my free time, you'll find me travelling, working out, swimming, hiking, or food blogging at different restaurants. Feel free to reach out for a chat, discussion or anything else in between :)",
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/cheung-johnny/',
    github: 'https://github.com/jcheung123/',
    instagram: 'https://www.instagram.com/torontofoodstop'
  },
}

const projects = [
  {
    name: 'BlackJacked',
    img: 'ProjectImgs/BlackJackImg.png', 
    description:
      "A Vanilla JavaScript browser-based game inspired by my all time favourite card game. Grab a friend and try this version of player vs. player Blackjack (I promise it's competitive).",
    stack: ['HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/jcheung123/BlackJacked',
    livePreview: 'https://jcheung123.github.io/BlackJacked',
  },
  {
    name: 'Dessertify',
    img: 'ProjectImgs/Dessertify.png',
    description:
      "Let's create the largest dessert repository for the community's favourite dessert spots in Toronto. This full stack CRUD app will allow users to add their favourites, as well as sharing reviews.",
    stack: ['NodeJS', 'ExpressJS', 'MongoDB', 'JavaScript', 'Bootstrap'],
    sourceCode: 'https://github.com/jcheung123/Dessertify',
    livePreview: 'https://dessertify.herokuapp.com/',
  },
  {
    name: 'johnnycheung.me',
    img: 'ProjectImgs/PortfolioWebsite.png',
    description:
      'Portfolio website built to track my personal development in the software development industry, as well as to practise my React skills. Surprisingly, you are viewing this project right now!',
    stack: ['React', 'HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/jcheung123/johnny-website',
    livePreview: 'https://johnnycheung.me',
  },
  {
    name: 'Re-Stocks',
    img: 'ProjectImgs/ReStocks.png',
    description:
      'Personalize your stocks portfolio for your investing needs with Re-Stocks, an app where you can save company profiles, real-time market data, and preview historical trends (coming soon).',
    stack: ['React', 'NodeJS', 'ExpressJS', 'MongoDB'],
    sourceCode: 'https://github.com/jcheung123/re-stocks',
    livePreview: 'https://restocks.herokuapp.com/',
  },
]

const skills = [
    <i class="devicon-html5-plain colored"></i>,
    <i class="devicon-css3-plain colored"></i>,
    <i class="devicon-javascript-plain colored"></i>,
    <i class="devicon-react-original colored"></i>,
    <i class="devicon-python-plain colored"></i>,
    <i class="devicon-nodejs-plain colored"></i>,
    <i class="devicon-express-original colored"></i>,
    <i class="devicon-mongodb-plain colored"></i>,
    <i class="devicon-django-plain colored"></i>,
    <i class="devicon-postgresql-plain colored"></i>,
    <i class="devicon-bootstrap-plain colored"></i>,
    <i class="devicon-git-plain colored"></i>,
]

const contact = {
  email: 'cheungjc@outlook.com'
}

export { header, about, projects, skills, contact }


