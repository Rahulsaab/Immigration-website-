import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "flowbite-react";
import Footer from "../footer";
import { Card } from "flowbite-react";
import { Accordion } from "flowbite-react";

const Bali = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [activeTab, setActiveTab] = useState("Place to Visit");

  const tabs = [
    "Place to Visit",
    "When to Reach",
    "How to Reach",
    "Why Should Go?",
    "Getting Around",
    "Weather",
  ];

  const tabContent = {
    "Place to Visit": (
      <div className="tab-content">
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-furknsaglam-1596977-21348175.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Uluwatu Temple
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              Uluwatu Temple, perched on a cliff overlooking the Indian Ocean,
              is one of Bali's most iconic sea temples. This stunning location
              offers breathtaking sunset views and is home to the famous Kecak
              dance performance, which is held daily at sunset. Visitors can
              explore the temple's ancient architecture and enjoy the dramatic
              coastal scenery, making it a must-visit spot in Bali.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-arthousestudio-4530514.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Ubud Monkey Forest
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              The Ubud Monkey Forest is a sanctuary and natural habitat for the
              Balinese long-tailed monkey. Situated in Ubud, this is home to over 700 monkeys and 186 species of trees.
              Visitors can stroll through the forest's walking paths, observe
              the playful monkeys, and explore ancient temples and statues
              of area. The Ubud Monkey Forest is a blend
              of nature, culture, and spirituality.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-thanh-peter-1640832-15826986.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tegallalang Rice Terraces
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              The Tegallalang Rice Terraces, located north of Ubud, are renowned
              for their beautiful, lush landscapes and intricate rice paddies.
              This UNESCO World Heritage site offers picturesque views and is a
              popular spot for photography and sightseeing. Visitors can take a
              walk along the terraces, enjoy a meal at one of the nearby cafes,
              and learn about the traditional Balinese irrigation system.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-stijn-dijkstra-1306815-2659475.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tanah Lot Temple
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Tanah Lot Temple is one of Bali's most famous landmarks, known for
              its unique offshore setting and stunning sunset backdrops. This
              ancient Hindu shrine sits on a rocky outcrop and is surrounded by
              the sea at high tide. Visitors can explore the temple's grounds,
              enjoy the surrounding market stalls, and witness the temple's
              beauty during the magical golden hour.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-ander-nguyen-1227506684-22673964.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Kuta Beach
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Kuta Beach is a vibrant, lively beach known for its great surf,
              bustling nightlife, and lively atmosphere. Located close to Bali's
              Ngurah Rai International Airport, Kuta Beach is a popular
              destination for both tourists and locals. Visitors can relax on
              the sandy shores, take surfing lessons, and explore the numerous
              shops, restaurants, and bars that line the beachfront.
            </p>
          </Card>
        </div>
      </div>
    ),

    "When to Reach": (
      <div className="">
        <Accordion className="bg-white " style={{width:"95%", margin:"0px auto"}} data-aos="fade-right">
          <Accordion.Panel>
            <Accordion.Title className="font-bold" style={{ color: "#003652" }}>
              Dry Season: April to September
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The ideal time to visit Bali is during the dry season, which
                runs from April to September. During these months, the weather
                is warm and sunny, with lower humidity and minimal rainfall,
                making it perfect for outdoor activities such as beach outings,
                surfing, and exploring the island's many attractions. July and
                August are the peak tourist months, offering a lively atmosphere
                and numerous cultural festivals, but this also means larger
                crowds and higher prices.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Shoulder Months: April, May, and September
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                If you prefer a quieter, more relaxed visit, consider traveling
                during the shoulder months of April, May, and September. These
                months still offer pleasant weather with fewer tourists and more
                affordable accommodation rates.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Wet Season: October to March
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The wet season, from October to March, sees more rainfall and
                higher humidity. However, this period can still be a good time
                to visit if you are interested in experiencing Bali's lush green
                landscapes, rice terraces, and cultural sites without the
                crowds. Additionally, this season often brings lower prices for
                flights and accommodations.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    ),

    "How to Reach": (
      <div className="">
        <Accordion className="bg-white" style={{width:"95%", margin:"0px auto"}} data-aos="fade-right">
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Taxis and Ride-Sharing
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Taxis are widely available in Bali and can be hailed on the
                street or booked through apps. Blue Bird taxis are known for
                their reliability and metered fares. Ride-sharing services like
                Grab and Gojek are also popular and convenient for getting
                around.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Renting a Scooter or Car
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Renting a scooter is a popular choice for tourists who want to
                explore Bali at their own pace. Scooter rentals are affordable
                and widely available, but be sure to have an international
                driving permit. Car rentals with or without drivers are also an
                option for those who prefer more comfort and safety.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Private Drivers and Tours
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Hiring a private driver is a convenient way to explore Bali’s
                diverse attractions. Many drivers offer customizable day tours,
                which can be a great way to see the island’s highlights without
                the hassle of navigating unfamiliar roads.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    ),
    "Why Should Go?": (
      <div className="">
        <Accordion className="bg-white" style={{width:"95%", margin:"0px auto"}} data-aos="fade-right">
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Stunning Natural Beauty
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Bali is renowned for its breathtaking landscapes, from pristine
                beaches and lush rice terraces to dramatic volcanic mountains
                and dense jungles. Whether you want to relax on the sandy shores
                of Kuta, explore the verdant rice paddies of Tegallalang, or
                hike up Mount Batur for a sunrise view, Bali's natural beauty is
                unparalleled.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Rich Cultural Heritage
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Bali's unique culture, deeply rooted in Hindu traditions, is
                evident in its daily life, architecture, and art. The island is
                dotted with ancient temples like Uluwatu and Tanah Lot, which
                offer a glimpse into Bali's spiritual heritage. Visitors can
                also experience traditional dance performances, vibrant
                ceremonies, and local crafts that showcase the island's rich
                cultural tapestry.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Vibrant Culinary Scene
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Bali's culinary offerings are as diverse as its landscapes. From
                delicious street food and traditional Balinese cuisine to
                world-class international dining, there’s something to satisfy
                every palate. Don't miss out on trying local dishes such as Nasi
                Goreng, Babi Guling, and Sate Lilit, or visiting trendy cafes
                and beach clubs that offer fresh, healthy options.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Adventure and Outdoor Activities
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                For adventure seekers, Bali is a playground of exciting
                activities. Surfing enthusiasts flock to Bali’s famous breaks,
                while diving and snorkeling reveal the vibrant marine life of
                the Coral Triangle. Trekking through the island’s lush
                interiors, white-water rafting on its rivers, and exploring
                hidden waterfalls provide endless opportunities for outdoor
                adventure.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Wellness and Relaxation
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Bali is also a top destination for wellness and relaxation. The
                island is home to numerous yoga retreats, spa resorts, and
                wellness centers that offer a range of treatments, from
                traditional Balinese massages to holistic healing practices.
                Ubud, in particular, is known for its serene environment and
                wellness retreats, making it an ideal place to rejuvenate the
                mind and body.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Affordable Luxury
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Despite its popularity, Bali remains an affordable destination
                for luxury experiences. Visitors can enjoy high-end
                accommodations, gourmet dining, and exclusive activities at a
                fraction of the cost compared to other tropical destinations.
                This affordability allows travelers to experience the best of
                Bali without breaking the bank.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    ),

    "Getting Around": (
      <div className="">
        <Accordion className="bg-white" style={{width:"95%", margin:"0px auto"}} data-aos="fade-right">
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Taxis and Ride-Sharing
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Taxis: Taxis are a convenient way to get around Bali, especially
                in tourist-heavy areas like Kuta, Seminyak, and Ubud. Blue Bird
                taxis are the most reliable option, as they use meters and offer
                fair pricing. Always ensure the driver uses the meter or
                negotiate a fare before starting your journey. <br></br>
                <br></br>
                Ride-Sharing: Ride-sharing services such as Grab and Gojek are
                popular in Bali. These apps provide an easy and often cheaper
                alternative to traditional taxis. They also offer services like
                food delivery and bike rides, making them a versatile option for
                travelers.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Renting a Scooter or Car
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Scooter Rentals: Renting a scooter is a favorite among tourists
                for its affordability and flexibility. Scooter rentals are
                widely available, with daily rates starting from around IDR
                50,000. It’s a great way to explore the island at your own pace,
                but ensure you have an international driving permit and wear a
                helmet for safety. <br></br>
                <br></br>Car Rentals: For those who prefer more comfort, renting
                a car is an excellent option. You can choose between self-drive
                rentals or hiring a car with a driver. Having a driver is
                beneficial as they are familiar with the local roads and can
                navigate the often chaotic traffic with ease. Car rentals
                typically cost between IDR 500,000 to IDR 800,000 per day,
                including the driver.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Private Drivers and Tours
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Hiring a private driver is a popular choice for many visitors.
                Private drivers offer customizable day tours and can take you to
                multiple attractions in one day. This option is especially
                convenient for families or groups. Prices for hiring a private
                driver range from IDR 500,000 to IDR 700,000 for a full day.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Public Transportation
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Bemos: Bemos are small vans that operate as shared public
                transport on fixed routes. They are an economical way to travel
                but can be challenging for tourists due to the lack of clear
                routes and schedules.
                <br></br>
                <br></br>
                Perama Shuttle: Perama Shuttle is a reliable tourist bus service
                that connects major tourist destinations in Bali. It’s a
                cost-effective and comfortable way to travel between places like
                Kuta, Ubud, Sanur, and Lovina. Booking in advance is recommended
                during peak seasons.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Bicycle Rentals
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                For a more eco-friendly and leisurely way to explore, consider
                renting a bicycle. This is particularly enjoyable in areas like
                Ubud, where the terrain is more bike-friendly. Bicycle rentals
                are inexpensive, typically costing around IDR 30,000 to IDR
                50,000 per day.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    ),
    Weather: (
      <div className="">
        <Accordion className="bg-white" style={{width:"95%", margin:"0px auto"}} data-aos="fade-right">
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Overall Climate
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Temperature:<br></br>
                <li>
                  Daytime: Typically ranges from 27°C to 32°C (81°F to 90°F)
                </li>
                <li>
                  Nighttime: Cooler but still warm, around 22°C to 27°C (72°F to
                  81°F)
                </li>
                <br></br>
                Humidity:<br></br>
                <li>
                  Generally high, around 70-90%, but it varies between the dry
                  and wet seasons.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Dry Season: April to September
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Conditions:<br></br>
                <li>Warm and sunny with lower humidity</li>
                <li>Minimal rainfall</li>
                <li>Clear skies, ideal for outdoor activities</li>
                <br></br>
                Ideal For:<br></br>
                <li>Beach outings</li>
                <li>Surfing</li>
                <li>Hiking</li>
                <li>Exploring temples and cultural sites</li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Wet Season: October to March
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Conditions:<br></br>
                <li>Higher humidity</li>
                <li>
                  Frequent rain showers, often in the afternoon or evening
                </li>
                <li>Occasional thunderstorms</li>
                <li>Lush, green landscapes due to regular rainfall</li>
                <br></br>
                Ideal For:<br></br>
                <li>
                  Visiting indoor attractions like museums and art galleries
                </li>
                <li>Spa and wellness retreats</li>
                <li>Enjoying the quieter, less crowded environment</li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Seasonal Variations
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Peak Tourist Season:<br></br>
                <li>
                  July and August: High tourist activity, ideal weather but
                  crowded and more expensive.
                </li>
                <li>
                  December to early January: Christmas and New Year holidays,
                  similar conditions to July and August.
                </li>
                <br></br>
                Shoulder Season:<br></br>
                <li>
                  April, May, and September: Fewer tourists, still pleasant
                  weather, and lower prices for accommodations and flights.
                </li>
                <br></br>
                Low Season:<br></br>
                <li>
                  October to March: More rainfall, fewer tourists, but the
                  island remains vibrant and beautiful. Best for those seeking a
                  quieter experience.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    ),
  };

  return (
    <>
      <div className="container_location">
        <div className="inside_loaction" data-aos="zoom-in">
          BALI
        </div>
      </div>
      <div className="heading_loaction">
        <div data-aos="fade-right">Attractions in Bali</div>
      </div>
      <div className="location_bottom">
        <div className="span_line" data-aos="fade-right">
          For booking and inquiry feel free to contact us.
        </div>
        <div className="location_button">
          <Button
            href="https://wa.me/+917970000976"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-right"
          >
            Connect with us
          </Button>
        </div>
      </div>
      <div className="tabs">
        <div className="tabs-header" data-aos="fade-right">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={tab === activeTab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="tabs-body">{tabContent[activeTab]}</div>
      </div>

      <Footer />
    </>
  );
};

export default Bali;
