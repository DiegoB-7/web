<script>
	import ProfilePicture from '$lib/images/profile-picture.jpg';
	function goLinkedIn() {
		window.open('https://www.linkedin.com/in/diego-beltran-lopez-283a0b216/', '_blank');
	}
</script>
<main class="min-h-screen w-auto y-auto bg-black  snap-y snap-proximity" style="overflow: hidden">
    
    <section class="flex flex-col md:flex-row mx-4 md:mx-0 justify-center items-center">
        <div class="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
            <div class="lg:w-1/3">
              <div class="rounded-lg  bg-card text-card-foreground shadow-sm w-full bg-gray" >
                <div class="flex flex-col space-y-1.5 p-6 px-4 py-3 bg-gray-200 text-gray-900">
                  <h2 class="text-xl font-semibold font-heebo text-white">Profile</h2>
                </div>
                <div class="p-4">
                  <span class="relative flex shrink-0 overflow-hidden rounded-full h-32 w-32 mx-auto mb-4">
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <img
                      class="aspect-square h-full w-full"
                      alt="Profile Picture"
                      src={ProfilePicture}
                    />
                  </span>
                  <h3 class="text-lg font-bold text-center mb-2 font-heebo text-white">Diego Beltrán López</h3>
                  <p class="text-center text-gray-600 font-heebo text-red">Software Engineer</p>
                </div>
              </div>
            </div>
            <div class="lg:w-2/3">
              <div class="rounded-lg  bg-card text-card-foreground shadow-sm w-full mb-6 bg-gray" >
                <div class="flex flex-col space-y-1.5 p-6 px-4 py-3 bg-gray-200 text-gray-900">
                  <h2 class="text-xl font-semibold font-heebo text-white">Personal Information</h2>
                </div>
                <div class="p-4">
                  <p class="mb-2 text-lightgray font-heebo">
                    <strong class="font-heebo text-red">Location:</strong> Tijuana, Baja California, Mexico
                  </p>
                  <p class="mb-2 text-lightgray font-heebo">
                    <strong class="font-heebo text-red">Education:</strong> B.S. Computational Systems Engineer, Insituto Tecnologico de Tijuana
                  </p>
                  <p class="text-lightgray font-heebo ">
                    <strong class="font-heebo text-red">Bio:</strong> Passionate software engineer with 2+ years of professional experience in
                    high-paced tech companies. Specialized in web development.
                  </p>
                </div>
              </div>
              <div class="rounded-lg  bg-card text-card-foreground shadow-sm w-full mb-6 bg-gray" >
                <div class="flex flex-col space-y-1.5 p-6 px-4 py-3 bg-gray-200 text-gray-900">
                  <h2 class="text-xl font-semibold font-heebo text-white">Interests</h2>
                </div>
                <div class="p-4 flex flex-wrap gap-2">
                  <div class="inline-flex items-center rounded-full  px-2.5 py-0.5 text-xs font-heebo text-white bg-red   transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-blue-200 text-blue-700">
                    Machine Learning
                  </div>
                  <div class="inline-flex items-center rounded-full  px-2.5 py-0.5 text-xs font-heebo text-white bg-red   transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-blue-200 text-blue-700">
                    Web Development
                  </div>
                  <div class="inline-flex items-center rounded-full  px-2.5 py-0.5 text-xs font-heebo text-white bg-red   transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-blue-200 text-blue-700">
                    Data Science
                  </div>
                  
                </div>
              </div>
              <div class="rounded-lg  bg-card text-card-foreground shadow-sm w-full bg-gray">
                <div class="flex flex-col space-y-1.5 p-6 px-4 py-3 bg-gray-200 text-gray-900">
                  <h2 class="text-xl font-semibold font-heebo text-white">Contact Details</h2>
                </div>
                <div class="p-4">
                  
                  <p>
                    <strong class="font-heebo text-red">LinkedIn:</strong>
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a class="text-lightgray hover:underline font-heebo" href="#" on:click={goLinkedIn}>
                        https://www.linkedin.com/in/diego-beltran-lopez-283a0b216/
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
    </section>
            
        
    </main>
