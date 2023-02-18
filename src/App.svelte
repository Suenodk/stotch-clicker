<script lang="ts">
  import { LowSync } from "lowdb";
  import { LocalStorage } from "lowdb/browser";
  import { onMount } from "svelte";
  import Appbar from "./lib/Appbar.svelte";
  import Navbar from "./lib/Navbar.svelte";

  const adapter = new LocalStorage("stotchesFarmed");
  const stotchesFarmed: LowSync<number> = new LowSync(adapter);

  stotchesFarmed.read();
  stotchesFarmed.data ||= 0;

  function farmStotch() {
    stotchesFarmed.data++;
    stotchesFarmed.write();
  }

  let readerStotchProgressIncrement = 0.1;
  let readerStotchProgress = 0;

  const updateLoop = (timestamp) => {
    readerStotchProgress += readerStotchProgressIncrement;

    if(readerStotchProgress >= 100) {
      readerStotchProgress = 0;
    }

    window.requestAnimationFrame(updateLoop);
  }

  onMount(() => {
    window.requestAnimationFrame(updateLoop);
  });
</script>

<main>
  <Appbar />
  <div class="flex flex-col items-center px-8">
    <div class="flex items-center self-start">
      <div class="prose flex flex-col">
        <h4>Reader stotch</h4>
        <progress class="progress progress-success w-56" value={readerStotchProgress} max="100" />
      </div>
      <div class="avatar ml-8">
        <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="stotch-read.png" />
        </div>
      </div>
    </div>
    <div class="prose flex justify-center mt-8">
      <div class="flex items-center flex-col">
        <button on:click={farmStotch}>
          <img src="stotch-sit.png" width="256" />
          <span>Click me!</span>
        </button>
        <h2>{stotchesFarmed.data} stotches farmed!</h2>
      </div>
    </div>
  </div>
  <Navbar />
</main>

<style>
</style>
