<script lang="ts">
  import { handleInput } from "./index.js";
  import { inputAttributeObject, buttonSubmit } from "./inputAttribute.js";
  handleInput();
</script>

<div class={inputAttributeObject.FORM_ROW_PARENT_CLASS}>
  <input
    placeholder="Text"
    type="text"
    name={inputAttributeObject.NAME_ATTRIBUTE}
    class={inputAttributeObject.CLASS_NAME}
    id={inputAttributeObject.ID_ATTRIBUTE}
  />
</div>

<button
  type="button"
  class={buttonSubmit.BUTTON_CLASS}
  id={buttonSubmit.BUTTON_ID}
  disabled={buttonSubmit.DISALBED}
>
  {buttonSubmit.BUTTON_INNER_TEXT}
</button>

<style lang="scss">
  @use "./defaultCSSTokens.scss" as designTokens;

  input {
    padding: designTokens.$defaultInputPadding;
    border-radius: designTokens.$defaultBorderRadius;
    border-color: designTokens.$defaultButtonBackground;
  }
  #button-submit {
    &:disabled {
      background-color: designTokens.$defaultButtonDisabledColor;
      cursor: designTokens.$cursorTypeDisabled;
    }
    &:hover {
      zoom: designTokens.$onHoverValue;
      border-color: none;
    }
    padding: designTokens.$defaultPadding;
    width: 100%;
    margin-top: designTokens.$defaultMarginValue;
    background-color: designTokens.$defaultButtonBackground;
    color: designTokens.$defaultButtonColor;
  }
</style>
