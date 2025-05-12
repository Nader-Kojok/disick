"use client";

import { useState } from "react";
import { Clock, Users, Dumbbell, Heart, Activity, Sparkles } from "lucide-react";
import { Button } from "./Button";

interface Class {
  name: string;
  time: string;
  instructor: string;
  level: string;
  icon: React.ReactNode;
  capacity: number;
}

interface DaySchedule {
  day: string;
  classes: Class[];
}

const scheduleData: DaySchedule[] = [
  {
    day: "Lundi",
    classes: [
      {
        name: "Cardio Intense",
        time: "07:00 - 08:00",
        instructor: "Sarah M.",
        level: "Tous niveaux",
        icon: <Activity className="h-5 w-5 text-orange-500" />,
        capacity: 20,
      },
      {
        name: "Musculation",
        time: "10:00 - 11:30",
        instructor: "Marc D.",
        level: "Intermédiaire",
        icon: <Dumbbell className="h-5 w-5 text-orange-500" />,
        capacity: 15,
      },
      {
        name: "Yoga Flow",
        time: "18:00 - 19:00",
        instructor: "Julie L.",
        level: "Tous niveaux",
        icon: <Sparkles className="h-5 w-5 text-orange-500" />,
        capacity: 25,
      },
    ],
  },
  {
    day: "Mardi",
    classes: [
      {
        name: "CrossFit",
        time: "07:30 - 08:30",
        instructor: "Thomas B.",
        level: "Avancé",
        icon: <Dumbbell className="h-5 w-5 text-orange-500" />,
        capacity: 15,
      },
      {
        name: "Pilates",
        time: "12:00 - 13:00",
        instructor: "Emma R.",
        level: "Tous niveaux",
        icon: <Sparkles className="h-5 w-5 text-orange-500" />,
        capacity: 20,
      },
      {
        name: "HIIT",
        time: "19:00 - 20:00",
        instructor: "Sarah M.",
        level: "Intermédiaire",
        icon: <Heart className="h-5 w-5 text-orange-500" />,
        capacity: 20,
      },
    ],
  },
  {
    day: "Mercredi",
    classes: [
      {
        name: "Yoga Vinyasa",
        time: "08:00 - 09:00",
        instructor: "Julie L.",
        level: "Tous niveaux",
        icon: <Sparkles className="h-5 w-5 text-orange-500" />,
        capacity: 25,
      },
      {
        name: "Musculation",
        time: "11:00 - 12:30",
        instructor: "Marc D.",
        level: "Intermédiaire",
        icon: <Dumbbell className="h-5 w-5 text-orange-500" />,
        capacity: 15,
      },
      {
        name: "Cardio Boxing",
        time: "18:30 - 19:30",
        instructor: "Thomas B.",
        level: "Tous niveaux",
        icon: <Activity className="h-5 w-5 text-orange-500" />,
        capacity: 20,
      },
    ],
  },
  {
    day: "Jeudi",
    classes: [
      {
        name: "HIIT",
        time: "07:00 - 08:00",
        instructor: "Sarah M.",
        level: "Intermédiaire",
        icon: <Heart className="h-5 w-5 text-orange-500" />,
        capacity: 20,
      },
      {
        name: "Pilates",
        time: "12:00 - 13:00",
        instructor: "Emma R.",
        level: "Tous niveaux",
        icon: <Sparkles className="h-5 w-5 text-orange-500" />,
        capacity: 20,
      },
      {
        name: "CrossFit",
        time: "19:00 - 20:00",
        instructor: "Thomas B.",
        level: "Avancé",
        icon: <Dumbbell className="h-5 w-5 text-orange-500" />,
        capacity: 15,
      },
    ],
  },
  {
    day: "Vendredi",
    classes: [
      {
        name: "Cardio Intense",
        time: "07:30 - 08:30",
        instructor: "Sarah M.",
        level: "Tous niveaux",
        icon: <Activity className="h-5 w-5 text-orange-500" />,
        capacity: 20,
      },
      {
        name: "Yoga Flow",
        time: "12:00 - 13:00",
        instructor: "Julie L.",
        level: "Tous niveaux",
        icon: <Sparkles className="h-5 w-5 text-orange-500" />,
        capacity: 25,
      },
      {
        name: "Musculation",
        time: "18:00 - 19:30",
        instructor: "Marc D.",
        level: "Intermédiaire",
        icon: <Dumbbell className="h-5 w-5 text-orange-500" />,
        capacity: 15,
      },
    ],
  },
  {
    day: "Samedi",
    classes: [
      {
        name: "HIIT",
        time: "09:00 - 10:00",
        instructor: "Sarah M.",
        level: "Intermédiaire",
        icon: <Heart className="h-5 w-5 text-orange-500" />,
        capacity: 20,
      },
      {
        name: "Yoga Vinyasa",
        time: "11:00 - 12:00",
        instructor: "Julie L.",
        level: "Tous niveaux",
        icon: <Sparkles className="h-5 w-5 text-orange-500" />,
        capacity: 25,
      },
    ],
  },
  {
    day: "Dimanche",
    classes: [
      {
        name: "Yoga Flow",
        time: "10:00 - 11:00",
        instructor: "Julie L.",
        level: "Tous niveaux",
        icon: <Sparkles className="h-5 w-5 text-orange-500" />,
        capacity: 25,
      },
      {
        name: "Cardio Boxing",
        time: "11:30 - 12:30",
        instructor: "Thomas B.",
        level: "Tous niveaux",
        icon: <Activity className="h-5 w-5 text-orange-500" />,
        capacity: 20,
      },
    ],
  },
];

export const PlanningSection = () => {
  const [selectedDay, setSelectedDay] = useState<string>("Lundi");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Planning des cours</h2>
            <p className="text-lg text-gray-600">
              Découvrez notre programme hebdomadaire et réservez vos cours préférés
            </p>
          </div>

          {/* Days Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {scheduleData.map((day) => (
              <Button
                key={day.day}
                variant={selectedDay === day.day ? "primary" : "ghost"}
                size="sm"
                onClick={() => setSelectedDay(day.day)}
              >
                {day.day}
              </Button>
            ))}
          </div>

          {/* Mobile View - Cards */}
          <div className="lg:hidden space-y-4">
            {scheduleData
              .find((day) => day.day === selectedDay)
              ?.classes.map((classItem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg ring-1 ring-gray-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {classItem.icon}
                    <h3 className="font-semibold text-lg text-black">
                      {classItem.name}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{classItem.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {classItem.instructor}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        {classItem.level}
                      </span>
                      <span className="text-sm text-gray-600">
                        {classItem.capacity} places
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Desktop View - Table */}
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                    >
                      Cours
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                    >
                      Horaire
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                    >
                      Coach
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                    >
                      Niveau
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                    >
                      Capacité
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {scheduleData
                    .find((day) => day.day === selectedDay)
                    ?.classes.map((classItem, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {classItem.icon}
                            <span className="text-sm font-medium text-gray-900">{classItem.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{classItem.time}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600">{classItem.instructor}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                            {classItem.level}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{classItem.capacity} places</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-orange-500" />
              <span className="text-sm text-gray-600">Cardio</span>
            </div>
            <div className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5 text-orange-500" />
              <span className="text-sm text-gray-600">Musculation</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-orange-500" />
              <span className="text-sm text-gray-600">Yoga/Pilates</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-orange-500" />
              <span className="text-sm text-gray-600">HIIT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 