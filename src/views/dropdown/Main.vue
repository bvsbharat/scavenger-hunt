<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Dropdown</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="col-span-12 lg:col-span-6">
      <!-- BEGIN: Basic Dropdown -->
      <div class="intro-y box">
        <div
          class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
        >
          <h2 class="font-medium text-base mr-auto">Basic Dropdown</h2>
          <div
            class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
          >
            <div class="mr-3">Show example code</div>
            <input
              data-target="#basic-dropdown"
              class="show-code input input--switch border"
              type="checkbox"
            />
          </div>
        </div>
        <div id="basic-dropdown" class="p-5">
          <div class="preview">
            <div class="flex justify-center">
              <div class="dropdown">
                <button
                  class="dropdown-toggle button inline-block bg-theme-1 text-white"
                >
                  Show Dropdown
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="source-code hidden">
            <button
              data-target="#copy-basic-dropdown"
              class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
            >
              <FileIcon class="w-4 h-4 mr-2" /> Copy example code
            </button>
            <div class="overflow-y-auto h-64 mt-3">
              <Highlight id="copy-basic-dropdown" class="source-preview">
                <code
                  class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                >
                  <textarea>
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle button inline-block bg-theme-1 text-white"
                      >
                        Show Dropdown
                      </button>
                      <div class="dropdown-box w-40">
                        <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                          <a
                            href=""
                            class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >New Dropdown</a
                          >
                          <a
                            href=""
                            class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >Delete Dropdown</a
                          >
                        </div>
                      </div>
                    </div>
                  </textarea>
                </code>
              </Highlight>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Basic Dropdown -->
      <!-- BEGIN: Header & Footer Dropdown -->
      <div class="intro-y box mt-5">
        <div
          class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
        >
          <h2 class="font-medium text-base mr-auto">
            Header & Footer Dropdown
          </h2>
          <div
            class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
          >
            <div class="mr-3">Show example code</div>
            <input
              data-target="#header-footer-dropdown"
              class="show-code input input--switch border"
              type="checkbox"
            />
          </div>
        </div>
        <div id="header-footer-dropdown" class="p-5">
          <div class="preview">
            <div class="flex justify-center">
              <div class="dropdown">
                <button
                  class="dropdown-toggle button inline-block bg-theme-1 text-white"
                >
                  Show Dropdown
                </button>
                <div class="dropdown-box w-56">
                  <div class="dropdown-box__content box dark:bg-dark-1">
                    <div
                      class="p-4 border-b border-gray-200 dark:border-dark-5 font-medium"
                    >
                      Export Options
                    </div>
                    <div class="p-2">
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <ActivityIcon
                          class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                        />
                        Export to PDF
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <BoxIcon
                          class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                        />
                        Export to Excel
                        <div
                          class="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto"
                        >
                          10
                        </div>
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <LayoutIcon
                          class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                        />
                        Export to CSV
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <SidebarIcon
                          class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                        />
                        Export to Word
                      </a>
                    </div>
                    <div
                      class="px-3 py-3 border-t border-gray-200 dark:border-dark-5 font-medium flex"
                    >
                      <button
                        type="button"
                        class="button button--sm bg-theme-1 text-white"
                      >
                        Settings
                      </button>
                      <button
                        type="button"
                        class="button button--sm bg-gray-200 text-gray-600 dark:bg-dark-5 dark:text-gray-300 ml-auto"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="source-code hidden">
            <button
              data-target="#copy-header-footer-dropdown"
              class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
            >
              <FileIcon class="w-4 h-4 mr-2" /> Copy example code
            </button>
            <div class="overflow-y-auto h-64 mt-3">
              <Highlight
                id="copy-header-footer-dropdown"
                class="source-preview"
              >
                <code
                  class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                >
                  <textarea>
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle button inline-block bg-theme-1 text-white"
                      >
                        Show Dropdown
                      </button>
                      <div
                        class="dropdown-box w-56"
                      >
                        <div class="dropdown-box__content box dark:bg-dark-1">
                          <div
                            class="p-4 border-b border-gray-200 dark:border-dark-5 font-medium"
                          >
                            Export Options
                          </div>
                          <div class="p-2">
                            <a
                              href=""
                              class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >
                              <ActivityIcon
                                class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                              />
                              Export to PDF
                            </a>
                            <a
                              href=""
                              class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >
                              <BoxIcon
                                class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                              />
                              Export to Excel
                              <div
                                class="text-xs text-white px-1 rounded-full bg-theme-6 ml-auto"
                              >
                                10
                              </div>
                            </a>
                            <a
                              href=""
                              class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >
                              <LayoutIcon
                                class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                              />
                              Export to CSV
                            </a>
                            <a
                              href=""
                              class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >
                              <SidebarIcon
                                class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                              />
                              Export to Word
                            </a>
                          </div>
                          <div
                            class="px-3 py-3 border-t border-gray-200 dark:border-dark-5 font-medium flex"
                          >
                            <button
                              type="button"
                              class="button button--sm bg-theme-1 text-white"
                            >
                              Settings
                            </button>
                            <button
                              type="button"
                              class="button button--sm bg-gray-200 text-gray-600 ml-auto"
                            >
                              View Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </textarea>
                </code>
              </Highlight>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Header & Footer Dropdown -->
      <!-- BEGIN: Icon Dropdown -->
      <div class="intro-y box mt-5">
        <div
          class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
        >
          <h2 class="font-medium text-base mr-auto">Icon Dropdown</h2>
          <div
            class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
          >
            <div class="mr-3">Show example code</div>
            <input
              data-target="#icon-dropdown"
              class="show-code input input--switch border"
              type="checkbox"
            />
          </div>
        </div>
        <div id="icon-dropdown" class="p-5">
          <div class="preview">
            <div class="flex justify-center">
              <div class="dropdown">
                <button
                  class="dropdown-toggle button inline-block bg-theme-1 text-white"
                >
                  Show Dropdown
                </button>
                <div class="dropdown-box w-48">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <Edit2Icon class="w-4 h-4 mr-2" /> New Dropdown
                    </a>
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                    >
                      <TrashIcon class="w-4 h-4 mr-2" /> Delete Dropdown
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="source-code hidden">
            <button
              data-target="#copy-icon-dropdown"
              class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
            >
              <FileIcon class="w-4 h-4 mr-2" /> Copy example code
            </button>
            <div class="overflow-y-auto h-64 mt-3">
              <Highlight id="copy-icon-dropdown" class="source-preview">
                <code
                  class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                >
                  <textarea>
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle button inline-block bg-theme-1 text-white"
                      >
                        Show Dropdown
                      </button>
                      <div
                        class="dropdown-box w-48"
                      >
                        <div
                          class="dropdown-box__content box dark:bg-dark-1 p-2"
                        >
                          <a
                            href=""
                            class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                          >
                            <Edit2Icon class="w-4 h-4 mr-2" />
                            New Dropdown
                          </a>
                          <a
                            href=""
                            class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                          >
                            <TrashIcon class="w-4 h-4 mr-2" />
                            Delete Dropdown
                          </a>
                        </div>
                      </div>
                    </div>
                  </textarea>
                </code>
              </Highlight>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Icon Dropdown -->
      <!-- BEGIN: Programmatically Show/Hide Dropdown -->
      <div class="intro-y box mt-5">
        <div
          class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
        >
          <h2 class="font-medium text-base mr-auto">
            Programmatically Show/Hide Dropdown
          </h2>
          <div
            class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
          >
            <div class="mr-3">Show example code</div>
            <input
              data-target="#programmatically-show-hide-dropdown"
              class="show-code input input--switch border"
              type="checkbox"
            />
          </div>
        </div>
        <div id="programmatically-show-hide-dropdown" class="p-5">
          <div class="preview">
            <div class="text-center">
              <button
                class="dropdown-toggle button w-40 mr-1 mb-2 inline-block bg-theme-1 text-white"
                @click="show"
              >
                Show
              </button>
              <button
                class="dropdown-toggle button w-40 mr-1 mb-2 inline-block bg-theme-1 text-white"
                @click="hide"
              >
                Hide
              </button>
              <button
                class="dropdown-toggle button w-40 mr-1 mb-2 inline-block bg-theme-1 text-white"
                @click="toggle"
              >
                Toggle
              </button>
              <div id="example-dropdown" class="dropdown inline-block">
                <button
                  class="dropdown-toggle button w-40 mr-1 mb-2 inline-block bg-theme-1 text-white"
                >
                  Example Dropdown
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="source-code hidden">
            <button
              data-target="#copy-programmatically-show-hide-dropdown"
              class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
            >
              <FileIcon class="w-4 h-4 mr-2" /> Copy example code
            </button>
            <div class="overflow-y-auto h-64 mt-3">
              <Highlight
                id="copy-programmatically-show-hide-dropdown"
                class="source-preview"
              >
                <code
                  class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                >
                  <textarea>
                    // Show dropdown
                    cash("#example-dropdown").dropdown("show")

                    // Hide dropdown
                    cash("#example-dropdown").dropdown("hide")

                    // Toggle dropdown
                    cash("#example-dropdown").dropdown("toggle")
                  </textarea>
                </code>
              </Highlight>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Programmatically Show/Hide Dropdown -->
      <!-- BEGIN: Dropdown with close button -->
      <div class="intro-y box mt-5">
        <div
          class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
        >
          <h2 class="font-medium text-base mr-auto">
            Dropdown with close button
          </h2>
          <div
            class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
          >
            <div class="mr-3">Show example code</div>
            <input
              data-target="#button-dropdown"
              class="show-code input input--switch border"
              type="checkbox"
            />
          </div>
        </div>
        <div id="button-dropdown" class="p-5">
          <div class="preview">
            <div class="text-center">
              <div class="dropdown inline-block" data-placement="bottom-start">
                <button
                  class="dropdown-toggle button flex items-center inline-block bg-theme-1 text-white"
                >
                  Filter Dropdown
                  <ChevronDownIcon class="w-4 h-4 ml-2" />
                </button>
                <div class="dropdown-box">
                  <div class="dropdown-box__content box p-5">
                    <div>
                      <div class="text-xs">From</div>
                      <input
                        type="text"
                        class="input w-full border mt-2 flex-1"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div class="mt-3">
                      <div class="text-xs">To</div>
                      <input
                        type="text"
                        class="input w-full border mt-2 flex-1"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div class="flex items-center mt-3">
                      <button
                        data-dismiss="dropdown"
                        class="button w-32 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300 ml-auto"
                      >
                        Close
                      </button>
                      <button
                        class="button w-32 justify-center block bg-theme-1 text-white ml-2"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="source-code hidden">
            <button
              data-target="#copy-button-dropdown"
              class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
            >
              <FileIcon class="w-4 h-4 mr-2" /> Copy example code
            </button>
            <div class="overflow-y-auto h-64 mt-3">
              <Highlight id="copy-button-dropdown" class="source-preview">
                <code
                  class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                >
                  <textarea>
                    <div
                      class="dropdown inline-block"
                      data-placement="bottom-start"
                    >
                      <button
                        class="dropdown-toggle button flex items-center inline-block bg-theme-1 text-white"
                      >
                        Filter Dropdown
                        <ChevronDownIcon class="w-4 h-4 ml-2" />
                      </button>
                      <div class="dropdown-box">
                        <div class="dropdown-box__content box p-5">
                          <div>
                            <div class="text-xs">From</div>
                            <input
                              type="text"
                              class="input w-full border mt-2 flex-1"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div class="mt-3">
                            <div class="text-xs">To</div>
                            <input
                              type="text"
                              class="input w-full border mt-2 flex-1"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div class="flex items-center mt-3">
                            <button
                              data-dismiss="dropdown"
                              class="button w-32 justify-center block bg-gray-200 text-gray-600 dark:bg-dark-1 dark:text-gray-300 ml-auto"
                            >
                              Close
                            </button>
                            <button
                              class="button w-32 justify-center block bg-theme-1 text-white ml-2"
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </textarea>
                </code>
              </Highlight>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Dropdown with close button -->
    </div>
    <div class="col-span-12 lg:col-span-6">
      <!-- BEGIN: Scrolled Dropdown -->
      <div class="intro-y box">
        <div
          class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
        >
          <h2 class="font-medium text-base mr-auto">Scrolled Dropdown</h2>
          <div
            class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
          >
            <div class="mr-3">Show example code</div>
            <input
              data-target="#scrolled-dropdown"
              class="show-code input input--switch border"
              type="checkbox"
            />
          </div>
        </div>
        <div id="scrolled-dropdown" class="p-5">
          <div class="preview">
            <div class="flex justify-center">
              <div class="dropdown">
                <button
                  class="dropdown-toggle button inline-block bg-theme-1 text-white"
                >
                  Show Dropdown
                </button>
                <div class="dropdown-box w-40">
                  <div
                    class="dropdown-box__content box dark:bg-dark-1 p-2 overflow-y-auto h-32"
                  >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >January</a
                    >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >February</a
                    >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >March</a
                    >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >June</a
                    >
                    <a
                      href=""
                      class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >July</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="source-code hidden">
            <button
              data-target="#copy-scrolled-dropdown"
              class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
            >
              <FileIcon class="w-4 h-4 mr-2" /> Copy example code
            </button>
            <div class="overflow-y-auto h-64 mt-3">
              <Highlight id="copy-scrolled-dropdown" class="source-preview">
                <code
                  class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                >
                  <textarea>
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle button inline-block bg-theme-1 text-white"
                      >
                        Show Dropdown
                      </button>
                      <div
                        class="dropdown-box w-40"
                      >
                        <div
                          class="dropdown-box__content box dark:bg-dark-1 p-2 overflow-y-auto h-32"
                        >
                          <a
                            href=""
                            class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >January</a
                          >
                          <a
                            href=""
                            class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >February</a
                          >
                          <a
                            href=""
                            class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >March</a
                          >
                          <a
                            href=""
                            class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >June</a
                          >
                          <a
                            href=""
                            class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >July</a
                          >
                        </div>
                      </div>
                    </div>
                  </textarea>
                </code>
              </Highlight>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Scrolled Dropdown -->
      <!-- BEGIN: Header & Icon Dropdown -->
      <div class="intro-y box mt-5">
        <div
          class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
        >
          <h2 class="font-medium text-base mr-auto">Header & Icon Dropdown</h2>
          <div
            class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
          >
            <div class="mr-3">Show example code</div>
            <input
              data-target="#header-icon-dropdown"
              class="show-code input input--switch border"
              type="checkbox"
            />
          </div>
        </div>
        <div id="header-icon-dropdown" class="p-5">
          <div class="preview">
            <div class="flex justify-center">
              <div class="dropdown">
                <button
                  class="dropdown-toggle button inline-block bg-theme-1 text-white"
                >
                  Show Dropdown
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1">
                    <div
                      class="px-4 py-2 border-b border-gray-200 dark:border-dark-5 font-medium"
                    >
                      Export Tools
                    </div>
                    <div class="p-2">
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <PrinterIcon
                          class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                        />
                        Print
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <ExternalLinkIcon
                          class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                        />
                        Excel
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <FileTextIcon
                          class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                        />
                        CSV
                      </a>
                      <a
                        href=""
                        class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        <ArchiveIcon
                          class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                        />
                        PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="source-code hidden">
            <button
              data-target="#copy-header-icon-dropdown"
              class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
            >
              <FileIcon class="w-4 h-4 mr-2" /> Copy example code
            </button>
            <div class="overflow-y-auto h-64 mt-3">
              <Highlight id="copy-header-icon-dropdown" class="source-preview">
                <code
                  class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                >
                  <textarea>
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle button inline-block bg-theme-1 text-white"
                      >
                        Show Dropdown
                      </button>
                      <div
                        class="dropdown-box w-40"
                      >
                        <div class="dropdown-box__content box dark:bg-dark-1">
                          <div
                            class="px-4 py-2 border-b border-gray-200 dark:border-dark-5 font-medium"
                          >
                            Export Tools
                          </div>
                          <div class="p-2">
                            <a
                              href=""
                              class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >
                              <PrinterIcon
                                class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                              />
                              Print
                            </a>
                            <a
                              href=""
                              class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >
                              <ExternalLinkIcon
                                class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                              />
                              Excel
                            </a>
                            <a
                              href=""
                              class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >
                              <FileTextIcon
                                class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                              />
                              CSV
                            </a>
                            <a
                              href=""
                              class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                            >
                              <ArchiveIcon
                                class="w-4 h-4 text-gray-700 dark:text-gray-300 mr-2"
                              />
                              PDF
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </textarea>
                </code>
              </Highlight>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Header & Icon Dropdown -->
      <!-- BEGIN: Dropdown Placement -->
      <div class="intro-y box mt-5">
        <div
          class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
        >
          <h2 class="font-medium text-base mr-auto">Dropdown Placement</h2>
          <div
            class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
          >
            <div class="mr-3">Show example code</div>
            <input
              data-target="#dropdown-placement"
              class="show-code input input--switch border"
              type="checkbox"
            />
          </div>
        </div>
        <div id="dropdown-placement" class="p-5">
          <div class="preview">
            <div class="text-center">
              <div class="dropdown inline-block" data-placement="top-start">
                <button
                  class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                >
                  Top Start
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
              <div class="dropdown inline-block" data-placement="top">
                <button
                  class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                >
                  Top
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
              <div class="dropdown inline-block" data-placement="top-end">
                <button
                  class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                >
                  Top End
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
              <div class="dropdown inline-block" data-placement="right-start">
                <button
                  class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                >
                  Right Start
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
              <div class="dropdown inline-block" data-placement="right">
                <button
                  class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                >
                  Right
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
              <div class="dropdown inline-block" data-placement="right-end">
                <button
                  class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                >
                  Right End
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
              <div class="dropdown inline-block" data-placement="bottom-end">
                <button
                  class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                >
                  Bottom End
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
              <div class="dropdown inline-block" data-placement="bottom">
                <button
                  class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                >
                  Bottom
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
              <div class="dropdown inline-block" data-placement="bottom-start">
                <button
                  class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                >
                  Bottom Start
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
              <div class="dropdown inline-block" data-placement="left-start">
                <button
                  class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                >
                  Left Start
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
              <div class="dropdown inline-block" data-placement="left">
                <button
                  class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                >
                  Left
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
              <div class="dropdown inline-block" data-placement="left-end">
                <button
                  class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                >
                  Left End
                </button>
                <div class="dropdown-box w-40">
                  <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >New Dropdown</a
                    >
                    <a
                      href=""
                      class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >Delete Dropdown</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="source-code hidden">
            <button
              data-target="#copy-dropdown-placement"
              class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
            >
              <FileIcon class="w-4 h-4 mr-2" /> Copy example code
            </button>
            <div class="overflow-y-auto h-64 mt-3">
              <Highlight id="copy-dropdown-placement" class="source-preview">
                <code
                  class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                >
                  <textarea>
                    <div class="text-center">
                      <div class="dropdown inline-block" data-placement="top-start">
                        <button
                          class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                        >
                          Top Start
                        </button>
                        <div class="dropdown-box w-40">
                          <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >New Dropdown</a
                            >
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >Delete Dropdown</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="dropdown inline-block" data-placement="top">
                        <button
                          class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                        >
                          Top
                        </button>
                        <div class="dropdown-box w-40">
                          <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >New Dropdown</a
                            >
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >Delete Dropdown</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="dropdown inline-block" data-placement="top-end">
                        <button
                          class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                        >
                          Top End
                        </button>
                        <div class="dropdown-box w-40">
                          <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >New Dropdown</a
                            >
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >Delete Dropdown</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="dropdown inline-block" data-placement="right-start">
                        <button
                          class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                        >
                          Right Start
                        </button>
                        <div class="dropdown-box w-40">
                          <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >New Dropdown</a
                            >
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >Delete Dropdown</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="dropdown inline-block" data-placement="right">
                        <button
                          class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                        >
                          Right
                        </button>
                        <div class="dropdown-box w-40">
                          <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >New Dropdown</a
                            >
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >Delete Dropdown</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="dropdown inline-block" data-placement="right-end">
                        <button
                          class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                        >
                          Right End
                        </button>
                        <div class="dropdown-box w-40">
                          <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >New Dropdown</a
                            >
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >Delete Dropdown</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="dropdown inline-block" data-placement="bottom-end">
                        <button
                          class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                        >
                          Bottom End
                        </button>
                        <div class="dropdown-box w-40">
                          <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >New Dropdown</a
                            >
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >Delete Dropdown</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="dropdown inline-block" data-placement="bottom">
                        <button
                          class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                        >
                          Bottom
                        </button>
                        <div class="dropdown-box w-40">
                          <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >New Dropdown</a
                            >
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >Delete Dropdown</a
                            >
                          </div>
                        </div>
                      </div>
                      <div
                        class="dropdown inline-block"
                        data-placement="bottom-start"
                      >
                        <button
                          class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                        >
                          Bottom Start
                        </button>
                        <div class="dropdown-box w-40">
                          <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >New Dropdown</a
                            >
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >Delete Dropdown</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="dropdown inline-block" data-placement="left-start">
                        <button
                          class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                        >
                          Left Start
                        </button>
                        <div class="dropdown-box w-40">
                          <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >New Dropdown</a
                            >
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >Delete Dropdown</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="dropdown inline-block" data-placement="left">
                        <button
                          class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                        >
                          Left
                        </button>
                        <div class="dropdown-box w-40">
                          <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >New Dropdown</a
                            >
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >Delete Dropdown</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="dropdown inline-block" data-placement="left-end">
                        <button
                          class="dropdown-toggle button w-32 mr-1 mb-2 inline-block bg-theme-1 text-white"
                        >
                          Left End
                        </button>
                        <div class="dropdown-box w-40">
                          <div class="dropdown-box__content box dark:bg-dark-1 p-2">
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >New Dropdown</a
                            >
                            <a
                              href=""
                              class="block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                              >Delete Dropdown</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </textarea>
                </code>
              </Highlight>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Dropdown Placement -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const show = () => {
      cash("#example-dropdown").dropdown("show");
    };
    const hide = () => {
      cash("#example-dropdown").dropdown("hide");
    };
    const toggle = () => {
      cash("#example-dropdown").dropdown("toggle");
    };

    return {
      show,
      hide,
      toggle,
    };
  },
});
</script>
