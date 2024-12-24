import React from 'react'


const UploadFile = () => {
  return (
    <div class=" flex items-center justify-center py-10 bg-white ">
      <div class="rounded-lg overflow-hidden md:max-w-xl">
        <form class="space-y-2" action="#" method="POST">
          <h1 className="text-3xl font-bold">
            Upload your file!
          </h1>
          <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <label class='block text-lg/6 font-medium text-gray-900'>Valor</label>
            <div class="mt-2">
              <input type='text' class='block w-full rounded-md bg-white px-3 py-1.5  outline '></input>
            </div>
            <a href="#"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white ">
              Get started
            </a>
          </div>

          <div>
            <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
            <div class="mt-2">
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>


        <div class="md:flex">

          <div class="w-full p-3">
            <div class="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">

              <div class="absolute">
                <div class="flex flex-col items-center">
                  <i class="fa fa-folder-open fa-4x text-blue-700"></i>
                  <span class="block text-gray-400 font-normal">Attach you files here</span>
                </div>
              </div>

              <input type="file" class="h-full w-full opacity-0" name="" />

            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default UploadFile;
