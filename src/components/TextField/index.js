export const TextField = ({
  name,
  placeholder = '',
  labelText = '',
  helperText = '',
}) => {
  let textField = `<div class="w-full flex flex-col mt-3">
    <label for=${name} class="dark:text-colorText text-gray-500"
      >${labelText}</label
    >
    <input
    name=${name}
    data-valid=false
    id=${name}
    type="text"
    class="w-full h-8 border border-colorText rounded-[3px] bg-transparent px-2 outline-none"
    placeholder="${placeholder}"
  />
  <p>${helperText}<p/>
  </div>`;

  return textField;
};
