import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "flowbite-react";
import Footer from "../footer";
import { Card } from "flowbite-react";
import { Accordion } from "flowbite-react";

const Japan = () => {
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
            imgSrc="pexels-apasaric-2385210.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tokyo
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              Tokyo, Japan's bustling capital, blends modernity with tradition.
              Visit the iconic Shibuya Crossing, historic Senso-ji Temple in
              Asakusa, and the innovative Mori Art Museum in Roppongi Hills.
              Enjoy diverse culinary delights, vibrant nightlife, and serene
              gardens like Shinjuku Gyoen, offering a glimpse into Japan's rich
              cultural tapestry.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-eva-bronzini-5769586.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Kyoto
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Kyoto, renowned for its classical Buddhist temples, as well as
              imperial palaces, gardens, and traditional wooden houses.
              Highlights include the serene Kinkaku-ji (Golden Pavilion), the
              historic Gion district known for geisha culture, and Fushimi Inari
              Taisha's thousands of vermillion torii gates. Kyoto embodies
              Japan's ancient elegance and cultural heritage.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-ruiz-2450697.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Osaka
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Osaka, Japan's culinary capital, boasts vibrant street food scenes
              in Dotonbori and the historic Osaka Castle. Visit Universal
              Studios Japan for thrilling rides, experience the modern Umeda Sky
              Building, and explore traditional theaters in the Shinsekai
              district. Osaka blends modernity with a rich cultural history,
              making it a dynamic destination.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-timo-volz-837240-1717877.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hiroshima
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Hiroshima, known for its tragic history and inspiring resilience,
              hosts the Peace Memorial Park and Museum, dedicated to promoting
              peace. Visit the iconic Itsukushima Shrine on Miyajima Island,
              known for its floating torii gate. Hiroshima offers a poignant
              reflection on history, culture, and the enduring spirit of
              reconciliation.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-wentorini-1180393460-27026356.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Nara
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Nara, Japan's ancient capital, is home to historic temples like
              Todai-ji, housing a colossal Buddha statue, and Kasuga Taisha with
              its lantern-lit pathways. Encounter friendly deer in Nara Park,
              symbolizing peace and prosperity. Nara preserves Japan's early
              imperial history and offers a serene retreat into nature and
              spiritual contemplation.
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
              Spring (March to May)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Cherry Blossoms: March to April is famous for cherry blossoms
                  (sakura) blooming across Japan, creating stunning landscapes.
                  Tokyo, Kyoto, and Hiroshima are popular destinations during
                  this period.
                </li>
                <br></br>
                <li>
                  Mild Weather: Pleasant temperatures, making it ideal for
                  outdoor activities and sightseeing.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Summer (June to August)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Festivals: Experience vibrant festivals like Gion Matsuri in
                  Kyoto and Tanabata Matsuri in Sendai. Summer also brings
                  fireworks displays (hanabi) across the country.
                </li>
                <br></br>
                <li>
                  Warm and Humid: High temperatures and humidity, especially in
                  urban areas. Hokkaido offers cooler temperatures for relief.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Autumn (September to November)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Foliage: Enjoy vibrant autumn foliage (koyo) in October and
                  November, particularly in Kyoto, Nikko, and the Japanese Alps.
                </li>
                <br></br>
                <li>
                  Mild Temperatures: Cooler weather after summer, ideal for
                  exploring gardens, temples, and hiking trails.
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
                  Major Airports: Tokyo (Narita and Haneda), Osaka (Kansai and
                  Itami), Nagoya (Chubu Centrair), and Fukuoka (Fukuoka
                  Airport).
                </li>
                <br></br>
                <li>
                  International Airlines: Direct flights from major cities
                  worldwide by airlines such as Japan Airlines (JAL), All Nippon
                  Airways (ANA), Delta Air Lines, Singapore Airlines, and
                  Emirates.
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
                  China and South Korea: Ferry services operate between China
                  (Shanghai, Qingdao) and South Korea (Busan) to Japan (Fukuoka,
                  Osaka).
                </li>
                <br></br>
                <li>
                  Russia: Ferry services connect Vladivostok and Sakaiminato,
                  Japan.
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
                  China: High-speed trains connect Beijing and Shanghai to
                  Fukuoka via the Beijing-Tianjin-Hebei, Shanghai, and
                  Tianjin-Hebei lines.
                </li>
                <br></br>
                <li>
                  South Korea: Ferries connect Busan to Fukuoka and Shimonoseki
                  to Busan.
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
                Explore Kyoto's ancient temples like Kinkaku-ji (Golden
                Pavilion) and Nara’s Todai-ji with its Great Buddha. Discover
                iconic castles such as Himeji Castle and Matsumoto Castle,
                showcasing Japan's architectural prowess and historical
                significance.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Scenic Landscapes and Nature
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Witness the breathtaking beauty of cherry blossoms (sakura) in
                spring and vibrant autumn foliage (koyo) in fall, transforming
                landscapes into stunning palettes of pink and red across parks,
                gardens, and mountains.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Culinary Delights
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Indulge in sushi, sashimi, tempura, ramen, and kaiseki
                (traditional multi-course meals), showcasing fresh ingredients,
                meticulous preparation, and a harmonious blend of flavors.
                Explore local food markets (e.g., Tsukiji Market) and street
                food scenes for authentic culinary experiences.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Modern Innovation and Technology
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Visit Tokyo, a hub of futuristic architecture (e.g., Tokyo
                Skytree, Shibuya Crossing), advanced technology (e.g.,
                Akihabara’s electronics district), and innovative pop culture
                trends (e.g., anime, manga), showcasing Japan’s dynamic urban
                landscape and creative energy.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Tradition and Hospitality
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Experience omotenashi, Japan’s concept of exceptional
                hospitality, through attentive service, cultural exchanges, and
                respectful interactions with locals, offering a glimpse into
                Japan’s genuine warmth and traditional values..
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
              Trains
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Speed and Comfort: Travel between major cities like Tokyo,
                  Kyoto, Osaka, and Hiroshima swiftly and comfortably.
                </li>
                <br></br>
                <li>
                  JR Pass: Cost-effective for tourists; offers unlimited travel
                  on JR lines, including some Shinkansen routes.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Subways and Metro
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Extensive Networks: Efficiently connect neighborhoods,
                  business districts, and tourist attractions.
                </li>
                <br></br>
                <li>
                  IC Cards: Use Suica (Tokyo), Pasmo (Tokyo), and ICOCA (Osaka)
                  for seamless fare payment across networks.
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
                  City and Rural Areas: Connect neighborhoods and regions not
                  covered by trains.
                </li>
                <br></br>
                <li>
                  Highway Buses: Affordable options for long-distance travel
                  between cities and regions.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Renting a Car
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Driving: Ideal for exploring countryside destinations, scenic
                  routes, and national parks.
                </li>
                <br></br>
                <li>
                  International Driving Permit: Required if your license is not
                  in Japanese.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Flights
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Regional Connectivity: Access remote islands and distant
                  cities efficiently.
                </li>
                <br></br>
                <li>
                  Airports: Narita, Haneda (Tokyo), Kansai (Osaka), Chubu
                  Centrair (Nagoya), and Fukuoka Airport (Fukuoka) are major
                  hubs.
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
              Spring (March to May)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Temperature:<br></br>
                <br></br>
                <li>Temperature: Mild to warm, averaging 10-20°C (50-68°F).</li>
                <br></br>
                <li>
                  Rainfall: Occasional showers, especially in April and May.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Summer (June to August)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>Temperature: Warm to hot, averaging 25-35°C (77-95°F).</li>
                <br></br>
                <li>
                  Rainfall: Rainy season (tsuyu) in June and July, followed by
                  occasional typhoons from August to September.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Autumn (September to November)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>Temperature: Mild, averaging 15-25°C (59-77°F)</li>
                <br></br>
                <li>Rainfall: Generally dry with occasional showers.</li>
                <br></br>
                <li>
                  Autumn Foliage: October to November, particularly vibrant in
                  Kyoto, Nikko, and the Japanese
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Winter (December to February)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                  Temperature: Cold, varying from 0-10°C (32-50°F) in most
                  regions.
                </li>
                <br></br>
                <li>
                  Snowfall: Common in northern Japan (Hokkaido, Tohoku, and the
                  Japan Alps).
                </li>
                <br></br>
                <li>
                  Ski Season: December to March, popular for skiing and
                  snowboarding.
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
      <div className="container_japan">
        <div className="inside_loaction" data-aos="zoom-in">
          JAPAN
        </div>
      </div>
      <div className="heading_loaction">
        <div data-aos="fade-right">Attractions in Japan</div>
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

export default Japan;
