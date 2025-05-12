export const LoginPage = ({ errorMessage }) => (
  <>
    {errorMessage && <span>{errorMessage}</span>}
    <form method="POST">
      <input name="username" placeholder="Username" required />
      <input name="password" type="password" placeholder="Password" required />
      <input type="submit" value="Login" />
    </form>
    <div className="auth-switch">
      <span>Don't have an account? </span>
      <a href="/join">Create one now →</a>
    </div>
  </>
);
