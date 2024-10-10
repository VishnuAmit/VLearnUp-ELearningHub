import CoursesGrid from "./CoursesGrid";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import { forwardRef } from "react";
const FrameComponent = forwardRef(({ className = "" }, ref) => {
  return (
    <section ref={ref}
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[165px] pr-5 pl-[21px] box-border max-w-full text-left text-11xl text-black font-poppins mq450:pb-[70px] mq450:box-border mq1225:pb-[107px] mq1225:box-border ${className}`}
    >
      <div className="w-[1711px] flex flex-col items-start justify-start gap-[47px] max-w-full mq850:gap-[23px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <h3 className="m-0 relative text-inherit tracking-[0.02em] font-bold font-inherit mq450:text-lg mq850:text-5xl">
            Explore Courses
          </h3>
          <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0 text-xl text-orange">
            <b className="relative inline-block min-w-[67px] mq450:text-base">
              See all
            </b>
          </div>
        </div>
        <div className="w-[1680px] flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full text-sm text-slategray-100">
          <div className="flex-1 grid flex-row items-start justify-start gap-[50px] max-w-full grid-cols-[repeat(4,_minmax(280px,_1fr))] mq850:gap-[25px] mq850:grid-cols-[minmax(280px,_1fr)] mq1500:justify-center mq1500:grid-cols-[repeat(2,_minmax(280px,_486px))]">
            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[19px] pb-[34.8px] box-border gap-[20.3px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch h-[238.7px] relative rounded-xl bg-cover bg-no-repeat bg-[top] z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-500 w-full h-full z-[1]" />
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-full h-full object-cover z-[2]"
                  loading="lazy"
                  alt=""
                  src="/ui-ux.webp"
                />
              </div>
              <CoursesGrid courseType='course' courseDuration='3 months' courseTitle='UI/UX Designing' courseDescription='Teaches how to create aesthetically pleasing interfaces using typography, color theory, layout, and iconography.' courseInstructor='Isa Vivian' courseActualPrice='$100' courseDiscountPrice='$80'/>
            </div>
            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-4 pb-[34.8px] box-border gap-[20px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch h-[239px] relative z-[2]">
                <div className="absolute top-[0px] left-[1px] rounded-xl w-full h-full bg-[url('/public/frontend.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                  {/* <img
                    className="absolute top-[0px] left-[0px] rounded-xl w-full h-full object-cover hidden"
                    alt=""
                    src="/ui-ux.webp"
                  /> */}
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-500 w-full h-full z-[1]" />
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-xl w-full h-full bg-cover bg-no-repeat bg-[top]">
                  {/* <img
                    className="absolute top-[0px] left-[0px] rounded-xl w-full h-full object-cover hidden"
                    alt=""
                    src="/frontend.png"
                  /> */}
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-500 w-full h-full z-[1]" />
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-xl w-full h-full bg-cover bg-no-repeat bg-[top] z-[2]">
                  {/* <img
                    className="absolute top-[0px] left-[0px] rounded-xl w-full h-full object-cover hidden"
                    alt=""
                    src="/frontend.png"
                  /> */}
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-500 w-full h-full z-[1]" />
                </div>
              </div>
              <CoursesGrid courseType='course' courseDuration='3 months' courseTitle='Frontend Development ' courseDescription='Teaches how to create aesthetically pleasing interfaces using HTML, CSS, Javascipt, Angular and React.' courseInstructor='Alen Xu' courseActualPrice='$180' courseDiscountPrice='$120'/>
            </div>
            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[19px] pb-[34.8px] box-border gap-[20.3px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch h-[238.7px] relative rounded-xl bg-[url('/public/ml.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                {/* <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-full h-full object-cover hidden"
                  alt=""
                  src="/frontend.png"
                /> */}
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslateblue-500 w-full h-full z-[1]" />
              </div>
              <CoursesGrid courseType='course' courseDuration='6 months' courseTitle='Machine Learning for Developers' courseDescription='Practical introduction to machine learning, featuring a series of lessons with video lectures, interactive visualizations, and hands-on practice exercises.' courseInstructor='Manu Singh' courseActualPrice='$250' courseDiscountPrice='$210'/>
            </div>
            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[18px] pb-[34.8px] box-border gap-[20px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                {/* <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover z-[2]"
                  alt=""
                  src="/frontend.png"
                /> */}
                <div className="h-[239px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/aws.jfif"
                  />
                </div>
              </div>
            <CoursesGrid  courseType='course' courseDuration='4 months' courseTitle='AWS Cloud Practitioner' courseDescription='This course covers the basics of cloud computing, cloud service models, and designing cloud applications, optimizing cloud infrastructure costs, and more.' courseInstructor='Beena Ray' courseActualPrice='$400' courseDiscountPrice='$380'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});


FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

