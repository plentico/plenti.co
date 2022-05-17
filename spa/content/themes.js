/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from '../web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let div8;
	let a0;
	let span;
	let t0;
	let t1;
	let t2;
	let h1;
	let t3;
	let t4;
	let div7;
	let div6;
	let div0;
	let t5;
	let a1;
	let t6;
	let t7;
	let a1_href_value;
	let t8;
	let div1;
	let t9;
	let a2;
	let t10;
	let a2_href_value;
	let t11;
	let div2;
	let t12;
	let a3;
	let t13;
	let a3_href_value;
	let t14;
	let div5;
	let div3;
	let t15;
	let t16;
	let div4;
	let code0;
	let t17;
	let t18;
	let t19;
	let details;
	let summary;
	let t20;
	let t21;
	let ol;
	let li0;
	let code1;
	let t22;
	let t23;
	let t24;
	let li1;
	let code2;
	let t25;
	let t26;
	let t27;
	let li2;
	let t28;
	let t29;
	let a4;
	let t30;
	let a4_href_value;
	let t31;
	let img;
	let img_src_value;
	let img_alt_value;

	return {
		c() {
			div8 = element("div");
			a0 = element("a");
			span = element("span");
			t0 = text("🠔");
			t1 = text("Back to themes list");
			t2 = space();
			h1 = element("h1");
			t3 = text(/*name*/ ctx[0]);
			t4 = space();
			div7 = element("div");
			div6 = element("div");
			div0 = element("div");
			t5 = text("Repo: ");
			a1 = element("a");
			t6 = text("https://github.com/plenti-themes/");
			t7 = text(/*machine_name*/ ctx[3]);
			t8 = space();
			div1 = element("div");
			t9 = text("Built by: ");
			a2 = element("a");
			t10 = text(/*built_by*/ ctx[1]);
			t11 = space();
			div2 = element("div");
			t12 = text("Designed by: ");
			a3 = element("a");
			t13 = text(/*designed_by*/ ctx[2]);
			t14 = space();
			div5 = element("div");
			div3 = element("div");
			t15 = text("Start a new project using this theme:");
			t16 = space();
			div4 = element("div");
			code0 = element("code");
			t17 = text("plenti new site my-site --theme=https://github.com/plenti-themes/");
			t18 = text(/*machine_name*/ ctx[3]);
			t19 = space();
			details = element("details");
			summary = element("summary");
			t20 = text("Or add this theme to an existing project:");
			t21 = space();
			ol = element("ol");
			li0 = element("li");
			code1 = element("code");
			t22 = text("plenti theme add https://github.com/plenti-themes/");
			t23 = text(/*machine_name*/ ctx[3]);
			t24 = space();
			li1 = element("li");
			code2 = element("code");
			t25 = text("plenti theme enable ");
			t26 = text(/*machine_name*/ ctx[3]);
			t27 = space();
			li2 = element("li");
			t28 = text("Make sure you manually copy any route overrides and delete conflicting content or layouts.");
			t29 = space();
			a4 = element("a");
			t30 = text("See demo");
			t31 = space();
			img = element("img");
			this.h();
		},
		l(nodes) {
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			a0 = claim_element(div8_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			span = claim_element(a0_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, "🠔");
			span_nodes.forEach(detach);
			t1 = claim_text(a0_nodes, "Back to themes list");
			a0_nodes.forEach(detach);
			t2 = claim_space(div8_nodes);
			h1 = claim_element(div8_nodes, "H1", {});
			var h1_nodes = children(h1);
			t3 = claim_text(h1_nodes, /*name*/ ctx[0]);
			h1_nodes.forEach(detach);
			t4 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div0 = claim_element(div6_nodes, "DIV", {});
			var div0_nodes = children(div0);
			t5 = claim_text(div0_nodes, "Repo: ");
			a1 = claim_element(div0_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t6 = claim_text(a1_nodes, "https://github.com/plenti-themes/");
			t7 = claim_text(a1_nodes, /*machine_name*/ ctx[3]);
			a1_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t8 = claim_space(div6_nodes);
			div1 = claim_element(div6_nodes, "DIV", {});
			var div1_nodes = children(div1);
			t9 = claim_text(div1_nodes, "Built by: ");
			a2 = claim_element(div1_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);
			t10 = claim_text(a2_nodes, /*built_by*/ ctx[1]);
			a2_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t11 = claim_space(div6_nodes);
			div2 = claim_element(div6_nodes, "DIV", {});
			var div2_nodes = children(div2);
			t12 = claim_text(div2_nodes, "Designed by: ");
			a3 = claim_element(div2_nodes, "A", { href: true, class: true });
			var a3_nodes = children(a3);
			t13 = claim_text(a3_nodes, /*designed_by*/ ctx[2]);
			a3_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t14 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div3 = claim_element(div5_nodes, "DIV", {});
			var div3_nodes = children(div3);
			t15 = claim_text(div3_nodes, "Start a new project using this theme:");
			div3_nodes.forEach(detach);
			t16 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", {});
			var div4_nodes = children(div4);
			code0 = claim_element(div4_nodes, "CODE", {});
			var code0_nodes = children(code0);
			t17 = claim_text(code0_nodes, "plenti new site my-site --theme=https://github.com/plenti-themes/");
			t18 = claim_text(code0_nodes, /*machine_name*/ ctx[3]);
			code0_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			t19 = claim_space(div5_nodes);
			details = claim_element(div5_nodes, "DETAILS", {});
			var details_nodes = children(details);
			summary = claim_element(details_nodes, "SUMMARY", { class: true });
			var summary_nodes = children(summary);
			t20 = claim_text(summary_nodes, "Or add this theme to an existing project:");
			summary_nodes.forEach(detach);
			t21 = claim_space(details_nodes);
			ol = claim_element(details_nodes, "OL", {});
			var ol_nodes = children(ol);
			li0 = claim_element(ol_nodes, "LI", {});
			var li0_nodes = children(li0);
			code1 = claim_element(li0_nodes, "CODE", {});
			var code1_nodes = children(code1);
			t22 = claim_text(code1_nodes, "plenti theme add https://github.com/plenti-themes/");
			t23 = claim_text(code1_nodes, /*machine_name*/ ctx[3]);
			code1_nodes.forEach(detach);
			li0_nodes.forEach(detach);
			t24 = claim_space(ol_nodes);
			li1 = claim_element(ol_nodes, "LI", {});
			var li1_nodes = children(li1);
			code2 = claim_element(li1_nodes, "CODE", {});
			var code2_nodes = children(code2);
			t25 = claim_text(code2_nodes, "plenti theme enable ");
			t26 = claim_text(code2_nodes, /*machine_name*/ ctx[3]);
			code2_nodes.forEach(detach);
			li1_nodes.forEach(detach);
			t27 = claim_space(ol_nodes);
			li2 = claim_element(ol_nodes, "LI", {});
			var li2_nodes = children(li2);
			t28 = claim_text(li2_nodes, "Make sure you manually copy any route overrides and delete conflicting content or layouts.");
			li2_nodes.forEach(detach);
			ol_nodes.forEach(detach);
			details_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			t29 = claim_space(div6_nodes);
			a4 = claim_element(div6_nodes, "A", { class: true, href: true });
			var a4_nodes = children(a4);
			t30 = claim_text(a4_nodes, "See demo");
			a4_nodes.forEach(detach);
			div6_nodes.forEach(detach);
			t31 = claim_space(div7_nodes);
			img = claim_element(div7_nodes, "IMG", { src: true, alt: true, class: true });
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "arrow svelte-1swsd3x");
			attr(a0, "href", "/themes");
			attr(a0, "class", "back svelte-1swsd3x");
			attr(a1, "href", a1_href_value = "https://github.com/plenti-themes/" + /*machine_name*/ ctx[3]);
			attr(a1, "class", "svelte-1swsd3x");
			attr(a2, "href", a2_href_value = "https://github.com/" + /*built_by*/ ctx[1]);
			attr(a2, "class", "svelte-1swsd3x");
			attr(a3, "href", a3_href_value = "https://github.com/" + /*designed_by*/ ctx[2]);
			attr(a3, "class", "svelte-1swsd3x");
			attr(summary, "class", "svelte-1swsd3x");
			attr(div5, "class", "install svelte-1swsd3x");
			attr(a4, "class", "button svelte-1swsd3x");
			attr(a4, "href", a4_href_value = "https://plenti-themes.github.io/" + /*machine_name*/ ctx[3]);
			attr(div6, "class", "content svelte-1swsd3x");
			if (img.src !== (img_src_value = "/assets/themes/" + /*machine_name*/ ctx[3] + ".png")) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = "" + (/*name*/ ctx[0] + " Plenti theme"));
			attr(img, "class", "svelte-1swsd3x");
			attr(div7, "class", "columns svelte-1swsd3x");
			attr(div8, "class", "container");
		},
		m(target, anchor) {
			insert(target, div8, anchor);
			append(div8, a0);
			append(a0, span);
			append(span, t0);
			append(a0, t1);
			append(div8, t2);
			append(div8, h1);
			append(h1, t3);
			append(div8, t4);
			append(div8, div7);
			append(div7, div6);
			append(div6, div0);
			append(div0, t5);
			append(div0, a1);
			append(a1, t6);
			append(a1, t7);
			append(div6, t8);
			append(div6, div1);
			append(div1, t9);
			append(div1, a2);
			append(a2, t10);
			append(div6, t11);
			append(div6, div2);
			append(div2, t12);
			append(div2, a3);
			append(a3, t13);
			append(div6, t14);
			append(div6, div5);
			append(div5, div3);
			append(div3, t15);
			append(div5, t16);
			append(div5, div4);
			append(div4, code0);
			append(code0, t17);
			append(code0, t18);
			append(div5, t19);
			append(div5, details);
			append(details, summary);
			append(summary, t20);
			append(details, t21);
			append(details, ol);
			append(ol, li0);
			append(li0, code1);
			append(code1, t22);
			append(code1, t23);
			append(ol, t24);
			append(ol, li1);
			append(li1, code2);
			append(code2, t25);
			append(code2, t26);
			append(ol, t27);
			append(ol, li2);
			append(li2, t28);
			append(div6, t29);
			append(div6, a4);
			append(a4, t30);
			append(div7, t31);
			append(div7, img);
		},
		p(ctx, [dirty]) {
			if (dirty & /*name*/ 1) set_data(t3, /*name*/ ctx[0]);
			if (dirty & /*built_by*/ 2) set_data(t10, /*built_by*/ ctx[1]);

			if (dirty & /*built_by*/ 2 && a2_href_value !== (a2_href_value = "https://github.com/" + /*built_by*/ ctx[1])) {
				attr(a2, "href", a2_href_value);
			}

			if (dirty & /*designed_by*/ 4) set_data(t13, /*designed_by*/ ctx[2]);

			if (dirty & /*designed_by*/ 4 && a3_href_value !== (a3_href_value = "https://github.com/" + /*designed_by*/ ctx[2])) {
				attr(a3, "href", a3_href_value);
			}

			if (dirty & /*name*/ 1 && img_alt_value !== (img_alt_value = "" + (/*name*/ ctx[0] + " Plenti theme"))) {
				attr(img, "alt", img_alt_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div8);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { name } = $$props, { built_by } = $$props, { designed_by } = $$props;
	let machine_name = name.toLowerCase();

	$$self.$$set = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("built_by" in $$props) $$invalidate(1, built_by = $$props.built_by);
		if ("designed_by" in $$props) $$invalidate(2, designed_by = $$props.designed_by);
	};

	return [name, built_by, designed_by, machine_name];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { name: 0, built_by: 1, designed_by: 2 });
	}
}

export default Component;