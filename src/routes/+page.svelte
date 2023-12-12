<script>
	import Atropos from 'atropos';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import img from '$lib/images/cristiano.png';
	import { goto } from '$app/navigation';

	var titleModal ="";
	var descriptionModal ="";
	var imagesModal =[];
	const modalData =[
		{"title":"Youtube 2","images":[{"src":"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg","alt":"The Vintage"},{"src":"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg","alt":"The Vintage"},{"src":"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg","alt":"The Vintage"}],"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!","link":"https://www.youtube.com/" },
		{"title":" 2","images":[{"src":"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg","alt":"The Vintage"},{"src":"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg","alt":"The Vintage"},{"src":"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg","alt":"The Vintage"}],"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!","link":"https://www.youtube.com/" },
		{"title":"222 2","images":[{"src":"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg","alt":"The Vintage"},{"src":"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg","alt":"The Vintage"},{"src":"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg","alt":"The Vintage"}],"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!","link":"https://www.youtube.com/" },
		{"title":"334234 2","images":[{"src":"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg","alt":"The Vintage"},{"src":"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg","alt":"The Vintage"},{"src":"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg","alt":"The Vintage"}],"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!","link":"https://www.youtube.com/" }
	]
	onMount(() => {
		const myAtropos = Atropos({
			el: '.my-atropos',
			rotateTouch: true,
			rotate: true,
			rotateXMax: 15,
			rotateYMax: 15,

			scale: 1.1
		});
		const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});
	});

	function openModal(id){
		const modal = document.getElementById("modal");
		imagesModal =[];
		titleModal = modalData[id].title;
		descriptionModal = modalData[id].description;	
		imagesModal = modalData[id].images;
		modal.classList.add('flex');
		modal.classList.remove('hidden');
		
		modal.showModal();
	}
	function closeModal(){
		const modal = document.getElementById("modal");
		
		modal.classList.add('hidden');
		modal.close();
	}

	function goAbout() {
		goto('/about');
	}
	function goContact() {
		goto('/contact');
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
								<div class="atropos-inner inline-flex justify-center">
									<img src="https://scontent.ftij3-2.fna.fbcdn.net/v/t39.30808-6/311693255_2099624763574076_8587080800396754404_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=btic1U8eT4sAX_eCpvY&_nc_ht=scontent.ftij3-2.fna&oh=00_AfDJVty7hNcRDvTMHCMMFa-qcMlrU49x103HJUgPETzcmg&oe=657CF07E" alt="profile" data-atropos-offset="5" class="w-1/2 rounded-lg"/>
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
					<h1 class="font-heebo text-white text-5xl font-bold">Software Engineer</h1>
				</div>
				<div class="my-1">
					<p class="text-lightgray font-heebo">
						I'm a Software Engineer with a passion for building beautiful and functional websites.
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
					<h4 class="font-heebo text-white text-xl font-bold">Software Development</h4>
				</div>
				<div class="my-4 mx-2">
					<p class="text-lightgray font-heebo break-words">
						I like to code things from scratch, and enjoy bringing ideas to life in the browser.
					</p>
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
				
			</div>
		</div>
		
	</section>
	<section class="flex flex-col md:flex-row items-center justify-center mx-4 md:mx-40 my-20">
		<div class="w-1/3 h-full">
		<div>
			<h1 class="text-red text-9xl text-center font-bold font-heebo">2</h1>
			<h4 class="text-center text-white font-bold font-heebo text-3xl">Years of Experience</h4>
		</div>
		</div>
		<div class="w-2/3 flex justify-center">
			<div class="grid lg:grid-cols-2 gap-4 grid-cols-1 w-full">
				<div class="rounded overflow-hidden bg-gray mx-2 my-4 md:my-0 py-10  ">
					<h1 class="text-red text-5xl text-center font-heebo">2 </h1>
					<h4 class="text-center text-lightgray text-3xl font-heebo">Clients</h4>
				</div>
				<div class="rounded overflow-hidden bg-gray mx-2 my-4 md:my-0 py-10  ">
					<h1 class="text-red text-5xl text-center font-heebo">3 </h1>
					<h4 class="text-center text-lightgray text-3xl font-heebo">Projects</h4>
				</div>
				<div class="rounded overflow-hidden bg-gray mx-2 my-4 md:my-0 py-10  ">
					<h1 class="text-red text-5xl text-center font-heebo">1 </h1>
					<h4 class="text-center text-lightgray text-3xl font-heebo">Awards</h4>
				</div>
				<div class="rounded overflow-hidden bg-gray mx-2 my-4 md:my-0 py-10  ">
					<h1 class="text-red text-5xl text-center font-heebo">1 </h1>
					<h4 class="text-center text-lightgray text-3xl font-heebo">Certification</h4>
				</div>
				
			</div>
		</div>
	</section>
	<section class="  mx-4 md:mx-40 my-20">
		<div>
		<h2 class="text-3xl font-bold mb-4 text-white">Featured projects</h2>
      	<p class="mb-6 text-lightgray">
			Here are a few design projects I've worked on recently. Want to see more? Email me.
	  	</p>
		</div>
		<div class="grid lg:grid-cols-2 gap-1 grid-cols-1 justify-items-center items-center">
			<div class="  w-7/12  shadow-sm 	" >
				<div class="py-10 px-5 bg-gray rounded-md">
				  <img
					src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
					alt="Mozaik"
					class="w-full h-auto aspect-video py-2"
					
					style="aspect-ratio:350/200;object-fit:cover"
				  />
				  
				</div>
				
				<div >
					<h3 class="font-bold text-xl font-heebo text-white mt-3">Mozaik</h3>
					<button class="text-red font-bold font-heebo py-0 inline-flex items-center justify-start" on:click={()=>{openModal(0)}}>
						Know More
					</button>
				  
				</div>
			</div>
			<div class="  w-7/12  shadow-sm 	" >
				<div class="py-10 px-5 bg-gray rounded-md">
				  <img
					src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
					alt="Mozaik"
					class="w-full h-auto aspect-video py-2"
					
					style="aspect-ratio:350/200;object-fit:cover"
				  />
				  
				</div>
				
				<div >
					<h3 class="font-bold text-xl font-heebo text-white mt-3">Mozaik</h3>
					<button class="text-red font-bold font-heebo py-0 inline-flex items-center justify-start" on:click={()=>{openModal(1)}}>
						Know More
					</button>
				  
				</div>
			</div>
			<div class="  w-7/12  shadow-sm 	" >
				<div class="py-10 px-5 bg-gray rounded-md">
				  <img
					src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
					alt="Mozaik"
					class="w-full h-auto aspect-video py-2"
					
					style="aspect-ratio:350/200;object-fit:cover"
				  />
				  
				</div>
				
				<div >
					<h3 class="font-bold text-xl font-heebo text-white mt-3">Mozaik</h3>
					<button class="text-red font-bold font-heebo py-0 inline-flex items-center justify-start" on:click={()=>{openModal(2)}}>
						Know More
					</button>
				  
				</div>
			</div>
			<div class="  w-7/12  shadow-sm 	" >
				<div class="py-10 px-5 bg-gray rounded-md">
				  <img
					src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
					alt="Mozaik"
					class="w-full h-auto aspect-video py-2"
					
					style="aspect-ratio:350/200;object-fit:cover"
				  />
				  
				</div>
				
				<div >
					<h3 class="font-bold text-xl font-heebo text-white mt-3">Mozaik</h3>
					<button class="text-red font-bold font-heebo py-0 inline-flex items-center justify-start" on:click={()=>{openModal(3)}}>
						Know More
					</button>
				  
				</div>
			</div>
			
			

		</div>
	</section>
	<section class="flex flex-col md:flex-row items-center  mx-4 md:mx-40 my-20 bg-gray px-10 py-10">
		<div class="w-1/2">
			<h2 class="text-3xl font-bold text-white mb-4">Let's work together on your next project</h2>
			<p class="text-lightgray font-heebo">Have an idea or a project in mind? Let's collaborate and build something awesome together.</p>
		</div>
		<div class="flex justify-center items-center w-1/2">
			<button
		class=" bg-red rounded-sm text-white hover:bg-gray delay-150 py-4 px-12 font-heebo"
		on:click={goContact}
	>
		Contact Me
	</button>
		</div>
	</section>
</main>

<dialog  id="modal" class="fixed left-0 top-0  h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 " in:blur out:blur>
	<div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-gray">
		<div class="w-full">
		  <div class=" my-10 mx-10 ">
			<div class="mb-8">
			  <h1 class="mb-4 text-3xl font-extrabold text-red font-heebo">{titleModal}</h1>
			  <p class="font-heebo text-white">{descriptionModal}</p>
			</div>
			<div class="mb-8 ">
				<div class="swiper">
					<!-- Additional required wrapper -->
					<div class="swiper-wrapper">
					  <!-- Slides -->
					  	
						{#each imagesModal as image}
							<div class="swiper-slide">
								<img src={image.src} alt={image.alt} class="w-full h-full object-cover rounded-md" style="aspect-ratio: 300 / 200; object-fit: cover;">
							</div>
						{/each}
					  
					</div>
					<!-- If we need pagination -->
					<div class="swiper-pagination text-red"></div>
				  
					<!-- If we need navigation buttons -->
					<div class="swiper-button-prev text-red"></div>
					<div class="swiper-button-next text-red"></div>
				  
					
				  </div>
			  
			</div>	
		  </div>
		</div>
		<div class="flex justify-end">
			<button class=" bg-red rounded-sm text-white hover:bg-gray delay-150 px-5 py-3 font-heebo mx-5 my-5" on:click={closeModal}>Ok</button>

		</div>
		
	  </div>
</dialog>


