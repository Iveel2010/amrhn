"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Гоо сайхан",
    icon: "💄",
    subcategories: [
      {
        name: "Нүүр будалт",
        subcategories: [
          "Нүүр будалтын бүтээгдэхүүн",
          "Нүд & хөмсөг будалт",
          "Уруул",
          "Хацар будалт",
          "Будалт, багсны ком",
          "Косметик цүнх & дагалдах хэрэгсэл",
        ],
      },
      {
        name: "Нүүр арчилгаа",
        subcategories: ["Арьс арчилгаа", "Цэвэрлэгээ", "Чийгшүүлэгч"],
      },
    ],
  },
  {
    name: "Эрэгтэй",
    icon: "👕",
    subcategories: [
      {
        name: "Хувцас",
        subcategories: ["Футболк", "Цамц", "Өмд"],
      },
      {
        name: "Гутал",
        subcategories: ["Пүүз", "Сандал", "Албан ёсны"],
      },
    ],
  },
];

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  return (
    <div className="flex border rounded-2xl shadow-md w-full max-w-4xl mx-auto bg-white p-4 ">
      <div className="w-1/3 border-r p-4 bg-whiteh-[700px]">
        <h2 className="text-lg font-semibold mb-3 text-gray-800">
          Үндсэн ангилал
        </h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 ${
                selectedCategory === category ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedSubcategory(null);
              }}
            >
              <span className="flex items-center space-x-2 text-gray-700">
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </span>
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 border-r p-4 h-[700px]">
        {selectedCategory ? (
          <div>
            <h2 className="text-lg font-semibold mb-3 text-gray-800">
              {selectedCategory.name} - Дэд ангилал
            </h2>
            <div className="space-y-2">
              {selectedCategory.subcategories.map((sub) => (
                <div
                  key={sub.name}
                  className={`p-3 bg-white rounded-lg shadow-sm cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 ${
                    selectedSubcategory === sub ? "bg-gray-300" : ""
                  }`}
                  onClick={() => setSelectedSubcategory(sub)}
                >
                  {sub.name}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-gray-500 text-center animate-pulse">
            <p className="text-lg">Ангилал сонгоно уу</p>
          </div>
        )}
      </div>
      <div className="w-1/3 p-4  h-[700px]">
        {selectedSubcategory ? (
          <div>
            <h2 className="text-lg font-semibold mb-3 text-gray-800">
              {selectedSubcategory.name} - Жижиг ангилал
            </h2>
            <div className="space-y-2">
              {selectedSubcategory.subcategories.map((sub) => (
                <div
                  key={sub}
                  className="p-3 bg-white rounded-lg shadow-sm cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200"
                >
                  {sub}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-gray-500 text-center animate-pulse">
            <p className="text-lg">Дэд ангилал сонгоно уу</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default CategorySelector;
