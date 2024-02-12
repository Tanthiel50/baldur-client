// CategoryPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from './PageHeader';
import backgroundImageUrl from '../images/GBteXLaKTMW6z8G5Y7sMs6.jpg';
import categoriesInfo from './categoriesInfo'; 
import ArticlesGrid from './AticleGrid';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [apiUrl, setApiUrl] = useState('');

  
  const category = categoriesInfo[categoryId];

  useEffect(() => {
    const url = `http://127.0.0.1:8000/api/interestpoints/category/${categoryId}`;
    setApiUrl(url);
  }, [categoryId]);

  return (
    <div style={{ backgroundColor: '#0D1B2A', textAlign: 'center' }}>
      <PageHeader
        title={category ? category.name : 'Catégorie'}
        breadcrumbPath={category ? category.breadcrumb : 'Catégorie'}
        backgroundImageUrl={backgroundImageUrl}
      />
      <h2 style={{ paddingTop: '3rem', color: 'white' }}>
        {category ? category.description : 'Découvrez nos points d\'intérêt'}
      </h2>
      {apiUrl && <ArticlesGrid apiUrl={apiUrl} />}
    </div>
  );
};

export default CategoryPage;
