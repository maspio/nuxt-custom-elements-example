<template>
  <div class="custom-elements-example__container">
    <fieldset class="custom-elements-example__fieldset">
      <legend>ZHB Bookslider</legend>
      <div>
        <client-only>
          <ZhbBookslider
            debug="true"
            view-selector="false"
            filter-selector="false"
            view-pre="376"
            height="333"
            breakpoints="{s:111px,m:222px,l:333px}"
          />
        </client-only>
      </div>
    </fieldset>
  </div>
</template>

<script>

import ZhbBookslider from '@/components/ZhbBookslider';
export default {
  components: { ZhbBookslider }
};

</script>
