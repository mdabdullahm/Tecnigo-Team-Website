import React from 'react';
import WorkHero from '../components/uiux/WorkHero';
import ProjectGrid from '../components/uiux/ProjectGrid';
import WorkContact from '../components/uiux/WorkContact';
import ClientLogos from '../components/uiux/ClientLogos';

const WorkPage = () => {
  return (
    <div className="bg-black">
      <WorkHero />
      <ProjectGrid />
      <WorkContact />
      <ClientLogos />
    </div>
  );
};

export default WorkPage;