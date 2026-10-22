import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Banquet Hall in Bensalem, PA | Weddings & Events",
  description:
    "Looking for a banquet hall in Bensalem, PA? Explore a versatile venue for intimate weddings, birthdays, baby showers, and Indian celebrations. Book your event today!",
  alternates: {
    canonical: "/banquet-hall-bensalem-pa",
  },
  openGraph: {
    title: "Banquet Hall in Bensalem, PA | Weddings & Events",
    description:
      "Looking for a banquet hall in Bensalem, PA? Explore a versatile venue for intimate weddings, birthdays, baby showers, and Indian celebrations. Book your event today!",
    type: "website",
  },
}

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Lamhaa, 2643 Street Rd, Bensalem, PA 19020")

export default function BanquetHallPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#4F4D46" }}>
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-sm tracking-[0.3em] uppercase mb-4 font-oswald"
            style={{ color: "#D4B44A" }}
          >
            2643 Street Rd, Bensalem, PA
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#FFFDF5" }}>
            Banquet Hall in Bensalem, PA for Weddings &amp; Special Events
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "#FFFDF5" }}>
            Looking for a banquet hall in Bensalem, PA? Lamhaa offers a versatile private venue
            for intimate weddings, birthdays, baby showers, and Indian celebrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-bold">
              <Link href="/#events">Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-bold border-2"
              style={{ borderColor: "#D4B44A", color: "#D4B44A" }}
            >
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <p className="text-lg leading-relaxed" style={{ color: "#4F4D46" }}>
            Looking for a banquet hall in Bensalem, PA for your next celebration? Lamhaa&apos;s
            private event space at 2643 Street Rd offers a refined, flexible venue for weddings,
            birthdays, baby showers, and cultural celebrations alike. Our in-house events team
            handles room setup, menu planning, and day-of coordination, so you can focus on your
            guests instead of logistics.
          </p>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#B8943A" }}>
              Banquet Hall for Rent in Bensalem, PA
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#4F4D46" }}>
              When you rent our banquet hall for rent in Bensalem, PA, you get a dedicated
              private dining room, in-house catering from Lamhaa&apos;s kitchen, and an event
              coordinator who helps plan your layout, timeline, and menu from start to finish.
              The hall is available for both daytime and evening bookings, with flexible packages
              built around your guest count rather than a one-size-fits-all minimum.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#B8943A" }}>
              An Intimate Wedding Venue in Bensalem, PA
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#4F4D46" }}>
              For couples who want something smaller and more personal, Lamhaa is an intimate
              wedding venue in Bensalem, PA well suited to engagement dinners, mehndi and haldi
              ceremonies, and wedding receptions for gatherings under roughly 100 guests. The
              room can be dressed for a traditional Indian ceremony or a modern reception, and
              our culinary team can build a tasting menu around your family&apos;s favorite
              regional dishes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#B8943A" }}>
              Banquet Hall for Birthday Parties
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#4F4D46" }}>
              Searching for a banquet hall for a birthday party in Bensalem, PA? Our private room
              accommodates milestone birthdays for kids, teens, and adults alike, with custom
              menu packages, dessert options, and room to set up music or a small dance floor.
              We&apos;ve hosted everything from first-birthday celebrations to 60th anniversary
              parties in the same flexible space.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#B8943A" }}>
              Banquet Hall for Baby Showers
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#4F4D46" }}>
              Lamhaa is also a popular banquet hall for a baby shower in Bensalem, PA, offering a
              bright, comfortable setting for daytime celebrations. We can arrange seating for
              games and gift-opening, a dedicated dessert table, and a lighter daytime menu built
              around brunch or lunch favorites — all without the formality of an evening event
              space.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#B8943A" }}>
              Indian Banquet Hall in Pennsylvania
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#4F4D46" }}>
              As an Indian banquet hall in PA, Lamhaa brings authentic Indian hospitality and
              cuisine to every event — tandoor-fired appetizers, regional curries, and festive
              sweets, all prepared by our in-house culinary team rather than an outside caterer.
              It&apos;s a natural fit for engagement parties, religious and cultural ceremonies,
              and any celebration where the food is as important as the venue itself.
            </p>
          </div>

          <Card className="border-border" style={{ backgroundColor: "#4F4D46" }}>
            <CardContent className="pt-6 space-y-4 text-center">
              <h2 className="text-xl font-semibold font-oswald" style={{ color: "#D4B44A" }}>
                Plan Your Event at Lamhaa Bensalem
              </h2>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5" style={{ color: "#D4B44A" }} />
                <span style={{ color: "#FFFDF5" }}>2643 Street Rd, Bensalem, PA 19020</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5" style={{ color: "#D4B44A" }} />
                <a href="tel:(609) 616-6001" style={{ color: "#FFFDF5" }} className="hover:underline">
                  (609) 616-6001
                </a>
              </div>
              <div className="pt-2">
                <Button asChild size="lg" className="font-bold">
                  <Link href="/#events">Request a Quote</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
