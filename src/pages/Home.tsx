import ChartDashboard from "../components/Dashboard/ChartDashboard";
import {StyledTypography, StyledContainer, StyledContainerBox} from "../styles/Dashboard/DashBoardStyles";

const Home = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = ["2am", "4am", "5am", "6am", "7am", "8am", "9am", "10am"];

  const data1 = {
    labels,
    datasets: [
      {
        data: [100, 2000, 759, 300, 700, 900, 1200, 390, 812],
        borderColor: "#fd6a21",
        backgroundColor: "red",
      },
    ],
  };
  const data2 = {
    labels,
    datasets: [
      {
        data: [200, 200, 559, 600, 200, 200, 200, 290, 912],
        borderColor: "#42129B",
        backgroundColor: "#42129B",
      },
    ],
  };

  return (
    <StyledContainer>
      <StyledContainerBox>
        <StyledTypography>Telemetry messages sent</StyledTypography>
        <ChartDashboard data={data1} options={options} />
      </StyledContainerBox>
      <StyledContainerBox>
        <StyledTypography>Total number of messages used</StyledTypography>
        <ChartDashboard data={data2} options={options} />
      </StyledContainerBox>
    </StyledContainer>
  );
};

export default Home;
