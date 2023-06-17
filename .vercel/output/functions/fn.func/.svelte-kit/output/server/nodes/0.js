import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.9406d5cd.js","_app/immutable/chunks/index.9f1f2401.js","_app/immutable/chunks/navigation.618fc51d.js","_app/immutable/chunks/singletons.f75a1827.js"];
export const stylesheets = ["_app/immutable/assets/0.cd1a1567.css"];
export const fonts = [];
