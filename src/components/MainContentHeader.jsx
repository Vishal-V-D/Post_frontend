import React from 'react';

const MainContentHeader = ({ activeTab }) => {
  const getTitle = () => {
    switch (activeTab) {
      case 'blog': return 'Your Blog Posts';
      case 'linkedin': return 'Your LinkedIn Posts';
      case 'newsletter': return 'Your Newsletters';
      case 'twitter': return 'Your Twitter/X Posts';
      case 'recent-uploads': return 'Recent Uploads';
      case 'content-library': return 'Content Library';
      case 'analytics': return 'Analytics & Insights';
      case 'settings': return 'App Settings';
      case 'help': return 'Help & Support';
      case 'profile': return 'Your Profile';
      default: return '';
    }
  };

  const getDescription = () => {
    switch (activeTab) {
      case 'blog': return 'Review and manage your generated blog posts here.';
      case 'linkedin': return 'Review and manage your generated LinkedIn posts here.';
      case 'newsletter': return 'Review and manage your generated newsletter drafts here.';
      case 'twitter': return 'Review and manage your generated Twitter/X posts here.';
      case 'recent-uploads': return 'View and manage your recently uploaded files and transcription statuses.';
      case 'content-library': return 'Access and organize all your generated content, including posts and newsletters.';
      case 'analytics': return 'Track the performance and engagement of your content across various platforms.';
      case 'settings': return 'Customize your application preferences and account details.';
      case 'help': return 'Find answers to your questions, browse documentation, or contact support.';
      case 'profile': return 'Manage your personal information, membership, and account settings.';
      default: return '';
    }
  };

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gradient-blue-purple mb-6 sm:mb-8 animate-fade-in">
        {getTitle()}
      </h1>
      <p className="text-center text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 animate-fade-in delay-100">
        {getDescription()}
      </p>
    </>
  );
};

export default MainContentHeader;