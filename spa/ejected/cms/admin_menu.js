/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	add_flush_callback,
	append,
	attr,
	bind,
	binding_callbacks,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	detach,
	element,
	empty,
	group_outros,
	init,
	insert,
	is_function,
	listen,
	mount_component,
	noop,
	prevent_default,
	run_all,
	safe_not_equal,
	space,
	subscribe,
	svg_element,
	text,
	transition_in,
	transition_out
} from '../../web_modules/svelte/internal/index.mjs';

import JSONEditor from './json_editor.js';
import VisualEditor from './visual_editor.js';

function create_else_block_1(ctx) {
	let svg;
	let path0;
	let path1;
	let line;
	let t;

	return {
		c() {
			svg = svg_element("svg");
			path0 = svg_element("path");
			path1 = svg_element("path");
			line = svg_element("line");
			t = text("\n    Edit");
			this.h();
		},
		l(nodes) {
			svg = claim_element(
				nodes,
				"svg",
				{
					xmlns: true,
					class: true,
					width: true,
					height: true,
					viewBox: true,
					"stroke-width": true,
					stroke: true,
					fill: true,
					"stroke-linecap": true,
					"stroke-linejoin": true
				},
				1
			);

			var svg_nodes = children(svg);
			path0 = claim_element(svg_nodes, "path", { stroke: true, d: true, fill: true }, 1);
			children(path0).forEach(detach);
			path1 = claim_element(svg_nodes, "path", { d: true }, 1);
			children(path1).forEach(detach);
			line = claim_element(svg_nodes, "line", { x1: true, y1: true, x2: true, y2: true }, 1);
			children(line).forEach(detach);
			svg_nodes.forEach(detach);
			t = claim_text(nodes, "\n    Edit");
			this.h();
		},
		h() {
			attr(path0, "stroke", "none");
			attr(path0, "d", "M0 0h24v24H0z");
			attr(path0, "fill", "none");
			attr(path1, "d", "M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4");
			attr(line, "x1", "13.5");
			attr(line, "y1", "6.5");
			attr(line, "x2", "17.5");
			attr(line, "y2", "10.5");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "class", "icon icon-tabler icon-tabler-pencil svelte-dxauv5");
			attr(svg, "width", "30");
			attr(svg, "height", "30");
			attr(svg, "viewBox", "0 0 24 24");
			attr(svg, "stroke-width", "2");
			attr(svg, "stroke", "#2c3e50");
			attr(svg, "fill", "none");
			attr(svg, "stroke-linecap", "round");
			attr(svg, "stroke-linejoin", "round");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, path0);
			append(svg, path1);
			append(svg, line);
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(svg);
			if (detaching) detach(t);
		}
	};
}

// (27:4) {#if showEditor}
function create_if_block_2(ctx) {
	let svg;
	let path0;
	let circle;
	let path1;
	let t;

	return {
		c() {
			svg = svg_element("svg");
			path0 = svg_element("path");
			circle = svg_element("circle");
			path1 = svg_element("path");
			t = text("\n    View");
			this.h();
		},
		l(nodes) {
			svg = claim_element(
				nodes,
				"svg",
				{
					xmlns: true,
					class: true,
					width: true,
					height: true,
					viewBox: true,
					"stroke-width": true,
					stroke: true,
					fill: true,
					"stroke-linecap": true,
					"stroke-linejoin": true
				},
				1
			);

			var svg_nodes = children(svg);
			path0 = claim_element(svg_nodes, "path", { stroke: true, d: true, fill: true }, 1);
			children(path0).forEach(detach);
			circle = claim_element(svg_nodes, "circle", { cx: true, cy: true, r: true }, 1);
			children(circle).forEach(detach);
			path1 = claim_element(svg_nodes, "path", { d: true }, 1);
			children(path1).forEach(detach);
			svg_nodes.forEach(detach);
			t = claim_text(nodes, "\n    View");
			this.h();
		},
		h() {
			attr(path0, "stroke", "none");
			attr(path0, "d", "M0 0h24v24H0z");
			attr(path0, "fill", "none");
			attr(circle, "cx", "12");
			attr(circle, "cy", "12");
			attr(circle, "r", "2");
			attr(path1, "d", "M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "class", "icon icon-tabler icon-tabler-eye svelte-dxauv5");
			attr(svg, "width", "30");
			attr(svg, "height", "30");
			attr(svg, "viewBox", "0 0 24 24");
			attr(svg, "stroke-width", "2");
			attr(svg, "stroke", "#2c3e50");
			attr(svg, "fill", "none");
			attr(svg, "stroke-linecap", "round");
			attr(svg, "stroke-linejoin", "round");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, path0);
			append(svg, circle);
			append(svg, path1);
			insert(target, t, anchor);
		},
		d(detaching) {
			if (detaching) detach(svg);
			if (detaching) detach(t);
		}
	};
}

// (73:0) {#if showEditor}
function create_if_block(ctx) {
	let div3;
	let div2;
	let div0;
	let svg0;
	let path0;
	let rect;
	let line0;
	let line1;
	let t0;
	let span0;
	let t1;
	let div0_class_value;
	let t2;
	let div1;
	let svg1;
	let path1;
	let path2;
	let path3;
	let t3;
	let span1;
	let t4;
	let div1_class_value;
	let t5;
	let current_block_type_index;
	let if_block;
	let current;
	let mounted;
	let dispose;
	const if_block_creators = [create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type_1(ctx, dirty) {
		if (/*active*/ ctx[3] === "code") return 0;
		return 1;
	}

	current_block_type_index = select_block_type_1(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			svg0 = svg_element("svg");
			path0 = svg_element("path");
			rect = svg_element("rect");
			line0 = svg_element("line");
			line1 = svg_element("line");
			t0 = space();
			span0 = element("span");
			t1 = text("Visual");
			t2 = space();
			div1 = element("div");
			svg1 = svg_element("svg");
			path1 = svg_element("path");
			path2 = svg_element("path");
			path3 = svg_element("path");
			t3 = space();
			span1 = element("span");
			t4 = text("Code");
			t5 = space();
			if_block.c();
			this.h();
		},
		l(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			svg0 = claim_element(
				div0_nodes,
				"svg",
				{
					xmlns: true,
					class: true,
					width: true,
					height: true,
					viewBox: true,
					"stroke-width": true,
					stroke: true,
					fill: true,
					"stroke-linecap": true,
					"stroke-linejoin": true
				},
				1
			);

			var svg0_nodes = children(svg0);
			path0 = claim_element(svg0_nodes, "path", { stroke: true, d: true, fill: true }, 1);
			children(path0).forEach(detach);

			rect = claim_element(
				svg0_nodes,
				"rect",
				{
					x: true,
					y: true,
					width: true,
					height: true,
					rx: true
				},
				1
			);

			children(rect).forEach(detach);
			line0 = claim_element(svg0_nodes, "line", { x1: true, y1: true, x2: true, y2: true }, 1);
			children(line0).forEach(detach);
			line1 = claim_element(svg0_nodes, "line", { x1: true, y1: true, x2: true, y2: true }, 1);
			children(line1).forEach(detach);
			svg0_nodes.forEach(detach);
			t0 = claim_space(div0_nodes);
			span0 = claim_element(div0_nodes, "SPAN", {});
			var span0_nodes = children(span0);
			t1 = claim_text(span0_nodes, "Visual");
			span0_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			svg1 = claim_element(
				div1_nodes,
				"svg",
				{
					xmlns: true,
					class: true,
					width: true,
					height: true,
					viewBox: true,
					"stroke-width": true,
					stroke: true,
					fill: true,
					"stroke-linecap": true,
					"stroke-linejoin": true
				},
				1
			);

			var svg1_nodes = children(svg1);
			path1 = claim_element(svg1_nodes, "path", { stroke: true, d: true, fill: true }, 1);
			children(path1).forEach(detach);
			path2 = claim_element(svg1_nodes, "path", { d: true }, 1);
			children(path2).forEach(detach);
			path3 = claim_element(svg1_nodes, "path", { d: true }, 1);
			children(path3).forEach(detach);
			svg1_nodes.forEach(detach);
			t3 = claim_space(div1_nodes);
			span1 = claim_element(div1_nodes, "SPAN", {});
			var span1_nodes = children(span1);
			t4 = claim_text(span1_nodes, "Code");
			span1_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t5 = claim_space(div3_nodes);
			if_block.l(div3_nodes);
			div3_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(path0, "stroke", "none");
			attr(path0, "d", "M0 0h24v24H0z");
			attr(path0, "fill", "none");
			attr(rect, "x", "4");
			attr(rect, "y", "4");
			attr(rect, "width", "16");
			attr(rect, "height", "16");
			attr(rect, "rx", "2");
			attr(line0, "x1", "4");
			attr(line0, "y1", "10");
			attr(line0, "x2", "20");
			attr(line0, "y2", "10");
			attr(line1, "x1", "10");
			attr(line1, "y1", "4");
			attr(line1, "x2", "10");
			attr(line1, "y2", "20");
			attr(svg0, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg0, "class", "icon icon-tabler icon-tabler-table svelte-dxauv5");
			attr(svg0, "width", "30");
			attr(svg0, "height", "30");
			attr(svg0, "viewBox", "0 0 24 24");
			attr(svg0, "stroke-width", "1.5");
			attr(svg0, "stroke", "#2c3e50");
			attr(svg0, "fill", "none");
			attr(svg0, "stroke-linecap", "round");
			attr(svg0, "stroke-linejoin", "round");
			attr(div0, "class", div0_class_value = "selector " + (/*active*/ ctx[3] === "visual" ? "active" : "") + " svelte-dxauv5");
			attr(path1, "stroke", "none");
			attr(path1, "d", "M0 0h24v24H0z");
			attr(path1, "fill", "none");
			attr(path2, "d", "M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2");
			attr(path3, "d", "M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2");
			attr(svg1, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg1, "class", "icon icon-tabler icon-tabler-braces svelte-dxauv5");
			attr(svg1, "width", "30");
			attr(svg1, "height", "30");
			attr(svg1, "viewBox", "0 0 24 24");
			attr(svg1, "stroke-width", "1.5");
			attr(svg1, "stroke", "#2c3e50");
			attr(svg1, "fill", "none");
			attr(svg1, "stroke-linecap", "round");
			attr(svg1, "stroke-linejoin", "round");
			attr(div1, "class", div1_class_value = "selector " + (/*active*/ ctx[3] === "code" ? "active" : "") + " svelte-dxauv5");
			attr(div2, "class", "selectors svelte-dxauv5");
			attr(div3, "class", "sidenav svelte-dxauv5");
		},
		m(target, anchor) {
			insert(target, div3, anchor);
			append(div3, div2);
			append(div2, div0);
			append(div0, svg0);
			append(svg0, path0);
			append(svg0, rect);
			append(svg0, line0);
			append(svg0, line1);
			append(div0, t0);
			append(div0, span0);
			append(span0, t1);
			append(div2, t2);
			append(div2, div1);
			append(div1, svg1);
			append(svg1, path1);
			append(svg1, path2);
			append(svg1, path3);
			append(div1, t3);
			append(div1, span1);
			append(span1, t4);
			append(div3, t5);
			if_blocks[current_block_type_index].m(div3, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen(div0, "click", /*click_handler*/ ctx[7]),
					listen(div1, "click", /*click_handler_1*/ ctx[8])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (!current || dirty & /*active*/ 8 && div0_class_value !== (div0_class_value = "selector " + (/*active*/ ctx[3] === "visual" ? "active" : "") + " svelte-dxauv5")) {
				attr(div0, "class", div0_class_value);
			}

			if (!current || dirty & /*active*/ 8 && div1_class_value !== (div1_class_value = "selector " + (/*active*/ ctx[3] === "code" ? "active" : "") + " svelte-dxauv5")) {
				attr(div1, "class", div1_class_value);
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(div3, null);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div3);
			if_blocks[current_block_type_index].d();
			mounted = false;
			run_all(dispose);
		}
	};
}

// (96:4) {:else}
function create_else_block(ctx) {
	let visualeditor;
	let updating_content;
	let current;

	function visualeditor_content_binding(value) {
		/*visualeditor_content_binding*/ ctx[10](value);
	}

	let visualeditor_props = {};

	if (/*content*/ ctx[0] !== void 0) {
		visualeditor_props.content = /*content*/ ctx[0];
	}

	visualeditor = new VisualEditor({ props: visualeditor_props });
	binding_callbacks.push(() => bind(visualeditor, "content", visualeditor_content_binding));

	return {
		c() {
			create_component(visualeditor.$$.fragment);
		},
		l(nodes) {
			claim_component(visualeditor.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(visualeditor, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const visualeditor_changes = {};

			if (!updating_content && dirty & /*content*/ 1) {
				updating_content = true;
				visualeditor_changes.content = /*content*/ ctx[0];
				add_flush_callback(() => updating_content = false);
			}

			visualeditor.$set(visualeditor_changes);
		},
		i(local) {
			if (current) return;
			transition_in(visualeditor.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(visualeditor.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(visualeditor, detaching);
		}
	};
}

// (94:4) {#if active === 'code'}
function create_if_block_1(ctx) {
	let jsoneditor;
	let updating_content;
	let current;

	function jsoneditor_content_binding(value) {
		/*jsoneditor_content_binding*/ ctx[9](value);
	}

	let jsoneditor_props = {};

	if (/*content*/ ctx[0] !== void 0) {
		jsoneditor_props.content = /*content*/ ctx[0];
	}

	jsoneditor = new JSONEditor({ props: jsoneditor_props });
	binding_callbacks.push(() => bind(jsoneditor, "content", jsoneditor_content_binding));

	return {
		c() {
			create_component(jsoneditor.$$.fragment);
		},
		l(nodes) {
			claim_component(jsoneditor.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(jsoneditor, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const jsoneditor_changes = {};

			if (!updating_content && dirty & /*content*/ 1) {
				updating_content = true;
				jsoneditor_changes.content = /*content*/ ctx[0];
				add_flush_callback(() => updating_content = false);
			}

			jsoneditor.$set(jsoneditor_changes);
		},
		i(local) {
			if (current) return;
			transition_in(jsoneditor.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(jsoneditor.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(jsoneditor, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let t0;
	let nav;
	let a0;
	let svg0;
	let path0;
	let polyline;
	let path1;
	let t1;
	let t2;
	let a1;
	let t3;
	let span;
	let t4;
	let a2;
	let svg1;
	let path2;
	let circle;
	let line0;
	let line1;
	let t5;
	let t6;
	let a3;
	let svg2;
	let path3;
	let line2;
	let rect;
	let path4;
	let path5;
	let t7;
	let t8;
	let a4;
	let svg3;
	let path6;
	let path7;
	let path8;
	let t9;
	let t10;
	let if_block1_anchor;
	let current;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*showEditor*/ ctx[2]) return create_if_block_2;
		return create_else_block_1;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block0 = current_block_type(ctx);
	let if_block1 = /*showEditor*/ ctx[2] && create_if_block(ctx);

	return {
		c() {
			div = element("div");
			t0 = space();
			nav = element("nav");
			a0 = element("a");
			svg0 = svg_element("svg");
			path0 = svg_element("path");
			polyline = svg_element("polyline");
			path1 = svg_element("path");
			t1 = text("\n    Home");
			t2 = space();
			a1 = element("a");
			if_block0.c();
			t3 = space();
			span = element("span");
			t4 = space();
			a2 = element("a");
			svg1 = svg_element("svg");
			path2 = svg_element("path");
			circle = svg_element("circle");
			line0 = svg_element("line");
			line1 = svg_element("line");
			t5 = text("\n    Add");
			t6 = space();
			a3 = element("a");
			svg2 = svg_element("svg");
			path3 = svg_element("path");
			line2 = svg_element("line");
			rect = svg_element("rect");
			path4 = svg_element("path");
			path5 = svg_element("path");
			t7 = text("\n    Media");
			t8 = space();
			a4 = element("a");
			svg3 = svg_element("svg");
			path6 = svg_element("path");
			path7 = svg_element("path");
			path8 = svg_element("path");
			t9 = text("\n    Logout");
			t10 = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			children(div).forEach(detach);
			t0 = claim_space(nodes);
			nav = claim_element(nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			a0 = claim_element(nav_nodes, "A", { href: true, id: true, class: true });
			var a0_nodes = children(a0);

			svg0 = claim_element(
				a0_nodes,
				"svg",
				{
					xmlns: true,
					class: true,
					width: true,
					height: true,
					viewBox: true,
					"stroke-width": true,
					stroke: true,
					fill: true,
					"stroke-linecap": true,
					"stroke-linejoin": true
				},
				1
			);

			var svg0_nodes = children(svg0);
			path0 = claim_element(svg0_nodes, "path", { stroke: true, d: true, fill: true }, 1);
			children(path0).forEach(detach);
			polyline = claim_element(svg0_nodes, "polyline", { points: true }, 1);
			children(polyline).forEach(detach);
			path1 = claim_element(svg0_nodes, "path", { d: true }, 1);
			children(path1).forEach(detach);
			svg0_nodes.forEach(detach);
			t1 = claim_text(a0_nodes, "\n    Home");
			a0_nodes.forEach(detach);
			t2 = claim_space(nav_nodes);
			a1 = claim_element(nav_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			if_block0.l(a1_nodes);
			a1_nodes.forEach(detach);
			t3 = claim_space(nav_nodes);
			span = claim_element(nav_nodes, "SPAN", { class: true });
			children(span).forEach(detach);
			t4 = claim_space(nav_nodes);
			a2 = claim_element(nav_nodes, "A", { href: true, class: true });
			var a2_nodes = children(a2);

			svg1 = claim_element(
				a2_nodes,
				"svg",
				{
					xmlns: true,
					class: true,
					width: true,
					height: true,
					viewBox: true,
					"stroke-width": true,
					stroke: true,
					fill: true,
					"stroke-linecap": true,
					"stroke-linejoin": true
				},
				1
			);

			var svg1_nodes = children(svg1);
			path2 = claim_element(svg1_nodes, "path", { stroke: true, d: true, fill: true }, 1);
			children(path2).forEach(detach);
			circle = claim_element(svg1_nodes, "circle", { cx: true, cy: true, r: true }, 1);
			children(circle).forEach(detach);
			line0 = claim_element(svg1_nodes, "line", { x1: true, y1: true, x2: true, y2: true }, 1);
			children(line0).forEach(detach);
			line1 = claim_element(svg1_nodes, "line", { x1: true, y1: true, x2: true, y2: true }, 1);
			children(line1).forEach(detach);
			svg1_nodes.forEach(detach);
			t5 = claim_text(a2_nodes, "\n    Add");
			a2_nodes.forEach(detach);
			t6 = claim_space(nav_nodes);
			a3 = claim_element(nav_nodes, "A", { href: true, class: true });
			var a3_nodes = children(a3);

			svg2 = claim_element(
				a3_nodes,
				"svg",
				{
					xmlns: true,
					class: true,
					width: true,
					height: true,
					viewBox: true,
					"stroke-width": true,
					stroke: true,
					fill: true,
					"stroke-linecap": true,
					"stroke-linejoin": true
				},
				1
			);

			var svg2_nodes = children(svg2);
			path3 = claim_element(svg2_nodes, "path", { stroke: true, d: true, fill: true }, 1);
			children(path3).forEach(detach);
			line2 = claim_element(svg2_nodes, "line", { x1: true, y1: true, x2: true, y2: true }, 1);
			children(line2).forEach(detach);

			rect = claim_element(
				svg2_nodes,
				"rect",
				{
					x: true,
					y: true,
					width: true,
					height: true,
					rx: true
				},
				1
			);

			children(rect).forEach(detach);
			path4 = claim_element(svg2_nodes, "path", { d: true }, 1);
			children(path4).forEach(detach);
			path5 = claim_element(svg2_nodes, "path", { d: true }, 1);
			children(path5).forEach(detach);
			svg2_nodes.forEach(detach);
			t7 = claim_text(a3_nodes, "\n    Media");
			a3_nodes.forEach(detach);
			t8 = claim_space(nav_nodes);
			a4 = claim_element(nav_nodes, "A", { href: true, class: true });
			var a4_nodes = children(a4);

			svg3 = claim_element(
				a4_nodes,
				"svg",
				{
					xmlns: true,
					class: true,
					width: true,
					height: true,
					viewBox: true,
					"stroke-width": true,
					stroke: true,
					fill: true,
					"stroke-linecap": true,
					"stroke-linejoin": true
				},
				1
			);

			var svg3_nodes = children(svg3);
			path6 = claim_element(svg3_nodes, "path", { stroke: true, d: true, fill: true }, 1);
			children(path6).forEach(detach);
			path7 = claim_element(svg3_nodes, "path", { d: true }, 1);
			children(path7).forEach(detach);
			path8 = claim_element(svg3_nodes, "path", { d: true }, 1);
			children(path8).forEach(detach);
			svg3_nodes.forEach(detach);
			t9 = claim_text(a4_nodes, "\n    Logout");
			a4_nodes.forEach(detach);
			nav_nodes.forEach(detach);
			t10 = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = empty();
			this.h();
		},
		h() {
			attr(div, "class", "spacer svelte-dxauv5");
			attr(path0, "stroke", "none");
			attr(path0, "d", "M0 0h24v24H0z");
			attr(path0, "fill", "none");
			attr(polyline, "points", "5 12 3 12 12 3 21 12 19 12");
			attr(path1, "d", "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7");
			attr(svg0, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg0, "class", "icon icon-tabler icon-tabler-home-2 svelte-dxauv5");
			attr(svg0, "width", "30");
			attr(svg0, "height", "30");
			attr(svg0, "viewBox", "0 0 24 24");
			attr(svg0, "stroke-width", "2");
			attr(svg0, "stroke", "#2c3e50");
			attr(svg0, "fill", "none");
			attr(svg0, "stroke-linecap", "round");
			attr(svg0, "stroke-linejoin", "round");
			attr(a0, "href", ".");
			attr(a0, "id", "home");
			attr(a0, "class", "svelte-dxauv5");
			attr(a1, "href", ".");
			attr(a1, "class", "svelte-dxauv5");
			attr(span, "class", "gap svelte-dxauv5");
			attr(path2, "stroke", "none");
			attr(path2, "d", "M0 0h24v24H0z");
			attr(path2, "fill", "none");
			attr(circle, "cx", "12");
			attr(circle, "cy", "12");
			attr(circle, "r", "9");
			attr(line0, "x1", "9");
			attr(line0, "y1", "12");
			attr(line0, "x2", "15");
			attr(line0, "y2", "12");
			attr(line1, "x1", "12");
			attr(line1, "y1", "9");
			attr(line1, "x2", "12");
			attr(line1, "y2", "15");
			attr(svg1, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg1, "class", "icon icon-tabler icon-tabler-circle-plus svelte-dxauv5");
			attr(svg1, "width", "30");
			attr(svg1, "height", "30");
			attr(svg1, "viewBox", "0 0 24 24");
			attr(svg1, "stroke-width", "2");
			attr(svg1, "stroke", "#2c3e50");
			attr(svg1, "fill", "none");
			attr(svg1, "stroke-linecap", "round");
			attr(svg1, "stroke-linejoin", "round");
			attr(a2, "href", ".");
			attr(a2, "class", "svelte-dxauv5");
			attr(path3, "stroke", "none");
			attr(path3, "d", "M0 0h24v24H0z");
			attr(path3, "fill", "none");
			attr(line2, "x1", "15");
			attr(line2, "y1", "8");
			attr(line2, "x2", "15.01");
			attr(line2, "y2", "8");
			attr(rect, "x", "4");
			attr(rect, "y", "4");
			attr(rect, "width", "16");
			attr(rect, "height", "16");
			attr(rect, "rx", "3");
			attr(path4, "d", "M4 15l4 -4a3 5 0 0 1 3 0l5 5");
			attr(path5, "d", "M14 14l1 -1a3 5 0 0 1 3 0l2 2");
			attr(svg2, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg2, "class", "icon icon-tabler icon-tabler-photo svelte-dxauv5");
			attr(svg2, "width", "30");
			attr(svg2, "height", "30");
			attr(svg2, "viewBox", "0 0 24 24");
			attr(svg2, "stroke-width", "2");
			attr(svg2, "stroke", "#2c3e50");
			attr(svg2, "fill", "none");
			attr(svg2, "stroke-linecap", "round");
			attr(svg2, "stroke-linejoin", "round");
			attr(a3, "href", ".");
			attr(a3, "class", "svelte-dxauv5");
			attr(path6, "stroke", "none");
			attr(path6, "d", "M0 0h24v24H0z");
			attr(path6, "fill", "none");
			attr(path7, "d", "M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2");
			attr(path8, "d", "M7 12h14l-3 -3m0 6l3 -3");
			attr(svg3, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg3, "class", "icon icon-tabler icon-tabler-logout svelte-dxauv5");
			attr(svg3, "width", "30");
			attr(svg3, "height", "30");
			attr(svg3, "viewBox", "0 0 24 24");
			attr(svg3, "stroke-width", "2");
			attr(svg3, "stroke", "#2c3e50");
			attr(svg3, "fill", "none");
			attr(svg3, "stroke-linecap", "round");
			attr(svg3, "stroke-linejoin", "round");
			attr(a4, "href", ".");
			attr(a4, "class", "svelte-dxauv5");
			attr(nav, "class", "svelte-dxauv5");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			insert(target, t0, anchor);
			insert(target, nav, anchor);
			append(nav, a0);
			append(a0, svg0);
			append(svg0, path0);
			append(svg0, polyline);
			append(svg0, path1);
			append(a0, t1);
			append(nav, t2);
			append(nav, a1);
			if_block0.m(a1, null);
			append(nav, t3);
			append(nav, span);
			append(nav, t4);
			append(nav, a2);
			append(a2, svg1);
			append(svg1, path2);
			append(svg1, circle);
			append(svg1, line0);
			append(svg1, line1);
			append(a2, t5);
			append(nav, t6);
			append(nav, a3);
			append(a3, svg2);
			append(svg2, path3);
			append(svg2, line2);
			append(svg2, rect);
			append(svg2, path4);
			append(svg2, path5);
			append(a3, t7);
			append(nav, t8);
			append(nav, a4);
			append(a4, svg3);
			append(svg3, path6);
			append(svg3, path7);
			append(svg3, path8);
			append(a4, t9);
			insert(target, t10, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert(target, if_block1_anchor, anchor);
			current = true;

			if (!mounted) {
				dispose = [
					listen(a1, "click", prevent_default(/*toggleEditor*/ ctx[5])),
					listen(a4, "click", prevent_default(function () {
						if (is_function(/*$user*/ ctx[4].logout)) /*$user*/ ctx[4].logout.apply(this, arguments);
					}))
				];

				mounted = true;
			}
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;

			if (current_block_type !== (current_block_type = select_block_type(ctx, dirty))) {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(a1, null);
				}
			}

			if (/*showEditor*/ ctx[2]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*showEditor*/ 4) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block1);
			current = true;
		},
		o(local) {
			transition_out(if_block1);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (detaching) detach(t0);
			if (detaching) detach(nav);
			if_block0.d();
			if (detaching) detach(t10);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach(if_block1_anchor);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $user,
		$$unsubscribe_user = noop,
		$$subscribe_user = () => ($$unsubscribe_user(), $$unsubscribe_user = subscribe(user, $$value => $$invalidate(4, $user = $$value)), user);

	$$self.$$.on_destroy.push(() => $$unsubscribe_user());
	let { user } = $$props, { content } = $$props;
	$$subscribe_user();
	let showEditor = false;

	const toggleEditor = () => {
		$$invalidate(2, showEditor = showEditor ? false : true);
	};

	let active = "visual";

	const setActive = selected => {
		$$invalidate(3, active = selected);
	};

	const click_handler = () => setActive("visual");
	const click_handler_1 = () => setActive("code");

	function jsoneditor_content_binding(value) {
		content = value;
		$$invalidate(0, content);
	}

	function visualeditor_content_binding(value) {
		content = value;
		$$invalidate(0, content);
	}

	$$self.$$set = $$props => {
		if ("user" in $$props) $$subscribe_user($$invalidate(1, user = $$props.user));
		if ("content" in $$props) $$invalidate(0, content = $$props.content);
	};

	return [
		content,
		user,
		showEditor,
		active,
		$user,
		toggleEditor,
		setActive,
		click_handler,
		click_handler_1,
		jsoneditor_content_binding,
		visualeditor_content_binding
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { user: 1, content: 0 });
	}
}

export default Component;