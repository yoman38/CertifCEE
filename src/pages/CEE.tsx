import React from 'react';
import { Lightbulb, Home, Factory, ArrowRight } from 'lucide-react';
import { commonStyles } from '../styles/common';
import SectionHeading from '../components/ui/SectionHeading';

const CEE = () => {
  return (
    <div className="pt-20">
      <section className={`${commonStyles.section} bg-white`}>
        <div className={commonStyles.container}>
          <SectionHeading
            title="Les Certificats d'Économies d'Énergie (CEE)"
            description="Un dispositif national pour encourager les économies d'énergie"
            centered
          />

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Qu'est-ce que les CEE ?</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Les Certificats d'Économies d'Énergie (CEE) sont un dispositif mis en place par l'État pour encourager 
                les actions d'économies d'énergie. Ce système oblige les fournisseurs d'énergie à promouvoir 
                l'efficacité énergétique auprès de leurs clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les CEE permettent de financer une partie de vos travaux de rénovation énergétique, 
                réduisant ainsi votre facture et votre impact environnemental.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Qui peut en bénéficier ?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Home className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Les propriétaires et locataires de logements</span>
                </li>
                <li className="flex items-start">
                  <Factory className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Les entreprises et industries</span>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <span>Les collectivités territoriales</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-semibold mb-6">Travaux éligibles aux CEE</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-semibold mb-3">Isolation thermique</h4>
                <ul className="space-y-2 text-gray-100">
                  <li>• Isolation des combles</li>
                  <li>• Isolation des murs</li>
                  <li>• Isolation des planchers</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-semibold mb-3">Chauffage performant</h4>
                <ul className="space-y-2 text-gray-100">
                  <li>• Pompes à chaleur</li>
                  <li>• Chaudières à condensation</li>
                  <li>• Systèmes de régulation</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-semibold mb-3">Autres équipements</h4>
                <ul className="space-y-2 text-gray-100">
                  <li>• Éclairage LED</li>
                  <li>• Ventilation performante</li>
                  <li>• Équipements hydro-économes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="#contact"
              className="inline-flex items-center group bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Lancez votre projet
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CEE;