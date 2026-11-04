const LINTER_CONFIGURATION_PATH = 'media/linter.yaml';
let linterConfiguration;
export async function fetchLinterConfiguration() {
  const linterResponse = await fetch(LINTER_CONFIGURATION_PATH);
  linterConfiguration = await linterResponse.text();
}

/**
 * Use this function in the `postProcess` option of your Respec config.
 * Example:
 *
 * ```js
 * postProcess: [processRuleBlocks],
 * ```
 *
 * It generates a list for each rule as defined in blocks. To do so, the
 * following parts need to be part of your HTML:
 *
 * ```html
 * <ul id="functionalList"></ul>
 * <ul id="technicalList"></ul>
 * ```
 *
 * Additionally, for a rule to appear in these lists, the following HTML
 * needs to be used for each rule:
 *
 * ```html
 * <div class="rule" id="/name/of/your/rule" data-type="functional/technical">
 *   <p class="rulelab">Title of your rule</p>
 * </div>
 * ```
 *
 * The `id` needs to be text that can be used in a URL. Use kebab-case and
 * `/` to separate parts. For example, the ADR core uses `/core/name-of-rule`
 * for all its rules.
 *
 * The `data-type` can be one of the following: functional, technical.
 * Use technical when a rule can be automatically checked, for example with
 * a linter. Use functional when a human needs to look at the API definition
 * or its implementation to determine whether the API satisfies the rule.
 *
 * The `rulelab` paragraph is used to generate a human-readable title. This
 * text will also be used in the lists as a summary after a clickable link
 * that points to the rule.
 */
export function processRuleBlocks(config, document, utils) {
  const functionalRules = [];
  const technicalRules = [];
  for (const rule of document.querySelectorAll('.rule')) {
    if (!rule.id) {
      utils.showError(`Missing id for rule: ${rule.outerHTML}`);
      continue;
    }
    const ruleId = rule.id;

    const ruleLabElement = rule.querySelector('.rulelab');
    ruleLabElement.innerText = `: ${ruleLabElement.innerText}`;
    const ruleLinkElement = document.createElement('a');
    ruleLinkElement.href = `#${ruleId}`;
    ruleLinkElement.innerText = ruleId;
    ruleLabElement.prepend(ruleLinkElement);

    let flagTitle;
    const flagType = rule.dataset.type;
    if (flagType === 'technical') {
      flagTitle = 'This is a technical design rule and hence should be tested automatically.';
      technicalRules.push(ruleLabElement);

      if (linterConfiguration?.includes(`#${ruleId}`)) {
        const lastDataListItem = rule.querySelector('dt:last-of-type');
        if (lastDataListItem.textContent !== 'How to test') {
          utils.showError(`Last element should be the "How to test" section. Found ${lastDataListItem.outerHTML}`);
          continue;
        }
        const howToTest = rule.querySelector('dd:last-of-type');
        howToTest.innerHTML += `This rule can be automatically checked and an example test is shown in the <a href="#:~:text=${encodeURIComponent(`#${ruleId}`).replaceAll('-', '%2D')}">linter configuration</a>.`;
      }
    } else if (flagType === 'functional') {
      flagTitle = 'This is a functional design rule and hence cannot be tested automatically.';
      functionalRules.push(ruleLabElement);
    } else {
      utils.showError(`Missing type for rule: ${ruleId}`);
      continue;
    }

    const flagElement = document.createElement('div');
    flagElement.title = flagTitle;
    flagElement.innerText = flagType;
    flagElement.classList.add('flag');
    rule.prepend(flagElement);
  }

  const designRuleId = 'design-rule-summary';
  const designRuleSummary = document.getElementById(designRuleId);

  if (designRuleSummary === null) {
    utils.showError(`Missing design summary. Ensure that an element with id "${designRuleId}" exists.`);
    return;
  }

  let ruleSummary = '';

  for (const [list, ruleType] of [[technicalRules, 'technical'], [functionalRules, 'functional']]) {
    if (list.length === 0) {
      continue;
    }

    if (ruleType === 'technical') {
      ruleSummary += 'technical rules, which should be tested automatically'
    } else {
      if (ruleSummary !== '') {
        ruleSummary += ', and '
      }
      ruleSummary += 'functional rules, which should be considered when designing and building the API'
    }

    const header = document.createElement('h3');
    header.innerText = `List of ${ruleType} rules`;
    header.id = `list-of-${ruleType}-rules`;
    designRuleSummary.append(header);

    const listElement = document.createElement('ul');

    for (const ruleLabElement of list) {
      const listItem = document.createElement('li');
      listItem.innerHTML = ruleLabElement.innerHTML;
      listElement.append(listItem);
    }

    designRuleSummary.append(listElement);
  }

  if (ruleSummary === '') {
    utils.showError('There are no rules found. Are you sure you want to generate a summary?');
    return;
  }

  designRuleSummary.prepend(document.createTextNode(`Design rules are ${ruleSummary}.`));
}

export async function initializeHighlightJSYaml() {
  //this is the function you call in 'preProcess', to load the highlighter
  const worker = await document.respec.worker;

  const action = "highlight-load-lang-self-registration";
  const langURL = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/yaml.min.js";
  const lang = "yaml";
  worker.postMessage({ action, langURL, lang });
  return new Promise(resolve => {
    worker.addEventListener("message", function listener({ data }) {
      const { action: responseAction, lang: responseLang } = data;
      if (responseAction === action && responseLang === lang) {
        worker.removeEventListener("message", listener);
        resolve();
      }
    });
  });
}

export async function highlightLinterCode(config, document) {
  //this is the function you call in 'postProcess', to load the highlighter
  const worker = await document.respec.worker;

  const action = "highlight";
  const code = linterConfiguration;
  const lang = "yaml";
  worker.postMessage({ action, code, languages: [lang] });
  return new Promise(resolve => {
    worker.addEventListener("message", function listener({ data }) {
      const { action: responseAction, language: responseLang } = data;
      if (responseAction === action && responseLang === lang) {
        worker.removeEventListener("message", listener);

        const codeElement = document.querySelector('.linter-yaml code');
        codeElement.innerHTML = data.value;
        const linkToConfiguration = document.createElement('div');
        linkToConfiguration.innerHTML = `Open the above details to inspect the linter configuration. You can also <a href="${LINTER_CONFIGURATION_PATH}">open the configuration file in separate tab</a>`
        linkToConfiguration.style.marginTop = '1em';
        document.querySelector('.linter-yaml').after(linkToConfiguration);
        resolve();
      }
    });
  });
}

