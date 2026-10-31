# Modern Hospitality — Next.js rebuild

A premium, editorial-style property showcase for Modern Hospitality, built with Next.js App Router. The current starter includes four distinct listings assembled from the property photo batches uploaded in the conversation:

- The Studio Edit
- The Signature Residence
- The Urban Suite
- The Terrace Residence

All four are shown as separate listings at Ramphal Chowk, Dwarka Mor, New Delhi. Their descriptions and amenity lists are conservative drafts based on the visible photographs and details previously shared. No prices or availability have been invented.

## Run locally

1. Install Node.js 20.9+ (Node 22 LTS recommended).
2. Extract this folder and open it in VS Code.
3. Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

4. Open http://localhost:3000

## Important before production

- Update `metadataBase` in `app/layout.js`, `app/robots.js`, and `app/sitemap.js` to your real domain.
- Add verified business phone, WhatsApp, email, rates, check-in/out rules, guest capacities and exact amenities. Do not publish draft claims until confirmed.
- The enquiry API currently validates and logs enquiries to the server console; connect MongoDB and an email/WhatsApp notification provider before accepting live enquiries.
- The Admin page is a setup placeholder. Secure admin authentication, database-backed listing management, image uploads and owner review workflow are not yet wired into this visual rebuild.
- Owner listing currently directs owners to contact the team; the full owner submission workflow needs database/storage integration.
- Configure a real domain and Google Search Console after deploying to Vercel.

## Photo organization

Uploaded photos have been copied into `public/images/` and grouped into four galleries. `data/properties.js` controls each listing's title, copy, features and gallery. Replace or reorder images there if you want to change the order.


## Contact details to customise
Open `app/contact/page.js` and edit the `CONTACT` object. The current phone, WhatsApp and email are demo placeholders; replace them before launch. The contact navigation is sticky and remains at the top while scrolling.
