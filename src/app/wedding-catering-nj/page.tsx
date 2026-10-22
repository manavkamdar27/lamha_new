import type { Metadata } from "next"
import Link from "next/link"
import { Phone } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Wedding Catering in NJ | Indian Wedding Catering | Lamhaa",
  description:
    "Plan your celebration with Indian wedding catering in New Jersey from Lamhaa. Explore customizable menus, catering options, and food for your special day.",
  alternates: {
    canonical: "/wedding-catering-nj",
  },
  openGraph: {
    title: "Wedding Catering in NJ | Indian Wedding Catering | Lamhaa",
    description:
      "Plan your celebration with Indian wedding catering in New Jersey from Lamhaa. Explore customizable menus, catering options, and food for your special day.",
    type: "website",
  },
}

export default function WeddingCateringPage() {
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
            Hamilton, NJ &amp; Bensalem, PA
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#FFFDF5" }}>
            Indian Wedding Catering in New Jersey
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "#FFFDF5" }}>
            Plan your celebration with Indian wedding catering in New Jersey from Lamhaa —
            customizable menus, flexible packages, and food for every part of your special day.
          </p>
          <Button asChild size="lg" className="font-bold">
            <Link href="/#events">Request a Catering Quote</Link>
          </Button>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <p className="text-lg leading-relaxed" style={{ color: "#4F4D46" }}>
            Planning wedding catering in NJ shouldn&apos;t mean choosing between great food and a
            stress-free day. Lamhaa caters weddings and pre-wedding celebrations across New
            Jersey, bringing the same chef-driven Indian cuisine from our Hamilton Township
            dining room directly to your venue — from the sangeet and mehndi to the reception
            itself.
          </p>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#B8943A" }}>
              Wedding Menus
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#4F4D46" }}>
              Our wedding menus span North Indian classics — tandoor-fired kebabs and breads,
              slow-simmered curries, biryanis, and festive sweets — alongside live cooking
              stations for chaat, dosa, or carving, if you&apos;d like something interactive for
              guests. Vegetarian, vegan, halal, and Jain-friendly options are all available, and
              our chefs are happy to build a menu around specific family recipes or regional
              traditions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#B8943A" }}>
              Catering Packages &amp; Guest Capacity
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#4F4D46" }}>
              Lamhaa's catering packages scale from intimate gatherings of 30–50 guests up to
              large receptions of several hundred, with pricing structured per person so costs
              stay predictable as your guest list changes. Packages can include staffed buffet
              service, plated courses, or a hybrid of both, along with servingware and setup for
              your venue.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#B8943A" }}>
              Customization Options
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#4F4D46" }}>
              Every wedding is different, so every menu is built from scratch rather than picked
              off a fixed template. We work with couples on spice levels, regional specialties
              (North Indian, South Indian, Indo-Chinese fusion), dietary restrictions, and
              course count, and can design multi-day packages that cover the sangeet, haldi, and
              reception with a consistent but varied menu across each event.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#B8943A" }}>
              Service Areas
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#4F4D46" }}>
              Lamhaa provides wedding catering throughout central New Jersey — including Hamilton,
              Trenton, Princeton, Robbinsville, and Lawrenceville — as well as venues in lower
              Bucks County, PA near our Bensalem location. If your venue falls outside these
              areas, reach out anyway; we evaluate catering requests on a case-by-case basis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: "#B8943A" }}>
              Booking Process
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#4F4D46" }}>
              Booking starts with a quote request detailing your date, guest count, and venue —
              from there, our events team schedules a tasting and walks through menu options
              before confirming a final package. We recommend reaching out at least 3–4 months
              ahead of your wedding date to secure your preferred date, though we can sometimes
              accommodate shorter timelines.
            </p>
          </div>

          <Card className="border-border" style={{ backgroundColor: "#4F4D46" }}>
            <CardContent className="pt-6 space-y-4 text-center">
              <h2 className="text-xl font-semibold font-oswald" style={{ color: "#D4B44A" }}>
                Start Planning Your Wedding Catering
              </h2>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5" style={{ color: "#D4B44A" }} />
                <a href="tel:(609) 616-6000" style={{ color: "#FFFDF5" }} className="hover:underline">
                  (609) 616-6000
                </a>
              </div>
              <div className="pt-2">
                <Button asChild size="lg" className="font-bold">
                  <Link href="/#events">Request a Catering Quote</Link>
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
