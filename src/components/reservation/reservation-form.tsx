"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Calendar } from "lucide-react"

interface ReservationFormData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  notes: string
}

interface ReservationFormProps {
  courseId: number
}

export function ReservationForm({ courseId }: ReservationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationFormData>()

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simuler l'envoi du formulaire
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Reservation data:", { ...data, courseId })
      setSubmitStatus("success")
      reset()
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
          Nom complet
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="name"
            {...register("name", { required: "Le nom est requis" })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email
        </label>
        <div className="mt-2">
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "L'email est requis",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Adresse email invalide",
              },
            })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
          Téléphone
        </label>
        <div className="mt-2">
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "Le numéro de téléphone est requis",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Numéro de téléphone invalide",
              },
            })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
          Date du cours
        </label>
        <div className="mt-2 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="date"
            id="date"
            {...register("date", { required: "La date est requise" })}
            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
          {errors.date && (
            <p className="mt-2 text-sm text-red-600">{errors.date.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-medium leading-6 text-gray-900">
          Horaire
        </label>
        <div className="mt-2">
          <select
            id="time"
            {...register("time", { required: "L'horaire est requis" })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          >
            <option value="">Sélectionnez un horaire</option>
            <option value="8h00">8h00 - 8h45</option>
            <option value="9h00">9h00 - 9h45</option>
            <option value="10h00">10h00 - 10h45</option>
            <option value="17h00">17h00 - 17h45</option>
            <option value="18h00">18h00 - 18h45</option>
          </select>
          {errors.time && (
            <p className="mt-2 text-sm text-red-600">{errors.time.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium leading-6 text-gray-900">
          Notes supplémentaires
        </label>
        <div className="mt-2">
          <textarea
            id="notes"
            rows={3}
            {...register("notes")}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Réservation en cours..." : "Confirmer la réservation"}
        </button>
      </div>

      {submitStatus === "success" && (
        <p className="mt-2 text-sm text-green-600">
          Votre réservation a été confirmée. Un email de confirmation vous sera envoyé dans les plus brefs délais.
        </p>
      )}

      {submitStatus === "error" && (
        <p className="mt-2 text-sm text-red-600">
          Une erreur est survenue lors de la réservation. Veuillez réessayer.
        </p>
      )}
    </form>
  )
} 