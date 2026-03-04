import Footer from "../components/Footer";
import "../styles/Login.css";
import LevelUpLogo from "../assets/LevelUpLogo.png"

export function Login() {
  return (
    <>
      <div className="login-wrapper">
        <div className="login-content">
          
  

          <div className="login-container">
            <img
            src={LevelUpLogo}
            alt="Level Up Logo"
            className="login-logo"
            />
            <form>
              <div className="login-option">
                <label htmlFor="username">Enter username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  minLength={5}
                  maxLength={25}
                />
              </div>

              <div className="login-option">
                <label htmlFor="password">Enter password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  minLength={8}
                  maxLength={30}
                />
              </div>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}