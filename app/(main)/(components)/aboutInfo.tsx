import React from 'react';

const CatSocInfoCard = () => {
  return (
    <div className="overflow-hidden p-6 xl:px-96">
      <div className="space-y-6">
        <p className="text-gray-700">
          The UNSW Cat Appreciation Society (CatSoc) is a vibrant community dedicated to bringing together cat enthusiasts from all walks of life at the University of New South Wales (UNSW). Our society aims to provide a fun, diverse, accepting, and caring forum for cat lovers to collaborate, form friendships, and engage in meaningful activities.
        </p>
        <h3 className="text-2xl font-semibold">Our Aims</h3>
        <div>
          <h4 className="text-xl font-semibold">Fostering Community:</h4>
          <p className="text-gray-700">
            At CatSoc, we believe in the power of community. We strive to create a welcoming environment where cat lovers can connect, share their passion for feline friends, and build lasting relationships. Whether you are a lifelong cat owner or a newfound admirer, CatSoc is the place for you.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Supporting Animal Rescue:</h4>
          <p className="text-gray-700">
            We are deeply committed to animal welfare, with a particular focus on cats. Our society actively seeks ways to contribute to local and global animal rescue efforts. By raising awareness and supporting various initiatives, we aim to make a positive impact on the lives of cats in need.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Promoting Education and Awareness:</h4>
          <p className="text-gray-700">
            Education is a cornerstone of our mission. We aim to inform our members and the broader UNSW community about responsible cat ownership, the importance of animal welfare, and the various ways individuals can contribute to rescue efforts. Through our events and activities, we strive to spread knowledge and inspire action.
          </p>
        </div>
        <h3 className="text-2xl font-semibold">Our Events</h3>
        <div className="space-y-4">
          <div>
            <p className="text-gray-700">
            We host a diverse range of engaging events designed to unite cat enthusiasts and support animal welfare initiatives. Our activities range from fun and social gatherings, such as ramen fundraisers and cozy craft corners, to educational workshops and seminars that promote responsible cat ownership and animal rescue awareness. We also organise interactive experiences like cat-themed scavenger hunts and pottery painting sessions to help members relax and connect with fellow cat lovers. Additionally, our fundraising events and volunteer opportunities with local animal shelters provide meaningful ways to contribute to the welfare of cats in need.
            </p>
          </div>
        </div>
        <h3 className="text-2xl font-semibold">Get Involved</h3>
        <p className="text-gray-700">
          Becoming a member of CatSoc is easy and rewarding. By joining our society, you'll gain access to our events, meet like-minded individuals, and contribute to meaningful causes. Whether you're looking to make new friends, learn more about cats, or support animal rescue efforts, CatSoc has something for everyone.
        </p>
        <p className="text-gray-700">
          Join us today and be a part of a community that celebrates the love for cats and works towards a better future for our feline friends.
        </p>
      </div>
    </div>
  );
};

export default CatSocInfoCard;
