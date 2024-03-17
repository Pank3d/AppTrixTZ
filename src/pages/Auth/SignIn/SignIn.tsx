import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../../app/fireBase";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      passwordRepeat: "",
    },
  });

  const emailValue = watch("email");
  const passwordValue = watch("password");
  const [error, setError] = useState<string | null>();
  const navigate = useNavigate();

  const signInAccount = async ({
    emailValue,
    passwordValue,
  }: {
    emailValue: string;
    passwordValue: string;
  }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      );

      const user = userCredential.user;
      const idToken = await user.getIdToken();
      localStorage.setItem("idToken", idToken);
      setError(null);
    } catch (error) {
      setError("Неверный логин или пароль");
    }
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col gap-5 w-full h-screen justify-center text-center">
        <h1 className="text-xl">Вход</h1>
        <label>
          <input
            placeholder="EMAIL"
            type="email"
            className="border pl-1"
            {...register("email", {
              required: "Это поле обязательно",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Некорректный адрес электронной почты",
              },
            })}
          />
        </label>
        {errors.email && <p>{errors.email.message}</p>}
        <label>
          <input
            placeholder="PASSWORD"
            type={showPassword ? "text" : "password"}
            className="border pl-1"
            {...register("password", {
              required: "Это поле обязательно",
            })}
          />
        </label>
        {errors.password && <p>{errors.password.message}</p>}
        <p>{error}</p>
        <label className="text-xl">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />{" "}
          Показать пароль
        </label>
        <button
          className="text-xl"
          onClick={handleSubmit(() => {
            reset();
            signInAccount({ passwordValue, emailValue });
          })}
        >
          Войти
        </button>
        <button onClick={() => navigate("/sign-up")} className="text-xl">
          Еще не зарегестрированы
        </button>
      </div>
    </>
  );
};

export default SignIn;
