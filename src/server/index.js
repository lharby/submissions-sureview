import express from 'express';
import path from 'path';
import cors from 'cors';
const __dirname = path.resolve();

import pool from './database.js';

import { 
  SQL_SELECT_ALL,
  SQL_SELECT_DEVICE_ID,
  SQL_SELECT_DEVICE_WITH_CAMERA,
  SQL_SELECT_DEVICES_START_WITH_FRONT,
  SQL_UPDATE_DEVICE_RECORD
} from './sql.js';

/* query 1 */
const fetchAll = () => {
  return pool.execute(SQL_SELECT_ALL);
};

/* query 2 */
const fetchDeviceID1 = () => {
  return pool.execute(SQL_SELECT_DEVICE_ID);
};

/* query 3 */
const fetchDevicesWithCameras = () => {
    return pool.execute(SQL_SELECT_DEVICE_WITH_CAMERA);
};

/* query 4 */
const fetchDeviceStartsWithFront = () => {
  return pool.execute(SQL_SELECT_DEVICES_START_WITH_FRONT);
};

/* query 5 */
const changeCameraName = () => {
  return pool.execute(SQL_UPDATE_DEVICE_RECORD);
};

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

app.post('/api/status-fixed', (req, res) => {
  const statusFixed = { 
    body: { 
      videoServerNo: 7, 
      videoAlarmID: 10
    }
  };
  res.send(statusFixed);
});

app.post('/api/status', (req, res) => {
  const status = { 
    body: { 
      videoServerNo: Math.floor(Math. random()*10) + 1, 
      videoAlarmID: Math.floor(Math. random()*10) + 1 
    }
  }
  res.send(status);
});

app.post('/api/query/1', (req, res) => {
  fetchAll().then(([rows]) => {
    const query = {
      body: {
        rows: rows
      }
    }
    res.send(query);
  });
});

app.post('/api/query/2', (req, res) => {
  fetchDeviceID1().then(([rows]) => {
    const query = {
      body: {
        rows: rows
      }
    }
    res.send(query);
  });
});

app.post('/api/query/3', (req, res) => {
  fetchDevicesWithCameras().then(([rows]) => {
    const query = {
      body: {
        rows: rows
      }
    }
    res.send(query);
  });
});

app.post('/api/query/4', (req, res) => {
  fetchDeviceStartsWithFront().then(([rows]) => {
    const query = {
      body: {
        rows: rows
      }
    }
    res.send(query);
  });
});

/*
@TODO
Modify Status.tsx to accept different
data from this request
*/
app.post('/api/query/5', () => {
  changeCameraName().then(([rows]) => {
    const query = {
      body: {
        rows: rows
      }
    }
    console.log(query);
    // res.send(query);
  });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Node: app running on http://localhost:${PORT}`);
});