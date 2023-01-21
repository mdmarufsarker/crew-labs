import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../../styles/Home/Home.module.css";

export default function contact() {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .send("service_hlpp5v7", "template_vw5thuq", values, "xGlQWSinaq5g6MroQ")
          .then(
            (response) => {
              console.log("SUCCESS!", response);
              setValues({
                name: "",
                email: "",
                message: "",
              });
              setStatus("SUCCESS");
            },
            (error) => {
              console.log("FAILED...", error);
            }
        );
    };
    useEffect(() => {
        if (status === "SUCCESS") {
          setTimeout(() => {
            setStatus("");
          }, 3000);
        }
    }, [status]);
    const handleChange = (e) => {
        setValues((values) => ({
          ...values,
          [e.target.name]: e.target.value,
        }));
    };
    return (
        <section id="contact">
            <div className='container mx-auto mt-20'>
                <ToastContainer />
                {status ? toast.success("Message Sent!") : null}
                <div className='flex justify-center items-center flex-col lg:flex-row xl:flex-row gap-10'>
                    <div className='lg:w-1/2 flex flex-col items-center xl:items-start xl:ml-32'>
                        <p className='font-regular text-xl text-gray-400'>Questions, bug reports, feedback</p>
                        <h3 className='text-5xl font-bold'>Contact Us</h3>
                    </div>
                    <div className='flex items-center lg:w-1/2 xl:flex-col xl:ml-32 xl:items-start'>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full lg:-ml-8 xl:-ml-12">
                            <div>
                                <label htmlFor="name" className="leading-7 text-lg text-gray-400">Name</label>
                                <input
                                    type="text"
                                    onChange={handleChange}
                                    value={values.name}
                                    name="name"
                                    label="Full Name"
                                    required
                                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-lg text-gray-400">Email</label>
                                <input
                                    type="email"
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email"
                                    label="Email"
                                    required
                                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative">
                                <label htmlFor="message" className="leading-7 text-lg text-gray-400">Message</label>
                                <textarea
                                    onChange={handleChange}
                                    value={values.message}
                                    name="message"
                                    label="Message"
                                    required
                                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                            <button type="submit" className={`${styles.btn} w-40`}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}