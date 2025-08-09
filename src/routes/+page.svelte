<script lang="ts">
  import { skillsData } from '$lib/stores/skills';
  import { get } from 'svelte/store';
  import BubbleChart from '$lib/components/BubbleChart.svelte';
  import { goto } from '$app/navigation';

  const data = get(skillsData);
  const nodes = data.categories.map(c => ({ id: c.id, name: c.name, value: c.nodes.length, color: c.color }));
  function handleClick(id: string) { goto(`/category/${id}`); }
</script>

<section class="container mx-auto p-6">
  <h1 class="text-3xl font-bold mb-4">技能總覽</h1>
  <p class="text-sm text-gray-500 mb-6">點擊類別泡泡進入下一層</p>
  <BubbleChart {nodes} onClick={handleClick} />
</section>
