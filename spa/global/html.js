/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	assign,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	create_component,
	destroy_component,
	detach,
	element,
	get_spread_object,
	get_spread_update,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "svelte/internal";

import Head from "./head.svelte";
import Nav from "./nav.svelte";
import Footer from "./footer.svelte";
import { makeTitle } from "../scripts/make_title.svelte";

function create_fragment(ctx) {
	let html;
	let head;
	let t0;
	let body;
	let nav;
	let t1;
	let main;
	let switch_instance;
	let t2;
	let br;
	let t3;
	let footer;
	let current;

	const head_spread_levels = [
		{
			title: makeTitle(/*content*/ ctx[1].filename)
		},
		/*content*/ ctx[1].fields
	];

	let head_props = {};

	for (let i = 0; i < head_spread_levels.length; i += 1) {
		head_props = assign(head_props, head_spread_levels[i]);
	}

	head = new Head({ props: head_props });
	nav = new Nav({});
	const switch_instance_spread_levels = [/*content*/ ctx[1].fields, { allContent: /*allContent*/ ctx[2] }];
	var switch_value = /*layout*/ ctx[0];

	function switch_props(ctx) {
		let switch_instance_props = {};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
	}

	footer = new Footer({});

	return {
		c() {
			html = element("html");
			create_component(head.$$.fragment);
			t0 = space();
			body = element("body");
			create_component(nav.$$.fragment);
			t1 = space();
			main = element("main");
			if (switch_instance) create_component(switch_instance.$$.fragment);
			t2 = space();
			br = element("br");
			t3 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l(nodes) {
			html = claim_element(nodes, "HTML", { lang: true });
			var html_nodes = children(html);
			claim_component(head.$$.fragment, html_nodes);
			t0 = claim_space(html_nodes);
			body = claim_element(html_nodes, "BODY", { class: true });
			var body_nodes = children(body);
			claim_component(nav.$$.fragment, body_nodes);
			t1 = claim_space(body_nodes);
			main = claim_element(body_nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			if (switch_instance) claim_component(switch_instance.$$.fragment, main_nodes);
			t2 = claim_space(main_nodes);
			br = claim_element(main_nodes, "BR", {});
			main_nodes.forEach(detach);
			t3 = claim_space(body_nodes);
			claim_component(footer.$$.fragment, body_nodes);
			body_nodes.forEach(detach);
			html_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(main, "class", "svelte-1142p5h");
			attr(body, "class", "svelte-1142p5h");
			attr(html, "lang", "en");
		},
		m(target, anchor) {
			insert(target, html, anchor);
			mount_component(head, html, null);
			append(html, t0);
			append(html, body);
			mount_component(nav, body, null);
			append(body, t1);
			append(body, main);

			if (switch_instance) {
				mount_component(switch_instance, main, null);
			}

			append(main, t2);
			append(main, br);
			append(body, t3);
			mount_component(footer, body, null);
			current = true;
		},
		p(ctx, [dirty]) {
			const head_changes = (dirty & /*makeTitle, content*/ 2)
			? get_spread_update(head_spread_levels, [
					{
						title: makeTitle(/*content*/ ctx[1].filename)
					},
					dirty & /*content*/ 2 && get_spread_object(/*content*/ ctx[1].fields)
				])
			: {};

			head.$set(head_changes);

			const switch_instance_changes = (dirty & /*content, allContent*/ 6)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*content*/ 2 && get_spread_object(/*content*/ ctx[1].fields),
					dirty & /*allContent*/ 4 && { allContent: /*allContent*/ ctx[2] }
				])
			: {};

			if (switch_value !== (switch_value = /*layout*/ ctx[0])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, main, t2);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			transition_in(head.$$.fragment, local);
			transition_in(nav.$$.fragment, local);
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(head.$$.fragment, local);
			transition_out(nav.$$.fragment, local);
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(html);
			destroy_component(head);
			destroy_component(nav);
			if (switch_instance) destroy_component(switch_instance);
			destroy_component(footer);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { layout } = $$props, { content } = $$props, { allContent } = $$props;

	$$self.$$set = $$props => {
		if ("layout" in $$props) $$invalidate(0, layout = $$props.layout);
		if ("content" in $$props) $$invalidate(1, content = $$props.content);
		if ("allContent" in $$props) $$invalidate(2, allContent = $$props.allContent);
	};

	return [layout, content, allContent];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { layout: 0, content: 1, allContent: 2 });
	}
}

export default Component;