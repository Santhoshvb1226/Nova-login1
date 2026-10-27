
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white sm:p-10">
      <header className="mx-auto flex max-w-6xl items-center justify-between border-b border-slate-800 pb-6">
        <h1 className="text-2xl font-extrabold tracking-widest text-violet-400">
          NOVA
        </h1>

        <button
          onClick={handleLogout}
          className="rounded-xl border border-slate-700 px-5 py-2 text-sm font-semibold transition hover:bg-slate-800"
        >
          Log Out
        </button>
      </header>

      <section className="mx-auto mt-16 max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
          Dashboard
        </p>

        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          Welcome to NOVA!
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Your next experience starts here. You have successfully reached
          your demo dashboard.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-3xl">✦</div>
            <h3 className="mt-4 text-xl font-semibold">Your Space</h3>
            <p className="mt-2 text-slate-400">
              A place to begin your NOVA experience.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-3xl">✓</div>
            <h3 className="mt-4 text-xl font-semibold">Login Status</h3>
            <p className="mt-2 text-slate-400">
              You reached this page through the demo login flow.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-3xl">⚡</div>
            <h3 className="mt-4 text-xl font-semibold">Getting Started</h3>
            <p className="mt-2 text-slate-400">
              Your NOVA application is ready for its next feature.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
