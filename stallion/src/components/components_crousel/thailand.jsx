import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "flowbite-react";
import Footer from "../footer";
import { Card } from "flowbite-react";
import { Accordion } from "flowbite-react";

const Thailand = () => {
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
            imgSrc="pexels-maksim-romashkin-11104873.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bangkok
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              Bangkok, the bustling capital of Thailand, is a city of contrasts,
              where ancient temples stand alongside modern skyscrapers. It is
              famous for its vibrant street life, cultural landmarks, and
              shopping venues.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-gije-16986824.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Chiang Mai
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Located in the mountainous northern region of Thailand, Chiang Mai
              is known for its serene landscapes, traditional culture, and
              numerous temples. It is a hub for adventure activities and
              wellness retreats.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-phakchira-sukcharearn-8094858-6027585.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Phuket
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Phuket, Thailand's largest island, is famous for its beautiful
              beaches, vibrant nightlife, and luxury resorts. It is a gateway to
              some of the country's best island-hopping experiences.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-ke-phuah-285929425-13281334.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Koh Samui
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Koh Samui is a tropical paradise in the Gulf of Thailand, famous
              for its palm-fringed beaches, luxury resorts, and vibrant
              nightlife. It is an ideal destination for both relaxation and
              adventure.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-shuvalova-natalia-415991090-20807832.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pattaya
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Pattaya, located on the east coast of the Gulf of Thailand, is
              known for its vibrant nightlife, beautiful beaches, and a wide
              range of entertainment options. It is a popular destination for
              both tourists and locals.
            </p>
          </Card>
        </div>
      </div>
    ),

    "When to Reach": (
      <div className="">
        <Accordion className="bg-white" style={{width:"95%", margin:"0px auto"}} data-aos="fade-right">
          <Accordion.Panel>
            <Accordion.Title className="font-bold" style={{ color: "#003652" }}>
              November to February
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                These months offer cooler and more pleasant weather, making it
                ideal for exploring the city’s temples, markets, and other
                attractions.
                <br></br>
                <br></br>
                <li>Temperature: 20-30°C (68-86°F)</li>
                <br></br>
                <li>
                  Description: The weather is cooler and less humid compared to
                  other times of the year, with occasional light showers.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Shoulder Season: March to May
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Description: This is the hot season in most parts of Thailand,
                  with high temperatures and increased humidity. It’s a good
                  time to visit if you can handle the heat and want to avoid
                  crowds.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              June to October
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Description: The rainy season brings frequent showers and
                  occasional storms, especially in the Andaman Coast and
                  Northern Thailand. However, it’s also a great time to find
                  lower prices and fewer tourists.
                </li>
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
              Major Airports
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Suvarnabhumi Airport (BKK) in Bangkok: The main international
                  gateway to Thailand, located about 30 kilometers east of the
                  city center.
                </li>
                <br></br>
                <li>
                  Don Mueang International Airport (DMK) in Bangkok: Primarily
                  serves low-cost carriers and some international flights.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Trains
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  State Railway of Thailand: Offers overnight sleeper trains and
                  express services connecting Bangkok with cities like Chiang
                  Mai, Surat Thani (for Koh Samui), and Hat Yai.
                </li>
                <br></br>
                <li>
                  Bangkok Train Stations: Hua Lamphong (main station) and Bang
                  Sue Junction
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Buses
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Long-Distance Buses: Depart from Bangkok’s Southern Bus
                  Terminal (Sai Tai Mai) and Northern Bus Terminal (Mo Chit),
                  connecting to various destinations across Thailand.
                </li>
                <br></br>
                <li>
                  Bus Types: VIP, express, and local buses available depending
                  on comfort and travel time preferences.
                </li>
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
              Rich Cultural Heritage
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Thailand boasts awe-inspiring temples such as Wat Phra Kaew
                (Temple of the Emerald Buddha) and Wat Pho (Temple of the
                Reclining Buddha) in Bangkok, and the ancient ruins of Ayutthaya
                and Sukhothai.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Exquisite Cuisine
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Indulge in a tantalizing array of flavors from spicy tom yum
                soup and pad Thai noodles to aromatic green curry and mango
                sticky rice, available at bustling street markets.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Stunning Natural Beauty
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Relax on pristine beaches in Phuket, Koh Samui, and Krabi, known
                for their turquoise waters, limestone cliffs, and vibrant coral
                reefs, perfect for snorkeling and diving.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Warm Hospitality
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Experience the famous Thai hospitality, known for its warmth,
                friendliness, and genuine smiles, making visitors feel welcome
                and at home throughout their stay.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Vibrant Urban Life
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Immerse yourself in Bangkok’s bustling markets, vibrant
                nightlife, modern shopping malls, and cultural landmarks like
                the Grand Palace and Wat Arun.
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
                Thailand offers a range of accommodations from budget hostels to
                luxury resorts, providing excellent value for money and the
                opportunity to indulge in luxury without breaking the bank.
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
              Domestic Flights
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Thai Airways, Bangkok Airways, Thai Lion Air: Operate frequent
                  flights between Bangkok and major cities like Chiang Mai,
                  Phuket, and Koh Samui.
                </li>
                <br></br>
                <li>
                  Flight Duration: Typically 1-2 hours, making it convenient for
                  covering long distances quickly.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Trains
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Offers comfortable sleeper trains and express services
                  connecting major cities like Bangkok, Chiang Mai, and Surat
                  Thani (for access to islands).
                </li>
                <br></br>
                <li>Classes: From basic seats to private sleeping cabins.</li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Buses
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Operators: Private companies and government-run services like
                  The Transport Co., Ltd. (Bor Khor Sor).
                </li>
                <br></br>
                <li>
                  Destinations: Connects cities, towns, and rural areas across
                  Thailand.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Taxis and Tuk-tuks
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Bangkok: Metered taxis widely available; ensure the driver
                  uses the meter.
                </li>
                <br></br>
                <li>Apps: Grab (ride-hailing app) operates in major cities.</li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Motorcycles and Scooters
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Available in tourist areas and cities; ensure you have a valid
                  license.
                </li>
                <br></br>
                <li>
                  Safety: Wear helmets and exercise caution due to local traffic
                  rules.
                </li>
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
              Hot Season (March to May)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Temperature:<br></br>
                <li>Average: 30-40°C (86-104°F)</li>
                <br></br>
                Overview:<br></br>
                <li>
                  The hot season in Thailand is characterized by high
                  temperatures and humidity levels, especially in the central
                  and northern regions.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Rainy Season (June to October)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Conditions:<br></br>
                <li>
                  The rainy season, also known as the monsoon season, brings
                  heavy rains and occasional storms, particularly in the
                  southern and central regions.
                </li>
                <br></br>
                Temperatures:<br></br>
                <li>Average: 25-35°C (77-95°F)</li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Cool Season (November to February)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Conditions:<br></br>
                <li>
                  The cool season is the most popular time to visit Thailand due
                  to pleasant temperatures and lower humidity levels.
                </li>
                <li>
                  Daytime temperatures range from 30°C to 35°C (86°F to 95°F).
                </li>
                <li>Average: 20-30°C (68-86°F)</li>
                <br></br>
                Ideal For:<br></br>
                <li>Ideal for outdoor activities and sightseeing.</li>
                <li>
                  Coastal areas enjoy warm and sunny weather, making it perfect
                  for beach vacations.
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
      <div className="container_thailand">
        <div className="inside_loaction"  data-aos="zoom-in">
          THAILAND
        </div>
      </div>
      <div className="heading_loaction">
        <div data-aos="fade-right">Attractions in Thailand</div>
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

export default Thailand;
