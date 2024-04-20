'use strict'

import { buttonSubmit, errorResponses, inputAttributeObject} from "./inputAttribute";
import { returnResponse } from "./server";

/**
 * @function handlesInputData 
 * @description handles input data makes a call to server
 * @param {HTMLInputElement} _inputField
 * @param {HTMLButtonElement} _submitBtn
 */
export async function handleInputData(_inputField: HTMLInputElement, _submitBtn: HTMLButtonElement) {
    let response: Object = {}
    if (_inputField instanceof HTMLInputElement) {
        const value = _inputField.value;
        if (value.length) {
            const button = _submitBtn;
            const APIResponse = returnResponse(value);
            if (APIResponse.responseMessage) {
                alert(APIResponse.responseMessage);
                _inputField.value = '';
                if (APIResponse['disabled'] === true) {
                    button.setAttribute('disabled', String(APIResponse.disabled));
                } else {
                    window.location.replace('https://svelte.dev');
                }
            }
            response = APIResponse;
        } else {
            console.error('No value entered');
            _inputField.classList.add(inputAttributeObject.ERROR_CLASS_NAME);
            _submitBtn.setAttribute('disabled', String(buttonSubmit.DISALBED));
        }
    }
    return response;
}

export function bindData() {
    const inputField = document
      .getElementsByTagName("input")
      .namedItem("input-name-field");
    const submitBtn = document
      .getElementsByTagName("button")
      .namedItem("button-submit");
    if (inputField instanceof HTMLInputElement && submitBtn instanceof HTMLButtonElement) {
        submitBtn.addEventListener('click',function (e){
            e.preventDefault();
            handleInputData(inputField, submitBtn);
        });
    } else {
        console.error(errorResponses);
    }
}

export const handleInput = function () {
    const inputField = document.getElementsByTagName("input").namedItem("input-name-field");
    const submitBtn = document.getElementsByTagName("button").namedItem("button-submit");
    if (inputField instanceof HTMLInputElement && submitBtn instanceof HTMLButtonElement) {
        inputField.addEventListener('blur', function (e){
            const value = inputField.value;
            if (value.length > 0) {
                submitBtn.removeAttribute('disabled');
            }
        });
    }
}