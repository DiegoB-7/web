<script>
    import "../app.css";
    import 'animate.css';
    import Footer from "./components/Footer.svelte";
    import Header from "./components/Header.svelte";
    
</script>
<svelte:head>
    <title>Diego's Portfolio</title> 
</svelte:head>
<Header/>
<slot/>
<Footer/>
