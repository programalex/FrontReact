import ServersList from "../components/Servers/ServersList";
import {StyledContainerMainBox} from "../styles/Tables/GeneralTablesStyles"

const DevicesPage = () => {
  return (
    <StyledContainerMainBox>
      <ServersList/>
    </StyledContainerMainBox>
  );
};

export default DevicesPage;