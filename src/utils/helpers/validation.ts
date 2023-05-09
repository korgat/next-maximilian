export function isValidTitle(str: string) {
  const regex = /^[a-zA-Z\s.,]+$/;
  return regex.test(str);
}
export function isValidDate(str: string) {
  const regex = /^\d{4}-\d{2}-\d{2}$/i;
  return regex.test(str);
}
export function isValidImage(str: string) {
  const regex = /^https:\/\/wallpapercave\.com\//i;
  return regex.test(str);
}
export function isValidEmail(str: string) {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(str);
}
