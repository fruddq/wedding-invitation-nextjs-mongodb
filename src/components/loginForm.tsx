import { GuestInterface } from "@/app/invitation/[inviteCode]/page";
import checkGuestCredentials from "@/utils/checkGuestCredentials";
import "./styles/loginForm.scss";

interface LoginFormProps {
  setGuest: (guest: GuestInterface | null) => void;
}
export const LoginForm: React.FC<LoginFormProps> = ({ setGuest }) => {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const password = formData.get("password") as string; // Add this line

    const guest = await checkGuestCredentials({ firstName, lastName, password });

    if (guest) {
      localStorage.setItem("guest", JSON.stringify(guest));
      setGuest(guest);
    }
  };

  return (
    <section className="login-container">
      <h1 className="login-title">
        Welcome to <br /> <span className="login-span">Nani & Fruddi's</span> <br />
        wedding reception
      </h1>
      <article className="login-text-wrapper">
        <p className="login-text">
          Please enter your first name, last name, and password below for more wedding
          details.
        </p>
      </article>
      <form className="form-container" onSubmit={handleLogin}>
        <div className="form-wrapper">
          <label htmlFor="firstName">First Name:</label>
          <input
            className="login-input"
            type="text"
            name="firstName"
            placeholder="Your first name"
            defaultValue="Jens"
          />
        </div>
        <div className="form-wrapper">
          <label htmlFor="lastName">Last Name:</label>
          <input
            className="login-input"
            type="text"
            name="lastName"
            placeholder="Your last name"
            defaultValue="Persson"
          />
        </div>
        <div className="form-wrapper">
          {" "}
          {/* Add this div */}
          <label htmlFor="password">Password:</label>
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Your password"
            defaultValue="NaniFruddIDo2024!"
          />
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
