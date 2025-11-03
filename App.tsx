import React, { useEffect, useRef, useState } from 'react';
import { Section } from './components/Section';
import { Card } from './components/Card';
import { Modal } from './components/Modal';
import { Carousel } from './components/Carousel';
import { 
  ChallengeImage1,
  ChallengeImage2,
  ChallengeImage3,
  ChallengeImage4
} from './components/ChallengeImages';
import {
  DataFragmentationInfographic,
  PredictiveDiagnosticsInfographic,
  UsabilityGapInfographic,
  TrustRiskInfographic,
} from './components/Infographics';
import { 
  SolutionCarouselImage1,
  SolutionCarouselImage2,
  SolutionCarouselImage3,
  SolutionCarouselImage4
} from './components/CarouselImages';

const cardData = {
  researchGaps: [
    {
      image: <ChallengeImage1 />,
      title: 'Data Fragmentation & Incompatibility',
      description:
        'No standardized platform exists for aggregating diverse data like weather APIs, satellite imagery, and sensor data, leading to generic, non-personalized advice.',
      details:
        'The agricultural data landscape is a patchwork of disconnected sources. Government weather APIs provide meteorological data, private satellites offer high-resolution imagery, and on-farm sensors collect real-time soil and moisture levels. However, these datasets exist in silos, with different formats, protocols, and access levels. This fragmentation makes it nearly impossible to build a holistic view of a single farm plot. As a result, current advisory systems provide generic, region-wide recommendations that fail to account for the unique micro-conditions of a specific farm, leading to suboptimal resource allocation and reduced yield potential.',
      infographic: <DataFragmentationInfographic />,
    },
    {
      image: <ChallengeImage2 />,
      title: 'Lack of Predictive & Hyper-Granular Diagnostics',
      description:
        "Current models can't provide specific, plot-level prescriptions for challenges like climate resilience or pest forecasting, failing to optimize inputs.",
      details:
        "Effective farming requires proactive, not reactive, measures. Existing agri-tech solutions lack the sophisticated predictive capabilities to forecast plot-specific issues like pest infestations or disease outbreaks before they become critical. They cannot generate hyper-granular prescriptions, such as variable-rate fertilizer or irrigation plans tailored to the sub-acre level. This forces farmers to rely on traditional, uniform application methods, which often leads to over-application of inputs in some areas and under-application in others, wasting resources and harming the environment.",
      infographic: <PredictiveDiagnosticsInfographic />,
    },
    {
      image: <ChallengeImage3 />,
      title: 'The Usability and Literacy Gap',
      description:
        'Existing app designs are often complex and text-heavy, creating a barrier for farmers with low digital literacy or reliance on native languages.',
      details:
        "Technology is only effective if it's accessible. A significant portion of small and marginal farmers have low digital literacy and communicate primarily in native, often unwritten, languages. Most agri-tech apps are designed with a tech-savvy user in mind, featuring complex interfaces, dense text, and English-centric navigation. This creates a profound usability gap, shutting out the very demographic that stands to benefit most from these technological advancements. A farmer-centric design approach, prioritizing voice, icons, and simplicity, is essential for bridging this gap.",
      infographic: <UsabilityGapInfographic />,
    },
    {
      image: <ChallengeImage4 />,
      title: 'Trust, Financial Risk, and Adoption Barrier',
      description:
        "Farmers are risk-averse. High upfront costs and unproven ROI prevent adoption, as current models don't align technology's success with the farmer's prosperity.",
      details:
        'Farming is a business with inherent risks and tight margins. For generations, farmers have relied on trusted local knowledge. New technologies represent a significant financial risk, often requiring upfront investment in subscriptions or hardware with no guarantee of a return. Current business models for agri-tech solutions do not share this risk; the company profits regardless of whether the farmer sees an increase in yield. To earn trust and drive adoption, the technology\'s success must be directly aligned with the farmer\'s prosperity, creating a true partnership rather than a simple transaction.',
      infographic: <TrustRiskInfographic />,
    },
  ],
  proposedSolutions: [
    {
      image: <SolutionCarouselImage1 />,
      title: 'Solution 1: Data Harmonization and Standardization',
      description:
        'Develop a Data Harmonization API/Framework to unify fragmented datasets (soil, weather, crop history) into a single, standardized feed for a unified source of truth.',
    },
    {
      image: <SolutionCarouselImage2 />,
      title: 'Solution 2: Hyper-Granular Machine Learning Model',
      description:
        'The standardized data will power a proprietary ML model for hyper-granular diagnosis, generating specific, actionable sub-acre prescriptions and real-time alerts.',
    },
    {
      image: <SolutionCarouselImage3 />,
      title: 'Solution 3: Zero-Literacy, Farmer-Centric Interface',
      description:
        'Deliver advisory via a Zero-Literacy-First mobile interface using native language TTS, large universal icons, and voice-guided navigation for maximum accessibility.',
    },
    {
      image: <SolutionCarouselImage4 />,
      title: "Solution 4: Outcome-Aligned 'Success-Fee' Model",
      description:
        "Overcome trust barriers with a 'Success-Fee' model where revenue is tied to a small, pre-agreed percentage of the farmer's verified net gain.",
    },
  ],
};

const App: React.FC = () => {
  const [modalContent, setModalContent] = useState<{
    title: string;
    content: string;
    infographic: React.ReactNode;
  } | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const solutionsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.add('solutions-visible');
        } else {
          document.body.classList.remove('solutions-visible');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    const currentRef = solutionsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const openModal = (title: string, content: string, infographic: React.ReactNode) => {
    setModalContent({ title, content, infographic });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] relative overflow-x-hidden">
       <div 
        className="fixed top-0 left-0 h-1 bg-[var(--color-primary)] z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <header className="relative text-center h-[60vh] md:h-[80vh] flex flex-col items-center justify-center mb-20 md:mb-32 overflow-hidden rounded-lg">
           <div className="absolute inset-0 z-0">
              <div 
                className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/10 to-teal-500/5 bg-[length:200%_200%]"
                style={{ animation: 'animated-gradient 15s ease infinite' }}
                aria-hidden="true"
              ></div>
              <div 
                className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-bg)_0,_transparent_70%)]"
                aria-hidden="true"
              ></div>
           </div>
           <div className="relative z-10 p-4">
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                Smart Crop Advisory
              </h1>
              <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-medium max-w-3xl mx-auto">
                Empowering Small & Marginal Farmers with data-driven insights for sustainable and profitable agriculture.
              </p>
            </div>
        </header>

        <Section title="Objective and Impact">
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-4xl mx-auto leading-relaxed text-center">
            A majority of small and marginal farmers in India rely on traditional
            knowledge, leading to poor yield, excessive costs, and environmental
            degradation. They lack access to personalized, real-time advisory
            services. This smart advisory solution aims to empower them with
            scientific insights, leading to increased productivity, improved
            livelihoods, and promoting sustainable agriculture through resource
            optimization.
          </p>
        </Section>

        <Section title="Challenges in Current Agri-Tech Solutions">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardData.researchGaps.map((gap, index) => (
              <Card
                key={index}
                image={gap.image}
                title={gap.title}
                description={gap.description}
                index={index}
                onReadMore={() => openModal(gap.title, gap.details, gap.infographic)}
              />
            ))}
          </div>
        </Section>

        <Section title="Proposed Solution Streams" ref={solutionsRef}>
           <Carousel items={cardData.proposedSolutions} />
        </Section>

        <Section title="Conclusion">
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-4xl mx-auto leading-relaxed text-center">
            The successful development of this integrated prototype, combining
            Resource Optimization with Farmer-Centric Design and an
            outcome-aligned financial model, will demonstrate a sustainable path
            forward for agri-tech. By addressing critical needs for Pest and
            Disease Forecasting and building Climate Resilience, this project
            empowers farmers to transition from guesswork to data-driven
            decision-making, contributing significantly to sustainable
            agriculture and national food security.
          </p>
        </Section>

        <footer className="text-center mt-24 border-t border-[var(--color-border)] pt-10">
          <p className="text-gray-600 text-sm tracking-widest uppercase">
            Submitted By
          </p>
          <p className="text-[var(--color-text-secondary)] mt-4 text-lg">
            Sammyak Shrivastava, Sarthak Sharma, Ayush Singh, Aryan Paal,
            Vaibhav Mishra
          </p>
        </footer>
      </main>
      
      <Modal 
        isOpen={!!modalContent}
        onClose={closeModal}
        title={modalContent?.title || ''}
        infographic={modalContent?.infographic}
      >
        <p>{modalContent?.content}</p>
      </Modal>

    </div>
  );
};

export default App;