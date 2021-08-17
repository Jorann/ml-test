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

  async get31(): Promise<string> {
    const xs = tf.tensor([1, 2, 3, 4, 5, 6], [2, 3]);
    const ys = xs.add(tf.tensor([6, 5, 4, 3, 2, 1]));
    return ys.toString();
    //ys.print();
  }

  async minMaxNorm(): Promise<string> {
    const t3 = tf.tensor1d([25, 76, 4, 23, -5, 22]);
    const max = t3.max(); // 76
    const min = t3.min(); // -5

    //const calced = tf.div(tf.sub(t3, tf.min(t3)), tf.sub(t3.max(), t3.min()));
    const calced = t3.sub(min).div(max.sub(min));
    calced.print();
    return JSON.stringify(calced.dataSync());
  }

  async csvStuff(): Promise<string> {
    const data = await tf.data.csv('https://joran.org/data.csv');

    const points = data.map(
      (record: { sqft_living: number; price: number }) => ({
        x: record.sqft_living,
        y: record.price,
      }),
    );

    return JSON.stringify(await points.take(10).toArray());
  }
}
