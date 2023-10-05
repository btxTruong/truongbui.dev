/*
build: changes that affect build components like build tool, ci pipeline, dependencies, project version, etc...
chore: changes that aren't user-facing.
enh: changes that improve a feature.
docs: changes that affect the documentation.
feat: changes that introduce a new feature.
fix: changes that patch a bug.
perf: changes which improve performance.
refactor: changes which neither fix a bug nor add a feature.
revert: changes that revert a previous commit.
style: changes that don't affect code logic, such as white-spaces, formatting, missing semi-colons.
test: changes that add missing tests or correct existing tests.
 */

module.exports = {
	extends: ['@commitlint/config-conventional']
}
