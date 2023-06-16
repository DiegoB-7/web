<script>
    import { goto } from '$app/navigation';
	
    import { onMount,onDestroy } from 'svelte';

    onMount(() => {
        const element = document.querySelector('.header');
        element.classList.add('animate__animated');
        element.classList.add('animate__fadeInDownBig');
        element.style.setProperty('--animate-duration', '1s');
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
    
</script>

<header class=" top-0 w-full  header relative " style="overflow: hidden">
<div class="flex flex-row mx-10 my-5">
    <div class="flex justify-start basis-1/2">

    </div>
    <div class="flex justify-end basis-1/2">
        <div class="basis-1/3">
            <button on:click={goHome}  >
                <p class="text-white hover:text-lightgray hover:delay-150 mx-3 font-heebo links" >
                    Home
                </p></button
            >
            <button on:click={goAbout}>
                <p class="text-white hover:text-lightgray hover:delay-150 mx-3 font-heebo ">
                    About
                </p></button
            >
            <button on:click={goContact}>
                <p class="text-white hover:text-lightgray hover:delay-150 mx-3  font-heebo ">
                    Contact
                </p></button
            >
        </div>
    </div>
</div>
</header>