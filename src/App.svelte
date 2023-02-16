<script lang="ts">
  import { LowSync } from "lowdb";
  import { LocalStorage } from "lowdb/browser";

  const adapter = new LocalStorage("stotchesFarmed");
  const stotchesFarmed = new LowSync(adapter);

  stotchesFarmed.read();
  stotchesFarmed.data ||= 0;

  function farmStotch() {
    stotchesFarmed.data++;
    stotchesFarmed.write();
  }
</script>

<main>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg
          >
        </label>
        <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Homepage</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl">Stotch clicker</a>
    </div>
    <div class="navbar-end">
      <div class="avatar">
        <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="stotch-banana.png" />
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-8">
    <div class="prose flex items-center flex-col">
      <button on:click={farmStotch}>
        <img src="stotch-sit.png" width="256" />
        <span>Click me!</span>
      </button>
      <h2>{stotchesFarmed.data} stotches farmed!</h2>
    </div>
  </div>
  <div class="btm-nav">
    <button>
      <span class="btm-nav-label">Discovered stotches</span>
    </button>
    <button class="active">
      <img src="stotch-head.png" width="32" />
      <span class="btm-nav-label">Stotch farm</span>
    </button>
    <button>
      <span class="btm-nav-label">Statics</span>
    </button>
  </div>
</main>

<style>
</style>
