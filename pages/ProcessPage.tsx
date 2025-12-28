import React from 'react';
import { NavLink } from 'react-router-dom';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
  <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-6 p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
    <div className="flex-shrink-0 w-16 h-16 mb-4 md:mb-0 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center text-white font-bold text-3xl font-playfair shadow-lg">
      {step}
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-bold font-playfair text-brand-charcoal mb-4">{title}</h3>
      <div className="text-gray-600 leading-relaxed space-y-4">
        {description.split('\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  </div>
);


const ProcessPage: React.FC = () => {
  const steps = [
    {
      title: 'Research & Goal Setting',
      description: 'Every successful web project starts with understanding your unique business landscape. We go beyond basic design requirements to research your business model, target audience, and specific growth goals. \n\nBy focusing on professional web development planning, we identify exactly what your customers are looking for. This foundational step ensures that every design choice we make is aligned with your business objectives—whether that’s increasing enquiries, building brand trust, or improving online visibility.'
    },
    {
      title: 'Structured Website Blueprint',
      description: 'Before a single line of code is written, we create a strategic blueprint for your site. We plan the layout, content flow, and user journey to ensure ultimate clarity for your visitors. \n\nOur approach to structured web design focuses on organizing content so that customers can find exactly what they need without confusion. We build a logic that search engines understand and users appreciate, ensuring your business content is discoverable and easy to navigate.'
    },
    {
      title: 'Engaging, Business-Focused Design',
      description: 'We craft a modern website design that does more than just look good—it builds credibility. Your website is often the first interaction a customer has with your brand, so we ensure it exudes professionalism and trust. \n\nCustomized to your brand identity, our designs are mobile-ready and built to guide visitors toward taking action. By combining aesthetics with clear business messaging, we help you make a powerful first impression that encourages customers to engage with confidence.'
    },
    {
      title: 'Development That Performs',
      description: 'Our development phase brings the design to life with a focus on speed, stability, and performance. We use modern professional web development practices to build a site that is fast, responsive, and works flawlessly on every device. \n\nA fast and responsive business website is critical for keeping visitors on your page. We ensure the underlying code is clean and structured, supporting both user engagement and better visibility on search platforms.'
    },
    {
      title: 'Launch-Ready Website Validation',
      description: 'We don’t just launch; we validate. Our rigorous testing phase ensures that every link works, every page loads quickly, and the mobile experience is seamless. \n\nBy performing comprehensive performance validation, we fix potential issues before your customers ever see them. This attention to detail ensures you launch with confidence, knowing your professional business presence is robust, error-free, and ready to welcome new opportunities.'
    },
    {
      title: 'Post-Launch Care & Progress',
      description: 'Your digital journey doesn’t end at launch. We provide ongoing support to ensure your website continues to serve your business effectively as it evolves. \n\nWe help you maintain ongoing clarity and performance by monitoring how users interact with your site. Our goal is to support your business website evolution, keeping your online presence visible, relevant, and aligned with your long-term growth targets.'
    }
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-purple-50 via-pink-50 to-white animate-fadeIn">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-brand-charcoal mb-6">
            How We Build Websites That Work
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See how we build professional business websites designed to help customers find you online and turn visits into real enquiries. Our process is built on clarity, structure, and measurable results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto space-y-8 mb-20">
          {steps.map((item, index) => (
            <ProcessStep key={index} step={index + 1} title={item.title} description={item.description} />
          ))}
        </div>

        {/* Business Benefits Wrap */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-brand-charcoal mb-6">Why Our Process Outcomes Matter</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Investing in professional web development with a proven process gives you more than just a website—it gives you a reliable business asset. Our methodical approach ensures consistent communication and structured results, delivering an online presence that supports growth. By focusing on visibility and engagement, we build websites that help customers find you online and do business with confidence.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-brand-charcoal mb-4">Ready to move forward?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Share your business goals so we can design a website built for visibility, clarity, and real customer engagement.
          </p>
          <NavLink
            to="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-brand-purple to-brand-pink text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default ProcessPage;
