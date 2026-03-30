"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleLogin() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  }

  async function handleLogout() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-100 dark:bg-slate-950 p-6">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
        Shopping List App
      </h1>

      {!user ? (
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Please sign in to continue.
        </button>
      ) : (
        <>
          <p className="text-slate-800 dark:text-slate-200">
            Welcome, {user.displayName} ({user.email})
          </p>

          <Link
            href="/week-10/shopping-list"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700"
          >
            Go to Shopping List
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </>
      )}
    </main>
  );
}