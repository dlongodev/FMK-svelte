<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<div class="text-right">
	<button type="button" on:click={drawerClose} class="btn-icon variant-filled-surface m-4">
		<i class="fas fa-times" />
	</button>
</div>
<h1>cart content</h1>
