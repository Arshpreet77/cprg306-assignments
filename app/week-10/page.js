import React from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  console.log(user);
  return (
    <div>
      <h1>Week 8</h1>
      <p>{user ? "Hello there!" : "Please sign in."}</p>
      <p>{user?.email}</p>
      {user && <p>{user.displayName}</p>}
      <p>
        {user ? (
          <div>
            <button onClick={firebaseSignOut}>Log out</button>
            <a href="week-8/shopping-List">Go to Shopping List</a>
          </div>
        ) : (
          <button onClick={gitHubSignIn}>Login with GitHub</button>
        )}
      </p>
    </div>
  );
}
