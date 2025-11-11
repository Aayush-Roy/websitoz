// // //     // 'use client';
// // //     // import React, { ChangeEvent, FormEvent, useState } from 'react';
    
// // //     // type FormDataT = {
// // //     //   name: string;
// // //     //   email: string;
// // //     //   phone: string;
// // //     //   service: string;
// // //     //   message: string;
// // //     // };
    
// // //     // export default function WebsitozLanding() {
// // //     //   const scriptURL = 'https://script.google.com/macros/s/AKfycbwK1I9kzgExYukuzhgrgP5M7_n2ipcVn-A2nWUqSnJ_YsjZsXU7sC9ckpLGnxB3gIjn/exec';
    
// // //     //   const [formData, setFormData] = useState<FormDataT>({ name: '', email: '', phone: '', service: 'React Website', message: '' });
// // //     //   const [loading, setLoading] = useState(false);
// // //     //   const [isSubmitted, setIsSubmitted] = useState(false);
    
// // //     //   const services = ['WordPress Site', 'React Website', 'Next.js Site', 'MERN App', 'React Native App', 'Custom Design'];
    
// // //     //   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
// // //     //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //     //   };
    
// // //     //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
// // //     //     e.preventDefault();
// // //     //     setLoading(true);
    
// // //     //     try {
// // //     //       const response = await fetch(scriptURL, {
// // //     //         method: 'POST',
// // //     //         body: new FormData(e.currentTarget),
// // //     //       });
    
// // //     //       if (response.ok) {
// // //     //         setIsSubmitted(true);
// // //     //         setFormData({ name: '', email: '', phone: '', service: 'React Website', message: '' });
// // //     //         setTimeout(() => setIsSubmitted(false), 5000);
// // //     //       } else {
// // //     //         alert('Error submitting form!');
// // //     //       }
// // //     //     } catch (err) {
// // //     //       console.error('Error:', err);
// // //     //       alert('Something went wrong!');
// // //     //     } finally {
// // //     //       setLoading(false);
// // //     //     }
// // //     //   };
    
// // //     //   return (
// // //     //     <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#121212] text-white p-10">
    
// // //     //       <main className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-start">
// // //     //         <section>
// // //     //           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Create your digital business with <span className="text-[#cfff04]">Websitoz</span></h2>
// // //     //           <p className="mt-6 text-gray-300 max-w-xl">We design and build premium websites & apps — WordPress, React, Next.js, MERN apps, and React Native. High-converting, performance-first, pixel-perfect design inspired by Dribbble.</p>
    
// // //     //           <div className="mt-8 flex gap-4">
// // //     //             <a href="#contact" className="inline-flex items-center gap-3 bg-[#cfff04] text-black px-6 py-3 rounded-2xl font-semibold shadow-lg">Get Started</a>
// // //     //             <a href="#portfolio" className="inline-flex items-center gap-3 border border-gray-700 px-6 py-3 rounded-2xl text-gray-300">View Portfolio</a>
// // //     //           </div>
    
// // //     //           <div className="mt-10 grid grid-cols-3 gap-4 w-full max-w-sm">
// // //     //             {['React', 'Next.js', 'WordPress', 'MERN', 'React Native', 'Figma'].map((l) => (
// // //     //               <div key={l} className="flex items-center gap-3 bg-[#0b0b0b] border border-gray-800 px-3 py-2 rounded">
// // //     //                 <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center text-sm font-bold">{l[0]}</div>
// // //     //                 <div className="text-xs text-gray-300">{l}</div>
// // //     //               </div>
// // //     //             ))}
// // //     //           </div>
    
// // //     //           <div className="mt-8 text-sm text-gray-400">Trusted by startups — clean code, smooth animations, SEO-ready markup.</div>
    
// // //     //           <section id="portfolio" className="mt-12">
// // //     //             <h4 className="text-xl font-bold">Selected work</h4>
// // //     //             <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
// // //     //               {Array.from({ length: 6 }).map((_, i) => (
// // //     //                 <figure key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800">
// // //     //                   <div className="h-48 bg-gray-700/30 flex items-center justify-center text-gray-300">Portfolio Image {i + 1}</div>
// // //     //                   <figcaption className="p-4">
// // //     //                     <h5 className="font-semibold">Project Title {i + 1}</h5>
// // //     //                     <p className="text-sm text-gray-400 mt-1">React / Next.js / Tailwind</p>
// // //     //                   </figcaption>
// // //     //                 </figure>
// // //     //               ))}
// // //     //             </div>
// // //     //           </section>
// // //     //         </section>
    
// // //     //         <aside id="contact" className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 shadow-2xl sticky top-8">
// // //     //           <h3 className="text-2xl font-bold">Start your project</h3>
// // //     //           <p className="text-sm text-gray-400 mt-1">Fill the form — leads saved directly to Google Sheets via Apps Script.</p>
    
// // //     //           <form onSubmit={handleSubmit} className="mt-6 space-y-4">
// // //     //             <div>
// // //     //               <label className="text-sm text-gray-300">Full name</label>
// // //     //               <input name="name" value={formData.name} onChange={handleChange} required className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2" />
// // //     //             </div>
    
// // //     //             <div>
// // //     //               <label className="text-sm text-gray-300">Email</label>
// // //     //               <input name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2" />
// // //     //             </div>
    
// // //     //             <div>
// // //     //               <label className="text-sm text-gray-300">Phone</label>
// // //     //               <input name="phone" value={formData.phone} onChange={handleChange} className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2" />
// // //     //             </div>
    
// // //     //             <div>
// // //     //               <label className="text-sm text-gray-300">I want</label>
// // //     //               <select name="service" value={formData.service} onChange={handleChange} className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2">
// // //     //                 {services.map((s) => (
// // //     //                   <option key={s} value={s}>{s}</option>
// // //     //                 ))}
// // //     //               </select>
// // //     //             </div>
    
// // //     //             <div>
// // //     //               <label className="text-sm text-gray-300">Message</label>
// // //     //               <textarea name="message" value={formData.message} onChange={handleChange} className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2" rows={4}></textarea>
// // //     //             </div>
// // //     //             #cfff04
    
// // //     //             <div className="flex items-center justify-between">
// // //     //               <button type="submit" disabled={loading} className="px-5 py-2 rounded-2xl bg-[#cfff04] text-black font-semibold">{loading ? 'Sending...' : 'Send Request'}</button>
// // //     //               {isSubmitted && <div className="text-green-400 text-sm">Thanks — request received!</div>}
// // //     //             </div>
// // //     //           </form>
    
// // //     //           <div className="mt-6 text-xs text-gray-500">By sending you agree to our <a className="underline">Terms</a> and <a className="underline">Privacy</a>.</div>
// // //     //         </aside>
// // //     //       </main>
    
        
// // //     //     </div>
// // //     //   );
// // //     // }
    
// // //     /* --------------------------- Google Apps Script (Code.gs) --------------------------- */
    
// // //     /*
// // //     1) Create a new Google Apps Script project (script.google.com).
// // //     2) Replace the default code with the snippet below. Set `SPREADSHEET_ID` to your sheet's ID and `SHEET_NAME` to the sheet name.
// // //     3) Deploy > New deployment > Select type "Web app". Set "Execute as" = "Me" and "Who has access" = "Anyone".
// // //     4) Copy the web app URL — that's your scriptURL (paste into the React component).
// // //     5) Make sure the sheet has headers: Timestamp | Name | Email | Phone | Service | Message
    
// // //     Code:
// // //     */
    
// // //     /* Code.gs */
    
// // //     // function doPost(e) {
// // //     //   try {
// // //     //     const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
// // //     //     const SHEET_NAME = 'Leads';
// // //     //     const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
// // //     //     const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    
// // //     //     const params = e.parameter || {};
// // //     //     const row = [new Date(), params.name || '', params.email || '', params.phone || '', params.service || '', params.message || ''];
// // //     //     sheet.appendRow(row);
    
// // //     //     return ContentService
// // //     //       .createTextOutput(JSON.stringify({ result: 'success' }))
// // //     //       .setMimeType(ContentService.MimeType.JSON);
// // //     //   } catch (err) {
// // //     //     return ContentService
// // //     //       .createTextOutput(JSON.stringify({ result: 'error', error: err.message }))
// // //     //       .setMimeType(ContentService.MimeType.JSON);
// // //     //   }
// // //     // }
    
// // //     /* Security notes:
// // //     - Deploying as "Anyone" will allow anonymous submissions; add validation or captcha on the client if needed.
// // //     - For spam protection add a simple honeypot field or integrate reCAPTCHA v2/3.
// // //     - The Apps Script quota is limited — for high-volume production use a proper backend.
// // //     */
    
// // // 'use client';
// // // import React, { ChangeEvent, FormEvent, useState } from 'react';

// // // type FormDataT = {
// // //   name: string;
// // //   email: string;
// // //   phone: string;
// // //   service: string;
// // //   message: string;
// // // };

// // // export default function WebsitozLanding() {
// // //   const scriptURL = "https://script.google.com/macros/s/AKfycbyHNmMJLM6YJ4DEVP-dL-q-gbLkVsIq8_iQl3HrsX6UusSImvqJioHorjG_OJPZKiwZ/exec";
    
// // //   const [formData, setFormData] = useState<FormDataT>({
// // //     name: '',
// // //     email: '',
// // //     phone: '',
// // //     service: 'React Website',
// // //     message: '',
// // //   });
// // //   const [loading, setLoading] = useState(false);
// // //   const [isSubmitted, setIsSubmitted] = useState(false);

// // //   const services = [
// // //     'WordPress Site',
// // //     'React Website',
// // //     'Next.js Site',
// // //     'MERN App',
// // //     'React Native App',
// // //     'Custom Design',
// // //     'DevOPS',
// // //     'Testing'
// // //   ];

// // //   const handleChange = (
// // //     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
// // //   ) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
// // //     e.preventDefault();
// // //     setLoading(true);

// // //     try {
// // //       const response = await fetch(scriptURL, {
// // //         method: 'POST',
// // //         body: new FormData(e.currentTarget),
// // //       });

// // //       if (response.ok) {
// // //         setIsSubmitted(true);
// // //         setFormData({
// // //           name: '',
// // //           email: '',
// // //           phone: '',
// // //           service: 'React Website',
// // //           message: '',
// // //         });
// // //         setTimeout(() => setIsSubmitted(false), 5000);
// // //       } else {
// // //         alert('Error submitting form!');
// // //       }
// // //     } catch (err) {
// // //       console.error('Error:', err);
// // //       alert('Something went wrong!');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#121212] text-white p-6 sm:p-10">
// // //       <main className="max-w-6xl mx-auto py-12 grid lg:grid-cols-2 gap-12 items-start">
// // //         {/* LEFT SECTION */}
// // //         <section>
// // //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
// // //             Create your digital business with{' '}
// // //             <span className="text-[#cfff04]">Websitoz</span>
// // //           </h2>

// // //           <p className="mt-6 text-gray-300 max-w-xl text-sm sm:text-base">
// // //             We design and build premium websites & apps — WordPress, React,
// // //             Next.js, MERN apps, and React Native. High-converting,
// // //             performance-first, pixel-perfect design inspired by Dribbble.
// // //           </p>

// // //           <div className="mt-8 flex flex-wrap gap-4">
// // //             <a
// // //               href="#contact"
// // //               className="inline-flex items-center justify-center gap-2 bg-[#cfff04] text-black px-6 py-3 rounded-2xl font-semibold shadow-lg transition hover:bg-[#dfff34]"
// // //             >
// // //               Get Started
// // //             </a>
// // //             {/* <a
// // //               href="#portfolio"
// // //               className="inline-flex items-center justify-center gap-2 border border-gray-700 px-6 py-3 rounded-2xl text-gray-300 hover:bg-gray-900 transition"
// // //             >
// // //               View Portfolio
// // //             </a> */}
// // //           </div>

// // //           <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-sm">
// // //             {['React', 'Next.js', 'WordPress', 'MERN', 'React Native', 'Figma'].map((l) => (
// // //               <div
// // //                 key={l}
// // //                 className="flex items-center gap-3 bg-[#0b0b0b] border border-gray-800 px-3 py-2 rounded"
// // //               >
// // //                 <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center text-sm font-bold">
// // //                   {l[0]}
// // //                 </div>
// // //                 <div className="text-xs text-gray-300">{l}</div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <div className="mt-8 text-sm text-gray-400">
// // //             Trusted by startups — clean code, smooth animations, SEO-ready
// // //             markup.
// // //           </div>

// // //           {/* PORTFOLIO SECTION */}
// // //           <section id="portfolio" className="mt-12">
// // //   <h4 className="text-xl font-bold mb-6">Selected work</h4>
// // //   <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    
// // //     <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
// // //       <img
// // //         src="https://cdn.dribbble.com/userupload/45139240/file/723c49a8177b3dbf259a21fed53bace5.png?crop=0x0-2837x2128&format=webp&resize=400x300&vertical=center"
// // //         alt="Portfolio 1"
// // //         className="h-40 sm:h-48 w-full object-cover"
// // //       />
// // //     </figure>

// // //     <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
// // //       <img
// // //         src="https://cdn.dribbble.com/userupload/10556329/file/original-2ed892779d4de172b39d912a6b2b18e7.jpg?format=webp&resize=400x300&vertical=center"
// // //         alt="Portfolio 2"
// // //         className="h-40 sm:h-48 w-full object-cover"
// // //       />
// // //     </figure>

// // //     <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
// // //       <img
// // //         src="https://cdn.dribbble.com/userupload/30815054/file/original-0a0e6a1b1c30eaf0f827e8004797c122.png?format=webp&resize=400x300&vertical=center"
// // //         alt="Portfolio 3"
// // //         className="h-40 sm:h-48 w-full object-cover"
// // //       />
// // //     </figure>

// // //     <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
// // //       <img
// // //         src="https://cdn.dribbble.com/userupload/40668534/file/original-f895f023512636a265b1f29a7cb346e1.png?format=webp&resize=400x300&vertical=center"
// // //         alt="Portfolio 4"
// // //         className="h-40 sm:h-48 w-full object-cover"
// // //       />
// // //     </figure>

// // //   </div>
// // // </section>

// // //         </section>

// // //         {/* RIGHT SECTION (CONTACT FORM) */}
// // //         <aside
// // //           id="contact"
// // //           className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl sticky top-8"
// // //         >
// // //           <h3 className="text-2xl font-bold">Start your project</h3>
// // //           <p className="text-sm text-gray-400 mt-1">
// // //             Fill the form — leads saved directly to Google Sheets via Apps
// // //             Script.
// // //           </p>

// // //           <form onSubmit={handleSubmit} className="mt-6 space-y-4">
// // //             <div>
// // //               <label className="text-sm text-gray-300">Full name</label>
// // //               <input
// // //                 name="name"
// // //                 value={formData.name}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none"
// // //               />
// // //             </div>

// // //             <div>
// // //               <label className="text-sm text-gray-300">Email</label>
// // //               <input
// // //                 name="email"
// // //                 type="email"
// // //                 value={formData.email}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none"
// // //               />
// // //             </div>

// // //             <div>
// // //               <label className="text-sm text-gray-300">Phone</label>
// // //               <input
// // //                 name="phone"
// // //                 value={formData.phone}
// // //                 onChange={handleChange}
// // //                 className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none"
// // //               />
// // //             </div>

// // //             <div>
// // //               <label className="text-sm text-gray-300">I want</label>
// // //               <select
// // //                 name="service"
// // //                 value={formData.service}
// // //                 onChange={handleChange}
// // //                 className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none"
// // //               >
// // //                 {services.map((s) => (
// // //                   <option key={s} value={s} className="bg-[#0f0f0f] text-white">
// // //                     {s}
// // //                   </option>
// // //                 ))}
// // //               </select>
// // //             </div>

// // //             <div>
// // //               <label className="text-sm text-gray-300">Message</label>
// // //               <textarea
// // //                 name="message"
// // //                 value={formData.message}
// // //                 onChange={handleChange}
// // //                 rows={4}
// // //                 className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none"
// // //               ></textarea>
// // //             </div>

// // //             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
// // //               <button
// // //                 type="submit"
// // //                 disabled={loading}
// // //                 className="px-5 py-2 rounded-2xl bg-[#cfff04] text-black font-semibold hover:bg-[#e3ff3a] transition"
// // //               >
// // //                 {loading ? 'Sending...' : 'Send Request'}
// // //               </button>
// // //               {isSubmitted && (
// // //                 <div className="text-green-400 text-sm">
// // //                   Thanks — request received!
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </form>

// // //           <div className="mt-6 text-xs text-gray-500">
// // //             By sending you agree to our{' '}
// // //             <a className="underline text-[#cfff04]">Terms</a> and{' '}
// // //             <a className="underline text-[#cfff04]">Privacy</a>.
// // //           </div>
// // //         </aside>
// // //       </main>
// // //     </div>
// // //   );
// // // }
// // 'use client';
// // import React, { ChangeEvent, useState } from 'react';

// // type FormDataT = {
// //   name: string;
// //   email: string;
// //   phone: string;
// //   service: string;
// //   message: string;
// // };

// // export default function WebsitozLanding() {
// //   const scriptURL = "https://script.google.com/macros/s/AKfycbxQvsWW0KexQHlQLj-0eatJjBWLyw1_8lDAG532KXuhgMAAxcxNBR-CjJJ4-XrrjlLA8w/exec";
    
// //   const [formData, setFormData] = useState<FormDataT>({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     service: 'React Website',
// //     message: '',
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [isSubmitted, setIsSubmitted] = useState(false);
// //   const [error, setError] = useState('');

// //   const services = [
// //     'WordPress Site',
// //     'React Website',
// //     'Next.js Site',
// //     'MERN App',
// //     'React Native App',
// //     'Custom Design',
// //     'DevOPS',
// //     'Testing'
// //   ];

// //   const handleChange = (
// //     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
// //   ) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //     setError('');
// //   };

// //   const handleSubmit = async () => {
// //     if (!formData.name || !formData.email) {
// //       setError('Please fill in required fields');
// //       return;
// //     }

// //     setLoading(true);
// //     setError('');

// //     try {
// //       const formDataToSend = new FormData();
// //       formDataToSend.append('name', formData.name);
// //       formDataToSend.append('email', formData.email);
// //       formDataToSend.append('phone', formData.phone);
// //       formDataToSend.append('service', formData.service);
// //       formDataToSend.append('message', formData.message);

// //       const response = await fetch(scriptURL, {
// //         method: 'POST',
// //         body: formDataToSend,
// //       });

// //       if (response.ok || response.type === 'opaque') {
// //         setIsSubmitted(true);
// //         setFormData({
// //           name: '',
// //           email: '',
// //           phone: '',
// //           service: 'React Website',
// //           message: '',
// //         });
// //         setTimeout(() => setIsSubmitted(false), 5000);
// //       } else {
// //         setError('Failed to submit. Please try again.');
// //       }
      
// //     } catch (err) {
// //       console.error('Error:', err);
// //       setError('Something went wrong. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#121212] text-white p-6 sm:p-10">
// //       <main className="max-w-6xl mx-auto py-12 grid lg:grid-cols-2 gap-12 items-start">
// //         <section>
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
// //             Create your digital business with{' '}
// //             <span className="text-[#cfff04]">Websitoz</span>
// //           </h2>

// //           <p className="mt-6 text-gray-300 max-w-xl text-sm sm:text-base">
// //             We design and build premium websites & apps — WordPress, React,
// //             Next.js, MERN apps, and React Native. High-converting,
// //             performance-first, pixel-perfect design inspired by Dribbble.
// //           </p>

// //           <div className="mt-8 flex flex-wrap gap-4">
// //             <a
// //               href="#contact"
// //               className="inline-flex items-center justify-center gap-2 bg-[#cfff04] text-black px-6 py-3 rounded-2xl font-semibold shadow-lg transition hover:bg-[#dfff34]"
// //             >
// //               Get Started
// //             </a>
// //           </div>

// //           <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-sm">
// //             {['React', 'Next.js', 'WordPress', 'MERN', 'React Native', 'Figma'].map((l) => (
// //               <div
// //                 key={l}
// //                 className="flex items-center gap-3 bg-[#0b0b0b] border border-gray-800 px-3 py-2 rounded"
// //               >
// //                 <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center text-sm font-bold">
// //                   {l[0]}
// //                 </div>
// //                 <div className="text-xs text-gray-300">{l}</div>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="mt-8 text-sm text-gray-400">
// //             Trusted by startups — clean code, smooth animations, SEO-ready
// //             markup.
// //           </div>

// //           <section id="portfolio" className="mt-12">
// //             <h4 className="text-xl font-bold mb-6">Selected work</h4>
// //             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              
// //               <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
// //                 <img
// //                   src="https://cdn.dribbble.com/userupload/45139240/file/723c49a8177b3dbf259a21fed53bace5.png?crop=0x0-2837x2128&format=webp&resize=400x300&vertical=center"
// //                   alt="Portfolio 1"
// //                   className="h-40 sm:h-48 w-full object-cover"
// //                 />
// //               </figure>

// //               <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
// //                 <img
// //                   src="https://cdn.dribbble.com/userupload/10556329/file/original-2ed892779d4de172b39d912a6b2b18e7.jpg?format=webp&resize=400x300&vertical=center"
// //                   alt="Portfolio 2"
// //                   className="h-40 sm:h-48 w-full object-cover"
// //                 />
// //               </figure>

// //               <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
// //                 <img
// //                   src="https://cdn.dribbble.com/userupload/30815054/file/original-0a0e6a1b1c30eaf0f827e8004797c122.png?format=webp&resize=400x300&vertical=center"
// //                   alt="Portfolio 3"
// //                   className="h-40 sm:h-48 w-full object-cover"
// //                 />
// //               </figure>

// //               <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
// //                 <img
// //                   src="https://cdn.dribbble.com/userupload/40668534/file/original-f895f023512636a265b1f29a7cb346e1.png?format=webp&resize=400x300&vertical=center"
// //                   alt="Portfolio 4"
// //                   className="h-40 sm:h-48 w-full object-cover"
// //                 />
// //               </figure>

// //             </div>
// //           </section>
// //         </section>

// //         <aside
// //           id="contact"
// //           className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl sticky top-8"
// //         >
// //           <h3 className="text-2xl font-bold">Start your project</h3>
// //           <p className="text-sm text-gray-400 mt-1">
// //             Fill the form — leads saved directly to Google Sheets via Apps
// //             Script.
// //           </p>

// //           <div className="mt-6 space-y-4">
// //             <div>
// //               <label className="text-sm text-gray-300 block mb-1">Full name *</label>
// //               <input
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
// //               />
// //             </div>

// //             <div>
// //               <label className="text-sm text-gray-300 block mb-1">Email *</label>
// //               <input
// //                 name="email"
// //                 type="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
// //               />
// //             </div>

// //             <div>
// //               <label className="text-sm text-gray-300 block mb-1">Phone</label>
// //               <input
// //                 name="phone"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
// //               />
// //             </div>

// //             <div>
// //               <label className="text-sm text-gray-300 block mb-1">I want</label>
// //               <select
// //                 name="service"
// //                 value={formData.service}
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0f0f0f] border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
// //               >
// //                 {services.map((s) => (
// //                   <option key={s} value={s} className="bg-[#0f0f0f] text-white">
// //                     {s}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             <div>
// //               <label className="text-sm text-gray-300 block mb-1">Message</label>
// //               <textarea
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 rows={4}
// //                 className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white resize-none"
// //               ></textarea>
// //             </div>

// //             {error && (
// //               <div className="text-red-400 text-sm">{error}</div>
// //             )}

// //             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
// //               <button
// //                 onClick={handleSubmit}
// //                 disabled={loading}
// //                 className="px-5 py-2 rounded-2xl bg-[#cfff04] text-black font-semibold hover:bg-[#e3ff3a] transition disabled:opacity-50 disabled:cursor-not-allowed"
// //               >
// //                 {loading ? 'Sending...' : 'Send Request'}
// //               </button>
// //               {isSubmitted && (
// //                 <div className="text-green-400 text-sm">
// //                   ✓ Thanks — request received!
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           <div className="mt-6 text-xs text-gray-500">
// //             By sending you agree to our{' '}
// //             <span className="underline text-[#cfff04] cursor-pointer">Terms</span> and{' '}
// //             <span className="underline text-[#cfff04] cursor-pointer">Privacy</span>.
// //           </div>
// //         </aside>
// //       </main>
// //     </div>
// //   );
// // }
// // 'use client';
// // import React, { ChangeEvent, useState } from 'react';

// // type FormDataT = {
// //   name: string;
// //   email: string;
// //   phone: string;
// //   service: string;
// //   message: string;
// // };

// // export default function WebsitozLanding() {
// //   const scriptURL = "https://script.google.com/macros/s/AKfycbxRuCpWxmGqbO1nWItF8qepojByCEqdYqThg0ZarUBQpu1E6AdEnH3FjnrV-txXTxXTPA/exec";
    
// //   const [formData, setFormData] = useState<FormDataT>({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     service: 'React Website',
// //     message: '',
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [isSubmitted, setIsSubmitted] = useState(false);
// //   const [error, setError] = useState('');
// //   const [debugInfo, setDebugInfo] = useState('');

// //   const services = [
// //     'WordPress Site',
// //     'React Website',
// //     'Next.js Site',
// //     'MERN App',
// //     'React Native App',
// //     'Custom Design',
// //     'DevOPS',
// //     'Testing'
// //   ];

// //   const handleChange = (
// //     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
// //   ) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //     setError('');
// //     setDebugInfo('');
// //   };

// //   const handleSubmit = async () => {
// //     if (!formData.name || !formData.email) {
// //       setError('Please fill in required fields (Name & Email)');
// //       return;
// //     }

// //     setLoading(true);
// //     setError('');
// //     setDebugInfo('Sending data...');

// //     try {
// //       // Create URL with query parameters for testing
// //       const params = new URLSearchParams({
// //         name: formData.name,
// //         email: formData.email,
// //         phone: formData.phone,
// //         service: formData.service,
// //         message: formData.message
// //       });

// //       const url = `${scriptURL}?${params.toString()}`;
      
// //       setDebugInfo('Fetching: ' + scriptURL.substring(0, 50) + '...');

// //       const response = await fetch(url, {
// //         method: 'GET',
// //         redirect: 'follow'
// //       });

// //       setDebugInfo('Response received. Status: ' + response.status);

// //       const text = await response.text();
// //       setDebugInfo('Response: ' + text.substring(0, 100));

// //       let result;
// //       try {
// //         result = JSON.parse(text);
// //       } catch (e) {
// //         // If not JSON, assume success
// //         result = { result: 'success' };
// //       }

// //       if (result.result === 'success' || response.ok) {
// //         setIsSubmitted(true);
// //         setFormData({
// //           name: '',
// //           email: '',
// //           phone: '',
// //           service: 'React Website',
// //           message: '',
// //         });
// //         setDebugInfo('✓ Data sent successfully!');
// //         setTimeout(() => {
// //           setIsSubmitted(false);
// //           setDebugInfo('');
// //         }, 5000);
// //       } else {
// //         setError('Server returned error: ' + (result.message || 'Unknown error'));
// //         setDebugInfo('Error: ' + JSON.stringify(result));
// //       }
      
// //     } catch (err: any) {
// //       console.error('Submission error:', err);
// //       setError('Network error: ' + err.message);
// //       setDebugInfo('Error details: ' + err.toString());
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#121212] text-white p-6 sm:p-10">
// //       <main className="max-w-6xl mx-auto py-12 grid lg:grid-cols-2 gap-12 items-start">
// //         <section>
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
// //             Create your digital business with{' '}
// //             <span className="text-[#cfff04]">Websitoz</span>
// //           </h2>

// //           <p className="mt-6 text-gray-300 max-w-xl text-sm sm:text-base">
// //             We design and build premium websites & apps — WordPress, React,
// //             Next.js, MERN apps, and React Native. High-converting,
// //             performance-first, pixel-perfect design inspired by Dribbble.
// //           </p>

// //           <div className="mt-8 flex flex-wrap gap-4">
// //             <a
// //               href="#contact"
// //               className="inline-flex items-center justify-center gap-2 bg-[#cfff04] text-black px-6 py-3 rounded-2xl font-semibold shadow-lg transition hover:bg-[#dfff34]"
// //             >
// //               Get Started
// //             </a>
// //           </div>

// //           <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-sm">
// //             {['React', 'Next.js', 'WordPress', 'MERN', 'React Native', 'Figma'].map((l) => (
// //               <div
// //                 key={l}
// //                 className="flex items-center gap-3 bg-[#0b0b0b] border border-gray-800 px-3 py-2 rounded"
// //               >
// //                 <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center text-sm font-bold">
// //                   {l[0]}
// //                 </div>
// //                 <div className="text-xs text-gray-300">{l}</div>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="mt-8 text-sm text-gray-400">
// //             Trusted by startups — clean code, smooth animations, SEO-ready
// //             markup.
// //           </div>

// //           <section id="portfolio" className="mt-12">
// //             <h4 className="text-xl font-bold mb-6">Selected work</h4>
// //             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              
// //               <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
// //                 <img
// //                   src="https://cdn.dribbble.com/userupload/45139240/file/723c49a8177b3dbf259a21fed53bace5.png?crop=0x0-2837x2128&format=webp&resize=400x300&vertical=center"
// //                   alt="Portfolio 1"
// //                   className="h-40 sm:h-48 w-full object-cover"
// //                 />
// //               </figure>

// //               <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
// //                 <img
// //                   src="https://cdn.dribbble.com/userupload/10556329/file/original-2ed892779d4de172b39d912a6b2b18e7.jpg?format=webp&resize=400x300&vertical=center"
// //                   alt="Portfolio 2"
// //                   className="h-40 sm:h-48 w-full object-cover"
// //                 />
// //               </figure>

// //               <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
// //                 <img
// //                   src="https://cdn.dribbble.com/userupload/30815054/file/original-0a0e6a1b1c30eaf0f827e8004797c122.png?format=webp&resize=400x300&vertical=center"
// //                   alt="Portfolio 3"
// //                   className="h-40 sm:h-48 w-full object-cover"
// //                 />
// //               </figure>

// //               <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
// //                 <img
// //                   src="https://cdn.dribbble.com/userupload/40668534/file/original-f895f023512636a265b1f29a7cb346e1.png?format=webp&resize=400x300&vertical=center"
// //                   alt="Portfolio 4"
// //                   className="h-40 sm:h-48 w-full object-cover"
// //                 />
// //               </figure>

// //             </div>
// //           </section>
// //         </section>

// //         <aside
// //           id="contact"
// //           className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl sticky top-8"
// //         >
// //           <h3 className="text-2xl font-bold">Start your project</h3>
// //           <p className="text-sm text-gray-400 mt-1">
// //             Fill the form — leads saved directly to Google Sheets via Apps
// //             Script.
// //           </p>

// //           <div className="mt-6 space-y-4">
// //             <div>
// //               <label className="text-sm text-gray-300 block mb-1">Full name *</label>
// //               <input
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 placeholder="John Doe"
// //                 className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
// //               />
// //             </div>

// //             <div>
// //               <label className="text-sm text-gray-300 block mb-1">Email *</label>
// //               <input
// //                 name="email"
// //                 type="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 placeholder="john@example.com"
// //                 className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
// //               />
// //             </div>

// //             <div>
// //               <label className="text-sm text-gray-300 block mb-1">Phone</label>
// //               <input
// //                 name="phone"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 placeholder="+91 98765 43210"
// //                 className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
// //               />
// //             </div>

// //             <div>
// //               <label className="text-sm text-gray-300 block mb-1">I want</label>
// //               <select
// //                 name="service"
// //                 value={formData.service}
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0f0f0f] border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
// //               >
// //                 {services.map((s) => (
// //                   <option key={s} value={s} className="bg-[#0f0f0f] text-white">
// //                     {s}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             <div>
// //               <label className="text-sm text-gray-300 block mb-1">Message</label>
// //               <textarea
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 rows={4}
// //                 placeholder="Tell us about your project..."
// //                 className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white resize-none"
// //               ></textarea>
// //             </div>

// //             {error && (
// //               <div className="p-3 bg-red-900/20 border border-red-800 rounded text-red-400 text-sm">
// //                 ❌ {error}
// //               </div>
// //             )}

// //             {debugInfo && (
// //               <div className="p-3 bg-blue-900/20 border border-blue-800 rounded text-blue-400 text-xs">
// //                 🔍 Debug: {debugInfo}
// //               </div>
// //             )}

// //             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
// //               <button
// //                 onClick={handleSubmit}
// //                 disabled={loading}
// //                 className="px-5 py-2 rounded-2xl bg-[#cfff04] text-black font-semibold hover:bg-[#e3ff3a] transition disabled:opacity-50 disabled:cursor-not-allowed"
// //               >
// //                 {loading ? 'Sending...' : 'Send Request'}
// //               </button>
// //               {isSubmitted && (
// //                 <div className="text-green-400 text-sm font-medium">
// //                   ✓ Request received!
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           <div className="mt-6 text-xs text-gray-500">
// //             By sending you agree to our{' '}
// //             <span className="underline text-[#cfff04] cursor-pointer">Terms</span> and{' '}
// //             <span className="underline text-[#cfff04] cursor-pointer">Privacy</span>.
// //           </div>
// //         </aside>
// //       </main>
// //     </div>
// //   );
// // }
// 'use client';
// import React, { ChangeEvent, useState } from 'react';

// type FormDataT = {
//   name: string;
//   email: string;
//   phone: string;
//   service: string;
//   message: string;
// };

// export default function WebsitozLanding() {
//   // Replace with your NEW deployment URL
//   const scriptURL = "https://script.google.com/macros/s/AKfycbz7z07ZXonKP4-M_Cb_fcC6caTuAGft1Jz6sagxVM1Jz6DG_x2Tavv75nW4MaA9gxq7Xw/exec";
    
//   const [formData, setFormData] = useState<FormDataT>({
//     name: '',
//     email: '',
//     phone: '',
//     service: 'React Website',
//     message: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const services = [
//     'WordPress Site',
//     'React Website',
//     'Next.js Site',
//     'MERN App',
//     'React Native App',
//     'Custom Design',
//     'DevOPS',
//     'Testing'
//   ];

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError('');
//   };

//   const handleSubmit = async () => {
//     if (!formData.name || !formData.email) {
//       setError('Please fill in required fields (Name & Email)');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       // Create FormData object
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('phone', formData.phone);
//       formDataToSend.append('service', formData.service);
//       formDataToSend.append('message', formData.message);

//       // Send POST request
//       await fetch(scriptURL, {
//         method: 'POST',
//         body: formDataToSend,
//         mode: 'no-cors' // This is important for Google Apps Script
//       });

//       // With no-cors, we assume success if no error is thrown
//       setIsSubmitted(true);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         service: 'React Website',
//         message: '',
//       });
      
//       setTimeout(() => {
//         setIsSubmitted(false);
//       }, 5000);
      
//     } catch (err: any) {
//       console.error('Submission error:', err);
//       setError('Failed to submit. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#121212] text-white p-6 sm:p-10">
//       <main className="max-w-6xl mx-auto py-12 grid lg:grid-cols-2 gap-12 items-start">
//         <section>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
//             Create your digital business with{' '}
//             <span className="text-[#cfff04]">Websitoz</span>
//           </h2>

//           <p className="mt-6 text-gray-300 max-w-xl text-sm sm:text-base">
//             We design and build premium websites & apps — WordPress, React,
//             Next.js, MERN apps, and React Native. High-converting,
//             performance-first, pixel-perfect design inspired by Dribbble.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <a
//               href="#contact"
//               className="inline-flex items-center justify-center gap-2 bg-[#cfff04] text-black px-6 py-3 rounded-2xl font-semibold shadow-lg transition hover:bg-[#dfff34]"
//             >
//               Get Started
//             </a>
//           </div>

//           <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-sm">
//             {['React', 'Next.js', 'WordPress', 'MERN', 'React Native', 'Figma'].map((l) => (
//               <div
//                 key={l}
//                 className="flex items-center gap-3 bg-[#0b0b0b] border border-gray-800 px-3 py-2 rounded"
//               >
//                 <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center text-sm font-bold">
//                   {l[0]}
//                 </div>
//                 <div className="text-xs text-gray-300">{l}</div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-8 text-sm text-gray-400">
//             Trusted by startups — clean code, smooth animations, SEO-ready
//             markup.
//           </div>

//           <section id="portfolio" className="mt-12">
//             <h4 className="text-xl font-bold mb-6">Selected work</h4>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              
//               <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
//                 <img
//                   src="https://cdn.dribbble.com/userupload/45139240/file/723c49a8177b3dbf259a21fed53bace5.png?crop=0x0-2837x2128&format=webp&resize=400x300&vertical=center"
//                   alt="Portfolio 1"
//                   className="h-40 sm:h-48 w-full object-cover"
//                 />
//               </figure>

//               <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
//                 <img
//                   src="https://cdn.dribbble.com/userupload/10556329/file/original-2ed892779d4de172b39d912a6b2b18e7.jpg?format=webp&resize=400x300&vertical=center"
//                   alt="Portfolio 2"
//                   className="h-40 sm:h-48 w-full object-cover"
//                 />
//               </figure>

//               <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
//                 <img
//                   src="https://cdn.dribbble.com/userupload/30815054/file/original-0a0e6a1b1c30eaf0f827e8004797c122.png?format=webp&resize=400x300&vertical=center"
//                   alt="Portfolio 3"
//                   className="h-40 sm:h-48 w-full object-cover"
//                 />
//               </figure>

//               <figure className="rounded-xl overflow-hidden border border-gray-800 hover:scale-105 transition-transform duration-300">
//                 <img
//                   src="https://cdn.dribbble.com/userupload/40668534/file/original-f895f023512636a265b1f29a7cb346e1.png?format=webp&resize=400x300&vertical=center"
//                   alt="Portfolio 4"
//                   className="h-40 sm:h-48 w-full object-cover"
//                 />
//               </figure>

//             </div>
//           </section>
//         </section>

//         <aside
//           id="contact"
//           className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl sticky top-8"
//         >
//           <h3 className="text-2xl font-bold">Start your project</h3>
//           <p className="text-sm text-gray-400 mt-1">
//             Fill the form — leads saved directly to Google Sheets via Apps
//             Script.
//           </p>

//           <div className="mt-6 space-y-4">
//             <div>
//               <label className="text-sm text-gray-300 block mb-1">Full name *</label>
//               <input
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="John Doe"
//                 className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-300 block mb-1">Email *</label>
//               <input
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="john@example.com"
//                 className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-300 block mb-1">Phone</label>
//               <input
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="+91 98765 43210"
//                 className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-300 block mb-1">I want</label>
//               <select
//                 name="service"
//                 value={formData.service}
//                 onChange={handleChange}
//                 className="w-full bg-[#0f0f0f] border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
//               >
//                 {services.map((s) => (
//                   <option key={s} value={s} className="bg-[#0f0f0f] text-white">
//                     {s}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="text-sm text-gray-300 block mb-1">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={4}
//                 placeholder="Tell us about your project..."
//                 className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white resize-none"
//               ></textarea>
//             </div>

//             {error && (
//               <div className="p-3 bg-red-900/20 border border-red-800 rounded text-red-400 text-sm">
//                 ❌ {error}
//               </div>
//             )}

//             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
//               <button
//                 onClick={handleSubmit}
//                 disabled={loading}
//                 className="px-5 py-2 rounded-2xl bg-[#cfff04] text-black font-semibold hover:bg-[#e3ff3a] transition disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? 'Sending...' : 'Send Request'}
//               </button>
//               {isSubmitted && (
//                 <div className="text-green-400 text-sm font-medium">
//                   ✓ Request received!
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="mt-6 text-xs text-gray-500">
//             By sending you agree to our{' '}
//             <span className="underline text-[#cfff04] cursor-pointer">Terms</span> and{' '}
//             <span className="underline text-[#cfff04] cursor-pointer">Privacy</span>.
//           </div>
//         </aside>
//       </main>
//     </div>
//   );
// }
'use client';
import React, { ChangeEvent, useState } from 'react';

type FormDataT = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function WebsitozLanding() {
  // 👇 Yahan apna Google Apps Script deployment URL daalna
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbyxk2M41PpzQoxTPt6i6lxnyyu3_wnLHErBovYCjhsjrQZ-PSNWEfkqc9L8bSeKwnCt0g/exec';

  const [formData, setFormData] = useState<FormDataT>({
    name: '',
    email: '',
    phone: '',
    service: 'React Website',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const services = [
    'WordPress Site',
    'React Website',
    'Next.js Site',
    'MERN App',
    'React Native App',
    'Custom Design',
    'DevOPS',
    'Testing',
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError('Please fill in required fields (Name & Email)');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // 👇 Send JSON data to Google Sheets via Apps Script
      const res = await fetch(scriptURL, {
       method: "POST",
  body: JSON.stringify(formData),
  mode: "no-cors", // <— important for Google Sheets
  headers: { "Content-Type": "application/json" },
      });

      if (res.ok || res.type === 'opaque') {
        // opaque = success for no-cors responses
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'React Website',
          message: '',
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Network response not ok');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('❌ Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#121212] text-white p-6 sm:p-10">
      <main className="max-w-6xl mx-auto py-12 grid lg:grid-cols-2 gap-12 items-start">
        {/* ---- Left Section ---- */}
        <section>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Create your digital business with{' '}
            <span className="text-[#cfff04]">Websitoz</span>
          </h2>
          <p className="mt-6 text-gray-300 max-w-xl text-sm sm:text-base">
            We design and build premium websites & apps — WordPress, React,
            Next.js, MERN apps, and React Native. High-converting,
            performance-first, pixel-perfect design inspired by Dribbble.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#cfff04] text-black px-6 py-3 rounded-2xl font-semibold shadow-lg transition hover:bg-[#dfff34]"
            >
              Get Started
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-sm">
            {['React', 'Next.js', 'WordPress', 'MERN', 'React Native', 'Figma'].map((l) => (
              <div
                key={l}
                className="flex items-center gap-3 bg-[#0b0b0b] border border-gray-800 px-3 py-2 rounded"
              >
                <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center text-sm font-bold">
                  {l[0]}
                </div>
                <div className="text-xs text-gray-300">{l}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-gray-400">
            Trusted by startups — clean code, smooth animations, SEO-ready
            markup.
          </div>
        </section>

        {/* ---- Right Section (Form) ---- */}
        <aside
          id="contact"
          className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl sticky top-8"
        >
          <h3 className="text-2xl font-bold">Start your project</h3>
          <p className="text-sm text-gray-400 mt-1">
            Fill the form — leads saved directly to Google Sheets via Apps
            Script.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-gray-300 block mb-1">
                Full name *
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-1">Email *</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-1">Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-1">I want</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#0f0f0f] border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white"
              >
                {services.map((s) => (
                  <option key={s} value={s} className="bg-[#0f0f0f] text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-transparent border border-gray-800 rounded px-3 py-2 focus:ring-2 focus:ring-[#cfff04] outline-none text-white resize-none"
              ></textarea>
            </div>

            {error && (
              <div className="p-3 bg-red-900/20 border border-red-800 rounded text-red-400 text-sm">
                ❌ {error}
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2 rounded-2xl bg-[#cfff04] text-black font-semibold hover:bg-[#e3ff3a] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Request'}
              </button>
              {isSubmitted && (
                <div className="text-green-400 text-sm font-medium">
                  ✓ Request received!
                </div>
              )}
            </div>
          </form>

          <div className="mt-6 text-xs text-gray-500">
            By sending you agree to our{' '}
            <span className="underline text-[#cfff04] cursor-pointer">
              Terms
            </span>{' '}
            and{' '}
            <span className="underline text-[#cfff04] cursor-pointer">
              Privacy
            </span>
            .
          </div>
        </aside>
      </main>
    </div>
  );
}
