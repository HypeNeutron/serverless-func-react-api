import React, { useState, useEffect } from 'react';
import axios from 'axios';

const mainUrl = 'https://temp-serverless.netlify.app/api/2-basic-api'; // Form Vanilla Netlify
const Basic = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(mainUrl);
      setProducts(data);
    } catch (error) {
      <h4> `link API DATA not Available info:${error}`</h4>;
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section section-center">
        <h2>Loading.....</h2>
      </section>
    );
  }
  return (
    <section className="section section-center">
      <div className="title">
        <h2>basic setup</h2>
        <div className="title-underline"></div>
        <div className="products">
          {products.map((product) => {
            const {
              id,
              image: { url },
              price,
              name,
            } = product;
            return (
              <article className="product" key={id}>
                <img src={url} alt={name} />
                <h5>{name}</h5>
                <h5 className="price">${price}</h5>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Basic;
