export default function Portfolio() {
  const projects = [
    { title: 'E-Commerce Platform', category: 'Web Design', img: '🛍️' },
    { title: 'Mobile Banking App', category: 'App Design', img: '🏦' },
    { title: 'SaaS Dashboard', category: 'UI Design', img: '📊' },
    { title: 'Travel Website', category: 'Web Design', img: '✈️' },
    { title: 'Fitness App', category: 'App Design', img: '💪' },
    { title: 'Analytics Tool', category: 'UI Design', img: '📈' }
  ];
  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Recent Work</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-8 text-white hover:shadow-xl transition">
            <div className="text-6xl mb-4">{project.img}</div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-blue-100">{project.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
