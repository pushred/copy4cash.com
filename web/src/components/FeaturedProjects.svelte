<script>
  import { onBreakpointChange } from '../theme.js'
  import Separator from './Separator.svelte'

  let sm = false
  let md = false
  let lg = false
  let xl = false

  onBreakpointChange((breakpoint) => {
    sm = breakpoint?.key === 'sm'
    md = breakpoint?.key === 'md'
    lg = breakpoint?.key === 'lg'
    xl = breakpoint?.key === 'xl'
  })

  export let data = []

  const TOTAL_ROW_LENGTH = 35

  let rows = [data.map((project) => project.name)]

  function calculateRows() {
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

  $: if (lg || xl) {
    calculateRows()
  }

  const projects = data.reduce((accumulator, project) => {
    accumulator[project.name] = project
    return accumulator
  }, {})
</script>

<svelte:window on:resize={calculateRows} />

<nav class:sm class:md class:lg class:xl>
  {#each rows as row}
    <ul>
      {#each row as project, index}
        {#if (lg || xl) && index > 0}
          <li aria-hidden>
            <Separator />
          </li>
        {/if}
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
    color: var(--blended-gold);
    font-family: var(--ui-font);
    font-size: var(--text-1);
    transition: color 100ms ease-out;
  }

  strong {
    color: var(--white);
    font-family: var(--ui-font);
    font-size: var(--text-2);
    font-weight: bold;
    text-transform: uppercase;
  }

  a:hover strong {
    color: var(--neon-green);
  }

  a:hover {
    color: var(--gold);
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

  .lg ul,
  .xl ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: var(--space-6);
  }
</style>
