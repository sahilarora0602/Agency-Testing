import { useState } from 'react';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: 'How long does a project take?', a: 'Most projects take 2-8 weeks depending on complexity and scope.' },
    { q: 'Do you offer support after launch?', a: 'Yes, we provide 3 months of free support and maintenance after launch.' },
    { q: 'What is your process?', a: 'We follow: discovery, design, development, testing, and deployment phases.' },
    { q: 'Can you work with my existing team?', a: 'Absolutely! We collaborate seamlessly with in-house teams and contractors.' }
  ];
  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-lg">
            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full p-4 text-left font-bold text-gray-900 hover:bg-gray-50 flex justify-between items-center">
              {item.q}
              <span>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <div className="p-4 border-t text-gray-600 bg-gray-50">{item.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
