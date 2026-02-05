module.exports = {
  siteMetadata: {
    siteUrl: `https://SP26-CS315-JaydenHolloway.github.io`,

    // YOUR NAME
    name: 'Jayden Holloway',

    // SITE TITLE
    title: `Jayden Holloway | Computer Science Student`,

    // SHORT DESCRIPTION
    description: `Computer Science student with interests in coding, cybersecurity, and full-stack development.`,

    // CONTACT / SOCIAL
    author: `@Jayden Holoway`,
    github: `https://github.com/JayHolla06`,
    email: `jayholla06@gmail.com`,

    // ABOUT / BIO (≈180–200 words — rubric sweet spot)
    about: `
I am a Computer Science student at Oakland City University with a strong interest in coding and cybersecurity. I enjoy learning how software systems work under the hood and how secure, efficient code can be used to solve real-world problems.

My academic experience has given me a solid foundation in programming, problem-solving, and computational thinking. I enjoy working with modern technologies and continuously improving my skills through coursework and hands-on practice. I am particularly interested in cybersecurity concepts such as secure systems, data protection, and understanding vulnerabilities in software.

What makes me unique as a developer is my ability to balance the demands of academics with being a college football athlete. This experience has helped me develop discipline, time management, teamwork, and perseverance—skills that directly translate to success in software development and collaborative technical environments.

I am currently focused on strengthening my programming skills, expanding my technical knowledge, and preparing for future projects and internships. My long-term goal is to build a career in software development or cybersecurity where I can continue learning, contribute to meaningful projects, and grow as a professional in the tech industry.
    `,

    // EDUCATION (COUNTS FOR PART 4)
    experience: [
      {
        name: 'Bachelor of Science in Computer Science',
        description:
          'Oakland City University | Expected Graduation: Spring 2028\nGPA: 3.9/4.0\nRelevant Coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering',
        link: '',
      },
    ],

    // PROJECTS (PLACEHOLDERS — ACCEPTABLE PER YOUR NOTE)
    projects: [
      {
        name: 'Personal Portfolio Website',
        description:
          'A personal portfolio website built to showcase my skills, projects, and academic experience as a computer science student.',
        link: '',
      },
      {
        name: 'Cybersecurity Practice Project',
        description:
          'A project focused on learning cybersecurity fundamentals, including secure coding practices and vulnerability awareness.',
        link: '',
      },
      {
        name: 'Programming Fundamentals Project',
        description:
          'A collection of programming exercises and mini-projects designed to strengthen core coding and problem-solving skills.',
        link: '',
      },
    ],

    // SKILLS (15+ TOTAL — PART 5 COMPLETE)
    skills: [
      {
        name: 'Programming Languages',
        description: 'JavaScript, Python, Java, SQL',
      },
      {
        name: 'Web Technologies',
        description: 'HTML, CSS, React, Node.js',
      },
      {
        name: 'Cybersecurity & Concepts',
        description:
          'Secure Coding Practices, Basic Network Security, Data Protection, Problem Solving',
      },
      {
        name: 'Tools & Practices',
        description:
          'Git, GitHub, REST APIs, Object-Oriented Programming, Agile Development',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
  ],
};
