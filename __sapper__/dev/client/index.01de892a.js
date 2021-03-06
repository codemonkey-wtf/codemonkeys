import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, o as onMount, g as globals, e as element, t as text, c as claim_element, a as children, b as claim_text, f as detach_dev, h as add_location, j as attr_dev, k as insert_dev, l as append_dev, m as set_data_dev, n as space, q as query_selector_all, p as claim_space, r as noop } from './client.1d1a4a52.js';

/* src/routes/index.svelte generated by Svelte v3.29.0 */

const { console: console_1 } = globals;
const file = "src/routes/index.svelte";

// (40:8) {#if discord !== undefined}
function create_if_block(ctx) {
	let a;
	let t0_value = /*discord*/ ctx[0].name + "";
	let t0;
	let br0;
	let t1;
	let br1;
	let t2;
	let a_href_value;

	const block = {
		c: function create() {
			a = element("a");
			t0 = text(t0_value);
			br0 = element("br");
			t1 = text(" Discord ");
			br1 = element("br");
			t2 = text("Instant Invite!");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			br0 = claim_element(a_nodes, "BR", {});
			t1 = claim_text(a_nodes, " Discord ");
			br1 = claim_element(a_nodes, "BR", {});
			t2 = claim_text(a_nodes, "Instant Invite!");
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(br0, file, 40, 87, 929);
			add_location(br1, file, 40, 101, 943);
			attr_dev(a, "href", a_href_value = /*discord*/ ctx[0].instant_invite);
			attr_dev(a, "class", "box has-text-centered svelte-cvon8b");
			add_location(a, file, 40, 10, 852);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, t0);
			append_dev(a, br0);
			append_dev(a, t1);
			append_dev(a, br1);
			append_dev(a, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*discord*/ 1 && t0_value !== (t0_value = /*discord*/ ctx[0].name + "")) set_data_dev(t0, t0_value);

			if (dirty & /*discord*/ 1 && a_href_value !== (a_href_value = /*discord*/ ctx[0].instant_invite)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(40:8) {#if discord !== undefined}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let section;
	let div0;
	let t1;
	let div2;
	let div1;
	let img;
	let img_src_value;
	let t2;
	let t3;
	let div3;
	let if_block = /*discord*/ ctx[0] !== undefined && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			div0 = element("div");
			t1 = space();
			div2 = element("div");
			div1 = element("div");
			img = element("img");
			t2 = space();
			if (if_block) if_block.c();
			t3 = space();
			div3 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-m6o6gu\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t1 = claim_space(section_nodes);
			div2 = claim_element(section_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			img = claim_element(div1_nodes, "IMG", {
				class: true,
				src: true,
				alt: true,
				width: true
			});

			t2 = claim_space(div1_nodes);
			if (if_block) if_block.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div3 = claim_element(section_nodes, "DIV", { class: true });
			children(div3).forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "CodeMonkeyWTF";
			attr_dev(div0, "class", "hero-head");
			add_location(div0, file, 35, 2, 611);
			attr_dev(img, "class", "hero_huge");
			if (img.src !== (img_src_value = "code-monkeys-orange-dark-large.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "cartoon monkey logo");
			attr_dev(img, "width", "250");
			add_location(img, file, 38, 8, 703);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 37, 4, 671);
			attr_dev(div2, "class", "hero body svelte-cvon8b");
			add_location(div2, file, 36, 2, 643);
			attr_dev(div3, "class", "hero-foot");
			add_location(div3, file, 44, 2, 1004);
			attr_dev(section, "class", "hero is-fullheight is-bold svelte-cvon8b");
			add_location(section, file, 34, 0, 564);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, div0);
			append_dev(section, t1);
			append_dev(section, div2);
			append_dev(div2, div1);
			append_dev(div1, img);
			append_dev(div1, t2);
			if (if_block) if_block.m(div1, null);
			append_dev(section, t3);
			append_dev(section, div3);
		},
		p: function update(ctx, [dirty]) {
			if (/*discord*/ ctx[0] !== undefined) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div1, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			if (if_block) if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const URL = "https://discordapp.com/api/guilds/698177341586800672/widget.json";

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	let discord;

	onMount(async function () {
		const response = await fetch(URL);
		$$invalidate(0, discord = await response.json());
		console.log(discord);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ onMount, URL, discord });

	$$self.$inject_state = $$props => {
		if ("discord" in $$props) $$invalidate(0, discord = $$props.discord);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [discord];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDFkZTg5MmEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7b25Nb3VudH0gZnJvbSAnc3ZlbHRlJztcbiAgY29uc3QgVVJMID0gICdodHRwczovL2Rpc2NvcmRhcHAuY29tL2FwaS9ndWlsZHMvNjk4MTc3MzQxNTg2ODAwNjcyL3dpZGdldC5qc29uJztcbiAgbGV0IGRpc2NvcmRcblxub25Nb3VudChhc3luYyBmdW5jdGlvbigpe1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCk7XG4gIGRpc2NvcmQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKGRpc2NvcmQpXG59KVxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuaGVybyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MmQzNTtcbiAgfVxuXG4gIC5ib3gge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzNDc1YjtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5sb2dvX2h1Z2Uge1xuICAgIG1hcmdpbjogYXV0byBhdXRvIDVyZW0gYXV0bztcbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+Q29kZU1vbmtleVdURjwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbiBjbGFzcz1cImhlcm8gaXMtZnVsbGhlaWdodCBpcy1ib2xkXCI+XG4gIDxkaXYgY2xhc3M9XCJoZXJvLWhlYWRcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImhlcm8gYm9keVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImhlcm9faHVnZVwiIHNyYz1cImNvZGUtbW9ua2V5cy1vcmFuZ2UtZGFyay1sYXJnZS5zdmdcIiBhbHQ9XCJjYXJ0b29uIG1vbmtleSBsb2dvXCIgd2lkdGg9MjUwIC8+XG4gICAgICAgIHsjaWYgZGlzY29yZCAhPT0gdW5kZWZpbmVkfVxuICAgICAgICAgIDxhIGhyZWY9e2Rpc2NvcmQuaW5zdGFudF9pbnZpdGV9IGNsYXNzPVwiYm94IGhhcy10ZXh0LWNlbnRlcmVkXCI+e2Rpc2NvcmQubmFtZX08YnIvPiBEaXNjb3JkIDxici8+SW5zdGFudCBJbnZpdGUhPC9hPlxuICAgICAgICB7L2lmfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImhlcm8tZm9vdFwiPjwvZGl2PlxuPC9zZWN0aW9uPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7NEJBd0MwRSxHQUFPLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBQW5FLEdBQU8sSUFBQyxjQUFjOzs7Ozs7Ozs7Ozs7O3FFQUFpQyxHQUFPLElBQUMsSUFBSTs7NkVBQW5FLEdBQU8sSUFBQyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFENUIsR0FBTyxRQUFLLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQUFyQixHQUFPLFFBQUssU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BckMxQixHQUFHLEdBQUksa0VBQWtFOzs7OztLQUMzRSxPQUFPOztDQUViLE9BQU87UUFDQyxRQUFRLFNBQVMsS0FBSyxDQUFDLEdBQUc7a0JBQ2hDLE9BQU8sU0FBUyxRQUFRLENBQUMsSUFBSTtFQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
