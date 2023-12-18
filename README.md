# BlockChain Developer Stats

## TODOs

### For Release

* [x] Add NuxtImg
* [x] Add fontawesome
* [x] Add NuxtUi
* [x] Add Description
* [x] Project Tile should take prop-by-prop instead of just repositories
* [x] Add sort by stars, issues, forks
* [ ] Add proxy for api requests
* [x] Add those requests as useNuxtData (or useAsyncData) idk now
* [x] Add one handler for `+` and `-` signs for `forks`, `stars` and `issues`
* [x] Add projects page
* [x] Add UI skeleton loading to tiles
* [ ] Slap in tracker, preferable posthog
* [x] Add robots.txt
  * [ ] Fix robots to allow everything
* [ ] Add sitemap

### `/index` page

* Sidebar
  * [x] Topics list
  * [ ] List of most forked repos
* [ ] Section with some extra info (probably taken from `/about`)

#### `/projects` page

* [x] Implement pagination
* [x] Add ASC DESC sort (cancelled, because after 2-3 pages updates are very tiny)
* Add `Tile` variants
  * [x] Project
  * [x] Add topics tags to tile

#### `/project/[owner]/[repository]` page

1. [x] request single repository
2. [x] request my stats-over-time
3. [ ] Bar Chart with monthly stars increase grouped by year
4. [ ] Line Chart with overall stars trend
5. [ ] Area Chart with issues
6. [ ] Area Chart with forks

#### `/about` page

* [x] Add project description
* [x] Add roadmap
* [x] Add tech stack
* [x] Add follow me section
* [x] Prompt to add suggestions via github / twitter(x)
* [ ] Add git badges - to about or to footer (consider)?

### `/topics` page

* [x] [BE] Add `get-all-topics` request (with how many repositories have that topic)
* [ ] [FE] Page with all of the `topics` _"database"_
  * [ ] Upon Clicking a topic a list of project appears
  * [ ] ?? Ability to combine topics
* [ ] [BE] Set topics as separate collection and populate it monthly

### Considerations for refactoring

* [ ] Consider refactoring Stateful Tiles Section from refs to pinia
* [ ] Consider using Nuxt UI internal layouts: `card` or `container`

### Tests

* [ ] Test for `Tile` wrap having correct borders: `first:`, `last:` style tests
* [ ] Integration or e2e for correct sorting

## Roadmap

* Add other social stats
  * [ ] Twitter
  * [ ] npm
  * [ ] Reddit
  * [ ] Facebook
* [ ] Consider adding git user/developer and their stats
* [ ] Consider to add MR and commit stats (just like git)

## Commit tags

* [feature] - for full fledged feature
* [update] - update some variables, move some stuff
* [refactor] - refactoring usually means migrating from one package to another, migrating from old version to new, using different database, or using new design pattern
* [bugfix] - subj
