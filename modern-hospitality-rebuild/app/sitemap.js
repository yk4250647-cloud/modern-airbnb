import {properties} from '../data/properties';
export default function sitemap(){const base='https://example.com';return [{url:base,lastModified:new Date()},{url:`${base}/properties`,lastModified:new Date()},{url:`${base}/about`,lastModified:new Date()},{url:`${base}/contact`,lastModified:new Date()},...properties.map(p=>({url:`${base}/properties/${p.slug}`,lastModified:new Date()}))];}
