import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="flex flex-col items-center justify-center text-center px-4 py-32 min-h-[60vh]">
        <p className="text-sm tracking-[0.4em] uppercase text-muted-foreground mb-4">
          Error 404
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          This page has wandered off the menu
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-10">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to
          Lamhaa.
        </p>
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </section>
      <Footer />
    </main>
  )
}
