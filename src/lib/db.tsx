

import {  FileText, Calculator, PieChart, Wallet, BarChart2, Receipt, Play, Star } from 'lucide-react';

 export const features = [
   { icon: <FileText className="w-8 h-8 text-blue-600" />, title: "Gestion des factures et des paiements", description: "Création et suivi des factures, gestion des paiements entrants et sortants" },
   { icon: <Calculator className="w-8 h-8 text-blue-600" />, title: "Comptabilité de base", description: "Suivi des comptes clients et fournisseurs, gestion des écritures comptables" },
   { icon: <PieChart className="w-8 h-8 text-blue-600" />, title: "Suivi des dépenses", description: "Gestion des frais d'entreprise, création de rapports" },
   { icon: <Wallet className="w-8 h-8 text-blue-600" />, title: "Gestion de la trésorerie", description: "Suivi et prévision des flux de trésorerie" },
   { icon: <BarChart2 className="w-8 h-8 text-blue-600" />, title: "Comptes de résultats", description: "Génération automatique des rapports financiers" },
   { icon: <Receipt className="w-8 h-8 text-blue-600" />, title: "Gestion de la TVA", description: "Calcul automatique et gestion des déclarations fiscales" }
 ];


 export const testimonials = [
   { name: "Marie D.", role: "PME", text: "Un outil indispensable pour notre gestion quotidienne" },
   { name: "Pierre L.", role: "Entrepreneur", text: "Interface intuitive, gain de temps considérable" },
   { name: "Sophie M.", role: "Professionnelle", text: "Fonctionnalités avancées et personnalisables" }
 ];

export const faqData = [
  {
  question: "Comment puis-je commencer avec ComptaPlus ?",
  answer: "Créez simplement un compte gratuit et suivez notre guide de démarrage rapide. Vous pourrez commencer à utiliser toutes les fonctionnalités en quelques minutes."
  },
  {
  question: "Quelles sont les principales fonctionnalités de ComptaPlus ?",
  answer: "ComptaPlus offre des fonctionnalités de gestion budgétaire, de suivi des dépenses, d'analyse des revenus et d'établissement de rapports financiers. Vous pouvez également connecter vos comptes bancaires et cartes de crédit pour une vue d'ensemble de vos finances."
  },
  {
  question: "Quel type de données puis-je importer dans ComptaPlus ?",
  answer: "Vous pouvez importer des fichiers CSV, XLS ou OFX contenant vos relevés bancaires, relevés de carte de crédit et informations de facturation. Nous supportons la majorité des formats standard de données financières."
  },
  {
  question: "Comment puis-je partager mes données avec mon comptable ou mon conjoint ?",
  answer: "ComptaPlus offre des fonctionnalités de partage sécurisé. Vous pouvez inviter d'autres utilisateurs à accéder à votre compte avec des droits spécifiques, comme la visualisation ou la modification des données."
  },
  {
  question: "Existe-t-il une application mobile pour ComptaPlus ?",
  answer: "Oui, nous avons des applications iOS et Android qui vous permettent de gérer vos finances depuis votre smartphone ou tablette. Vous pouvez consulter vos comptes, saisir des dépenses et générer des rapports en déplacement."
  }
  ];