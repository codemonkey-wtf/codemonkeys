import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, c as create_slot, v as validate_slots, a as createEventDispatcher, o as onDestroy, e as element, b as space, f as claim_element, g as children, h as detach_dev, j as claim_space, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, p as listen_dev, u as update_slot, t as transition_in, q as transition_out, r as run_all, w as onMount, x as globals, y as create_component, z as claim_component, A as mount_component, B as destroy_component, C as text, D as claim_text, E as set_data_dev, F as query_selector_all, G as check_outros, H as set_input_value, I as group_outros } from './client.b053219b.js';

/* src/components/Register.svelte generated by Svelte v3.29.0 */
const file = "src/components/Register.svelte";

function create_fragment(ctx) {
	let div2;
	let div0;
	let t;
	let div1;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			t = space();
			div1 = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (default_slot) default_slot.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "modal-background svelte-1dsbof8");
			add_location(div0, file, 67, 2, 1409);
			attr_dev(div1, "class", "modal-content");
			add_location(div1, file, 68, 2, 1461);
			attr_dev(div2, "class", "modal svelte-1dsbof8");
			add_location(div2, file, 66, 0, 1387);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div2, t);
			append_dev(div2, div1);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(window, "keydown", /*handle_keydown*/ ctx[1], false, false, false),
					listen_dev(div0, "click", /*close*/ ctx[0], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			run_all(dispose);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Register", slots, ['default']);
	const dispatch = createEventDispatcher();
	const close = () => dispatch("close");
	let modal;
	let email;

	const handle_keydown = e => {
		if (e.key === "Escape") {
			close();
			return;
		}

		if (e.key === "Tab") {
			// trap focus
			const nodes = modal.querySelectorAll("*");

			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);
			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;
			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;
			tabbable[index].focus();
			e.preverntDefault();
		}
	};

	const previously_focused = typeof document !== "undefined" && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Register> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		onDestroy,
		dispatch,
		close,
		modal,
		email,
		handle_keydown,
		previously_focused
	});

	$$self.$inject_state = $$props => {
		if ("modal" in $$props) modal = $$props.modal;
		if ("email" in $$props) email = $$props.email;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [close, handle_keydown, $$scope, slots];
}

class Register extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Register",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/index.svelte generated by Svelte v3.29.0 */

const { console: console_1 } = globals;
const file$1 = "src/routes/index.svelte";

// (51:2) {#if toggleModal}
function create_if_block_1(ctx) {
	let register;
	let current;

	register = new Register({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	register.$on("close", /*close_handler*/ ctx[6]);

	const block = {
		c: function create() {
			create_component(register.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(register.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(register, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const register_changes = {};

			if (dirty & /*$$scope, email, toggleModal*/ 262) {
				register_changes.$$scope = { dirty, ctx };
			}

			register.$set(register_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(register.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(register.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(register, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(51:2) {#if toggleModal}",
		ctx
	});

	return block;
}

// (52:4) <Register on:close={() => (toggleModal = false)}>
function create_default_slot(ctx) {
	let p;
	let t0;
	let t1;
	let div;
	let input0;
	let t2;
	let input1;
	let t3;
	let input2;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			p = element("p");
			t0 = text("Register to be notified when site goes live!");
			t1 = space();
			div = element("div");
			input0 = element("input");
			t2 = space();
			input1 = element("input");
			t3 = space();
			input2 = element("input");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "Register to be notified when site goes live!");
			p_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			input0 = claim_element(div_nodes, "INPUT", {
				class: true,
				type: true,
				placeholder: true
			});

			div_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			input1 = claim_element(nodes, "INPUT", { type: true, value: true });
			t3 = claim_space(nodes);
			input2 = claim_element(nodes, "INPUT", { type: true, value: true });
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "is-size-3 has-text-info");
			add_location(p, file$1, 52, 6, 1012);
			attr_dev(input0, "class", "input");
			attr_dev(input0, "type", "email");
			attr_dev(input0, "placeholder", "email address");
			add_location(input0, file$1, 53, 25, 1121);
			attr_dev(div, "class", "field");
			add_location(div, file$1, 53, 6, 1102);
			attr_dev(input1, "type", "submit");
			input1.value = "Sign Up";
			add_location(input1, file$1, 54, 6, 1217);
			attr_dev(input2, "type", "reset");
			input2.value = "Cancel";
			add_location(input2, file$1, 55, 6, 1288);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, input0);
			set_input_value(input0, /*email*/ ctx[1]);
			insert_dev(target, t2, anchor);
			insert_dev(target, input1, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, input2, anchor);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[4]),
					listen_dev(input1, "submit", /*toggleSubmit*/ ctx[3], false, false, false),
					listen_dev(input2, "click", /*click_handler*/ ctx[5], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*email*/ 2 && input0.value !== /*email*/ ctx[1]) {
				set_input_value(input0, /*email*/ ctx[1]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(input1);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(input2);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(52:4) <Register on:close={() => (toggleModal = false)}>",
		ctx
	});

	return block;
}

// (70:6) {#if discord !== undefined}
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
			t1 = text("\n          Discord\n          ");
			br1 = element("br");
			t2 = text("Instant Invite!");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, t0_value);
			br0 = claim_element(a_nodes, "BR", {});
			t1 = claim_text(a_nodes, "\n          Discord\n          ");
			br1 = claim_element(a_nodes, "BR", {});
			t2 = claim_text(a_nodes, "Instant Invite!");
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(br0, file$1, 70, 85, 1886);
			add_location(br1, file$1, 72, 10, 1921);
			attr_dev(a, "href", a_href_value = /*discord*/ ctx[0].instant_invite);
			attr_dev(a, "class", "box has-text-centered svelte-11qqid");
			add_location(a, file$1, 70, 8, 1809);
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
		source: "(70:6) {#if discord !== undefined}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t0;
	let section;
	let t1;
	let div0;
	let t2;
	let div2;
	let div1;
	let img;
	let img_src_value;
	let t3;
	let p;
	let a;
	let t4;
	let t5;
	let t6;
	let div3;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*toggleModal*/ ctx[2] && create_if_block_1(ctx);
	let if_block1 = /*discord*/ ctx[0] !== undefined && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			if (if_block0) if_block0.c();
			t1 = space();
			div0 = element("div");
			t2 = space();
			div2 = element("div");
			div1 = element("div");
			img = element("img");
			t3 = space();
			p = element("p");
			a = element("a");
			t4 = text("< register >");
			t5 = space();
			if (if_block1) if_block1.c();
			t6 = space();
			div3 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-m6o6gu\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			if (if_block0) if_block0.l(section_nodes);
			t1 = claim_space(section_nodes);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t2 = claim_space(section_nodes);
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

			t3 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			a = claim_element(p_nodes, "A", { href: true });
			var a_nodes = children(a);
			t4 = claim_text(a_nodes, "< register >");
			a_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			if (if_block1) if_block1.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t6 = claim_space(section_nodes);
			div3 = claim_element(section_nodes, "DIV", { class: true });
			children(div3).forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "CodeMonkeyWTF";
			attr_dev(div0, "class", "hero-head");
			add_location(div0, file$1, 64, 2, 1456);
			attr_dev(img, "class", "logo_huge svelte-11qqid");
			if (img.src !== (img_src_value = "code-monkeys-orange-dark-large.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "code monkey dot w t f logo");
			attr_dev(img, "width", "250");
			add_location(img, file$1, 67, 6, 1542);
			attr_dev(a, "href", "#");
			add_location(a, file$1, 68, 76, 1730);
			attr_dev(p, "class", "is-align-self-center");
			add_location(p, file$1, 68, 6, 1660);
			attr_dev(div1, "class", "container svelte-11qqid");
			add_location(div1, file$1, 66, 4, 1512);
			attr_dev(div2, "class", "hero body svelte-11qqid");
			add_location(div2, file$1, 65, 2, 1484);
			attr_dev(div3, "class", "hero-foot");
			add_location(div3, file$1, 76, 2, 1981);
			attr_dev(section, "class", "hero is-fullheight is-bold svelte-11qqid");
			add_location(section, file$1, 49, 0, 887);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			if (if_block0) if_block0.m(section, null);
			append_dev(section, t1);
			append_dev(section, div0);
			append_dev(section, t2);
			append_dev(section, div2);
			append_dev(div2, div1);
			append_dev(div1, img);
			append_dev(div1, t3);
			append_dev(div1, p);
			append_dev(p, a);
			append_dev(a, t4);
			append_dev(div1, t5);
			if (if_block1) if_block1.m(div1, null);
			append_dev(section, t6);
			append_dev(section, div3);
			current = true;

			if (!mounted) {
				dispose = listen_dev(p, "click", /*click_handler_1*/ ctx[7], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*toggleModal*/ ctx[2]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*toggleModal*/ 4) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(section, t1);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*discord*/ ctx[0] !== undefined) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(div1, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const URL = "https://discordapp.com/api/guilds/698177341586800672/widget.json";

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	let discord;
	let email;
	let toggleModal = false;

	onMount(async function () {
		const response = await fetch(URL);
		$$invalidate(0, discord = await response.json());
		console.log(discord);
	});

	const toggleSubmit = () => {
		$$invalidate(1, email = "");
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		email = this.value;
		$$invalidate(1, email);
	}

	const click_handler = () => {
		$$invalidate(1, email = "");
		$$invalidate(2, toggleModal = false);
	};

	const close_handler = () => $$invalidate(2, toggleModal = false);
	const click_handler_1 = () => $$invalidate(2, toggleModal = true);

	$$self.$capture_state = () => ({
		onMount,
		Register,
		URL,
		discord,
		email,
		toggleModal,
		toggleSubmit
	});

	$$self.$inject_state = $$props => {
		if ("discord" in $$props) $$invalidate(0, discord = $$props.discord);
		if ("email" in $$props) $$invalidate(1, email = $$props.email);
		if ("toggleModal" in $$props) $$invalidate(2, toggleModal = $$props.toggleModal);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		discord,
		email,
		toggleModal,
		toggleSubmit,
		input0_input_handler,
		click_handler,
		close_handler,
		click_handler_1
	];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYWFiM2Y4ZWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1JlZ2lzdGVyLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciwgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJ1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKClcbiAgY29uc3QgY2xvc2UgPSAoKSA9PiBkaXNwYXRjaCgnY2xvc2UnKVxuXG4gIGxldCBtb2RhbFxuICBsZXQgZW1haWxcblxuICBjb25zdCBoYW5kbGVfa2V5ZG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgY2xvc2UoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSAnVGFiJykge1xuICAgICAgLy8gdHJhcCBmb2N1c1xuICAgICAgY29uc3Qgbm9kZXMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCcqJylcbiAgICAgIGNvbnN0IHRhYmJhYmxlID0gQXJyYXkuZnJvbShub2RlcykuZmlsdGVyKChuKSA9PiBuLnRhYkluZGV4ID49IDApXG5cbiAgICAgIGxldCBpbmRleCA9IHRhYmJhYmxlLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudClcbiAgICAgIGlmIChpbmRleCA9PT0gLTEgJiYgZS5zaGlmdEtleSkgaW5kZXggPSAwXG5cbiAgICAgIGluZGV4ICs9IHRhYmJhYmxlLmxlbmd0aCArIChlLnNoaWZ0S2V5ID8gLTEgOiAxKVxuICAgICAgaW5kZXggJT0gdGFiYmFibGUubGVuZ3RoXG4gICAgICB0YWJiYWJsZVtpbmRleF0uZm9jdXMoKVxuICAgICAgZS5wcmV2ZXJudERlZmF1bHQoKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHByZXZpb3VzbHlfZm9jdXNlZCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuXG4gIGlmIChwcmV2aW91c2x5X2ZvY3VzZWQpIHtcbiAgICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgICAgcHJldmlvdXNseV9mb2N1c2VkLmZvY3VzKClcbiAgICB9KVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAubW9kYWwtYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cblxuICAubW9kYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA0ZW0pO1xuICAgIG1heC13aWR0aDogMzJlbTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNGVtKTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6d2luZG93IG9uOmtleWRvd249e2hhbmRsZV9rZXlkb3dufSAvPlxuXG48ZGl2IGNsYXNzPVwibW9kYWxcIj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tncm91bmRcIiBvbjpjbGljaz17Y2xvc2V9IC8+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgPHNsb3QgLz5cbiAgPC9kaXY+XG48L2Rpdj5cbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnXG4gIGltcG9ydCBSZWdpc3RlciBmcm9tICcuLi9jb21wb25lbnRzL1JlZ2lzdGVyLnN2ZWx0ZSdcbiAgY29uc3QgVVJMID0gJ2h0dHBzOi8vZGlzY29yZGFwcC5jb20vYXBpL2d1aWxkcy82OTgxNzczNDE1ODY4MDA2NzIvd2lkZ2V0Lmpzb24nXG4gIGxldCBkaXNjb3JkXG4gIGxldCBlbWFpbFxuICBsZXQgdG9nZ2xlTW9kYWwgPSBmYWxzZVxuICBvbk1vdW50KGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTClcbiAgICBkaXNjb3JkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgY29uc29sZS5sb2coZGlzY29yZClcbiAgfSlcblxuICBjb25zdCB0b2dnbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgZW1haWwgPSAnJ1xuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmhlcm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjJkMzU7XG4gIH1cblxuICAuYm94IHtcbiAgICBjb2xvcjogeWVsbG93O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQ3NWI7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubG9nb19odWdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5Db2RlTW9ua2V5V1RGPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uIGNsYXNzPVwiaGVybyBpcy1mdWxsaGVpZ2h0IGlzLWJvbGRcIj5cbiAgeyNpZiB0b2dnbGVNb2RhbH1cbiAgICA8UmVnaXN0ZXIgb246Y2xvc2U9eygpID0+ICh0b2dnbGVNb2RhbCA9IGZhbHNlKX0+XG4gICAgICA8cCBjbGFzcz1cImlzLXNpemUtMyBoYXMtdGV4dC1pbmZvXCI+UmVnaXN0ZXIgdG8gYmUgbm90aWZpZWQgd2hlbiBzaXRlIGdvZXMgbGl2ZSE8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj48aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWwgYWRkcmVzc1wiIGJpbmQ6dmFsdWU9e2VtYWlsfSAvPjwvZGl2PlxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNpZ24gVXBcIiBvbjpzdWJtaXQ9e3RvZ2dsZVN1Ym1pdH0gLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicmVzZXRcIlxuICAgICAgICB2YWx1ZT1cIkNhbmNlbFwiXG4gICAgICAgIG9uOmNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgZW1haWwgPSAnJ1xuICAgICAgICAgIHRvZ2dsZU1vZGFsID0gZmFsc2VcbiAgICAgICAgfX0gLz5cbiAgICA8L1JlZ2lzdGVyPlxuICB7L2lmfVxuICA8ZGl2IGNsYXNzPVwiaGVyby1oZWFkXCIgLz5cbiAgPGRpdiBjbGFzcz1cImhlcm8gYm9keVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJsb2dvX2h1Z2VcIiBzcmM9XCJjb2RlLW1vbmtleXMtb3JhbmdlLWRhcmstbGFyZ2Uuc3ZnXCIgYWx0PVwiY29kZSBtb25rZXkgZG90IHcgdCBmIGxvZ29cIiB3aWR0aD1cIjI1MFwiIC8+XG4gICAgICA8cCBjbGFzcz1cImlzLWFsaWduLXNlbGYtY2VudGVyXCIgb246Y2xpY2s9eygpID0+ICh0b2dnbGVNb2RhbCA9IHRydWUpfT48YSBocmVmPVwiI1wiPiZsdCByZWdpc3RlciAmZ3Q8L2E+PC9wPlxuICAgICAgeyNpZiBkaXNjb3JkICE9PSB1bmRlZmluZWR9XG4gICAgICAgIDxhIGhyZWY9e2Rpc2NvcmQuaW5zdGFudF9pbnZpdGV9IGNsYXNzPVwiYm94IGhhcy10ZXh0LWNlbnRlcmVkXCI+e2Rpc2NvcmQubmFtZX08YnIgLz5cbiAgICAgICAgICBEaXNjb3JkXG4gICAgICAgICAgPGJyIC8+SW5zdGFudCBJbnZpdGUhPC9hPlxuICAgICAgey9pZn1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJoZXJvLWZvb3RcIiAvPlxuPC9zZWN0aW9uPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFnRTJCLEdBQWM7eUNBR0MsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FoRXZDLFFBQVEsR0FBRyxxQkFBcUI7T0FDaEMsS0FBSyxTQUFTLFFBQVEsQ0FBQyxPQUFPO0tBRWhDLEtBQUs7S0FDTCxLQUFLOztPQUVILGNBQWMsR0FBSSxDQUFDO01BQ25CLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUTtHQUNwQixLQUFLOzs7O01BSUgsQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLOztTQUVYLEtBQUssR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRzs7U0FDbEMsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBRSxDQUFDLElBQUssQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDO09BRTVELEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhO09BQy9DLEtBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLEdBQUcsQ0FBQztHQUV6QyxLQUFLLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDO0dBQy9DLEtBQUssSUFBSSxRQUFRLENBQUMsTUFBTTtHQUN4QixRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUs7R0FDckIsQ0FBQyxDQUFDLGVBQWU7Ozs7T0FJZixrQkFBa0IsVUFBVSxRQUFRLEtBQUssV0FBVyxJQUFJLFFBQVEsQ0FBQyxhQUFhOztLQUVoRixrQkFBa0I7RUFDcEIsU0FBUztHQUNQLGtCQUFrQixDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNDbUJxRSxHQUFLOzs7Ozs7Ozs7bURBQ2xELEdBQVk7Ozs7Ozs7O3lEQURpQyxHQUFLO3NDQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFpQmhDLEdBQU8sSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFBbkUsR0FBTyxJQUFDLGNBQWM7Ozs7Ozs7Ozs7Ozs7cUVBQWlDLEdBQU8sSUFBQyxJQUFJOzs2RUFBbkUsR0FBTyxJQUFDLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBcEJoQyxHQUFXOzZCQW1CUCxHQUFPLFFBQUssU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFuQnpCLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQW1CUCxHQUFPLFFBQUssU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWxFeEIsR0FBRyxHQUFHLGtFQUFrRTs7Ozs7S0FDMUUsT0FBTztLQUNQLEtBQUs7S0FDTCxXQUFXLEdBQUcsS0FBSzs7Q0FDdkIsT0FBTztRQUNDLFFBQVEsU0FBUyxLQUFLLENBQUMsR0FBRztrQkFDaEMsT0FBTyxTQUFTLFFBQVEsQ0FBQyxJQUFJO0VBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTzs7O09BR2YsWUFBWTtrQkFDaEIsS0FBSyxHQUFHLEVBQUU7Ozs7Ozs7Ozs7RUF1Q3FGLEtBQUs7Ozs7O2tCQU05RixLQUFLLEdBQUcsRUFBRTtrQkFDVixXQUFXLEdBQUcsS0FBSzs7OzZDQVRFLFdBQVcsR0FBRyxLQUFLOytDQWlCSyxXQUFXLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
