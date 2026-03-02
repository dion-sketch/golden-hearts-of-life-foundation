import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Users } from 'lucide-react';

const PAYPAL_DONATE_URL = 'https://www.paypal.com/donate?hosted_button_id=NCBRZBZP3EDZE';

const impacts = [
  {
    icon: Heart,
    title: 'Fund Essential Services',
    description: 'Your donation directly supports food assistance, housing navigation, and medical expense relief for vulnerable community members.',
  },
  {
    icon: Users,
    title: 'Strengthen Communities',
    description: 'Help us expand outreach to isolated seniors, caregivers, and adults with disabilities across Los Angeles County.',
  },
  {
    icon: ShieldCheck,
    title: 'Every Dollar Counts',
    description: 'As a lean nonprofit, we ensure your contribution goes directly toward programs that make a measurable difference.',
  },
];

export default function Donate() {
  return (
    <section id="donate" className="relative bg-stone-900 py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase mb-3 sm:mb-4 text-gold-400">
              Support Our Mission
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-tight font-display text-stone-50 mb-4 sm:mb-6">
              Make a <span className="text-gold-400">Donation</span>
            </h2>
            <p className="text-base sm:text-lg text-stone-300 mb-8 sm:mb-10 leading-relaxed">
              Your generosity helps us continue providing wraparound services to those who need it most. Every contribution supports dignity, stability, and hope for adults with disabilities and older adults in LA County.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {impacts.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold-500/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="text-gold-300 font-semibold mb-1 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Donate Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-stone-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-center">
              <img
                src="/favicon.svg"
                alt=""
                className="w-12 h-12 mx-auto mb-5 sm:mb-6"
              />
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-stone-900 mb-2">
                Donate with PayPal
              </h3>
              <p className="text-stone-600 text-sm sm:text-base mb-6 sm:mb-8">
                Secure donations processed through PayPal. You can use your PayPal account or any major credit/debit card.
              </p>

              {/* Donate Button */}
              <a
                href={PAYPAL_DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full font-semibold rounded-full px-8 py-4 text-base sm:text-lg bg-sage-500 text-stone-50 hover:bg-sage-600 transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                <Heart className="w-5 h-5" />
                Donate Now
              </a>

              <p className="text-stone-500 text-xs mt-4 sm:mt-5">
                Golden Hearts of Life Foundation is a registered nonprofit.
                <br />
                All donations may be tax-deductible.
              </p>

              {/* Trust badges */}
              <div className="mt-6 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                <div className="flex items-center gap-1.5 text-stone-500">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-medium">Secure Payment</span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-500">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797H9.603c-.564 0-1.04.408-1.13.964L7.076 21.337z" />
                  </svg>
                  <span className="text-xs font-medium">PayPal Protected</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
