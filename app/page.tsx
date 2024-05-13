import Layout from "./pages/sidebar/page";
import Dashboard from "./pages/dashboard/page.jsx";

export default function Home() {
  return (
    <main className="flex">
      <Layout />
      <Dashboard />
    </main>
  );
}
