export const HandleMood = () => {
  const toggle = document.getElementById('checkbox');
  toggle.addEventListener('change', () => {
    toggle.checked
      ? document.childNodes[1].classList.add('dark')
      : document.childNodes[1].classList.remove('dark');
  });
};
