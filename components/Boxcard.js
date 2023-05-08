const outcomes = [
  "As the world continues to evolve at a rapid pace, the need for adaptive and innovative",
"education systems has never been greater. As a school leader, you are in a unique position to,",
"drive change and shape the future of education. By adopting AI-driven Agile and Lean",
"methodologies, you can revolutionize your school's teaching and learning processes, improve",
"educational outcomes, and prepare students for the challenges of the 21st century.",
]
const Boxcard = () => {
  return (
    <div className=" md:flex md:flex-row">
      <div className="border-gray-200 text-center md:w-1/3">
        <img
         className="mx-auto"
         alt="profile image"
         src="/images/Test.jpg" // Update the path here
          />
      </div>
      <div className="px-4 py-8 md:px-8 self-center md:w-2/3 md:relative left-9">
        <h2 className="font-bold font-san text-white text-lg mb-3">
        Introduction: Embracing the Future of Education
        </h2>
        {
          outcomes && (
          <ul className="mb-6">
            {outcomes.map((i) => {
                return <li key={i} className="text-white font-serif text-base mb-2">{i}</li>;    
              })}
          </ul>
        )}
        <a href="/stories" className="text-blue-700 underline text-base"> learn More...</a>
        <form class="w-full max-w-sm">
  <div class="flex items-center border-b border-white py-2">
    <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-white" type="text" placeholder="Jane Doe" aria-label="Full name" />
    <button class="flex-shrink-0 bg-white hover:bg-white border-white hover:border-white text-sm border-4 text-blue-400 hover:text-blue-300 py-1 px-2 rounded" type="button">
      Sign Up
    </button>
    <button class="flex-shrink-0 border-transparent border-4 text-white hover:text-teal-800 text-sm py-1 px-2 rounded" type="reset">
      Cancel
    </button>
  </div>
</form>
      </div>
    </div>

  );
};

export default Boxcard;