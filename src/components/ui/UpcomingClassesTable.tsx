"use client";

import React from "react";
import { Button } from "./Button";

type UpcomingClass = {
  id: string;
  date: string;
  time: string;
  courseName: string;
  status: "available" | "full";
  spots: string;
  location: string;
  coach: string;
};

const upcomingClasses: UpcomingClass[] = [
  {
    id: "1",
    date: "15/06/2025",
    time: "08:00 - 09:00",
    courseName: "HIIT Cardio",
    status: "full",
    spots: "12/12",
    location: "Studio A",
    coach: "Sophie Martin",
  },
  {
    id: "2",
    date: "15/06/2025",
    time: "09:30 - 10:30",
    courseName: "Yoga Flow",
    status: "available",
    spots: "7/12",
    location: "Studio B",
    coach: "Lucas Bernard",
  },
  {
    id: "3",
    date: "16/06/2025",
    time: "18:00 - 19:00",
    courseName: "Pilates",
    status: "available",
    spots: "3/10",
    location: "Studio A",
    coach: "Emma Dubois",
  },
  {
    id: "4",
    date: "17/06/2025",
    time: "19:30 - 20:30",
    courseName: "Boxe",
    status: "full",
    spots: "10/10",
    location: "Studio C",
    coach: "Karim Lemaire",
  },
];

const UpcomingClassesTable: React.FC = () => {
  const handleActionKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  const handleBook = (id: string) => {
    // Action de réservation (à intégrer avec la logique réelle)
    alert(`Réservation pour le cours ${id}`);
  };

  const handleWaitlist = (id: string) => {
    // Action d'inscription en liste d'attente (à intégrer avec la logique réelle)
    alert(`Ajout à la liste d'attente pour le cours ${id}`);
  };

  return (
    <section id="upcoming-classes" className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-wide font-sans">Cours à venir</h2>
        
        {/* Mobile View - Cards */}
        <div className="lg:hidden space-y-4">
          {upcomingClasses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl p-8 shadow-lg ring-1 ring-orange-500">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-black">{course.courseName}</h3>
                    <p className="text-sm text-gray-600">{course.date} • {course.time}</p>
                  </div>
                  <span className={
                    course.status === "available"
                      ? "inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 border border-orange-300"
                      : "inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white border border-orange-500"
                  }>
                    {course.status === "available" ? "Disponible" : "Complet"} <span className="ml-2 text-orange-500">({course.spots})</span>
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500">Lieu</p>
                    <p className="text-black">{course.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Coach</p>
                    <p className="text-black">{course.coach}</p>
                  </div>
                </div>

                <div className="pt-2">
                  {course.status === "available" ? (
                    <Button
                      variant="primary"
                      size="sm"
                      fullWidth
                      onClick={() => handleBook(course.id)}
                      onKeyDown={(e) => handleActionKeyDown(e, () => handleBook(course.id))}
                      aria-label={`Réserver le cours ${course.courseName}`}
                    >
                      RÉSERVER
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      size="sm"
                      fullWidth
                      onClick={() => handleWaitlist(course.id)}
                      onKeyDown={(e) => handleActionKeyDown(e, () => handleWaitlist(course.id))}
                      aria-label={`S&apos;inscrire en liste d&apos;attente pour le cours ${course.courseName}`}
                    >
                      LISTE D&apos;ATTENTE
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Table */}
        <div className="hidden lg:block overflow-x-auto rounded-2xl shadow-lg ring-1 ring-orange-500 bg-white">
          <table className="w-full min-w-full divide-y divide-orange-200">
            <thead className="bg-orange-500">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white">Date</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white">Heure</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white">Cours</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white">Lieu</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white">Coach</th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-white">Places</th>
                <th scope="col" className="px-6 py-4 text-center text-sm font-bold text-white">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-orange-100">
              {upcomingClasses.map((course) => (
                <tr key={course.id} className="hover:bg-orange-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{course.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{course.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{course.courseName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{course.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{course.coach}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={
                      course.status === "available"
                        ? "inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700 border border-orange-300"
                        : "inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white border border-orange-500"
                    }>
                      {course.status === "available" ? "Disponible" : "Complet"} <span className="ml-2 text-orange-500">({course.spots})</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {course.status === "available" ? (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleBook(course.id)}
                        onKeyDown={(e) => handleActionKeyDown(e, () => handleBook(course.id))}
                        aria-label={`Réserver le cours ${course.courseName}`}
                      >
                        RÉSERVER
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleWaitlist(course.id)}
                        onKeyDown={(e) => handleActionKeyDown(e, () => handleWaitlist(course.id))}
                        aria-label={`S&apos;inscrire en liste d&apos;attente pour le cours ${course.courseName}`}
                      >
                        LISTE D&apos;ATTENTE
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export { UpcomingClassesTable }; 