export const scrollComponent = (scrollComponentRef) => {
    scrollComponentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
}