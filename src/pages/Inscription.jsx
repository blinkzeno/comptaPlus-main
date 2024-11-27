/* eslint-disable no-unused-vars */
import  { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import img1 from '../assets/img1.jpg';
import { Link } from 'react-router-dom';
import { Facebook, Github } from 'lucide-react';
export default function Inscription() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const validateForm = () => {
    let formErrors = {
      username: '',
      email: '',
      password: ''
    };
    let isValid = true;

    if (formData.username.trim().length < 2) {
      formErrors.username = "Le nom d'utilisateur doit contenir au moins 2 caractères.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      formErrors.email = "Veuillez entrer une adresse email valide.";
      isValid = false;
    }

    if (formData.password.length < 8) {
      formErrors.password = "Le mot de passe doit contenir au moins 8 caractères.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("Inscription:", formData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Inscription réussie !");
    } catch (error) {
      alert("Erreur lors de l'inscription");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-6xl  shadow-lg rounded-xl overflow-hidden">
        {/* Image de présentation */}
        <div className="hidden md:block md:w-1/2 bg-cover bg-center" 
          style={{
            backgroundImage: 'url("' + img1 + '")',
            backgroundPosition: 'center'
          }}>
        </div>

        {/* Formulaire */}
        <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
          <Card className="w-full max-w-[350px] border-none shadow-none">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold">Créer un compte</CardTitle>
              <CardDescription>
              vous avez un compte? <Link to="/connexion" className="text-blue-600 hover:underline">Connectez-vous</Link> 
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="username">Nom d&apos;utilisateur</Label>
                  <Input
                    id="username"
                    name="username"
                    placeholder="Votre nom d'utilisateur"
                    value={formData.username}
                    onChange={handleChange}
                    className={errors.username ? "border-red-500" : ""}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Mot de passe"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? "border-red-500" : ""}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "En cours..." : "S'inscrire"}
                </Button>
                <div className="flex justify-center gap-5 mt-4">
                <div className="flex items-center  justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    <Facebook className="w-5 h-5 text-gray-200" />
                  </div>
                  <div className="flex items-center  justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    <Github className="w-5 h-5 text-gray-200" />
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}