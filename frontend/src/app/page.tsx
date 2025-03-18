import { Button } from "@/components/atoms/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-6 text-center space-y-6 bg-background">
      <h1 className="text-3xl font-extrabold text-foreground">Hello,</h1>
      <h2 className="text-2xl font-semibold text-muted-foreground">
        I&apos;m Mohammad Reza Badri
      </h2>
      <p className="text-lg text-muted-foreground">
        Welcome to the demo task for{" "}
        <span className="font-medium text-foreground">Toman Company</span>
      </p>
      <Button
        asChild
        className="mt-6 px-8 py-4 text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
      >
        <Link href="/dashboard/payments">Let’s Go & Show the Demo</Link>
      </Button>
    </div>
  );
}
