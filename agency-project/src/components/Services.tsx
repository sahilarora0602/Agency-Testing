export default function Services() {
  const services = [
    { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful and intuitive interfaces' },
    { icon: '💻', title: 'Web Development', desc: 'Modern and responsive websites' },
    { icon: '📱', title: 'Mobile Apps', desc: 'Native and cross-platform solutions' }
  ];
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
