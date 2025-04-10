import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const InfiniteScroll = () => {
  const scrollerRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  
  const items = [
    ["TypeScript", "React", "Nextjs","TypeScript", "React", "Nextjs"],
    ["Python", "Django", "Flask","Python", "Django", "Flask"],
    ["Nodejs", "Express", "MongoDB","Nodejs", "Express", "MongoDB"],
    ["PostgreSQL", "MySQL", "SQLite","PostgreSQL", "MySQL", "SQLite"],
    ["JavaScript", "Vue", "Angular","JavaScript", "Vue", "Angular"],
    ["Tensorflow", "OpenCV","Tensorflow", "OpenCV"]
  ];

  useEffect(() => {
    scrollerRefs.forEach((ref) => {
      const scroller = ref.current;
      if (!scroller) return;

      const cloneItems = () => {
        const content = scroller.children;
        Array.from(content).forEach((item) => {
          const cloned = item.cloneNode(true);
          scroller.appendChild(cloned);
        });
      };

      cloneItems();
    });
  }, []);

  // Array of configurations for each row
  const scrollConfigs = [
    { duration: 25, direction: 1 },  // Right to left, medium speed
    { duration: 12, direction: 1 }, // Left to right, slow
    { duration: 25, direction: 1 },  // Right to left, fast
    { duration: 25, direction: 1 }, // Left to right, very slow
    { duration: 12, direction: 1 },  // Right to left, medium-fast
    { duration: 35, direction: 1 },  // Right to left, medium-fast
  ];

  return (
    <div className="overflow-hidden w-full space-y-4">
      {items.map((rowItems, rowIndex) => (
        <motion.div
          key={rowIndex}
          ref={scrollerRefs[rowIndex]}
          className="flex flex-row gap-2"
          animate={{
            x: scrollConfigs[rowIndex].direction === 1 ? "-100%" : "100%",
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: scrollConfigs[rowIndex].duration,
              ease: "linear",
            },
          }}
        >
          {rowItems.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="bg-neutral-100 rounded-full px-8 py-3 flex-shrink-0"
            >
              <p className="text-3xl font-black manrope">{item}</p>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};