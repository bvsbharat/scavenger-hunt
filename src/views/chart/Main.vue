<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Chart</h2>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
      <div class="col-span-12 lg:col-span-6">
        <!-- BEGIN: Vertical Bar Chart -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Vertical Bar Chart</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#vertical-bar-chart"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="vertical-bar-chart" class="p-5">
            <div class="preview">
              <VerticalBarChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-vertical-bar-chart"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-vertical-bar-chart" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <template>
                        <BarChart
                          :width="width"
                          :height="height"
                          :chart-data="data"
                          :options="options"
                        />
                      </template>

                      <script>
                      export default {
                        props: {
                          width: {
                            type: Number,
                            default: 0
                          },
                          height: {
                            type: Number,
                            default: 0
                          }
                        },
                        data() {
                          return {
                            data: {
                              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                              datasets: [
                                {
                                  label: "Html Template",
                                  barPercentage: 0.5,
                                  barThickness: 6,
                                  maxBarThickness: 8,
                                  minBarLength: 2,
                                  data: [0, 200, 250, 200, 500, 450, 850, 1050],
                                  backgroundColor: "#3160D8"
                                },
                                {
                                  label: "VueJs Template",
                                  barPercentage: 0.5,
                                  barThickness: 6,
                                  maxBarThickness: 8,
                                  minBarLength: 2,
                                  data: [0, 300, 400, 560, 320, 600, 720, 850],
                                  backgroundColor: "#cbd5e0"
                                }
                              ]
                            },
                            options: {
                              scales: {
                                xAxes: [
                                  {
                                    ticks: {
                                      fontSize: "12",
                                      fontColor: "#777777"
                                    },
                                    gridLines: {
                                      display: false
                                    }
                                  }
                                ],
                                yAxes: [
                                  {
                                    ticks: {
                                      fontSize: "12",
                                      fontColor: "#777777",
                                      callback: function(value) {
                                        return "$" + value;
                                      }
                                    },
                                    gridLines: {
                                      color: "#D8D8D8",
                                      zeroLineColor: "#D8D8D8",
                                      borderDash: [2, 2],
                                      zeroLineBorderDash: [2, 2],
                                      drawBorder: false
                                    }
                                  }
                                ]
                              }
                            }
                          };
                        }
                      };
                      </script>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Vertical Bar Chart -->
        <!-- BEGIN: Horizontal Bar Chart -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Horizontal Bar Chart</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#horizontal-bar-chart"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="horizontal-bar-chart" class="p-5">
            <div class="preview">
              <HorizontalBarChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-horizontal-bar-chart"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight
                  id="copy-horizontal-bar-chart"
                  class="source-preview"
                >
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <template>
                        <BarChart
                          :width="width"
                          :height="height"
                          :chart-data="data"
                          :options="options"
                        />
                      </template>

                      <script>
                      export default {
                        props: {
                          width: {
                            type: Number,
                            default: 0
                          },
                          height: {
                            type: Number,
                            default: 0
                          }
                        },
                        data() {
                          return {
                            data: {
                              labels: [
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun",
                                "Jul",
                                "Aug",
                                "Sep",
                                "Oct",
                                "Nov",
                                "Dec"
                              ],
                              datasets: [
                                {
                                  label: "Html Template",
                                  barPercentage: 0.5,
                                  barThickness: 6,
                                  maxBarThickness: 8,
                                  minBarLength: 2,
                                  backgroundColor: "#3160D8",
                                  data: this.$h.randomNumbers(-100, 100, 12)
                                },
                                {
                                  label: "VueJs Template",
                                  barPercentage: 0.5,
                                  barThickness: 6,
                                  maxBarThickness: 8,
                                  minBarLength: 2,
                                  backgroundColor: "#cbd5e0",
                                  data: this.$h.randomNumbers(-100, 100, 12)
                                }
                              ]
                            },
                            options: {
                              scales: {
                                xAxes: [
                                  {
                                    stacked: true,
                                    ticks: {
                                      fontSize: "12",
                                      fontColor: "#777777"
                                    },
                                    gridLines: {
                                      display: false
                                    }
                                  }
                                ],
                                yAxes: [
                                  {
                                    stacked: true,
                                    ticks: {
                                      fontSize: "12",
                                      fontColor: "#777777",
                                      callback: function(value) {
                                        return "$" + value;
                                      }
                                    },
                                    gridLines: {
                                      color: "#D8D8D8",
                                      zeroLineColor: "#D8D8D8",
                                      borderDash: [2, 2],
                                      zeroLineBorderDash: [2, 2],
                                      drawBorder: false
                                    }
                                  }
                                ]
                              }
                            }
                          };
                        }
                      };
                      </script>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Horizontal Bar Chart -->
        <!-- BEGIN: Donut Chart -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Donut Chart</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#donut-chart"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="donut-chart" class="p-5">
            <div class="preview">
              <DonutChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-donut-chart"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-donut-chart" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <template>
                        <DonutChart
                          :width="width"
                          :height="height"
                          :chart-data="data"
                          :options="options"
                        />
                      </template>

                      <script>
                      export default {
                        props: {
                          width: {
                            type: Number,
                            default: 0
                          },
                          height: {
                            type: Number,
                            default: 0
                          }
                        },
                        data() {
                          return {
                            data: {
                              labels: ["Html", "Vuejs", "Laravel"],
                              datasets: [
                                {
                                  data: [15, 10, 65],
                                  backgroundColor: ["#FF8B26", "#FFC533", "#285FD3"],
                                  hoverBackgroundColor: ["#FF8B26", "#FFC533", "#285FD3"],
                                  borderWidth: 5,
                                  borderColor: "#fff"
                                }
                              ]
                            },
                            options: {
                              cutoutPercentage: 80
                            }
                          };
                        }
                      };
                      </script>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Donut Chart -->
      </div>
      <div class="col-span-12 lg:col-span-6">
        <!-- BEGIN: Stacked Bar Chart -->
        <div class="intro-y box">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Stacked Bar Chart</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#stacked-bar-chart"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="stacked-bar-chart" class="p-5">
            <div class="preview">
              <StackedBarChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-stacked-bar-chart"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-stacked-bar-chart" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <template>
                        <BarChart
                          :width="width"
                          :height="height"
                          :chart-data="data"
                          :options="options"
                        />
                      </template>

                      <script>
                      export default {
                        props: {
                          width: {
                            type: Number,
                            default: 0
                          },
                          height: {
                            type: Number,
                            default: 0
                          }
                        },
                        data() {
                          return {
                            data: {
                              labels: [
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun",
                                "Jul",
                                "Aug",
                                "Sep",
                                "Oct",
                                "Nov",
                                "Dec"
                              ],
                              datasets: [
                                {
                                  label: "Html Template",
                                  barPercentage: 0.5,
                                  barThickness: 6,
                                  maxBarThickness: 8,
                                  minBarLength: 2,
                                  backgroundColor: "#3160D8",
                                  data: this.$h.randomNumbers(-100, 100, 12)
                                },
                                {
                                  label: "VueJs Template",
                                  barPercentage: 0.5,
                                  barThickness: 6,
                                  maxBarThickness: 8,
                                  minBarLength: 2,
                                  backgroundColor: "#cbd5e0",
                                  data: this.$h.randomNumbers(-100, 100, 12)
                                }
                              ]
                            },
                            options: {
                              scales: {
                                xAxes: [
                                  {
                                    stacked: true,
                                    ticks: {
                                      fontSize: "12",
                                      fontColor: "#777777"
                                    },
                                    gridLines: {
                                      display: false
                                    }
                                  }
                                ],
                                yAxes: [
                                  {
                                    stacked: true,
                                    ticks: {
                                      fontSize: "12",
                                      fontColor: "#777777",
                                      callback: function(value) {
                                        return "$" + value;
                                      }
                                    },
                                    gridLines: {
                                      color: "#D8D8D8",
                                      zeroLineColor: "#D8D8D8",
                                      borderDash: [2, 2],
                                      zeroLineBorderDash: [2, 2],
                                      drawBorder: false
                                    }
                                  }
                                ]
                              }
                            }
                          };
                        }
                      };
                      </script>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Stacked Bar Chart -->
        <!-- BEGIN: Line Chart -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Line Chart</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#line-chart"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="line-chart" class="p-5">
            <div class="preview">
              <LineChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-line-chart"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-line-chart" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <template>
                        <LineChart
                          :width="width"
                          :height="height"
                          :chart-data="data"
                          :options="options"
                        />
                      </template>

                      <script>
                      export default {
                        props: {
                          width: {
                            type: Number,
                            default: 0
                          },
                          height: {
                            type: Number,
                            default: 0
                          }
                        },
                        data() {
                          return {
                            data: {
                              labels: [
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun",
                                "Jul",
                                "Aug",
                                "Sep",
                                "Oct",
                                "Nov",
                                "Dec"
                              ],
                              datasets: [
                                {
                                  label: "Html Template",
                                  data: [0, 200, 250, 200, 500, 450, 850, 1050, 950, 1100, 900, 1200],
                                  borderWidth: 2,
                                  borderColor: "#3160D8",
                                  backgroundColor: "transparent",
                                  pointBorderColor: "transparent"
                                },
                                {
                                  label: "VueJs Template",
                                  data: [0, 300, 400, 560, 320, 600, 720, 850, 690, 805, 1200, 1010],
                                  borderWidth: 2,
                                  borderDash: [2, 2],
                                  borderColor: "#a0afbf",
                                  backgroundColor: "transparent",
                                  pointBorderColor: "transparent"
                                }
                              ]
                            },
                            options: {
                              scales: {
                                xAxes: [
                                  {
                                    ticks: {
                                      fontSize: "12",
                                      fontColor: "#777777"
                                    },
                                    gridLines: {
                                      display: false
                                    }
                                  }
                                ],
                                yAxes: [
                                  {
                                    ticks: {
                                      fontSize: "12",
                                      fontColor: "#777777",
                                      callback: function(value) {
                                        return "$" + value;
                                      }
                                    },
                                    gridLines: {
                                      color: "#D8D8D8",
                                      zeroLineColor: "#D8D8D8",
                                      borderDash: [2, 2],
                                      zeroLineBorderDash: [2, 2],
                                      drawBorder: false
                                    }
                                  }
                                ]
                              }
                            }
                          };
                        }
                      };
                      </script>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Line Chart -->
        <!-- BEGIN: Pie Chart -->
        <div class="intro-y box mt-5">
          <div
            class="flex flex-col sm:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">Pie Chart</h2>
            <div
              class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
            >
              <div class="mr-3">Show example code</div>
              <input
                data-target="#pie-chart"
                class="show-code input input--switch border"
                type="checkbox"
              />
            </div>
          </div>
          <div id="pie-chart" class="p-5">
            <div class="preview">
              <PieChart :height="200" />
            </div>
            <div class="source-code hidden">
              <button
                data-target="#copy-pie-chart"
                class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
              >
                <FileIcon class="w-4 h-4 mr-2" /> Copy example code
              </button>
              <div class="overflow-y-auto h-64 mt-3">
                <Highlight id="copy-pie-chart" class="source-preview">
                  <code
                    class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                  >
                    <textarea>
                      <template>
                        <PieChart :width="width" :height="height" :chart-data="data" />
                      </template>

                      <script>
                      export default {
                        props: {
                          width: {
                            type: Number,
                            default: 0
                          },
                          height: {
                            type: Number,
                            default: 0
                          }
                        },
                        data() {
                          return {
                            data: {
                              labels: ["Html", "Vuejs", "Laravel"],
                              datasets: [
                                {
                                  data: [15, 10, 65],
                                  backgroundColor: ["#FF8B26", "#FFC533", "#285FD3"],
                                  hoverBackgroundColor: ["#FF8B26", "#FFC533", "#285FD3"],
                                  borderWidth: 5,
                                  borderColor: cash("html").hasClass("dark") ? "#303953" : "#fff"
                                }
                              ]
                            }
                          };
                        }
                      };
                      </script>
                    </textarea>
                  </code>
                </Highlight>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Pie Chart -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VerticalBarChart from "@/components/vertical-bar-chart/Main.vue";
import StackedBarChart from "@/components/stacked-bar-chart/Main.vue";
import HorizontalBarChart from "@/components/horizontal-bar-chart/Main.vue";
import LineChart from "@/components/line-chart/Main.vue";
import DonutChart from "@/components/donut-chart/Main.vue";
import PieChart from "@/components/pie-chart/Main.vue";

export default defineComponent({
  components: {
    VerticalBarChart,
    StackedBarChart,
    HorizontalBarChart,
    LineChart,
    DonutChart,
    PieChart,
  },
});
</script>
