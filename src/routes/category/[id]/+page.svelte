<script lang="ts">
  import { findCategory } from '$lib/stores/skills';
  import SkillCard from '$lib/components/SkillCard.svelte';
  import type { PageLoad } from './$types';
  export const load: PageLoad = ({ params }) => ({ id: params.id });
  export let data: { id: string };
  const category = findCategory(data.id);
</script>

<section class="container mx-auto p-6">
  <a href="/" class="text-sm text-gray-500">← 返回總覽</a>
  <h2 class="text-2xl font-bold my-4">{category?.name}</h2>
  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {#each category?.nodes ?? [] as s}
      <SkillCard id={s.id} name={s.name} level={s.level ?? 3} summary={s.summary} />
    {/each}
  </div>
</section>
