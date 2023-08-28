import { useForm } from "../../hooks/useForm";
import labeddit_logo from "../../assets/labeddit_logo.svg";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRequestData } from "../../hooks/useRequestData";
import { useToast } from "../../hooks/useToast";
import Cookies from "universal-cookie";
import loading from "../../assets/loading.svg";
import { getMessageErrorToastLogin } from "../../utils/ReturnMessageToast";
import { UserContext } from "../../contexts/UserContext";

// LoginPage component definition
export default function LoginPage() {
  // Initialize necessary hooks and context
  const cookies = new Cookies(); // Create new Cookies instance
  const navigate = useNavigate(); // Hook for navigation between routes
  const { isLoading, requestData } = useRequestData(); // Hook for managing HTTP request data
  const { errorToast, Toast } = useToast(); // Hook for displaying toast messages
  const { token, setToken } = useContext(UserContext); // Access user authentication context

  // State for form inputs and password visibility
  const [form, onChangeInputs, clearInputs] = useForm({
    // Form state management hook
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const handleShowPassword = () => {
    // Toggle password visibility
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Send login request to server
    const response = await requestData("users/login", "POST", undefined, form);

    // If login successful, set token and navigate to posts page
    if (response.data.token) {
      clearInputs(); // Clear form inputs
      cookies.set("labedditUserToken", response.data.token, { path: "/" }); // Set token in cookies
      setToken(response.data.token); // Set token in context
      navigate("/posts"); // Redirect to posts page
    } else {
      errorToast(getMessageErrorToastLogin(response.data)); // Display error toast
    }
  };

  // Redirect to posts page if user is already logged in
  useEffect(() => {
    if (token) {
      navigate("/posts"); // Redirect to posts page
    }
  }, [navigate, token]); // Dependency array for useEffect

  // Render login page UI
  return (
    <>
      <main className="flex min-h-full flex-col justify-center px-8 gap-24">
        {/* Logo and slogan */}
        <div className="flex justify-center items-center flex-col">
          <img
            className="mx-auto w-auto"
            src={labeddit_logo}
            alt="Logo da rede social Labeddit"
          />
          <p className="font-light text-center">
            O projeto de rede social da Labenu
          </p>
        </div>

        {/* Login form */}
        <div className="flex items-center flex-col w-full">
          <form className="form" onSubmit={handleSubmit}>
            {/* Email input */}
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChangeInputs}
              autoComplete="email"
              placeholder="Email"
              required
              className="input"
            />
            {/* Password input */}
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={onChangeInputs}
              autoComplete="current-password"
              placeholder="Senha"
              required
              className="input"
            />
            {/* Toggle password visibility button */}
            {showPassword ? (
              <AiOutlineEyeInvisible
                className="absolute text-gray-900 right-4 mt-[85px] sm:mt-[93px]"
                onClick={handleShowPassword}
              />
            ) : (
              <AiOutlineEye
                className="absolute text-gray-900 right-4 mt-[85px] sm:mt-[93px]"
                onClick={handleShowPassword}
              />
            )}
            {/* Submit and sign-up buttons */}
            <div className="w-full h-full flex flex-col items-center gap-4 pt-14">
              <button type="submit" className="button">
                {/* Render button text or loading spinner */}
                {!isLoading ? (
                  "Continuar"
                ) : (
                  <img
                    src={loading}
                    alt="Carregando sua requisição"
                    className="inline w-6 h-6 mr-3 animate-spin"
                  />
                )}
              </button>
              <hr className="hr" />
              <button
                type="button"
                className="button-outline"
                onClick={() => navigate("/signup")}>
                Crie uma conta!
              </button>
            </div>
          </form>
        </div>
      </main>
      {/* Toast component for displaying messages */}
      <Toast />
    </>
  );
}
