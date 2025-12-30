import { Metadata } from "next";
import { Container } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Results",
};

const Results = () => {
  return (
    <Container>
      <h1>Results - 1A division Finals</h1>
      <p>i win 😎</p>
      <img src="/2025/result_files/results_1Afinal.png" width="800px" />

      <h1>Results - Open division</h1>
      <img src="/2025/result_files/results_open.png" width="800px" />

      <h1>Results - Junior division</h1>
      <img src="/2025/result_files/results_junior.png" width="400px" />

      <h1>Results - International division</h1>
      <img src="/2025/result_files/results_international.png" width="800px" />

      <h1>Results - 1A division Preliminaries</h1>
      <p>Top 10 to advance to finals</p>
      <img src="/2025/result_files/results_1Aprelim.png" width="800px" />
    </Container>
  );
};

export default Results;
