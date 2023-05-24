import Navbar from "@/components/Organisms/Navbar";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background bg-blend-multiply">
      <Navbar />
      <p className="text-white">Home</p>
    </main>
  );
}

