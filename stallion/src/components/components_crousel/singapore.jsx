import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "flowbite-react";
import Footer from "../footer";
import { Card } from "flowbite-react";
import { Accordion } from "flowbite-react";

const Singapore = () => {
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
            imgSrc="pexels-anytiffng-2434270.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Marina Bay Sands
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              Marina Bay Sands is an iconic integrated resort featuring a luxury
              hotel, an infinity pool with panoramic views of the city, a
              world-class casino, and The Shoppes at Marina Bay Sands. The
              stunning architectural design and the nightly Spectra light and
              water show make it a must-visit destination.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-jonastogo-2693155.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Gardens by the Bay
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Gardens by the Bay is a futuristic park spanning 101 hectares,
              known for its Supertree Grove, Cloud Forest, and Flower Dome. The
              park’s unique blend of nature and technology showcases a diverse
              range of flora, making it a beautiful and educational experience
              for visitors of all ages.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-alexey-komissarov-85164430-9022610.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sentosa Island
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Sentosa Island is a premier resort destination home to Universal
              Studios Singapore, S.E.A. Aquarium, and Adventure Cove Waterpark.
              With its sandy beaches, luxurious resorts, and diverse
              entertainment options, Sentosa offers a perfect getaway for
              families, adventure seekers, and relaxation enthusiasts alike.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-todd-trapani-488382-1382156.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Singapore Zoo
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              The Singapore Zoo is renowned for its open-concept design, housing
              over 2,800 animals across 300 species in naturalistic habitats.
              Visitors can enjoy immersive experiences such as the Night Safari,
              River Safari, and Jurong Bird Park, making it one of the best
              wildlife parks in the world.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-jose-barbosa-3642975-8756213.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Orchard Road
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Orchard Road is Singapore’s premier shopping and entertainment
              district, featuring upscale malls, designer boutiques, and a
              variety of dining options. This vibrant boulevard is the perfect
              destination for shopping enthusiasts and offers a dynamic mix of
              retail, entertainment, and cultural experiences in the heart of
              the city.
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
              Northeast Monsoon Season (December to early March)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Weather: Frequent showers, especially in the afternoons and
                  evenings. However, the rains are usually short-lived.
                </li>
                <br></br>
                <li>
                  Advantages: The cooler temperatures and festive atmosphere
                  during Christmas and Chinese New Year make it a lively time to
                  visit.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Pre-Southwest Monsoon Season (late March to May)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Weather: Warmer with occasional showers. This period is drier
                  compared to the Northeast Monsoon season.
                </li>
                <br></br>
                <li>
                  Advantages: Ideal for outdoor activities and exploring the
                  city’s attractions without the heavy rains.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Southwest Monsoon Season (June to September)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Weather: Slightly wetter with regular rainfall and
                  thunderstorms, particularly in the late morning and early
                  afternoon
                </li>
                <br></br>
                <li>
                  Advantages: Fewer tourists and lower accommodation rates. The
                  Great Singapore Sale takes place, offering great shopping
                  deals.
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
              By Air
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Singapore’s Changi Airport (SIN) is one of the world’s busiest
                  and best airports, offering extensive international
                  connections.
                </li>
                <br></br>
                <li>
                  Served by major international airlines such as Singapore
                  Airlines, Emirates, Qatar Airways, British Airways, and many
                  others.
                </li>
                <br></br>
                <li>
                  Terminals: Four terminals (T1, T2, T3, and Jewel) providing a
                  wide range of amenities, shopping, and dining options.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              By Land
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Buses: Numerous bus operators connect Singapore with cities in
                  Malaysia, such as Kuala Lumpur, Malacca, and Johor Bahru.
                  Popular companies include Aeroline, Transtar, and Causeway
                  Link.
                </li>
                <br></br>
                <li>
                  Train: The KTM Shuttle Tebrau runs between Johor Bahru and
                  Woodlands Train Checkpoint in Singapore. There are also
                  long-distance train services from Kuala Lumpur to Johor Bahru,
                  with onward bus connections.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              By Sea
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Indonesia: Ferries operate between Singapore and nearby
                  Indonesian islands such as Batam and Bintan. Operators include
                  Bintan Resort Ferries, Batam Fast, and Sindo Ferry.
                </li>
                <br></br>
                <li>
                  Malaysia: Ferry services are available from Tanjung Belungkor
                  in Johor to Changi Ferry Terminal in Singapore.
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
              Vibrant Cultural Diversity
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Singapore’s multicultural heritage is evident in its diverse
                neighborhoods, such as Chinatown, Little India, and Kampong
                Glam. Each area offers a unique glimpse into the traditions,
                cuisine, and architecture of different ethnic groups.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              World-Class Attractions
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                This iconic resort features an infinity pool with stunning
                views, a luxury hotel, a world-class casino, and the impressive
                Marina Bay Sands SkyPark.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Culinary Paradise
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Singapore is famous for its hawker centers, where you can enjoy
                a wide variety of delicious and affordable local dishes such as
                Hainanese chicken rice, laksa, satay, and chili crab.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Clean and Safe Environment
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Singapore is renowned for its cleanliness, with strict laws
                ensuring well-maintained public spaces and efficient waste
                management.It consistently ranks as one of the safest cities in
                the world, making it an ideal destination for solo travelers and
                families alike.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Modern Infrastructure
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Despite its urban landscape, Singapore is home to numerous parks
                and green spaces such as the Singapore Botanic Gardens, a UNESCO
                World Heritage Site, and East Coast Park, providing a refreshing
                contrast to the city’s skyscrapers.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Shopping Haven
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                This famous shopping boulevard is lined with upscale malls,
                designer boutiques, and a variety of dining options, catering to
                all shopping preferences. calendar.Explore vibrant local markets
                like Bugis Street and Haji Lane for unique fashion, souvenirs,
                and eclectic finds.
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
              Mass Rapid Transit (MRT)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  The MRT is the backbone of Singapore’s public transport
                  network, offering a fast and convenient way to travel across
                  the city.
                </li>
                <br></br>
                <li>
                  The network covers key areas, including the central business
                  district, shopping districts, residential areas, and Changi
                  Airport.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Public Buses
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Buses complement the MRT network, reaching areas not served by
                  trains.
                </li>
                <br></br>
                <li>
                  Extensive routes covering all parts of Singapore, including
                  remote neighborhoods and popular attractions.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Taxis
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Taxis are readily available and can be hailed on the street,
                  at taxi stands, or booked via phone apps.
                </li>
                <br></br>
                <li>
                  Comfortable and convenient, especially for traveling to places
                  not well-served by public transport or when carrying heavy
                  luggage.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Bicycles and E-Scooters
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Bicycles and e-scooters are becoming popular for
                  short-distance travel and exploring parks and waterfront
                  areas.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              River and Harbor Ferries
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  River taxis and harbor cruises offer scenic views of the city
                  and are an alternative way to travel along the Singapore River
                  and Marina Bay.
                </li>
                <br></br>
                <li>
                  Clarke Quay to Marina Bay, offering a unique perspective of
                  the skyline and waterfront attractions.
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
              Overall Climate
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Temperature:<br></br>
                <li>
                Average Daily Temperature: 26-30°C (79-86°F)
                </li>
                <br></br>
                <li>
                Daytime Highs: Typically around 31-33°C (88-91°F)
                </li>
                <br></br>
                
                <li>
                Nighttime Lows: Usually about 24-26°C (75-79°F)
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Humidity
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                
                <li>
                Average Humidity: 70-90%, often making the temperature feel warmer.
                </li>
               
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Rainfall
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
             
                <li>Annual Rainfall: Approximately 2,340 mm (92 inches)</li>
                <li>
                Rainy Days: Rainfall is common, with around 167 rainy days per year. Rain can be heavy but is usually brief, often occurring in the late afternoon.
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
      <div className="container_singapore">
        <div className="inside_loaction" data-aos="zoom-in">
          SINGAPORE
        </div>
      </div>
      <div className="heading_loaction">
        <div data-aos="fade-right">Attractions in Singapore</div>
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

export default Singapore;
