<script>
  import { onBreakpointChange } from '../theme.js'

  let sm = false
  let md = false
  let lg = false

  onBreakpointChange((breakpoint) => {
    sm = breakpoint?.key === 'sm'
    md = breakpoint?.key === 'md'
    lg = breakpoint?.key === 'lg'
  })

  export let data = []

  const TOTAL_ROW_LENGTH = 35

  let rows = [data.map((project) => project.name)]

  $: if (lg) {
    rows = data.reduce(
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
  }

  const projects = data.reduce((accumulator, project) => {
    accumulator[project.name] = project
    return accumulator
  }, {})
</script>

<nav class:sm class:md class:lg>
  {#each rows as row}
    <ul>
      {#each row as project}
        <li>
          <a href="/{projects[project].slug?.current}">
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

  ul {
    text-align: center;
  }

  ul + ul {
    margin-top: var(--space-7);
  }

  .sm li,
  .md li {
    margin-bottom: var(--space-8);
  }

  .lg ul {
    max-width: 75vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .lg li + li {
    padding-left: var(--space-8);
    border-left: 2px solid var(--gold);
    margin-left: var(--space-8);
  }
</style>
