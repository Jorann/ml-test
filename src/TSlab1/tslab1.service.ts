import { Injectable } from '@nestjs/common';

import * as tf from '@tensorflow/tfjs-node';
@Injectable()
export class TSLab1Service {
  async getTestString(): Promise<string> {
    const model = tf.sequential();

    model.add(
      tf.layers.dense({ units: 100, activation: 'relu', inputShape: [10] }),
    );
    model.add(tf.layers.dense({ units: 1, activation: 'linear' }));
    model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

    const xs = tf.randomNormal([100, 10]);
    const ys = tf.randomNormal([100, 1]);

    let out = {};
    await model.fit(xs, ys, {
      epochs: 100,
      callbacks: {
        onEpochEnd: (epoch, log) => {
          out = { epoch, log };
        },
      },
    });
    return JSON.stringify(out);
  }
}
