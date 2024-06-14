"use client";
import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import Heading from "./Heading";
type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:remek778790@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto justify-start sm:justify-center gap-16 sm:gap-32">
      <Heading heading="Contact" subHeading="I have got just what you need." />
      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-slate-200 w-full sm:w-fit px-4"
        >
          <div className="flex flex-col space-y-4 w-full sm:w-fit mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                {...register("name")}
                className="contactInput"
                type="text"
                placeholder="Name"
              />
              <input
                {...register("email")}
                className="contactInput"
                type="email"
                placeholder="Email"
              />
            </div>
            <input
              {...register("subject")}
              className="contactInput"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
              rows={4}
            />
          </div>

          <div className="flex justify-end mt-4">
            <button
              className="border-2 flex items-center text-slate-200 border-slate-600 py-4 px-6 rounded-lg font-medium hover:bg-pink-700 hover:border-pink-700 transition ease-out active:scale-95"
              type="submit"
            >
              <span>Send</span>
              <PaperAirplaneIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
