import { Shield, FileText, CreditCard } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Secure and Instant Cash Advances',
      desc: 'No more waiting weeks—convert daily credit card transactions into cash within 24 hours to keep your business running smoothly.',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Transparent and Fair Pricing Process',
      desc: 'No Hidden Fees. No Surprises. Enjoy clear, upfront pricing with flexible funding options, so you always know what to expect.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Flexible and Secure Payout Options',
      desc: 'We offer flexible and easy payout options tailored to your needs, ensuring quick access to your funds. Choose from multiple payment methods.',
      dark: true,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <a href="#" className="text-sm text-green-600 hover:underline">About Casa Service</a>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Revolutionizing Cash Flow for Business Owners!
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Empowering businesses with faster cash access, CASA provides a secure, fast, and flexible solution to get early payments for credit card sales.
        </p>
        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-full transition">
          Join Now
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 shadow-sm border ${
              feature.dark
                ? 'bg-green-900 text-white border-green-800'
                : 'bg-white text-gray-900 border-gray-200'
            }`}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
              feature.dark ? 'bg-green-800' : 'bg-green-100'
            }`}>
              <div className={feature.dark ? 'text-green-300' : 'text-green-600'}>
                {feature.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className={`text-sm ${feature.dark ? 'text-green-100' : 'text-gray-600'}`}>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}