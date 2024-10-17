import CoursesGrid from "../components/CoursesGrid";

function AllCourses(){
    return(
        <>
        <center>
        <h1 className='display-1'> All Courses</h1>
        </center>
        <div className="w-[1680px] flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full text-sm text-slategray-100">
        <div className="flex-1 grid flex-row items-start justify-start gap-[50px] max-w-full grid-cols-[repeat(4,_minmax(280px,_1fr))] mq850:gap-[25px] mq850:grid-cols-[minmax(280px,_1fr)] mq1500:justify-center mq1500:grid-cols-[repeat(2,_minmax(280px,_486px))]">
        <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[18px] pb-[34.8px] box-border gap-[20px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[239px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="./course.jfif"
                  />
                </div>
              </div>
              <CoursesGrid  courseType='course' courseDuration='4 months' courseTitle='AWS Cloud Practitioner' courseDescription='This course covers the basics of cloud computing, cloud service models, and designing cloud applications, optimizing cloud infrastructure costs, and more.' courseInstructor='Beena Ray' courseActualPrice='$400' courseDiscountPrice='$380'/>
            </div>
            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[18px] pb-[34.8px] box-border gap-[20px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[239px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="./course.jfif"
                  />
                </div>
              </div>
            <CoursesGrid courseType='course' courseDuration='3 months' courseTitle='UI/UX Designing' courseDescription='Teaches how to create aesthetically pleasing interfaces using typography, color theory, layout, and iconography.' courseInstructor='Isa Vivian' courseActualPrice='$100' courseDiscountPrice='$80'/>
            </div>
            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[18px] pb-[34.8px] box-border gap-[20px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[239px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="./course.jfif"
                  />
                </div>
              </div>
              <CoursesGrid courseType='course' courseDuration='3 months' courseTitle='Frontend Development ' courseDescription='Teaches how to create aesthetically pleasing interfaces using HTML, CSS, Javascipt, Angular and React.' courseInstructor='Alen Xu' courseActualPrice='$180' courseDiscountPrice='$120'/>
            </div>
            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[18px] pb-[34.8px] box-border gap-[20px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[239px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="./course.jfif"
                  />
                </div>
              </div>
              <CoursesGrid courseType='course' courseDuration='6 months' courseTitle='Machine Learning for Developers' courseDescription='Practical introduction to machine learning, featuring a series of lessons with video lectures, interactive visualizations.' courseInstructor='Manu Singh' courseActualPrice='$250' courseDiscountPrice='$210'/>
            </div>



            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[18px] pb-[34.8px] box-border gap-[20px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[239px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="./course.jfif"
                  />
                </div>
              </div>
              <CoursesGrid courseType='course' courseDuration='3 months' courseTitle='Introduction to Google Cloud' courseDescription='GCP offers a powerful and secure platform that can help companies to scale their resources, improve their security, and access a wide range of services.' courseInstructor='Akash Patel' courseActualPrice='$150' courseDiscountPrice='$100'/>
            </div>

            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[18px] pb-[34.8px] box-border gap-[20px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[239px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="./course.jfif"
                  />
                </div>
              </div>
              <CoursesGrid courseType='course' courseDuration='8 months' courseTitle='Backend Development' courseDescription='This course teaches students how to build web applications using the Java programming language and frameworks like Spring Boot.' courseInstructor='Meera Joshi' courseActualPrice='$750' courseDiscountPrice='$700'/>
            </div>

            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[18px] pb-[34.8px] box-border gap-[20px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[239px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="./course.jfif"
                  />
                </div>
              </div>
              <CoursesGrid courseType='course' courseDuration='2 months' courseTitle='Introduction to Docker' courseDescription='This course teaches you how to deploy and manage containers, understand Docker Compose.' courseInstructor='Sundar Rajan' courseActualPrice='$250' courseDiscountPrice='$210'/>
            </div>

            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[18px] pb-[34.8px] box-border gap-[20px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[239px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="./course.jfif"
                  />
                </div>
              </div>
              <CoursesGrid courseType='course' courseDuration='5 months' courseTitle='Become a Devops Engineer.' courseDescription='The course can teach you about DevOps tools like Jenkins, Git, GitHub Docker, Kubernetes, and more.' courseInstructor='Arun Kamath' courseActualPrice='$550' courseDiscountPrice='$520'/>
            </div>

            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[18px] pb-[34.8px] box-border gap-[20px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[239px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="./course.jfif"
                  />
                </div>
              </div>
              <CoursesGrid courseType='course' courseDuration='1 months' courseTitle='Introduction to REST API' courseDescription='This courses teaches about RESTful APIs, and integration of applications.' courseInstructor='Dennis Moris' courseActualPrice='$180' courseDiscountPrice='$150'/>
            </div>

            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[18px] pb-[34.8px] box-border gap-[20px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[239px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="./course.jfif"
                  />
                </div>
              </div>
              <CoursesGrid courseType='course' courseDuration='10 months' courseTitle='Python Development.' courseDescription='This course teaches building web applications using Python.' courseInstructor='Lily Brian' courseActualPrice='$850' courseDiscountPrice='$820'/>
            </div>

            <div className="shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white flex flex-col items-end justify-start pt-5 px-[18px] pb-[34.8px] box-border gap-[20px] max-w-full mq850:pb-[23px] mq850:box-border">
              <div className="w-[374px] h-[617px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="h-[239px] flex-1 relative max-w-full">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="./course.jfif"
                  />
                </div>
              </div>
              <CoursesGrid courseType='course' courseDuration='1 months' courseTitle='Maven: A build management tool.' courseDescription='Learn the core concepts of Maven, including Maven life cycle phases, Maven Project Coordinates, Plugins, Goals, and Repositories.' courseInstructor='Shriranga Rao' courseActualPrice='$120' courseDiscountPrice='$100'/>
            </div>
            </div>
            </div>
        </>
    );
}

export default AllCourses;

