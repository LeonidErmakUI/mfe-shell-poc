import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { eventBus } from "../event-bus/EventBus";
import { RemoteLoader } from "../loader/RemoteLoader";
import { UserContext } from "../types";
import Header from "./Header";

const MOCK_USER: UserContext = {
  userId: "james-01",
  name: "James Mitchell",
  role: "underwriter",
  lobs: ["marine", "cyber"],
  defaultLob: "marine",
  permissions: ["view", "action", "assign"],
};

const AuthenticatedApp: React.FC = () => {
  const navigate = useNavigate();
  const { lob = "marine" } = useParams<{ lob: string }>();

  useEffect(() => {
    window.__shell__ = {
      getAccessToken: () => Promise.resolve("mock-token"),
      getUserContext: () => MOCK_USER,
      eventBus,
      bffUrl: import.meta.env.VITE_BFF_URL || "http://localhost:4000",
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header
        userContext={MOCK_USER}
        currentLob={lob}
        onLobSwitch={(next) => next !== lob && navigate(`/${next}/submissions`)}
        onLogout={() => {}}
      />
      <div style={{ flex: 1, overflow: "hidden" }}>
        <RemoteLoader key={lob} lobSlug={lob} basePath={`/${lob}`} />
      </div>
    </div>
  );
};

export default AuthenticatedApp;
