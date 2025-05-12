export const JoinPage = ({ errorMessage }) => (
  <>
    {errorMessage && <span>{errorMessage}</span>}
    <form method="POST">
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="username" placeholder="Username" required />
      <input name="password" type="password" placeholder="Password" required />
      <input
        name="password2"
        type="password"
        placeholder="Confirm Password"
        required
      />
      <input name="location" placeholder="Location" required />
      <input type="submit" value="Join" />
    </form>
    <div className="auth-switch">
      <span>Already have an account? </span>
      <a href="/login">Log in now →</a>
    </div>
  </>
);
