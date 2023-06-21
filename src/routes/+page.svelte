<script>
	import Atropos from 'atropos';
	import { onMount } from 'svelte';

	import img from '$lib/images/cristiano.png';
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
	<section class="flex flex-col md:flex-row mx-4 md:mx-0">
		<div class="md:basis-1/2 flex items-center justify-center">
			<div class="flex flex-col">
				<div>
					<div class="atropos my-atropos">
						<div class="atropos-scale">
							<div class="atropos-rotate">
								<div class="atropos-inner">
									<img src={img} alt="profile" data-atropos-offset="5" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<div class="md:basis-1/2 flex items-center">
			<div class="flex flex-col mx-6">
				<div class="my-1">
					<p class="text-red font-heebo">Howdy, I'm Diego</p>
				</div>
				<div class="my-1">
					<h1 class="font-heebo text-white text-5xl font-bold">Fullstack Developer</h1>
				</div>
				<div class="my-1">
					<p class="text-lightgray font-heebo">
						I'm a fullstack developer with a passion for building beautiful and functional websites.
					</p>
				</div>
				<div class="my-1">
					<button
						class="bg-red rounded-sm text-white hover:bg-gray delay-150 py-2 px-6 font-heebo"
						on:click={goAbout}
					>
						About me
					</button>
				</div>
			</div>
		</div>
	</section>
	
	<section class="flex flex-col md:flex-row items-center justify-center mx-4 md:mx-40 my-20">
		<div class="rounded overflow-hidden bg-gray mx-2 my-4 md:my-0  py-10 px-5 ">
			<div class="flex-col ">
				<div class="mx-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
						class="hover:delay-150 bi bi-twitter fill-current text-red hover:text-lightgray h-8 w-8">
						<path d="M3 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
  						<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v1H1V2a1 1 0 0 1 1-1h12zm1 3v10a1 1 0 0 1-1 1h-2V4h3zm-4 0v11H2a1 1 0 0 1-1-1V4h10z"/>
					</svg>
				</div>
				<div class="my-4 mx-2">
					<h4 class="font-heebo text-white text-xl font-bold">UI design</h4>
				</div>
				<div class="my-4 mx-2">
					<p class="text-lightgray font-heebo break-words">
						I value simple content structure, clean design patterns, and thoughtful interactions.
					</p>
				</div>
				<div class="flex mx-2">
					<a href="/" class="text-red font-heebo ">Know more </a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
						class="hover:delay-150 bi bi-twitter h-4 w-4 fill-current text-red hover:text-lightgray align-middle">
						<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
					</svg>
				</div>
			</div>
		</div>
		<div class="rounded overflow-hidden bg-gray mx-2 my-4 md:my-0 py-10 px-5 ">
			<div class="flex-col ">
				<div class="mx-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
						class="hover:delay-150 bi bi-twitter fill-current text-red hover:text-lightgray h-8 w-8">
						<path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>

					</svg>
				</div>
				<div class="my-4 mx-2">
					<h4 class="font-heebo text-white text-xl font-bold">Product Design</h4>
				</div>
				<div class="my-4 mx-2">
					<p class="text-lightgray font-heebo break-words">
						I like to code things from scratch, and enjoy bringing ideas to life in the browser.
					</p>
				</div>
				<div class="flex mx-2">
					<a href="/" class="text-red font-heebo ">Know more </a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
						class="hover:delay-150 bi bi-twitter h-4 w-4 fill-current text-red hover:text-lightgray align-middle">
						<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
					</svg>
				</div>
			</div>
		</div>
		<div class="rounded overflow-hidden bg-gray mx-2 my-4 md:my-0 py-10 px-5 ">
			<div class="flex-col ">
				<div class="mx-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
						class="hover:delay-150 bi bi-twitter fill-current text-red hover:text-lightgray h-8 w-8">
						<path fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"/>

					</svg>
				</div>
				<div class="my-4 mx-2">
					<h4 class="font-heebo text-white text-xl font-bold">Digital solutions consultancy</h4>
				</div>
				<div class="my-4 mx-2">
					<p class="text-lightgray font-heebo break-words">
						I enjoy helping people to create an amazing digital solution with the state-of-the-art technologies.
					</p>
				</div>
				<div class="flex mx-2">
					<a href="/" class="text-red font-heebo ">Know more </a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
						class="hover:delay-150 bi bi-twitter h-4 w-4 fill-current text-red hover:text-lightgray align-middle">
						<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
					</svg>
				</div>
			</div>
		</div>
		
	</section>
</main>


