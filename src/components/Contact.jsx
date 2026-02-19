import React from 'react'
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <section id="contact" className="mb-40 pb-20 scroll-mt-20" >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                <div className="md:col-span-5">
                    <h2 className="text-3xl font-light tracking-tight mb-8 underline underline-offset-[16px] decoration-blue-500/30">Connect_Now</h2>
                    <p className=" text-neutral-500 mt-4 font-inter text-sm leading-relaxed mb-12">
                        Currently reviewing new project inquiries. If you have a mission-critical application that needs high-end engineering, initiate a connection below.
                    </p>
                    <div className="space-y-6 opacity-60 text-[10px] tracking-[0.2em] uppercase">
                        <div className="flex items-center gap-6">
                            <span className="w-12 h-px bg-current"></span>
                            <a href="mailto:kingnorway17@gmail.com" className='hover:text-blue-500 hover:underline'><span>Email: kingnorway17@gmail.com</span></a>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="w-12 h-px bg-current"></span>
                            <a href="https://github.com/deyvtech" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 hover:underline'><span>GitHub: deyv_sys_main</span></a>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="w-12 h-px bg-current"></span>
                            <span>Location: UTC+8 (Remote)</span>
                        </div>
                    </div>
                </div>
                
                <div className="md:col-span-7">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="full_name" className="text-[9px] uppercase tracking-widest opacity-100 dark:opacity-40">Identity_Token</label>
                                  <input type="text" className="input-field" placeholder="Full Name" value="" {...register("full_name", {required: true})} />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email_address" className="text-[9px] uppercase tracking-widest opacity-100 dark:opacity-40">Return_Channel</label>
                                <input type="email" className="input-field" placeholder="Email Address" value="" {...register("email_address", {required: true})} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-[9px] uppercase tracking-widest opacity-100 dark:opacity-40">Message_Buffer</label>
                            <textarea rows="6" placeholder="Project details and scope..." className="input-field resize-none" value="" {...register("message", {required: true})} />
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <div id="formStatus" className="text-[10px] uppercase tracking-widest hidden">
                                <span className="text-blue-500 animate-pulse">Establishing_Secure_Link...</span>
                            </div>
                            <button type="submit" className="ml-auto border border-slate-100/10 px-12 py-4 text-[12px] uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all backdrop-blur-md shadow-md">
                                Push_Message
                            </button>
                        </div>
                    </form>

                    
                    <div id="successMsg" className="hidden border border-green-500/30 bg-green-500/5 p-12 text-center rounded-sm">
                        <div className="w-12 h-12 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <p className="text-green-500 text-[10px] uppercase tracking-[0.3em] mb-4">Transmission_Verified</p>
                        <p className="text-xs font-sans text-neutral-500">Your signal has been received. I will respond via return address shortly.</p>
                        {/* <button onClick={resetForm} className="mt-8 text-[9px] uppercase tracking-widest underline underline-offset-4 opacity-40 hover:opacity-100">Send_New_Signal</button> */}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact