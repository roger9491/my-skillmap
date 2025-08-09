<script lang="ts">
  import { findSkill } from '$lib/stores/skills';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import type { PageLoad } from './$types';
  export const load: PageLoad = ({ params }) => ({ id: params.id });
  export let data: { id: string };
  const found = findSkill(data.id);
</script>

{#if found}
  <section class="container mx-auto p-6 space-y-4">
    <Breadcrumbs items={[
      { href: '/', label: 'Home' },
      { href: `/category/${found.category.id}`, label: found.category.name },
      { href: `/skill/${found.skill.id}`, label: found.skill.name }
    ]} />
    <h1 class="text-3xl font-bold">{found.skill.name}</h1>
    <p class="text-gray-700">{found.skill.summary}</p>

    {#if found.skill.subskills?.length}
      <div class="flex flex-wrap gap-2">
        {#each found.skill.subskills as t}
          <span class="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">{t.name} · Lv {t.level ?? 3}</span>
        {/each}
      </div>
    {/if}

    {#if found.skill.examples?.length}
      <div>
        <h3 class="font-semibold mb-2">案例 / 連結</h3>
        <ul class="list-disc ml-5 space-y-1">
          {#each found.skill.examples as ex}
            <li><a class="text-blue-600 hover:underline" href={ex.link} target="_blank" rel="noreferrer">{ex.title}</a></li>
          {/each}
        </ul>
      </div>
    {/if}
  </section>
{:else}
  <p class="p-6">查無此技能</p>
{/if}
