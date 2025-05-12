import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

export const PricingSection = ({ plans }: PricingSectionProps) => {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-500">Tarification</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Choisissez le plan qui vous convient
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 gap-x-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10 ${
                plan.popular 
                  ? "bg-orange-500 scale-105 shadow-2xl shadow-orange-500/20 ring-2 ring-orange-500/50" 
                  : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    className={`text-lg font-semibold leading-8 ${
                      plan.popular ? "text-white" : "text-white"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <p className="rounded-full bg-orange-500/20 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      Populaire
                    </p>
                  )}
                </div>
                <p className={`mt-4 text-sm leading-6 ${plan.popular ? "text-white/80" : "text-gray-300"}`}>
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className={`text-sm font-semibold leading-6 ${
                    plan.popular ? "text-white/80" : "text-gray-400"
                  }`}>
                    /mois
                  </span>
                </p>
                <div className="mt-auto pt-8">
                  <Button
                    variant={plan.popular ? "secondary" : "primary"}
                    size="md"
                    fullWidth
                    asChild
                  >
                    <Link href="/reservation">
                      S&apos;abonner
                    </Link>
                  </Button>
                  <ul
                    role="list"
                    className={`mt-8 space-y-3 text-sm leading-6 ${
                      plan.popular ? "text-white/80" : "text-gray-300"
                    }`}
                  >
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <Check
                          className={`h-6 w-5 flex-none ${
                            plan.popular ? "text-white" : "text-orange-500"
                          }`}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 