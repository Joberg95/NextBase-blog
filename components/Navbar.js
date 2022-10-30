import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Navbar() {

  const { user, username } = useContext(UserContext);
  
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
