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
            <div
              class="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-theme-1 rounded-full p-2"
            >
              <CameraIcon class="w-4 h-4 text-white" />
            </div>
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
          class="mt-6 lg:mt-0 flex-1 px-5 border-t lg:border-0 border-gray-200 dark:border-dark-5 pt-5 lg:pt-0"
        >
          <div class="font-medium text-center lg:text-left lg:mt-5">
            Sales Growth
          </div>
          <div class="flex items-center justify-center lg:justify-start mt-2">
            <div class="mr-2 w-20 flex">
              USP: <span class="ml-3 font-medium text-theme-9">+23%</span>
            </div>
            <div class="w-3/4 overflow-auto">
              <SimpleLineChart1 :height="50" />
            </div>
          </div>
          <div class="flex items-center justify-center lg:justify-start">
            <div class="mr-2 w-20 flex">
              STP: <span class="ml-3 font-medium text-theme-6">-2%</span>
            </div>
            <div class="w-3/4 overflow-auto">
              <SimpleLineChart2 :height="50" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="nav-tabs flex flex-col sm:flex-row justify-center lg:justify-start"
      >
        <a
          data-toggle="tab"
          data-target="#dashboard"
          href="javascript:;"
          class="py-4 sm:mr-8 active"
          >Dashboard</a
        >
        <a
          data-toggle="tab"
          data-target="#account-and-profile"
          href="javascript:;"
          class="py-4 sm:mr-8"
          >Account & Profile</a
        >
        <a
          data-toggle="tab"
          data-target="#activities"
          href="javascript:;"
          class="py-4 sm:mr-8"
          >Activities</a
        >
        <a
          data-toggle="tab"
          data-target="#tasks"
          href="javascript:;"
          class="py-4 sm:mr-8"
          >Tasks</a
        >
      </div>
    </div>
    <!-- END: Profile Info -->
    <div class="intro-y tab-content mt-5">
      <div id="dashboard" class="tab-content__pane active">
        <div class="grid grid-cols-12 gap-6">
          <!-- BEGIN: Top Categories -->
          <div class="intro-y box col-span-12 lg:col-span-6">
            <div
              class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">Top Categories</h2>
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
                      <PlusIcon class="w-4 h-4 mr-2" /> Add Category
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <SettingsIcon class="w-4 h-4 mr-2" />
                      Settings
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-5">
              <div class="flex flex-col sm:flex-row">
                <div class="mr-auto">
                  <a href="" class="font-medium">Wordpress Template</a>
                  <div class="text-gray-600 mt-1">HTML, PHP, Mysql</div>
                </div>
                <div class="flex">
                  <div class="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                    <SimpleLineChart :height="20" />
                  </div>
                  <div class="text-center">
                    <div class="font-medium">6.5k</div>
                    <div class="bg-theme-18 text-theme-9 rounded px-2 mt-1.5">
                      +150
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row mt-5">
                <div class="mr-auto">
                  <a href="" class="font-medium">Bootstrap HTML Template</a>
                  <div class="text-gray-600 mt-1">HTML, PHP, Mysql</div>
                </div>
                <div class="flex">
                  <div class="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                    <SimpleLineChart :height="20" />
                  </div>
                  <div class="text-center">
                    <div class="font-medium">2.5k</div>
                    <div class="bg-theme-17 text-theme-11 rounded px-2 mt-1.5">
                      +150
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row mt-5">
                <div class="mr-auto">
                  <a href="" class="font-medium">Tailwind HTML Template</a>
                  <div class="text-gray-600 mt-1">HTML, PHP, Mysql</div>
                </div>
                <div class="flex">
                  <div class="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                    <SimpleLineChart :height="20" />
                  </div>
                  <div class="text-center">
                    <div class="font-medium">3.4k</div>
                    <div class="bg-theme-14 text-theme-10 rounded px-2 mt-1.5">
                      +150
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Top Categories -->
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
                      class="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
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
                    <div
                      class="border-l-2 border-theme-1 dark:border-theme-1 pl-4"
                    >
                      <a href="" class="font-medium">Create New Campaign</a>
                      <div class="text-gray-600">10:00 AM</div>
                    </div>
                    <input
                      class="input input--switch ml-auto border"
                      type="checkbox"
                    />
                  </div>
                  <div class="flex items-center mt-5">
                    <div
                      class="border-l-2 border-theme-1 dark:border-theme-1 pl-4"
                    >
                      <a href="" class="font-medium">Meeting With Client</a>
                      <div class="text-gray-600">02:00 PM</div>
                    </div>
                    <input
                      class="input input--switch ml-auto border"
                      type="checkbox"
                    />
                  </div>
                  <div class="flex items-center mt-5">
                    <div
                      class="border-l-2 border-theme-1 dark:border-theme-1 pl-4"
                    >
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
          <!-- BEGIN: General Statistic -->
          <div class="intro-y box col-span-12">
            <div
              class="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5"
            >
              <h2 class="font-medium text-base mr-auto">General Statistics</h2>
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
                      class="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <FileIcon class="w-4 h-4 mr-2" /> Download XML
                    </a>
                  </div>
                </div>
              </div>
              <button
                class="button border relative flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300 hidden sm:flex"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Download XML
              </button>
            </div>
            <div class="grid grid-cols-1 xxl:grid-cols-7 gap-6 p-5">
              <div class="xxl:col-span-2">
                <div class="grid grid-cols-2 gap-6">
                  <div
                    class="col-span-2 sm:col-span-1 xxl:col-span-2 box dark:bg-dark-6 p-5"
                  >
                    <div class="font-medium">Net Worth</div>
                    <div class="flex items-center mt-1 sm:mt-0">
                      <div class="mr-4 w-20 flex">
                        USP:
                        <span class="ml-3 font-medium text-theme-9">+23%</span>
                      </div>
                      <div class="w-5/6 overflow-auto">
                        <SimpleLineChart :height="60" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-span-2 sm:col-span-1 xxl:col-span-2 box dark:bg-dark-6 p-5"
                  >
                    <div class="font-medium">Sales</div>
                    <div class="flex items-center mt-1 sm:mt-0">
                      <div class="mr-4 w-20 flex">
                        USP:
                        <span class="ml-3 font-medium text-theme-6">-5%</span>
                      </div>
                      <div class="w-5/6 overflow-auto">
                        <SimpleLineChart :height="60" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-span-2 sm:col-span-1 xxl:col-span-2 box dark:bg-dark-6 p-5"
                  >
                    <div class="font-medium">Profit</div>
                    <div class="flex items-center mt-1 sm:mt-0">
                      <div class="mr-4 w-20 flex">
                        USP:
                        <span class="ml-3 font-medium text-theme-6">-10%</span>
                      </div>
                      <div class="w-5/6 overflow-auto">
                        <SimpleLineChart :height="60" />
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-span-2 sm:col-span-1 xxl:col-span-2 box dark:bg-dark-6 p-5"
                  >
                    <div class="font-medium">Products</div>
                    <div class="flex items-center mt-1 sm:mt-0">
                      <div class="mr-4 w-20 flex">
                        USP:
                        <span class="ml-3 font-medium text-theme-9">+55%</span>
                      </div>
                      <div class="w-5/6 overflow-auto">
                        <SimpleLineChart :height="60" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="xxl:col-span-5 w-full">
                <div class="flex justify-center mt-8">
                  <div class="flex items-center mr-5">
                    <div class="w-2 h-2 bg-theme-1 rounded-full mr-3"></div>
                    <span>Product Profit</span>
                  </div>
                  <div class="flex items-center">
                    <div class="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                    <span>Author Sales</span>
                  </div>
                </div>
                <div class="report-chart mt-8">
                  <StackedBarChart1 :height="130" />
                </div>
              </div>
            </div>
          </div>
          <!-- END: General Statistic -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StackedBarChart1 from "@/components/stacked-bar-chart-1/Main.vue";
import SimpleLineChart from "@/components/simple-line-chart/Main.vue";
import SimpleLineChart1 from "@/components/simple-line-chart-1/Main.vue";
import SimpleLineChart2 from "@/components/simple-line-chart-2/Main.vue";

export default defineComponent({
  components: {
    StackedBarChart1,
    SimpleLineChart,
    SimpleLineChart1,
    SimpleLineChart2,
  },
});
</script>
