import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Clock, Users, Trophy } from "lucide-react";
import { Hero } from "@/components/ui/Hero";
import { AboutSection } from "@/components/ui/AboutSection";
import { UpcomingClassesTable } from "@/components/ui/UpcomingClassesTable";
import { FeaturedCoursesSection } from "@/components/ui/FeaturedCoursesSection";
import { TestimonialsSection } from "@/components/ui/TestimonialsSection";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import { PricingSection } from "@/components/ui/PricingSection";
import { CTASection } from "@/components/ui/CTASection";
import { PrivateClassSection } from "@/components/ui/PrivateClassSection";
import { PlanningSection } from "@/components/ui/PlanningSection";

const featuredCourses = [
  {
    id: 1,
    title: "Fitness Cardio",
    description: "Entraînement cardiovasculaire intensif pour améliorer votre endurance et votre condition physique.",
    duration: "45 min",
    level: "Tous niveaux",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Musculation",
    description: "Programme complet de renforcement musculaire adapté à vos objectifs.",
    duration: "60 min",
    level: "Intermédiaire",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Yoga Flow",
    description: "Séance de yoga dynamique pour améliorer votre flexibilité et votre bien-être.",
    duration: "60 min",
    level: "Tous niveaux",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=800&auto=format&fit=crop&q=60",
  },
];

const testimonials = [
  {
    id: 1,
    content: "Un centre exceptionnel avec des coachs professionnels. J'ai atteint mes objectifs plus rapidement que prévu !",
    author: "Aminata D.",
    role: "Membre depuis 6 mois",
  },
  {
    id: 2,
    content: "L'ambiance est géniale et les équipements sont de qualité. Je recommande vivement !",
    author: "Moussa K.",
    role: "Membre depuis 1 an",
  },
];

const features = [
  {
    name: "Équipements Modernes",
    description: "Des équipements de dernière génération pour un entraînement optimal.",
    icon: Trophy,
  },
  {
    name: "Coach Personnel",
    description: "Des coachs certifiés pour vous accompagner dans votre progression.",
    icon: Users,
  },
  {
    name: "Horaires Flexibles",
    description: "Ouvert 7j/7 de 6h à 22h pour s'adapter à votre emploi du temps.",
    icon: Clock,
  },
];

const pricingPlans = [
  {
    name: "Basique",
    price: "19 000 F",
    description: "Parfait pour débuter votre parcours fitness.",
    features: [
      "Accès à la salle de sport",
      "Horaires standards",
      "1 séance avec un coach",
      "Accès aux cours collectifs basiques",
    ],
  },
  {
    name: "Premium",
    price: "29 000 F",
    description: "Notre offre la plus populaire avec des avantages exclusifs.",
    features: [
      "Accès illimité à la salle",
      "Horaires étendus",
      "4 séances avec un coach",
      "Accès à tous les cours collectifs",
      "Accès à la zone cardio",
      "Suivi personnalisé",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "49 000 F",
    description: "L'expérience fitness ultime pour les plus exigeants.",
    features: [
      "Tous les avantages Premium",
      "Accès 24/7",
      "8 séances avec un coach",
      "Accès au spa et sauna",
      "Programme nutritionnel",
      "Évaluation mensuelle",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="about">
        <AboutSection />
      </section>
      <section id="courses">
        <UpcomingClassesTable />
        <FeaturedCoursesSection courses={featuredCourses} />
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Features Section */}
      <FeaturesSection features={features} />

      {/* Pricing Section */}
      <section id="pricing">
        <PricingSection plans={pricingPlans} />
      </section>

      {/* Private Class Section */}
      <PrivateClassSection />

      {/* CTA Section */}
      <CTASection
        title="Prêt à commencer votre transformation ?"
        description="Rejoignez-nous dès aujourd'hui et commencez votre parcours vers une meilleure version de vous-même."
        primaryButtonText="Réserver maintenant"
        primaryButtonLink="/reservation"
        secondaryButtonText="Nous contacter"
        secondaryButtonLink="/contact"
      />

      <section id="planning">
        <PlanningSection />
      </section>

      <Footer />
    </main>
  );
}
