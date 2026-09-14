"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { describe } from "node:test";
import { Description } from "@radix-ui/react-dialog";

const fullMenuBenselam =
[
  {
    "category": "Soups",
    "items": [
      { "name": "Veg Manchow Soup", "description": "Indo-Chinese classic. Savory broth, crisp noodles, bold flavors.", "price": "$5.99" },
      { "name": "Chicken Manchow Soup", "description": "Indo-Chinese classic. Savory broth, crisp noodles, bold flavors.", "price": "$6.99" },
      { "name": "Lemon Coriander Soup", "description": "Zesty broth with fresh lemon and aromatic coriander.", "price": "$5.99" },
      { "name": "Cream Of Tomato Soup", "description": "Cream of tomato is a flavorful, tangy South Indian tomato broth, spiced with aromatic herbs and seasonings.", "price": "$5.99" },
      { "name": "Sweet Corn Soup", "description": "Creamy sweet corn soup with tender corn kernels. Light, comforting, and delicious.", "price": "$5.99" },
      { "name": "Hot And Sour Soup", "description": "Spicy and tangy Indo-Chinese soup with crisp vegetables and a peppery kick.", "price": "$5.99" }
    ]
  },
  {
    "category": "Bites",
    "items": [
      { "name": "Green Salad", "description": "Our classic Indian green salad, featuring a medley of farm-fresh vegetables.", "price": "$5.99" },
      { "name": "Papad- Rosted", "description": "Crisp lentil wafers, roasted.", "price": "$4.49" },
      { "name": "Papad Fried", "description": "Crisp lentil wafers, fried.", "price": "$4.49" },
      { "name": "Masala Papad", "description": "Crisp papad topped with spicy onion-tomato mix and chaat masala.", "price": "$4.99" },
      { "name": "Masala Peanuts", "description": "Roasted peanuts tossed with onion, tomato, and spices.", "price": "$6.99" },
      { "name": "Masala kaju", "description": "Golden cashews coated in our signature spice blend. Addictive crunch.", "price": "$7.99" }
    ]
  },
  {
    "category": "Snacks",
    "items": [
      { "name": "Plain Dosa", "description": "Crispy, golden South Indian rice crepe. Simple and satisfying.", "price": "$9.99" },
      { "name": "Masala Dosa", "description": "Crispy dosa filled with spiced potato masala. A South Indian classic.", "price": "$12.99" },
      { "name": "Cheese Dosa", "description": "Crispy dosa loaded with melted cheese. An indulgent twist on a classic.", "price": "$12.99" },
      { "name": "Chole Bhatura", "description": "Fluffy bhatura with spicy, tangy chickpea curry.", "price": "$13.99" },
      { "name": "Poori Bhaji", "description": "Puffy pooris with comforting, spiced potato curry.", "price": "$13.99" },
      { "name": "Pav Bhaji", "description": "Spiced mixed vegetable mash served with buttered pav rolls. A Mumbai street food favorite.", "price": "$11.99" },
      { "name": "Extra Bhature", "description": "An extra fluffy fried bread to go with your chole.", "price": "$2.99" },
    ]
  },
  {
    "category": "Veg Appetizers",
    "items": [
      { "name": "Aloo Tikki", "description": "Crispy, spiced potato patties served with tangy chutneys.", "price": "$11.99" },
      { "name": "Aloo Tikki Chaat", "description": "Crispy, spiced potato patties topped with tangy chutneys, creamy yogurt, and savory spices.", "price": "$12.99" },
      { "name": "Papdi Chaat", "description": "Crisp discs, potatoes, chickpeas, sweet & spicy chutneys, creamy dahi.", "price": "$9.99" },
      { "name": "Palak Chaat", "description": "Crispy spinach, sweet yogurt, tangy chutneys. A textural delight.", "price": "$11.99" },
      { "name": "Veg Schezwan Momo", "description": "Pan-fried vegetable dumplings tossed in a fiery schezwan sauce.", "price": "$12.99" },
      { "name": "Pani Puri", "description": "Crispy puris, spiced potato, tangy flavored waters. Our special touch.", "price": "$8.99" },
      { "name": "Dahi Poori", "description": "Crispy puris filled with potato and chickpeas, topped with cooling yogurt and tangy chutneys.", "price": "$9.99" },
      { "name": "Sev Poori", "description": "Crispy puris topped with potatoes, tangy chutneys, yogurt, and crunchy sev.", "price": "$9.99" },
      { "name": "Pakora Platter", "description": "Mumbai Style Onion and Potato Bhajji. Crispy, flavorful.", "price": "$9.99" },
      { "name": "Paneer Chili", "description": "Wok-tossed paneer, peppers, onions in spicy Indo-Chinese sauce.", "price": "$12.99" },
      { "name": "Samosa", "description": "Crispy, golden pastry filled with spiced potato goodness.", "price": "$5.99" },
      { "name": "Thecha Panner Roll", "description": "Golden-fried paneer strips with a powerful, rustic Thecha spice blend.", "price": "$12.99" },
      { "name": "Veg Manchurian", "description": "Crispy vegetable balls tossed in tangy, spicy, Indo-Chinese sauce.", "price": "$12.99" },
      { "name": "Veg Manchurian Gravy", "description": "Crispy vegetable balls tossed in a rich, tangy Indo-Chinese gravy.", "price": "$13.99" },
      { "name": "Gobi Manchurian Dry", "description": "Crispy cauliflower florets tossed in a tangy, spicy Indo-Chinese sauce.", "price": "$12.99" },
      // { "name": "Makkai Bhel", "description": "Sweet corn and desi 'Kurkure', tossed with tangy chutneys.", "price": "Sold Out" },
      { "name": "Dahi Ke Kabab", "description": "Crispy rolls filled with a creamy, spiced hung curd stuffing.", "price": "$12.99" },
      { "name": "Chili Rolls", "description": "Spring rolls tossed in manchurian sauce.", "price": "$12.99" },
      { "name": "Samosa Chat", "description": "Samosa, chickpeas, sweet & spicy chutneys, creamy dahi.", "price": "$11.99" }
    ]
  },
  {
    "category": "Non Veg Appetizers",
    "items": [
      { "name": "Chicken 65", "description": "Fiery South Indian fried chicken, curry leaves, chili kick.", "price": "$14.99" },
      { "name": "Pepper Chicken", "description": "Juicy chicken cooked with fresh ground black pepper, curry leaves, and traditional Indian spices.", "price": "$14.99" },
      { "name": "Amritsari Macchi", "description": "Crispy fried fish, Amritsari spices, carom seeds.", "price": "$17.99" },
      // { "name": "Prawns Koliwada", "description": "Succulent, spicy fried prawns. A coastal favorite.", "price": "Sold Out" },
      { "name": "Goat Bhuna", "description": "Tender goat, slow-cooked in thick, aromatic, rich masala.", "price": "$18.99" },
      // { "name": "Egg Katori Chaat", "description": "Savory chaat topped with chutneys and spices served in crunchy egg katori.", "price": "Sold Out" },
      { "name": "Chicken Lollipop", "description": "Crispy, juicy chicken drumettes - frenched and fried to perfection. Served with Chef's special Schezwan sauce.", "price": "$14.99" },
      { "name": "Schezwan Chicken Momos", "description": "Pan-fried chicken dumplings tossed in a fiery schezwan sauce.", "price": "$13.99" },
      { "name": "Jeera Chicken", "description": "Tender chicken cooked with roasted cumin and aromatic spices in a rich, flavorful masala.", "price": "$18.99" },
      { "name": "Chilli Chicken", "description": "Wok-tossed chicken, peppers, onions in bold Indo-Chinese sauce.", "price": "$14.99" }
    ]
  },
  {
    "category": "Tandoor Se - Veg",
    "items": [
      { "name": "Paneer Tikka", "description": "Smoky, tender paneer marinated in yogurt and spices.", "price": "$13.99" },
      // { "name": "Tandoori Mushroom", "description": "", "price": "Sold Out" },
      { "name": "Malai Paneer Tikka", "description": "Soft paneer marinated in a creamy blend of cheese, cream and subtle spices, grilled in tandoor.", "price": "$13.99" },
      // { "name": "Bhutta Kabab", "description": "", "price": "Sold Out" },
      { "name": "Chaap Shakahari", "description": "Tandoor-roasted soya chaap marinated in a classic, spiced yogurt mixture.", "price": "$12.99" }
    ]
  },
  {
    "category": "Tandoor Se - Non Veg",
    "items": [
      { "name": "Chicken Tikka", "description": "Classic tandoori chicken, yogurt & spice marinated.", "price": "$15.99" },
      { "name": "Tandoori Tangdi", "description": "Smoky, juicy chicken drumsticks from the tandoor.", "price": "$16.99" },
      { "name": "Chicken Malai Tikka", "description": "Creamy, melt-in-mouth chicken kebabs, mild spices.", "price": "$15.99" },
      // { "name": "Tandoori Pompret", "description": "Whole Pomfret, expertly grilled in the tandoor, smoky aroma and flaky, flavorful finish.", "price": "Sold Out" },
      { "name": "Kesari Fish Tikka", "description": "Saffron-infused salmon, tender, subtly spiced, tandoor-grilled.", "price": "$16.99" },
      // { "name": "Lamb Chops", "description": "Fall-off-the-bone lamb chops, rich, smoky, tandoor-cooked.", "price": "Sold Out" },
      // { "name": "Ghosh Sheekh Kabab", "description": "Minced lamb, spiced, skewered, and tandoor-cooked. Juicy.", "price": "Sold Out" }
    ]
  },
  {
    "category": "Veg Entrees",
    "items": [
  { "name": "Daal Tadka", "description": "Rich yellow lentils, tempered with sizzling ghee and spices.", "price": "$13.99" },
  { "name": "Palak Paneer", "description": "Fresh spinach puree with soft paneer cubes.", "price": "$16.99" },
  { "name": "Methi Paneer", "description": "Delicate, creamy fenugreek and paneer curry.", "price": "$16.99" },
  { "name": "Mushroom Mutter", "description": "Tender Mushroom and green pea in tomato based, spicy gravy.", "price": "$15.99" },
  { "name": "Daal Bhukara", "description": "Creamy black lentils, slow-cooked with butter and spices.", "price": "$14.99" },
  { "name": "Paneer Tikka Masala", "description": "Smoky paneer tikka in a rich, creamy tomato gravy.", "price": "$17.99" },
  { "name": "Paneer Makhanwala", "description": "Creamy, rich paneer curry in a luscious tomato-butter gravy.", "price": "$16.99" },
  { "name": "Malai Kofta", "description": "Soft paneer dumplings in rich, creamy cashew gravy.", "price": "$15.99" },
  // { "name": "Bhagara Mirch Baingan", "description": "Hyderabadi special. Baby eggplant & chilies in nutty, tangy gravy.", "price": "Sold Out" },
  { "name": "Stuffed Dum Aloo", "description": "Chef's unique potatoes stuffed with paneer filling. Fresh and flavorful.", "price": "$16.99" },
  { "name": "Paneer Ghotala", "description": "Spicy, scrambled paneer cooked in a rich, buttery tomato gravy.", "price": "$16.99" },
  { "name": "Tawa Mehfil", "description": "Fiery paneer and capsicum preparation in a vibrant, bold sauce.", "price": "$16.99" },
  { "name": "Bhindi Masala", "description": "Stir-fried okra tossed with onions, tomatoes and robust Indian spices.", "price": "$14.99" },
  { "name": "Cheese Butter Masala", "description": "Classic buttery tomato gravy elevated with soft, melting cheese.", "price": "$17.99" },
  // { "name": "Mirchi Baigan", "description": "", "price": "Sold Out" },
  { "name": "Lahmaa Special Veg", "description": "Our chef's signature vegetable medeley in delicately spiced cashew gravy.", "price": "$17.99" },
  { "name": "Veg Kolhapuri", "description": "Chopped vegetables simmered in a rich, spicy gravy made with Kolhapuri masala and hint of coconut.", "price": "$15.99" },
  { "name": "Aloo Gobi", "description": "Classic potato and cauliflower curry, lightly spiced and comforting.", "price": "$16.99" },
  { "name": "Lassooni Palak", "description": "Garlicky spinach curry, rich and aromatic.", "price": "$17.99" },
  { "name": "Corn Saag", "description": "Sweet corn simmered in a creamy, spiced spinach gravy.", "price": "$16.99" },
  { "name": "Paneer Lawabdar", "description": "Soft paneer in a rich, creamy tomato-cashew gravy.", "price": "$18.99" },
  { "name": "Paneer Afghani", "description": "Paneer in a mild, creamy nut-based white gravy.", "price": "$19.99" },
  { "name": "Chana Masala", "description": "Chickpeas simmered in a tangy, spiced tomato-onion gravy.", "price": "$13.99" },
  { "name": "Kaju Curry", "description": "Cashews simmered in a rich, creamy, lightly spiced gravy.", "price": "$15.99" },
  { "name": "Paneer Kadhai", "description": "Paneer and peppers tossed in a bold, freshly ground kadhai masala.", "price": "$15.99" }
]
  },
  {
    "category": "Non Veg Entrees",
    "items": [
      { "name": "Chicken Tikka Masala", "description": "Tandoor chicken tikka in a robust, spiced tomato-onion gravy.", "price": "$17.99" },
      { "name": "Butter Chicken", "description": "Creamy, rich, mildly spiced chicken in tomato-butter gravy. Global favorite.", "price": "$17.99" },
      { "name": "Lamhaa Special Goat Curry", "description": "Our chef's signature goat creation in creamy almond and saffron gravy. Regal.", "price": "$21.99" },
      { "name": "Moglai Chicken Hundi", "description": "Rich, creamy Mughlai chicken with cashews and saffron.", "price": "$17.99" },
      { "name": "Lamhaa Special Chicken", "description": "Our chef's signature chicken creation in intensely spiced broth with hint of coconut.", "price": "$18.99" },
      { "name": "Laal Maas", "description": "Fiery Rajasthani mutton curry. Bold, rich, unforgettable.", "price": "$18.99" },
      { "name": "Anda Ghotala", "description": "Spiced scrambled eggs, Mumbai street-style. Flavorful kick.", "price": "$16.99" },
      // { "name": "Manglorian Fish Curry", "description": "Fish in tangy, sweet mango-coconut curry with tropical twist.", "price": "Sold Out" },
      // { "name": "Manglorian Shrimp Curry", "description": "Shrimp in tangy, sweet mango-coconut curry with tropical twist.", "price": "Sold Out" },
      // { "name": "Haleem", "description": "Slow-cooked, soulful stew. Pounded wheat, tender meat, aromatic spices.", "price": "Sold Out" },
      // { "name": "Nilgiri Fish Curry", "description": "Fish simmered in a vibrant green gravy made with fresh mint, coriander and coconut.", "price": "Sold Out" },
      // { "name": "Nilgiri Shrimp Curry", "description": "Shrimp simmered in a vibrant green gravy made with fresh mint, coriander and coconut.", "price": "Sold Out" },
      { "name": "Anda Curry", "description": "Boiled eggs simmered in a spiced onion-tomato curry.", "price": "$17.99" },
      { "name": "Garlic Chicken", "description": "Chicken tossed in a bold, garlicky, spicy sauce.", "price": "$19.99" },
      { "name": "Palak Chicken", "description": "Chicken simmered in a creamy, spiced spinach gravy.", "price": "$19.99" },
      { "name": "Methi Chicken", "description": "Chicken cooked with fresh fenugreek leaves in a rich, aromatic gravy.", "price": "$19.99" },
      { "name": "Kadai Chicken", "description": "Chicken and peppers tossed in a bold, freshly ground kadhai masala.", "price": "$19.99" },
      { "name": "Shrimp Curry Desi", "description": "Shrimp simmered in a traditional, spiced Indian curry.", "price": "$19.99" },
      { "name": "Fish Curry Desi", "description": "Fish simmered in a traditional, spiced Indian curry.", "price": "$19.99" },
      { "name": "Chicken Curry", "description": "Chicken simmered in a classic, spiced onion-tomato curry.", "price": "$19.99" }
    ]
  },
  {
    "category": "Rice / Noodles",
    "items": [
      { "name": "Jeera Rice", "description": "Fragrant cumin-spiced steamed basmati.", "price": "$8.99" },
      { "name": "Chicken Dum Biryani", "description": "Layers of basmati and tender chicken, slow-cooked.", "price": "$18.99" },
      { "name": "Goat Dum Biryani", "description": "Succulent goat, long-grain basmati, slow-cooked in spices. Culinary masterpiece.", "price": "$19.99" },
      { "name": "Plain Rice", "description": "Steamed basmati.", "price": "$4.99" },
      { "name": "Curd Rice", "description": "Cooling, comforting rice gently mixed with Yogurt and flavorful tempering.", "price": "$9.99" },
      { "name": "Veg Dum Biryani", "description": "Fragrant basmati, seasonal veggies, slow-cooked 'dum' style.", "price": "$15.99" },
      { "name": "Veg Pulao", "description": "Fragrant basmati rice cooked with mixed vegetables and whole spices.", "price": "$14.99" },
      { "name": "Veg Fried Rice", "description": "Hot and smoky rice, stir-fried with vibrant vegetables.", "price": "$13.99" },
      { "name": "Chicken Fried Rice", "description": "Hot and smoky rice, stir-fried with vibrant vegetables and crispy chicken.", "price": "$15.99" },
      { "name": "Egg Fried Rice", "description": "Hot and smoky rice, stir-fried with vibrant vegetables and fried egg.", "price": "$15.99" },
      { "name": "Egg Chicken Fried Rice", "description": "Hot and smoky rice, stir-fried with vibrant vegetables, egg, and crispy chicken.", "price": "$16.99" },
      { "name": "Veg Hakka Noodles", "description": "Fiery and flavorful noodles, stir-fried with crunchy vegetables.", "price": "$13.99" },
      { "name": "Chicken Hakka Noodles", "description": "Fiery and flavorful noodles, stir-fried with crunchy vegetables and crispy chicken.", "price": "$15.99" },
      { "name": "Triple Schezwan Rice", "description": "A fiery combination of rice and noodles tossed in schezwan sauce with mixed vegetables.", "price": "$15.99" },
      { "name": "Triple Chicken Schezwan Rice", "description": "A fiery combination of rice and noodles tossed in schezwan sauce with chicken and vegetables.", "price": "$17.99" }
    ]
  },
  {
    "category": "Breads",
    "items": [
      { "name": "Plain Naan", "description": "Fresh tandoor-baked naan.", "price": "$4.49" },
      { "name": "Butter Naan", "description": "Fresh tandoor-baked butter naan.", "price": "$4.49" },
      { "name": "Garlic Naan", "description": "Fresh tandoor-baked garlic naan.", "price": "$4.99" },
      { "name": "Bullet Naan", "description": "Fresh tandoor-baked spicy naan.", "price": "$4.99" },
      { "name": "Chilli Garlic Naan", "description": "Fresh tandoor-baked naan with a spicy garlic kick.", "price": "$4.99" },
      { "name": "Cheese Naan", "description": "Fresh tandoor-baked naan stuffed with melted cheese.", "price": "$5.99" },
      { "name": "Cheese Chilli Naan", "description": "Cheesy, spicy naan from the tandoor. Comforting kick.", "price": "$5.99" },
      { "name": "Peshawari Naan", "description": "Soft tandoor-baked bread stuffed with nuts, raisins and coconut.", "price": "$5.99" },
      { "name": "Chur Chur Naan", "description": "Flaky, shredded naan, crisp and buttery.", "price": "$13.99" },
      // { "name": "Bagel Naan", "description": "", "price": "Sold Out" },
      { "name": "Plain Tandoori Roti", "description": "Wholesome whole wheat flatbread, tandoor-baked.", "price": "$4.49" },
      { "name": "Butter Tandoori Roti", "description": "Wholesome whole wheat flatbread, tandoor-baked and brushed with butter.", "price": "$4.99" },
      { "name": "Phulkha", "description": "Wholesome whole wheat flatbread, flame-puffed.", "price": "$2.99" },
      { "name": "Onion Kulcha", "description": "Soft, leavened bread, savory spiced onion stuffing.", "price": "$5.99" },
      { "name": "Lachaa Paratha", "description": "Multi-layered, flaky whole wheat paratha. Perfect texture.", "price": "$5.49" },
      { "name": "Aloo Paratha", "description": "Whole wheat flatbread, spiced potato filling.", "price": "$8.99" },
      { "name": "Bread Basket", "description": "Roti, Garlic Naan, Bullet Naan.", "price": "$13.99" },
      { "name": "Extra Bhature", "description": "An extra fluffy fried bread to go with your chole.", "price": "$2.99" }
    ]
  },
  {
    "category": "Raita",
    "items": [
      { "name": "Mix Veg Raita", "description": "Fresh yogurt, diced mixed veggies, light cumin.", "price": "$4.99" },
      { "name": "Sanatta Raita", "description": "Our unique house raita. Cool yogurt, special herb blend, subtle spice.", "price": "$4.99" }
    ]
  },
  {
    "category": "Desserts",
    "items": [
      { "name": "Orange Kulfi", "description": "Homemade Indian ice cream, bright zesty orange flavor.", "price": "$8.99" },
      { "name": "Gadbad Ice Cream", "description": "Fun sundae! Multiple ice creams, fruits, nuts, sauces.", "price": "$10.99" },
      { "name": "Sizzling Brownie With Vanilla Ice Cream", "description": "Warm brownie on a sizzler, vanilla ice cream. Classic indulgence.", "price": "$9.99" },
      { "name": "Malpua", "description": "Sweet, fried pancake dipped malai sauce.", "price": "$8.99" },
      { "name": "Apricot Ka Meetha", "description": "Sweet, tangy dried apricot dessert. Hyderabadi delight.", "price": "$8.99" },
      { "name": "Gulab Jamun", "description": "Soft, syrup-soaked milk dumplings. A classic Indian sweet.", "price": "$4.99" },
      { "name": "Rasmalai", "description": "Soft cheese dumplings soaked in sweet, saffron-infused milk.", "price": "$7.99" },
      // { "name": "Rose Malai Cake", "description": "Moist cake with unmistakable taste of Rose infused malai cream.", "price": "Sold Out" }
    ]
  },
  {
    "category": "Drinks",
    "items": [
      { "name": "Mango Lassi", "description": "Creamy, sweet mango and yogurt blend. Indian classic.", "price": "$4.99" },
      { "name": "Butter Milk", "description": "Our traditional buttermilk.", "price": "$4.99" },
      { "name": "Masala Chai", "description": "Traditional spiced Indian tea, brewed strong and aromatic.", "price": "$2.99" },
      // { "name": "Coffee", "description": "", "price": "Sold Out" },
      { "name": "Sprite/Coke/Fanta", "description": "Your choice of chilled soft drink.", "price": "$1.49" },
      // { "name": "Jigarthanda", "description": "South Indian cooling drink. Milk, almond gum, sarsaparilla, ice cream.", "price": "Sold Out" },
      { "name": "Kathiyawadi Lemon Soda", "description": "Lemon soda with special Kathiyawadi masala.", "price": "$4.99" },
      { "name": "Jeera Soda", "description": "Refreshing soda infused with roasted cumin.", "price": "$1.99" },
      { "name": "Limca", "description": "Chilled lemon-lime soda.", "price": "$1.99" },
      { "name": "Thums Up", "description": "Chilled classic Indian cola.", "price": "$1.99" },
      { "name": "Aam Panna", "description": "Tangy raw mango cooler, spiced and refreshing.", "price": "$5.99" },
      { "name": "Water", "description": "Bottled water.", "price": "$1.99" },
      { "name": "Club Soda", "description": "Chilled sparkling club soda.", "price": "$3.99" }
    ]
  }
];



const fullMenuHamilton = [
  {
    category: "Soup & Shorba",
    items: [
      {
        name: "Manchow - Veg/Chicken",
        description:
          "Indo-Chinese classic. Savory broth, crisp noodles, bold flavors.",
        price: "$7/ $8",
      },
      {
        name: "Chicken Shorba",
        description: "Warming, spiced chicken broth. A comforting classic.",
        price: "$8",
      },
      {
        name: "Cream of Tomato",
        description:
          "Cream of tomato is a flavorful, tangy South Indian tomato broth, spiced with aromatic herbs and seasonings.",
        price: "$7",
      },
      {
        name: "Lemon Coriander",
        description: "Zesty broth with fresh lemon and aromatic coriander.",
        price: "$7",
      },
    ],
  },
  {
    category: "Bites",
    items: [
      {
        name: "Green Salad",
        description:
          "Our classic Indian green salad, featuring a medley of farm-fresh vegetables.",
        price: "$5",
      },
      {
        name: "Papad - Roasted / Fried",
        description: "Crisp lentil wafers. Your choice: roasted or fried.",
        price: "$4",
      },
      {
        name: "Masala Papad",
        description:
          "Crisp papad topped with spicy onion-tomato mix and chaat masala.",
        price: "$5",
      },
      {
        name: "Masala Peanut",
        description: "Roasted peanuts tossed with onion, tomato, and spices.",
        price: "$7",
      },
      {
        name: "Masala Kaju",
        description:
          "Golden cashews coated in our signature spice blend. Addictive crunch.",
        price: "$9",
      },
    ],
  },
  {
    category: "Appetizers - Veg",
    items: [
      {
        name: "Thecha Paneer Roll",
        description:
          "Golden-fried paneer strips with a powerful, rustic Thecha spice blend.",
        price: "$15",
      },
      {
        name: "Chilli Paneer",
        description:
          "Wok-tossed paneer, peppers, onions in spicy Indo-Chinese sauce.",
        price: "$15",
      },
      {
        name: "Gobi / Babycorn Manchurian",
        description:
          "Crispy cauiflower florets / baby corn tossed in tangy, spicy, Indo - Chinese sauce.",
        price: "$15",
      },
      {
        name: "Veg Manchurian",
        description:
          "Crispy vegetable balls tossed in tangy, spicy, Indo-Chinese sauce.",
        price: "$15",
      },
      {
        name: "Chatpata Gobi",
        description: "Seasoned, crisp cauliflower florets in tangy spicy sauce",
        price: "$15",
      },
      {
        name: "Dahi Ke Kabab",
        description:
          "Crispy rolls filled with a creamy, spiced hung curd stuffing.",
        price: "$15",
      },
      {
        name: "Schezwan Momo - Veg",
        description:
          "Pan-fried vegetable dumplings tossed in a fiery schezwan sauce.",
        price: "$15",
      },
      {
        name: "Palak Chaat",
        description:
          "Crispy spinach, sweet yogurt, tangy chutneys. A textural delight.",
        price: "$15",
      },
      {
        name: "Aloo Tikki Chaat",
        description:
          "Crispy, spiced potato patties served with tangy chutneys, creamy yogurt, and savory spices.",
        price: "$14",
      },
      {
        name: "Papdi Chaat",
        description:
          "Crisp discs, potatoes, chickpeas, sweet & spicy chutneys, creamy dahi.",
        price: "$12",
      },
      {
        name: "Paneer Bao",
        description:
          "Soft steamed bao bun cradling smoky, spiced paneer filling.",
        price: "$15",
      },
      {
        name: "Pani Puri - Serving Lamhaaa way",
        description:
          "Crispy puris, spiced potato, tangy flavored waters. Our special touch.",
        price: "$12",
      },
      {
        name: "Samosa",
        description:
          "Crispy, golden pastry filled with spiced potato goodness.",
        price: "$8",
      },
      {
        name: "Dahi Puri",
        description:
          "Mumbai-style dahi puri. Crisp puris stuffed with potatoes, yogurt, and chutneys.",
        price: "$12",
      },
    ],
  },
  {
    category: "Appetizers - Non-Veg",
    items: [
      {
        name: "Goat Bhuna",
        description:
          "Tender goat, slow-cooked in thick, aromatic, rich masala.",
        price: "$20",
      },
      {
        name: "Amritsari Macchi",
        description: "Crispy fried fish, Amritsari spices, carom seeds.",
        price: "$18",
      },
      {
        name: "Prawns Koliwada",
        description: "Succulent, spicy fried prawns. A coastal favorite.",
        price: "$18",
      },
      {
        name: "Chicken 65",
        description:
          "Fiery South Indian fried chicken, curry leaves, chili kick.",
        price: "$16",
      },
      {
        name: "Chilli Chicken",
        description:
          "Wok-tossed chicken, peppers, onions in bold Indo-Chinese sauce.",
        price: "$16",
      },
      {
        name: "Pepper Chicken",
        description:
          "Juicy chicken cooked with fresh ground black pepper, curry leaves, and traditional Indian spices.",
        price: "$16",
      },
      {
        name: "Chicken Lollipop",
        description:
          "Crispy, juicy chicken drumettes - frenched and fried to perfection. Served with Chef's special Schezwan sauce.",
        price: "$16",
      },
      {
        name: "Chicken Bao",
        description:
          "Soft steamed bao bun cradling smoky, spiced chicken filling.",
        price: "$16",
      },
      {
        name: "Anda Chaat",
        description:
          "Savory chaat topped with chutneys and spices served in crunchy egg katori.",
        price: "$15",
      },
    ],
  },
  {
    category: "Tandoor Se - Veg",
    items: [
      {
        name: "Paneer Tikka",
        description: "Smoky, tender paneer marinated in yogurt and spices.",
        price: "$16",
      },
      {
        name: "Malai Paneer Tikka",
        description:
          "Soft paneer marinated in a creamy blend of cheese, cream and subtle spices, grilled in tandoor.",
        price: "$16",
      },
      {
        name: "Chaap Shakahari",
        description:
          "Tandoor-roasted soya chaap marinated in a classic, spiced yogurt mixture.",
        price: "$15",
      },
      {
        name: "Tandoori Aloo Sizzler",
        description:
          "Smoky, flavorful and tender potatoes, tandoor-kissed,served on sizzling plate.",
        price: "$16",
      },
      {
        name: "Mix Veg Grill",
        description:
          "Tandoor-roasted creamy broccoli florets, lightly spiced pineapple, charred potatoes.",
        price: "$15",
      },
    ],
  },
  {
    category: "Tandoor Se - Non-Veg",
    items: [
      {
        name: "Mutton Burrah Chaap (Lamb Chops)",
        description:
          "Fall-off-the-bone lamb chops, rich, smoky, tandoor-cooked.",
        price: "$28",
      },
      {
        name: "Traditional Way - Chicken Tikka",
        description: "Classic tandoori chicken, yogurt & spice marinated.",
        price: "$18",
      },
      {
        name: "Chicken Malai Kabab",
        description: "Creamy, melt-in-mouth chicken kebabs, mild spices.",
        price: "$18",
      },
      {
        name: "Goat Seekh Kabab",
        description:
          "Minced lamb, spiced, skewered, and tandoor-cooked. Juicy.",
        price: "$24",
      },
      {
        name: "Tandoori Tangdi",
        description: "Smoky, juicy chicken drumsticks from the tandoor.",
        price: "$20",
      },
      {
        name: "Kesari Fish Tikka",
        description:
          "Saffron-infused salmon, tender, subtly spiced, tandoor-grilled.",
        price: "$22",
      },
      {
        name: "Tandoori Pomfret",
        description:
          "Whole Pomfret, expertly grilled in the tandoor, smoky aroma and flaky, flavorful finish.",
        price: "$24",
      },
      {
        name: "Tandoori Momo",
        description:
          "Juicy chicken momos kissed by the tandoor, smoky, spiced, irresistible",
        price: "$18",
      },
    ],
  },
  {
    category: "Snacks",
    items: [
      {
        name: "Chole Bhatura",
        description: "Fluffy bhatura with spicy, tangy chickpea curry.",
        price: "$15",
      },
      {
        name: "Poori Bhaji",
        description: "Puffy pooris with comforting, spiced potato curry.",
        price: "$15",
      },
      {
        name: "Dosa - Podi / Masala / Benne",
        description:
          "Crispy dosa served in 3 different styles - classic with potato onion masala or gunpowder podi or buttery Benne style.",
        price: "$12/ $15",
      },
    ],
  },
  {
    category: "Entrees - Veg",
    items: [
      {
        name: "Lamhaa Special Veg",
        description:
          "Our chef's signature vegetable medeley in delicately spiced cashew gravy.",
        price: "$20",
      },
      {
        name: "Cheese Butter Masala",
        description:
          "Classic buttery tomato gravy elevated with soft, melting cheese.",
        price: "$20",
      },
      {
        name: "Paneer Ghotala",
        description:
          "Spicy, scrambled paneer cooked in a rich, buttery tomato gravy.",
        price: "$20",
      },
      {
        name: "Veg Kolhapuri",
        description:
          "Chopped vegetables simmered in a rich, spicy gravy made with Kolhapuri masala and hint of coconut.",
        price: "$20",
      },
      {
        name: "Tawa Mehfil",
        description:
          "Fiery paneer and capsicum preparation in a vibrant, bold sauce.",
        price: "$18",
      },
      {
        name: "Methi Paneer",
        description: "Delicate, creamy fenugreek and paneer curry.",
        price: "$18",
      },
      {
        name: "Malai Kofta",
        description: "Soft paneer dumplings in rich, creamy cashew gravy.",
        price: "$18",
      },
      {
        name: "Palak Paneer",
        description: "Fresh spinach puree with soft paneer cubes.",
        price: "$18",
      },
      {
        name: "Paneer Makhanwala",
        description:
          "Creamy, rich paneer curry in a luscious tomato-butter gravy.",
        price: "$18",
      },
      {
        name: "Paneer Tikka Masala",
        description: "Smoky paneer tikka in a rich, creamy tomato gravy.",
        price: "$18",
      },
      {
        name: "Stuffed Dum Aloo",
        description:
          "Chef's unique potatoes stuffed with paneer filling. Fresh and flavorful.",
        price: "$18",
      },
      {
        name: "Mushroom Mutter",
        description:
          "Tender Mushroom and green pea in tomato based, spicy gravy.",
        price: "$17",
      },
      {
        name: "Bhagara Baingan",
        description:
          "Hyderabadi special. Baby eggplant & chilies in nutty, tangy gravy.",
        price: "$18",
      },
      {
        name: "Bhindi Masala",
        description:
          "Stir-fried okra tossed with onions, tomatoes and robust Indian spices.",
        price: "$17",
      },
      {
        name: "Daal Bhukara",
        description:
          "Creamy black lentils, slow-cooked with butter and spices.",
        price: "$18",
      },
      {
        name: "Daal Tadka",
        description:
          "Rich yellow lentils, tempered with sizzling ghee and spices.",
        price: "$16",
      },
    ],
  },
  {
    category: "Entrees - Non-Veg",
    items: [
      {
        name: "Lamhaa Special - Goat",
        description:
          "Our chef's signature goat creation in creamy almond and saffron gravy. Regal.",
        price: "$24",
      },
      {
        name: "Laal Maas",
        description:
          "Fiery Rajasthani mutton curry. Bold, rich, unforgettable.",
        price: "$24",
      },
      {
        name: "Manglorian Curry - Fish / Shrimp",
        description:
          "Fish or shrimp in tangy, sweet mango-coconut curry with tropical twist.",
        price: "$21",
      },
      {
        name: "Nilgiri Fish / Shrimp",
        description:
          "Fish or shrimp simmered in a vibrant green gravy made with fresh mint, coriander and coconut.",
        price: "$21",
      },
      {
        name: "Haleem",
        description:
          "Slow-cooked, soulful stew. Pounded wheat, tender meat, aromatic spices.",
        price: "$20",
      },
      {
        name: "Lamhaa Special - Chicken",
        description:
          "Our chef's signature chicken creation in intensely spiced broth with hint of coconut.",
        price: "$22",
      },
      {
        name: "Butter Chicken",
        description:
          "Creamy, rich, mildly spiced chicken in tomato-butter gravy. Global favorite.",
        price: "$20",
      },
      {
        name: "Chicken Tikka Masala",
        description:
          "Tandoor chicken tikka in a robust, spiced tomato-onion gravy.",
        price: "$20",
      },
      {
        name: "Mughlai Chicken Handi",
        description: "Rich, creamy Mughlai chicken with cashews and saffron.",
        price: "$20",
      },
      {
        name: "Kadai Chicken",
        description:
          "Bold, smoky chicken tossed with peppers and aromatic spices, kadai style.",
        price: "$20",
      },
      {
        name: "Anda Ghotala",
        description:
          "Spiced scrambled eggs, Mumbai street-style. Flavorful kick.",
        price: "$20",
      },
      {
        name: "Anda Curry",
        description:
          "A hearty, spiced egg curry — bold flavors, soul-warming comfort.",
        price: "$18",
      },
    ],
  },
  {
    category: "Breads",
    items: [
      {
        name: "Naan - Plain / Butter / Garlic / Bullet",
        description: "Fresh tandoor-baked naan. Classic to fiery.",
        price: "$5 / $6",
      },
      {
        name: "Tandoori Roti / Phulka",
        description:
          "Wholesome whole wheat flatbreads. Tandoor-baked or flame-puffed.",
        price: "$5 / $4",
      },
      {
        name: "Cheese Chilli Naan",
        description: "Cheesy, spicy naan from the tandoor. Comforting kick.",
        price: "$7",
      },
      {
        name: "Peshwari Naan",
        description:
          "Soft tandoor-baked bread stuffed with nuts, raisins and coconut.",
        price: "$7",
      },
      {
        name: "Paneer Kulcha",
        description: "Soft, leavened bread, savory spiced paneer stuffing.",
        price: "$7",
      },
      {
        name: "Onion Kulcha",
        description: "Soft, leavened bread, savory spiced onion stuffing.",
        price: "$7",
      },
      {
        name: "Lachha Paratha",
        description:
          "Multi-layered, flaky whole wheat paratha. Perfect texture.",
        price: "$7",
      },
      {
        name: "Aloo Paratha",
        description: "Whole wheat flatbread, spiced potato filling.",
        price: "$7",
      },

      {
        name: "Bread Basket",
        description: "Roti, Garlic Naan, Bullet Naan",
        price: "$16",
      },
    ],
  },
  {
    category: "Rice & Noodles",
    items: [
      {
        name: "Goat Dum Biryani",
        description:
          "Succulent goat, long-grain basmati, slow-cooked in spices. Culinary masterpiece.",
        price: "$22",
      },
      {
        name: "Chicken Dum Biryani",
        description: "Layers of basmati and tender chicken, slow-cooked.",
        price: "$20",
      },
      {
        name: "Veg Dum Pulao",
        description:
          "Fragrant basmati, seasonal veggies, slow-cooked 'dum' style.",
        price: "$18",
      },
      {
        name: "Rice - Plain / Jeera",
        description: "Steamed basmati. Classic plain or fragrant cumin-spiced.",
        price: "$4 / $8",
      },
      {
        name: "Curd Rice",
        description:
          "Cooling, comforting rice gently mixed with Yogurt and flavorful tempering.",
        price: "$10",
      },
      {
        name: "Fried Rice - Veg/ Egg / Chicken",
        description:
          "Hot and smoky rice, stir-fried with vibrant vegetables, fried egg or crispy chicken.",
        price: "$16/ $18",
      },
      {
        name: "Hakka Noodles - Veg / Chicken",
        description:
          "Fiery and flavorful noodles, stir-fired with crunchy vegetables, fried egg or crispy chicken.",
        price: "$16/ $18",
      },
      {
        name: "Triple Schezwan - Veg / Chicken",
        description:
          "Fiery triple-threat schezwan — noodles, rice, and manchurian in one bold, smoky plate.",
        price: "$20 / $22",
      },
    ],
  },
  {
    category: "Raita",
    items: [
      {
        name: "Mix Veg Raita",
        description: "Fresh yogurt, diced mixed veggies, light cumin.",
        price: "$5",
      },
      {
        name: "Sanatta Raita",
        description:
          "Our unique house raita. Cool yogurt, special herb blend, subtle spice.",
        price: "$5",
      },
      {
        name: "Pineapple Raita",
        description: "Fresh yogurt, juicy pineapple, mild cumin.",
        price: "$5",
      },
    ],
  },
  {
    category: "Beverages",
    items: [{ name: "Tea / Coffee", description: "", price: "$4" }],
  },
  {
    category: "Drinks",
    items: [
      {
        name: "Mango Sunrise",
        description:
          "Vibrant layers of sweet mango and citrus — a tropical, sun-kissed refresher.",
        price: "$8",
      },
      {
        name: "Death by Chocolate Shake",
        description: "Decadent, rich chocolate shake. Pure indulgence.",
        price: "$9",
      },
      {
        name: "Guava Berry",
        description:
          "Tangy guava meets sweet berry — a bold, fruity refresher with a tropical twist.",
        price: "$8",
      },
      {
        name: "Mango Lassi",
        description: "Creamy, sweet mango and yogurt blend. Indian classic.",
        price: "$6",
      },
      {
        name: "Chaas",
        description:
          "Our traditional buttermilk, infused with a unique smoky aroma.",
        price: "$6",
      },
      {
        name: "Strawberry Lemonade",
        description: "Zesty lemonade with fresh strawberry or watermelon.",
        price: "$8",
      },
      {
        name: "Aam Panna",
        description:
          "Tangy raw mango cooler — sweet, spiced, and refreshingly Indian.",
        price: "$8",
      },
      {
        name: "Kathiyawadi Lemon Soda",
        description: "Lemon soda with special Kathiyawadi masala.",
        price: "$6",
      },
    ],
  },
  {
    category: "Dessert",
    items: [
      {
        name: "Gadbad Ice-cream",
        description: "Fun sundae! Multiple ice creams, fruits, nuts, sauces.",
        price: "$12",
      },
      {
        name: "Malpua with Rabdi",
        description: "Sweet, fried pancake dipped malai sauce.",
        price: "$10",
      },
      {
        name: "Apricot ka Meetha",
        description: "Sweet, tangy dried apricot dessert. Hyderabadi delight.",
        price: "$10",
      },
      {
        name: "Sizzling Brownie w/Vanilla Ice-cream",
        description:
          "Warm brownie on a sizzler, vanilla ice cream. Classic indulgence.",
        price: "$10",
      },
      {
        name: "Rose Malai Cake",
        description:
          "Moist cake with unmistakable taste of Rose infused malai cream.",
        price: "$10",
      },
      {
        name: "Orange Kulfi",
        description: "Homemade Indian ice cream, bright zesty orange flavor.",
        price: "$10",
      },
      {
        name: "Paan Kulfi",
        description:
          "Homemade Indian ice cream, inspired by fresh Pann (betel leaf).",
        price: "$10",
      },
      {
        name: "Kesar Cheese Cake",
        description:
          "Classic cheesecake reimagined with saffron, cardamom, and a hint of rose.",
        price: "$10",
      },
    ],
  },
];

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal = ({ isOpen, onClose }: MenuModalProps) => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const getMenuForLocation = (location: string) => {
    return location === "Benselam" ? fullMenuBenselam : fullMenuHamilton;
  };

  const handleClose = () => {
    onClose();
    setSelectedLocation(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div
        className="rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        style={{
          backgroundColor: "#FFFDF5",
          color: "#4F4D46",
          border: "1px solid #B8943A",
        }}
      >
        {/* Modal Header */}
        <div
          className="sticky top-0 z-30 p-6 flex justify-between items-center"
          style={{
            backgroundColor: "#FFFDF5",
            borderBottom: "1px solid #B8943A",
          }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: "#4F4D46" }}
          >
            Full Menu
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="hover:bg-[#B8943A]/15"
            style={{ color: "#4F4D46" }}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Location Selection */}
        {!selectedLocation && (
          <div className="p-6">
            <h3
              className="text-xl font-semibold mb-6 text-center"
              style={{ color: "#4F4D46" }}
            >
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
              style={{
                backgroundColor: "#FFFDF5",
                borderBottom: "1px solid #B8943A",
                minHeight: "64px",
              }}
            >
              <h3
                className="text-xl font-semibold"
                style={{ color: "#4F4D46" }}
              >
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
                  {getMenuForLocation(selectedLocation).map(
                    (category, categoryIndex) => (
                      <CarouselItem
                        key={categoryIndex}
                        className="flex justify-center"
                      >
                        <div className="w-full max-w-2xl relative">
                          {/* Category Header with arrows inline */}
                          <div
                            className="mt-6 md:mt-8 border-y py-2 flex items-center justify-center gap-3"
                            style={{ borderColor: "#B8943A" }}
                          >
                            <CarouselPrevious
                              variant="default"
                              className="static left-auto top-auto translate-y-0 bg-[#B8943A] text-[#18181b] hover:bg-[#B8943A]/90 border-transparent disabled:bg-[#B8943A]/60 disabled:text-[#18181b]/60 h-9 w-9"
                            />
                            <h4
                              className="text-center text-xl md:text-2xl font-semibold whitespace-nowrap"
                              style={{ color: "#4F4D46" }}
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
                              <div
                                key={itemIndex}
                                className="flex flex-col justify-between border border-[#E6D8B8] rounded-xl p-3 bg-white/30 min-h-[100px]"
                              >
                                <div>
                                  <div className="flex items-start justify-between gap-2">
                                    <h5
                                      className="text-sm md:text-base font-semibold"
                                      style={{ color: "#4F4D46" }}
                                    >
                                      {item.name}
                                    </h5>
                                    <span
                                      className="text-xs md:text-sm font-semibold whitespace-nowrap"
                                      style={{ color: "#B8943A" }}
                                    >
                                      {item.price}
                                    </span>
                                  </div>
                                  <p
                                    className="text-xs md:text-sm mt-2 leading-snug"
                                    style={{ color: "#4F4D46", opacity: 0.85 }}
                                  >
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CarouselItem>
                    ),
                  )}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuModal;
