/* generated by Svelte v3.32.3 */
import { SvelteComponent, init, safe_not_equal } from '../web_modules/svelte/internal/index.mjs';

const loadComponent = component => {
	let compClassPromise = import("../components/" + component + ".js").then(res => res.default);

	// Fix "Unhandled promise rejection" error.
	// See: https://github.com/sveltejs/sapper/issues/487#issuecomment-529145749
	compClassPromise.catch(err => null);

	return compClassPromise;
};

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, null, safe_not_equal, {});
	}
}

export default Component;
export { loadComponent };