
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');
const DATAFORM_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmin);
form.addEventListener('input', throttle(onTextareaInput, 500));

let formValues = {
    email: "",
    message: "",
};

populateDataFormOutput();

function onFormSubmin(e) {
    e.preventDefault();

    const {
        elements: { email, message },
    } = e.currentTarget;
    const currentData = load(DATAFORM_KEY);

    if (email.value === '' || message.value === '') {
        alert('Please fill in all the fields!');
    } else {
        console.log(currentData);

        e.currentTarget.reset();
        localStorage.removeItem(DATAFORM_KEY);
    }
}

function onTextareaInput() {
    formValues.email = input.value;
    formValues.message = textarea.value;

    save(DATAFORM_KEY, formValues);
}

function populateDataFormOutput() {
    const dataForm = load(DATAFORM_KEY);
    if (dataForm === undefined) {
        input.value = '';
        textarea.value = '';
    } else {
        input.value = dataForm.email;
        textarea.value = dataForm.message;
    }
}

function save(key, value) {
    try {
        const serializedState = JSON.stringify(value);
        localStorage.setItem(key, serializedState);
    } catch (error) {
        console.error('Set state error: ', error.message);
    }

}

function load(key) {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error('Get state error: ', error.message);
    }
}