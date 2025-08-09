<script lang="ts">
  export let id: string;
  export let name: string;
  export let level: number = 3;
  export let summary?: string;
</script>

<a href={`/skill/${id}`} class="p-4 rounded-2xl border hover:shadow transition">
  <div class="flex items-center justify-between mb-2">
    <h3 class="font-semibold">{name}</h3>
    <span class="text-xs bg-gray-100 rounded px-2 py-0.5">Lv {level}</span>
  </div>
  {#if summary}
    <p class="text-sm text-gray-600 line-clamp-2">{summary}</p>
  {/if}
</a>
