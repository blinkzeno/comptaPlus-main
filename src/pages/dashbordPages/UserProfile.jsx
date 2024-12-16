
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Edit, 
  Save 
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    phone: "+33 6 12 34 56 78",
    address: "123 Rue de Paris, 75001 Paris",
    birthDate: "1990-05-15"
  });

  const [editedProfile, setEditedProfile] = useState({ ...userProfile });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      // Logique de sauvegarde
      setUserProfile(editedProfile);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Photo de profil" />
              <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{userProfile.name}</h2>
              <p className="text-muted-foreground">Membre depuis 2023</p>
            </div>
          </CardTitle>
          <Button 
            variant={isEditing ? "destructive" : "outline"} 
            onClick={handleEditToggle}
          >
            {isEditing ? (
              <>
                <Save className="mr-2 h-4 w-4" /> Enregistrer
              </>
            ) : (
              <>
                <Edit className="mr-2 h-4 w-4" /> Modifier
              </>
            )}
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="flex items-center">
                  <User className="mr-2 h-4 w-4" /> Nom
                </Label>
                {isEditing ? (
                  <Input 
                    id="name"
                    name="name"
                    value={editedProfile.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="mt-1">{userProfile.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" /> Email
                </Label>
                {isEditing ? (
                  <Input 
                    id="email"
                    name="email"
                    value={editedProfile.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="mt-1">{userProfile.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" /> Téléphone
                </Label>
                {isEditing ? (
                  <Input 
                    id="phone"
                    name="phone"
                    value={editedProfile.phone}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="mt-1">{userProfile.phone}</p>
                )}
              </div>

              <div>
                <Label htmlFor="birthDate" className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" /> Date de naissance
                </Label>
                {isEditing ? (
                  <Input 
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    value={editedProfile.birthDate}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="mt-1">
                    {new Date(userProfile.birthDate).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="address" className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" /> Adresse
                </Label>
                {isEditing ? (
                  <Input 
                    id="address"
                    name="address"
                    value={editedProfile.address}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="mt-1">{userProfile.address}</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;