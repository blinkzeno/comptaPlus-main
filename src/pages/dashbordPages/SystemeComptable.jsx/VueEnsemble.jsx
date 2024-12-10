
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  FileText, 
  DollarSign, 
  BarChart, 
  Users 
} from 'lucide-react';

const VueEnsemble = () => {
  return (
   
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Système Comptable Microsoft</h1>
          <div className="flex justify-center items-center mb-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mr-2">
              USD
            </span>
            <p className="text-gray-600">Date de création : 15/11/2024</p>
          </div>
          
      
        </div>

        {/* Dashboard Overview */}
        <div className="grid grid-cols-2 gap-4">
          {/* Statistics Cards */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Pièces Comptables</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">145</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Charge et Produits</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">Charge</div>
                  <div className="text-xl font-bold text-red-500">45 000 USD</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Produits</div>
                  <div className="text-xl font-bold text-green-500">67 000 USD</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Resultat</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">22 000 USD</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Comptables Associés</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Rôle principal : Comptabilité générale</p>
            </CardContent>
          </Card>
        </div>
      </div>
   
  );
};

export default VueEnsemble;