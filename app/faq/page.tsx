import { Metadata } from "next";
import Link from "next/link";
import { Container } from "react-bootstrap";

export const metadata: Metadata = {
  title: "FAQ",
};

const Faq = () => {
  return (
    <Container>
      <h1>Frequently Asked Questions</h1>

      <h3>
        I don't live in Canada / I recently moved to Canada / I have dual
        citizenship. Can I compete?
      </h3>
      <p>
        To compete in Canadian Championship divisions, you must have lived in
        Canada for at least one year. Otherwise, you can only compete in
        International or Junior division.
      </p>

      <p>
        If you have dual citizenships, please keep{" "}
        <Link href="http://iyyf.org/rules/seeding-rule/" target="_blank">
          IYYF's seeding rules
        </Link>{" "}
        in mind when competing in another national contest. International and
        Junior divisions are <strong>not</strong> championship divisions.
      </p>

      <p>
        If you have any questions about your eligibility, please{" "}
        <Link href="mailto:jchoi4524@gmail.com">contact the organizer</Link>{" "}
        directly.
      </p>

      <h3>Are there age categories?</h3>
      <p>
        There are no age categories in Championship or International divisions,
        in which everyone competes against each other. Children aged 13 or
        younger may enter Junior division. See the{" "}
        <Link href="format.html">format</Link> page for more details.
      </p>

      <h3>
        I am entering Championship 1A division. When I upload music, what are
        "prelim" and "final"? Do I need to upload to both?
      </h3>
      <p>
        The 1A Championship division is typically so popular (and competitive!)
        that a preliminary round is needed to select only the top contestants to
        advance to the final round. This is why all 1A contestants (except
        seeds) should prepare to perform freestyles and upload music for both
        preliminary and final rounds.
      </p>
      <p>
        However, if there are too few contestants in the division (typical of
        Open division), then everyone will automatically enter the final round.
        If this happens, it will be announced shortly after the registration
        deadline.
      </p>

      <h3>What are seeds?</h3>
      <p>
        Seeds are contestants who have done well in past competitions and
        deserve to enter final round(s) without having to advance through
        preliminary round(s), if applicable.
      </p>

      <ul>
        <li>
          For Canadian Regionals, seeds are the first place of the last time
          that contest was held.
        </li>

        <li>
          For Canadian Nationals, seeds are the top 3 places of the preceding
          regional contests, as well as the defending National Champion.
        </li>

        <li>
          For World YoYo Contest, seeds are determined by the International
          Yo-Yo Federation's{" "}
          <Link href="https://iyyf.org/rules/seeding-rule/" target="_blank">
            seeding rules
          </Link>
          .
        </li>
      </ul>
    </Container>
  );
};

export default Faq;
