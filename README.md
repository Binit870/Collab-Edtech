Basic file structure for Collaborative Skill-Based EdTech Network
<br/>
collab-edtech/
│
├── client/                     # Frontend - React
│   ├── public/
│   └── src/
│       ├── assets/            # Images, logos
│       ├── components/        # Reusable UI components
│       │   ├── Navbar.jsx
│       │   ├── UserCard.jsx
│       │   ├── ProjectCard.jsx
│       │   └── MentorCard.jsx
│       ├── pages/             # Route pages
│       │   ├── Home.jsx
│       │   ├── Profile.jsx
│       │   ├── Discover.jsx   # Find collaborators
│       │   ├── Projects.jsx
│       │   └── Mentors.jsx
│       ├── context/           # Auth / global state
│       │   └── AuthContext.jsx
│       ├── services/          # API calls
│       │   └── api.js
│       ├── utils/             # Helpers, constants
│       ├── App.jsx
│       └── main.jsx
│
├── server/                    # Backend - Node.js/Express
│   ├── controllers/           # Logic for routes
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── projectController.js
│   │   └── mentorController.js
│   ├── models/                # MongoDB models
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── MentorRequest.js
│   ├── routes/                # Route definitions
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── projectRoutes.js
│   │   └── mentorRoutes.js
│   ├── middleware/            # Auth, error handlers
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── config/                # DB config, dotenv
│   │   └── db.js
│   └── index.js               # Entry point
│
├── .env                       # Secrets, DB URI
├── package.json
├── README.md
└── tailwind.config.js         # Tailwind CSS config (if used)
