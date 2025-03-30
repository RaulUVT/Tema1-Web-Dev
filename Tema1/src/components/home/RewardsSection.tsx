
import React from 'react';
import { TrendingUp, Zap, Award, Crown } from 'lucide-react';

const RewardsSection = () => {
  const rewardLevels = [
    {
      threshold: 150,
      discount: '10%',
      icon: <TrendingUp className="text-gold h-8 w-8" />,
    },
    {
      threshold: 250,
      discount: '15%',
      icon: <Zap className="text-gold h-8 w-8" />,
    },
    {
      threshold: 350,
      discount: '25%',
      icon: <Award className="text-gold h-8 w-8" />,
    },
    {
      threshold: 400,
      discount: '30%',
      icon: <Crown className="text-gold h-8 w-8" />,
    },
  ];

  return (
    <section className="py-16 bg-light-purple">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-3">
            Rewards Program
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our rewards program and earn exclusive discounts based on your spending. The more you shop, the more you save!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewardLevels.map((level, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 flex justify-center">
                {level.icon}
              </div>
              <h3 className="text-2xl font-playfair text-center mb-2">
                €{level.threshold}
              </h3>
              <p className="text-gray-600 text-center mb-3">
                Spend €{level.threshold} or more
              </p>
              <div className="text-center font-medium text-lg text-rich-purple">
                Get {level.discount} OFF
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/account" className="btn-primary">
            Create an Account
          </a>
          <p className="text-sm text-gray-500 mt-4">
            Rewards are applied automatically to your account after eligible purchases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
