import Container from "react-bootstrap/Container";
import Link from "next/link";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

const Rules = () => {
  return (
    <>
      <Container>
        <h1>Canadian Championship Division Freestyles</h1>
        <p>
          Canadian residents of all ages and skill levels are eligible to
          compete in the Canadian Championship Divisions, which are the 1A and
          Open divisions. Please see the <Link href="/faq">FAQ</Link> to check
          your eligibility to compete in a Canadian Championship Division.
        </p>
        <p>
          Each contestant will perform a freestyle routine choreographed to
          music up to the for the following lengths in each division/round:
        </p>
        <Table>
          <thead>
            <tr>
              <th>Division</th>
              <th>Freestyle Length</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1A Preliminary</td>
              <td>1 Minute</td>
            </tr>
            <tr>
              <td>1A Final</td>
              <td>3 Minutes</td>
            </tr>
            <tr>
              <td>Open</td>
              <td>3 Minutes</td>
            </tr>
          </tbody>
        </Table>
        <ul>
          <li>
            Each routine will be scored by a panel of judges according to the
            critera defined by IYYF from the{" "}
            <Link href="https://iyyf.org/wyyc2025-rules/">
              2025 World Yo-yo Contest
            </Link>
            .
          </li>
          <li>
            In the Open Division, each contestant must choose only ONE of the
            following styles:
            <ul>
              <li>2A: Looping trick freestyle with two responsive yo-yos</li>
              <li>3A: String Trick Freestyle with two long-spinning yo-yos</li>
              <li>4A: Freestyle with off string yo-yo(s)</li>
              <li>5A: Freestyle with counter-weight yo-yo(s)</li>
            </ul>
          </li>
          <li>
            Open Division contestants will choose their style during
            registration. Any tricks that are performed from a style other than
            the one chosen will not be scored.
          </li>
        </ul>
        <Alert>
          <p>Contestants must upload their own music for their freestyle(s).</p>
          <p>
            Music choices MUST be appropriate for all audiences. Any form of
            inappropriate music is subject to disqualification.
          </p>
          <p>
            Please see the{" "}
            <Link href="https://iyyf.org/wyyc2025-rules/2025-freestyle-music/">
              IYYF's Guidelines for Music Choice
            </Link>{" "}
            to determine if your music is appropriate.
          </p>
        </Alert>
      </Container>
    </>
  );
};

export default Rules;
