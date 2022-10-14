const PAGE_QUERY =
  '*[_type == "page" && templateUUID == $uuid] {...,cardComponent->{...,image1{asset->}},heroComponent->{...,image{asset->}},submitForm->}';
const HERO_QUERY = `*[_type == "hero"] {..., image{asset->}}`;
const CARD_QUERY = `*[_type == "card"] {..., image1{asset->}}`;

export { PAGE_QUERY, HERO_QUERY, CARD_QUERY };
