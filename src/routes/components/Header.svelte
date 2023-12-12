<script>
    import { goto } from '$app/navigation';
	import img from '$lib/images/logo.png';
    import { onMount,onDestroy } from 'svelte';

    let element;
	let isVisible = false;
    onMount(() => {
    	const observer = new IntersectionObserver(handleIntersection);
    	observer.observe(element);
  	});

    function goHome() {
		goto('/');
	}
	function goAbout() {
		goto('/about');
	}
	function goContact() {
		goto('/contact');
	}
    
	function onShow(){
        const element = document.querySelector('.header');
        element.classList.add('animate__animated');
        element.classList.add('animate__fadeInDownBig');
        element.style.setProperty('--animate-duration', '1s');
		setTimeout(() => {
			onExit();
		}, 1000);
		
    }
    function onExit(){
        const element = document.querySelector('.header');
        element.classList.remove('animate__animated');
        element.classList.remove('animate__fadeInDownBig');
    }

	function handleIntersection(entries) {
   		entries.forEach(entry => {
  			isVisible = entry.isIntersecting;
			console.log(isVisible);
  			if (isVisible) {
    		  onShow();
			  
    		}
		});
  }

  	function toggleMenu() {
        const menu = document.getElementById("menu");
        menu.classList.toggle("hidden");
    }
</script>

<header class="top-0 w-full header relative mb-10" style="overflow: hidden" bind:this={element} >
    <div class="flex flex-col md:flex-row mx-10 md:mx-0 ">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="flex justify-between items-center md:mx-40 cursor-pointer" >
            <img src={img} alt="logo" class="w-24 h-24 object-cover">
            <button on:click={toggleMenu} class="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-lightgray hover:border-lightgray">
				<svg class="h-4 w-4 fill-current text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 3h20v2H0zm0 5h20v2H0zm0 5h20v2H0z" />
				</svg>
			</button>
        </div>
        <div class="hidden md:flex right-0   justify-end items-center md:items-stretch md:space-x-4 flex-auto md:mx-40" id="menu">
			<button on:click={goHome}>
				<p class="text-white hover:text-lightgray hover:delay-150 mx-3 font-heebo links">Home</p>
			</button>
			<button on:click={goAbout}>
				<p class="text-white hover:text-lightgray hover:delay-150 mx-3 font-heebo">About Me</p>
			</button>
			<button on:click={goContact}>
				<p class="text-white hover:text-lightgray hover:delay-150 mx-3 font-heebo">Contact Me</p>
			</button>
		</div>
    </div>
</header>

<style>
	@media (max-width: 767px) {
        .hidden {
            display: none;
        }
    }
</style>