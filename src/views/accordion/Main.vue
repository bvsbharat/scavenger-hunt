<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Accordion</h2>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <!-- BEGIN: Basic Accordion -->
      <div class="col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Basic Accordion</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#basic-accordion"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="basic-accordion" class="p-5">
            <div class="preview">
              <div class="accordion">
                <div
                  class="accordion__pane active border-b border-gray-200 dark:border-dark-5 pb-4"
                >
                  <a
                    href="javascript:;"
                    class="accordion__pane__toggle font-medium block"
                    >OpenSSL Essentials: Working with SSL Certificates, Private
                    Keys</a
                  >
                  <div
                    class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </div>
                </div>
                <div
                  class="accordion__pane border-b border-gray-200 dark:border-dark-5 py-4"
                >
                  <a
                    href="javascript:;"
                    class="accordion__pane__toggle font-medium block"
                    >Understanding IP Addresses, Subnets, and CIDR Notation</a
                  >
                  <div
                    class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </div>
                </div>
                <div
                  class="accordion__pane border-b border-gray-200 dark:border-dark-5 py-4"
                >
                  <a
                    href="javascript:;"
                    class="accordion__pane__toggle font-medium block"
                    >How To Troubleshoot Common HTTP Error Codes</a
                  >
                  <div
                    class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </div>
                </div>
                <div class="accordion__pane pt-4">
                  <a
                    href="javascript:;"
                    class="accordion__pane__toggle font-medium block"
                    >An Introduction to Securing your Linux VPS</a
                  >
                  <div
                    class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </div>
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-basic-accordion"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-basic-accordion" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="accordion">
                        <div
                          class="accordion__pane active border-b border-gray-200 dark:border-dark-5 pb-4"
                        >
                          <a
                            href="javascript:;"
                            class="accordion__pane__toggle font-medium block"
                            >OpenSSL Essentials: Working with SSL Certificates,
                            Private Keys</a
                          >
                          <div
                            class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry\'s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </div>
                        </div>
                        <div
                          class="accordion__pane border-b border-gray-200 dark:border-dark-5 py-4"
                        >
                          <a
                            href="javascript:;"
                            class="accordion__pane__toggle font-medium block"
                            >Understanding IP Addresses, Subnets, and CIDR
                            Notation</a
                          >
                          <div
                            class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry\'s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </div>
                        </div>
                        <div
                          class="accordion__pane border-b border-gray-200 dark:border-dark-5 py-4"
                        >
                          <a
                            href="javascript:;"
                            class="accordion__pane__toggle font-medium block"
                            >How To Troubleshoot Common HTTP Error Codes</a
                          >
                          <div
                            class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry\'s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </div>
                        </div>
                        <div class="accordion__pane pt-4">
                          <a
                            href="javascript:;"
                            class="accordion__pane__toggle font-medium block"
                            >An Introduction to Securing your Linux VPS</a
                          >
                          <div
                            class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry\'s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
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
      </div>
      <!-- END: Basic Accordion -->
      <!-- BEGIN: Boxed Accordion -->
      <div class="col-span-12 lg:col-span-6">
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Boxed Accordion</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#boxed-accordion"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="boxed-accordion" class="p-5">
            <div class="preview">
              <div class="accordion">
                <div
                  class="accordion__pane active border border-gray-200 dark:border-dark-5 p-4"
                >
                  <a
                    href="javascript:;"
                    class="accordion__pane__toggle font-medium block"
                    >OpenSSL Essentials: Working with SSL Certificates, Private
                    Keys</a
                  >
                  <div
                    class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </div>
                </div>
                <div
                  class="accordion__pane border border-gray-200 dark:border-dark-5 p-4 mt-3"
                >
                  <a
                    href="javascript:;"
                    class="accordion__pane__toggle font-medium block"
                    >Understanding IP Addresses, Subnets, and CIDR Notation</a
                  >
                  <div
                    class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </div>
                </div>
                <div
                  class="accordion__pane border border-gray-200 dark:border-dark-5 p-4 mt-3"
                >
                  <a
                    href="javascript:;"
                    class="accordion__pane__toggle font-medium block"
                    >How To Troubleshoot Common HTTP Error Codes</a
                  >
                  <div
                    class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </div>
                </div>
                <div
                  class="accordion__pane border border-gray-200 dark:border-dark-5 p-4 mt-3"
                >
                  <a
                    href="javascript:;"
                    class="accordion__pane__toggle font-medium block"
                    >An Introduction to Securing your Linux VPS</a
                  >
                  <div
                    class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </div>
                </div>
              </div>
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-boxed-accordion"
                class="copy-code button button--sm border border-gray-200 dark:border-dark-5 flex items-center text-gray-700"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-boxed-accordion" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <div class="accordion">
                        <div
                          class="accordion__pane active border border-gray-200 dark:border-dark-5 p-4"
                        >
                          <a
                            href="javascript:;"
                            class="accordion__pane__toggle font-medium block"
                            >OpenSSL Essentials: Working with SSL Certificates,
                            Private Keys</a
                          >
                          <div
                            class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry\'s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </div>
                        </div>
                        <div
                          class="accordion__pane border border-gray-200 dark:border-dark-5 p-4 mt-3"
                        >
                          <a
                            href="javascript:;"
                            class="accordion__pane__toggle font-medium block"
                            >Understanding IP Addresses, Subnets, and CIDR
                            Notation</a
                          >
                          <div
                            class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry\'s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </div>
                        </div>
                        <div
                          class="accordion__pane border border-gray-200 dark:border-dark-5 p-4 mt-3"
                        >
                          <a
                            href="javascript:;"
                            class="accordion__pane__toggle font-medium block"
                            >How To Troubleshoot Common HTTP Error Codes</a
                          >
                          <div
                            class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry\'s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                          </div>
                        </div>
                        <div
                          class="accordion__pane border border-gray-200 dark:border-dark-5 p-4 mt-3"
                        >
                          <a
                            href="javascript:;"
                            class="accordion__pane__toggle font-medium block"
                            >An Introduction to Securing your Linux VPS</a
                          >
                          <div
                            class="accordion__pane__content mt-3 text-gray-700 dark:text-gray-600 leading-relaxed"
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry\'s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
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
      </div>
      <!-- END: Boxed Accordion -->
    </div>
  </div>
</template>
