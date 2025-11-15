"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const fullMenuBenselam = [
  {
    category: "Soup & Shorba",
    items: [
      { name: "Manchow - Veg/Chicken", description: "Indo-Chinese classic. Savory broth, crisp noodles, bold flavors.", price: "$5.99/ $6.49" },
      { name: "Chicken Shorba", description: "Warming, spiced chicken broth. A comforting classic.", price: "$6.99" },
      { name: "Tomato Rasam", description: "Tangy South Indian tomato broth. Spiced, light, and comforting.", price: "$5.99" },
      { name: "Lemon Coriander", description: "Zesty broth with fresh lemon and aromatic coriander.", price: "$5.99" },
    ]
  },
  {
    category: "Bites",
    items: [
      { name: "Green Salad", description: "Our classic Indian green salad, featuring a medley of farm-fresh vegetables.", price: "$5.99" },
      { name: "Papad - Roasted / Fried", description: "Crisp lentil wafers. Your choice: roasted or fried.", price: "$1.99" },
      { name: "Masala Papad", description: "Crisp papad topped with spicy onion-tomato mix and chaat masala.", price: "$3.99" },
      { name: "Masala Peanut", description: "Roasted peanuts tossed with zesty onion, tomato, and spices.", price: "$6.99" },
      { name: "Masala Kaju", description: "Golden cashews coated in our signature spice blend. Addictive crunch.", price: "$7.99" }
    ]
  },
  {
    category: "Appetizers - Veg",
items: [
  { 
    name: "Thecha Paneer Roll", 
    description: "Golden-fried paneer strips with a powerful, rustic Thecha spice blend.", 
    price: "$12.99" 
  },
  { 
    name: "Chilly Paneer", 
    description: "Wok-tossed paneer, peppers, onions in spicy Indo-Chinese sauce.", 
    price: "$12.99" 
  },
  { 
    name: "Chilly Rolls", 
    description: "Spring rolls tossed in manchurian sauce.", 
    price: "$12.99" 
  },
  { 
    name: "Veg Manchurian", 
    description: "Crispy vegetable balls tossed in tangy, spicy, Indo-Chinese sauce.", 
    price: "$12.99" 
  },
  { 
    name: "Dahi Ke Kabab", 
    description: "Crispy rolls filled with a creamy, spiced hung curd stuffing.", 
    price: "$12.99" 
  },
  { 
    name: "Schezwan Momo - Veg", 
    description: "Steamed or pan-fried vegetable dumplings tossed in a fiery schezwan sauce.", 
    price: "$11.99" 
  },
  { 
    name: "Palak Chaat", 
    description: "Crispy spinach, sweet yogurt, tangy chutneys. A textural delight.", 
    price: "$11.99" 
  },
  { 
    name: "Papdi Chaat", 
    description: "Crisp discs, potatoes, chickpeas, sweet & spicy chutneys, creamy dahi.", 
    price: "$9.99" 
  },
  { 
    name: "Makkai Bhel", 
    description: "Sweet corn and desi 'Kurkure', tossed with tangy chutneys.", 
    price: "$9.99" 
  },
  { 
    name: "Pani Puri - Serving Lamhaaa way", 
    description: "Crispy puris, spiced potato, tangy flavored waters. Our special touch.", 
    price: "$8.99" 
  },
  { 
    name: "Samosa Trio - Jalapenos Cheese, Onion, Aloo", 
    description: "Jalapeños Cheese, Onion, Aloo: Three distinct samosas—cheesy jalapeño, sweet onion, and classic spiced potato.", 
    price: "$5.99" 
  },
  { 
    name: "Pakora Platter", 
    description: "Mumbai Style Onion and Potato Bhajji. Crispy, flavorful.", 
    price: "$9.99" 
  }
]

  },
  {
    category: "Appetizers - Non-Veg",
items: [
  { 
    name: "Goat Bhuna", 
    description: "Tender goat, slow-cooked in thick, aromatic, rich masala.", 
    price: "$16.99" 
  },
  { 
    name: "Amritsari Macchi", 
    description: "Crispy fried fish, Amritsari spices, carom seeds.", 
    price: "$16.99" 
  },
  { 
    name: "Prawns Koliwada", 
    description: "Succulent, spicy fried prawns. A coastal favorite.", 
    price: "$14.99" 
  },
  { 
    name: "Chicken 65", 
    description: "Fiery South Indian fried chicken, curry leaves, chili kick.", 
    price: "$13.99" 
  },
  { 
    name: "Chilli Chicken", 
    description: "Wok-tossed chicken, peppers, onions in bold Indo-Chinese sauce.", 
    price: "$13.99" 
  },
  { 
    name: "Pepper Chicken", 
    description: "Juicy chicken cooked with fresh ground black pepper, curry leaves, and traditional Indian spices.", 
    price: "$13.99" 
  },
  { 
    name: "Chicken Lollipop", 
    description: "Crispy, juicy chicken drumettes - frenched and fried to perfection. Served with Chef's special Schezwan sauce.", 
    price: "$13.99" 
  },
  { 
    name: "Schezwan Momos - Chicken", 
    description: "Steamed or pan-fried chicken dumplings tossed in a fiery schezwan sauce.", 
    price: "$12.99" 
  },
  { 
    name: "Egg Katori Chaat", 
    description: "Savory chaat topped with chutneys and spices served in crunchy egg katori.", 
    price: "$12.99" 
  }
]

  },
{
  category: "Tandoor Se - Veg",
  items: [
    { 
      name: "Paneer Tikka", 
      description: "Smoky, tender paneer marinated in yogurt and spices.", 
      price: "$13.99" 
    },
    { 
      name: "Malai Paneer Tikka", 
      description: "Soft paneer marinated in a creamy blend of cheese, cream and subtle spices, grilled in tandoor.", 
      price: "$13.99" 
    },
    { 
      name: "Bhutta Kabab", 
      description: "Creamy corn seekh kababs, mildly spiced, grilled to perfection.", 
      price: "$13.99" 
    },
    { 
      name: "Chaap Shakahari", 
      description: "Tandoor-roasted soya chaap marinated in a classic, spiced yogurt mixture.", 
      price: "$12.99" 
    },
    { 
      name: "Tandoori Mushroom", 
      description: "Smoky, flavorful and tender mushrooms, tandoor-kissed.", 
      price: "$11.99" 
    },
    { 
      name: "Malai Broccoli", 
      description: "Creamy broccoli florets, lightly spiced, charred in the tandoor.", 
      price: "$11.99" 
    }
  ]
},
{
  category: "Tandoor Se - Non-Veg",
  items: [
    { 
      name: "Mutton Burrah Chaap (Lamb Chops)", 
      description: "Fall-off-the-bone lamb chops, rich, smoky, tandoor-cooked.", 
      price: "$21.99" 
    },
    { 
      name: "Traditional Way - Chicken Tikka", 
      description: "Classic tandoori chicken, yogurt & spice marinated.", 
      price: "$15.99" 
    },
    { 
      name: "Malai Kabab", 
      description: "Creamy, melt-in-mouth chicken kebabs, mild spices.", 
      price: "$15.99" 
    },
    { 
      name: "Ghosh Seekh Kabab", 
      description: "Minced lamb, spiced, skewered, and tandoor-cooked. Juicy.", 
      price: "$16.99" 
    },
    { 
      name: "Tandoori Tangdi", 
      description: "Smoky, juicy chicken drumsticks from the tandoor.", 
      price: "$16.99" 
    },
    { 
      name: "Kesari Salmon Tikka", 
      description: "Saffron-infused salmon, tender, subtly spiced, tandoor-grilled.", 
      price: "$16.99" 
    },
    { 
      name: "Tandoori Pomfret", 
      description: "Whole Pomfret, expertly grilled in the tandoor, smoky aroma and flaky, flavorful finish.", 
      price: "$16.99" 
    }
  ]
}
,
{
  category: "Snacks",
  items: [
    { 
      name: "Chole Bhatura", 
      description: "Fluffy bhatura with spicy, tangy chickpea curry.", 
      price: "$13.99" 
    },
    { 
      name: "Poori Bhaji", 
      description: "Puffy pooris with comforting, spiced potato curry.", 
      price: "$12.99" 
    },
    { 
      name: "Dosa - Podi / Masala / Benne", 
      description: "Crispy dosa served in 3 different styles - classic with potato onion masala or gunpowder podi or buttery Benne style.", 
      price: "$11.99/ $12.99" 
    }
  ]
},
{
  category: "Entrees - Veg",
  items: [
    { 
      name: "Lamhaa Special Veg", 
      description: "Our chef's signature chicken creation in delicately spiced cashew gravy.", 
      price: "$16.99" 
    },
    { 
      name: "Cheese Butter Masala", 
      description: "Classic buttery tomato gravy elevated with soft, melting cheese.", 
      price: "$16.99" 
    },
    { 
      name: "Paneer Ghotala", 
      description: "Spicy, scrambled paneer cooked in a rich, buttery tomato gravy.", 
      price: "$15.99" 
    },
    { 
      name: "Veg Kolhapuri", 
      description: "Chopped vegetables simmered in a rich, spicy gravy made with Kolhapuri masala and hint of coconut.", 
      price: "$14.99" 
    },
    { 
      name: "Stuffed Dum Aloo", 
      description: "Chef's unique potatoes stuffed with paneer filling. Fresh and flavorful.", 
      price: "$14.99" 
    },
    { 
      name: "Tawa Mehfil", 
      description: "Fiery paneer and capsicum preparation in a vibrant, bold sauce.", 
      price: "$14.99" 
    },
    { 
      name: "Methi Paneer", 
      description: "Delicate, creamy fenugreek and paneer curry.", 
      price: "$14.99" 
    },
    { 
      name: "Malai Kofta", 
      description: "Soft paneer dumplings in rich, creamy cashew gravy.", 
      price: "$14.99" 
    },
    { 
      name: "Palak Paneer", 
      description: "Fresh spinach puree with soft paneer cubes.", 
      price: "$14.99" 
    },
    { 
      name: "Paneer Makhanwala", 
      description: "Creamy, rich paneer curry in a luscious tomato-butter gravy.", 
      price: "$14.99" 
    },
    { 
      name: "Paneer Tikka Masala", 
      description: "Smoky paneer tikka in a rich, creamy tomato gravy.", 
      price: "$14.99" 
    },
    { 
      name: "Mushroom Mutter", 
      description: "Tender Mushroom and green pea in tomato based, spicy gravy.", 
      price: "$13.99" 
    },
    { 
      name: "Bhagara Mirch Baingan", 
      description: "Hyderabadi special. Baby eggplant & chilies in nutty, tangy gravy.", 
      price: "$13.99" 
    },
    { 
      name: "Bhindi Masala", 
      description: "Stir-fried okra tossed with onions, tomatoes and robust Indian spices.", 
      price: "$12.99" 
    },
    { 
      name: "Daal Tadka", 
      description: "Rich yellow lentils, tempered with sizzling ghee and spices.", 
      price: "$12.99" 
    },
    { 
      name: "Daal Bhukara", 
      description: "Creamy black lentils, slow-cooked with butter and spices.", 
      price: "$12.99" 
    }
  ]
},
{
  category: "Entrees - Non-Veg",
  items: [
    { 
      name: "Lamhaa Special - Goat", 
      description: "Our chef's signature goat creation in creamy almond and saffron gravy. Regal.", 
      price: "$18.99" 
    },
    { 
      name: "Laal Maas", 
      description: "Fiery Rajasthani mutton curry. Bold, rich, unforgettable.", 
      price: "$18.99" 
    },
    { 
      name: "Manglorian Curry - Fish / Shrimp", 
      description: "Fish or shrimp in tangy, sweet mango-coconut curry with tropical twist.", 
      price: "$16.99 / $18.99" 
    },
    { 
      name: "Nilgiri Fish / Shrimp", 
      description: "Fish or shrimp simmered in a vibrant green gravy made with fresh mint, coriander and coconut.", 
      price: "$16.99 / $18.99" 
    },
    { 
      name: "Haleem", 
      description: "Slow-cooked, soulful stew. Pounded wheat, tender meat, aromatic spices.", 
      price: "$18.99" 
    },
    { 
      name: "Lamhaa Special - Chicken", 
      description: "Our chef's signature chicken creation in intensely spiced broth with hint of coconut.", 
      price: "$17.99" 
    },
    { 
      name: "Butter Chicken", 
      description: "Creamy, rich, mildly spiced chicken in tomato-butter gravy. Global favorite.", 
      price: "$15.99" 
    },
    { 
      name: "Chicken Tikka Masala", 
      description: "Tandoor chicken tikka in a robust, spiced tomato-onion gravy.", 
      price: "$15.99" 
    },
    { 
      name: "Mughlai Chicken Handi", 
      description: "Rich, creamy Mughlai chicken with cashews and saffron.", 
      price: "$15.99" 
    },
    { 
      name: "Anda Ghotala", 
      description: "Spiced scrambled eggs, Mumbai street-style. Flavorful kick.", 
      price: "$15.99" 
    }
  ]
},
{
  category: "Breads",
  items: [
    { 
      name: "Naan - Plain / Butter / Garlic / Bullet", 
      description: "Fresh tandoor-baked naan. Classic to fiery.", 
      price: "$4.49/ $4.99" 
    },
    { 
      name: "Cheese Chilli Naan", 
      description: "Cheesy, spicy naan from the tandoor. Comforting kick.", 
      price: "$5.99" 
    },
    { 
      name: "Bagel Naan", 
      description: "Bagel texture, tandoor smoky flavor. Unique.", 
      price: "$5.99" 
    },
    { 
      name: "Peshwari Naan", 
      description: "Soft tandoor-baked bread stuffed with nuts, raisins and coconut.", 
      price: "$5.99" 
    },
    { 
      name: "Onion Kulcha", 
      description: "Soft, leavened bread, savory spiced onion stuffing.", 
      price: "$5.49" 
    },
    { 
      name: "Lachha Paratha", 
      description: "Multi-layered, flaky whole wheat paratha. Perfect texture.", 
      price: "$5.49" 
    },
    { 
      name: "Aloo Paratha", 
      description: "Whole wheat flatbread, spiced potato filling.", 
      price: "$5.99" 
    },
    { 
      name: "Tandoori Roti / Phulka", 
      description: "Wholesome whole wheat flatbreads. Tandoor-baked or flame-puffed.", 
      price: "$4.49" 
    }
  ]
},
{
  category: "Rice & Noodles",
  items: [
    { 
      name: "Goat Dum Biryani", 
      description: "Succulent goat, long-grain basmati, slow-cooked in spices. Culinary masterpiece.", 
      price: "$18.99" 
    },
    { 
      name: "Chicken Dum Biryani", 
      description: "Layers of basmati and tender chicken, slow-cooked.", 
      price: "$17.99" 
    },
    { 
      name: "Veg Dum Pulao", 
      description: "Fragrant basmati, seasonal veggies, slow-cooked 'dum' style.", 
      price: "$15.99" 
    },
    { 
      name: "Rice - Plain / Jeera", 
      description: "Steamed basmati. Classic plain or fragrant cumin-spiced.", 
      price: "$4.99/ $5.99" 
    },
    { 
      name: "Curd Rice", 
      description: "Cooling, comforting rice gently mixed with Yogurt and flavorful tempering.", 
      price: "$8.99" 
    },
    { 
      name: "Fried Rice - Veg/ Egg / Chicken", 
      description: "Hot and smoky rice, stir-fried with vibrant vegetables, fried egg or crispy chicken.", 
      price: "$12.99/ $14.99" 
    },
    { 
      name: "Hakka Noodles - Veg / Chicken", 
      description: "Fiery and flavorful noodles, stir-fired with crunchy vegetables, fried egg or crispy chicken.", 
      price: "$12.99/ $14.99" 
    }
  ]
},
{
  category: "Raita",
  items: [
    { 
      name: "Mix Veg Raita", 
      description: "Fresh yogurt, diced mixed veggies, light cumin.", 
      price: "$4.99" 
    },
    { 
      name: "Sanatta Raita", 
      description: "Our unique house raita. Cool yogurt, special herb blend, subtle spice.", 
      price: "$4.99" 
    }
  ]
},
{
  category: "Beverages",
  items: [
    { name: "Tea / Coffee", description: "", price: "$2.99" }
  ]
},
{
  category: "Drinks",
  items: [
    { 
      name: "Dry Fruit Margarita", 
      description: "Rich dry fruit frozen mocktail with margarita twist.", 
      price: "$9.99" 
    },
    { 
      name: "Death by Chocolate Shake", 
      description: "Decadent, rich chocolate shake. Pure indulgence.", 
      price: "$8.99" 
    },
    { 
      name: "Jigarthanda", 
      description: "South Indian cooling drink. Milk, almond gum, sarsaparilla, ice cream.", 
      price: "$6.99" 
    },
    { 
      name: "Mango Lassi", 
      description: "Creamy, sweet mango and yogurt blend. Indian classic.", 
      price: "$4.99" 
    },
    { 
      name: "Smoked Chaas", 
      description: "Our traditional buttermilk, infused with a unique smoky aroma.", 
      price: "$4.99" 
    },
    { 
      name: "Strawberry / Watermelon Lemonade", 
      description: "Zesty lemonade with fresh strawberry or watermelon.", 
      price: "$4.99" 
    },
    { 
      name: "Frozen Mint Lemonade", 
      description: "Cool, frosty lemonade blended with fresh mint for a crisp, refreshing twist.", 
      price: "$4.99" 
    }
  ]
},
{
  category: "Dessert",
  items: [
    { 
      name: "Gadbad Ice-cream", 
      description: "Fun sundae! Multiple ice creams, fruits, nuts, sauces.", 
      price: "$10.99" 
    },
    { 
      name: "Malpua", 
      description: "Sweet, fried pancake dipped malai sauce.", 
      price: "$8.99" 
    },
    { 
      name: "Apricot ka Meetha", 
      description: "Sweet, tangy dried apricot dessert. Hyderabadi delight.", 
      price: "$8.99" 
    },
    { 
      name: "Sizzling Brownie w/Vanilla Ice-cream", 
      description: "Warm brownie on a sizzler, vanilla ice cream. Classic indulgence.", 
      price: "$9.99" 
    },
    { 
      name: "Rose Malai Cake", 
      description: "Moist cake with unmistakable taste of Rose infused malai cream.", 
      price: "$7.99" 
    },
    { 
      name: "Orange Kulfi", 
      description: "Homemade Indian ice cream, bright zesty orange flavor.", 
      price: "$6.99" 
    }
  ]
}

]

const fullMenuHamilton = [
  {
    category: "Soup & Shorba",
    items: [
      { name: "Manchow - Veg/Chicken", description: "Indo-Chinese classic. Savory broth, crisp noodles, bold flavors.", price: "$5.99/ $6.49" },
      { name: "Chicken Shorba", description: "Warming, spiced chicken broth. A comforting classic.", price: "$6.99" },
      { name: "Tomato Rasam", description: "Tangy South Indian tomato broth. Spiced, light, and comforting.", price: "$5.99" },
      { name: "Lemon Coriander", description: "Zesty broth with fresh lemon and aromatic coriander.", price: "$5.99" },
    ]
  },
  {
    category: "Bites",
    items: [
      { name: "Green Salad", description: "Our classic Indian green salad, featuring a medley of farm-fresh vegetables.", price: "$5.99" },
      { name: "Papad - Roasted / Fried", description: "Crisp lentil wafers. Your choice: roasted or fried.", price: "$1.99" },
      { name: "Masala Papad", description: "Crisp papad topped with spicy onion-tomato mix and chaat masala.", price: "$3.99" },
      { name: "Masala Peanut", description: "Roasted peanuts tossed with zesty onion, tomato, and spices.", price: "$6.99" },
      { name: "Masala Kaju", description: "Golden cashews coated in our signature spice blend. Addictive crunch.", price: "$7.99" }
    ]
  },
  {
    category: "Appetizers - Veg",
items: [
  { 
    name: "Thecha Paneer Roll", 
    description: "Golden-fried paneer strips with a powerful, rustic Thecha spice blend.", 
    price: "$12.99" 
  },
  { 
    name: "Chilly Paneer", 
    description: "Wok-tossed paneer, peppers, onions in spicy Indo-Chinese sauce.", 
    price: "$12.99" 
  },
  { 
    name: "Chilly Rolls", 
    description: "Spring rolls tossed in manchurian sauce.", 
    price: "$12.99" 
  },
  { 
    name: "Veg Manchurian", 
    description: "Crispy vegetable balls tossed in tangy, spicy, Indo-Chinese sauce.", 
    price: "$12.99" 
  },
  { 
    name: "Dahi Ke Kabab", 
    description: "Crispy rolls filled with a creamy, spiced hung curd stuffing.", 
    price: "$12.99" 
  },
  { 
    name: "Schezwan Momo - Veg", 
    description: "Steamed or pan-fried vegetable dumplings tossed in a fiery schezwan sauce.", 
    price: "$11.99" 
  },
  { 
    name: "Palak Chaat", 
    description: "Crispy spinach, sweet yogurt, tangy chutneys. A textural delight.", 
    price: "$11.99" 
  },
  { 
    name: "Papdi Chaat", 
    description: "Crisp discs, potatoes, chickpeas, sweet & spicy chutneys, creamy dahi.", 
    price: "$9.99" 
  },
  { 
    name: "Makkai Bhel", 
    description: "Sweet corn and desi 'Kurkure', tossed with tangy chutneys.", 
    price: "$9.99" 
  },
  { 
    name: "Pani Puri - Serving Lamhaaa way", 
    description: "Crispy puris, spiced potato, tangy flavored waters. Our special touch.", 
    price: "$8.99" 
  },
  { 
    name: "Samosa Trio - Jalapenos Cheese, Onion, Aloo", 
    description: "Jalapeños Cheese, Onion, Aloo: Three distinct samosas—cheesy jalapeño, sweet onion, and classic spiced potato.", 
    price: "$5.99" 
  },
  { 
    name: "Pakora Platter", 
    description: "Mumbai Style Onion and Potato Bhajji. Crispy, flavorful.", 
    price: "$9.99" 
  }
]

  },
  {
    category: "Appetizers - Non-Veg",
items: [
  { 
    name: "Goat Bhuna", 
    description: "Tender goat, slow-cooked in thick, aromatic, rich masala.", 
    price: "$16.99" 
  },
  { 
    name: "Amritsari Macchi", 
    description: "Crispy fried fish, Amritsari spices, carom seeds.", 
    price: "$16.99" 
  },
  { 
    name: "Prawns Koliwada", 
    description: "Succulent, spicy fried prawns. A coastal favorite.", 
    price: "$14.99" 
  },
  { 
    name: "Chicken 65", 
    description: "Fiery South Indian fried chicken, curry leaves, chili kick.", 
    price: "$13.99" 
  },
  { 
    name: "Chilli Chicken", 
    description: "Wok-tossed chicken, peppers, onions in bold Indo-Chinese sauce.", 
    price: "$13.99" 
  },
  { 
    name: "Pepper Chicken", 
    description: "Juicy chicken cooked with fresh ground black pepper, curry leaves, and traditional Indian spices.", 
    price: "$13.99" 
  },
  { 
    name: "Chicken Lollipop", 
    description: "Crispy, juicy chicken drumettes - frenched and fried to perfection. Served with Chef's special Schezwan sauce.", 
    price: "$13.99" 
  },
  { 
    name: "Schezwan Momos - Chicken", 
    description: "Steamed or pan-fried chicken dumplings tossed in a fiery schezwan sauce.", 
    price: "$12.99" 
  },
  { 
    name: "Egg Katori Chaat", 
    description: "Savory chaat topped with chutneys and spices served in crunchy egg katori.", 
    price: "$12.99" 
  }
]

  },
{
  category: "Tandoor Se - Veg",
  items: [
    { 
      name: "Paneer Tikka", 
      description: "Smoky, tender paneer marinated in yogurt and spices.", 
      price: "$13.99" 
    },
    { 
      name: "Malai Paneer Tikka", 
      description: "Soft paneer marinated in a creamy blend of cheese, cream and subtle spices, grilled in tandoor.", 
      price: "$13.99" 
    },
    { 
      name: "Bhutta Kabab", 
      description: "Creamy corn seekh kababs, mildly spiced, grilled to perfection.", 
      price: "$13.99" 
    },
    { 
      name: "Chaap Shakahari", 
      description: "Tandoor-roasted soya chaap marinated in a classic, spiced yogurt mixture.", 
      price: "$12.99" 
    },
    { 
      name: "Tandoori Mushroom", 
      description: "Smoky, flavorful and tender mushrooms, tandoor-kissed.", 
      price: "$11.99" 
    },
    { 
      name: "Malai Broccoli", 
      description: "Creamy broccoli florets, lightly spiced, charred in the tandoor.", 
      price: "$11.99" 
    }
  ]
},
{
  category: "Tandoor Se - Non-Veg",
  items: [
    { 
      name: "Mutton Burrah Chaap (Lamb Chops)", 
      description: "Fall-off-the-bone lamb chops, rich, smoky, tandoor-cooked.", 
      price: "$21.99" 
    },
    { 
      name: "Traditional Way - Chicken Tikka", 
      description: "Classic tandoori chicken, yogurt & spice marinated.", 
      price: "$15.99" 
    },
    { 
      name: "Malai Kabab", 
      description: "Creamy, melt-in-mouth chicken kebabs, mild spices.", 
      price: "$15.99" 
    },
    { 
      name: "Ghosh Seekh Kabab", 
      description: "Minced lamb, spiced, skewered, and tandoor-cooked. Juicy.", 
      price: "$16.99" 
    },
    { 
      name: "Tandoori Tangdi", 
      description: "Smoky, juicy chicken drumsticks from the tandoor.", 
      price: "$16.99" 
    },
    { 
      name: "Kesari Salmon Tikka", 
      description: "Saffron-infused salmon, tender, subtly spiced, tandoor-grilled.", 
      price: "$16.99" 
    },
    { 
      name: "Tandoori Pomfret", 
      description: "Whole Pomfret, expertly grilled in the tandoor, smoky aroma and flaky, flavorful finish.", 
      price: "$16.99" 
    }
  ]
}
,
{
  category: "Snacks",
  items: [
    { 
      name: "Chole Bhatura", 
      description: "Fluffy bhatura with spicy, tangy chickpea curry.", 
      price: "$13.99" 
    },
    { 
      name: "Poori Bhaji", 
      description: "Puffy pooris with comforting, spiced potato curry.", 
      price: "$12.99" 
    },
    { 
      name: "Dosa - Podi / Masala / Benne", 
      description: "Crispy dosa served in 3 different styles - classic with potato onion masala or gunpowder podi or buttery Benne style.", 
      price: "$11.99/ $12.99" 
    }
  ]
},
{
  category: "Entrees - Veg",
  items: [
    { 
      name: "Lamhaa Special Veg", 
      description: "Our chef's signature chicken creation in delicately spiced cashew gravy.", 
      price: "$16.99" 
    },
    { 
      name: "Cheese Butter Masala", 
      description: "Classic buttery tomato gravy elevated with soft, melting cheese.", 
      price: "$16.99" 
    },
    { 
      name: "Paneer Ghotala", 
      description: "Spicy, scrambled paneer cooked in a rich, buttery tomato gravy.", 
      price: "$15.99" 
    },
    { 
      name: "Veg Kolhapuri", 
      description: "Chopped vegetables simmered in a rich, spicy gravy made with Kolhapuri masala and hint of coconut.", 
      price: "$14.99" 
    },
    { 
      name: "Stuffed Dum Aloo", 
      description: "Chef's unique potatoes stuffed with paneer filling. Fresh and flavorful.", 
      price: "$14.99" 
    },
    { 
      name: "Tawa Mehfil", 
      description: "Fiery paneer and capsicum preparation in a vibrant, bold sauce.", 
      price: "$14.99" 
    },
    { 
      name: "Methi Paneer", 
      description: "Delicate, creamy fenugreek and paneer curry.", 
      price: "$14.99" 
    },
    { 
      name: "Malai Kofta", 
      description: "Soft paneer dumplings in rich, creamy cashew gravy.", 
      price: "$14.99" 
    },
    { 
      name: "Palak Paneer", 
      description: "Fresh spinach puree with soft paneer cubes.", 
      price: "$14.99" 
    },
    { 
      name: "Paneer Makhanwala", 
      description: "Creamy, rich paneer curry in a luscious tomato-butter gravy.", 
      price: "$14.99" 
    },
    { 
      name: "Paneer Tikka Masala", 
      description: "Smoky paneer tikka in a rich, creamy tomato gravy.", 
      price: "$14.99" 
    },
    { 
      name: "Mushroom Mutter", 
      description: "Tender Mushroom and green pea in tomato based, spicy gravy.", 
      price: "$13.99" 
    },
    { 
      name: "Bhagara Mirch Baingan", 
      description: "Hyderabadi special. Baby eggplant & chilies in nutty, tangy gravy.", 
      price: "$13.99" 
    },
    { 
      name: "Bhindi Masala", 
      description: "Stir-fried okra tossed with onions, tomatoes and robust Indian spices.", 
      price: "$12.99" 
    },
    { 
      name: "Daal Tadka", 
      description: "Rich yellow lentils, tempered with sizzling ghee and spices.", 
      price: "$12.99" 
    },
    { 
      name: "Daal Bhukara", 
      description: "Creamy black lentils, slow-cooked with butter and spices.", 
      price: "$12.99" 
    }
  ]
},
{
  category: "Entrees - Non-Veg",
  items: [
    { 
      name: "Lamhaa Special - Goat", 
      description: "Our chef's signature goat creation in creamy almond and saffron gravy. Regal.", 
      price: "$18.99" 
    },
    { 
      name: "Laal Maas", 
      description: "Fiery Rajasthani mutton curry. Bold, rich, unforgettable.", 
      price: "$18.99" 
    },
    { 
      name: "Manglorian Curry - Fish / Shrimp", 
      description: "Fish or shrimp in tangy, sweet mango-coconut curry with tropical twist.", 
      price: "$16.99 / $18.99" 
    },
    { 
      name: "Nilgiri Fish / Shrimp", 
      description: "Fish or shrimp simmered in a vibrant green gravy made with fresh mint, coriander and coconut.", 
      price: "$16.99 / $18.99" 
    },
    { 
      name: "Haleem", 
      description: "Slow-cooked, soulful stew. Pounded wheat, tender meat, aromatic spices.", 
      price: "$18.99" 
    },
    { 
      name: "Lamhaa Special - Chicken", 
      description: "Our chef's signature chicken creation in intensely spiced broth with hint of coconut.", 
      price: "$17.99" 
    },
    { 
      name: "Butter Chicken", 
      description: "Creamy, rich, mildly spiced chicken in tomato-butter gravy. Global favorite.", 
      price: "$15.99" 
    },
    { 
      name: "Chicken Tikka Masala", 
      description: "Tandoor chicken tikka in a robust, spiced tomato-onion gravy.", 
      price: "$15.99" 
    },
    { 
      name: "Mughlai Chicken Handi", 
      description: "Rich, creamy Mughlai chicken with cashews and saffron.", 
      price: "$15.99" 
    },
    { 
      name: "Anda Ghotala", 
      description: "Spiced scrambled eggs, Mumbai street-style. Flavorful kick.", 
      price: "$15.99" 
    }
  ]
},
{
  category: "Breads",
  items: [
    { 
      name: "Naan - Plain / Butter / Garlic / Bullet", 
      description: "Fresh tandoor-baked naan. Classic to fiery.", 
      price: "$4.49/ $4.99" 
    },
    { 
      name: "Cheese Chilli Naan", 
      description: "Cheesy, spicy naan from the tandoor. Comforting kick.", 
      price: "$5.99" 
    },
    { 
      name: "Bagel Naan", 
      description: "Bagel texture, tandoor smoky flavor. Unique.", 
      price: "$5.99" 
    },
    { 
      name: "Peshwari Naan", 
      description: "Soft tandoor-baked bread stuffed with nuts, raisins and coconut.", 
      price: "$5.99" 
    },
    { 
      name: "Onion Kulcha", 
      description: "Soft, leavened bread, savory spiced onion stuffing.", 
      price: "$5.49" 
    },
    { 
      name: "Lachha Paratha", 
      description: "Multi-layered, flaky whole wheat paratha. Perfect texture.", 
      price: "$5.49" 
    },
    { 
      name: "Aloo Paratha", 
      description: "Whole wheat flatbread, spiced potato filling.", 
      price: "$5.99" 
    },
    { 
      name: "Tandoori Roti / Phulka", 
      description: "Wholesome whole wheat flatbreads. Tandoor-baked or flame-puffed.", 
      price: "$4.49" 
    }
  ]
},
{
  category: "Rice & Noodles",
  items: [
    { 
      name: "Goat Dum Biryani", 
      description: "Succulent goat, long-grain basmati, slow-cooked in spices. Culinary masterpiece.", 
      price: "$18.99" 
    },
    { 
      name: "Chicken Dum Biryani", 
      description: "Layers of basmati and tender chicken, slow-cooked.", 
      price: "$17.99" 
    },
    { 
      name: "Veg Dum Pulao", 
      description: "Fragrant basmati, seasonal veggies, slow-cooked 'dum' style.", 
      price: "$15.99" 
    },
    { 
      name: "Rice - Plain / Jeera", 
      description: "Steamed basmati. Classic plain or fragrant cumin-spiced.", 
      price: "$4.99/ $5.99" 
    },
    { 
      name: "Curd Rice", 
      description: "Cooling, comforting rice gently mixed with Yogurt and flavorful tempering.", 
      price: "$8.99" 
    },
    { 
      name: "Fried Rice - Veg/ Egg / Chicken", 
      description: "Hot and smoky rice, stir-fried with vibrant vegetables, fried egg or crispy chicken.", 
      price: "$12.99/ $14.99" 
    },
    { 
      name: "Hakka Noodles - Veg / Chicken", 
      description: "Fiery and flavorful noodles, stir-fired with crunchy vegetables, fried egg or crispy chicken.", 
      price: "$12.99/ $14.99" 
    }
  ]
},
{
  category: "Raita",
  items: [
    { 
      name: "Mix Veg Raita", 
      description: "Fresh yogurt, diced mixed veggies, light cumin.", 
      price: "$4.99" 
    },
    { 
      name: "Sanatta Raita", 
      description: "Our unique house raita. Cool yogurt, special herb blend, subtle spice.", 
      price: "$4.99" 
    }
  ]
},
{
  category: "Beverages",
  items: [
    { name: "Tea / Coffee", description: "", price: "$2.99" }
  ]
},
{
  category: "Drinks",
  items: [
    { 
      name: "Dry Fruit Margarita", 
      description: "Rich dry fruit frozen mocktail with margarita twist.", 
      price: "$9.99" 
    },
    { 
      name: "Death by Chocolate Shake", 
      description: "Decadent, rich chocolate shake. Pure indulgence.", 
      price: "$8.99" 
    },
    { 
      name: "Jigarthanda", 
      description: "South Indian cooling drink. Milk, almond gum, sarsaparilla, ice cream.", 
      price: "$6.99" 
    },
    { 
      name: "Mango Lassi", 
      description: "Creamy, sweet mango and yogurt blend. Indian classic.", 
      price: "$4.99" 
    },
    { 
      name: "Smoked Chaas", 
      description: "Our traditional buttermilk, infused with a unique smoky aroma.", 
      price: "$4.99" 
    },
    { 
      name: "Strawberry / Watermelon Lemonade", 
      description: "Zesty lemonade with fresh strawberry or watermelon.", 
      price: "$4.99" 
    },
    { 
      name: "Frozen Mint Lemonade", 
      description: "Cool, frosty lemonade blended with fresh mint for a crisp, refreshing twist.", 
      price: "$4.99" 
    }
  ]
},
{
  category: "Dessert",
  items: [
    { 
      name: "Gadbad Ice-cream", 
      description: "Fun sundae! Multiple ice creams, fruits, nuts, sauces.", 
      price: "$10.99" 
    },
    { 
      name: "Malpua", 
      description: "Sweet, fried pancake dipped malai sauce.", 
      price: "$8.99" 
    },
    { 
      name: "Apricot ka Meetha", 
      description: "Sweet, tangy dried apricot dessert. Hyderabadi delight.", 
      price: "$8.99" 
    },
    { 
      name: "Sizzling Brownie w/Vanilla Ice-cream", 
      description: "Warm brownie on a sizzler, vanilla ice cream. Classic indulgence.", 
      price: "$9.99" 
    },
    { 
      name: "Rose Malai Cake", 
      description: "Moist cake with unmistakable taste of Rose infused malai cream.", 
      price: "$7.99" 
    },
    { 
      name: "Orange Kulfi", 
      description: "Homemade Indian ice cream, bright zesty orange flavor.", 
      price: "$6.99" 
    }
  ]
}

]

interface MenuModalProps {
  isOpen: boolean
  onClose: () => void
}

const MenuModal = ({ isOpen, onClose }: MenuModalProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  const getMenuForLocation = (location: string) => {
    return location === "Benselam" ? fullMenuBenselam : fullMenuHamilton
  }

  const handleClose = () => {
    onClose()
    setSelectedLocation(null)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div
        className="rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        style={{ backgroundColor: '#FFFDF5', color: '#4F4D46', border: '1px solid #B8943A' }}
      >
        {/* Modal Header */}
        <div
          className="sticky top-0 z-30 p-6 flex justify-between items-center"
          style={{ backgroundColor: '#FFFDF5', borderBottom: '1px solid #B8943A' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#4F4D46' }}>
            Full Menu
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="hover:bg-[#B8943A]/15"
            style={{ color: '#4F4D46' }}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Location Selection */}
        {!selectedLocation && (
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: '#4F4D46' }}>
              Select a Location
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={() => setSelectedLocation("Benselam")}
                className="h-20 text-lg font-semibold shadow-md transition bg-[#B8943A] hover:bg-[#B8943A]/90 text-[#18181b]"
              >
                Benselam, Pennsylvania
              </Button>
              <Button
                onClick={() => setSelectedLocation("Hamilton")}
                className="h-20 text-lg font-semibold shadow-md transition bg-[#B8943A] hover:bg-[#B8943A]/90 text-[#18181b]"
              >
                Hamilton, New Jersey
              </Button>
            </div>
          </div>
        )}

        {/* Full Menu Content */}
        {selectedLocation && (
          <div className="p-6 pt-0">
            {/* Location Header */}
            <div
              className="sticky top-[72px] z-20 flex justify-between items-center px-0 py-4"
              style={{ backgroundColor: '#FFFDF5', borderBottom: '1px solid #B8943A', minHeight: '64px' }}
            >
              <h3 className="text-xl font-semibold" style={{ color: '#4F4D46' }}>
                {selectedLocation} Menu
              </h3>
              <Button
                onClick={() => setSelectedLocation(null)}
                className="text-sm bg-[#B8943A] text-[#18181b] hover:bg-[#B8943A]/90"
              >
                Change Location
              </Button>
            </div>
            {/* Horizontal Carousel for Full Menu Modal */}
            <div className="relative mx-auto w-full max-w-3xl px-2 sm:px-4 lg:px-0">
              <Carousel className="w-full">
                <CarouselContent>
                  {getMenuForLocation(selectedLocation).map((category, categoryIndex) => (
                    <CarouselItem key={categoryIndex} className="flex justify-center">
                      <div className="w-full max-w-2xl relative">
                        {/* Category Header with arrows inline */}
                        <div
                          className="mt-6 md:mt-8 border-y py-2 flex items-center justify-center gap-3"
                          style={{ borderColor: '#B8943A' }}
                        >
                          <CarouselPrevious
                            variant="default"
                            className="static left-auto top-auto translate-y-0 bg-[#B8943A] text-[#18181b] hover:bg-[#B8943A]/90 border-transparent disabled:bg-[#B8943A]/60 disabled:text-[#18181b]/60 h-9 w-9"
                          />
                          <h4
                            className="text-center text-xl md:text-2xl font-semibold whitespace-nowrap"
                            style={{ color: '#4F4D46' }}
                          >
                            {category.category}
                          </h4>
                          <CarouselNext
                            variant="default"
                            className="static right-auto top-auto translate-y-0 bg-[#B8943A] text-[#18181b] hover:bg-[#B8943A]/90 border-transparent disabled:bg-[#B8943A]/60 disabled:text-[#18181b]/60 h-9 w-9"
                          />
                        </div>
                        <div className="grid gap-3 pt-4 md:grid-cols-2">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex flex-col justify-between border border-[#E6D8B8] rounded-xl p-3 bg-white/30 min-h-[100px]">
                              <div>
                                <div className="flex items-start justify-between gap-2">
                                  <h5 className="text-sm md:text-base font-semibold" style={{ color: '#4F4D46' }}>{item.name}</h5>
                                  <span className="text-xs md:text-sm font-semibold whitespace-nowrap" style={{ color: '#B8943A' }}>{item.price}</span>
                                </div>
                                <p className="text-xs md:text-sm mt-2 leading-snug" style={{ color: '#4F4D46', opacity: 0.85 }}>{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MenuModal 
