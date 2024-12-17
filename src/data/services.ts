import { ServiceData } from '../types';
import { ClipboardCheck, FileText, Calculator } from 'lucide-react';

export const services: ServiceData[] = [
  {
    title: 'Audit des besoins',
    description: 'Analyse de vos projets pour identifier les travaux éligibles.',
    details: 'Notre audit complet examine votre situation actuelle, identifie les opportunités d\'économies d\'énergie et détermine précisément les travaux éligibles aux CEE. Nous analysons votre consommation énergétique, l\'état de vos installations et établissons un plan d\'action personnalisé pour maximiser vos économies.',
    icon: ClipboardCheck
  },
  {
    title: 'Montage du dossier',
    description: 'Prise en charge de toutes les démarches administratives.',
    details: 'Nous gérons l\'intégralité du processus administratif : collecte des documents nécessaires, vérification de leur conformité, constitution du dossier selon les exigences réglementaires et suivi auprès des organismes concernés. Notre expertise garantit un traitement optimal de votre dossier CEE.',
    icon: FileText
  },
  {
    title: 'Optimisation des primes',
    description: 'Maximisation des aides disponibles pour financer vos travaux.',
    details: 'Notre connaissance approfondie des dispositifs d\'aide nous permet d\'optimiser le montant de vos primes CEE. Nous négocions les meilleures conditions auprès des obligés et vous conseillons sur les combinaisons d\'aides possibles pour réduire au maximum votre reste à charge.',
    icon: Calculator
  }
];