import type { Metadata } from "next"
import { getCityPage, cityPagePath } from "@/data/city-pages"
import CityPageContent from "@/components/city-page-content"

const page = getCityPage("robbinsville-nj")!

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: {
    canonical: cityPagePath(page.slug),
  },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    type: "website",
  },
}

export default function Page() {
  return <CityPageContent data={page} />
}
