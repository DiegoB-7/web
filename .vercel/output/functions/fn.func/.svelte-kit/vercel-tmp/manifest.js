export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.a723b8de.js","app":"_app/immutable/entry/app.924f173c.js","imports":["_app/immutable/entry/start.a723b8de.js","_app/immutable/chunks/index.9f1f2401.js","_app/immutable/chunks/singletons.f75a1827.js","_app/immutable/entry/app.924f173c.js","_app/immutable/chunks/index.9f1f2401.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
