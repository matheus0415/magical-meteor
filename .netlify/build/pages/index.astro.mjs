import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_BU000MHX.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Main, b as $$H1 } from '../chunks/Layout_C_L4Hqkx.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rhythm Nation Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Rhythm Nation" })} ` })} ` })}`;
}, "C:/Repos/magical-meteor/src/pages/index.astro", void 0);

const $$file = "C:/Repos/magical-meteor/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
