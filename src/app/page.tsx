"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    name: "Үл хөдлөх",
    icon: "🏠",
    subcategories: [
      {
        name: "Үл хөдлөх зарна",
        subcategories: [
          {
            name: "Орон сууц зарна",
            chooses: [
              {
                choosesName: "Өрөөний тоо",
                choosesOptions: [
                  "1 өрөө",
                  "2 өрөө",
                  "3 өрөө",
                  "4 өрөө",
                  "5 өрөө",
                  "6+ өрөө",
                ],
              },
              {
                choosesName: "Байршил",
                choosesOptions: ["УБ", "Дархан", "Эрдэнэт", "Бусад"],
              },
              {
                choosesName: "Үнэ (сая ₮)",
                choosesOptions: ["50 хүртэл", "50-100", "100-200", "200+"],
              },
            ],
          },
          {
            name: "Монгол гэр зарна",
            chooses: [
              {
                choosesName: "Ханын тоо",
                choosesOptions: [
                  "4 ханатай",
                  "5 ханатай",
                  "6 ханатай",
                  "7+ ханатай",
                ],
              },
              {
                choosesName: "Үнэ (сая ₮)",
                choosesOptions: ["10 хүртэл", "10-20", "20-30", "30+"],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSubSubcategory, setSelectedSubSubcategory] = useState(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 font-semibold">
          Ангилал сонгох
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Үндсэн ангилал */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-3 h-12">
            Үндсэн ангилал
          </h2>
          <div className="space-y-3">
            {categories.map((category) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant={
                    selectedCategory === category ? "secondary" : "ghost"
                  }
                  className="w-full flex justify-between items-center rounded-lg py-2 px-4 hover:bg-gray-100 transition-all"
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedSubcategory(null);
                    setSelectedSubSubcategory(null);
                    setExpanded(!expanded);
                  }}
                >
                  <span className="flex items-center space-x-2 text-gray-800">
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      expanded ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="md:hidden" />

        {/* Дэд ангилал */}
        <div>
          {selectedCategory ? (
            <>
              <h2 className="text-lg font-medium text-gray-900 mb-3 h-12">
                {selectedCategory.name} - Дэд ангилал
              </h2>
              <div className="space-y-3">
                {selectedCategory.subcategories.map((sub) => (
                  <motion.div
                    key={sub.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant={
                        selectedSubcategory === sub ? "secondary" : "ghost"
                      }
                      className="w-full rounded-lg py-2 px-4 hover:bg-gray-100 transition-all"
                      onClick={() => {
                        setSelectedSubcategory(sub);
                        setSelectedSubSubcategory(null);
                      }}
                    >
                      {sub.name}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-center">Ангилал сонгоно уу</p>
          )}
        </div>

        <Separator className="md:hidden" />

        {/* Жижиг ангилал */}
        <div>
          {selectedSubcategory ? (
            <>
              <h2 className="text-lg font-medium text-gray-900 mb-3 h-12">
                {selectedSubcategory.name} - Жижиг ангилал
              </h2>
              <div className="space-y-3">
                {selectedSubcategory.subcategories?.map((sub) => (
                  <motion.div
                    key={sub.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant={
                        selectedSubSubcategory === sub ? "secondary" : "ghost"
                      }
                      className="w-full rounded-lg py-2 px-4 hover:bg-gray-100 transition-all"
                      onClick={() => setSelectedSubSubcategory(sub)}
                    >
                      {sub.name}
                    </Button>
                  </motion.div>
                )) || (
                  <p className="text-gray-500 text-center">
                    Дэд ангилал байхгүй
                  </p>
                )}
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-center">Дэд ангилал сонгоно уу</p>
          )}
        </div>
      </CardContent>

      {/* Сонголт (Хэрэв байгаа бол) */}
      <AnimatePresence>
        {selectedSubSubcategory?.chooses && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-gray-50 rounded-lg mt-4"
          >
            <h2 className="text-lg font-medium mb-3 text-gray-900">
              {selectedSubSubcategory.name} - Сонголт
            </h2>
            {selectedSubSubcategory.chooses.map((choose, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-4"
              >
                <p className="text-gray-700 font-medium mb-2">
                  {choose.choosesName}
                </p>
                <Select>
                  <SelectTrigger className="w-full rounded-lg">
                    <SelectValue
                      placeholder={`Сонгох: ${choose.choosesName}`}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {choose.choosesOptions.map((option, i) => (
                      <SelectItem key={i} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default CategorySelector;
