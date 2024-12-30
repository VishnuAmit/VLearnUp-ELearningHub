import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[119px] pr-[21px] pl-5 box-border max-w-full text-left text-17xl text-slategray-100 font-poppins mq850:pb-[77px] mq850:box-border ${className}`}
    >
      <div className="w-[1453px] flex flex-row items-end justify-center gap-[47px] max-w-full mq850:gap-[23px] mq1225:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[21px] box-border min-w-[474px] max-w-full mq850:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full">
            <h2 className="m-0 w-[655px] relative text-inherit leading-[160%] font-bold font-inherit text-orange inline-block max-w-full mq450:text-3xl mq450:leading-[35px] mq850:text-10xl mq850:leading-[46px]">
              Experience personalized learning like never before with VLearnUp
            </h2>
            <b className="self-stretch relative text-5xl tracking-[0.02em] leading-[180%] mq450:text-lgi mq450:leading-[35px]">
              Our cloud-based platform uses AI to customize courses and track
              your progress through interactive quizzes and gamified results.
              With ML-driven insights and rewarding achievements, VLearnUp
              brings the essence of offline classrooms to a dynamic, engaging
              online experience.
            </b>
            <b className="relative text-3xl [text-decoration:underline] leading-[40px] mq450:text-lg mq450:leading-[32px]">
              Discover more
            </b>
          </div>
        </div>
        <div className="h-[512px] w-[676px] relative min-w-[676px] max-w-full mq850:min-w-full m-auto">
          <div className="absolute top-[281px] left-[514px] rounded-xl bg-orange w-[162px] h-[231px]" />
          <div className="absolute top-[0px] left-[0px] rounded-xl bg-navy w-[138px] h-[138px]" />
          <img
            className="absolute top-[20px] left-[26px] rounded-xl w-[634px] h-[475px] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image-14@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
