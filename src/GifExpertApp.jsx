import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Super Mario Bros']);
  const onAddCategory = (category) => {
    if (categories.find(cat => cat.toLowerCase() === category)) return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory
        setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      { categories.map((category) => (<GifGrid category={category} key={category} />))}
    </>
  );
};
