import { HeaderProps } from "../types";

const Header: React.FC<HeaderProps> = ({
  userContext,
  currentLob,
  onLobSwitch,
  onLogout,
}) => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        height: 56,
        background: "#ffffff",
        flexShrink: 0,
      }}
    >
      <div style={{ color: "#242424", fontWeight: "bold", fontSize: 18 }}>
        🛡️ Sompo Insurance Platform
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {userContext.lobs.length > 1 && (
          <select
            value={currentLob}
            onChange={(e) => onLobSwitch(e.target.value)}
            style={{ padding: "4px 8px", borderRadius: 4 }}
          >
            {userContext.lobs.map((lob) => (
              <option key={lob} value={lob}>
                {lob.toUpperCase()}
              </option>
            ))}
          </select>
        )}
        <span style={{ color: "#242424", fontSize: 14 }}>
          {userContext.name}
        </span>
        <button
          onClick={onLogout}
          style={{
            background: "linear-gradient(180deg, #264966 0%, #12344d 100%)",
            color: "white",
            padding: "4px 12px",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
