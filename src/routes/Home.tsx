import { auth } from "../firebase";

export default function Home() {
  const onClickLogout = () => {
    auth.signOut();
  };

  return (
    <h1>
      <button onClick={onClickLogout}>LogOut</button>
    </h1>
  );
}
