<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Progressbar</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Basic Progressbar -->
      <div class="intro-y col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Basic Progressbar</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#basic-progressbar"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="basic-progressbar" class="p-5">
            <div class="preview">
              <div class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded-full">
                <div class="w-1/2 h-full bg-theme-1 rounded-full"></div>
              </div>
              <div
                class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded-full mt-3"
              >
                <div class="w-2/3 h-full bg-theme-1 rounded-full"></div>
              </div>
              <div
                class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded-full mt-3"
              >
                <div class="w-3/4 h-full bg-theme-1 rounded-full"></div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-basic-progressbar"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-basic-progressbar" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded-full"
                      >
                        <div class="w-1/2 h-full bg-theme-1 rounded-full"></div>
                      </div>
                      <div
                        class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded-full mt-3"
                      >
                        <div class="w-2/3 h-full bg-theme-1 rounded-full"></div>
                      </div>
                      <div
                        class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded-full mt-3"
                      >
                        <div class="w-3/4 h-full bg-theme-1 rounded-full"></div>
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
              Progressbar with Label
            </h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#progressbar-label"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="progressbar-label" class="p-5">
            <div class="preview">
              <div class="w-full h-4 bg-gray-400 dark:bg-dark-1 rounded">
                <div
                  class="w-1/2 h-full bg-theme-1 rounded text-center text-xs text-white"
                >
                  50%
                </div>
              </div>
              <div class="w-full h-4 bg-gray-400 dark:bg-dark-1 rounded mt-3">
                <div
                  class="w-2/3 h-full bg-theme-1 rounded text-center text-xs text-white"
                >
                  60%
                </div>
              </div>
              <div class="w-full h-4 bg-gray-400 dark:bg-dark-1 rounded mt-3">
                <div
                  class="w-3/4 h-full bg-theme-1 rounded text-center text-xs text-white"
                >
                  70%
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-progressbar-label"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-progressbar-label" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="w-full h-4 bg-gray-400 dark:bg-dark-1 rounded">
                        <div
                          class="w-1/2 h-full bg-theme-1 rounded text-center text-xs text-white"
                        >
                          50%
                        </div>
                      </div>
                      <div
                        class="w-full h-4 bg-gray-400 dark:bg-dark-1 rounded mt-3"
                      >
                        <div
                          class="w-2/3 h-full bg-theme-1 rounded text-center text-xs text-white"
                        >
                          60%
                        </div>
                      </div>
                      <div
                        class="w-full h-4 bg-gray-400 dark:bg-dark-1 rounded mt-3"
                      >
                        <div
                          class="w-3/4 h-full bg-theme-1 rounded text-center text-xs text-white"
                        >
                          70%
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
      <!-- END: Basic Progressbar -->
      <!-- BEGIN: Progressbar Height -->
      <div class="intro-y col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Progressbar Height</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#progressbar-height"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="progressbar-height" class="p-5">
            <div class="preview">
              <div class="w-full h-1 bg-gray-400 dark:bg-dark-1 rounded-full">
                <div class="w-1/2 h-full bg-theme-1 rounded-full"></div>
              </div>
              <div class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded mt-3">
                <div class="w-2/3 h-full bg-theme-1 rounded"></div>
              </div>
              <div class="w-full h-3 bg-gray-400 dark:bg-dark-1 rounded mt-3">
                <div class="w-3/4 h-full bg-theme-1 rounded"></div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-progressbar-height"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-progressbar-height" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="w-full h-1 bg-gray-400 dark:bg-dark-1 rounded-full"
                      >
                        <div class="w-1/2 h-full bg-theme-1 rounded-full"></div>
                      </div>
                      <div
                        class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded mt-3"
                      >
                        <div class="w-2/3 h-full bg-theme-1 rounded"></div>
                      </div>
                      <div
                        class="w-full h-3 bg-gray-400 dark:bg-dark-1 rounded mt-3"
                      >
                        <div class="w-3/4 h-full bg-theme-1 rounded"></div>
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
            <h2 class="font-medium text-base mr-auto">Progressbar Color</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#progressbar-color"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="progressbar-color" class="p-5">
            <div class="preview">
              <div class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded-full">
                <div class="w-1/2 h-full bg-theme-1 rounded-full"></div>
              </div>
              <div class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded mt-3">
                <div class="w-2/3 h-full bg-theme-9 rounded"></div>
              </div>
              <div class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded mt-3">
                <div class="w-3/4 h-full bg-theme-12 rounded"></div>
              </div>
              <div class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded mt-3">
                <div class="w-3/4 h-full bg-theme-6 rounded"></div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-progressbar-color"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-progressbar-color" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div
                        class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded-full"
                      >
                        <div class="w-1/2 h-full bg-theme-1 rounded-full"></div>
                      </div>
                      <div
                        class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded mt-3"
                      >
                        <div class="w-2/3 h-full bg-theme-9 rounded"></div>
                      </div>
                      <div
                        class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded mt-3"
                      >
                        <div class="w-3/4 h-full bg-theme-12 rounded"></div>
                      </div>
                      <div
                        class="w-full h-2 bg-gray-400 dark:bg-dark-1 rounded mt-3"
                      >
                        <div class="w-3/4 h-full bg-theme-6 rounded"></div>
                      </div>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Progressbar Height -->
    </div>
  </div>
</template>
