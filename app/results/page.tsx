import { Metadata } from "next";
import { Image } from "react-bootstrap";

export const metadata: Metadata = {
  title: "Results",
};

const Results = () => {
  return (
    <>
      <h1>Results - 1A division Finals</h1>
      <p>i win 😎</p>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/2025/result_files/results_1Afinal.png`}
        width="800px"
      />

      <h1>Results - Open division</h1>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/2025/result_files/results_open.png`}
        width="800px"
      />

      <h1>Results - Junior division</h1>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/2025/result_files/results_junior.png`}
        width="400px"
      />

      <h1>Results - International division</h1>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/2025/result_files/results_international.png`}
        width="800px"
      />

      <h1>Results - 1A division Preliminaries</h1>
      <p>Top 10 to advance to finals</p>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/2025/result_files/results_1Aprelim.png`}
        width="800px"
      />
    </>
  );
};

export default Results;
