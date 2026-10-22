export type LamhaaLocationKey = "bensalem" | "hamilton"

export interface LamhaaLocationInfo {
  key: LamhaaLocationKey
  name: string
  address: string
  cityStateZip: string
  phone: string
  orderOnlineUrl: string
  mapsQuery: string
}

export const lamhaaLocations: Record<LamhaaLocationKey, LamhaaLocationInfo> = {
  bensalem: {
    key: "bensalem",
    name: "Lamhaa Bensalem",
    address: "2643 Street Rd",
    cityStateZip: "Bensalem, PA 19020",
    phone: "(609) 616-6001",
    orderOnlineUrl: "https://www.clover.com/online-ordering/Lamhaa-bensalem",
    mapsQuery: "Lamhaa, 2643 Street Rd, Bensalem, PA 19020",
  },
  hamilton: {
    key: "hamilton",
    name: "Lamhaa Hamilton",
    address: "133 Youngs Rd",
    cityStateZip: "Hamilton Township, NJ 08619",
    phone: "(609) 616-6000",
    orderOnlineUrl:
      "https://www.clover.com/online-ordering/lamhaa-group--hamilton-hamilton-township",
    mapsQuery: "Lamhaa, 133 Youngs Rd, Hamilton Township, NJ 08619",
  },
}

export interface CityPageData {
  slug: string
  cityLabel: string
  keyword: string
  metaTitle: string
  metaDescription: string
  h1: string
  nearestLocation: LamhaaLocationKey
  distanceMiles: number
  driveMinutes: number
  directionsVia: string
  intro: string[]
  highlights: string[]
}

export const cityPages: CityPageData[] = [
  {
    slug: "feasterville-trevose-pa",
    cityLabel: "Feasterville Trevose, PA",
    keyword: "Indian restaurant Feasterville Trevose PA",
    metaTitle: "Indian Restaurant in Feasterville Trevose, PA | Lamhaa",
    metaDescription:
      "Discover flavorful Indian cuisine at Lamhaa near Feasterville Trevose, PA. Explore authentic dishes, a welcoming dining experience, and menu options for your next visit.",
    h1: "Indian Restaurant Near Feasterville Trevose, PA",
    nearestLocation: "bensalem",
    distanceMiles: 4.6,
    driveMinutes: 14,
    directionsVia: "PA-132",
    intro: [
      "If you're searching for an Indian restaurant in Feasterville Trevose, PA, Lamhaa in Bensalem is just a short drive east along PA-132 — about 4.6 miles, or roughly 14 minutes from the Street Road shopping corridor. Guests from Feasterville, Trevose, and the surrounding Lower Southampton and Middletown Township neighborhoods visit Lamhaa for chef-driven Indian cuisine served in a refined, modern dining room rather than a typical takeout counter.",
      "Our menu draws on classic North Indian technique — slow-simmered curries, tandoor-fired breads and kebabs, and carefully balanced spice blends — alongside modern plating and presentation. Whether you're coming from a day of shopping along Street Road or finishing up work nearby, Lamhaa offers a sit-down experience built for date nights, family dinners, and small celebrations alike.",
      "Lamhaa also hosts private events and can accommodate larger Feasterville Trevose area groups with advance notice, from birthday dinners to small corporate gatherings. Call ahead for parties of six or more so our team can prepare a table and, if you'd like, a custom tasting menu.",
    ],
    highlights: [
      "Just 14 minutes from Feasterville Trevose via PA-132",
      "Chef-driven North Indian menu with tandoor specialties",
      "Full-service dining room, not just takeout",
      "Private dining available for groups and celebrations",
    ],
  },
  {
    slug: "langhorne-pa",
    cityLabel: "Langhorne, PA",
    keyword: "Indian restaurant Langhorne PA",
    metaTitle: "Indian Restaurant in Langhorne, PA | Lamhaa",
    metaDescription:
      "Looking for an Indian restaurant near Langhorne, PA? Explore Lamhaa's Indian cuisine, flavorful dishes, and dining options for family meals and special occasions.",
    h1: "Indian Restaurant Near Langhorne, PA",
    nearestLocation: "bensalem",
    distanceMiles: 5.6,
    driveMinutes: 14,
    directionsVia: "PA-513 and PA-413",
    intro: [
      "Families near Sesame Place, Oxford Valley Mall, and historic Langhorne borough looking for an Indian restaurant don't have to go far — Lamhaa in Bensalem is about 5.6 miles away, a 14-minute drive via PA-513 and PA-413. It's an easy stop before or after a day at the park, or a reliable dinner spot for Langhorne families looking for something beyond the usual chain restaurants.",
      "Lamhaa's menu is built around slow-cooked curries, fresh tandoor breads, and dishes that work equally well for picky younger eaters and guests looking for bolder, spicier flavors — our team is happy to adjust spice levels on request, which makes it a popular choice for Langhorne-area families.",
      "Beyond everyday dining, Lamhaa's Bensalem location hosts birthdays, anniversaries, and small private events for guests coming from Langhorne and the greater lower Bucks County area. Reach out ahead of time to reserve a table or discuss a custom event menu.",
    ],
    highlights: [
      "14 minutes from Langhorne via PA-513 / PA-413",
      "Family-friendly, adjustable spice levels on request",
      "Convenient stop near Sesame Place and Oxford Valley Mall",
      "Private event space available with advance booking",
    ],
  },
  {
    slug: "levittown-pa",
    cityLabel: "Levittown, PA",
    keyword: "Indian restaurant Levittown PA",
    metaTitle: "Indian Restaurant in Levittown, PA | Lamhaa",
    metaDescription:
      "Enjoy flavorful Indian cuisine near Levittown, PA, at Lamhaa. Explore delicious menu options and discover a welcoming spot for casual dining and special meals.",
    h1: "Indian Restaurant Near Levittown, PA",
    nearestLocation: "bensalem",
    distanceMiles: 8.3,
    driveMinutes: 19,
    directionsVia: "Byberry Rd and New Falls Rd",
    intro: [
      "Levittown, one of Bucks County's best-known planned communities, sits about 8.3 miles from Lamhaa's Bensalem location — a straightforward 19-minute drive via Byberry Road and New Falls Road. For residents of Levittown's many named sections looking for an Indian restaurant with a genuine sit-down dining room, Lamhaa is one of the closest options offering full-service Indian cuisine rather than a quick counter-service meal.",
      "Our kitchen focuses on classic Indian cooking — richly spiced curries, tandoor-roasted meats and vegetables, fresh-baked naan — served in a warm, modern space suited to a relaxed weeknight dinner or a weekend outing with the whole family. We also keep a selection of milder dishes on the menu for guests who are newer to Indian food.",
      "Levittown-area guests planning something bigger — a birthday, anniversary, or small gathering — can also book Lamhaa's private dining space in Bensalem, with custom menu options available on request.",
    ],
    highlights: [
      "About 19 minutes from Levittown via Byberry Rd / New Falls Rd",
      "Full sit-down dining, not just takeout",
      "Menu options for both spice lovers and first-time guests",
      "Private events available for Levittown-area celebrations",
    ],
  },
  {
    slug: "northeast-philadelphia",
    cityLabel: "Northeast Philadelphia",
    keyword: "Indian restaurant Northeast Philadelphia",
    metaTitle: "Indian Restaurant in Northeast Philadelphia | Lamhaa",
    metaDescription:
      "Discover Indian cuisine near Northeast Philadelphia at Lamhaa. Explore flavorful dishes, menu options, and dining choices for family meals and special occasions.",
    h1: "Indian Restaurant Near Northeast Philadelphia",
    nearestLocation: "bensalem",
    distanceMiles: 9.2,
    driveMinutes: 18,
    directionsVia: "I-95 S",
    intro: [
      "Northeast Philadelphia — from the neighborhoods along Roosevelt Boulevard to the area around Philadelphia Mills — is one of the most diverse and densely populated parts of the city, and home to a large community that regularly seeks out Indian cuisine. Lamhaa's Bensalem location sits just over the city line, about 9.2 miles and an 18-minute drive via I-95 S, making it an easy option for Northeast Philly residents who want a proper sit-down Indian dining experience.",
      "Lamhaa serves refined North Indian fare — tandoor-fired kebabs and breads, slow-simmered curries, and seasonal specials — in a dining room designed for everything from a casual weeknight dinner to a milestone celebration. For guests coming down from the Northeast, it's a short highway drive that trades strip-mall takeout for a full restaurant experience.",
      "We also welcome larger groups from Northeast Philadelphia for private events, including birthdays, engagement dinners, and corporate get-togethers, with custom menus available for parties booked in advance.",
    ],
    highlights: [
      "18 minutes from Northeast Philadelphia via I-95 S",
      "Full-service Indian dining, not just takeout",
      "Tandoor specialties and seasonal curries",
      "Private event hosting for larger groups",
    ],
  },
  {
    slug: "princeton-nj",
    cityLabel: "Princeton, NJ",
    keyword: "Indian restaurant Princeton NJ",
    metaTitle: "Indian Restaurant in Princeton, NJ | Lamhaa",
    metaDescription:
      "Discover Indian cuisine near Princeton, NJ, at Lamhaa. Explore flavorful dishes, menu options, and a welcoming dining experience for lunch, dinner, and gatherings.",
    h1: "Indian Restaurant Near Princeton, NJ",
    nearestLocation: "hamilton",
    distanceMiles: 13.0,
    driveMinutes: 22,
    directionsVia: "I-295 N and County Hwy-583",
    intro: [
      "Princeton, home to Princeton University and the shops of Nassau Street, is about 13 miles from Lamhaa's Hamilton Township location — roughly a 22-minute drive via I-295 N and County Highway 583. Students, faculty, and Princeton-area residents looking for an Indian restaurant beyond campus dining halls will find Lamhaa a worthwhile short trip south.",
      "Lamhaa's Hamilton menu features chef-prepared North Indian classics — tandoor-roasted meats, slow-cooked curries, fresh naan and rice dishes — served in a modern, comfortable dining room. It's suited to everything from a relaxed lunch between classes to a proper dinner with visiting family during a Princeton weekend.",
      "For Princeton-area groups planning something larger, Lamhaa Hamilton also offers private event space for graduations, birthdays, and small corporate gatherings, with custom menu options available when booked ahead of time.",
    ],
    highlights: [
      "About 22 minutes from Princeton via I-295 N",
      "Popular with Princeton University students and families",
      "Chef-prepared tandoor and curry specialties",
      "Private events available for graduations and celebrations",
    ],
  },
  {
    slug: "robbinsville-nj",
    cityLabel: "Robbinsville, NJ",
    keyword: "Indian restaurant Robbinsville NJ",
    metaTitle: "Indian Restaurant in Robbinsville, NJ | Lamhaa",
    metaDescription:
      "Searching for Indian food near Robbinsville, NJ? Explore Lamhaa's flavorful Indian cuisine, menu selections, and dining options for family meals and celebrations.",
    h1: "Indian Restaurant Near Robbinsville, NJ",
    nearestLocation: "hamilton",
    distanceMiles: 3.6,
    driveMinutes: 8,
    directionsVia: "Whitehorse-Hamilton Square Rd and NJ-33",
    intro: [
      "Robbinsville, home to the BAPS Shri Swaminarayan Mandir and the growing Washington Town Center area, is practically next door to Lamhaa — just 3.6 miles and an 8-minute drive via Whitehorse-Hamilton Square Road and NJ-33. With a large and growing South Asian community, Robbinsville has become one of the strongest nearby markets for genuine, chef-driven Indian cuisine, and Lamhaa's Hamilton Township location is one of the closest full-service options.",
      "Our menu reflects authentic North Indian cooking — tandoor-fired breads and kebabs, richly spiced curries, and dishes prepared to traditional standards rather than a watered-down American version. For Robbinsville families who know what real Indian food should taste like, Lamhaa aims to meet that bar in a comfortable, modern dining room just minutes from home.",
      "Lamhaa Hamilton also hosts private events for Robbinsville-area guests, from birthday dinners to religious and cultural celebrations, with custom menus available for groups booked in advance.",
    ],
    highlights: [
      "Just 8 minutes from Robbinsville via NJ-33",
      "Close to the BAPS Shri Swaminarayan Mandir and Town Center",
      "Authentic North Indian recipes and spice levels",
      "Private event hosting for family and cultural celebrations",
    ],
  },
  {
    slug: "lawrenceville-nj",
    cityLabel: "Lawrenceville, NJ",
    keyword: "Indian restaurant Lawrenceville NJ",
    metaTitle: "Indian Restaurant in Lawrenceville, NJ | Lamhaa",
    metaDescription:
      "Explore Indian cuisine near Lawrenceville, NJ, at Lamhaa. Discover flavorful dishes and menu options for everyday dining, family meals, and special occasions.",
    h1: "Indian Restaurant Near Lawrenceville, NJ",
    nearestLocation: "hamilton",
    distanceMiles: 9.7,
    driveMinutes: 15,
    directionsVia: "I-295 N",
    intro: [
      "Lawrenceville, home to Rider University and The Lawrenceville School, sits about 9.7 miles from Lamhaa's Hamilton Township location — a 15-minute drive north via I-295. Students, staff, and Lawrenceville families looking for an Indian restaurant with a real dining room, rather than a quick takeout spot, will find Lamhaa an easy trip down I-295.",
      "The menu at Lamhaa Hamilton centers on North Indian classics — tandoor-roasted meats, slow-simmered curries, and fresh-baked breads — prepared with the kind of care that makes it a destination for both weeknight dinners and special occasions. It's a popular choice for Lawrenceville families hosting out-of-town guests who want to introduce them to real Indian cuisine.",
      "For larger Lawrenceville-area gatherings — end-of-semester dinners, birthdays, or small corporate functions — Lamhaa Hamilton offers private event space with custom menu options when booked in advance.",
    ],
    highlights: [
      "About 15 minutes from Lawrenceville via I-295 N",
      "Convenient for Rider University and The Lawrenceville School communities",
      "Tandoor specialties and slow-cooked curries",
      "Private dining available for group events",
    ],
  },
  {
    slug: "trenton-nj",
    cityLabel: "Trenton, NJ",
    keyword: "Indian restaurant Trenton NJ",
    metaTitle: "Indian Restaurant in Trenton, NJ | Lamhaa",
    metaDescription:
      "Looking for Indian cuisine near Trenton, NJ? Visit Lamhaa to explore flavorful dishes, menu options, and dining choices for family meals and special gatherings.",
    h1: "Indian Restaurant Near Trenton, NJ",
    nearestLocation: "hamilton",
    distanceMiles: 5.3,
    driveMinutes: 14,
    directionsVia: "County Hwy-619 and County Hwy-635",
    intro: [
      "As New Jersey's state capital and the seat of Mercer County, Trenton is just 5.3 miles from Lamhaa's Hamilton Township location — about a 14-minute drive via County Highway 619 and County Highway 635. Whether you work near the Statehouse or live in one of Trenton's neighborhoods, Lamhaa is one of the closest places to get a proper, sit-down Indian meal rather than a quick takeout order.",
      "Lamhaa's Hamilton menu is built around North Indian staples done well — tandoor-fired kebabs and naan, slow-cooked curries, and carefully balanced spice blends — served in a comfortable, modern dining room. It works equally well for a weekday lunch break from downtown Trenton or a relaxed weekend dinner with family.",
      "Trenton-area groups planning something larger can also book Lamhaa Hamilton's private event space for birthdays, retirement dinners, or small office gatherings, with custom menus available on request.",
    ],
    highlights: [
      "About 14 minutes from downtown Trenton",
      "Convenient lunch option near the NJ State House",
      "Tandoor specialties and traditional curries",
      "Private event space for office and family gatherings",
    ],
  },
]

export function getCityPage(slug: string): CityPageData | undefined {
  return cityPages.find((page) => page.slug === slug)
}

export function cityPagePath(slug: string): string {
  return `/indian-restaurant-${slug}`
}
