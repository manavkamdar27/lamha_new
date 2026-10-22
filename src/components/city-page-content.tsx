"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Clock, Navigation as NavigationIcon } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import MenuModal from "@/components/menu-modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { lamhaaLocations, type CityPageData } from "@/data/city-pages"

const CityPageContent = ({ data }: { data: CityPageData }) => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)
  const location = lamhaaLocations[data.nearestLocation]
  const otherLocation =
    data.nearestLocation === "bensalem" ? lamhaaLocations.hamilton : lamhaaLocations.bensalem
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    location.mapsQuery
  )}`

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
            Serving {data.cityLabel}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: "#FFFDF5" }}>
            {data.h1}
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "#FFFDF5" }}>
            About {data.distanceMiles} miles (~{data.driveMinutes} min) from {data.cityLabel} via{" "}
            {data.directionsVia} to Lamhaa in {location.cityStateZip}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-bold">
              <a href={location.orderOnlineUrl} target="_blank" rel="noopener noreferrer">
                Order Online
              </a>
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
            <Button
              size="lg"
              variant="ghost"
              className="font-bold"
              style={{ color: "#FFFDF5" }}
              onClick={() => setIsMenuModalOpen(true)}
            >
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Intro content */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mb-12">
            {data.intro.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed" style={{ color: "#4F4D46" }}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Highlights */}
            <Card className="border-border" style={{ backgroundColor: "#4F4D46" }}>
              <CardContent className="pt-6">
                <h2
                  className="text-xl font-semibold mb-4 font-oswald"
                  style={{ color: "#D4B44A" }}
                >
                  Why Visit Lamhaa from {data.cityLabel}
                </h2>
                <ul className="space-y-3">
                  {data.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                        style={{ backgroundColor: "#D4B44A" }}
                      ></div>
                      <span style={{ color: "#FFFDF5" }}>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Location details */}
            <Card className="border-border" style={{ backgroundColor: "#4F4D46" }}>
              <CardContent className="pt-6 space-y-4">
                <h2
                  className="text-xl font-semibold mb-2 font-oswald"
                  style={{ color: "#D4B44A" }}
                >
                  {location.name}
                </h2>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#D4B44A" }} />
                  <div>
                    <p style={{ color: "#FFFDF5" }}>{location.address}</p>
                    <p style={{ color: "#FFFDF5" }}>{location.cityStateZip}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" style={{ color: "#D4B44A" }} />
                  <a
                    href={`tel:${location.phone}`}
                    style={{ color: "#FFFDF5" }}
                    className="hover:underline"
                  >
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#D4B44A" }} />
                  <p style={{ color: "#FFFDF5" }}>
                    11:00 AM – 10:00 PM
                    <br />
                    Tuesday Closed
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <NavigationIcon
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "#D4B44A" }}
                  />
                  <p style={{ color: "#FFFDF5" }}>
                    {data.distanceMiles} miles / ~{data.driveMinutes} min via {data.directionsVia}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center mt-10" style={{ color: "#4F4D46" }}>
            Closer to {otherLocation.cityStateZip.split(",")[0]}? Visit our other location at{" "}
            <Link href="/#locations" className="underline font-medium">
              {otherLocation.name}
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#1B1A17" }}>
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#FFFDF5" }}>
            Ready to Visit Lamhaa?
          </h2>
          <p className="mb-8" style={{ color: "#D4B44A" }}>
            Order online, get directions, or give us a call — we&apos;d love to host your next
            meal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-bold">
              <a href={location.orderOnlineUrl} target="_blank" rel="noopener noreferrer">
                Order Online
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold">
              <a href={`tel:${location.phone}`}>Call {location.phone}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <MenuModal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} />
    </main>
  )
}

export default CityPageContent
