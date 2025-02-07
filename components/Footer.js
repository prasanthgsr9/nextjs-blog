const Footer = () => {
  return (

<footer class="bg-white rounded-lg shadow dark:bg-gray-100 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center mb-4 sm:mb-0">
                <img src="https://e1.pngegg.com/pngimages/744/515/png-clipart-boku-no-hero-academia-v3-and-v4-normal-ver-boku-no-hero-academia-v3-icon.png" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Mywebclass.org</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/nextjs-blog/privacy" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/nextjs-blog/about" class="mr-4 hover:underline md:mr-6 ">About us</a>
                </li>
                <li>
                    <a href="/nextjs-blog/FAQ" class="mr-4 hover:underline md:mr-6 ">FAQ'S</a>
                </li>
                <li>
                    <a href="/nextjs-blog/contact" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/nextjs-blog/" class="hover:underline">Mywebclass.org™</a>. All Rights Reserved.</span>
    </div>
</footer>


  );
};

export default Footer;
