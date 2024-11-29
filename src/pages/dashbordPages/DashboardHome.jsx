
import SystemeCard from "../../components/dashboard/SystemeCard";

const DashboardHome = () => {
  return (
    <main className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SystemeCard systeme={{id:1, nom: "Systeme 1", devise: "USD", dateCreation: "2022-01-01" }} />
        <SystemeCard systeme={{ id:2, nom: "Systeme 2", devise: "EUR", dateCreation: "2022-02-01" }} />
        <SystemeCard systeme={{ id:3, nom: "Systeme 3", devise: "GBP", dateCreation: "2022-03-01" }} />

      </div>
    </main>
  );
};

export default DashboardHome;
