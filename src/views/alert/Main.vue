<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Alert</h2>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Basic Alert -->
      <div class="col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Basic Alerts</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#basic-alert"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="basic-alert" class="p-5">
            <div class="preview">
              <div class="rounded-md px-5 py-4 mb-2 bg-theme-1 text-white">
                Awesome simple alert
              </div>
              <div
                class="rounded-md px-5 py-4 mb-2 border text-gray-700 dark:text-gray-300 dark:border-dark-5"
              >
                Awesome simple alert
              </div>
              <div class="rounded-md px-5 py-4 mb-2 bg-theme-9 text-white">
                Awesome simple alert
              </div>
              <div class="rounded-md px-5 py-4 mb-2 bg-theme-12 text-white">
                Awesome simple alert
              </div>
              <div class="rounded-md px-5 py-4 mb-2 bg-theme-6 text-white">
                Awesome simple alert
              </div>
              <div class="rounded-md px-5 py-4 mb-2 bg-gray-200 text-gray-600">
                Awesome simple alert
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-basic-alert"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-basic-alert" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="rounded-md px-5 py-4 mb-2 bg-theme-1 text-white"
                      >
                        Awesome simple alert
                      </div>
                      <div
                        class="rounded-md px-5 py-4 mb-2 border text-gray-700 dark:text-gray-300 dark:border-dark-5"
                      >
                        Awesome simple alert
                      </div>
                      <div
                        class="rounded-md px-5 py-4 mb-2 bg-theme-9 text-white"
                      >
                        Awesome simple alert
                      </div>
                      <div
                        class="rounded-md px-5 py-4 mb-2 bg-theme-12 text-white"
                      >
                        Awesome simple alert
                      </div>
                      <div
                        class="rounded-md px-5 py-4 mb-2 bg-theme-6 text-white"
                      >
                        Awesome simple alert
                      </div>
                      <div
                        class="rounded-md px-5 py-4 mb-2 bg-gray-200 text-gray-600"
                      >
                        Awesome simple alert
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Icon Alerts</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#icon-alert"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="icon-alert" class="p-5">
            <div class="preview">
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-1 text-white"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 border text-gray-700 dark:text-gray-300 dark:border-dark-5"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-9 text-white"
              >
                <AlertTriangleIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-12 text-white"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-6 text-white"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-gray-200 text-gray-600"
              >
                <AlertTriangleIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-icon-alert"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-icon-alert" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-1 text-white"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 border text-gray-700 dark:text-gray-300 dark:border-dark-5"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-9 text-white"
                      >
                        <AlertTriangleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-12 text-white"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-6 text-white"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-gray-200 text-gray-600"
                      >
                        <AlertTriangleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Additional Content Alerts
            </h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#additional-content-alert"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="additional-content-alert" class="p-5">
            <div class="preview">
              <div class="rounded-md px-5 py-4 mb-2 bg-theme-1 text-white">
                <div class="flex items-center">
                  <div class="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto"
                  >
                    New
                  </div>
                </div>
                <div class="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
              <div
                class="rounded-md px-5 py-4 mb-2 border text-gray-700 dark:text-gray-300 dark:border-dark-5"
              >
                <div class="flex items-center">
                  <div class="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    class="text-xs bg-gray-600 px-1 rounded-md text-white ml-auto"
                  >
                    New
                  </div>
                </div>
                <div class="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
              <div class="rounded-md px-5 py-4 mb-2 bg-theme-9 text-white">
                <div class="flex items-center">
                  <div class="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto"
                  >
                    New
                  </div>
                </div>
                <div class="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
              <div class="rounded-md px-5 py-4 mb-2 bg-theme-12 text-white">
                <div class="flex items-center">
                  <div class="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto"
                  >
                    New
                  </div>
                </div>
                <div class="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
              <div class="rounded-md px-5 py-4 mb-2 bg-theme-6 text-white">
                <div class="flex items-center">
                  <div class="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto"
                  >
                    New
                  </div>
                </div>
                <div class="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
              <div class="rounded-md px-5 py-4 mb-2 bg-gray-200 text-gray-600">
                <div class="flex items-center">
                  <div class="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    class="text-xs bg-gray-600 px-1 rounded-md text-white ml-auto"
                  >
                    New
                  </div>
                </div>
                <div class="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-additional-content-alert"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight
                  id="copy-additional-content-alert"
                  class="source-preview"
                >
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="rounded-md px-5 py-4 mb-2 bg-theme-1 text-white"
                      >
                        <div class="flex items-center">
                          <div class="font-medium text-lg">
                            Awesome alert with additional info
                          </div>
                          <div
                            class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto"
                          >
                            New
                          </div>
                        </div>
                        <div class="mt-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry\'s standard dummy text ever since the 1500s.
                        </div>
                      </div>
                      <div
                        class="rounded-md px-5 py-4 mb-2 border text-gray-700 dark:text-gray-300 dark:border-dark-5"
                      >
                        <div class="flex items-center">
                          <div class="font-medium text-lg">
                            Awesome alert with additional info
                          </div>
                          <div
                            class="text-xs bg-gray-600 px-1 rounded-md text-white ml-auto"
                          >
                            New
                          </div>
                        </div>
                        <div class="mt-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry\'s standard dummy text ever since the 1500s.
                        </div>
                      </div>
                      <div
                        class="rounded-md px-5 py-4 mb-2 bg-theme-9 text-white"
                      >
                        <div class="flex items-center">
                          <div class="font-medium text-lg">
                            Awesome alert with additional info
                          </div>
                          <div
                            class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto"
                          >
                            New
                          </div>
                        </div>
                        <div class="mt-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry\'s standard dummy text ever since the 1500s.
                        </div>
                      </div>
                      <div
                        class="rounded-md px-5 py-4 mb-2 bg-theme-12 text-white"
                      >
                        <div class="flex items-center">
                          <div class="font-medium text-lg">
                            Awesome alert with additional info
                          </div>
                          <div
                            class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto"
                          >
                            New
                          </div>
                        </div>
                        <div class="mt-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry\'s standard dummy text ever since the 1500s.
                        </div>
                      </div>
                      <div
                        class="rounded-md px-5 py-4 mb-2 bg-theme-6 text-white"
                      >
                        <div class="flex items-center">
                          <div class="font-medium text-lg">
                            Awesome alert with additional info
                          </div>
                          <div
                            class="text-xs bg-white px-1 rounded-md text-gray-800 ml-auto"
                          >
                            New
                          </div>
                        </div>
                        <div class="mt-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry\'s standard dummy text ever since the 1500s.
                        </div>
                      </div>
                      <div
                        class="rounded-md px-5 py-4 mb-2 bg-gray-200 text-gray-600"
                      >
                        <div class="flex items-center">
                          <div class="font-medium text-lg">
                            Awesome alert with additional info
                          </div>
                          <div
                            class="text-xs bg-gray-600 px-1 rounded-md text-white ml-auto"
                          >
                            New
                          </div>
                        </div>
                        <div class="mt-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry\'s standard dummy text ever since the 1500s.
                        </div>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Basic Alert -->
      <!-- BEGIN: Icon & Dismiss Alert -->
      <div class="col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Icon & Dismiss Alerts</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#icon-dismiss-alert"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="icon-dismiss-alert" class="p-5">
            <div class="preview">
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-1 text-white"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                <xIcon class="w-4 h-4 ml-auto" />
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 border text-gray-700 dark:text-gray-300 dark:border-dark-5"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
                <xIcon class="w-4 h-4 ml-auto" />
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-9 text-white"
              >
                <AlertTriangleIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
                <xIcon class="w-4 h-4 ml-auto" />
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-12 text-white"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
                <xIcon class="w-4 h-4 ml-auto" />
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-6 text-white"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
                <xIcon class="w-4 h-4 ml-auto" />
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-gray-200 text-gray-600"
              >
                <AlertTriangleIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
                <xIcon class="w-4 h-4 ml-auto" />
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-icon-dismiss-alert"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-icon-dismiss-alert" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-1 text-white"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <xIcon class="w-4 h-4 ml-auto" />
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 border text-gray-700 dark:text-gray-300 dark:border-dark-5"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <xIcon class="w-4 h-4 ml-auto" />
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-9 text-white"
                      >
                        <AlertTriangleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <xIcon class="w-4 h-4 ml-auto" />
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-12 text-white"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <xIcon class="w-4 h-4 ml-auto" />
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-6 text-white"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <xIcon class="w-4 h-4 ml-auto" />
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-gray-200 text-gray-600"
                      >
                        <AlertTriangleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <xIcon class="w-4 h-4 ml-auto" />
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Outline Alerts</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#outline-alert"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="outline-alert" class="p-5">
            <div class="preview">
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 border border-theme-1 text-theme-1 dark:text-theme-10 dark:border-theme-10"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" />
                alert with icon <xIcon class="w-4 h-4 ml-auto" />
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 border text-gray-700 dark:text-gray-300 dark:border-dark-5"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
                <xIcon class="w-4 h-4 ml-auto" />
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 border border-theme-9 text-theme-9 dark:border-theme-9"
              >
                <AlertTriangleIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
                <xIcon class="w-4 h-4 ml-auto" />
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 border border-theme-12 text-theme-12 dark:border-theme-12"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" />
                alert with icon <xIcon class="w-4 h-4 ml-auto" />
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 border border-theme-6 text-theme-6 dark:border-theme-6"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
                <xIcon class="w-4 h-4 ml-auto" />
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-outline-alert"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-outline-alert" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 border border-theme-1 text-theme-1 dark:text-theme-10 dark:border-theme-10"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <xIcon class="w-4 h-4 ml-auto" />
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 border text-gray-700 dark:text-gray-300 dark:border-dark-5"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <xIcon class="w-4 h-4 ml-auto" />
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 border border-theme-9 text-theme-9 dark:border-theme-9"
                      >
                        <AlertTriangleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <xIcon class="w-4 h-4 ml-auto" />
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 border border-theme-12 text-theme-12 dark:border-theme-12"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <xIcon class="w-4 h-4 ml-auto" />
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 border border-theme-6 text-theme-6 dark:border-theme-6"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                        <xIcon class="w-4 h-4 ml-auto" />
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Soft Color Alerts</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#softcolor-alert"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="softcolor-alert" class="p-5">
            <div class="preview">
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-14 text-theme-10"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 border text-gray-700 dark:text-gray-300 dark:border-dark-5"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-18 text-theme-9"
              >
                <AlertTriangleIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-17 text-theme-11"
              >
                <AlertCircleIcon class="w-6 h-6 mr-2" /> Awesome alert with icon
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-31 text-theme-6"
              >
                <AlertOctagonIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
              </div>
              <div
                class="rounded-md flex items-center px-5 py-4 mb-2 bg-gray-200 text-gray-600"
              >
                <AlertTriangleIcon class="w-6 h-6 mr-2" />
                Awesome alert with icon
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-softcolor-alert"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-softcolor-alert" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-14 text-theme-10"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 border text-gray-700 dark:text-gray-300 dark:border-dark-5"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-18 text-theme-9"
                      >
                        <AlertTriangleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-17 text-theme-11"
                      >
                        <AlertCircleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-theme-31 text-theme-6"
                      >
                        <AlertOctagonIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                      <div
                        class="rounded-md flex items-center px-5 py-4 mb-2 bg-gray-200 text-gray-600"
                      >
                        <AlertTriangleIcon class="w-6 h-6 mr-2" />
                        Awesome alert with icon
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Icon & Dismiss Alert -->
    </div>
  </div>
</template>
