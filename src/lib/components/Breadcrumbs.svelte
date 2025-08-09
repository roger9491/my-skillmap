<script lang="ts">
  export let items: { href: string; label: string }[] = [];
</script>

<nav class="text-sm text-gray-500 mb-4">
  {#each items as item, i}
    <a href={item.href} class="hover:underline">{item.label}</a>
    {#if i < items.length - 1}
      <span class="mx-1">/</span>
    {/if}
  {/each}
</nav>
