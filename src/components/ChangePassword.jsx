export const ChangePassword = ({ errorMessage }) => (
  <>
    {errorMessage && <span>{errorMessage}</span>}
    <form method="POST">
      <input type="password" name="oldPassword" placeholder="Old Password" />
      <input type="password" name="newPassword" placeholder="New Password" />
      <input
        type="password"
        name="newPasswordConfirmation"
        placeholder="New Password Confirmation"
      />
      <input type="submit" value="Change Password" />
    </form>
  </>
);
