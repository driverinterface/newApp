<script lang="ts">
  import { handleInput } from "./index.ts";
  import { inputAttributeObject, buttonSubmit } from "./inputAttribute.ts";
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
