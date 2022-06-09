<script setup>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Legend,ArcElement, Tooltip, DoughnutController  } from 'chart.js'
import useUsers from '../composables/useUsers.js'
import { computed } from 'vue'

ChartJS.register(Legend, ArcElement, Tooltip, DoughnutController )

const { sumaDeKudosTotales, crearArrayDeUsuarios, crearArrayDeKudos, crearArrayDeColores } = useUsers()

const chartId = 'doughnut'


const chartData = computed(() => {
        return {
          labels: crearArrayDeUsuarios(),
          datasets: [
            {
              data: crearArrayDeKudos(),
              backgroundColor: crearArrayDeColores()
            }
          ]
        }
      })

const chartOptions = {
  responsive: false,
  plugins: {
    htmlLegend: {
      containerID: 'legend-container'
    },
    legend: {
      display: false,
      position: 'right'
    },
  }
}

const getOrCreateLegendList = (chart, id) => {
  const legendContainer = document.getElementById(id);
  let listContainer = legendContainer.querySelector('ul');

  if (!listContainer) {
    listContainer = document.createElement('ul');
    listContainer.style.display = 'grid';
    listContainer.style.gridTemplateColumns = '1fr 1fr';
    listContainer.style.rowGap = '10px';
    listContainer.style.margin = 0;
    listContainer.style.padding = 0;

    legendContainer.appendChild(listContainer);
  }

  return listContainer;
};

const htmlLegendPlugin = {
  id: 'htmlLegend',
  afterUpdate(chart, args, options) {
    const ul = getOrCreateLegendList(chart, options.containerID);

    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    // Reuse the built-in legendItems generator
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    items.forEach(item => {
      const li = document.createElement('li');
      li.style.alignItems = 'center';
      li.style.cursor = 'pointer';
      li.style.display = 'flex';
      li.style.flexDirection = 'row';
      li.style.marginLeft = '10px';

      li.onclick = () => {
        const {type} = chart.config;
        if (type === 'pie' || type === 'doughnut') {
          // Pie and doughnut charts only have a single dataset and visibility is per item
          chart.toggleDataVisibility(item.index);
        } else {
          chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
        }
        chart.update();
      };

      // Color box
      const boxSpan = document.createElement('span');
      boxSpan.style.background = item.fillStyle;
      boxSpan.style.borderColor = item.strokeStyle;
      boxSpan.style.borderWidth = item.lineWidth + 'px';
      boxSpan.style.display = 'inline-block';
      boxSpan.style.height = '20px';
      boxSpan.style.marginRight = '10px';
      boxSpan.style.width = '55px';

      // Text
      const textContainer = document.createElement('p');
      textContainer.style.color = item.fontColor;
      textContainer.style.margin = 0;
      textContainer.style.padding = 0;
      textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

      const text = document.createTextNode(item.text);
      textContainer.appendChild(text);

      li.appendChild(boxSpan);
      li.appendChild(textContainer);
      ul.appendChild(li);
    });
  }
};

const plugins = [htmlLegendPlugin]
</script>

<template>
<div class="bg-[#F6F8F9] px-6 py-4 ml-8 mr-4 mt-2 mb-4">
		<div class="flex items-center pb-4 place-content-between">
			<span class="text-sm text-[#6E7C87] font-semibold uppercase"> 📊 #kudos CHART</span>
      <span class="text-xs text-gray-500">{{ sumaDeKudosTotales }} TOTAL</span>
		</div>
    <section class="relative">
      <div v-if="sumaDeKudosTotales == 0" class="w-[166px] h-[166px] absolute">
        <div class="flex items-center justify-center w-full h-full bg-[#D1D5DB] rounded-full ">
          <div class="bg-[#F6F8F9] w-[86px] h-[86px] rounded-full"></div>
        </div>
      </div>
      <div class="flex justify-around">
        <Doughnut :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :width="166" :height="166" :plugins="plugins"></Doughnut>
        <div id="legend-container" class="px-4"></div>
      </div>
    </section>
</div>
</template>