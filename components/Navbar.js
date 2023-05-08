import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
const NavigationMenuDemo = () => {
  return (
    
<nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center">
        <img src="https://e1.pngegg.com/pngimages/744/515/png-clipart-boku-no-hero-academia-v3-and-v4-normal-ver-boku-no-hero-academia-v3-icon.png" class="h-8 mr-3" alt="website Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Mywebclass.org</span>
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-green-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/resource" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-600 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resources</a>
        </li>
        <li>
          <a href="/stories" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Success Stories</a>
        </li>
        <li>
          <a href="/services" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="/contact" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
        <li>
          <a href="/FAQ" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">FAQ</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default NavigationMenuDemo;