import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Footer from "../components/Footer";

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-GD0RYEYMM3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-GD0RYEYMM3');
</script>
          <title>{siteTitle}</title>
        </Head>
        <section class="bg-white">
          <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">
              Frequently asked questions
            </h2>
            <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16">
              <div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                    <svg
                      class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    What are the benefits of adopting AI-driven Agile and Lean
                    methodologies in my school?
                  </h3>
                  <p class="text-gray-500">
                    The benefits of adopting AI-driven Agile and Lean
                    methodologies in your school include improved student
                    engagement and achievement, personalized learning
                    experiences, and increased teacher efficiency. By automating
                    routine tasks and providing real-time feedback, AI can help
                    teachers focus on more meaningful interactions with
                    students, leading to improved educational outcomes
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                    <svg
                      class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    How can I overcome the challenges of implementing AI-driven
                    Agile and Lean education in my school?
                  </h3>
                  <p class="text-gray-500  ">
                    Implementing AI-driven Agile and Lean education can be
                    challenging due to the need for specialized technical
                    expertise, concerns about data privacy and security, and the
                    cost of implementing and maintaining AI technologies. The
                    Sales Funnel 3 provides practical guidance and resources to
                    help school leaders navigate these challenges, including an
                    implementation guide, training and support for school
                    leaders, and a network of like-minded professionals
                    advocating for AI-enhanced learning
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                    <svg
                      class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Can I customize AI-driven Agile and Lean education solutions
                    to meet the unique needs of my school?
                  </h3>
                  <p class="text-gray-500 ">
                    Yes, AI-driven Agile and Lean education solutions can be
                    customized to meet the unique needs of your school. By
                    working with AI technology vendors and education experts,
                    you can tailor these solutions to your school's specific
                    requirements, such as subject areas, student demographics,
                    and learning goals.{" "}
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900  ">
                    <svg
                      class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    How can I evaluate the ROI of AI-driven Agile and Lean
                    education solutions?
                  </h3>
                  <p class="text-gray-500  ">
                    Evaluating the ROI of AI-driven Agile and Lean education
                    solutions involves analyzing the impact of these approaches
                    on school performance and student outcomes. This may involve
                    conducting pilot studies, gathering data on student
                    achievement and engagement, and comparing the cost of
                    implementing and maintaining these solutions to the benefits
                    they provide. The Sales Funnel 3 provides guidance and
                    resources to help school leaders evaluate the ROI of
                    different AI-driven Agile and Lean education solutions.
                  </p>
                </div>
              </div>
              <div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900  ">
                    <svg
                      class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    How can I ensure data privacy and security when implementing
                    AI-driven Agile and Lean education?
                  </h3>
                  <p class="text-gray-500  ">
                    Ensuring data privacy and security is critical when
                    implementing AI-driven Agile and Lean education. School
                    leaders should carefully evaluate the data collection and
                    storage practices of any AI technologies they use and ensure
                    they are in compliance with relevant laws and regulations.
                    The Sales Funnel 3 provides guidance on how to ensure data
                    privacy and security when implementing AI-driven Agile and
                    Lean education
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900  ">
                    <svg
                      class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    How can AI technology be integrated into my school's
                    existing curriculum?
                  </h3>
                  <p class="text-gray-500  ">
                    {" "}
                    AI technology can be integrated into your school's existing
                    curriculum by incorporating AIpowered assessment tools,
                    adaptive learning platforms, and other AI-driven Agile and
                    Lean education solutions into your teaching practices. This
                    can help personalize learning experiences for students and
                    provide teachers with real-time feedback on student
                    performance{" "}
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900  ">
                    <svg
                      class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    What kind of technical support and training is available for
                    school staff to use AI-driven Agile and Lean education
                    solutions?
                  </h3>
                  <p class="text-gray-500  ">
                    {" "}
                    The Sales Funnel 3 provides technical support and training
                    for school staff to use AI-driven Agile and Lean education
                    solutions. This can include hands-on training sessions,
                    webinars, online resources, and ongoing support to ensure
                    the successful implementation of these solutions{" "}
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900  ">
                    <svg
                      class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    How can I communicate the benefits of AI-driven Agile and
                    Lean education to parents and other stakeholders in my
                    community?
                  </h3>
                  <p class="text-gray-500  ">
                    Communicating the benefits of AI-driven Agile and Lean
                    education to parents and other stakeholders in your
                    community can help build support for the implementation of
                    these approaches in your school. The Sales Funnel 3 provides
                    guidance on how to effectively communicate the benefits of
                    AI-driven Agile and Lean education to various stakeholders,
                    including parents, school board members, and community
                    leaders.
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900  ">
                    <svg
                      class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    How can I measure the success of AI-driven Agile and Lean
                    education in my school?
                  </h3>
                  <p class="text-gray-500  ">
                    Measuring the success of AI-driven Agile and Lean education
                    in your school involves collecting and analyzing data on
                    student outcomes, teacher efficiency, and other relevant
                    factors. This can help identify areas where these approaches
                    are having a positive impact and where they may need to be
                    adjusted. The Sales Funnel 3 provides guidance on how to
                    measure the success of AI-driven Agile and Lean education in
                    your school.
                  </p>
                </div>
                <div class="mb-10">
                  <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900  ">
                    <svg
                      class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500  "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    How can I ensure that AI-driven Agile and Lean education
                    solutions are accessible to all students?
                  </h3>
                  <p class="text-gray-500  ">
                    Ensuring that AI-driven Agile and Lean education solutions
                    are accessible to all students is critical to creating an
                    equitable learning environment. School leaders can work with
                    vendors and education experts to ensure that these solutions
                    are designed to be inclusive and accessible to students with
                    diverse needs and abilities. The Sales Funnel 3 provides
                    guidance on how to ensure that AI-driven Agile and Lean
                    education solutions are accessible to all students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
