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
* [ ] Add robots.txt
* [ ] Add sitemap

#### Tests

* [ ] Test for `Tile` wrap having correct borders: `first:`, `last:` style tests
* [ ] Integration or e2e for correct sorting

#### `/projects` page

* [x] Implement pagination
* [x] Add ASC DESC sort (cancelled, because after 2-3 pages updates are very tiny)
* Add `Tile` variants
  * [x] Project
  * [ ] Small
  * [ ] Extended

* [ ] Add Those `Tile` variants `Extended` and `Small` to `/projects` page

#### `/project/[owner]/repository` page

1. [ ] request single repository
2. [ ] request my stats-over-time
3. [ ] (probably unnecessary) request coingecko data
4. [ ] (probably unnecessary) request cmc data

#### `/about` page

* [ ] Add project description
* [ ] Add roadmap
* [ ] Add tech stack
* [ ] Add BE flowchart
* [ ] Add follow me section
* [ ] Prompt to add suggestions via github / twitter(x)
* [ ] Add git badges - to about or to footer (consider)?

#### `/topics` page

* [ ] TBD

#### Considerations for refactoring

* [ ] Consider refactoring Stateful Tiles Section from refs to pinia
* [ ] Consider using Nuxt UI internal layouts: `card` or `container`

## Roadmap

* [ ] Consider adding git user stats (hall of fame)
* Add other social stats
  * [ ] Reddit
  * [ ] Twitter
  * [ ] Facebook

## Commit tags

* [feature] - for full fledged feature
* [update] - update some variables, move some stuff
* [refactor] - refactoring usually means migrating from one package to another, migrating from old version to new, using different database, or using new design pattern
* [bugfix] - subj
