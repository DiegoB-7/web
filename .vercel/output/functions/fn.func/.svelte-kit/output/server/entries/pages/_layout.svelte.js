import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index.js";
const app = "";
const animate = "";
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fade-in.svelte-1ozw05h{opacity:0;transition:opacity 0.5s ease-in}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let element;
  $$result.css.add(css);
  return `<footer class="${[
    "bg-gray bottom-0 w-full h-full footer svelte-1ozw05h",
    ""
  ].join(" ").trim()}" style="overflow: hidden"${add_attribute("this", element, 0)}><div class="relative"><div class="flex justify-center my-3 "><button><p class="text-white hover:text-lightgray hover:delay-150 mx-3 font-heebo links">Home
				</p></button>
			<button><p class="text-white hover:text-lightgray hover:delay-150 mx-3 font-heebo ">About
				</p></button>
			<button><p class="text-white hover:text-lightgray hover:delay-150 mx-3 font-heebo ">Contact
				</p></button></div>
		<div class="flex justify-between flex-row mx-10 my-5"><div class="basis-1/3"><div class="flex justify-center"><p class="font-heebo text-lightgray">Hola</p></div></div>
			<div class="basis-1/3"><div class="flex justify-center"><div class="mx-3"><button class="block focus:outline-none text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="hover:delay-150 bi bi-linkedin h-6 w-6 fill-current text-lightgray hover:text-red"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg></button></div>
					<div><button class="block focus:outline-none text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="hover:delay-150 bi bi-twitter h-6 w-6 fill-current text-lightgray hover:text-red"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg></button></div></div></div>
			<div class="basis-1/3"><div class="flex justify-center "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="hover:delay-150 bi bi-twitter h-6 w-6 fill-current text-red hover:text-lightgray "><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path></svg>
					<p class="fill-current text-lightgray hover:text-red mx-3 font-heebo hover:delay-150 cursor-default">Hecha con amor</p></div></div></div></div>
</footer>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="top-0 w-full header relative " style="overflow: hidden"><div class="flex flex-row mx-10 my-5"><div class="flex justify-start basis-1/2"></div>
    <div class="flex justify-end basis-1/2"><div class="basis-1/3"><button><p class="text-white hover:text-lightgray hover:delay-150 mx-3 font-heebo links">Home
                </p></button>
            <button><p class="text-white hover:text-lightgray hover:delay-150 mx-3 font-heebo ">About
                </p></button>
            <button><p class="text-white hover:text-lightgray hover:delay-150 mx-3 font-heebo ">Contact
                </p></button></div></div></div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1x76x4h_START -->${$$result.title = `<title>Diego&#39;s Portfolio</title>`, ""}<!-- HEAD_svelte-1x76x4h_END -->`, ""}
${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};