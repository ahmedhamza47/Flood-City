const axios = require('axios');

const Kafka = require('kafka-node');
const Producer = Kafka.Producer;
const client = new Kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new Producer(client);

producer.on('ready', () => {
    axios.get('http://localhost:3300/realtime')
        .then(response => {
            datae = response.data

            datae.forEach(element => {
                const payload = [{
                    topic: 'main',
                    messages: JSON.stringify(element)
                }];
                producer.send(payload, (error, result) => {
                    //   console.log(result);
                    process.exit(0);
                });
            });


        })
        .catch(error => {
            console.error(error);
        });
});

producer.on('error', error => {
    console.error(error);
});


