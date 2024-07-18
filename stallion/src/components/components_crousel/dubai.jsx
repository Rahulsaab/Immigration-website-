import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "flowbite-react";
import Footer from "../footer";
import { Card } from "flowbite-react";
import { Accordion } from "flowbite-react";

const Dubai = () => {
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
            imgSrc="pexels-alexazabache-3214991.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Burj Khalifa
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              The Burj Khalifa, standing at an astounding 828 meters, is the
              tallest building in the world and a symbol of Dubai's futuristic
              vision. Visitors can take an elevator ride to the decks on the
              124th and 148th floors for panoramic views of the city. The
              surrounding area, Downtown Dubai, features a vibrant atmosphere
              with the Dubai Fountain, Dubai Mall, and various dining options.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-fatma-al-asmawi-516419341-16387248.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              The Dubai Mall
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              As one of the largest shopping malls globally, The Dubai Mall is
              more than just a shopping destination. It offers a variety of
              entertainment options, including the Dubai Aquarium & Underwater
              Zoo, an Olympic-sized ice rink, and the VR Park. With over 1,200
              retail stores, countless dining establishments, and a wide range
              of entertainment facilities, it’s a paradise for shopaholics and
              families alike.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-alexey-komissarov-85164430-19407884.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Palm Jumeirah
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Palm Jumeirah is an artificial island shaped like a palm tree,
              known for its luxurious resorts, upscale restaurants, and stunning
              views. The island is home to the iconic Atlantis, The Palm resort,
              which features an extensive water park, The Lost Chambers
              Aquarium, and various high-end dining options. A monorail runs the
              length of the Palm, offering convenient access to its attractions.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-maxavans-5075072.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Dubai Marina
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Dubai Marina is a bustling waterfront district known for its
              impressive skyline, luxury yachts, and vibrant nightlife. The
              Marina Walk is a popular destination for leisurely strolls,
              offering a variety of restaurants, cafes, and shops. For an
              unforgettable experience, visitors can take a boat tour or a
              dinner cruise to enjoy the stunning views of the skyscrapers and
              the Arabian Gulf.
            </p>
          </Card>
        </div>
        <div className="tab-item" data-aos="fade-right">
          <Card
            className="max-w-sm"
            imgSrc="pexels-alexazabache-3848412.jpg"
            horizontal
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Dubai Creek
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Dubai Creek holds historical significance as the heart of the
              city’s trading heritage. The creek divides Dubai into two
              sections: Deira and Bur Dubai. Visitors can explore the
              traditional markets, such as the Gold Souk and Spice Souk, or take
              an abra (traditional boat) ride across the water. The Al Fahidi
              Historical Neighborhood offers a glimpse into Dubai’s past with
              its well-preserved buildings and museums.
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
              Dry Season: April to September
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The most pleasant time to visit Dubai is during the cooler
                months from November to March. During this period, the weather
                is perfect for outdoor activities and exploring the city.
                <br></br>
                <br></br>
                <li>
                  Temperature: Daytime temperatures range from 24°C to 30°C
                  (75°F to 86°F), while nighttime temperatures can drop to a
                  comfortable 14°C to 20°C (57°F to 68°F).
                </li>
                <br></br>
                <li>
                  Weather: Clear skies and low humidity make it ideal for
                  sightseeing, desert safaris, and beach activities.
                </li>
                <br></br>
                <li>
                  Events: This period is also when major events take place, such
                  as the Dubai Shopping Festival in January and February, and
                  the Dubai International Film Festival in December.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Shoulder Season: April and October
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                April and October are considered shoulder seasons in Dubai,
                offering a balance between good weather and fewer crowds.
                <br></br>
                <br></br>
                <li>
                  Temperature: Temperatures start to rise, ranging from 30°C to
                  35°C (86°F to 95°F), but are still manageable for outdoor
                  activities.
                </li>
                <br></br>
                <li>
                  Weather: While it gets warmer, it’s still bearable for
                  sightseeing and enjoying outdoor attractions.
                </li>
                <br></br>
                <li>
                  Advantages: Hotel prices and airfares are generally lower
                  compared to the peak season, making it a good time for
                  budget-conscious travelers.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Low Season: May to September
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The summer months from May to September are the hottest in
                Dubai, with extreme temperatures and high humidity.<br></br><br></br>
                <li>Temperature: Daytime temperatures can soar up to 45°C (113°F) and above, with high humidity making it feel even hotter.</li>
                <br></br>
                <li>Weather: Outdoor activities can be challenging due to the heat, but indoor attractions, malls, and hotels are well air-conditioned.
                </li>
                <br></br>
                <li>Advantages: This period sees the lowest prices for hotels and flights, as well as fewer tourists. Many indoor attractions, such as malls, aquariums, and indoor theme parks, offer a respite from the heat.</li>
                
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
              By Air: Dubai International Airport (DXB)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Dubai International Airport (DXB) is one of the busiest airports
                in the world and serves as the primary gateway to the city. It
                offers flights to and from major cities across the globe.<br></br><br></br>
                <li>International Flights: Numerous airlines, including Emirates, flydubai, and other international carriers, operate direct flights to Dubai from North America, Europe, Asia, Africa, and Australia</li><br></br>
                <li>Airport Facilities: DXB offers world-class facilities including duty-free shopping, dining options, lounges, and transportation services.</li><br></br>
                <li>Transportation to the City: From the airport, you can reach the city center via taxis, ride-sharing services, the Dubai Metro, or airport shuttles provided by hotels.</li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              By Air: Al Maktoum International Airport (DWC)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Al Maktoum International Airport (DWC), located in the southern
                part of Dubai, is another option for travelers.<br></br><br></br>
                <li>International Flights: Although smaller than DXB, it is expanding and serves several international destinations.</li><br></br>
                <li>Transportation to the City: Taxis and ride-sharing services are readily available, and a metro line is planned for future connectivity.</li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              By Sea: Dubai Cruise Terminals
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Dubai is a popular stop for many international cruise lines. The
                city has several cruise terminals, including Port Rashid, that
                cater to luxury liners.<br></br><br></br>
                <li>Cruise Arrivals: Major cruise lines operate routes that include Dubai as a port of call.</li><br></br>
                <li>Transportation from the Port: Taxis, ride-sharing services, and shuttle buses are available at the cruise terminals to take you to various parts of the city.</li>
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
              Architectural Marvels
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Dubai is home to some of the world's most iconic structures, including the Burj Khalifa, the tallest building globally, and the Burj Al Arab, known for its distinctive sail-shaped design. The city's skyline is a testament to cutting-edge architecture and engineering, making it a haven for those fascinated by urban design and innovation.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Luxurious Shopping
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Dubai is synonymous with luxury shopping. The Dubai Mall, one of the largest shopping centers in the world, offers a vast array of high-end brands, entertainment options, and dining experiences. The Mall of the Emirates, with its indoor ski resort, and the traditional Gold Souk, known for its dazzling array of gold jewelry, provide unique shopping experiences that cater to all tastes and budgets.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
             World-Class Entertainment and Leisure
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              From desert safaris and dune bashing to skiing in an indoor snow park, Dubai offers a plethora of unique experiences. The city's beaches, such as Jumeirah Beach, provide a perfect spot for relaxation and water sports. Additionally, attractions like the Dubai Aquarium, the Miracle Garden, and the Global Village offer diverse entertainment options for families and thrill-seekers alike.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Cultural Richness
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Despite its modern facade, Dubai has a deep cultural heritage. The Al Fahidi Historical Neighborhood showcases traditional Emirati architecture and offers insights into the city's past. The Dubai Museum, located in the Al Fahidi Fort, and the Sheikh Mohammed Centre for Cultural Understanding provide further opportunities to learn about the local culture and histo
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Safety and Hospitality
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Dubai is known for its safety and the warm hospitality of its residents. The city’s infrastructure and services are designed to cater to international visitors, making it a comfortable and secure destination for travelers from all over the world.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Festivals and Events
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Dubai hosts numerous festivals and events throughout the year, such as the Dubai Shopping Festival, the Dubai International Film Festival, and the Dubai Jazz Festival. These events offer unique experiences and attract international artists, performers, and visitors, adding vibrancy to the city’s social calendar.
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
              <li>Taxis: Widely available and reasonably priced. You can hail a taxi on the street or book one through apps. </li><br></br>
              <li>Ride-Sharing: Services like Uber and Careem are popular and convenient options.</li>
                
                
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Dubai Metro
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              <li>Routes: The Red and Green lines cover major parts of the city, including key tourist attractions.</li><br></br>
              <li>Tickets: You can purchase single journey tickets or a Nol card for multiple trips.</li>
                
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
              Buses and Trams
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              <li>Buses: The RTA operates an extensive network of buses that cover most parts of Dubai.</li><br></br>
              <li>Trams: The Dubai Tram connects areas like Dubai Marina and Jumeirah Beach Residence (JBR).</li>
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
              <li>Car Rentals: Available at the airport and throughout the city. An international driving permit is recommended.</li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
             Water Taxis and Ferries:
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              <li>Abras: Traditional wooden boats that operate across Dubai Creek.</li><br></br>
              <li>Water Buses: Modern boats that offer a scenic way to travel along the coastline and Dubai Marina.</li>
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
                Daytime: Typically ranges from 25°C to 40°C (77°F to 104°F)
                </li><br></br>
                <li>
                Nighttime: Generally cooler, around 14°C to 30°C (57°F to 86°F) 
                </li>
                <br></br>
                Humidity:<br></br>
                <li>
                Varies between 40-90%, higher near the coast and during the summer months.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
             Winter (November to March)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Conditions:<br></br>
                <li>The winter months are considered the best time to visit Dubai.</li>
                <li>Humidity is relatively low, making the weather pleasant for outdoor activities.</li>
              
                <br></br>
                Ideal For:<br></br>
                <li>Sightseeing </li>
                <li>Outdoor activities such as desert safaris, beach outings, and exploring cultural sites.</li>
                
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
            Spring (April to May)
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Conditions:<br></br>
                <li>Transition period with increasing temperatures.</li>
                <li>
                Daytime temperatures range from 30°C to 35°C (86°F to 95°F).
                </li>
                <li>Nights are still relatively comfortable, with temperatures between 20°C to 25°C (68°F to 77°F).</li>
                
                <br></br>
                Ideal For:<br></br>
                <li>
                Visiting indoor attractions like malls and aquariums.
                </li>
                <li>Beach activities during the early mornings or late afternoons.</li>
                
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title
              className="font-bold "
              style={{ color: "#003652" }}
            >
             Summer (June to September)

            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Conditions:<br></br>
                <li>
                The summer months in Dubai are extremely hot and humid.
                </li>
                <li>
                Daytime temperatures can soar up to 45°C (113°F) or higher.
                </li>
                <li>Nights remain warm, with temperatures rarely dropping below 30°C (86°F).</li>
                <br></br>
                Ideal For:<br></br>
                <li>
                Indoor activities in air-conditioned environments such as shopping malls, indoor theme parks, and cultural centers.
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
      <div className="container_dubai">
        <div className="inside_loaction" data-aos="zoom-in">
          DUBAI
        </div>
      </div>
      <div className="heading_loaction">
        <div data-aos="fade-right">Attractions in Dubai</div>
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

export default Dubai;
