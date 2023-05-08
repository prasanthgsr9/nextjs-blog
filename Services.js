const Services = () => {
  return (
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">
            Explore Our Services
          </h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We Provide Professional services and no less of quality
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600"></p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="bg-violet-400 rounded-xl p-4">
              <div class="relative pl-16">
                <dt class="text-base font-serif font-bold leading-7 text-gray-900">
                  <svg
                    className="flex-shrink-0 mr-2 w-8 h-8 rounded bg-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                    ></path>
                  </svg>{" "}
                  Professional Development
                </dt>
                <dd class="mt-2 text-base leading-7 text-white">
                  AI-driven Agile and Lean methodologies offer numerous benefits
                  for schools, ranging from personalized learning experiences to
                  streamlined administrative processes. By integrating these
                  methodologies into your school's operations and learning
                  environments, you can:
                  <ul>
                    <li>1. Deliver personalized learning experiences</li>
                    <li>2. Enhance collaboration and communication</li>
                    <li>3. Streamline administrative processes</li>
                    <li>4. Make data-driven decisions</li>
                    <li>5. Create a dynamic learning environment</li>
                  </ul>
                </dd>
              </div>
            </div>
            <div className="bg-blue-400 rounded-xl p-4">
              <div class="relative pl-16">
                <dt class="text-base font-serif font-bold leading-7 text-gray-900">
                  <svg
                  className="flex-shrink-0 mr-2 w-8 h-8 rounded bg-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    ></path>
                  </svg>
                  Customized Training and Support
                </dt>
                <dd class="mt-2 text-base leading-7 text-white">
                  As a school principal or administrator, you play a critical
                  role in the successful adoption of AIdriven Agile and Lean
                  methodologies in your institution. Here are some steps you can
                  take to lead the transformation:
                  <ul>
                    <li>1. Develop a comprehensive understanding</li>
                    <li>2. Communicate the benefits and vision .</li>
                    <li>3. Form strategic partnerships</li>
                    <li>4. Create a roadmap</li>
                    <li>5. Monitor progress and measure Success</li>
                  </ul>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Services;