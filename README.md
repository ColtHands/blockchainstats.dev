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
* [ ] Add UI skeleton loading to tiles
* [ ] Slap in tracker, preferable posthog
* [ ] Implement pagination for `/projects` page `SectionTile`
* [ ] Add robots.txt
* [ ] Add sitemap

#### Tests

* [ ] Test for `Tile` wrap having correct borders: `first:`, `last:` style tests
* [ ] Integration or e2e for correct sorting

#### `/projects` page

* Add `Tile` variants
  * [x] Project
  * [ ] Small
  * [ ] Extended

* [ ] Add Those `Tile` variants `Extended` and `Small` to `/projects` page

#### `/project/[owner]/repository` page

* [ ] request coingecko data
* [ ] request cmc data
* [ ] request my stats-over-time

#### `/about` page

* [ ] Add project description
* [ ] Add roadmap
* [ ] Add tech stack
* [ ] Add BE flowchart
* [ ] Add follow me section
* [ ] Prompt to add suggestions via github / twitter(x)
* [ ] Add git badges - to about or to footer (consider)?

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
