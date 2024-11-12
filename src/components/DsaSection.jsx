const DsaSection = () => {
  const topics = [
    "Arrays & 2D Arrays",
    "Strings",
    "Pointers & Dynamic Allocation",
    "Standard Template Library (STL)",
    "Linked Lists",
    "Stacks & Queues",
    "Binary Trees",
    "Binary Search Trees",
    "Heaps (Priority Queue)",
    "Hashmaps",
    "Sorting Algorithms",
    "Time & Space Complexity",
    "Recursion & Backtracking",
    "Divide & Conquer",
    "Object Oriented Programming (OOPs)",
    "Greedy Algorithms",
    "Dynamic Programming",
    "Tries",
    "Graph Algorithms",
    "Segment Trees",
  ];

  return (
    <div className="container mx-auto mb-8 mt-10 w-full bg-[#f9e9f0] rounded-lg shadow-md p-4 sm:p-6 md:p-8">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#c75b82] text-center">
        Data Structures & Algorithms
      </h2>
      <div className="flex justify-center">
        <ul className="list-[square] list-inside flex flex-wrap gap-y-2 text-[#4a4a4a] font-[Raleway] text-xs sm:text-sm md:text-base lg:text-md">
          {topics.map((topic, index) => (
            <li key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-2">
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DsaSection;
