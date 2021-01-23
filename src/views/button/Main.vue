<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Buttons</h2>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 lg:col-span-6">
        <!-- BEGIN: Basic Button -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Basic Buttons</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#basic-button"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="basic-button" class="p-5">
            <div class="preview">
              <button class="button w-24 mr-1 mb-2 bg-theme-1 text-white">
                Primary
              </button>
              <button
                class="button w-24 mr-1 mb-2 border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
              >
                Secondary
              </button>
              <button class="button w-24 mr-1 mb-2 bg-theme-9 text-white">
                Success
              </button>
              <button class="button w-24 mr-1 mb-2 bg-theme-12 text-white">
                Warning
              </button>
              <button class="button w-24 mr-1 mb-2 bg-theme-6 text-white">
                Danger
              </button>
              <button class="button w-24 mr-1 mb-2 bg-gray-200 text-gray-600">
                Dark
              </button>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-basic-button"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-basic-button" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <button class="button w-24 mr-1 mb-2 bg-theme-1 text-white">
                        Primary
                      </button>
                      <button
                        class="button w-24 mr-1 mb-2 border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                      >
                        Secondary
                      </button>
                      <button class="button w-24 mr-1 mb-2 bg-theme-9 text-white">
                        Success
                      </button>
                      <button
                        class="button w-24 mr-1 mb-2 bg-theme-12 text-white"
                      >
                        Warning
                      </button>
                      <button class="button w-24 mr-1 mb-2 bg-theme-6 text-white">
                        Danger
                      </button>
                      <button
                        class="button w-24 mr-1 mb-2 bg-gray-200 text-gray-600"
                      >
                        Dark
                      </button>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Basic Button -->
        <!-- BEGIN: Button Size -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Button Sizes</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#button-size"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="button-size" class="p-5">
            <div class="preview">
              <div>
                <button
                  class="button button--sm w-24 mr-1 mb-2 bg-theme-1 text-white"
                >
                  Small
                </button>
                <button class="button w-24 mr-1 mb-2 bg-theme-1 text-white">
                  Medium
                </button>
                <button
                  class="button button--lg w-24 mr-1 mb-2 bg-theme-1 text-white"
                >
                  Large
                </button>
              </div>
              <div class="mt-5">
                <button
                  class="button button--sm w-24 mr-1 mb-2 border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                >
                  Small
                </button>
                <button
                  class="button w-24 mr-1 mb-2 border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                >
                  Medium
                </button>
                <button
                  class="button button--lg w-24 mr-1 mb-2 border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                >
                  Large
                </button>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-button-size"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-button-size" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div>
                        <button
                          class="button button--sm w-24 mr-1 mb-2 bg-theme-1 text-white"
                        >
                          Small
                        </button>
                        <button
                          class="button w-24 mr-1 mb-2 bg-theme-1 text-white"
                        >
                          Medium
                        </button>
                        <button
                          class="button button--lg w-24 mr-1 mb-2 bg-theme-1 text-white"
                        >
                          Large
                        </button>
                      </div>
                      <div class="mt-5">
                        <button
                          class="button button--sm w-24 mr-1 mb-2 border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                        >
                          Small
                        </button>
                        <button
                          class="button w-24 mr-1 mb-2 border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                        >
                          Medium
                        </button>
                        <button
                          class="button button--lg w-24 mr-1 mb-2 border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                        >
                          Large
                        </button>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Button Size -->
        <!-- BEGIN: Button Link -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Working with Links</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#link-button"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="link-button" class="p-5">
            <div class="preview">
              <a
                href=""
                class="button w-24 inline-block mr-1 mb-2 bg-theme-1 text-white"
                >Link</a
              >
              <a
                href=""
                class="button w-24 inline-block mr-1 mb-2 border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                >Button</a
              >
              <a
                href=""
                class="button w-24 inline-block mr-1 mb-2 bg-theme-9 text-white"
                >Input</a
              >
              <a
                href=""
                class="button w-24 inline-block mr-1 mb-2 bg-theme-12 text-white"
                >Submit</a
              >
              <a
                href=""
                class="button w-24 inline-block mr-1 mb-2 bg-theme-6 text-white"
                >Reset</a
              >
              <a
                href=""
                class="button w-24 inline-block mr-1 mb-2 bg-gray-200 text-gray-600"
                >Metal</a
              >
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-link-button"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-link-button" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <a
                        href=""
                        class="button w-24 inline-block mr-1 mb-2 bg-theme-1 text-white"
                        >Link</a
                      >
                      <a
                        href=""
                        class="button w-24 inline-block mr-1 mb-2 border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                        >Button</a
                      >
                      <a
                        href=""
                        class="button w-24 inline-block mr-1 mb-2 bg-theme-9 text-white"
                        >Input</a
                      >
                      <a
                        href=""
                        class="button w-24 inline-block mr-1 mb-2 bg-theme-12 text-white"
                        >Submit</a
                      >
                      <a
                        href=""
                        class="button w-24 inline-block mr-1 mb-2 bg-theme-6 text-white"
                        >Reset</a
                      >
                      <a
                        href=""
                        class="button w-24 inline-block mr-1 mb-2 bg-gray-200 text-gray-600"
                        >Metal</a
                      >
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Button Link -->
        <!-- BEGIN: Elevated Button -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Elevated Buttons</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#elevated-button"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="elevated-button" class="p-5">
            <div class="preview">
              <div>
                <button
                  class="button w-24 shadow-md mr-1 mb-2 bg-theme-1 text-white"
                >
                  Primary
                </button>
                <button
                  class="button w-24 shadow-md mr-1 mb-2 text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                >
                  Secondary
                </button>
                <button
                  class="button w-24 shadow-md mr-1 mb-2 bg-theme-9 text-white"
                >
                  Success
                </button>
                <button
                  class="button w-24 shadow-md mr-1 mb-2 bg-theme-12 text-white"
                >
                  Warning
                </button>
                <button
                  class="button w-24 shadow-md mr-1 mb-2 bg-theme-6 text-white"
                >
                  Danger
                </button>
                <button
                  class="button w-24 shadow-md mr-1 mb-2 bg-gray-200 text-gray-600"
                >
                  Dark
                </button>
              </div>
              <div class="mt-5">
                <button
                  class="button w-24 rounded-full shadow-md mr-1 mb-2 bg-theme-1 text-white"
                >
                  Primary
                </button>
                <button
                  class="button w-24 rounded-full shadow-md mr-1 mb-2 text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                >
                  Secondary
                </button>
                <button
                  class="button w-24 rounded-full shadow-md mr-1 mb-2 bg-theme-9 text-white"
                >
                  Success
                </button>
                <button
                  class="button w-24 rounded-full shadow-md mr-1 mb-2 bg-theme-12 text-white"
                >
                  Warning
                </button>
                <button
                  class="button w-24 rounded-full shadow-md mr-1 mb-2 bg-theme-6 text-white"
                >
                  Danger
                </button>
                <button
                  class="button w-24 rounded-full shadow-md mr-1 mb-2 bg-gray-200 text-gray-600"
                >
                  Dark
                </button>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-elevated-button"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-elevated-button" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div>
                        <button
                          class="button w-24 shadow-md mr-1 mb-2 bg-theme-1 text-white"
                        >
                          Primary
                        </button>
                        <button
                          class="button w-24 shadow-md mr-1 mb-2 text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                        >
                          Secondary
                        </button>
                        <button
                          class="button w-24 shadow-md mr-1 mb-2 bg-theme-9 text-white"
                        >
                          Success
                        </button>
                        <button
                          class="button w-24 shadow-md mr-1 mb-2 bg-theme-12 text-white"
                        >
                          Warning
                        </button>
                        <button
                          class="button w-24 shadow-md mr-1 mb-2 bg-theme-6 text-white"
                        >
                          Danger
                        </button>
                        <button
                          class="button w-24 shadow-md mr-1 mb-2 bg-gray-200 text-gray-600"
                        >
                          Dark
                        </button>
                      </div>
                      <div class="mt-5">
                        <button
                          class="button w-24 rounded-full shadow-md mr-1 mb-2 bg-theme-1 text-white"
                        >
                          Primary
                        </button>
                        <button
                          class="button w-24 rounded-full shadow-md mr-1 mb-2 text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                        >
                          Secondary
                        </button>
                        <button
                          class="button w-24 rounded-full shadow-md mr-1 mb-2 bg-theme-9 text-white"
                        >
                          Success
                        </button>
                        <button
                          class="button w-24 rounded-full shadow-md mr-1 mb-2 bg-theme-12 text-white"
                        >
                          Warning
                        </button>
                        <button
                          class="button w-24 rounded-full shadow-md mr-1 mb-2 bg-theme-6 text-white"
                        >
                          Danger
                        </button>
                        <button
                          class="button w-24 rounded-full shadow-md mr-1 mb-2 bg-gray-200 text-gray-600"
                        >
                          Dark
                        </button>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Elevated Button -->
        <!-- BEGIN: Social Media Button -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Social Media Buttons</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#social-media-button"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="social-media-button" class="p-5">
            <div class="preview">
              <div class="flex flex-wrap">
                <button
                  class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-32 text-white"
                >
                  <FacebookIcon class="w-4 h-4 mr-2" /> Facebook
                </button>
                <button
                  class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-33 text-white"
                >
                  <TwitterIcon class="w-4 h-4 mr-2" /> Twitter
                </button>
                <button
                  class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-34 text-white"
                >
                  <InstagramIcon class="w-4 h-4 mr-2" /> Instagram
                </button>
                <button
                  class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-35 text-white"
                >
                  <LinkedinIcon class="w-4 h-4 mr-2" /> Linkedin
                </button>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-social-media-button"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-social-media-button" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <button
                        class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-32 text-white"
                      >
                        <FacebookIcon class="w-4 h-4 mr-2" />
                        Facebook
                      </button>
                      <button
                        class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-33 text-white"
                      >
                        <TwitterIcon class="w-4 h-4 mr-2" />
                        Twitter
                      </button>
                      <button
                        class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-34 text-white"
                      >
                        <InstagramIcon class="w-4 h-4 mr-2" />
                        Instagram
                      </button>
                      <button
                        class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-35 text-white"
                      >
                        <LinkedinIcon class="w-4 h-4 mr-2" />
                        Linkedin
                      </button>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Social Media Button -->
      </div>
      <div class="col-span-12 lg:col-span-6">
        <!-- BEGIN: Outline Button -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Outline Buttons</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#outline-button"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="outline-button" class="p-5">
            <div class="preview">
              <button
                class="button w-24 inline-block mr-1 mb-2 border border-theme-1 text-theme-1 dark:border-theme-10 dark:text-theme-10"
              >
                Link
              </button>
              <button
                class="button w-24 inline-block mr-1 mb-2 border text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                Button
              </button>
              <button
                class="button w-24 inline-block mr-1 mb-2 border border-theme-9 text-theme-9 dark:border-theme-9"
              >
                Input
              </button>
              <button
                class="button w-24 inline-block mr-1 mb-2 border border-theme-12 text-theme-12 dark:border-theme-12"
              >
                Submit
              </button>
              <button
                class="button w-24 inline-block mr-1 mb-2 border border-theme-6 text-theme-6 dark:border-theme-6"
              >
                Reset
              </button>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-outline-button"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-outline-button" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <button
                        class="button w-24 inline-block mr-1 mb-2 border border-theme-1 text-theme-1 dark:border-theme-10 dark:text-theme-10"
                      >
                        Link
                      </button>
                      <button
                        class="button w-24 inline-block mr-1 mb-2 border text-gray-700 dark:border-dark-5 dark:text-gray-300"
                      >
                        Button
                      </button>
                      <button
                        class="button w-24 inline-block mr-1 mb-2 border border-theme-9 text-theme-9 dark:border-theme-9"
                      >
                        Input
                      </button>
                      <button
                        class="button w-24 inline-block mr-1 mb-2 border border-theme-12 text-theme-12 dark:border-theme-12"
                      >
                        Submit
                      </button>
                      <button
                        class="button w-24 inline-block mr-1 mb-2 border border-theme-6 text-theme-6 dark:border-theme-6"
                      >
                        Reset
                      </button>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Outline Button -->
        <!-- BEGIN: Loading Button -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Loading State Buttons</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#loading-button"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="loading-button" class="p-5">
            <div class="preview">
              <button
                class="button w-24 inline-block mr-1 mb-2 bg-theme-1 text-white inline-flex items-center"
              >
                Saving
                <LoadingIcon
                  icon="oval"
                  color="white"
                  class="w-4 h-4 ml-auto"
                />
              </button>
              <button
                class="button w-24 inline-block mr-1 mb-2 bg-theme-9 text-white inline-flex items-center"
              >
                Adding
                <LoadingIcon
                  icon="spinning-circles"
                  color="white"
                  class="w-4 h-4 ml-auto"
                />
              </button>
              <button
                class="button w-24 inline-block mr-1 mb-2 bg-theme-12 text-white inline-flex items-center"
              >
                Loading
                <LoadingIcon
                  icon="three-dots"
                  color="white"
                  class="w-4 h-4 ml-auto"
                />
              </button>
              <button
                class="button w-24 inline-block mr-1 mb-2 bg-theme-6 text-white inline-flex items-center"
              >
                Deleting
                <LoadingIcon
                  icon="puff"
                  color="white"
                  class="w-4 h-4 ml-auto"
                />
              </button>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-loading-button"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-loading-button" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <button
                        class="button w-24 inline-block mr-1 mb-2 bg-theme-1 text-white inline-flex items-center"
                      >
                        Saving
                        <LoadingIcon
                          icon="oval"
                          color="white"
                          class="w-4 h-4 ml-auto"
                        />
                      </button>
                      <button
                        class="button w-24 inline-block mr-1 mb-2 bg-theme-9 text-white inline-flex items-center"
                      >
                        Adding
                        <LoadingIcon
                          icon="spinning-circles"
                          color="white"
                          class="w-4 h-4 ml-auto"
                        />
                      </button>
                      <button
                        class="button w-24 inline-block mr-1 mb-2 bg-theme-12 text-white inline-flex items-center"
                      >
                        Loading
                        <LoadingIcon
                          icon="three-dots"
                          color="white"
                          class="w-4 h-4 ml-auto"
                        />
                      </button>
                      <button
                        class="button w-24 inline-block mr-1 mb-2 bg-theme-6 text-white inline-flex items-center"
                      >
                        Deleting
                        <LoadingIcon
                          icon="puff"
                          color="white"
                          class="w-4 h-4 ml-auto"
                        />
                      </button>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Loading Button -->
        <!-- BEGIN: Rounded Button -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Rounded Buttons</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#rounded-button"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="rounded-button" class="p-5">
            <div class="preview">
              <button
                class="button w-24 rounded-full mr-1 mb-2 bg-theme-1 text-white"
              >
                Primary
              </button>
              <button
                class="button w-24 rounded-full mr-1 mb-2 border text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                Secondary
              </button>
              <button
                class="button w-24 rounded-full mr-1 mb-2 bg-theme-9 text-white"
              >
                Success
              </button>
              <button
                class="button w-24 rounded-full mr-1 mb-2 bg-theme-12 text-white"
              >
                Warning
              </button>
              <button
                class="button w-24 rounded-full mr-1 mb-2 bg-theme-6 text-white"
              >
                Danger
              </button>
              <button
                class="button w-24 rounded-full mr-1 mb-2 bg-gray-200 text-gray-600"
              >
                Dark
              </button>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-rounded-button"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-rounded-button" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <button
                        class="button w-24 rounded-full mr-1 mb-2 bg-theme-1 text-white"
                      >
                        Primary
                      </button>
                      <button
                        class="button w-24 rounded-full mr-1 mb-2 border text-gray-700 dark:border-dark-5 dark:text-gray-300"
                      >
                        Secondary
                      </button>
                      <button
                        class="button w-24 rounded-full mr-1 mb-2 bg-theme-9 text-white"
                      >
                        Success
                      </button>
                      <button
                        class="button w-24 rounded-full mr-1 mb-2 bg-theme-12 text-white"
                      >
                        Warning
                      </button>
                      <button
                        class="button w-24 rounded-full mr-1 mb-2 bg-theme-6 text-white"
                      >
                        Danger
                      </button>
                      <button
                        class="button w-24 rounded-full mr-1 mb-2 bg-gray-200 text-gray-600"
                      >
                        Dark
                      </button>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Rounded Button -->
        <!-- BEGIN: Soft Color Button -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Soft Color Buttons</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#softcolor-button"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="softcolor-button" class="p-5">
            <div class="preview">
              <button
                class="button w-24 rounded-full mr-1 mb-2 bg-theme-14 text-theme-10"
              >
                Primary
              </button>
              <button
                class="button w-24 rounded-full mr-1 mb-2 border text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                Secondary
              </button>
              <button
                class="button w-24 rounded-full mr-1 mb-2 bg-theme-18 text-theme-9"
              >
                Success
              </button>
              <button
                class="button w-24 rounded-full mr-1 mb-2 bg-theme-17 text-theme-11"
              >
                Warning
              </button>
              <button
                class="button w-24 rounded-full mr-1 mb-2 bg-theme-31 text-theme-6"
              >
                Danger
              </button>
              <button
                class="button w-24 rounded-full mr-1 mb-2 bg-gray-200 text-gray-600"
              >
                Dark
              </button>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-softcolor-button"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-softcolor-button" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <button
                        class="button w-24 rounded-full mr-1 mb-2 bg-theme-14 text-theme-10"
                      >
                        Primary
                      </button>
                      <button
                        class="button w-24 rounded-full mr-1 mb-2 border text-gray-700 dark:border-dark-5 dark:text-gray-300"
                      >
                        Secondary
                      </button>
                      <button
                        class="button w-24 rounded-full mr-1 mb-2 bg-theme-18 text-theme-9"
                      >
                        Success
                      </button>
                      <button
                        class="button w-24 rounded-full mr-1 mb-2 bg-theme-17 text-theme-11"
                      >
                        Warning
                      </button>
                      <button
                        class="button w-24 rounded-full mr-1 mb-2 bg-theme-31 text-theme-6"
                      >
                        Danger
                      </button>
                      <button
                        class="button w-24 rounded-full mr-1 mb-2 bg-gray-200 text-gray-600"
                      >
                        Dark
                      </button>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Soft Color Button -->
        <!-- BEGIN: Icon Button -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Icon Buttons</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#icon-button"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="icon-button" class="p-5">
            <div class="preview">
              <div class="flex flex-wrap">
                <button
                  class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-1 text-white"
                >
                  <ActivityIcon class="w-4 h-4 mr-2" /> Activity
                </button>
                <button
                  class="button w-32 mr-2 mb-2 flex items-center justify-center border text-gray-700 dark:border-dark-5 dark:text-gray-300"
                >
                  <HardDriveIcon class="w-4 h-4 mr-2" /> Hard Drive
                </button>
                <button
                  class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-9 text-white"
                >
                  <CalendarIcon class="w-4 h-4 mr-2" /> Calendar
                </button>
                <button
                  class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-12 text-white"
                >
                  <Share2Icon class="w-4 h-4 mr-2" /> Share
                </button>
                <button
                  class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-6 text-white"
                >
                  <TrashIcon class="w-4 h-4 mr-2" /> Trash
                </button>
                <button
                  class="button w-32 mr-2 mb-2 flex items-center justify-center bg-gray-200 text-gray-600"
                >
                  <ImageIcon class="w-4 h-4 mr-2" /> Image
                </button>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-icon-button"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-icon-button" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <button
                        class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-1 text-white"
                      >
                        <ActivityIcon class="w-4 h-4 mr-2" />
                        Activity
                      </button>
                      <button
                        class="button w-32 mr-2 mb-2 flex items-center justify-center border text-gray-700 dark:border-dark-5 dark:text-gray-300"
                      >
                        <HardDriveIcon class="w-4 h-4 mr-2" />
                        Hard Drive
                      </button>
                      <button
                        class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-9 text-white"
                      >
                        <CalendarIcon class="w-4 h-4 mr-2" />
                        Calendar
                      </button>
                      <button
                        class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-12 text-white"
                      >
                        <Share2Icon class="w-4 h-4 mr-2" /> Share
                      </button>
                      <button
                        class="button w-32 mr-2 mb-2 flex items-center justify-center bg-theme-6 text-white"
                      >
                        <TrashIcon class="w-4 h-4 mr-2" /> Trash
                      </button>
                      <button
                        class="button w-32 mr-2 mb-2 flex items-center justify-center bg-gray-200 text-gray-600"
                      >
                        <ImageIcon class="w-4 h-4 mr-2" /> Image
                      </button>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Icon Button -->
        <!-- BEGIN: Icon Only Button -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Icon Only Buttons</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#icon-only-button"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="icon-only-button" class="p-5">
            <div class="preview">
              <button class="button px-2 mr-1 mb-2 bg-theme-1 text-white">
                <span class="w-5 h-5 flex items-center justify-center">
                  <ActivityIcon class="w-4 h-4" />
                </span>
              </button>
              <button
                class="button px-2 mr-1 mb-2 border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
              >
                <span class="w-5 h-5 flex items-center justify-center">
                  <HardDriveIcon class="w-4 h-4" />
                </span>
              </button>
              <button class="button px-2 mr-1 mb-2 bg-theme-9 text-white">
                <span class="w-5 h-5 flex items-center justify-center">
                  <CalendarIcon class="w-4 h-4" />
                </span>
              </button>
              <button class="button px-2 mr-1 mb-2 bg-theme-12 text-white">
                <span class="w-5 h-5 flex items-center justify-center">
                  <Share2Icon class="w-4 h-4" />
                </span>
              </button>
              <button class="button px-2 mr-1 mb-2 bg-theme-6 text-white">
                <span class="w-5 h-5 flex items-center justify-center">
                  <TrashIcon class="w-4 h-4" />
                </span>
              </button>
              <button class="button px-2 mr-1 mb-2 bg-gray-200 text-gray-600">
                <span class="w-5 h-5 flex items-center justify-center">
                  <ImageIcon class="w-4 h-4" />
                </span>
              </button>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-icon-only-button"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-icon-only-button" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <button class="button px-2 mr-1 mb-2 bg-theme-1 text-white">
                        <span class="w-5 h-5 flex items-center justify-center">
                          <ActivityIcon class="w-4 h-4" />
                        </span>
                      </button>
                      <button
                        class="button px-2 mr-1 mb-2 border text-gray-700 dark:bg-dark-5 dark:text-gray-300"
                      >
                        <span class="w-5 h-5 flex items-center justify-center">
                          <HardDriveIcon class="w-4 h-4" />
                        </span>
                      </button>
                      <button class="button px-2 mr-1 mb-2 bg-theme-9 text-white">
                        <span class="w-5 h-5 flex items-center justify-center">
                          <CalendarIcon class="w-4 h-4" />
                        </span>
                      </button>
                      <button
                        class="button px-2 mr-1 mb-2 bg-theme-12 text-white"
                      >
                        <span class="w-5 h-5 flex items-center justify-center">
                          <Share2Icon class="w-4 h-4" />
                        </span>
                      </button>
                      <button class="button px-2 mr-1 mb-2 bg-theme-6 text-white">
                        <span class="w-5 h-5 flex items-center justify-center">
                          <TrashIcon class="w-4 h-4" />
                        </span>
                      </button>
                      <button
                        class="button px-2 mr-1 mb-2 bg-gray-200 text-gray-600"
                      >
                        <span class="w-5 h-5 flex items-center justify-center">
                          <ImageIcon class="w-4 h-4" />
                        </span>
                      </button>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Icon Only Button -->
      </div>
    </div>
  </div>
</template>
