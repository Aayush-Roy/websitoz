
import React, { ChangeEvent, FormEvent, useState } from 'react';

type FormDataT = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function WebsitozLanding() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwK1I9kzgExYukuzhgrgP5M7_n2ipcVn-A2nWUqSnJ_YsjZsXU7sC9ckpLGnxB3gIjn/exec';

  const [formData, setFormData] = useState<FormDataT>({ name: '', email: '', phone: '', service: 'React Website', message: '' });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = ['WordPress Site', 'React Website', 'Next.js Site', 'MERN App', 'React Native App', 'Custom Design'];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: 'React Website', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert('Error submitting form!');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#121212] text-white">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#f88310] to-[#ffb86b] flex items-center justify-center text-black font-bold">W</div>
          <div>
            <h1 className="text-xl font-extrabold">Websitoz</h1>
            <p className="text-xs text-gray-300">Premium Digital Products & Agency</p>
          </div>
        </div>
        <nav className="space-x-6 hidden md:block text-sm text-gray-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-start">
        <section>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Create your digital business with <span className="text-[#f88310]">Websitoz</span></h2>
          <p className="mt-6 text-gray-300 max-w-xl">We design and build premium websites & apps — WordPress, React, Next.js, MERN apps, and React Native. High-converting, performance-first, pixel-perfect design inspired by Dribbble.</p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="inline-flex items-center gap-3 bg-[#f88310] text-black px-6 py-3 rounded-2xl font-semibold shadow-lg">Get Started</a>
            <a href="#portfolio" className="inline-flex items-center gap-3 border border-gray-700 px-6 py-3 rounded-2xl text-gray-300">View Portfolio</a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 w-full max-w-sm">
            {['React', 'Next.js', 'WordPress', 'MERN', 'React Native', 'Figma'].map((l) => (
              <div key={l} className="flex items-center gap-3 bg-[#0b0b0b] border border-gray-800 px-3 py-2 rounded">
                <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center text-sm font-bold">{l[0]}</div>
                <div className="text-xs text-gray-300">{l}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-gray-400">Trusted by startups — clean code, smooth animations, SEO-ready markup.</div>

          <section id="portfolio" className="mt-12">
            <h4 className="text-xl font-bold">Selected work</h4>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <figure key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800">
                  <div className="h-48 bg-gray-700/30 flex items-center justify-center text-gray-300">Portfolio Image {i + 1}</div>
                  <figcaption className="p-4">
                    <h5 className="font-semibold">Project Title {i + 1}</h5>
                    <p className="text-sm text-gray-400 mt-1">React / Next.js / Tailwind</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </section>

        <aside id="contact" className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 shadow-2xl sticky top-8">
          <h3 className="text-2xl font-bold">Start your project</h3>
          <p className="text-sm text-gray-400 mt-1">Fill the form — leads saved directly to Google Sheets via Apps Script.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-gray-300">Full name</label>
              <input name="name" value={formData.name} onChange={handleChange} required className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2" />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2" />
            </div>

            <div>
              <label className="text-sm text-gray-300">Phone</label>
              <input name="phone" value={formData.phone} onChange={handleChange} className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2" />
            </div>

            <div>
              <label className="text-sm text-gray-300">I want</label>
              <select name="service" value={formData.service} onChange={handleChange} className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2">
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-300">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} className="mt-1 w-full bg-transparent border border-gray-800 rounded px-3 py-2" rows={4}></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button type="submit" disabled={loading} className="px-5 py-2 rounded-2xl bg-[#f88310] text-black font-semibold">{loading ? 'Sending...' : 'Send Request'}</button>
              {isSubmitted && <div className="text-green-400 text-sm">Thanks — request received!</div>}
            </div>
          </form>

          <div className="mt-6 text-xs text-gray-500">By sending you agree to our <a className="underline">Terms</a> and <a className="underline">Privacy</a>.</div>
        </aside>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-8 text-gray-400 text-sm">© {new Date().getFullYear()} Websitoz — Built with ❤️</footer>
    </div>
  );
}

/* --------------------------- Google Apps Script (Code.gs) --------------------------- */

/*
1) Create a new Google Apps Script project (script.google.com).
2) Replace the default code with the snippet below. Set `SPREADSHEET_ID` to your sheet's ID and `SHEET_NAME` to the sheet name.
3) Deploy > New deployment > Select type "Web app". Set "Execute as" = "Me" and "Who has access" = "Anyone".
4) Copy the web app URL — that's your scriptURL (paste into the React component).
5) Make sure the sheet has headers: Timestamp | Name | Email | Phone | Service | Message

Code:
*/

/* Code.gs */

function doPost(e) {
  try {
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
    const SHEET_NAME = 'Leads';
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    const params = e.parameter || {};
    const row = [new Date(), params.name || '', params.email || '', params.phone || '', params.service || '', params.message || ''];
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/* Security notes:
- Deploying as "Anyone" will allow anonymous submissions; add validation or captcha on the client if needed.
- For spam protection add a simple honeypot field or integrate reCAPTCHA v2/3.
- The Apps Script quota is limited — for high-volume production use a proper backend.
*/
