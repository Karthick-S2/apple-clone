const foot = [
  {
    groups: [
      {
        name: "Shop and Learn",
        value: [
          "Store",
          "Mac",
          "iPad",
          "iPhone",
          "Watch",
          "AirPods",
          "TV & Home",
          "AirTag",
          "Accessories",
          "Gift Cards",
        ],
      },
      {
        name: "Apple Wallet",
        value: ["Wallet"],
      },
    ],
  },
  {
    groups: [
      {
        name: "Account",
        value: [
          "Manage Your Apple Account",
          "Apple Store Account",
          "iCloud.com",
        ],
      },
      {
        name: "Entertainment",
        value: [
          "Apple One",
          "Apple TV+",
          "Apple Music",
          "Apple Arcade",
          "Apple Podcasts",
          "Apple Books",
          "App Store",
        ],
      },
    ],
  },
  {
    groups: [
      {
        name: "Apple Store",
        value: [
          "Find a Store",
          "Genius Bar",
          "Today at Apple",
          "Group Reservations",
          "Apple Camp",
          "Apple Trade In",
          "Ways to Buy",
          "Recycling Programme",
          "Order Status",
          "Shopping Help",
        ],
      },
    ],
  },
  {
    groups: [
      {
        name: "For Business",
        value: ["Apple and Business", "Shop for Business"],
      },
      {
        name: "For Education",
        value: [
          "Apple and Education",
          "Shop for Education",
          "Shop for University",
        ],
      },
      {
        name: "For Healthcare",
        value: [
          "Apple in Healthcare",
          "Mac in Healthcare",
          "Health on Apple Watch",
        ],
      },
    ],
  },
  {
    groups: [
      {
        name: "Apple Values",
        value: [
          "Accessibility",
          "Education",
          "Environment",
          "Privacy",
          "Supply Chain Innovation",
        ],
      },
      {
        name: "About Apple",
        value: [
          "Newsroom",
          "Apple Leadership",
          "Career Opportunities",
          "Investors",
          "Ethics & Compliance",
          "Events",
          "Contact Apple",
        ],
      },
    ],
  },
];

import React from "react";

const Implink = () => {
  return (
    <div className="border-t border-b border-gray-400 bg-gray-100 p-10">
      <div className=" mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {foot.map((column, colIndex) => (
          <div key={colIndex} >
            {column.groups.map((section, secIndex) => (
              <div key={secIndex} className="mb-6">
                <h4 className="font-semibold text-sm mb-2">{section.name}</h4>
                <ul>
                  {section.value.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-sm text-gray-700 mb-2 hover:underline cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h1>
        More ways to shop:{" "}
        <span className="text-blue-400 underline">Find an Apple Store</span> or{" "}
        <span className="text-blue-400 underline">other retailer</span> near
        you. Or call{" "}
        <span className="text-blue-400 underline">000800 040 1966</span>.
      </h1>
    </div>
  );
};

export default Implink;
