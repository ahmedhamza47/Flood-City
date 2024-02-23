const { spawn } = require('child_process');

const { Client } = require('pg');
const axios = require('axios');
const fs = require('fs');


let data;
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'forecast'
});
axios.get('url')
  .then(response => {
    data = response.data;
    data.forEach(item => {
      if (item.waterLevel != null && item.warning_level !=null && item.waterLevel.value > 0 && item.waterLevel.value < 50) {
        const query = `INSERT INTO realtime (id, latitude, longitude, basin, danger_level, warning_level, datetime, value,name) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value},'${item.name}')`;
        console.log(query);
        fs.appendFile('file.sql', query + ';' + '\n', (err) => {
          if (err) {
            console.error(err);
            return;
          }

          console.log('realtime');
        });
        if (item.id == 40) {
          const query = `INSERT INTO dipayal (id, latitude, longitude, basin, danger_level, warning_level, datetime, value) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value})`;
          fs.appendFile('dipayal.sql', query + ';' + '\n', (err) => {
            if (err) {
              console.error(err);
              return;
            }

            console.log('dipayal');
          });
          const csvFilePath = '/root/myprojectdir/dipayal.csv';
          const datetime = item.waterLevel.datetime;
          const value = item.waterLevel.value;        
          const csvRow = `${datetime},${value}\n`;
          fs.appendFileSync(csvFilePath, csvRow);

        }
        if (item.id == 162) {
          const query = `INSERT INTO sanobheri (id, latitude, longitude, basin, danger_level, warning_level, datetime, value) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value})`;
          fs.appendFile('mankhola.sql', query + ';' + '\n', (err) => {
            if (err) {
              console.error(err);
              return;
            }

            console.log('mankhola');
          });
          const csvFilePath = '/root/myprojectdir/sanobheri.csv';
          const datetime = item.waterLevel.datetime;
          const value = item.waterLevel.value;        
          const csvRow = `${datetime},${value}\n`;
          fs.appendFileSync(csvFilePath, csvRow);

        }
        if (item.id == 35) {
          const query = `INSERT INTO chisapani (id, latitude, longitude, basin, danger_level, warning_level, datetime, value) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value})`;
          fs.appendFile('chisapani.sql', query + ';' + '\n', (err) => {
            if (err) {
              console.error(err);
              return;
            }

            console.log('chisapani');
          });
          const csvFilePath = '/root/myprojectdir/chisapani.csv';
          const datetime = item.waterLevel.datetime;
          const value = item.waterLevel.value;        
          const csvRow = `${datetime},${value}\n`;
          fs.appendFileSync(csvFilePath, csvRow);

        }

        if (item.id == 166) {
          const query = `INSERT INTO humla_karnali (id, latitude, longitude, basin, danger_level, warning_level, datetime, value) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value})`;
          fs.appendFile('humla_karnali.sql', query + ';' + '\n', (err) => {
            if (err) {
              console.error(err);
              return;
            }

            console.log('humla_karnali');
          });
          const csvFilePath = '/root/myprojectdir/humla_karnali.csv';
          const datetime = item.waterLevel.datetime;
          const value = item.waterLevel.value;        
          const csvRow = `${datetime},${value}\n`;
          fs.appendFileSync(csvFilePath, csvRow);

        }
        if (item.id == 4686) {
          const query = `INSERT INTO khutiya (id, latitude, longitude, basin, danger_level, warning_level, datetime, value) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value})`;
          fs.appendFile('khutiya.sql', query + ';' + '\n', (err) => {
            if (err) {
              console.error(err);
              return;
            }

            console.log('khutiya');
          });
          const csvFilePath = '/root/myprojectdir/khutiya.csv';
          const datetime = item.waterLevel.datetime;
          const value = item.waterLevel.value;        
          const csvRow = `${datetime},${value}\n`;
          fs.appendFileSync(csvFilePath, csvRow);

        }
        if (item.id == 168) {
          const query = `INSERT INTO sinja (id, latitude, longitude, basin, danger_level, warning_level, datetime, value) VALUES (${item.id}, ${item.latitude}, ${item.longitude}, '${item.basin}', ${item.danger_level}, ${item.warning_level}, '${item.waterLevel.datetime}', ${item.waterLevel.value})`;
          fs.appendFile('sinja.sql', query + ';' + '\n', (err) => {
            if (err) {
              console.error(err);
              return;
            }

            console.log('sinja');
          });
          const csvFilePath = '/root/myprojectdir/sinja.csv';
          const datetime = item.waterLevel.datetime;
          const value = item.waterLevel.value;        
          const csvRow = `${datetime},${value}\n`;
          fs.appendFileSync(csvFilePath, csvRow);

        }

      }
    });
    const script = spawn('bash', ['./importscript.sh']);

script.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

script.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

script.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


  })
  .catch(error => {
    console.error(error);

  });




