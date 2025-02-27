import { c as createComponent, a as createAstro, m as maybeRenderHead, b as renderTemplate, h as renderSlot, r as renderComponent, d as addAttribute, i as renderScript, j as renderHead } from './astro/server_BU000MHX.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Cr1wnaeT.mjs';

const $$Astro$2 = createAstro();
const $$H1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$H1;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-6xl text-teal-900 font-bold mb-16">${text}</h1>`;
}, "C:/Repos/magical-meteor/src/components/H1.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="px-24 max-w-7xl mx-auto w-full max-sm:px-5"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "C:/Repos/magical-meteor/src/components/Main.astro", void 0);

const logo = new Proxy({"src":"/_astro/heartbeat.BsDViZ-7.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Repos/magical-meteor/src/assets/heartbeat.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between items-center px-24 py-12 max-sm:px-5 max-sm:py-10 max-w-7xl w-full mx-auto"> <a href="/" class="flex items-center gap-x-4"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "width": 60, "height": 60, "alt": "heartbeat icon", "class": "rounded-2xl aspect-thumbnail object-cover" })} <span class="text-white text-lg">Home</span> </a> <p class="uppercase text-3xl text-zinc-900">Blog</p> <ul class="flex gap-x-8"> <li><a href="/" class="text-teal-900 font-bold">Home</a></li> <li><a href="/about" class="text-teal-900 font-bold">About</a></li> <li><a href="/blog" class="text-teal-900 font-bold">Blog</a></li> </ul> </header>`;
}, "C:/Repos/magical-meteor/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Repos/magical-meteor/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Repos/magical-meteor/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "A community of music producers and enthusiasts",
    image = "/image/band.jpg"
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta property="og:image"${addAttribute(image, "content")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<title>${title}</title>${renderHead()}</head> <body class="min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Repos/magical-meteor/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Main as a, $$H1 as b };
