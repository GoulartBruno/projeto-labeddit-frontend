export const getMessageErrorToastLogin = (message) => {
  switch (message) {
    case "email: Invalid email":
      return "'Email' or 'Password' is incorrect. Try again.";

    case "password: String must contain at least 8 character(s)":
      return "'Incorrect Email' or 'Password'. Try again.";

    case "'Incorrect Email' or 'Password'. Try again.":
      return "Incorrect Email' or 'Password'. Try again.";

    default:
      return "Unexpected error. Try again.";
  }
};

export const getMessageErrorToastSignup = (message) => {
  switch (message) {
    case "username: String must contain at least 2 character(s)":
      return "Invalid username, must have at least 2 characters.";

    case "email: Invalid email":
      return "Invalid email. Check and try again.";

    case "password: String must contain at least 8 character(s)":
      return "Invalid password. The password must be between 8 and 12 characters long, with upper and lower case letters and at least one number and one special character.";

    case "password: The password must be between 8 and 12 characters long, with upper and lower case letters and at least one number and one special character.":
      return "Invalid password. The password must be between 8 and 12 characters long, with upper and lower case letters and at least one number and one special character.";

    case "It is not possible to create more than one account with the same username. Try again.":
      return "Username in use! It is not possible to create more than one account with the same username. Try again.";

    case "It is not possible to create more than one account with the same email. Try again.":
      return "It is not possible to create more than one account with the same email. Try again.";

    default:
      return "Unexpected error. Try again.";
  }
};

export const getMessageErrorToastCreatePostOrComment = (message) => {
  switch (message) {
    case "content: String must contain at least 1 character(s)":
      return "You need to type something before posting!";

    case "Token inválido.":
      return "Unexpected error. Check if you are logged in correctly and try again.";

    case "token: String must contain at least 1 character(s)":
      return "Session expired. Refresh the page and log in again to continue.";

    case "postId: String must contain at least 1 character(s)":
      return "Unexpected error. Refresh the page and try again.";

    case "Post not found. Check the id and try again.":
      return "Post not found. Check if the post still exists and try again.";

    default:
      return "Unexpected error. Try again.";
  }
};

export const getMessageErrorToastLikeDislike = (message) => {
  switch (message) {
    case "Unable to interact with your own post.":
      return "Unable to interact with your own post.";

    case "Unable to interact with your own comment.":
      return "Unable to interact with your own comment.";

    case "Invalid token.":
      return "Unexpected error. Check if you are logged in correctly and try again.";

    case "token: String must contain at least 1 character(s)":
      return "Session expired. Refresh the page and log in again to continue.";

    case "postId: String must contain at least 1 character(s)":
      return "Unexpected error. Refresh the page and try again.";

    case "Post not found. Check the id and try again.":
      return "Post not found. Check if the post still exists and try again.";

    case "commentId: String must contain at least 1 character(s)":
      return "Unexpected error. Refresh the page and try again.";

    case "Comment not found. Check the id and try again.":
      return "Post not found. Check if the comment still exists and try again.";

    default:
      return "Unexpected error. Try again.";
  }
};
