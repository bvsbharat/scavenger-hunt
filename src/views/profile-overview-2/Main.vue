<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Profile Layout</h2>
    </div>
    <!-- BEGIN: Profile Info -->
    <div class="intro-y box px-5 pt-5 mt-5">
      <div
        class="flex flex-col lg:flex-row border-b border-gray-200 dark:border-dark-5 pb-5 -mx-5"
      >
        <div
          class="flex flex-1 px-5 items-center justify-center lg:justify-start"
        >
          <div
            class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative"
          >
            <img
              alt="Midone Tailwind HTML Admin Template"
              class="rounded-full"
              :src="require(`@/assets/images/${$f()[0].photos[0]}`)"
            />
          </div>
          <div class="ml-5">
            <div
              class="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg"
            >
              {{ $f()[0].users[0].name }}
            </div>
            <div class="text-gray-600">{{ $f()[0].jobs[0] }}</div>
          </div>
        </div>
        <div
          class="mt-6 lg:mt-0 flex-1 dark:text-gray-300 px-5 border-l border-r border-gray-200 dark:border-dark-5 border-t lg:border-t-0 pt-5 lg:pt-0"
        >
          <div class="font-medium text-center lg:text-left lg:mt-5">
            Contact Details
          </div>
          <div
            class="flex flex-col justify-center items-center lg:items-start mt-4"
          >
            <div class="truncate sm:whitespace-normal flex items-center">
              <MailIcon class="w-4 h-4 mr-2" />
              {{ $f()[0].users[0].email }}
            </div>
            <div class="truncate sm:whitespace-normal flex items-center mt-3">
              <InstagramIcon class="w-4 h-4 mr-2" />
              {{ $f()[0].users[0].name }}
            </div>
            <div class="truncate sm:whitespace-normal flex items-center mt-3">
              <TwitterIcon class="w-4 h-4 mr-2" />
              {{ $f()[0].users[0].name }}
            </div>
          </div>
        </div>
        <div
          class="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-gray-200 dark:border-dark-5 pt-5 lg:pt-0"
        >
          <div class="text-center rounded-md w-20 py-3">
            <div class="font-medium text-theme-1 dark:text-theme-10 text-xl">
              201
            </div>
            <div class="text-gray-600">Orders</div>
          </div>
          <div class="text-center rounded-md w-20 py-3">
            <div class="font-medium text-theme-1 dark:text-theme-10 text-xl">
              1k
            </div>
            <div class="text-gray-600">Purchases</div>
          </div>
          <div class="text-center rounded-md w-20 py-3">
            <div class="font-medium text-theme-1 dark:text-theme-10 text-xl">
              492
            </div>
            <div class="text-gray-600">Reviews</div>
          </div>
        </div>
      </div>
      <div
        class="nav-tabs flex flex-col sm:flex-row justify-center lg:justify-start"
      >
        <a
          data-toggle="tab"
          data-target="#profile"
          href="javascript:;"
          class="py-4 sm:mr-8 flex items-center active"
        >
          <UserIcon class="w-4 h-4 mr-2" /> Profile
        </a>
        <a
          data-toggle="tab"
          data-target="#account"
          href="javascript:;"
          class="py-4 sm:mr-8 flex items-center"
        >
          <ShieldIcon class="w-4 h-4 mr-2" /> Account
        </a>
        <a
          data-toggle="tab"
          data-target="#change-password"
          href="javascript:;"
          class="py-4 sm:mr-8 flex items-center"
        >
          <LockIcon class="w-4 h-4 mr-2" /> Change Password
        </a>
        <a
          data-toggle="tab"
          data-target="#settings"
          href="javascript:;"
          class="py-4 sm:mr-8 flex items-center"
        >
          <SettingsIcon class="w-4 h-4 mr-2" /> Settings
        </a>
      </div>
    </div>
    <!-- END: Profile Info -->
    <div class="tab-content mt-5">
      <div id="profile" class="tab-content__pane active">
        <div class="grid grid-cols-12 gap-6">
          <!-- BEGIN: Latest Uploads -->
          <div class="intro-y box col-span-12 lg:col-span-6">
            <div
              class="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">Latest Uploads</h2>
              <div class="dropdown ml-auto sm:hidden">
                <a class="dropdown-toggle w-5 h-5 block" href="javascript:;">
                  <MoreHorizontalIcon
                    class="w-5 h-5 text-gray-600 dark:text-gray-300"
                  />
                </a>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href="javascript:;"
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >All Files</a
                    >
                  </div>
                </div>
              </div>
              <button
                class="button border text-gray-700 dark:border-dark-5 dark:text-gray-300 hidden sm:flex"
              >
                All Files
              </button>
            </div>
            <div class="p-5">
              <div class="flex items-center">
                <div class="file">
                  <a href="" class="w-12 file__icon file__icon--directory"></a>
                </div>
                <div class="ml-4">
                  <a class="font-medium" href="">Documentation</a>
                  <div class="text-gray-600 text-xs mt-0.5">40 KB</div>
                </div>
                <div class="dropdown ml-auto">
                  <a class="dropdown-toggle w-5 h-5 block" href="javascript:;">
                    <MoreHorizontalIcon
                      class="w-5 h-5 text-gray-600 dark:text-gray-300"
                    />
                  </a>
                  <div class="dropdown-box w-40">
                    <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <UsersIcon class="w-4 h-4 mr-2" /> Share File
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <TrashIcon class="w-4 h-4 mr-2" /> Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center mt-5">
                <div class="file">
                  <a href="" class="w-12 file__icon file__icon--file">
                    <div class="file__icon__file-name text-xs">MP3</div>
                  </a>
                </div>
                <div class="ml-4">
                  <a class="font-medium" href="">Celine Dion - Ashes</a>
                  <div class="text-gray-600 text-xs mt-0.5">40 KB</div>
                </div>
                <div class="dropdown ml-auto">
                  <a class="dropdown-toggle w-5 h-5 block" href="javascript:;">
                    <MoreHorizontalIcon
                      class="w-5 h-5 text-gray-600 dark:text-gray-300"
                    />
                  </a>
                  <div class="dropdown-box w-40">
                    <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <UsersIcon class="w-4 h-4 mr-2" /> Share File
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <TrashIcon class="w-4 h-4 mr-2" /> Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center mt-5">
                <div class="file">
                  <a
                    href=""
                    class="w-12 file__icon file__icon--empty-directory"
                  ></a>
                </div>
                <div class="ml-4">
                  <a class="font-medium" href="">Resources</a>
                  <div class="text-gray-600 text-xs mt-0.5">0 KB</div>
                </div>
                <div class="dropdown ml-auto">
                  <a class="dropdown-toggle w-5 h-5 block" href="javascript:;">
                    <MoreHorizontalIcon
                      class="w-5 h-5 text-gray-600 dark:text-gray-300"
                    />
                  </a>
                  <div class="dropdown-box w-40">
                    <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <UsersIcon class="w-4 h-4 mr-2" /> Share File
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <TrashIcon class="w-4 h-4 mr-2" /> Delete
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Latest Uploads -->
          <!-- BEGIN: Work In Progress -->
          <div class="intro-y box col-span-12 lg:col-span-6">
            <div
              class="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">Work In Progress</h2>
              <div class="dropdown ml-auto sm:hidden">
                <a class="dropdown-toggle w-5 h-5 block" href="javascript:;">
                  <MoreHorizontalIcon
                    class="w-5 h-5 text-gray-600 dark:text-gray-300"
                  />
                </a>
                <div class="nav-tabs dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href="javascript:;"
                      data-toggle="tab"
                      data-target="#new"
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New</a
                    >
                    <a
                      href="javascript:;"
                      data-toggle="tab"
                      data-target="#last-week"
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Last Week</a
                    >
                  </div>
                </div>
              </div>
              <div class="nav-tabs ml-auto hidden sm:flex">
                <a
                  data-toggle="tab"
                  data-target="#work-in-progress-new"
                  href="javascript:;"
                  class="py-5 ml-6 active"
                  >New</a
                >
                <a
                  data-toggle="tab"
                  data-target="#work-in-progress-last-week"
                  href="javascript:;"
                  class="py-5 ml-6"
                  >Last Week</a
                >
              </div>
            </div>
            <div class="p-5">
              <div class="tab-content">
                <div id="work-in-progress-new" class="tab-content__pane active">
                  <div>
                    <div class="flex">
                      <div class="mr-auto">Pending Tasks</div>
                      <div>20%</div>
                    </div>
                    <div
                      class="w-full h-1 mt-2 bg-gray-400 dark:bg-dark-1 rounded-full"
                    >
                      <div class="w-1/2 h-full bg-theme-1 rounded-full"></div>
                    </div>
                  </div>
                  <div class="mt-5">
                    <div class="flex">
                      <div class="mr-auto">Completed Tasks</div>
                      <div>2 / 20</div>
                    </div>
                    <div
                      class="w-full h-1 mt-2 bg-gray-400 dark:bg-dark-1 rounded-full"
                    >
                      <div class="w-1/4 h-full bg-theme-1 rounded-full"></div>
                    </div>
                  </div>
                  <div class="mt-5">
                    <div class="flex">
                      <div class="mr-auto">Tasks In Progress</div>
                      <div>42</div>
                    </div>
                    <div
                      class="w-full h-1 mt-2 bg-gray-400 dark:bg-dark-1 rounded-full"
                    >
                      <div class="w-3/4 h-full bg-theme-1 rounded-full"></div>
                    </div>
                  </div>
                  <a
                    href=""
                    class="button w-40 mx-auto justify-center block bg-gray-200 dark:bg-dark-5 dark:text-gray-300 text-gray-600 mt-5"
                    >View More Details</a
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- END: Work In Progress -->
          <!-- BEGIN: Daily Sales -->
          <div class="intro-y box col-span-12 lg:col-span-6">
            <div
              class="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">Daily Sales</h2>
              <div class="dropdown ml-auto sm:hidden">
                <a class="dropdown-toggle w-5 h-5 block" href="javascript:;">
                  <MoreHorizontalIcon
                    class="w-5 h-5 text-gray-600 dark:text-gray-300"
                  />
                </a>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href="javascript:;"
                      class="flex items-center p-2 transition duration-300 ease-in-out bg-white hover:bg-gray-200 rounded-md"
                    >
                      <FileIcon class="w-4 h-4 mr-2" /> Download Excel
                    </a>
                  </div>
                </div>
              </div>
              <button
                class="button border relative flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300 hidden sm:flex"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Download Excel
              </button>
            </div>
            <div class="p-5">
              <div class="relative flex items-center">
                <div class="w-12 h-12 flex-none image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    :src="require(`@/assets/images/${$f()[0].photos[0]}`)"
                  />
                </div>
                <div class="ml-4 mr-auto">
                  <a href="" class="font-medium">{{ $f()[0].users[0].name }}</a>
                  <div class="text-gray-600 mr-5 sm:mr-5">
                    Bootstrap 4 HTML Admin Template
                  </div>
                </div>
                <div class="font-medium text-gray-700 dark:text-gray-600">
                  +$19
                </div>
              </div>
              <div class="relative flex items-center mt-5">
                <div class="w-12 h-12 flex-none image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    :src="require(`@/assets/images/${$f()[1].photos[0]}`)"
                  />
                </div>
                <div class="ml-4 mr-auto">
                  <a href="" class="font-medium">{{ $f()[1].users[0].name }}</a>
                  <div class="text-gray-600 mr-5 sm:mr-5">
                    Tailwind HTML Admin Template
                  </div>
                </div>
                <div class="font-medium text-gray-700 dark:text-gray-600">
                  +$25
                </div>
              </div>
              <div class="relative flex items-center mt-5">
                <div class="w-12 h-12 flex-none image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    class="rounded-full"
                    :src="require(`@/assets/images/${$f()[2].photos[0]}`)"
                  />
                </div>
                <div class="ml-4 mr-auto">
                  <a href="" class="font-medium">{{ $f()[2].users[0].name }}</a>
                  <div class="text-gray-600 mr-5 sm:mr-5">
                    Vuejs HTML Admin Template
                  </div>
                </div>
                <div class="font-medium text-gray-700 dark:text-gray-600">
                  +$21
                </div>
              </div>
            </div>
          </div>
          <!-- END: Daily Sales -->
          <!-- BEGIN: Latest Tasks -->
          <div class="intro-y box col-span-12 lg:col-span-6">
            <div
              class="flex items-center px-5 py-5 sm:py-0 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">Latest Tasks</h2>
              <div class="dropdown ml-auto sm:hidden">
                <a class="dropdown-toggle w-5 h-5 block" href="javascript:;">
                  <MoreHorizontalIcon
                    class="w-5 h-5 text-gray-600 dark:text-gray-300"
                  />
                </a>
                <div class="nav-tabs dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href="javascript:;"
                      data-toggle="tab"
                      data-target="#new"
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New</a
                    >
                    <a
                      href="javascript:;"
                      data-toggle="tab"
                      data-target="#last-week"
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Last Week</a
                    >
                  </div>
                </div>
              </div>
              <div class="nav-tabs ml-auto hidden sm:flex">
                <a
                  data-toggle="tab"
                  data-target="#latest-tasks-new"
                  href="javascript:;"
                  class="py-5 ml-6 active"
                  >New</a
                >
                <a
                  data-toggle="tab"
                  data-target="#latest-tasks-last-week"
                  href="javascript:;"
                  class="py-5 ml-6"
                  >Last Week</a
                >
              </div>
            </div>
            <div class="p-5">
              <div class="tab-content">
                <div id="latest-tasks-new" class="tab-content__pane active">
                  <div class="flex items-center">
                    <div class="border-l-2 border-theme-1 pl-4">
                      <a href="" class="font-medium">Create New Campaign</a>
                      <div class="text-gray-600">10:00 AM</div>
                    </div>
                    <input
                      class="input input--switch ml-auto border"
                      type="checkbox"
                    />
                  </div>
                  <div class="flex items-center mt-5">
                    <div class="border-l-2 border-theme-1 pl-4">
                      <a href="" class="font-medium">Meeting With Client</a>
                      <div class="text-gray-600">02:00 PM</div>
                    </div>
                    <input
                      class="input input--switch ml-auto border"
                      type="checkbox"
                    />
                  </div>
                  <div class="flex items-center mt-5">
                    <div class="border-l-2 border-theme-1 pl-4">
                      <a href="" class="font-medium">Create New Repository</a>
                      <div class="text-gray-600">04:00 PM</div>
                    </div>
                    <input
                      class="input input--switch ml-auto border"
                      type="checkbox"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Latest Tasks -->
          <!-- BEGIN: New Products -->
          <div class="intro-y box col-span-12">
            <div
              class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">New Products</h2>
              <button
                class="button px-2 border relative flex items-center text-gray-700 dark:text-gray-300 mr-2"
                @click="prevNewProducts"
              >
                <ChevronLeftIcon class="w-4 h-4" />
              </button>
              <button
                class="button px-2 border relative flex items-center text-gray-700 dark:text-gray-300"
                @click="nextNewProducts"
              >
                <ChevronRightIcon class="w-4 h-4" />
              </button>
            </div>
            <TinySlider refKey="newProductsRef" class="py-5">
              <div
                v-for="(faker, fakerKey) in $_.take($f(), 5)"
                :key="fakerKey"
                class="px-5"
              >
                <div class="flex flex-col lg:flex-row items-center pb-5">
                  <div
                    class="flex flex-col sm:flex-row items-center pr-5 lg:border-r border-gray-200 dark:border-dark-5"
                  >
                    <div class="sm:mr-5">
                      <div class="w-20 h-20 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          class="rounded-full"
                          :src="require(`@/assets/images/${faker.images[0]}`)"
                        />
                      </div>
                    </div>
                    <div class="mr-auto text-center sm:text-left mt-3 sm:mt-0">
                      <a href="" class="font-medium text-lg">{{
                        faker.products[0].name
                      }}</a>
                      <div class="text-gray-600 mt-1 sm:mt-0">
                        {{ faker.news[0].shortContent }}
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-full lg:w-auto mt-6 lg:mt-0 pt-4 lg:pt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-t-0 border-gray-200 dark:border-dark-5"
                  >
                    <div class="text-center rounded-md w-20 py-3">
                      <div
                        class="font-semibold text-theme-1 dark:text-theme-10 text-lg"
                      >
                        {{ faker.totals[0] }}
                      </div>
                      <div class="text-gray-600">Orders</div>
                    </div>
                    <div class="text-center rounded-md w-20 py-3">
                      <div
                        class="font-semibold text-theme-1 dark:text-theme-10 text-lg"
                      >
                        {{ faker.totals[1] }}k
                      </div>
                      <div class="text-gray-600">Purchases</div>
                    </div>
                    <div class="text-center rounded-md w-20 py-3">
                      <div
                        class="font-semibold text-theme-1 dark:text-theme-10 text-lg"
                      >
                        {{ faker.totals[0] }}
                      </div>
                      <div class="text-gray-600">Reviews</div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col sm:flex-row items-center border-t border-gray-200 dark:border-dark-5 pt-5"
                >
                  <div
                    class="w-full sm:w-auto flex justify-center sm:justify-start items-center border-b sm:border-b-0 border-gray-200 dark:border-dark-5 pb-5 sm:pb-0"
                  >
                    <div
                      class="px-3 py-2 bg-theme-14 dark:bg-dark-5 dark:text-gray-300 text-theme-10 rounded font-medium mr-3"
                    >
                      {{ faker.dates[0] }}
                    </div>
                    <div class="text-gray-600">Date of Release</div>
                  </div>
                  <div class="flex sm:ml-auto mt-5 sm:mt-0">
                    <button
                      class="button w-20 justify-center block bg-gray-200 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-auto"
                    >
                      Preview
                    </button>
                    <button
                      class="button w-20 justify-center block bg-gray-200 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-2"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </TinySlider>
          </div>
          <!-- END: New Products -->
          <!-- BEGIN: New Authors -->
          <div class="intro-y box col-span-12">
            <div
              class="flex items-center px-5 py-3 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">New Authors</h2>
              <button
                class="button px-2 border relative flex items-center text-gray-700 dark:text-gray-300 mr-2"
                @click="prevNewAuthors"
              >
                <ChevronLeftIcon class="w-4 h-4" />
              </button>
              <button
                class="button px-2 border relative flex items-center text-gray-700 dark:text-gray-300"
                @click="nextNewAuthors"
              >
                <ChevronRightIcon class="w-4 h-4" />
              </button>
            </div>
            <TinySlider refKey="newAuthorsRef" class="py-5">
              <div
                v-for="(faker, fakerKey) in $_.take($f(), 5)"
                :key="fakerKey"
                class="px-5"
              >
                <div class="flex flex-col lg:flex-row items-center pb-5">
                  <div
                    class="flex-1 flex flex-col sm:flex-row items-center pr-5 lg:border-r border-gray-200 dark:border-dark-5"
                  >
                    <div class="sm:mr-5">
                      <div class="w-20 h-20 image-fit">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          class="rounded-full"
                          :src="require(`@/assets/images/${faker.photos[0]}`)"
                        />
                      </div>
                    </div>
                    <div class="mr-auto text-center sm:text-left mt-3 sm:mt-0">
                      <a href="" class="font-medium text-lg">{{
                        faker.users[0].name
                      }}</a>
                      <div class="text-gray-600 mt-1 sm:mt-0">
                        {{ faker.jobs[0] }}
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-full lg:w-auto mt-6 lg:mt-0 pt-4 lg:pt-0 flex-1 flex flex-col justify-center items-center lg:items-start px-5 border-t lg:border-t-0 border-gray-200 dark:border-dark-5"
                  >
                    <div class="flex items-center">
                      <a
                        href=""
                        class="w-8 h-8 rounded-full flex items-center justify-center border mr-2 text-gray-500"
                      >
                        <FacebookIcon class="w-3 h-3 fill-current" />
                      </a>
                      {{ faker.users[0].email }}
                    </div>
                    <div class="flex items-center mt-2">
                      <a
                        href=""
                        class="w-8 h-8 rounded-full flex items-center justify-center border mr-2 text-gray-500"
                      >
                        <TwitterIcon class="w-3 h-3 fill-current" />
                      </a>
                      {{ faker.users[0].name }}
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col sm:flex-row items-center border-t border-gray-200 dark:border-dark-5 pt-5"
                >
                  <div
                    class="w-full sm:w-auto flex justify-center sm:justify-start items-center border-b sm:border-b-0 border-gray-200 dark:border-dark-5 pb-5 sm:pb-0"
                  >
                    <div
                      class="px-3 py-2 bg-theme-14 dark:bg-dark-5 dark:text-gray-300 text-theme-10 rounded font-medium mr-3"
                    >
                      {{ faker.dates[0] }}
                    </div>
                    <div class="text-gray-600">Joined Date</div>
                  </div>
                  <div class="flex sm:ml-auto mt-5 sm:mt-0">
                    <button
                      class="button w-20 justify-center block bg-gray-200 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-auto"
                    >
                      Message
                    </button>
                    <button
                      class="button w-20 justify-center block bg-gray-200 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-2"
                    >
                      Profile
                    </button>
                  </div>
                </div>
              </div>
            </TinySlider>
          </div>
          <!-- END: New Authors -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from "vue";

export default defineComponent({
  setup() {
    const newProductsRef = ref<HTMLElement>();
    const newAuthorsRef = ref<HTMLElement>();

    provide("bind[newProductsRef]", (el: HTMLElement) => {
      newProductsRef.value = el;
    });

    provide("bind[newAuthorsRef]", (el: HTMLElement) => {
      newAuthorsRef.value = el;
    });

    const prevNewProducts = () => {
      const el: any = newProductsRef.value;
      el.tns.goTo("prev");
    };
    const nextNewProducts = () => {
      const el: any = newProductsRef.value;
      el.tns.goTo("next");
    };
    const prevNewAuthors = () => {
      const el: any = newAuthorsRef.value;
      el.tns.goTo("prev");
    };
    const nextNewAuthors = () => {
      const el: any = newAuthorsRef.value;
      el.tns.goTo("next");
    };

    return {
      prevNewProducts,
      nextNewProducts,
      prevNewAuthors,
      nextNewAuthors,
    };
  },
});
</script>
