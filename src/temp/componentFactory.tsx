import loadable from 'react-loadable-visibility/loadable-components';

// Do not modify anything within the `<auto-generated-imports />` comments.
// The content within those comments is automatically generated by
// the `/scripts/generate-component-factory.js` script.

// <auto-generated-imports>


import {
CtaBlock,
CtaSection,
Hero,
PricingSection,
TeaserSection,
WaveSplitter
} from '../components';

const components = new Map();
components.set('CtaBlock', CtaBlock);
components.set('CtaSection', CtaSection);
components.set('Hero', Hero);

// NOTE: 'import' paths _must_ be static in order for webpack to be able to analyze them at build time.
components.set('MapBlock', loadable(() => import(/* webpackChunkName: "MapBlock" */'../components/MapBlock')))
components.set('PricingSection', PricingSection);

// NOTE: 'import' paths _must_ be static in order for webpack to be able to analyze them at build time.
components.set('Speakers', loadable(() => import(/* webpackChunkName: "Speakers" */'../components/Speakers')))
components.set('TeaserSection', TeaserSection);

// NOTE: 'import' paths _must_ be static in order for webpack to be able to analyze them at build time.
components.set('VideoBlock', loadable(() => import(/* webpackChunkName: "VideoBlock" */'../components/VideoBlock')))
components.set('WaveSplitter', WaveSplitter);

// </auto-generated-imports>


export default function componentFactory(componentName: string) {
  return components.get(componentName);
}
