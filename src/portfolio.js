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
  role: 'Software Developer',
  description:
    'Full stack developer with a background in healthcare sciences, where I enhanced my development in communication, teamwork, and problem solving skills. I am very passionate when it comes to learning new technologies, and strive to provide solutions to complex problems through innovative techniques. Ultimately, my goal is to create applications that will optimize both the client and user experience.',
  description2: 'Feel free to reach out for a chat, discussion or anything else in between!',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/cheung-johnny/',
    github: 'https://github.com/jcheung123/',
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
    livePreview: 'https://github.com/',
  },
  {
    name: 'johnnycheung.me',
    img: 'ProjectImgs/PortfolioWebsite.png',
    description:
      'Portfolio website built to track my personal development in the software development industry, as well as to practise my React skills. Surprisingly, you are viewing this project right now!',
    stack: ['React', 'HTML', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Coming Soon',
    img: '#',
    description:
      'Coming Soon - Will Be Updated, Full stack application with React and Bootstrap',
    stack: ['React', 'NodeJS', 'ExpressJS', 'MongoDB'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
    <i class="devicon-tailwindcss-plain colored"></i>,
    <i class="devicon-git-plain colored"></i>,
]

const contact = {
  email: 'cheungjc@outlook.com'
}

export { header, about, projects, skills, contact }


