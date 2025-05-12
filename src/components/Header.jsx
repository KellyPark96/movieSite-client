export const Header = ({ loggedIn, loggedInUser }) => (
  <header>
    <a href="/" className="header__logo">
      <i className="fab fa-youtube" />
    </a>
    <nav>
      <ul>
        <li>
          <a href="/search">
            <i className="fas fa-search" />
          </a>
        </li>
        {loggedIn ? (
          <>
            <li>
              <a href="/videos/upload">Upload Video</a>
            </li>
            <li>
              <a href="/users/edit">Edit Profile</a>
            </li>
            <li>
              <a href="/users/logout">Log Out</a>
            </li>
            <li>
              <a href={`/users/${loggedInUser._id}`}>
                {loggedInUser.avatarUrl === "" ? (
                  <span role="img" aria-label="avatar">
                    😀
                  </span>
                ) : (
                  <img
                    className="header__avatar"
                    src={loggedInUser.avatarUrl}
                    alt="avatar"
                  />
                )}
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/join" className="header__btn">
                Join
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  </header>
);
