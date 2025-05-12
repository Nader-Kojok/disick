"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simuler l'envoi du formulaire
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form data:", data)
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
        <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
          Sujet
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="subject"
            {...register("subject", { required: "Le sujet est requis" })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
          {errors.subject && (
            <p className="mt-2 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
          Message
        </label>
        <div className="mt-2">
          <textarea
            id="message"
            rows={4}
            {...register("message", { required: "Le message est requis" })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
        </button>
      </div>

      {submitStatus === "success" && (
        <p className="mt-2 text-sm text-green-600">
          Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
        </p>
      )}

      {submitStatus === "error" && (
        <p className="mt-2 text-sm text-red-600">
          Une erreur est survenue lors de l&apos;envoi du message. Veuillez réessayer.
        </p>
      )}
    </form>
  )
} 