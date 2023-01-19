import AuditLogsList from "../components/AuditLogs/AuditLogsList";
import {StyledContainerMainBox} from "../styles/Tables/GeneralTablesStyles"

const AuditLogs = () => {
  return (
    <StyledContainerMainBox>
      <AuditLogsList/>
    </StyledContainerMainBox>
  );
};

export default AuditLogs;
