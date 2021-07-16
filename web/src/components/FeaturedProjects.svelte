<script>
  export let data = []

  const TOTAL_ROW_LENGTH = 35

  const rows = data.reduce(
    (accumulator, project) => {
      const currentRow = accumulator[accumulator.length - 1]

      const rowLength = currentRow.reduce((sum, text) => {
        return sum + text.length
      }, 0)

      if (rowLength > TOTAL_ROW_LENGTH) {
        accumulator.push([project.name])
      } else {
        currentRow.push(project.name)
      }

      return accumulator
    },
    [[]]
  )

  const projects = data.reduce((accumulator, project) => {
    accumulator[project.name] = project
    return accumulator
  }, {})
</script>

<nav>
  {#each rows as row}
    <ul>
      {#each row as project}
        <li>
          <a href="#">
            <strong>{project}</strong>
            <br />
            {projects[project].client}
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
    display: block;
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
