import InquiryForm from '../../components/InquiryForm';
import Link from 'next/link';

export const metadata = { title: 'Contact | Modern Hospitality' };

// DEMO CONTACT DETAILS — replace these values with your real business details before launch.
const CONTACT = {
  email: 'hello@modernhospitality.in',
  phoneDisplay: '+91 98765 43210',
  phoneLink: '+919876543210',
  whatsapp: '919876543210',
  address: 'Ramphal Chowk, Dwarka Mor, New Delhi, India',
  hours: 'Monday – Saturday · 9:00 AM – 7:00 PM',
};

export default async function Contact({ searchParams }) {
  const q = await searchParams;
  const waMessage = encodeURIComponent('Hello Modern Hospitality, I would like to know more about your properties.');
  return <main className="inner-page">
    <section className="page-hero">
      <div className="eyebrow"><span/> LET’S TALK</div>
      <h1>Your next stay<br/><em>starts with hello.</em></h1>
      <p>Tell us what you’re looking for. We’ll help you find the right space and answer any questions along the way.</p>
    </section>
    <section className="contact-layout section-wrap">
      <div className="contact-info">
        <div className="eyebrow"><span/> GET IN TOUCH</div>
        <h2>We’re here<br/><em>to help.</em></h2>
        <p>Have a question about a space, availability or a longer stay? Choose the easiest way to reach our team.</p>
        <div className="contact-block"><span>CALL / WHATSAPP</span><a href={`tel:${CONTACT.phoneLink}`}>{CONTACT.phoneDisplay}</a><a className="contact-action" href={`https://wa.me/${CONTACT.whatsapp}?text=${waMessage}`} target="_blank" rel="noreferrer">Chat with us on WhatsApp ↗</a></div>
        <div className="contact-block"><span>EMAIL</span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
        <div className="contact-block"><span>VISIT US</span><b>{CONTACT.address}</b><a className="contact-action" href="https://www.google.com/maps/search/?api=1&query=Ramphal+Chowk+Dwarka+Mor+Delhi" target="_blank" rel="noreferrer">View on Google Maps ↗</a></div>
        <div className="contact-block"><span>AVAILABILITY</span><b>{CONTACT.hours}</b></div>
        <div className="contact-block"><span>EXPLORE</span><Link href="/properties">Browse our residences ↗</Link></div>
        <p className="demo-note">Demo contact details are in <code>app/contact/page.js</code>. Replace them with your actual phone, email and WhatsApp number before publishing.</p>
      </div>
      <div className="form-panel">
        <div className="form-heading"><span>01 / ENQUIRY FORM</span><span>WE’LL BE IN TOUCH</span></div>
        <InquiryForm property={q?.property || ''}/>
      </div>
    </section>
  </main>;
}
