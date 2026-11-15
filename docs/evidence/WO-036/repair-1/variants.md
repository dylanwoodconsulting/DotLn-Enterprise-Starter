# The variants measured in the repair of VER-001 F1

2026-11-15. Each rule below was measured before the repair was chosen
([WO-036-D020](../decisions.md#wo-036-d020) and [D025](../decisions.md#wo-036-d025)), on a copy of the engine exactly as VER-001
judged it, kept in session scratch, with `underSeparation` in `simulation.ts` replaced by the
function at the foot of this page and one name chosen at a time. None of it is shipped code.
The last two rows, `lim` and `free`, were measured after the repair was chosen, in answer to
meta critic 3 ([D026](../decisions.md#wo-036-d026)); their code is under
[The two forms measured afterwards](#the-two-forms-measured-afterwards).
The probes were the ones filed beside this page ([crowd-probe.ts](crowd-probe.ts)) in their
scratch form: the settling sweep over 144 crowd tunings, and near re-targets of a settled
crowd against the same units under a plain Arrive.

In the table, "late" counts re-targets on which the crowd's centre came inside the target
radius later than plain Arrive's, and "unrested" counts crowds of the 144 not at rest inside
3,600 frames. Where a row says "any crowd size", the scratch probe sampled 16 sizes: 2, 4 to
16, 18 and 20. `own` is the unit's own steering, `push` the separation push on it, `A` its
maximum acceleration.

| Name | What separation's group gives a claimed unit | Settling, of 144 | Near re-targets, twelve units at Arrive's defaults |
| --- | --- | --- | --- |
| `base` | The judged code: `push`, plus `own` eased by how hard the push opposes it, plus a match of the neighbours' mean velocity scaled the same way | 1 unrested, 0 unarrived, 54 touching frames | late in 16 of 16 directions at 1.25 to 2.5 units, by up to 3 frames |
| `v1` | The judged sum divided by what the easing left of `own` | not swept; the eight crowds tried rest | late in 14 to 16 of 16 at 1.25 units, by 1 frame; 1 of 16 at 2 units |
| `v2`, `v2b` | `own` whole, `push` divided by what the easing left; `v2b` divides the velocity match too | not swept; the eight crowds tried rest | as `v1`: 14 to 16 of 16 late at 1.25 units, by 1 frame |
| `z1` | `own` whole, the plain push pair by pair, and friction between each pair | twenty units at a slow radius of 1 never rest (338 touching frames in that crowd alone) | none late |
| `zf:8:0` | As `z1` with the friction at a fixed 8 a second | 9 unrested, 4 unarrived, 2,893 touching frames | none late |
| `z3` | `own` whole and the stiffened push, no friction | twelve units at a slow radius of 1 churn for ever, peak speed 4.7 | none late |
| `z2`, `z2:0.5`, `z2:2` | The stiffened push with friction scaled by the unit's time to target, at one, half and twice strength | twenty at a slow radius of 1 never arrive at one and at half; twelve at a time to target of 0.05 never rest at twice | `z2`: none late; the others not run |
| `zf:4`, `zf:6` | The stiffened push with friction at a fixed 4 or 6 a second | 3 and 2 unarrived, all steep crowds of twenty | not run |
| `zf:7` to `zf:10` | The same at 7, 8, 9 and 10 a second | 1, 1, 3 and 2 unrested, none unarrived | `zf:8`: none late in 7,344 at Arrive's defaults across crowds of 6, 12 and 20 |
| `zf:12`, `zf:16` | The same at 12 and 16 a second | 3 unrested each, none unarrived | not run |
| `zf:8:1:fc` | `zf:8` with what the neighbours add fading in over the first epsilon past the claim. The rule the review read. | 0 unrested, 0 unarrived, 28 touching frames | none late; crowds of 4 to 8, 15 and 16 a frame late on 1 to 149 of 13,770; Arrive at a slow radius of 3: 96 of 108 late |
| `zf:8:1:fs` | The same with the fade as one minus epsilon over the push | 1 unrested | none late at the defaults |
| `zf:8:1:y0.5`, `zf:8:1:y2` | `zf:8` with the part of `own` that opposes the push dropped as the unit's speed along the push reaches 0.5 or 2 | 144 and 106 unrested | late by tens to hundreds of frames, since the crowds were not at rest to start from |
| `zf:8:1:fc:n1` | The shipped rule with the part of `own` that opposes what the pressing neighbours are pulled by dropped, as far as they agree | 0 unrested, 0 unarrived | a crowd of two: 780 to 808 of 1,836 late, by up to 67 frames; Arrive at a slow radius of 1 to 3 as late as without it |
| `zf:8:1:fc:c1` | `zf:8:1:fc` with the unit's own steering asked without the speed it has along the push | 3 unrested, 0 unarrived, 19 touching frames | none late for any crowd size from 2 to 20; Arrive at a slow radius of 3: 24 of 108 late, by 1 frame |
| `zf:8:1:fc:c0.5` | The same with half of that speed left out | 0 unrested, 0 unarrived, 25 touching frames | Arrive at a slow radius of 3 still late on 96 of 108 |
| `zf:8:1:fc:cs2` | The same with all of that speed left out once the push reaches half the maximum acceleration, and in proportion below it. **The rule shipped.** | 0 unrested, 0 unarrived, 17 touching frames | none late for any crowd size from 2 to 20; the stopwatch credits the crowd before plain Arrive at each of VER-001's seven offsets; Arrive at a slow radius of 3: 58 of 108 late, by up to 3 frames |
| `zf:8:1:fc:cs3` | The same, whole at a third of the maximum acceleration | 0 unrested, 0 unarrived, 16 touching frames | none late for any crowd size; a slow radius of 3: 48 of 108; more overshoot and a longer time to rest after a re-target than `cs2` |
| `zf:8:1:fc:cs4` | The same, whole at a quarter | 1 unrested, 0 unarrived, 28 touching frames | none late for any crowd size; a slow radius of 3: 29 of 108 |
| `zf:8:1:fc:cs2:lim` | The shipped rule with each pair's forces scaled, alike for both units, by the smaller of the two units' room under their maximum acceleration | 7 unrested, 7 unarrived, 8,462 touching frames | not run; first frame at a slow radius of 1, sent 2 units: 18.14 along the way against plain Arrive's 20.94, where the shipped rule has 18.03 against 20.99 |
| `zf:8:1:fc:cs2:free` | The shipped rule with what the neighbours add left outside the unit's acceleration limit: the sum under separation's claim is not clipped | 0 unrested, 0 unarrived, 423 touching frames | first frame at a slow radius of 1: 20.96 against 20.96; later at 13 of the scratch scan's 26 Arrive tunings where the shipped rule is later at 9; a slow radius of 3: 96 of 108 against 58; a slow radius of 4: 44 against 1 |

The first unrested crowd of `zf:8` (twenty units, slow radius 3, time to target 1, linear
falloff) kept one unit, 0.68 from the centre, creeping at 0.02 to 0.05 with a push of 0.08
to 0.10 against an epsilon of 0.1: it crossed the claim each way for ever. The fade-in is
what `zf:8:1:fc` adds for it.

The scratch scan of Arrive's tunings behind the last two rows has 26 tunings and is not the
filed one: it leaves out the two separation thresholds and the falloff, and adds a target
radius of 0 and three pairs of tunings. At a target radius of 0 it credits arrival inside
0.05 of the objective and watches 900 frames: the shipped rule's crowd is not credited on 4 of
108 objectives that plain Arrive's units reach, `free` on 3, and the judged code is later on
19, on 8 of them not credited at all.

## The function

```ts
function underSeparation(unit: UnitState, index: number, push: Vec2, context: FrameContext) {
  // Variant c: the speed the push gives a unit is not its own, so its own steering is asked
  // what it would do without that speed.
  const carriedShare = VARIANT.includes(':cs') ? 1 : VARIANT.includes(':c') ? Number(VARIANT.split(':c')[1] || 1) : 0;
  const pushWay = normalize(push);
  // Variant cs: as c, weighted by the share of the maximum acceleration the push takes.
  const pressShare = VARIANT.includes(':cs')
    ? Math.min(1, (length(push) / unit.maxAcceleration) * Number(VARIANT.split(':cs')[1] || 1))
    : 1;
  const carriedSpeed = Math.max(0, dot(unit.velocity, pushWay)) * carriedShare * pressShare;
  const asked =
    carriedSpeed > 0
      ? {
          ...unit,
          velocity: {
            x: unit.velocity.x - pushWay.x * carriedSpeed,
            y: unit.velocity.y - pushWay.y * carriedSpeed,
          },
        }
      : unit;
  const own = unit.behaviour.priority?.order.includes('seek')
    ? seekGroupOutput(asked, index, context)
    : zero;
  const against = opposition(push, own);
  const kept = 1 - (against * length(push)) / unit.maxAcceleration;
  const eased = scale(own, kept);
  const together = neighbourVelocity(unit, index, context.state);
  const matching =
    together === null ? zero : matchVelocity(unit, together, unit.behaviour.tuning.timeToTarget);
  const limit = unit.maxAcceleration;
  if (VARIANT.startsWith('z')) {
    // Pairwise forces that cancel between the two of a pair, so they never move the crowd's centre.
    const tuning = separationOf(unit, context.state);
    const contact = 2 * unit.radius;
    const decay = limit * contact * contact;
    const atThreshold = decay / (tuning.separationThreshold * tuning.separationThreshold);
    const fixedRate = VARIANT.startsWith('zf') ? Number(VARIANT.split(':')[1]) : null;
    const stiff = VARIANT === 'z1' || VARIANT.split(':')[2] === '0' ? 0 : 1;
    const damp =
      fixedRate !== null
        ? fixedRate * unit.behaviour.tuning.timeToTarget
        : VARIANT === 'z3'
          ? 0
          : Number(VARIANT.split(':')[1] ?? 1);
    let pushes = zero;
    let damping = zero;
    const giveWay = VARIANT.includes(':n') ? Number(VARIANT.split(':n')[1]) : null;
    const pulls: Map<number, Vec2> = ((context as any).pulls ??= new Map());
    const pullOf = (other: UnitState, otherIndex: number) => {
      const known = pulls.get(otherIndex);
      if (known) return known;
      const pull = other.behaviour.priority?.order.includes('seek')
        ? seekGroupOutput(other, otherIndex, context)
        : zero;
      pulls.set(otherIndex, pull);
      return pull;
    };
    let net = zero;
    let mass = 0;
    context.state.units.forEach((other, otherIndex) => {
      if (otherIndex === index) return;
      const gap = distance(unit.position, other.position);
      if (gap >= tuning.separationThreshold || gap === 0) return;
      if (giveWay !== null) {
        const share = Math.min(
          1,
          (tuning.separationFalloff < 1.5
            ? (limit * (tuning.separationThreshold - gap)) / tuning.separationThreshold
            : Math.min(decay / (gap * gap) - atThreshold, limit)) / limit,
        );
        const pull = pullOf(other, otherIndex);
        net = add(net, scale(pull, share));
        mass += share * length(pull);
      }
      const away = normalize({
        x: unit.position.x - other.position.x,
        y: unit.position.y - other.position.y,
      });
      const strength =
        tuning.separationFalloff < 1.5
          ? (limit * (tuning.separationThreshold - gap)) / tuning.separationThreshold
          : Math.min(decay / (gap * gap) - atThreshold, limit);
      const share = strength / limit;
      const stiffened = stiff ? strength / Math.max(1 - share, 0.02) : strength;
      pushes = add(pushes, scale(away, stiffened));
      damping = add(
        damping,
        scale(
          { x: other.velocity.x - unit.velocity.x, y: other.velocity.y - unit.velocity.y },
          (damp * share) / unit.behaviour.tuning.timeToTarget,
        ),
      );
    });
    const yieldRef = VARIANT.includes(':y') ? Number(VARIANT.split(':y')[1]) : null;
    let kept = own;
    if (yieldRef !== null && length(pushes) > 0) {
      // A unit the push carries does not brake against it: the part of its own steering that
      // opposes the push fades as the unit's speed along the push grows.
      const along = normalize(pushes);
      const opposing = Math.max(0, -dot(own, along));
      const carried = Math.min(1, Math.max(0, dot(unit.velocity, along) / yieldRef));
      kept = add(own, scale(along, opposing * carried));
    }
    if (giveWay !== null && mass > 0 && length(net) > 0) {
      // A unit whose own steering pulls against what its pressing neighbours are pulled by gives
      // way to them, as far as they agree among themselves.
      const along = normalize(net);
      const agreement = length(net) / mass;
      const opposing = Math.min(0, dot(own, along));
      kept = add(kept, scale(along, -opposing * agreement * giveWay));
    }
    const epsilon = unit.behaviour.priority?.epsilon ?? 0;
    const claim = length(push);
    const fade = VARIANT.includes(':fc')
      ? Math.min(1, claim / epsilon - 1)
      : VARIANT.includes(':fs')
        ? 1 - epsilon / claim
        : 1;
    return add(kept, scale(add(pushes, damping), epsilon > 0 ? Math.max(0, fade) : 1));
  }
  const strengthen = (v: Vec2) =>
    length(v) < kept * limit ? scale(v, 1 / kept) : scale(normalize(v), limit);
  if (VARIANT === 'v1') return strengthen(add(add(push, eased), scale(matching, against)));
  if (VARIANT === 'v2')
    return add(add(scale(push, 1 / Math.max(kept, 0.02)), own), scale(matching, against));
  if (VARIANT === 'v2b')
    return add(
      add(scale(push, 1 / Math.max(kept, 0.02)), own),
      scale(matching, against / Math.max(kept, 0.02)),
    );
  return add(add(push, eased), scale(matching, against));
}
```

## The two forms measured afterwards

`free` is one change where `steeringOf` clips the claiming group's output:

```ts
const clipped =
  group === 'separation' && VARIANT.includes(':free')
    ? output.acceleration
    : clipLength(output.acceleration, unit.maxAcceleration);
```

`lim` replaces `underSeparation` with `limSteering`. For each claimed unit it finds the
largest share from 0 to 1 of what its neighbours add that keeps the sum with its own steering
inside its maximum acceleration, and each pair's force is then scaled by the smaller of the
two units' shares, so the pair's forces stay equal and opposite:

```ts
function limParts(unit: UnitState, index: number, context: FrameContext): any {
  const cache: Map<number, any> = ((context as any).lim ??= new Map());
  const known = cache.get(index);
  if (known) return known;
  const { state } = context;
  const tuning = separationOf(unit, state);
  const push = separate(unit, index, state.units, tuning);
  const epsilon = unit.behaviour.priority?.epsilon ?? 0;
  const claimedUnit =
    (unit.behaviour.priority?.order.includes('separation') ?? false) && length(push) > epsilon;
  if (!claimedUnit) {
    const parts = { claimed: false, lambda: 1, own: zero, pairs: [] };
    cache.set(index, parts);
    return parts;
  }
  const way = normalize(push);
  const pressed = Math.min(1, length(push) / (0.5 * unit.maxAcceleration));
  const carried = Math.max(0, dot(unit.velocity, way)) * pressed;
  const asked =
    carried > 0
      ? {
          ...unit,
          velocity: { x: unit.velocity.x - way.x * carried, y: unit.velocity.y - way.y * carried },
        }
      : unit;
  const own = unit.behaviour.priority?.order.includes('seek')
    ? seekGroupOutput(asked, index, context)
    : zero;
  const limit = unit.maxAcceleration;
  const contact = 2 * unit.radius;
  const decay = limit * contact * contact;
  const atThreshold = decay / (tuning.separationThreshold * tuning.separationThreshold);
  const fade = epsilon > 0 ? Math.max(0, Math.min(1, length(push) / epsilon - 1)) : 1;
  const pairs: { j: number; force: Vec2 }[] = [];
  let sum = zero;
  state.units.forEach((other, j) => {
    if (j === index) return;
    const gap = distance(unit.position, other.position);
    if (gap >= tuning.separationThreshold || gap === 0) return;
    const away = normalize({
      x: unit.position.x - other.position.x,
      y: unit.position.y - other.position.y,
    });
    const strength =
      tuning.separationFalloff < 1.5
        ? (limit * (tuning.separationThreshold - gap)) / tuning.separationThreshold
        : Math.min(decay / (gap * gap) - atThreshold, limit);
    const share = strength / limit;
    const force = scale(
      add(scale(away, strength / Math.max(1 - share, 0.02)), {
        x: (other.velocity.x - unit.velocity.x) * 8 * share,
        y: (other.velocity.y - unit.velocity.y) * 8 * share,
      }),
      fade,
    );
    pairs.push({ j, force });
    sum = add(sum, force);
  });
  let lambda = 1;
  if (length(add(own, sum)) > limit && length(sum) > 0) {
    const a = dot(sum, sum);
    const b = dot(own, sum);
    const c = dot(own, own) - limit * limit;
    lambda = Math.max(0, Math.min(1, (-b + Math.sqrt(Math.max(0, b * b - a * c))) / a));
  }
  const parts = { claimed: true, own, pairs, lambda };
  cache.set(index, parts);
  return parts;
}
function limSteering(unit: UnitState, index: number, context: FrameContext): Vec2 {
  const mine = limParts(unit, index, context);
  let total: Vec2 = mine.own;
  for (const { j, force } of mine.pairs) {
    const theirs = limParts(context.state.units[j], j, context);
    total = add(total, scale(force, Math.min(mine.lambda, theirs.lambda)));
  }
  return total;
}
```

As in the shipped rule, the fade-in is each unit's own. The form was measured as written and
not refined.
