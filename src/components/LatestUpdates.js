import PropTypes from "prop-types";
import { forwardRef, useState, useEffect } from "react";
const apiKey = '26baffb9b3c746aaab690506bfd68df7'; // Replace with your actual NewsAPI key
const url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`;

const LatestUpdates = forwardRef(({ className = "" }, ref) => {
  

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch articles
  const fetchArticles = () => {
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
  };

  useEffect(() => {
    fetchArticles(); // Fetch articles on component mount

    const intervalId = setInterval(() => {
      fetchArticles(); // Fetch articles every 5 minutes
    }, 120000); // 5 minutes in milliseconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);
  const truncateTitle = (title) => {
    if (title.length > 74) {
      return `${title.substring(0, 74)}...`; // Truncate to 72 characters currently hardcoded
    }
    return title;
  };

  const truncateDescription = (description) => {
    if (description.length > 72) {
      return `${description.substring(0, 72)}...`; // Truncate to 72 characters currently hardcoded
    } else if (description.length < 38) {
      return `${description.substring(0,description.length - 1)} ` + `${'\u00a0'.repeat(25)}` //If the description is less than one line then append a blank line to maintain the alignment.
    }
    return description;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


return (
  <section ref={ref}
    className={`w-[1907px] flex flex-row items-start justify-center pt-0 px-5 pb-[106px] box-border max-w-full text-left text-17xl text-darkslateblue-300 font-nunito-sans mq850:pb-[45px] mq850:box-border mq1225:pb-[69px] mq1225:box-border ${className}`}
  >
    <div className="w-[1557px] flex flex-col items-start justify-start gap-[100px] max-w-full mq450:gap-[25px] mq850:gap-[50px]">
      <div className="w-[1520px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1086px] flex flex-col items-start justify-start gap-[20px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[29px] pl-5">
            <h2 className="m-0 relative text-inherit leading-[65px] font-bold font-inherit mq450:text-3xl mq450:leading-[39px] mq850:text-10xl mq850:leading-[52px]">
              Latest Updates and Insights
            </h2>
          </div>
          <b className="relative text-5xl leading-[180%] text-slategray-100 text-center mq450:text-lgi mq450:leading-[35px]">
            Stay updated with the latest developments in educational
            technology and e-learning innovations.
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-[151px] max-w-full text-xl text-white font-poppins mq450:gap-[19px] mq850:gap-[38px] mq1225:gap-[75px] mq1500:flex-wrap">
        <div className="w-[609px] flex flex-col items-start justify-start gap-[47px] min-w-[609px] max-w-full mq850:gap-[23px] mq850:min-w-full mq1500:flex-1 relative">
          <img
            className="self-stretch h-[333px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt={articles[0].title}
            src={articles[0].urlToImage||"/image-16@2x.png"}
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <div className="rounded-61xl bg-lightseagreen flex flex-row items-start justify-start py-0.5 pr-[34px] pl-[35px] absolute top-6 left-5 z-[10]">
              <div className="h-10 w-[130px] relative rounded-61xl bg-lightseagreen hidden" />
              <b className="relative tracking-[0.02em] leading-[180%] inline-block min-w-[61px] z-[1] mq450:text-base mq450:leading-[29px]">
                {articles[0].source.name}
              </b>
            </div>
            <b className="self-stretch relative text-7xl leading-[180%] text-gray-100 mq450:text-2xl mq450:leading-[37px]">
              <a href={articles[0].url} className="text-gray-100 no-underline">
                {articles[0].title}
              </a>
            </b>
            <div className="self-stretch flex flex-col items-start justify-start text-slategray-100">
              <b className="self-stretch relative tracking-[0.02em] leading-[180%] mq450:text-base mq450:leading-[29px]">
                {articles[0].description}
              </b>
              <b className="relative [text-decoration:underline] tracking-[0.02em] leading-[180%] inline-block min-w-[116px] z-[1] mt-[-28px] mq450:text-base mq450:leading-[29px] bottom mt-4">
                <a href={articles[0].url}>
                  Read More...
                </a>
              </b>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start gap-[40px] min-w-[518px] max-w-full text-lg mq450:gap-[20px] mq850:flex-wrap mq850:min-w-full">
          <div className="w-[280px] flex flex-col items-start justify-start gap-[50px] min-w-[280px] mq450:gap-[25px] mq850:flex-1">
            <div className="self-stretch rounded-xl flex flex-row items-start justify-end pt-[146px] px-5 pb-5 relative bg-[url('/public/press-items@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[200px] w-[280px] relative rounded-xl object-cover hidden z-[0]"
                alt=""
                src="/rectangle-331@2x.png"
              />
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover z-[1]"
                loading="lazy"
                alt={articles[1].title}
                src={articles[1].urlToImage||"/image-17@2x.png"}
              />
              <div className="rounded-61xl bg-lightseagreen flex flex-row items-start justify-start pt-1 pb-0.5 pr-1 pl-3 whitespace-nowrap z-[2]">
                <div className="h-[34px] w-[154px] relative rounded-61xl bg-lightseagreen hidden" />
                <b className="relative tracking-[0.02em] z-[1]">
                  {articles[1].source.name}
                </b>
              </div>
            </div>
            <div className="self-stretch rounded-xl flex flex-row items-start justify-end pt-[146px] px-5 pb-5 relative bg-[url('/public/rectangle-341@2x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[200px] w-[280px] relative rounded-xl object-cover hidden z-[0]"
                alt=""
                src="/rectangle-341@2x.png"
              />
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-darkslateblue-500 z-[1]" />
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/image-18@2x.png"
                />
              </div>
              <div className="rounded-61xl bg-lightseagreen flex flex-row items-start justify-start pt-1 pb-[3px] pr-[19px] pl-[26px] z-[3]">
                <div className="h-[34px] w-[100px] relative rounded-61xl bg-lightseagreen hidden" />
                <b className="relative tracking-[0.02em] inline-block min-w-[55px] z-[1]">
                  {articles[2].source.name}
                </b>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-[146px] px-5 pb-5 relative">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/single-image@2x.png"
                />
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-darkslateblue-500 z-[1]" />
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src={articles[3].urlToImage||"/image-19@2x.png"}
                />
              </div>
              <div className="rounded-61xl bg-lightseagreen flex flex-row items-start justify-start pt-1 pb-[3px] pr-[19px] pl-[26px] z-[3]">
                <div className="h-[34px] w-[100px] relative rounded-61xl bg-lightseagreen hidden" />
                <b className="relative tracking-[0.02em] inline-block min-w-[55px] z-[1]">
                  {articles[3].source.name}
                </b>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[78px] min-w-[310px] max-w-full text-3xl text-gray-100 mq850:gap-[39px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <b className="self-stretch relative leading-[180%] mq450:text-lg mq450:leading-[32px]">
                <a className="text-gray-100 no-underline" href={articles[1].url}>
                  {truncateTitle(articles[1].title)}
                </a>
              </b>
              <b className="w-[447px] relative text-xl tracking-[0.02em] leading-[180%] inline-block text-slategray-100 max-w-full mq450:text-base mq450:leading-[29px]">
                {truncateDescription(articles[1].description)}
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <b className="self-stretch relative leading-[180%] mq450:text-lg mq450:leading-[32px]">
                <a href={articles[2].url} className="text-gray-100 no-underline">
                  {truncateTitle(articles[2].title)}
                </a>
              </b>
              <b className="w-[447px] relative text-xl tracking-[0.02em] leading-[180%] inline-block text-slategray-100 max-w-full mq450:text-base mq450:leading-[29px]">
                {truncateDescription(articles[2].description)}
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
              <b className="self-stretch relative leading-[180%] mq450:text-lg mq450:leading-[32px]">
                <a className="text-gray-100 no-underline" href={articles[3].url}>
                  {articles[3].title}
                </a>
              </b>
              <b className="w-[447px] relative text-xl tracking-[0.02em] leading-[180%] inline-block text-slategray-100 max-w-full mq450:text-base mq450:leading-[29px]">
                {truncateDescription(articles[3].description)}
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
});

LatestUpdates.propTypes = {
  className: PropTypes.string,
};
export default LatestUpdates;