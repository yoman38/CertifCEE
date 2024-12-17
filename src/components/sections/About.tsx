import React from 'react';
import { Shield, Zap, PiggyBank } from 'lucide-react';
import { commonStyles } from '../../styles/common';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const keyPoints = [
  {
    icon: Shield,
    title: 'Démarches simplifiées',
    description: 'Accompagnement personnalisé à chaque étape'
  },
  {
    icon: Zap,
    title: 'Valorisation rapide',
    description: "Optimisation des économies d'énergie"
  },
  {
    icon: PiggyBank,
    title: 'Optimisation des financements',
    description: 'Maximisation des aides disponibles'
  }
];

const About = () => {
  return (
    <section className={`${commonStyles.section} bg-white`} id="about">
      <div className={commonStyles.container}>
        <SectionHeading
          title="Votre expert en CEE"
          description="Auto-entrepreneur spécialisé dans les Certificats d'Économies d'Énergie (CEE), je vous accompagne de A à Z : de l'identification des travaux éligibles jusqu'à la constitution et validation de votre dossier."
          centered
        />

        <div className="grid md:grid-cols-3 gap-12">
          {keyPoints.map((point) => (
            <Card
              key={point.title}
              icon={point.icon}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;