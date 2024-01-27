'use client';
import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:remek778790@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen flex flex-col max-w-7xl mx-auto pt-24 gap-24 sm:gap-56">
      <div className="text-center ">
        <h2 className="uppercase tracking-widest mb-4 text-gray-500 text-2xl sm:text-4xl">
          Contact
        </h2>
        <h3 className="tracking-[3px] text-gray-500 text-sm text-center">
          I have got just what you need.
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-3 w-fit mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              {...register('name')}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register('email')}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register('subject')}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea
            {...register('message')}
            placeholder="Message"
            className="contactInput"
          />
          <div className="flex justify-end">
            <button
              className="border-2 border-slate-600 py-4 px-10 rounded-sm font-semibold hover:bg-pink-700 hover:border-pink-700 transition ease-out active:scale-95"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
