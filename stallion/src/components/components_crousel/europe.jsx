import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "flowbite-react";
import Footer from "../footer";
import { Card } from "flowbite-react";
import { Accordion } from "flowbite-react";

const Europe = () => {
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
            imgSrc="pexels-enric-cruz-lopez-6642509.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Paris, France
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              Paris, often called the "City of Light," is renowned for its art,
              culture, and iconic landmarks. The city’s romantic ambiance and
              rich history make it a favorite among travelers.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-frank-zienert-110873-342113.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rome, Italy
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Rome, the "Eternal City," is a living museum with its ancient
              ruins, Renaissance art, and vibrant street life. It seamlessly
              blends history with modernity.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-spolyakov-16762186.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Barcelona, Spain
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Barcelona is known for its unique blend of modernist and Gothic
              architecture, vibrant cultural scene, and beautiful Mediterranean
              beaches.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-jean-carlo-emer-1499369-2901481.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Amsterdam, Netherlands
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Amsterdam is famous for its picturesque canals, historic
              buildings, and rich artistic heritage. The city’s laid-back
              atmosphere and vibrant nightlife are also major draws.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-mario-cuadros-1166886-2760519.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Santorini, Greece
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Santorini is a stunning island known for its whitewashed
              buildings, blue-domed churches, and breathtaking sunsets. It
              offers a perfect blend of relaxation and scenic beauty.
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
            Best Time: April to June and September to November
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                
                <li>
                Spring (April to June): Mild weather, blooming gardens, and fewer tourists make spring an ideal time to explore Paris.
                </li>
                <br></br>
                <li>
                Autumn (September to November): Comfortable temperatures and beautiful fall foliage create a romantic ambiance with less crowded attractions.
                </li>
                
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Peak Season: July and August
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                
                <li>
                Weather: Warm and sunny but can be crowded and more expensive.
                </li>
                
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Off-Peak Season: December to February
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                
                <li>
                Weather: Cold and less touristy, but ideal for enjoying winter festivals and indoor attractions.
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
                Charles de Gaulle Airport (CDG): The main international airport, located about 25 km northeast of the city center. It serves numerous international and domestic flights.
                </li>
                <br></br>
                <li>
                Leonardo da Vinci-Fiumicino Airport (FCO): The main international airport, about 30 km southwest of the city center.
                </li>
                <br></br>
                <li>
                Barcelona-El Prat Airport (BCN): The main international airport, about 12 km southwest of the city center.
                </li>
                <br></br>
                <li>
                Amsterdam Schiphol Airport (AMS): The main international airport, located about 17 km southwest of the city center.
                </li>
                <br></br>
                <li>
                Santorini (Thira) National Airport (JTR): Located near the town of Kamari, about 6 km southeast of the capital, Fira. It serves both international and domestic flights, particularly during the tourist season.
                </li>
                <br></br>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              By Bus
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                
                <li>
                International and domestic buses operated by companies like FlixBus and Eurolines connect Paris with other European cities.
                </li>
                
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              By Train
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                
                <li>
                Gare du Nord: For Eurostar services from London and Thalys services from Belgium, the Netherlands, and Germany.
                </li>
                <br></br>
                <li>
                Roma Termini: The main railway station, connecting Rome with major cities across Italy and Europe via high-speed trains like Trenitalia and Italo.
                </li>
                <br></br>
                <li>
                Barcelona Sants: The main railway station, with high-speed AVE trains connecting to Madrid, France, and other Spanish cities.
                </li>
                <br></br>
                <li>
                Amsterdam Centraal: The main railway station, with international services from Belgium, France, Germany, and the UK via Thalys, Eurostar, and ICE trains.
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
              Romantic Ambiance
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Known as the "City of Love," Paris offers romantic experiences such as Seine River cruises, strolls through Montmartre, and evening views from the Eiffel Tower.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Historical Significance
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Rome is a living museum with ancient ruins like the Colosseum, Roman Forum, and Pantheon, showcasing the grandeur of the Roman Empire.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Beach and Nightlife
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Barcelona’s Mediterranean beaches offer relaxation and water sports, while its nightlife scene includes everything from trendy bars to traditional flamenco shows.

              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
             Rich Artistic Heritage
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              The city is home to world-class museums such as the Rijksmuseum, Van Gogh Museum, and Anne Frank House, showcasing Dutch art and history.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Relaxation and Luxury
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              The island offers luxurious accommodations, relaxing beach resorts, and world-class dining, perfect for a romantic getaway or a rejuvenating vacation.
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
              Public Transport
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                Metro: The Paris Metro is an extensive and efficient subway system with 16 lines covering the entire city.
                </li>
                <br></br>
                <li>
                Buses: Paris has a comprehensive bus network, useful for routes not covered by the metro.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Tickets and Passes
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                Single Tickets: Valid for metro, RER (within Paris), buses, and trams.
                </li>
                <br></br>
                <li>
                Navigo Pass: Weekly or monthly pass offering unlimited travel on all public transport.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Bikes and Scooters
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                Vélib': Public bike-sharing system with numerous stations around the city.
                </li>
                <br></br>
                <li>
                E-scooters: Various rental options available, including Lime and Bird.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Taxis and Ride-Sharing
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <li>
                Taxis: Official taxis are white with a “TAXI” sign, and can be hailed on the street or found at stands.
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
                Temperature: 10-20°C (50-68°F)
                </li>
                <br></br>
                <li>
                Description: Mild and gradually warming, with blooming flowers and occasional rain showers. A pleasant time for outdoor activities.
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
                Conditions:<br></br>
                <li>
                Temperature: 15-25°C (59-77°F)
                </li><br></br>
                <li>
                Description: Warm and sunny, with longer daylight hours. Can be crowded with tourists. Occasional heatwaves may push temperatures higher.
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
               
                <li>Temperature: 10-18°C (50-64°F)</li>
                <br></br>
                <li> Description: Mild and cooling, with beautiful fall foliage. Rain becomes more frequent.5°F).
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
                
                <li>Temperature: 3-10°C (37-50°F)</li>
                <br></br>
                <li> Description: Cold and damp, with occasional frosty days. Snow is rare but possible. Ideal for enjoying indoor attractions and festive events.
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
      <div className="container_europe">
        <div className="inside_loaction" data-aos="zoom-in">
          EUROPE
        </div>
      </div>
      <div className="heading_loaction">
        <div data-aos="fade-right">Attractions in Europe</div>
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

export default Europe;
