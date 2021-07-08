<script>
  export let data = []
</script>

<nav>
  {#each data as cluster}
    <ul>
      {#each cluster as project}
        <li>
          <a href="#">
            <strong>{project.title}</strong>
            <br />
            {project.client}
          </a>
        </li>
      {/each}
    </ul>
  {/each}
</nav>

<style>
  ul {
    width: 70%;
    min-width: 75vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  ul + ul {
    margin-top: var(--space-7);
  }

  li + li {
    padding-left: var(--space-8);
    border-left: 2px solid var(--gold);
    margin-left: var(--space-8);
  }

  a {
    color: #fff;
    font-size: var(--text-1);
    transition: color 100ms ease-out;
  }

  a:hover {
    color: var(--gold);
  }

  strong {
    font-size: var(--text-2);
    font-weight: bold;
    font-style: italic;
    text-transform: uppercase;
  }
</style>
