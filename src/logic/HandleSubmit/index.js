export const HandleSubmit = function (e) {
  e.preventDefault();
  const formData = e.target.querySelectorAll('input');
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let data = {};
  let errors = {};
  //general validation
  formData.forEach((input) => {
    if (input.value) {
      data[input.name] = input.value;
      input.dataset.valid = true;
      input.nextElementSibling.innerHTML =
        '<span class="text-green-600">Ok</span>';
    } else {
      input.dataset.valid = false;
      errors[input.name] = {
        error: 'this field is required',
      };
      input.nextElementSibling.innerHTML =
        '<span class="text-red-700">this field is require</span>';
    }
  });

  //Email validation
  if (emailRegex.test(formData[1].value)) {
    formData[1].nextElementSibling.innerHTML =
      '<span class="text-green-600">Ok</span>';
  } else if (!emailRegex.test(formData[1].value) && formData[1].value) {
    formData[1].dataset.valid = false;
    formData[1].nextElementSibling.innerHTML =
      '<span class="text-red-600">Email is not valid</span>';
  }
  //password validation
  if (formData[2].value === formData[3].value && formData[2].value) {
    formData[2].nextElementSibling.innerHTML =
      '<span class="text-green-600">Ok</span>';
    formData[3].nextElementSibling.innerHTML =
      '<span class="text-green-600">Ok</span>';
  } else if (formData[2].value !== formData[3].value) {
    formData[2].dataset.valid = false;
    formData[3].dataset.valid = false;
    formData[2].nextElementSibling.innerHTML =
      '<span class="text-red-600">The password confirmation does not match </span>';
    formData[3].nextElementSibling.innerHTML =
      '<span class="text-red-600"></span>';
  }
  data.id = Date.now();
  let isValid = [...formData].every((input) => input.dataset.valid === 'true');
  console.log(data);
};

window.HandleSubmit = HandleSubmit;
