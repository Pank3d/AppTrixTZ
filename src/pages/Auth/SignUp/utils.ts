import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../app/fireBase";

export const validatePassword = (value: string) => {
  const isValidPassword =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[_])[a-zA-Z\d_]{8,}$/.test(value);
  return (
    isValidPassword ||
    "Пароль должен содержать как минимум одну заглавную и строчную букву, одну цифру и один символ подчеркивания"
  );
};

export const createUser =  async({
  emailValue,
  passwordValue,
}: {
  emailValue: string;
  passwordValue: string;
}) => {
  try {
    await createUserWithEmailAndPassword(auth, emailValue, passwordValue).then(
      (user) => {
        console.log(user);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

