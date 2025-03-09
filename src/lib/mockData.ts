// Mock data for North Pakistan tourism website

export type Destination = {
  id: string;
  title: string;
  location: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  imageAlt: string;
  gallery: string[];
  highlights: string[];
  bestTimeToVisit: string;
  howToReach: string;
};

export type Activity = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging" | "Extreme";
  bestTimeToVisit: string;
  whatToBring: string[];
  locations: string[];
};

export type Tour = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  price: number;
  duration: string;
  rating: number;
  maxGroupSize: number;
  included: string[];
  notIncluded: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  destinations: string[];
  activities: string[];
  category: "adventure" | "cultural" | "family" | "native-experience";
};

// Destinations
export const destinations: Destination[] = [
  {
    id: "hunza-valley",
    title: "Hunza Valley",
    location: "Gilgit-Baltistan",
    description:
      "Experience the stunning beauty of Hunza Valley, known for its majestic mountains, crystal clear waters, and rich cultural heritage.",
    longDescription:
      "Hunza Valley is a mountainous valley in the Gilgit-Baltistan region of Pakistan. The valley is situated at an elevation of 2,500 meters and surrounded by several peaks over 7,000 meters. Known for its stunning natural beauty, clean fresh air, and the friendly local population, Hunza has become a popular tourist destination. The people of Hunza are hospitable and have a rich cultural heritage with unique customs, traditions, and a local language called Burushaski. The valley is also known for its longevity - the people here are said to live longer than in most other regions of the world.",
    imageUrl: "/images/destinations/hunza-valley.jpg",
    imageAlt: "Aerial view of Hunza Valley with snow-capped mountains",
    gallery: [
      "/images/destinations/hunza-valley-1.jpg",
      "/images/destinations/hunza-valley-2.jpg",
      "/images/destinations/hunza-valley-3.jpg",
    ],
    highlights: [
      "Baltit Fort",
      "Altit Fort",
      "Attabad Lake",
      "Passu Cones",
      "Eagle's Nest",
      "Khunjerab Pass",
    ],
    bestTimeToVisit: "May to October",
    howToReach:
      "Fly to Islamabad and take a 16-18 hour road journey via the Karakoram Highway, or fly to Gilgit and then drive 2-3 hours to Hunza Valley.",
  },
  {
    id: "skardu",
    title: "Skardu",
    location: "Gilgit-Baltistan",
    description:
      "Discover the breathtaking landscapes of Skardu, with its deserts, mountains, and lakes, offering a paradise for nature lovers and adventurers.",
    longDescription:
      "Skardu is a city located in the Gilgit-Baltistan region of Pakistan, situated at an elevation of 2,438 meters. It serves as the main gateway to the mighty Karakoram Mountain Range. The region is known for its rugged landscape, featuring stark deserts, azure blue lakes, green meadows, and towering mountains. Skardu is surrounded by the mighty Karakoram Range with four peaks over 8,000 meters including K2, the second-highest mountain in the world. The Indus River flows through the valley, creating a lush green belt and providing a stark contrast to the surrounding arid landscape.",
    imageUrl: "/images/destinations/skardu.jpg",
    imageAlt: "Beautiful view of Skardu with mountains and a lake",
    gallery: [
      "/images/destinations/skardu-1.jpg",
      "/images/destinations/skardu-2.jpg",
      "/images/destinations/skardu-3.jpg",
    ],
    highlights: [
      "Shangrila Resort (Lower Kachura Lake)",
      "Upper Kachura Lake",
      "Shigar Fort",
      "Deosai National Park",
      "Satpara Lake",
      "Khaplu Palace",
    ],
    bestTimeToVisit: "May to September",
    howToReach:
      "Direct flights operate from Islamabad to Skardu, or you can take a road trip via the Karakoram Highway through Besham, Chilas, and Gilgit.",
  },
  {
    id: "swat-valley",
    title: "Swat Valley",
    location: "Khyber Pakhtunkhwa",
    description:
      "Visit the 'Switzerland of Pakistan' with lush green meadows, snow-capped mountains, and the crystal clear waters of the Swat River.",
    longDescription:
      "Swat Valley, often called the 'Switzerland of Pakistan', is a picturesque region located in the Khyber Pakhtunkhwa province. The valley features lush green meadows, snow-capped mountains, and the crystal clear waters of the Swat River flowing through it. Rich in history, the valley was once the cradle of Buddhism and has many archaeological sites. The local Swati culture, with its unique blend of Pashtun traditions and historical influences, adds another dimension to the visitor experience.",
    imageUrl: "/images/destinations/swat-valley.jpg",
    imageAlt: "Scenic view of Swat Valley with green meadows and mountains",
    gallery: [
      "/images/destinations/swat-valley-1.jpg",
      "/images/destinations/swat-valley-2.jpg",
      "/images/destinations/swat-valley-3.jpg",
    ],
    highlights: [
      "Malam Jabba Ski Resort",
      "Kalam",
      "Bahrain",
      "Mahodand Lake",
      "Swat Museum",
      "White Palace (Marghazar)",
    ],
    bestTimeToVisit: "April to October",
    howToReach:
      "From Islamabad, take the Islamabad-Peshawar Motorway to Mardan and then continue on the road to Swat. The journey takes around 5-6 hours.",
  },
  {
    id: "fairy-meadows",
    title: "Fairy Meadows",
    location: "Gilgit-Baltistan",
    description:
      "Experience the awe-inspiring beauty of Fairy Meadows, offering panoramic views of Nanga Parbat, the ninth highest mountain in the world.",
    longDescription:
      "Fairy Meadows, named by German climbers for its exceptional beauty, is a grassland near one of the base camp sites of Nanga Parbat, located in Diamer District, Gilgit-Baltistan. At an altitude of about 3,300 meters, it offers spectacular views of Nanga Parbat, the ninth highest mountain in the world. The pristine alpine meadow is surrounded by dense forest and serves as a starting point for trekkers heading to the Nanga Parbat base camp. The journey to Fairy Meadows itself is an adventure, involving a jeep ride on a narrow mountain road followed by a trek or horse ride.",
    imageUrl: "/images/destinations/fairy-meadows.jpg",
    imageAlt:
      "Panoramic view of Fairy Meadows with Nanga Parbat in the background",
    gallery: [
      "/images/destinations/fairy-meadows-1.jpg",
      "/images/destinations/fairy-meadows-2.jpg",
      "/images/destinations/fairy-meadows-3.jpg",
    ],
    highlights: [
      "Nanga Parbat View",
      "Beyal Camp",
      "Nanga Parbat Base Camp Trek",
      "Stargazing",
      "Traditional Wooden Cottages",
      "Local Cuisine",
    ],
    bestTimeToVisit: "June to September",
    howToReach:
      "From Islamabad, take the Karakoram Highway to Raikot Bridge. From there, take a jeep to Tato village and then trek or hire a horse for the final stretch to Fairy Meadows.",
  },
];

// Activities
export const activities: Activity[] = [
  {
    id: "trekking-k2-base-camp",
    title: "K2 Base Camp Trek",
    description:
      "Embark on the ultimate adventure to the base of the world's second highest mountain, K2, traversing the mighty Baltoro Glacier.",
    longDescription:
      "The K2 Base Camp trek is considered one of the world's greatest mountain journeys. This challenging trek takes you to the base of K2, the second highest mountain in the world at 8,611 meters. The journey begins in Skardu and involves multiple days of trekking across the Baltoro Glacier, one of the longest glaciers outside the polar regions. Along the way, you'll witness some of the most spectacular mountain scenery on earth, including views of K2, Broad Peak, and the Gasherbrums. This trek is physically demanding and requires good fitness, but the rewards are unparalleled for those who love high-altitude adventures.",
    imageUrl: "/images/activities/k2-base-camp.jpg",
    duration: "14-21 days",
    difficulty: "Extreme",
    bestTimeToVisit: "June to September",
    whatToBring: [
      "High-quality trekking boots",
      "Warm clothing (layers)",
      "Down jacket",
      "Sleeping bag (rated for below freezing)",
      "Trekking poles",
      "Headlamp",
      "First aid kit",
      "Water purification tablets",
    ],
    locations: ["Skardu", "Askole", "Concordia", "K2 Base Camp"],
  },
  {
    id: "jeep-safari-deosai-plains",
    title: "Jeep Safari in Deosai Plains",
    description:
      "Experience the adventure of a jeep safari across the second highest plateau in the world, home to diverse wildlife and stunning landscapes.",
    longDescription:
      "Deosai National Park, also known as 'The Land of Giants,' is located in the Skardu region of Gilgit-Baltistan. At an altitude of 4,114 meters (13,497 feet), it's the second highest plateau in the world. A jeep safari through this vast wilderness offers an incredible opportunity to experience its unique ecosystem. The plains stretch over 3,000 square kilometers and are home to the Himalayan brown bear, golden marmots, and numerous bird species. During summer, the plateau transforms into a carpet of colorful wildflowers. The jeep safari typically starts from Skardu and takes you through rugged terrain with spectacular views of surrounding mountains and the pristine Sheosar Lake at the heart of the plains.",
    imageUrl: "/images/activities/jeep-safari-deosai.jpg",
    duration: "1-2 days",
    difficulty: "Moderate",
    bestTimeToVisit: "June to September",
    whatToBring: [
      "Warm clothing (even in summer)",
      "Sunglasses and sunscreen",
      "Camera",
      "Binoculars for wildlife viewing",
      "Snacks and water",
      "First aid kit",
    ],
    locations: ["Skardu", "Deosai National Park", "Sheosar Lake"],
  },
  {
    id: "mountain-biking-karakoram",
    title: "Mountain Biking on the Karakoram Highway",
    description:
      "Pedal your way through the legendary Karakoram Highway, experiencing stunning mountain scenery and local villages along the way.",
    longDescription:
      "The Karakoram Highway, often called the 'Eighth Wonder of the World,' offers one of the most epic mountain biking experiences on the planet. This high-altitude road connects Pakistan to China and passes through some of the most spectacular mountain scenery in the world. Mountain biking along this route takes you through diverse landscapes, from the lush green valleys of Kohistan to the stark beauty of the Karakoram Range. You'll pedal past glaciers, roaring rivers, and traditional villages, with views of peaks like Nanga Parbat and Rakaposhi. The route can be customized based on your fitness level and time availability, from short segments to a multi-week expedition.",
    imageUrl: "/images/activities/mountain-biking-karakoram.jpg",
    duration: "3-14 days",
    difficulty: "Challenging",
    bestTimeToVisit: "May to October",
    whatToBring: [
      "Mountain bike (can be rented)",
      "Cycling gear (helmet, gloves, padded shorts)",
      "Layered clothing",
      "Sun protection",
      "First aid kit",
      "Basic bike repair tools",
      "Water bottle and purification method",
    ],
    locations: [
      "Islamabad",
      "Besham",
      "Chilas",
      "Gilgit",
      "Hunza",
      "Khunjerab Pass",
    ],
  },
  {
    id: "fishing-trout-swat",
    title: "Trout Fishing in Swat",
    description:
      "Enjoy the peaceful and rewarding experience of fishing for brown and rainbow trout in the pristine rivers of Swat Valley.",
    longDescription:
      "Swat Valley is renowned for its excellent trout fishing opportunities. The crystal-clear rivers and streams of this region are home to both brown and rainbow trout, introduced during the colonial era and now thriving in these cold mountain waters. The main fishing spots include the Swat River and its tributaries, especially around Kalam and Madyan. Local guides can help you find the best spots and may provide equipment if needed. The peaceful surroundings of pine forests and mountain views make this activity enjoyable even for beginners. Many hotels and resorts in the area can arrange fishing permits and guides, as well as prepare your catch for a delicious meal.",
    imageUrl: "/images/activities/fishing-swat.jpg",
    duration: "Half-day to 2 days",
    difficulty: "Easy",
    bestTimeToVisit: "April to September",
    whatToBring: [
      "Fishing equipment (can be rented)",
      "Fishing permit",
      "Appropriate footwear for rocky riverbanks",
      "Sun protection",
      "Insect repellent",
      "Light jacket (even in summer, mornings can be cool)",
    ],
    locations: ["Swat Valley", "Kalam", "Madyan", "Bahrain"],
  },
  {
    id: "cultural-immersion-hunza",
    title: "Cultural Immersion in Hunza",
    description:
      "Live like a local in the ancient kingdom of Hunza, experiencing their unique culture, cuisine, and traditional way of life.",
    longDescription:
      "Hunza Valley offers visitors a unique opportunity to immerse themselves in a culture that has remained relatively unchanged for centuries. This immersive experience typically involves staying with local families or in traditional-style accommodations, participating in daily activities, and learning about local customs and traditions. You'll have the chance to try your hand at traditional cooking, learn about local handicrafts like carpet weaving and embroidery, and participate in seasonal agricultural activities. Cultural programs often include performances of traditional music and dance, visits to ancient forts and villages, and interactions with elders who share stories and folklore. The people of Hunza speak Burushaski, an ancient language unrelated to any other known language family, though many also speak Urdu and some English.",
    imageUrl: "/images/activities/cultural-hunza.jpg",
    duration: "3-7 days",
    difficulty: "Easy",
    bestTimeToVisit: "May to October",
    whatToBring: [
      "Modest clothing (respecting local customs)",
      "Small gifts for host families (optional)",
      "Notebook for learning phrases and recipes",
      "Camera",
      "Open mind and willingness to participate",
    ],
    locations: ["Hunza Valley", "Karimabad", "Altit", "Gulmit"],
  },
  {
    id: "hiking-fairy-meadows",
    title: "Hiking to Fairy Meadows",
    description:
      "Hike through pine forests to reach the magical Fairy Meadows, offering spectacular views of Nanga Parbat, the 'Killer Mountain'.",
    longDescription:
      "The journey to Fairy Meadows begins with a drive from Islamabad to Raikot Bridge on the Karakoram Highway, followed by a thrilling jeep ride on a narrow mountain road to Tato village. From there, a moderate 3-4 hour hike through pine forests and alpine terrain leads to Fairy Meadows. The hike gains significant elevation but is generally considered moderate in difficulty. Once at Fairy Meadows, you're rewarded with breathtaking views of Nanga Parbat (8,126m), the ninth highest mountain in the world and the western anchor of the Himalayas. The meadow itself is a lush green plateau at about 3,300 meters elevation, surrounded by dense forests of pine and cedar. Many visitors spend 1-3 nights here, staying in rustic wooden cabins or camping, and using it as a base for further hikes to viewpoints like Beyal Camp or even Nanga Parbat Base Camp.",
    imageUrl: "/images/activities/hiking-fairy-meadows.jpg",
    duration: "3-5 days (round trip from Islamabad)",
    difficulty: "Moderate",
    bestTimeToVisit: "June to September",
    whatToBring: [
      "Hiking boots",
      "Layered clothing",
      "Rain jacket",
      "Sun protection",
      "Basic first aid kit",
      "Trekking poles (optional)",
      "Camera",
      "Snacks for the trail",
    ],
    locations: ["Raikot Bridge", "Tato Village", "Fairy Meadows", "Beyal Camp"],
  },
];

// Tours
export const tours: Tour[] = [
  {
    id: "hunza-explorer",
    title: "Hunza Valley Explorer",
    description:
      "A comprehensive 7-day journey through the magnificent Hunza Valley, experiencing its natural beauty, ancient culture, and warm hospitality.",
    longDescription:
      "Immerse yourself in the breathtaking beauty and rich cultural heritage of Hunza Valley with this comprehensive 7-day tour. You'll explore ancient forts, visit traditional villages, hike to stunning viewpoints, and interact with the friendly local community. Highlights include visits to the historic Baltit and Altit Forts, boating on the turquoise Attabad Lake, experiencing the dramatic landscape of Passu Cones, and enjoying panoramic views from Eagle's Nest. Throughout the journey, you'll enjoy comfortable accommodations in local hotels and guesthouses, savor authentic Hunza cuisine, and learn about the unique customs and traditions that have sustained this remarkable mountain community for centuries.",
    imageUrl: "/images/tours/hunza-explorer.jpg",
    price: 899,
    duration: "7 days",
    rating: 4.8,
    maxGroupSize: 12,
    included: [
      "All accommodations (6 nights)",
      "Daily breakfast and dinner",
      "Transportation in comfortable vehicles",
      "English-speaking guide",
      "Entrance fees to attractions",
      "Boat ride on Attabad Lake",
      "Cultural performance evening",
    ],
    notIncluded: [
      "International and domestic flights",
      "Travel insurance",
      "Personal expenses",
      "Tips for guides and drivers",
      "Lunches",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Gilgit",
        description:
          "Arrival in Gilgit, transfer to hotel, welcome dinner and briefing on the journey ahead.",
      },
      {
        day: 2,
        title: "Gilgit to Hunza",
        description:
          "Morning drive to Hunza Valley, stopping at Rakaposhi View Point. Afternoon visit to Altit Fort and Altit Old Village.",
      },
      {
        day: 3,
        title: "Karimabad Exploration",
        description:
          "Full day exploring Karimabad, including Baltit Fort, local bazaar, and traditional carpet weaving center.",
      },
      {
        day: 4,
        title: "Attabad Lake and Passu",
        description:
          "Journey to the stunning blue Attabad Lake for a boat ride, continue to Passu for views of the cathedral-like Passu Cones.",
      },
      {
        day: 5,
        title: "Eagle's Nest and Duikar",
        description:
          "Morning hike to Eagle's Nest for panoramic views, afternoon free for optional activities or relaxation.",
      },
      {
        day: 6,
        title: "Hopper Valley & Glacier",
        description:
          "Excursion to the secluded Hopper Valley and Glacier, picnic lunch, evening cultural show with traditional music and dance.",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Morning free time, then transfer back to Gilgit for onward journey.",
      },
    ],
    destinations: ["hunza-valley"],
    activities: ["cultural-immersion-hunza"],
    category: "cultural",
  },
  {
    id: "k2-adventure",
    title: "K2 Base Camp Adventure",
    description:
      "The ultimate trekking expedition to the base of the world's second highest mountain, traversing the mighty Baltoro Glacier.",
    longDescription:
      "Embark on the adventure of a lifetime with this challenging 18-day trek to K2 Base Camp. This expedition takes you through some of the most spectacular mountain scenery on earth, as you traverse the mighty Baltoro Glacier to reach the base of K2, the world's second highest mountain. Along the way, you'll be surrounded by a stunning array of peaks, including four of the world's fourteen 8,000-meter mountains. This journey is physically demanding and requires good fitness and previous trekking experience, but the rewards are unparalleled. You'll be supported by an experienced team including guides, porters, and a chef to prepare nutritious meals throughout the trek. Accommodations are in high-quality trekking tents at established campsites along the route.",
    imageUrl: "/images/tours/k2-adventure.jpg",
    price: 2899,
    duration: "18 days",
    rating: 4.9,
    maxGroupSize: 10,
    included: [
      "All ground transportation",
      "Hotel accommodation in Islamabad and Skardu (4 nights total)",
      "Full-service camping during the trek (13 nights)",
      "All meals during the trek",
      "Experienced mountain guides",
      "Porters to carry group equipment and personal gear",
      "Camping and kitchen equipment",
      "Permit fees",
    ],
    notIncluded: [
      "International flights",
      "Domestic flights (Islamabad-Skardu)",
      "Personal trekking equipment",
      "Travel insurance (mandatory)",
      "Personal expenses",
      "Tips for guides and porters",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Islamabad",
        description:
          "Arrive in Islamabad, transfer to hotel, trip briefing and equipment check.",
      },
      {
        day: 2,
        title: "Fly to Skardu",
        description:
          "Morning flight to Skardu (weather dependent, drive alternative), afternoon at leisure.",
      },
      {
        day: 3,
        title: "Preparation in Skardu",
        description:
          "Final preparations, permit formalities, and briefing, visit to local market for last-minute supplies.",
      },
      {
        day: 4,
        title: "Drive to Askole",
        description:
          "Jeep journey to Askole (3,000m), the last village before the trek begins.",
      },
      {
        day: 5,
        title: "Trek to Jhola",
        description:
          "Begin trek along the Braldu River to Jhola Camp (3,200m), 6-7 hours walking.",
      },
      {
        day: 6,
        title: "Trek to Paiju",
        description:
          "Continue to Paiju (3,450m), first views of the Baltoro Glacier peaks, 6-7 hours walking.",
      },
      {
        day: 7,
        title: "Rest Day at Paiju",
        description:
          "Acclimatization day at Paiju, short optional hikes available.",
      },
      {
        day: 8,
        title: "Trek to Khoburtse",
        description:
          "Begin trekking on the Baltoro Glacier to Khoburtse (3,900m), 5-6 hours walking.",
      },
      {
        day: 9,
        title: "Trek to Urdukas",
        description:
          "Continue to Urdukas camp (4,130m) with views of Paiju Peak, 4-5 hours walking.",
      },
      {
        day: 10,
        title: "Trek to Goro II",
        description:
          "Trek to Goro II (4,250m) with views of Mashabrum, 5-6 hours walking.",
      },
      {
        day: 11,
        title: "Trek to Concordia",
        description:
          "Reach Concordia (4,600m), the magnificent junction of glaciers surrounded by peaks, 5-6 hours walking.",
      },
      {
        day: 12,
        title: "K2 Base Camp",
        description:
          "Day trip to K2 Base Camp (5,150m) and return to Concordia, 6-8 hours walking.",
      },
      {
        day: 13,
        title: "Broad Peak Base Camp",
        description:
          "Optional visit to Broad Peak Base Camp, or rest day at Concordia.",
      },
      {
        day: 14,
        title: "Trek to Goro II",
        description:
          "Begin return journey, trek to Goro II, 5-6 hours walking.",
      },
      {
        day: 15,
        title: "Trek to Urdukas",
        description: "Continue descent to Urdukas, 5-6 hours walking.",
      },
      {
        day: 16,
        title: "Trek to Paiju",
        description: "Trek to Paiju, 6-7 hours walking.",
      },
      {
        day: 17,
        title: "Trek to Askole",
        description:
          "Final day of trekking to Askole, 6-7 hours walking, celebration dinner.",
      },
      {
        day: 18,
        title: "Return to Skardu",
        description: "Drive back to Skardu, end of trek.",
      },
    ],
    destinations: ["skardu"],
    activities: ["trekking-k2-base-camp"],
    category: "adventure",
  },
  {
    id: "swat-valley-getaway",
    title: "Swat Valley Family Getaway",
    description:
      "A 5-day family-friendly tour exploring the 'Switzerland of Pakistan' with its lush valleys, crystal clear rivers, and rich cultural heritage.",
    longDescription:
      "Discover the natural beauty and cultural richness of Swat Valley with your family on this 5-day tour. Known as the 'Switzerland of Pakistan,' Swat offers a perfect blend of scenic landscapes, outdoor activities, and historical sites suitable for travelers of all ages. You'll explore lush green valleys, crystal clear rivers, and pine-covered mountains while learning about the region's fascinating Buddhist history and vibrant Pashtun culture. The tour is designed at a relaxed pace with comfortable accommodations in family-friendly hotels and resorts, making it perfect for travelers with children. Activities can be adjusted based on the ages and interests of your family members, with options for both adventure seekers and those preferring a more leisurely experience.",
    imageUrl: "/images/tours/swat-valley-getaway.jpg",
    price: 699,
    duration: "5 days",
    rating: 4.7,
    maxGroupSize: 15,
    included: [
      "All accommodations (4 nights)",
      "Daily breakfast and dinner",
      "Transportation in comfortable vehicles",
      "English-speaking family-friendly guide",
      "Entrance fees to attractions",
      "Picnic lunch at Mahodand Lake",
      "Cultural activities for children",
    ],
    notIncluded: [
      "Flights to Islamabad",
      "Travel insurance",
      "Personal expenses",
      "Tips for guides and drivers",
      "Most lunches",
    ],
    itinerary: [
      {
        day: 1,
        title: "Islamabad to Swat",
        description:
          "Morning departure from Islamabad, scenic drive to Swat Valley, stop at Malakand Pass, check-in at hotel in Mingora.",
      },
      {
        day: 2,
        title: "Mingora and Surroundings",
        description:
          "Visit Swat Museum to learn about Buddhist history, explore White Palace (Marghazar), afternoon at leisure by the Swat River.",
      },
      {
        day: 3,
        title: "Kalam Valley",
        description:
          "Drive to Kalam through scenic valleys, stops for photos and short walks, evening free to explore Kalam bazaar.",
      },
      {
        day: 4,
        title: "Mahodand Lake",
        description:
          "Day trip to beautiful Mahodand Lake, picnic lunch, optional horse riding or boating, return to Kalam.",
      },
      {
        day: 5,
        title: "Return to Islamabad",
        description:
          "Return journey to Islamabad, stops at handicraft shops, arrival by evening.",
      },
    ],
    destinations: ["swat-valley"],
    activities: ["fishing-trout-swat"],
    category: "family",
  },
  {
    id: "native-experience-hunza",
    title: "Live Like a Local: Hunza Native Experience",
    description:
      "Immerse yourself in the authentic way of life in Hunza with this unique 4-day homestay experience with local families.",
    longDescription:
      "Experience the authentic lifestyle of Hunza Valley with this immersive 4-day homestay program. Rather than observing as a tourist, you'll become part of daily life in this unique mountain community. You'll stay with carefully selected local families in traditional houses, participate in daily activities from farming to cooking, learn about local customs and traditions, and forge meaningful connections with your hosts. This experience offers insights into the remarkable Hunza culture, known for its longevity, sustainable practices, and rich heritage. You'll learn about traditional music, dance, crafts, and agricultural techniques that have sustained this community for centuries. Throughout your stay, local coordinators will provide translation and cultural context to enrich your experience.",
    imageUrl: "/images/tours/native-experience-hunza.jpg",
    price: 599,
    duration: "4 days",
    rating: 4.9,
    maxGroupSize: 8,
    included: [
      "Homestay accommodation (3 nights)",
      "All meals with host families",
      "Transportation from/to Gilgit",
      "Local bilingual coordinator",
      "Cultural activities and demonstrations",
      "Contribution to host community projects",
    ],
    notIncluded: [
      "Transportation to/from Gilgit",
      "Travel insurance",
      "Personal expenses",
      "Gifts for host families (optional but appreciated)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Hunza",
        description:
          "Meet in Gilgit, transfer to Hunza, introduction to host families, welcome dinner and cultural orientation.",
      },
      {
        day: 2,
        title: "Daily Life and Agriculture",
        description:
          "Morning agricultural activities (seasonal), learn about traditional farming techniques, afternoon cooking lesson using local ingredients.",
      },
      {
        day: 3,
        title: "Arts and Heritage",
        description:
          "Morning visit to local artisans (carpet weavers, woodcarvers), afternoon learning traditional music and dance, evening storytelling session.",
      },
      {
        day: 4,
        title: "Farewell",
        description:
          "Final morning with host family, traditional farewell ceremony, return to Gilgit by afternoon.",
      },
    ],
    destinations: ["hunza-valley"],
    activities: ["cultural-immersion-hunza"],
    category: "native-experience",
  },
  {
    id: "northern-adventure-combo",
    title: "Northern Pakistan Adventure Combo",
    description:
      "Experience the best of Northern Pakistan's adventures with this 10-day tour featuring trekking, jeep safari, mountain biking, and cultural experiences.",
    longDescription:
      "This action-packed 10-day itinerary combines the most exciting adventures that Northern Pakistan has to offer. From trekking in the shadow of mighty mountains to exploring high-altitude plateaus by jeep, mountain biking along legendary routes, and engaging with unique local cultures, this tour is designed for those seeking varied experiences and a comprehensive introduction to the region. You'll visit multiple areas including Hunza Valley, Skardu region, and the Fairy Meadows, enjoying different adventures in each location. Throughout the journey, you'll be accompanied by specialized guides for each activity and stay in a mix of hotels and comfortable camps. This tour requires a moderate level of fitness and a spirit of adventure, but activities can be adjusted to accommodate different ability levels.",
    imageUrl: "/images/tours/northern-adventure-combo.jpg",
    price: 1499,
    duration: "10 days",
    rating: 4.8,
    maxGroupSize: 10,
    included: [
      "All accommodations (hotels and camping)",
      "All meals",
      "Transportation throughout the tour",
      "Specialized activity guides",
      "Equipment for all activities",
      "Permits and entry fees",
      "Airport transfers",
    ],
    notIncluded: [
      "Flights to/from Islamabad",
      "Travel insurance",
      "Personal expenses",
      "Tips for guides and support staff",
      "Personal trekking/biking gear",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Islamabad",
        description: "Arrive in Islamabad, welcome dinner, overnight at hotel.",
      },
      {
        day: 2,
        title: "Islamabad to Chilas",
        description:
          "Begin journey along the Karakoram Highway, introduction to mountain biking, overnight in Chilas.",
      },
      {
        day: 3,
        title: "Chilas to Fairy Meadows",
        description:
          "Drive to Raikot Bridge, jeep transfer and trek to Fairy Meadows, overnight in cabin.",
      },
      {
        day: 4,
        title: "Fairy Meadows Exploration",
        description:
          "Day hike toward Nanga Parbat Base Camp, photography opportunities, overnight in Fairy Meadows.",
      },
      {
        day: 5,
        title: "Fairy Meadows to Hunza",
        description:
          "Return trek and drive to Hunza Valley, evening cultural introduction, overnight in hotel.",
      },
      {
        day: 6,
        title: "Hunza Mountain Biking",
        description:
          "Full day mountain biking experience in Hunza Valley, visit ancient villages and viewpoints, overnight in hotel.",
      },
      {
        day: 7,
        title: "Hunza to Skardu",
        description:
          "Scenic drive to Skardu, crossing mountain passes, overnight in hotel.",
      },
      {
        day: 8,
        title: "Deosai Plains Jeep Safari",
        description:
          "Full day jeep safari in Deosai National Park, wildlife viewing, picnic lunch at Sheosar Lake, overnight in hotel.",
      },
      {
        day: 9,
        title: "Skardu Cultural Day",
        description:
          "Morning visit to Shigar Fort, afternoon with local community, farewell dinner with traditional music, overnight in hotel.",
      },
      {
        day: 10,
        title: "Return to Islamabad",
        description:
          "Flight or drive back to Islamabad (weather dependent), tour concludes.",
      },
    ],
    destinations: ["hunza-valley", "fairy-meadows", "skardu"],
    activities: [
      "jeep-safari-deosai-plains",
      "mountain-biking-karakoram",
      "hiking-fairy-meadows",
    ],
    category: "adventure",
  },
];

// Utility function to find items by ID
export function findDestinationById(id: string): Destination | undefined {
  return destinations.find((dest) => dest.id === id);
}

export function findActivityById(id: string): Activity | undefined {
  return activities.find((activity) => activity.id === id);
}

export function findTourById(id: string): Tour | undefined {
  return tours.find((tour) => tour.id === id);
}
