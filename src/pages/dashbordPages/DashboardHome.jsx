import { Card, CardContent, CardFooter,CardHeader, CardTitle } from "@/components/ui/card";

const DashboardHome = () => {
  return (
    <main className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
          <CardHeader>
            <CardTitle>Comptes Récents</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Placeholder for account list */}
            <p className="text-gray-500">Aucun compte récent</p>

          </CardContent>
          <CardFooter >
    <p>
      <a href="#">Voir tous les comptes</a>
    </p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Factures</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Placeholder for invoices */}
            <p className="text-gray-500">Aucune facture</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actions Récentes</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Placeholder for recent actions */}
            <p className="text-gray-500">Aucune action récente</p>
          </CardContent>

        </Card>
      </div>
    </main>
  );
};

export default DashboardHome;
