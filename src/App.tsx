import { useState, useEffect } from 'react';
import { PresentationLayout } from './components/PresentationLayout';
import type { PresenterInfo } from './types/presentation';
import { Slide01Title } from './slides/Slide01Title';
import { Slide02WhyDocker } from './slides/Slide02WhyDocker';
import { Slide03WhatIsDocker } from './slides/Slide03WhatIsDocker';
import { Slide04Architecture } from './slides/Slide04Architecture';
import { Slide05VMvsDocker } from './slides/Slide05VMvsDocker';
import { Slide06Images } from './slides/Slide06Images';
import { Slide07Containers } from './slides/Slide07Containers';
import { Slide08Dockerfile } from './slides/Slide08Dockerfile';
import { Slide09DockerHub } from './slides/Slide09DockerHub';
import { Slide10Commands } from './slides/Slide10Commands';
import { Slide11Workflow } from './slides/Slide11Workflow';
import { Slide12Applications } from './slides/Slide12Applications';
import { Slide13Advantages } from './slides/Slide13Advantages';
import { Slide14Conclusion } from './slides/Slide14Conclusion';
import { Slide15Quiz } from './slides/Slide15Quiz';
import { PresenterModal } from './components/PresenterModal';

export function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(() => {
    const hash = window.location.hash.replace('#slide-', '');
    const num = parseInt(hash, 10);
    return isNaN(num) || num < 1 || num > 15 ? 0 : num - 1;
  });

  const [presenter, setPresenter] = useState<PresenterInfo>(() => {
    const saved = localStorage.getItem('docker_deck_presenter');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    return {
      name: 'Alex Rivera',
      role: 'Staff DevOps Architect',
      institution: 'Stanford University',
      department: 'Department of Computer Science & Engineering',
      date: 'Fall Semester 2026',
    };
  });

  const [isPresenterModalOpen, setIsPresenterModalOpen] = useState(false);

  // Sync hash with current slide
  useEffect(() => {
    window.location.hash = `slide-${currentSlideIndex + 1}`;
  }, [currentSlideIndex]);

  // Save presenter changes
  const handleUpdatePresenter = (info: PresenterInfo) => {
    setPresenter(info);
    localStorage.setItem('docker_deck_presenter', JSON.stringify(info));
  };

  const renderActiveSlide = () => {
    switch (currentSlideIndex) {
      case 0:
        return (
          <Slide01Title
            onStart={() => setCurrentSlideIndex(1)}
            presenter={presenter}
            onEditPresenter={() => setIsPresenterModalOpen(true)}
          />
        );
      case 1:
        return <Slide02WhyDocker />;
      case 2:
        return <Slide03WhatIsDocker />;
      case 3:
        return <Slide04Architecture />;
      case 4:
        return <Slide05VMvsDocker />;
      case 5:
        return <Slide06Images />;
      case 6:
        return <Slide07Containers />;
      case 7:
        return <Slide08Dockerfile />;
      case 8:
        return <Slide09DockerHub />;
      case 9:
        return <Slide10Commands />;
      case 10:
        return <Slide11Workflow />;
      case 11:
        return <Slide12Applications />;
      case 12:
        return <Slide13Advantages />;
      case 13:
        return <Slide14Conclusion />;
      case 14:
        return <Slide15Quiz />;
      default:
        return <Slide01Title onStart={() => setCurrentSlideIndex(1)} presenter={presenter} onEditPresenter={() => setIsPresenterModalOpen(true)} />;
    }
  };

  return (
    <>
      <PresentationLayout
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
        presenter={presenter}
        setPresenter={handleUpdatePresenter}
      >
        {renderActiveSlide()}
      </PresentationLayout>

      <PresenterModal
        isOpen={isPresenterModalOpen}
        onClose={() => setIsPresenterModalOpen(false)}
        presenter={presenter}
        onSave={handleUpdatePresenter}
      />
    </>
  );
}

export default App;
