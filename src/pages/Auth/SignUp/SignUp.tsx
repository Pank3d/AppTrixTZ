import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUser, showNotify, validatePassword } from "../utils";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
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

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const emailValue = watch("email");
  const passwordValue = watch("password");
  const navigate = useNavigate();

  const validatePasswordRepeat = (value: string) => {
    return value === passwordValue || "Пароли не совпадают";
  };



  return (
    <div className="flex flex-col gap-5 w-full h-screen justify-center text-center">
      <h1 className="text-xl">Регистрация</h1>
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
      {errors.email && <p>{errors.email.message}</p>}{" "}
      <label>
        <input
          placeholder="PASSWORD"
          type={showPassword ? "text" : "password"}
          className="border pl-1"
          {...register("password", {
            required: "Это поле обязательно",
            validate: validatePassword,
          })}
        />
      </label>
      {errors.password && <p>{errors.password.message}</p>}{" "}
      <label>
        <input
          placeholder="REPEAT PASSWORD"
          type={showPassword ? "text" : "password"}
          className="border pl-1"
          {...register("passwordRepeat", {
            required: "Это поле обязательно",
            validate: validatePasswordRepeat,
          })}
        />
      </label>
      {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>}{" "}
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
          showNotify();
          createUser({ emailValue, passwordValue });
          navigate("/sign-in");
        })}
      >
        Зарегистрироваться
      </button>
      <button onClick={() => navigate("/sign-in")} className="text-xl">
        Уже зарегистрирован
      </button>
    </div>
  );
};

export default SignUp;
