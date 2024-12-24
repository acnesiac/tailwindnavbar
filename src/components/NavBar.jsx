import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class='pl-3 '>

      <ul class="flex">
        <li class="flex-1 mr-2">
          <Link to="/"><a class="text-center block border border-blue-500 rounded py-2 px-4 bg-purple-500 hover:bg-blue-700 text-white" href="#">
            List products refill

          </a>
          </Link>
        </li>
        <li class="flex-1 mr-2">
          <Link to="/upload"><a class="text-center block border border-blue-500 rounded py-2 px-4 bg-purple-500 hover:bg-blue-700 text-white" href="#">
            Upload
          </a>
          </Link>
        </li>



      </ul>
    </div>
  )

}

export default Navbar;