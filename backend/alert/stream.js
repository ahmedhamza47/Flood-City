const {KafkaStreams} = require('kafka-streams');
const {v4: uuid} = require('uuid');

const kafkaStreams = new KafkaStreams({
  broker: 'localhost:9092',
  clientId: uuid()
});

const stream = kafkaStreams.getKStream('main');

stream
  .filter(record => {
    const data = JSON.parse(record.value);
    return data.value > data.warning_level;
  })
  .to('alert');
kafkaStreams
//   kafkaStreams.start().then(() => {
//     console.log('Kafka Streams started successfully');
//   });