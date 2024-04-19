import React from 'react';

interface CategoryProps {
  category: string;
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div>
      <h2>Category: {category}</h2>
    </div>
  );
};

export default Category;
