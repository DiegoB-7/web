<script>
	import Atropos from 'atropos';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		const myAtropos = Atropos({
			el: '.my-atropos',
			rotateTouch: true,
			rotate: true,
			rotateXMax: 15,
			rotateYMax: 15,

			scale: 1.1
		});
	});

    function goAbout() {
		goto('/about');
	}
</script>

<main class="min-h-screen min-w-screen bg-black" style="overflow: hidden">
	<section class="flex flex-row">
		<div class="basis-1/2 flex items-center justify-center">
			 <div class="flex flex-col">
				<div>
                    <div class="atropos my-atropos">
                        <div class="atropos-scale">
                            <div class="atropos-rotate">
                                <div class="atropos-inner">
                                    <img src="/images/cristiano.png" alt="profile" data-atropos-offset="5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
            
		</div>

		<div class="basis-1/2 flex items-center">
			<div class="flex flex-col">
				<div class="my-1">
					<p class="text-red font-heebo">Howdy, I'm Diego</p>
				</div>
				<div class="my-1">
					<h1 class="font-heebo text-white text-5xl font-bold">Fullstack Developer</h1>
				</div>
				<div class="my-1">
                    <p class="text-lightgray font-heebo">Te ardes mucho</p>
                </div>
				<div class="my-1">
					<button class="bg-red rounded-sm text-white hover:bg-gray delay-150 py-2 px-6 font-heebo" on:click={goAbout}>About me</button>
				</div>
			</div>
		</div>
	</section>
     <section >
        
	</section>
</main>

<style>
</style>
