export function scrollIntoView(id: string): void {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
   element.scrollIntoView({ behavior: 'smooth' });
}