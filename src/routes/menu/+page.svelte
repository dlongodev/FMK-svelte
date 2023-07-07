<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ menuItems } = data);
</script>

<h1 class="text-xl">MENU</h1>

{#each menuItems as item}
	<p>{item.title}</p>
{/each}
