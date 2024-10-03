import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const apiKey = ''; // Replace with your NewsAPI key
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

const LatestUpdates = ({ className = "" }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.articles.slice(0, 4)); // Limit to 4 articles
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className={`w-[1907px] flex flex-row items-start justify-center pt-0 px-5 pb-[106px] box-border max-w-full text-left text-17xl text-darkslateblue-300 font-nunito-sans mq850:pb-[45px] mq850:box-border mq1225:pb-[69px] mq1225:box-border ${className}`}>
      <div className="w-[1557px] flex flex-col items-start justify-start gap-[100px] max-w-full mq450:gap-[25px] mq850:gap-[50px]">
        <div className="w-[1520px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1086px] flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[29px] pl-5">
              <h2 className="m-0 relative text-inherit leading-[65px] font-bold font-inherit mq450:text-3xl mq450:leading-[39px] mq850:text-10xl mq850:leading-[52px]">
                Latest Updates and Insights
              </h2>
            </div>
            <b className="relative text-5xl leading-[180%] text-slategray-100 text-center mq450:text-lgi mq450:leading-[35px]">
              Stay updated with the latest developments in educational technology and e-learning innovations.
            </b>
          </div>
        </div>

        {/* Main container: two divs side by side */}
        <div className="self-stretch flex flex-row items-start justify-between gap-[151px] max-w-full text-xl text-white font-poppins mq450:gap-[19px] mq850:gap-[38px] mq1225:gap-[75px] mq1500:flex-wrap">
          
          {/* First Div: Big article (vertical flex layout) */}
          <div className="w-[609px] flex flex-col items-start justify-start gap-[47px] min-w-[609px] max-w-full mq850:gap-[23px] mq850:min-w-full mq1500:flex-1">
            {articles[0] && (
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <img
                  className="self-stretch h-[333px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src={articles[0].urlToImage || "/image-16@2x.png"} // Use article image or fallback
                />
                <div className="rounded-61xl bg-lightseagreen flex flex-row items-start justify-start py-0.5 pr-[34px] pl-[35px]">
                  <b className="relative tracking-[0.02em] leading-[180%] inline-block min-w-[61px] z-[1] mq450:text-base mq450:leading-[29px]">
                    {articles[0].source.name || "NEWS"}
                  </b>
                </div>
                <b className="self-stretch relative text-7xl leading-[180%] text-gray-100 mq450:text-2xl mq450:leading-[37px]">
                  {articles[0].title}
                </b>
                <div className="self-stretch flex flex-col items-start justify-start text-slategray-100">
                  <b className="self-stretch relative tracking-[0.02em] leading-[180%] mq450:text-base mq450:leading-[29px]">
                    {articles[0].description}
                  </b>
                  <b className="relative [text-decoration:underline] tracking-[0.02em] leading-[180%] inline-block min-w-[116px] z-[1] mt-[-28px] mq450:text-base mq450:leading-[29px]">
                    <a href={articles[0].url}>Read more.</a>
                  </b>
                </div>
              </div>
            )}
          </div>

          {/* Second Div: Three smaller articles (vertical flex layout) */}
          <div className="w-[609px] flex flex-col gap-[47px] max-w-full">
            {articles.slice(1, 4).map((article, index) => (
              <div key={index} className="flex flex-row items-start gap-[20px] min-w-[250px] max-w-full mq850:gap-[23px] mq850:min-w-full mq1500:flex-1">
                
                {/* Left: Thumbnail */}
                <div className="w-[120px] h-[120px] flex-shrink-0">
                  <img
                    className="w-full h-full rounded-xl object-cover"
                    loading="lazy"
                    alt=""
                    src={article.urlToImage || "/image-16@2x.png"} // Use article image or fallback
                  />
                </div>
                
                {/* Right: Title and description */}
                <div className="flex flex-col justify-between">
                  <b className="text-3xl leading-[180%] text-gray-100 mq450:text-2xl mq450:leading-[37px]">
                    {article.title}
                  </b>
                  <p className="text-xl leading-[180%] text-slategray-100 mq450:text-base mq450:leading-[29px]">
                    {article.description}
                  </p>
                  <b className="relative [text-decoration:underline] tracking-[0.02em] leading-[180%] inline-block min-w-[116px] z-[1] mt-[-28px] mq450:text-base mq450:leading-[29px]">
                    <a href={article.url}>Read more.</a>
                  </b>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

LatestUpdates.propTypes = {
  className: PropTypes.string,
};

export default LatestUpdates;
