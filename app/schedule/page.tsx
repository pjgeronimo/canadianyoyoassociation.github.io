import { Metadata } from "next";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const metadata: Metadata = {
  title: "Schedule",
};

const Schedule = () => {
  return (
    <>
      <h1>Schedule</h1>

      <div className="d-flex" style={{ justifyContent: "center" }}>
        <p>Schedule coming soon - Stay Tuned!</p>
      </div>

      {
        // <p>
        //   Canadian Nationals is a one-day event starting at 10am and ending at
        //   5:30pm. The event is open to the public and{" "}
        //   <strong>FREE to attend</strong> for spectators, so bring your friends
        //   and family!
        // </p>
        // {/*
        // <p>
        //   See the <Link href="results">results</Link> page for the order of
        //   freestyle performances.
        // </p>
        // */}
        // <Table className="my-4" striped bordered hover>
        //   <tbody>
        //     <tr>
        //       <td>10:00</td>
        //       <td>Doors Open</td>
        //     </tr>
        //     <tr>
        //       <td>11:00</td>
        //       <td>Championship 1A division - Preliminaries</td>
        //     </tr>
        //     <tr>
        //       <td>12:00</td>
        //       <td>Lunch</td>
        //     </tr>
        //     <tr>
        //       <td>13:30</td>
        //       <td>Junior division</td>
        //     </tr>
        //     <tr>
        //       <td>14:00</td>
        //       <td>Championship Open and International divisions</td>
        //     </tr>
        //     <tr>
        //       <td>15:00</td>
        //       <td>Championship 1A division - Finals</td>
        //     </tr>
        //     <tr>
        //       <td>17:00</td>
        //       <td>Results and awards</td>
        //     </tr>
        //   </tbody>
        // </Table>
      }

      <div className="d-flex" style={{ justifyContent: "center" }}>
        <p>
          To receive the latest updates, make sure to follow CANYA on social
          media
        </p>
      </div>

      <div className="d-flex" style={{ justifyContent: "center" }}>
        <Button
          href="https://linktr.ee/canadianyoyoassociation"
          target="_blank"
        >
          @canadianyoyoassociation
        </Button>
      </div>
    </>
  );
};

export default Schedule;
