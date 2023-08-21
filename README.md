# Labeddit - Frontend

## About the Project

Labeddit is a fictional social network created for the final FullStack project of Labenu's FullStack Web bootcamp, divided into 2 repositories (labeddit-backend and labeddit-frontend).

The front-end is a React.js application created using Vite, where users can register, log in, view a list of posts, view a specific post with a list of comments, interact with posts and comments, as well as create their own posts and comments. Routes are protected with JWT stored in cookies. Inspired by the Reddit social network.

## Access Link

- Labeddit-Front-End: [Click here!](https://github.com/GoulartBruno/projeto-labeddit-frontend)

### Installation

```bash
# Install all dependencies$ npm install
# Run the project
$ npm run dev

# The application will start on port 5173
```

### Libraries Used

```
react-router-dom
axios
react-icons
date-fns
jose
react-toastify
cookies
universal-cookie
tailwindcss
postcss
autoprefixer
```

### Technologies

- ReactJS
- React Hooks
- React Context
- Axios
- Autenticação e autorização (JWT)
- Cookies
- TailwindCSS

### Functionalities

- **Public routes:**
- It is possible to register.
- It is possible to log in.
- **Authentication-protected routes:**
  - Viewing a list of posts.
    - With date of when they were created.
    - With usernames of their creators.
    - With number of likes.
    - With number of comments.
    - Choose to view in order of most recent.
    - Choose to view in order of most popular (based on the number of likes).
  - You can create a new post.
  - You can like or dislike any post.
  - It is not possible to like or dislike your own post.
  - Viewing a specific post with its list of comments (if any).
    - Comments with date when they were created.
    - Comments with usernames of their creators.
    - Comments with number of likes.
  - You can create a new comment.
  - It is possible to like or dislike a comment.
  - It is not possible to like or dislike your own comment.
  - It is possible to log out (exit) of the social network.

### Future improvements

- Being able to delete a post.
- You can delete a comment.
- View page with user information.
- Being able to delete your account.
- Being able to edit a post.
- It is possible to edit a comment.
- It is possible to edit user information (username, email and password).

### Project status

- Finished ⏳

## Contact

Linkedin: https://www.linkedin.com/in/goulartbruno/
<br>
Email: brunogoulartdev@outlook.com
