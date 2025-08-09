<script lang="ts">
  import { onMount } from 'svelte';
  import * as echarts from 'echarts';
  export let nodes: { id: string; name: string; value?: number; color?: string }[] = [];
  export let onClick: (id: string) => void;
  let el: HTMLDivElement;

  onMount(() => {
    const chart = echarts.init(el);
    chart.setOption({
      tooltip: { trigger: 'item' },
      series: [{
        type: 'graph',
        layout: 'force',
        roam: true,
        label: { show: true },
        force: { repulsion: 200, edgeLength: 50 },
        data: nodes.map((n) => ({
          id: n.id, name: n.name, value: n.value ?? 3,
          symbolSize: 40 + (n.value ?? 3) * 8,
          itemStyle: { color: n.color }
        }))
      }]
    });
    chart.on('click', (p: any) => onClick?.(p.data.id));
    const onResize = () => chart.resize();
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); chart.dispose(); };
  });
</script>

<div bind:this={el} class="h-[60vh] w-full" />
