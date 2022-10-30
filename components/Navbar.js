import Link from "next/link";

export default function Navbar() {
  const user = true;
  const username = true;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Feed</button>
          </Link>
        </li>
        {/* user is signed in and has a username */}
        {username && (
          <>
            <li>
              <Link href="/admin">
                <button className="btn-blue">Write post</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed in or has a username */}
        {!username && (
          <>
            <li>
              <Link href="/enter">
                <button className="btn-blue">Login</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
