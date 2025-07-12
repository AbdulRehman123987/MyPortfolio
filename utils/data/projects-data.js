import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

// export const projectsData = [
//     {
//         id: 1,
//         name: 'MERN Stack Todo App',
//         description: "A full-stack, user-authenticated Todo application where users can sign up, log in, and manage their personal todos (add, edit, delete, toggle). Includes protected routes and user-specific data handling.",
//         tools: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
//         role: 'Full Stack Developer',
//         code: 'https://github.com/your-username/mern-todo-app',
//         demo: 'https://todo-mern-tau.vercel.app/',
//         image: travel,
//     },
//     {
//         id: 2,
//         name: 'E Store (E-Commerce Website)',
//         description: "A hardware e-commerce platform where users can browse products, add them to the cart, and place orders, while admins manage products dynamically. Features authentication, a responsive UI, and efficient state management.",
//         tools: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Redux Toolkit', 'Firebase'],
//         role: 'Front End Developer',
//         code: 'https://github.com/your-username/e-store',
//         demo: 'https://e-store.netlify.app/',
//         image: crefin,
//     },
//     {
//         id: 3,
//         name: 'Warsi Trader Full-Stack E-Commerce',
//         description: "A MERN based e-commerce platform where users shop, and admins manage inventory with full CRUD functionality, secure authentication, Stripe payments, and EmailJS integration.",
//         tools: ['React.js', 'Redux Toolkit', 'Context API', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Stripe', 'EmailJS'],
//         role: 'Full Stack Developer',
//         code: 'https://github.com/your-username/warsi-trader',
//         demo: 'https://warsi-trader.vercel.app/',
//         image: realEstate,
//     },
// ];

export const projectsData = [
  {
    id: 2,
    name: "E-Store With RE ( Web and Mobile App )",
    description:
      "A fully responsive frontend e-commerce platform for hardware products, developed for both web and mobile views. Users can browse categorized products, add items to the cart, and view product details. State is managed using Redux Toolkit, while authentication and product storage are handled via Firebase. Styled with Tailwind CSS and DaisyUI, the design ensures a seamless shopping experience across devices.",
    tools: ["React.js", "Tailwind CSS", "DaisyUI", "Redux Toolkit", "Firebase"],
    role: "Frontend Developer",
    code: "https://github.com/your-username/e-store",
    demo: "https://e-store.netlify.app/",
    // image: crefin,
  },
  {
    id: 4,
    name: "Real Time Chat Application",
    description:
      "A full-stack real-time chat application where users can register, log in, and start conversations with each other. Built with secure authentication using JWT and message exchange powered by Socket.io, the app allows instant messaging between users. Includes chat list rendering, active conversation view, and protected routes. MongoDB stores all messages and user data. Built entirely from scratch with real-time functionality.",
    tools: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
    ],
    role: "Full Stack Developer",
    code: "https://github.com/your-username/mobile-sale-app",
    demo: "https://mobile-sale.vercel.app/",
    // image: mobile,
  },
  {
    id: 5,
    name: "Live Cricket Score App With Native",
    description:
      "A mobile application built with React Native to display live cricket scores, team statistics, and match summaries. Data is fetched from a live sports API and displayed in a clean, responsive layout. The app includes navigation between match details, team info, and real-time score updates. Designed with mobile-first UI principles to provide smooth performance and intuitive UX.",
    tools: ["React Native", "Expo", "React Navigation", "Live Cricket API"],
    role: "Mobile App Developer",
    code: "https://github.com/your-username/cricket-score-app",
    demo: "https://expo.dev/@your-username/cricket-score-app",
    // image: cricketApp,
  },
  {
    id: 6,
    name: "Student Management System With Laravel",
    description:
      "A full-stack web-based student management system developed with Laravel and MySQL. The system allows admins to add, edit, delete, and view student records, assign subjects, and manage user access. Utilizes Laravel's resource controllers and Blade templates for efficient routing and UI rendering. Includes login system with session-based authentication and form validation.",
    tools: ["Laravel", "Blade", "PHP", "MySQL", "Bootstrap"],
    role: "Full Stack Developer",
    code: "https://github.com/your-username/student-management-laravel",
    demo: "https://student-system-laravel.vercel.app/",
    // image: laravelApp,
  },
];
