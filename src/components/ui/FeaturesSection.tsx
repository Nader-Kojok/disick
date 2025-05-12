import { LucideIcon } from "lucide-react";

interface Feature {
  name: string;
  description: string;
  icon: LucideIcon;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-primary/10 ring-1 ring-primary/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pourquoi nous choisir ?
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Des avantages exclusifs pour une expérience d&apos;entraînement optimale
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:ring-primary/20 hover:-translate-y-1"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-orange-50 text-orange-500 mx-auto">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900 text-center">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a 
                      href="#" 
                      className="text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors"
                    >
                      En savoir plus <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Additional stats section */}
        <div className="mx-auto mt-32 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-primary/5 p-8 text-center">
              <div className="text-4xl font-bold text-orange-500">500+</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Membres actifs</div>
            </div>
            <div className="rounded-2xl bg-primary/5 p-8 text-center">
              <div className="text-4xl font-bold text-orange-500">20+</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Coach experts</div>
            </div>
            <div className="rounded-2xl bg-primary/5 p-8 text-center">
              <div className="text-4xl font-bold text-orange-500">50+</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Cours hebdomadaires</div>
            </div>
            <div className="rounded-2xl bg-primary/5 p-8 text-center">
              <div className="text-4xl font-bold text-orange-500">98%</div>
              <div className="mt-2 text-sm font-medium text-gray-600">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 