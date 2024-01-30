export default function canIterate(item) {
  return item[Symbol.iterator] ? true : false;
}
