import React from 'react';
import { Tabs, Tab } from '@/components/ui/tabs'; // Import the Tabs component

const Timeline = () => {
  const tabs: Tab[] = [ // Define your tabs array
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <img src="/1.png" alt="Job 1" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ),
    },
    {
        title: "Product",
        value: "product",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Product Tab</p>
            <img src="/2.jpg" alt="Job 1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ),
      },
      {
        title: "Product",
        value: "product",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Product Tab</p>
            <img src="/1.png" alt="Job 1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ),
      },
    // Add other tab objects here...
  ];

  return (
    <section className="w-full py-20">
      <h1 className="heading text-white text-center mb-10">
        My <span className="text-purple">Timeline</span>
      </h1>
      <div className="my-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4"> {/* Adjusted margin here */}
        <div className="h-[20rem] md:h-[40rem] perspective-1000 relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
          {/* Render the Tabs component with the defined tabs */}
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
}

export default Timeline;
