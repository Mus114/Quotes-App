import React from 'react';
import { useParams } from 'react-router-dom';
import Category from '../components/Category.tsx';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  return (
    <div>
      <h1>{category} Category Page</h1>
      <Category category={category} />
    </div>
  );
};

export default CategoryPage;
