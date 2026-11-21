# Reading the two examples

## A card that asks you to look at itself

Imagine a card. The only thing printed on it is this sentence.

> Count the letters on this card.

We wrote the sentence for the drawing. You can try the whole example on the line above.

| What you do | What the name in the drawing means |
| --- | --- |
| Look at the beginning. You can see the five marks **C o u n t**. | **Printed marks** are the shapes you can point to one at a time. |
| Read the marks together. You recognize the word **Count** and then a six-word instruction. | **Sentence** names the marks read together as words. |
| Carry out the instruction. Which letters should you count? **On this card** sends you back to the very line you started with. | **Meaning** is what you understood the sentence to ask you to do. The return arrow shows where that understanding directs your attention. |

The six words have 5, 3, 7, 2, 4 and 4 letters, for a total of **25**. Now imagine the card says *Count the windows in this room*. You can still read the marks and understand the instruction. Your eyes go to the windows to finish the task. Changing those few words removes the return to the card. The first card illustrates how an apparent climb from marks to meaning can circle back to its starting point. The Strange loop study develops that idea using the gallery that appears inside its own picture.

## One guide, four questions

### What a real result can tell you

The executor wrote this tiny fixture for the lesson and ran it with `node --test --test-reporter=tap guide-links.test.cjs`.

```js
const { test } = require('node:test');
const { deepStrictEqual } = require('node:assert');

const guide = {
  links: ['#install', '#start'],
  headings: ['install', 'start'],
};
test('both guide links have a target', () => {
  const missing = guide.links.filter(link => !guide.headings.includes(link.slice(1)));
  deepStrictEqual(missing, []);
});
```

The runner printed `ok 1 - both guide links have a target`. The letters `o` and `k` are the first two characters. Read them in the runner’s language and they announce a pass. The number identifies the first test. The words after the dash came directly from the test name. The check asked whether both link targets existed. An outdated paragraph could sit in the guide and the test would still pass.

### How the project example differs

Imagine you are preparing a tutorial. Tomorrow its readers will follow a link to the setup guide. You revise the guide this afternoon. A checker starts following the links in the saved guide. You try to edit the guide again during that check. A guard blocks the extra edit. The links in the saved copy pass.

The four names in the drawing come from the kinds of records described in the public DotLn kit guide. The guide revision and the entries below are our invented example. [DotLn kit guide](https://github.com/DylanBWood/DotLn/blob/main/docs/KIT.md)

| What you want to know | What you would read | What it tells you here |
| --- | --- | --- |
| Did my last edit get saved? | **Hook refusal**, the guard’s record of the attempted edit | The guard blocked it while checking was underway. |
| Did the links work? | **Gate row**, the checker’s recorded result | The links passed in the saved copy. |
| What did we agree to deliver? | **Work order**, the written assignment | Revise the setup steps and check the links. A passing links row answers the second part. |
| Why do the guide first? | **Planning pass**, where related jobs were put in order | The tutorial depends on the guide, so the guide comes first. |

The earlier buttons *Attempted edit*, *Link check*, *Guide revision* and *Tutorial dependency* were short names we gave those four details. The selected buttons use the record names shown in bold. The arrows let you move from one edit to a broader question about the same afternoon. The guard did not cause the team to prioritize the guide. The team wrote that reason into its plan.

Try it the other way around. Someone tells you the links passed. Does that settle whether the new paragraph you tried to add was saved? You need the refusal to answer that. **Levels of description** gives you a way to choose the right account for the question in front of you.

## Getting a private copy of a shop app

Imagine you have changed the Pay button in an online shop. You want to see the change before shoppers do. **Checkout** is the team that builds the shop app. **Release Platform** runs the **Preview API**, a tool that starts a private copy of that app and gives you a link. The names and exchanges in this example are invented.

First you want to check that the new button appears. You ask the tool for a copy of the shop app. It returns a link. You can open it and do the check without booking time with Release Platform. This is what *as a service* means here. One team runs a tool that another team can use on its own.

Next you want to see what a shopper sees when a payment is declined. You need the shop app and a second app that pretends to be a payment provider and declines your test payment. This time the tool reports a one-app limit. The teams need to agree on how to start the two apps together, when both are ready and how to remove them after the test.

Ordinary one-app previews keep working. Release Platform publishes instructions for two apps once the new feature is in place. When another Checkout engineer can follow them, open the link, try the declined payment and remove the preview, that job can use the service too.

One of the earlier screenshots showed an arrow from Release Platform to the tool it runs. The other showed an arrow from Release Platform to Checkout while the two teams tried the new rules. The original crops omitted both requests. [The opening in the revised study](preview-service-explained-desktop.png)
