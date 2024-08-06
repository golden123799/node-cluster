import cluster from 'cluster';
import os from 'os';
import { startServer } from './utils';

const numCpus = os.cpus().length;

if (cluster.isPrimary) {
	console.log(`Master process ${process.pid} is running`);

	for (let i = 0; i < numCpus; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`Worker process ${worker.process.pid} died. Restarting...`);
		cluster.fork();
	});
} else {
	startServer();
}