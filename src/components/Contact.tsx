'use client'
import React from "react";
import { Cover } from "@/components/ui/cover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export function Contact() {
  
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form validation here if needed
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }
    // Submit form data
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`;
    window.location.href = `mailto:vish.adarsh01@gmail.com?subject=Contact Form&body=${emailBody}`;
  };

  return (
    <div id="Contact" className="w-full z-99999999">
      <h2 className="text-center lg:text-8xl md:text-7xl sm:text-3xl font-bold text-black dark:text-white">
        <Cover className="">Let's Connect</Cover>
      </h2>
     <div className="flex flex-row-reverse mt-20">
      <div className="w-full mx-auto mb-10">
        <h1 className=" lg:text-2xl text-center md:text-lg mb-10">Fill in the details to connect!!</h1>
        <form onSubmit={HandleSubmit} className="space-y-4 mx-auto lg:w-[40rem] md:w-[30rem] w-72">
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={HandleChange}
            className="text-lg w-full lg:h-16 m-auto mb-3 relative pl-4 h-10 flex"
            placeholder="Name"
            required
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={HandleChange}
            className="w-full text-lg lg:h-16  m-auto mb-3 h-10 pl-4 flex"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={HandleChange}
            className="w-full text-lg lg:h-60  m-auto  pl-4 pt-4 pb-48 flex rounded-md border border-gray-300"
            placeholder="Say hello!"
            required
          />
          <Button type="submit" className="text-2xl lg:ml-4 md:ml-4  py-5 ">
            <Cover>Send🚀</Cover> 
          </Button>
        </form>
      </div>
      <div className="w-full lg:block hidden">
        <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Let's Build amazing websites <br /> at <Cover>warp speed</Cover>
        </h1> 
      </div>
     </div>
    </div>
  );
}
