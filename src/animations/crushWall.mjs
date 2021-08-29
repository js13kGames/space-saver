import { genFrameAnimation } from './genFrameAnimation.mjs';

export function* crushWallAnimation() {
  const generator = genFrameAnimation(18, 0.25, (props) => {
    const { entity, frame } = props;
      switch (frame) {
        case 0:
          entity.components.add('sprite');
          entity.color = 'dark_gray';
          break;
        case 1:
          entity.color = 'light_gray';
          break;
        case 2:
          entity.color = 'green';
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
          entity.x -= 8;
          break;
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
          entity.x += 8;
          break;
          entity.color = 'light_gray';
          break;
        case 16:
          entity.color = 'dark_gray';
          break;
        case 17:
          entity.components.delete('sprite');
          break;

        default:
          // do nothing.
      }
  // first call is init.
  var { value, done } = generator.next();
  while (!done) {
    var { value, done } = generator.next();
    console.log('value', value, 'done', done);
    // yield* generator;
    const props = yield;
    console.log('props', props);
  }


  // const frameAnimation = genFrameAnimation(18, 0.25, (frame) => {
  //   console.log('genFrameAnimation callback frame', frame);
  // });
  // console.log('frameAnimation', frameAnimation);

  // for (let frameItem of genFrameAnimation(18, 0.25)) {
  //   console.log('frameItem', frameItem);
  // }

  return;

  const DURATION = 18;
  const FRAME_DELAY = 0.25;
  let frame = 0;
  let delay = 0;
  let props;

  while (frame < DURATION) {
    // YIELD
    props = yield;
    const { entity, deltaTime } = props;
    // wait until the delay is over before doing the next animation.
    if (delay > 0) {
      delay -= deltaTime;
      continue;
    }

    switch (frame) {
      case 0:
        entity.components.add('sprite');
        entity.color = 'dark_gray';
        break;
      case 1:
        entity.color = 'light_gray';
        break;
      case 2:
        entity.color = 'green';
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        entity.x -= 8;
        break;
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        entity.x += 8;
        break;
        entity.color = 'light_gray';
        break;
      case 16:
        entity.color = 'dark_gray';
        break;
      case 17:
        entity.components.delete('sprite');
        break;

      default:
        // do nothing.
    }


    frame += 1;
    // Update the delay between animation frames.
    delay = FRAME_DELAY;
  }
}
