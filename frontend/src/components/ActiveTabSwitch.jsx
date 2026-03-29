import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="bg-transparent flex p-2 m-2">
      <button
        onClick={() => setActiveTab("Contacts")}
        className={`tab ${
          activeTab === "Contacts" ? "bg-amber-500/20 text-slate-200 rounded shadow-sm" : "text-slate-400 rounded shadow-sm"
        }`}
      >
        Contacts
      </button>

      <button
        onClick={() => setActiveTab("Chats")}
        className={`tab ${
          activeTab === "Chats" ? "bg-amber-500/20 text-slate-200 rounded shadow-sm" : "text-slate-400 rounded shadow-sm"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("Groups")}
        className={`tab ${
          activeTab === "Groups" ? "bg-amber-500/20 text-slate-200 rounded shadow-sm" : "text-slate-400 rounded shadow-sm"
        }`}
      >
        Groups
      </button>


    </div>
  );
}
export default ActiveTabSwitch;
