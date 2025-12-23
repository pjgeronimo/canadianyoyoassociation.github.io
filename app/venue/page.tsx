import { Container } from "react-bootstrap";

const Venue = () => {
  return (
    <Container>
      <p>
        <strong>Updated as of May 15</strong>
      </p>
      <h1>
        <div>Located at</div>Central Library of Calgary
      </h1>

      <p>
        800 3 St SE, Calgary, AB, T2G 2E7
        <br />
        <a
          href="https://calgarylibrary.ca/read-learn-and-explore/central-library/"
          target="_blank"
        >
          Central Library Website Link
        </a>
      </p>

      <div>
        <a
          href="https://calgarylibrary.ca/read-learn-and-explore/central-library/"
          target="_blank"
        >
          <img src="/2024/CL.jpg" alt="Central Library Calgary" width="800" />
        </a>
        <p>Image Source: Central Library</p>
      </div>
      <p>
        2024 Canadian Nationals will be at Central Library. The venue is known
        for its aesthetics and ease of access thanks to its location nearby a
        city's light-rail train station. The event will be held in the{" "}
        <strong>Performance Hall</strong>
        located on the first floor of the library.
      </p>

      <p>
        See their{" "}
        <a
          href="https://calgarylibrary.ca/your-library/locations/cent/"
          target="_blank"
        >
          HOURS & LOCATION
        </a>{" "}
        page for the address and directions.
      </p>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1254.2028367704256!2d-114.05646154578477!3d51.04559677713375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170003cb69fe3%3A0x65642e5fb9371572!2sCentral%20Library!5e0!3m2!1sen!2sus!4v1710486724626!5m2!1sen!2sus"
          width="800"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <h1>Patricia A. Whelan Performance Hall</h1>
      <p>
        Past the main entrance, the performance hall will be on your left-hand
        side. As you walk into the performance hall, you will see the audience
        seats that are placed in a slope and look down at the stage. The
        performance hall is equipped with over 300 seats and has enough spaces
        for tables with vendors and products.
      </p>
      <div>
        <img src="/2024/PerfHall_sm.jpg" alt="Performance Hall" />
        <p>Image Source: Central Library</p>
      </div>
      <p>
        Our walkthrough video shows how you can get to the performance hall from
        the City Hall station.
      </p>

      <video width="800" height="450" controls muted>
        <source src="https://i.imgur.com/wSI96Ma.mp4" type="video/mp4" />
      </video>

      <h1>Parking</h1>
      <p>
        Street parking is available near the library and will be free on the
        contest day. While there are a couple of parking lots nearby, they allow
        parking for 2 hours maximum for $4 at a time.
      </p>
      <p>
        <strong>Street parking is recommended.</strong>
      </p>
      <p>
        All blue circles indicate the street parking locations. Please click on
        the image or the link below to open the interactive web map where you
        can click and check the detail for each street parking lane.
      </p>
      <a href="https://arcg.is/8DLaX" target="_blank">
        <img src="/2024/parking.png" alt="Parking Illustration" width="800" />
      </a>
      <p>
        <a href="https://arcg.is/8DLaX" target="_blank">
          Calgary On-street Parking Map
        </a>
      </p>

      <h1>Weather Forecast</h1>
      <p>
        As of May 15th, it is expected that Calgary will have a temperature
        range that is fairly low, swinging between 12C (54F) and as low as 2C
        (36F) over the weekend. Some layers and a jacket will be recommended.
        Please click on the image or the link below to open the weather forecast
        page.
      </p>
      <a
        href="https://weather.gc.ca/city/pages/ab-52_metric_e.html"
        target="_blank"
      >
        <img src="/2024/weather.png" alt="Weather Forecast" width="800" />
      </a>
      <p>
        <a
          href="https://weather.gc.ca/city/pages/ab-52_metric_e.html"
          target="_blank"
        >
          Calgary Weather Forecast provided by Government of Canada
        </a>
      </p>
    </Container>
  );
};

export default Venue;
